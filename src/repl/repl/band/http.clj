(ns repl.repl.band.http
  (:require
    [aleph.http :as aleph]
    [aleph.netty :as netty]
    [compojure.core :refer [defroutes GET POST]]
    [compojure.route :as route]
    [repl.repl.band.socket-repl :as repl]
    [repl.repl.user :as user-specs]
    [ring.middleware.defaults]
    [taoensso.sente :as sente]
    [taoensso.sente.packers.transit :as sente-transit]
    [taoensso.sente.server-adapters.aleph :refer [get-sch-adapter]]
    [taoensso.timbre :refer [debugf infof]])
  (:import (java.util UUID)
           (clojure.lang DynamicClassLoader)
           (java.io Closeable)))

(set! *warn-on-reflection* true)

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
                    ;; prefer CORS & Strict cookies
                    {:csrf-token-fn (fn [_] true)
                     :packer        packer
                     :user-id-fn    ws-uid-fn})
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
; Dispatch on event-id
(defmulti ^:private -event-msg-handler
          "Multimethod to handle Sente `event-msg`s"
          :id)

; Handle event-msgs on a single thread
(defn- event-msg-handler
  "Wraps `-event-msg-handler` with logging, error catching, etc."
  [ev-msg]
  (-event-msg-handler ev-msg))

; Default/fallback case (no other matching handler)
(defmethod ^:private -event-msg-handler :default
  [{:keys [event ?reply-fn]}]
  (debugf "Unhandled event: %s" event)
  (when ?reply-fn
    (?reply-fn {:unmatched-event-as-echoed-from-from-server event})))

(defmethod ^:private -event-msg-handler :example/toggle-broadcast
  [{:keys [?reply-fn]}]
  (let [loop-enabled? (swap! broadcast-enabled?_ not)]
    (?reply-fn loop-enabled?)))

;;;; LOGIN

;; Sente uses Ring by default but we use WS to track users
(defonce ^:private connected-users (atom {}))
(defonce ^:private node-prepl (atom (repl/shared-prepl)))

(defn >send
  "Send `msg` to each member"
  [msg]
  (let [uids (user-specs/get-uids @connected-users)]
    (doall (map #(chsk-send! % msg) uids))))

;; Note: CLIENT-ID = UID

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
(defmethod ^:private -event-msg-handler :repl-repl/keystrokes
  ;; Send the keystrokes to the team
  [{:keys [?data]}]
  (>send [:repl-repl/keystrokes ?data]))

;; TODO also have the user name of the eval request
;; makes it easier to show who did what
(defmethod ^:private -event-msg-handler :repl-repl/eval
  [{:keys [?data]}]
  (println :eval :data ?data)

  (when-not @node-prepl                                     ;; Create on first use
    (reset! node-prepl (repl/init-prepl {})))

  (let [input-form (:form ?data)
        result     {:prepl-response (repl/shared-eval @node-prepl input-form)}
        response   (merge ?data result)]
    (>send [:repl-repl/eval response])))

(defn- register-socket [state client-id]
  (assoc state (keyword client-id) {}))

;; TODO: Bring back the notion of a team to act as a barrier to entry

(defn- register-user [login-user]
  (swap! connected-users #(user-specs/+user % login-user))
  (>send [:repl-repl/users @connected-users]))

(defn- deregister-user [user]
  (swap! connected-users #(user-specs/<-user (::user-specs/name user) %))
  (>send [:repl-repl/users @connected-users]))

; the dropping thing needs to be re-thought, maybe via core.async timeouts
(defn- register-socket-ping [state client-id]
  (let [kw-client (keyword client-id)]
    (assoc-in state [kw-client :ping] (System/currentTimeMillis))))

(defmethod ^:private -event-msg-handler :chsk/uidport-open
  [{:keys [client-id]}]
  (swap! socket-connections register-socket client-id))

(defmethod ^:private -event-msg-handler :chsk/uidport-close
  [_])

(defmethod ^:private -event-msg-handler :chsk/ws-ping
  [{:keys [client-id]}]
  ; maybe we kill if no ping too
  (swap! socket-connections register-socket-ping client-id))

(defonce ^:private shared-secret (atom nil))

(defn- logout [{:keys [?data]}]
  (deregister-user ?data))

;; TODO what are the barriers?
(defn- login [{:keys [?data ?reply-fn]}]
  ;; check team secret here
  (if (register-user ?data)
    (?reply-fn :login-ok)
    (?reply-fn :login-failed)))

(defmethod ^:private -event-msg-handler :repl-repl/login
  [ev-msg]
  (login ev-msg))

(defmethod ^:private -event-msg-handler :repl-repl/logout
  [ev-msg]
  (logout ev-msg))

;; TODO drop the team name messages (that's for the team node)
(defmethod ^:private -event-msg-handler :repl-repl/team-random-data
  [{:keys [?reply-fn]}]
  (println :team-random-data)
  (?reply-fn {:team-name "apropos" :team-secret @shared-secret}))

;;;; Sente event router (our `event-msg-handler` loop)

(defonce router_ (atom nil))

(defn- stop-router! []
  (when-let [stop-fn @router_] (stop-fn)))

(defn- start-router! []
  (stop-router!)
  (reset! router_ (sente/start-server-chsk-router!
                    ch-chsk event-msg-handler)))

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
                         [(netty/port server)
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

(defn start-reptile-server
  ([secret]
   (start-reptile-server secret "56665"))
  ([secret port]
   (reset! shared-secret secret)
   (let [port           (Integer/parseInt port)
         current-thread (Thread/currentThread)
         classloader    (.getContextClassLoader current-thread)]
     ; Need DynamicClassLoader to support add-lib
     (.setContextClassLoader current-thread (DynamicClassLoader. classloader))
     (start! port))))

(defn -main [& _args]
  (let [port   (or (System/getenv "PORT") "56665")
        secret (or (System/getenv "TEAM_SECRET") "4Pr0p05-50P0RP4-4pr0p0s-50p0rp4")]
    (start-reptile-server secret port)))