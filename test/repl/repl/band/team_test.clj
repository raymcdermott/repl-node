(ns repl.repl.band.team-test
  (:require [clojure.test :refer :all]
            [clojure.core.async :as async]
            [repl.repl.band.team :as team]
            [repl.repl.band.socket-repl :as repl])
  (:import (java.util UUID)))

;; Use with-redefs instead
(defn clean-teams [f]
  (team/reset-teams!)
  (try (f)
       (finally
         (team/reset-teams!))))

(use-fixtures :each clean-teams)

(defn- rand-name
  ([] (rand-name "x"))
  ([prefix] (name (gensym (str (UUID/randomUUID) prefix)))))

(deftest ^:team-tests team-naming-test
  (testing "Testing team name availability"
    (let [n0 (rand-name)
          t1 #::team{:team-name n0}]
      (is (false? (team/team-name-taken? n0)))
      (is (= t1 (team/set-team! t1)))
      (is (true? (team/team-name-taken? n0))))))

(deftest ^:team-tests team-setup-test
  (testing "Testing creation of users and adding users to team"
    (let [t1 #::team{:team-name (rand-name)}
          t2 #::team{:team-name (rand-name) :team-members #{}}
          t3 #::team{:team-name (rand-name) :team-members #{} :prepl nil}
          t4 #::team{:team-name (rand-name) :team-members #{} :prepl nil :secrets #{(rand-name)}}]
      (is (= t1 (team/set-team! t1)))
      (is (= t2 (team/set-team! t2)))
      (is (= t3 (team/set-team! t3)))
      (is (= t4 (team/set-team! t4))))))

(deftest ^:team-tests team-mod-test
  (testing "Testing creation of users and adding users to team"
    (let [n       (rand-name)
          s0      (rand-name)
          s1      (rand-name)
          sr-opts {:host :self :port 0}
          prepl   (repl/team-prepl sr-opts)
          t       #::team{:team-name n :team-members #{} :prepl prepl :secrets #{s0}}]
      (is (= t (team/set-team! t)))
      (is (= #{s0 s1} (::team/secrets (team/set-team-secret! n s1))))
      (is (= prepl (::team/prepl (team/set-team-prepl! n prepl)))))))

(deftest ^:team-tests team-members-test
  (testing "Testing creation of users and adding users to team"
    (let [n   (rand-name)
          un0 (rand-name "u0")
          un1 (rand-name "u1")
          t   #::team{:team-name n :team-members #{} :prepl nil :secrets #{(rand-name)}}
          u0  {::user-name un0 ::client {::client-id (str "c0" n) ::reply-fn #(-> nil)}}
          u1  {::user-name un1 ::client {::client-id (str "c1" n) ::reply-fn #(-> nil)}}]
      (is (= t (team/set-team! t)))
      (is (= #{u0} (::team/team-members (team/set-team-user! n u0))))
      (is (= #{u0 u1} (::team/team-members (team/set-team-user! n u1)))))))




