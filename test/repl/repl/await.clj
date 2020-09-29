(ns repl.repl.await
  (:require
    [clojure.core.async :as async]
    [repl.repl.async-prepl :as async-prepl]))

(defn correlate-results
  [tag-count results prepl-output]
  (if (nil? prepl-output)                                   ; edge case
    (reduced results)
    (let [updated       (conj results prepl-output)
          ret-tag-count (count (filter #(= (:tag %) :ret) updated))
          tags-matched? (= ret-tag-count tag-count)]
      (if tags-matched?
        (reduced updated)
        updated))))

(defn gather
  "Called after each test to synchronously gather the results"
  ([channel]
   (gather channel 1))
  ([channel tag-count]
   (reduce (partial correlate-results tag-count)
           [] (repeatedly #(async/<!! channel)))))

(defn async-test-prepl
  "Returns the writer for an initialized PREPL. The results of any forms
  witten on the writer will be available on the given `results-ch`"
  [out-ch]
  (let [prepl-opts (async-prepl/init-prepl {:out-ch out-ch})]
    ;; take init evaluation results off out-ch, not relevant to clients
    (gather out-ch 4)
    prepl-opts))