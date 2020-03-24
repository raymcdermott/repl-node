(ns repl.repl.band.http
  (:require [ring.middleware.defaults]
            [compojure.core :refer [defroutes GET POST]]
            [compojure.route :as route]
            [clojure.set :refer [map-invert]]
            [clojure.core.async :refer [<! <!! >! >!! put! chan go go-loop]]
            [aleph.http :as aleph]
            [taoensso.encore :refer [have have?]]
            [taoensso.timbre :refer [tracef debugf infof warnf errorf]]
            [taoensso.sente.server-adapters.aleph :refer [get-sch-adapter]]
            [taoensso.sente.packers.transit :as sente-transit]
            [taoensso.sente :as sente]
            [repl.repl.band.socket-repl :as repl]
            [repl.repl.band.completion :as completion]
            [clojure.spec.alpha :as s])
  (:import (java.util UUID)
           (clojure.lang DynamicClassLoader)
           (java.io Closeable)))

; TODO: move to a mesg per client model (not broadcast on uid)
; TODO: then kill clients that don't ack

;; (timbre/set-level! :trace) ; Uncomment for more logging
(reset! sente/debug-mode?_ false)                           ; Uncomment for extra debug info

;;;; Define our Sente channel socket (chsk) band

(defn- ws-uid-fn
  "Create a UUID per connection that can be used as a key for pushing data"
  [_]
  (str (UUID/randomUUID)))

(let [;; Serialization format, must use same val for client + band:
      packer      (sente-transit/get-transit-packer)
      chsk-server (sente/make-channel-socket-server!
                    (get-sch-adapter)
                    {:packer packer :user-id-fn ws-uid-fn})
      {:keys [ch-recv send-fn connected-uids ajax-post-fn ajax-get-or-ws-handshake-fn]} chsk-server]

  (def ^:private ring-ajax-post ajax-post-fn)
  (def ^:private ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ^:private ch-chsk ch-recv)                           ; ChannelSocket's receive channel
  (def ^:private chsk-send! send-fn)                        ; ChannelSocket's send API fn
  (def ^:private connected-uids connected-uids))            ; Watchable, read-only atom

;;;; Ring handlers
(defroutes ^:private ring-routes
           (GET "/chsk" ring-req (ring-ajax-get-or-ws-handshake ring-req))
           (POST "/chsk" ring-req (ring-ajax-post ring-req))
           (route/files "/" {:root "resources/public"})
           (route/not-found "<h1>Page not found</h1>"))

(def ^:private main-ring-handler
  (ring.middleware.defaults/wrap-defaults
    ring-routes ring.middleware.defaults/site-defaults))

(defonce ^:private broadcast-enabled?_ (atom true))

;;;; Sente event handlers
(defmulti ^:private -event-msg-handler
          "Multimethod to handle Sente `event-msg`s"
          :id)                                              ; Dispatch on event-id

(defn- event-msg-handler
  "Wraps `-event-msg-handler` with logging, error catching, etc."
  [ev-msg]
  (-event-msg-handler ev-msg))                              ; Handle event-msgs on a single thread

(defmethod ^:private -event-msg-handler :default            ; Default/fallback case (no other matching handler)
  [{:keys [event ?reply-fn]}]
  (debugf "Unhandled event: %s" event)
  (when ?reply-fn
    (?reply-fn {:unmatched-event-as-echoed-from-from-server event})))

(defmethod ^:private -event-msg-handler :example/toggle-broadcast
  [{:keys [?reply-fn]}]
  (let [loop-enabled? (swap! broadcast-enabled?_ not)]
    (?reply-fn loop-enabled?)))

;;;;;;;;;;; LOGIN

(s/def ::client-id string?)

(s/def ::connected-user
  (s/keys :req [::client-id]))

(s/def ::user
  (s/merge ::connected-user
           (s/keys :req [::user-name ::uid])))

(s/def ::users
  (s/coll-of ::user :kind :map))


;; Sente uses Ring by default but we use WS to track users
(defonce ^:private connected-users (atom []))
(defonce ^:private node-prepl (atom nil))

(defn >send
  "Send `msg` to each member"
  [msg]
  (doall (map (fn [user]
                (println :user user :msg msg)
                (chsk-send! (::uid user) msg)) @connected-users)))

;; Debug
(add-watch connected-uids :connected-uids
           (fn [_ _ old new]
             (when (not= old new)
               (println :connected-uids new))))

;; Debug
(add-watch connected-users :connected-users
           (fn [_ _ old new]
             (when (not= old new)
               (println :connected-users new))))

(defonce ^:private socket-connections (atom {}))

