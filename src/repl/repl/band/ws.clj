(ns repl.repl.band.ws
  (:require [clojure.core.async :refer [<! <!! >! >!! put! chan go go-loop]]
            [taoensso.encore :refer [have have?]]
            [taoensso.timbre :refer [tracef debugf infof warnf errorf]]
            [taoensso.sente.server-adapters.aleph :refer [get-sch-adapter]]
            [taoensso.sente.packers.transit :as sente-transit]
            [taoensso.sente :as sente]
            [repl.repl.band.completion :as completion]
            [repl.repl.band.socket-repl :as repl])
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

(let [packer      (sente-transit/get-transit-packer)
      chsk-server (sente/make-channel-socket-server!
                    (get-sch-adapter)
                    {:packer packer :user-id-fn ws-uid-fn})
      {:keys [ch-recv send-fn connected-uids]} chsk-server]

  (def ^:private ch-chsk ch-recv)                           ; ChannelSocket's receive channel
  (def ^:private chsk-send! send-fn)                        ; ChannelSocket's send API fn
  (def ^:private connected-uids connected-uids))            ; Watchable, read-only atom

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

;;;; REPL
(defmethod ^:private -event-msg-handler :reptile/keystrokes
  ;; Send the keystrokes to one and all
  [{:keys [?data]}]
  (let [{:keys [form prefixed-form to-complete user-name]} ?data
        completions (completion/code-completions to-complete prefixed-form)
        shared-data {:form form :user user-name :completions completions}]
    (chsk-send! :sente/all-users-without-uid [:fast-push/keystrokes shared-data])))

;; TODO prove this idea: we can update this, and then via a watcher - switch to another app dynamically
(defonce ^:private repl-socket (atom nil))
(defonce ^:private shared-repl (atom nil))

(defmethod ^:private -event-msg-handler :reptile/repl
  [{:keys [?data]}]
  (when-let [prepl (or @shared-repl (reset! shared-repl (repl/team-prepl @repl-socket)))]
    (let [input-form (:form ?data)
          response   {:prepl-response (repl/shared-eval prepl input-form)}]
      ;; Send the results to everyone
      (chsk-send! :sente/all-users-without-uid [:fast-push/eval (merge ?data response)]))))

(defn- shutdown-repl
  [repl]
  ;; TODO eventually shutdown the incoming REPL, now just shut all
  )

;;;;;;;;;;; LOGIN

;; The standard Sente approach uses Ring to authenticate but we want to use WS
(defonce ^:private connected-users (atom {}))

(add-watch connected-uids :connected-uids
           (fn [_ _ old new]
             (when (not= old new)
               (println :connected-uids new))))

(add-watch connected-users :connected-users
           (fn [_ _ old new]
             (when (not= old new)
               (let [curr-users (get-in new [:reptile :clients])]
                 (println :connected-users :state curr-users)
                 (chsk-send! :sente/all-users-without-uid [:fast-push/editors curr-users])))))

(defn- get-user-id
  [state client-id]
  (first (keep (fn [[id client]]
                 (when (= (:client-id client) client-id) id))
               (get-in state [:reptile :clients]))))

(defonce ^:private socket-connections (atom {}))

(add-watch socket-connections :socket-connections
           (fn [_ _ old new]
             (when (not= old new)
               (println "socket-connections" new))))

(defn- register-socket [state client-id]
  (let [kw-client (keyword client-id)]
    (assoc state kw-client {})))

(defn- register-socket-user [state user client-id reply-fn]
  (let [kw-client (keyword client-id)]
    (assoc state kw-client {:user user :reply-fn reply-fn})))

(defn- deregister-socket [state client-id]
  (let [kw-client (keyword client-id)]
    (dissoc state kw-client)))

(defn- register-user [state user client-id]
  (let [kw-user (keyword user)]
    (assoc-in state [:reptile :clients kw-user]
              {:client-id client-id})))

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
  (swap! socket-connections deregister-socket client-id)
  (swap! connected-users deregister-user client-id))

(defmethod ^:private -event-msg-handler :chsk/ws-ping
  [{:keys [client-id]}]
  ; maybe we kill if no ping too
  (swap! socket-connections register-socket-ping client-id))


(defonce ^:private shared-secret (atom nil))

(defn- logout [{:keys [client-id _ state]}]
  (swap! state deregister-user client-id)
  (swap! socket-connections deregister-socket client-id))

(defn- auth [{:keys [client-id ?data ?reply-fn state]}]
  (let [{:keys [user secret]} ?data]
    (cond
      (= secret @shared-secret)
      (do (swap! state register-user user client-id)
          (swap! socket-connections register-socket-user user client-id ?reply-fn)
          (?reply-fn :login-ok))

      :else
      (?reply-fn :login-failed))))

(defmethod ^:private -event-msg-handler :reptile/login
  [ev-msg]
  (auth (assoc ev-msg :state connected-users)))

(defmethod ^:private -event-msg-handler :reptile/logout
  [ev-msg]
  (logout (assoc ev-msg :state connected-users)))








