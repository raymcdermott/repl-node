(ns repl.repl.band.team
  (:require [clojure.spec.alpha :as s]
            [clojure.test.check.generators]
            [clojure.spec.gen.alpha :as gen]
            [clojure.core.async :as async]
            [clojure.edn :as edn]
            [clojure.java.io :as io :refer [make-parents]])
  (:import (java.io File)))

;; Specs - general

(s/def ::non-empty-string? (s/and string? #(seq %)))

;; Specs - domain

(s/def ::uid ::non-empty-string?)
(s/def ::user-name ::non-empty-string?)

(s/def ::user
  (s/keys :req [::user-name ::uid]))

(s/def ::secret ::non-empty-string?)

(s/def ::secrets (s/coll-of ::secret :distinct true))

;; TBD
(s/def ::prepl any?)

(s/def ::team-members (s/coll-of ::user :distinct true))

;; the fact that we can't just use 'name' in different contexts
;; is why spec needs 'select'
(s/def ::team-name ::non-empty-string?)

(s/def ::team
  (s/keys :req [::team-name
                ::team-members
                ::prepl
                ::secrets]))

(s/def ::teams (s/coll-of ::team :distinct true))

(defn- ensure-file
  "Ensure a file exists. When it does not, create it and any directories as needed.
   The default contents is the empty string.
   An optional `default-data` value can be passed"
  ([file-name]
   (ensure-file file-name ""))
  ([file-name default-data]
   (if (.exists ^File (io/as-file file-name))
     file-name
     (do (make-parents file-name)
         (spit file-name default-data)
         file-name))))

;; This allows reply-fn (and maybe PREPLs later) to be persisted and read back.
;; Maybe we need some logic later that sees these nk-tags and
;; cleans out orphaned functions / PREPLs
(defn team-reader
  [tag val]
  {:nk-tag tag
   :nk-val (read-string (str val))})

;; The :nk-tags could help us to drop orhpaned data
;; TODO walk the EDN and drop orphaned clients / PREPLs
(defn- read-teams
  "Obtain the team data as EDN."
  [team-file]
  (edn/read-string {:default team-reader} (slurp team-file)))

(def ^:private team-file (ensure-file "db/teams" {}))
(def ^:private teams (atom (read-teams team-file)))

#_(add-watch teams :persist-team-changes
           (fn [_ _ old new]
             (when (not= old new)
               (println :teams new)
               (spit team-file new))))

(defn team-name-taken?
  "Is the `team-name` taken?"
  [team-name]
  (contains? @teams (keyword team-name)))

(defn reset-teams!
  []
  (reset! teams {}))

;; TODO send change event to team members
(defn set-team!
  "Add team data to the team database. Any same-named team data will be replaced
   The persisted team is returned"
  [team]
  (when-let [team-name (keyword (::team-name team))]
    (swap! teams assoc team-name team)
    (get @teams team-name)))

(defn find-team
  "The team is returned"
  [team-name]
  (get @teams (keyword team-name)))

(defn safe-find-team!
  "The team is returned or an exception is thrown if team does not exist"
  [team-name]
  (or (get @teams (keyword team-name))
      (throw (ex-info "Team not found" {:team-name team-name}))))

(defn set-team-user!
  "Add the given `user` to the set of ::team-members on the existing team `team-name`.
   Any same-named ::user data will be replaced."
  [team-name user]
  (when-let [found-team (safe-find-team! team-name)]
    (set-team!
      (assoc found-team ::team-members (conj (::team-members found-team) user)))))

(defn set-team-prepl!
  "Set the given `prepl` as the ::prepl on the existing team `team-name`.
   Any existing ::prepl will be replaced."
  [team-name prepl]
  (when-let [found-team (safe-find-team! team-name)]
    (set-team! (assoc found-team ::prepl prepl))))

(defn set-team-secret!
  "Add the given `secret` to the ::secret set for an existing team `team-name`."
  [team-name secret]
  (when-let [found-team (safe-find-team! team-name)]
    (set-team!
      (assoc found-team ::secrets (conj (::secrets found-team) secret)))))











