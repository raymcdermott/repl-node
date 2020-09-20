(ns repl.repl.await
  (:require
    [clojure.core.async :as async]
    [repl.repl.socket-prepl :refer [init-prepl]]))

(defn fully-correlated?
  [correlated-results]
  (let [n-inputs  (count (keep :correlations correlated-results))
        n-matches (count (->> correlated-results
                              (filter #(= (:tag %) :ret))
                              (keep :message-digest)))]
    (= n-inputs n-matches)))

(defn correlate-expression
  "Find the correlation between form input string and the prepl data output"
  [correlations {:keys [expr-id] :as prepl-msg}]
  (let [match (->> correlations
                   (filter #(some #{expr-id} (map :expr-id (get % :exprs))))
                   first)]
    (merge prepl-msg (select-keys match [:message-digest]))))

(defn correlate-results
  [results prepl-output]
  (if (nil? prepl-output)
    (reduced results)
    (let [msg-correlations  (keep :correlations results)
          correlated-output (correlate-expression msg-correlations prepl-output)
          updated           (conj results correlated-output)]
      (if (fully-correlated? updated)
        (reduced updated)
        updated))))

(defn gather
  [results-ch listen-ch _send-fn]
  (let [inputs-outputs (reduce correlate-results
                               [] (repeatedly #(async/<!! listen-ch)))]
    (async/put! results-ch inputs-outputs)))

(defn async-test-prepl
  [gather-ch prepl-out-ch]
  (init-prepl {:out-ch  prepl-out-ch
               :send-fn identity
               :out-fn  (partial gather gather-ch)}))