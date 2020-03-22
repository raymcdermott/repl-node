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
            [repl.repl.band.team :as team]
            [repl.repl.band.names :as names]
            [repl.repl.band.completion :as completion])
  (:import (java.util UUID)))

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

#_(defmethod ^:private -event-msg-handler :reptile/doc-hint
    [{:keys [?data]}]
    (let [{:keys [doc-ns doc-symbol]} ?data
          doc         (completion/code-documentation doc-ns doc-symbol)
          shared-data {:user user-name :?????? completions}]
      (doseq [uid (:any @connected-uids)]
        (chsk-send! uid [:fast-push/keystrokes shared-data]))))

;; TODO prove this idea: we can update this, and then via a watcher - switch to another app dynamically
(defonce ^:private repl-socket (atom nil))

(defonce ^:private team-id (atom "apropos"))

;;;;;;;;;;; LOGIN

;(s/def ::user
;  (s/keys :req [::user-name ::uid]))

(defn >send
  "Find the team with the `team-name` and send `msg` to each member"
  [team-name msg]
  (let [users (::team/team-members (team/safe-find-team! team-name))]
    (doall
      (map (fn [user]
             (println :user user :msg msg)
             (chsk-send! (::team/uid user) msg)) users))))

(defn fetch-users
  [team connected-users]
  ;; Filter clients by team
  (get-in connected-users [:reptile :clients]))

;; Sente uses Ring by default but we use WS to track users
(defonce ^:private connected-users (atom {}))

;; TODO drop this ... base it on teams instead
#_(add-watch connected-users :connected-users
             (fn [_ _ old new]
               (when (not= old new)
                 (println :connected-users new))))

(defn- get-user-id
  [state client-id]
  (first (keep (fn [[id client]]
                 (when (= (:client-id client) client-id) id))
               (get-in state [:reptile :clients]))))

(defonce ^:private socket-connections (atom {}))

;; TODO ... restore if we need to do the ping timeout thing
#_(add-watch socket-connections :socket-connections
             (fn [_ _ old new]
               (when (not= old new)
                 (println "socket-connections" new))))

;; REPL
(defmethod ^:private -event-msg-handler :reptile/keystrokes
  ;; Send the keystrokes to the team
  [{:keys [?data]}]
  (when-let [team (team/safe-find-team! (:team-name ?data))]
    (let [{:keys [form prefixed-form to-complete user-name]} ?data
          completions (completion/code-completions to-complete prefixed-form)
          shared-data {:form form :user user-name :completions completions}]
      (>send (::team/team-name team) [:reptile/keystrokes shared-data]))))

(defmethod ^:private -event-msg-handler :reptile/repl
  [{:keys [?data]}]
  (when-let [team (team/safe-find-team! (:team-name ?data))]
    (let [input-form (:form ?data)
          prepl      (::team/prepl team)
          result     {:prepl-response (repl/shared-eval prepl input-form)}
          response   (merge ?data result)]
      (>send (::team/team-name team) [:reptile/eval response]))))

(defn- shutdown-repl
  [repl]
  ;; TODO eventually shutdown the incoming REPL, now just shut all
  )

(defn- register-socket [state client-id]
  (let [kw-client (keyword client-id)]
    (assoc state kw-client {})))

;; TODO tweak dropping teams, etc...
(defn- register-user [state team user uid]
  (let [team-name    (::team/team-name team)
        team-user    {::team/user-name user ::team/uid uid}
        updated-team (team/set-team-user! team-name team-user)]
    (>send team-name [:reptile/editors (::team/team-members updated-team)])

    ;; TODO don't need this ... should trigger change event on team
    (assoc-in state [:reptile :clients (keyword user)]
              {:network-user-id uid :team-name team-name})))

(defn- deregister-user [state client-id]
  (let [user (get-user-id state client-id)]
    (update-in state [:reptile :clients] dissoc user)))

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

(defn- logout [{:keys [client-id _ state]}]
  (swap! state deregister-user client-id))

(defn- auth [{:keys [?data ?reply-fn state]}]
  (let [{:keys [user network-user-id secret team-name]} ?data
        team (team/find-team team-name)]
    (if (some #{secret} (::team/secrets team))
      (do (swap! state register-user team user network-user-id)
          (?reply-fn :login-ok))
      (?reply-fn :login-failed))))

(defmethod ^:private -event-msg-handler :reptile/login
  [ev-msg]
  (auth (assoc ev-msg :state connected-users)))

;; TODO there are some 'obscurity' protections now (WS, transit, data string)
;; TODO add more once we get going ...
;; TODO drop idle teams, keep active teams to N
;; TODO check if a teams absorbs all the RAM / CPU  / IO
(defn- team-random-data
  "Generate a team name, secret and prepl"
  [{:keys [?reply-fn ?data]}]
  (let [team-name   (names/gen-name)
        team-secret (str (UUID/randomUUID))
        team-prepl  (repl/team-prepl {:host :self :port 0})]
    (cond
      (or (team/team-name-taken? team-name) (not (string? (first ?data))))
      (?reply-fn :team-random-data-failed)

      :else
      (do (team/set-team! {::team/team-name team-name
                           ::team/secrets   #{team-secret}
                           ::team/prepl     team-prepl})
          (?reply-fn {:team-name team-name :team-secret team-secret})))))

(defmethod ^:private -event-msg-handler :reptile/team-random-data
  [ev-msg]
  (team-random-data ev-msg))

;; TODO
(defmethod ^:private -event-msg-handler :reptile/logout
  [ev-msg]
  (logout (assoc ev-msg :state connected-users)))

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
                            (.close ^java.io.Closeable server)
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
  [reptile-port reptile-secret & args]
  (let [{:keys [server-port secret]}
        (if (= (count args) 4)
          (let [port        (Integer/parseInt reptile-port)
                socket-host (first args)
                socket-port (last args)]
            (reset! repl-socket {:host socket-host :port socket-port})
            {:server-port port :secret reptile-secret})
          (do
            (reset! repl-socket {:host :self :port 0})
            {:server-port reptile-port :secret reptile-secret}))]

    (reset! shared-secret secret)

    ; Need DynamicClassLoader to support add-lib
    (let [current-thread (Thread/currentThread)
          cl             (.getContextClassLoader current-thread)]
      (.setContextClassLoader current-thread (clojure.lang.DynamicClassLoader. cl))
      (start! server-port))

    ;; Return all material needed to restart the app
    ;{:band-port band-port :secret secret :repl-socket @repl-socket}

    ))
