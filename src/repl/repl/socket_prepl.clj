(ns repl.repl.socket-prepl
  (:require
    [clojure.core.async :as async]
    [clojure.core.server :refer [prepl]])
  (:import (java.io PipedReader PipedWriter Writer StringReader)
           (clojure.lang LineNumberingPushbackReader)
           (org.apache.commons.codec.binary Hex)))

(set! *warn-on-reflection* true)

(defn nk-tag-reader
  [tag val]
  {:nk-tag tag :nk-val (read-string (str val))})

(defn eval-form
  "Write `form for evaluation` using the `prepl-writer`"
  [^Writer prepl-writer ^String form]
  (.write prepl-writer form)
  (.flush prepl-writer))

(defmacro with-read-known
  "Evaluates body with *read-eval* set to a \"known\" value,
   i.e. substituting true for :unknown if necessary."
  [& body]
  `(binding [*read-eval* (if (= :unknown *read-eval*) true *read-eval*)]
     ~@body))

(defn bytes->hex
  [^bytes ba]
  (Hex/encodeHexString ba))

(defn digest
  [s]
  (let [md5 (java.security.MessageDigest/getInstance "MD5")]
    (-> (.digest md5 (.getBytes ^String s))
        bytes->hex)))

(defn message->structured-forms
  "Produce a map of expression(s) in string `s` that can be read. Any read failure throws"
  [s]
  (let [EOF    (Object.)
        reader (LineNumberingPushbackReader. (StringReader. s))
        msg    {:message-digest (digest s)
                :message        s}]
    (reduce (fn [results [form expr-str]]
              (if (identical? form EOF)
                (reduced results)
                (update results
                        :exprs conj {:expr-id  (digest expr-str)
                                     :expr-str expr-str})))
            msg (repeatedly #(with-read-known (read+string reader false EOF))))))

(defn- ex->data
  [ex phase]
  (assoc (Throwable->map ex) :phase phase))

;; TODO -- how to make eval cancellable?
;; idea ...
;; keep a separate PREPL that is given successful evals
;; then one can always interrupt a running prepl thread
;; to keep the session going, swap in the standby ...
;; and then feed the history into a new standby

(defn shared-eval
  "Evaluate the form(s) provided in the string `input-string` using the given `prepl-writer`"
  [out-channel prepl-writer {:keys [form] :as message-data}]
  (try
    (when-let [forms (message->structured-forms form)]
      (async/put! out-channel (merge message-data {:correlations forms}))
      (doall (map (partial eval-form prepl-writer)
                  (map :expr-str (reverse (:exprs forms))))))
    (catch Exception e
      [{:tag  :err :message-digest (digest form) :ex-data (ex->data e :eval-forms)
        :form form :ms 0 :ns "not-known" :val (ex-message e)}])))

(defn emit
  [out-channel out-map]
  (let [lock        (Object.)
        d           (digest (:form out-map))
        message-map (assoc out-map :expr-id d)]
    (locking lock
      (async/put!
        out-channel
        (if-not (#{:ret :tap} (:tag message-map))
          out-map
          (try
            (assoc message-map :val (pr-str (:val message-map)))
            (catch Throwable ex (assoc message-map
                                  :val (ex->data ex :print-eval-result) :exception true))))))))

(defn ^Writer async-prepl
  "Create a prepl that will output results to out-ch.
  Returns a Writer that can be used to write forms for evaluation."
  [out-ch]
  (let [pipe   (PipedWriter.)
        reader (LineNumberingPushbackReader. (PipedReader. pipe))]
    (async/thread (prepl reader (partial emit out-ch)))
    pipe))

(defn prepl-listen
  "Obtain results from `listen-ch` and send them on via `send-fn`"
  [listen-ch send-fn]
  (async/go-loop []
    (send-fn (async/<! listen-ch))
    (recur)))

(comment
  (defn run-cmds
    [writer]
    ;; TODO: prevent this from being sent by users!!
    (.write writer ":repl/quit\n"))
  )

(def repl-requires
  ["(require '[clojure.repl :refer (source apropos dir pst doc find-doc)])"
   "(require '[clojure.java.javadoc :refer (javadoc)])"
   "(require '[clojure.pprint :refer (pp pprint)])"
   "(require '[clj-deps.core :refer (add-lib)])"])

;; TODO spec ... out-ch and send-fn are required
(defn ^Writer init-prepl
  [{:keys [out-ch requires out-fn send-fn]
    :or   {requires repl-requires}}]
  (let [prepl-writer (async-prepl out-ch)]
    (doall (map (partial shared-eval out-ch prepl-writer)
                (map #(assoc {} :form % :message-id (digest %)) requires)))
    (if (and out-fn send-fn)
      (out-fn out-ch send-fn)
      (prepl-listen out-ch send-fn))
    prepl-writer))

