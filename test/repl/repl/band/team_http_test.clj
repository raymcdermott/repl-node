(ns repl.repl.band.team-http-test
  (:require [clojure.test :refer :all]
            [clojure.core.async :as async]
            [repl.repl.band.team-http :as team-http]
            [repl.repl.band.socket-repl :as repl])
  (:import (java.util UUID)))

(defn test-server [port f]
  (team-http/start! port)
  (try
    (f)
    (finally
      (team-http/stop!))))

(def test-port 1234)
(def test-base-url (str "http://localhost:" test-port "/chsk"))

(use-fixtures :once (partial test-server test-port))

#_(defn- n-rands
    [n]
    (sort (take n (shuffle (range 2048 (* 5 2048))))))

(defn- rand-name
  ([] (rand-name "x"))
  ([prefix] (name (gensym (str (UUID/randomUUID) prefix)))))

(deftest ^:http-team-tests one-team-test
  (testing "Start and connect to > 1 socket band"
    (let [s           (rand-name)
          sr-opts     {:host :self :port 0}
          prepl       (repl/team-prepl sr-opts)]

      ;; start a socket-band

      )))

















