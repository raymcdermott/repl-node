(ns repl.repl.await
  (:require
    [clojure.core.async :as async]
    [repl.repl.async-prepl :as async-prepl]))

(defn fully-correlated?
  [correlated-results]
  ;(prn :fully-correlated? correlated-results)
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
  (prn :prepl-output0 prepl-output)
  (if (nil? prepl-output)
    (reduced results)
    (let [msg-correlations  (keep :correlations results)
          correlated-output (correlate-expression msg-correlations prepl-output)
          updated           (conj results correlated-output)
          correlated?       (fully-correlated? updated)]
      ;(prn :prepl-correlated? correlated?)
      (if correlated?
        (reduced updated)
        updated))))

(defn gather
  "Called after each test to synchronously gather the results"
  [results-ch]
  (reduce correlate-results [] (repeatedly #(async/<!! results-ch))))

(defn async-test-prepl-writer
  "Returns the writer for an initialized PREPL. The results of any forms
  witten on the writer will be available on the given `results-ch`"
  [results-ch prepl-out-ch]
  (let [prepl-writer (async-prepl/init-prepl
                       {:out-ch  prepl-out-ch
                        :send-fn (partial async/put! results-ch)})]
    ;; take init evaluation results off results-ch, not relevant to clients
    (gather results-ch)
    prepl-writer))