;; REPL
(defmethod ^:private -event-msg-handler :reptile/keystrokes
  ;; Send the keystrokes to the team
  [{:keys [?data]}]
  (let [{:keys [form prefixed-form to-complete user-name]} ?data
        completions (completion/code-completions to-complete prefixed-form)
        shared-data {:form form :user user-name :completions completions}]
    (>send [:reptile/keystrokes shared-data])))

(defmethod ^:private -event-msg-handler :reptile/repl
  [{:keys [?data]}]
  (if-not @node-prepl                                       ;; Create on first use
    (reset! node-prepl (repl/shared-prepl)))

  (let [input-form (:form ?data)
        result     {:prepl-response (repl/shared-eval @node-prepl input-form)}
        response   (merge ?data result)]
    (>send [:reptile/eval response])))

(defn- register-socket [state client-id]
  (let [kw-client (keyword client-id)]
    (assoc state kw-client {})))

(defn- register-user [user uid]
  (swap! connected-users conj {::user-name user ::uid uid})
  (>send [:reptile/editors @connected-users]))

(defn- deregister-user [client-id]
  (swap! @connected-users dissoc client-id))

; the dropping thing needs to be re-thought, maybe via core.async timeouts
(defn- register-socket-ping [state client-id]
  (let [kw-client (keyword client-id)]
    (assoc-in state [kw-client :ping] (System/currentTimeMillis))))

(defmethod ^:private -event-msg-handler :chsk/uidport-open
  [{:keys [client-id]}]
  (swap! socket-connections register-socket client-id))

(defmethod ^:private -event-msg-handler :chsk/uidport-close
  [{:keys [client-id]}]
  (swap! connected-users deregister-user client-id))

(defmethod ^:private -event-msg-handler :chsk/ws-ping
  [{:keys [client-id]}]
  ; maybe we kill if no ping too
  (swap! socket-connections register-socket-ping client-id))

(defonce ^:private shared-secret (atom nil))

(defn- logout [{:keys [client-id _]}]
  (deregister-user client-id))

(defn- login [{:keys [?data ?reply-fn]}]
  (let [{:keys [user network-user-id secret]} ?data]
    (if (= secret @shared-secret)
      (do (register-user user network-user-id)
          (?reply-fn :login-ok))
      (?reply-fn :login-failed))))

(defmethod ^:private -event-msg-handler :reptile/login
  [{:keys [?data] :as ev-msg}]
  (println :login :?data ?data)
  (login ev-msg))

;; TODO check contents of the message
(defmethod ^:private -event-msg-handler :reptile/logout
  [ev-msg]
  (logout ev-msg))

(defmethod ^:private -event-msg-handler :reptile/team-random-data
  [{:keys [?reply-fn] :as ev-msg}]

  (let [{:keys [uid client-id ?data]} ev-msg]
    (println :team-random-data :uid uid)
    (println :team-random-data :client-id client-id)
    (println :team-random-data :?data ?data))

  (?reply-fn {:team-name "apropos" :team-secret @shared-secret}))

;;;; Sente event router (our `event-msg-handler` loop)

(defonce router_ (atom nil))

(defn- stop-router! []
  (when-let [stop-fn @router_] (stop-fn)))

(defn- start-router! []
  (stop-router!)
  (reset! router_ (sente/start-server-chsk-router! ch-chsk event-msg-handler)))

;;;; Init stuff

(defonce ^:private web-server_ (atom nil))

(defn- stop-web-server!
  []
  (when-let [stop-fn @web-server_] (stop-fn)))

(defn- start-web-server!
  [& [port]]
  (let [port         (or port 0)                            ; 0 => Choose any available port
        ring-handler (var main-ring-handler)
        [port stop-fn] (let [server (aleph/start-server ring-handler {:port port})
                             p      (promise)]
                         (future @p)                        ; Workaround for Ref. https://goo.gl/kLvced
                         [(aleph.netty/port server)
                          (fn []
                            (.close ^Closeable server)
                            (deliver p nil))])
        uri          (format "http://localhost:%s/" port)]

    (infof "Web server on URL is `%s`" uri)
    (reset! web-server_ stop-fn)))

(defn stop!
  []
  (stop-router!)
  (stop-web-server!))

(defn- start!
  [port]
  (start-router!)
  (start-web-server! port))

;; TODO have a default port
(defn start-reptile-server
  [reptile-port reptile-secret]
  (reset! shared-secret reptile-secret)
  (let [port (Integer/parseInt reptile-port)]
    ; Need DynamicClassLoader to support add-lib
    (let [current-thread (Thread/currentThread)
          cl             (.getContextClassLoader current-thread)]
      (.setContextClassLoader current-thread (DynamicClassLoader. cl))
      (start! port))))
