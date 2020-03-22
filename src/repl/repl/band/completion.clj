(ns repl.repl.band.completion
  (:require [compliment.core :as compliment]))

; TODO learn the lib in detail

(defn code-documentation
  [doc-ns doc-symbol]
  (let [doc   (compliment/documentation doc-symbol doc-ns)
        lines (-> doc
                  clojure.string/split-lines)
        args  (-> lines
                  second
                  (clojure.string/replace-first "(" "")
                  (clojure.string/replace-first ")" ""))
        docs  (apply str (drop 2 lines))]
    {:docs docs :args args}))

;; memoize the calls to documentation

(defn code-completions
  [prefix-token form-with-prefix]
  (when prefix-token
    (->> {:context form-with-prefix}
         (compliment/completions prefix-token)
         (remove #(= (:type %) :namespace))                 ; make this an optional filter?
         (map
           (fn [{:keys [candidate type ns] :as completion}]
             (if (= type :function)
               (merge completion (code-documentation ns candidate))
               completion))))))