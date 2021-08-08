(ns repl.repl.async-prepl
  (:require
    [clojure.core.async :as async]
    [clojure.core.server :refer [start-server]])
  (:import (java.io StringReader OutputStreamWriter BufferedReader InputStreamReader)
           (clojure.lang LineNumberingPushbackReader DynamicClassLoader)
           (org.apache.commons.codec.binary Hex)
           (java.security MessageDigest)
           (java.net ServerSocket Socket)))

(set! *warn-on-reflection* true)

(defn nk-tag-reader
  [tag val]
  {:nk-tag tag :nk-val (read-string (str val))})

(defn write-form
  "Write `form` for evaluation in the PREPL using the `writer`"
  [writer form]
  (binding [*out*              writer
            *flush-on-newline* true]
    (prn form)))

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
  [^String s]
  (when s
    (let [md5 (MessageDigest/getInstance "MD5")]
      (->> (.getBytes s)
           (.digest md5)
           bytes->hex))))

(defn message->forms
  "Produce a map of expression(s) in string `s` that can be read. Any read failure throws"
  [s]
  (let [EOF    (Object.)
        reader (LineNumberingPushbackReader. (StringReader. s))]
    (reduce
      (fn [forms [form _]]
        (if (identical? form EOF)
          (reduced forms)
          (conj forms form)))
      [] (repeatedly #(with-read-known (read+string reader false EOF))))))

(defn- ex->data
  [ex phase]
  (assoc (Throwable->map ex) :phase phase))

;; TODO -- how to make eval cancellable?
;; idea ...
;; keep a separate PREPL that is given successful evals
;; then one can always interrupt a running prepl thread
;; to keep the session going, swap in the standby ...
;; and then feed the history into a new standby
;; or make a list of prepls with ALL evaluated states
;; with branching of history supported :)

(defn shared-eval
  "Evaluate the form(s) provided in the string `form` using the given `writer`"
  [{:keys [out-ch reader writer]} {:keys [form user] :as message-data}]
  (try
    (let [forms        (message->forms form)
          form-count   (count forms)
          default-data {:ns "user", :ms 0 :tag :ret :val "nil" :user user :input form}]
      (if-not (seq forms)
        (async/put! out-ch (merge message-data default-data))
        (let [_sent (doall (map (partial write-form writer) forms))
              EOF   (Object.)
              rd-fn #(with-read-known (read reader false EOF))]
          (loop [output-map    (rd-fn)
                 ret-tag-count 0]
            (let [out-map       (assoc output-map :user user :input form)
                  ret-tag-count (if (= :ret (:tag output-map))
                                  (inc ret-tag-count)
                                  ret-tag-count)]
              (async/put! out-ch out-map)
              (when-not (= form-count ret-tag-count)
                (recur (rd-fn)
                       ret-tag-count)))))))
    (catch Throwable ex
      (async/put! out-ch (assoc message-data
                           :exception true :ns "user" :user user
                           :ms 0 :tag :ret :val (ex->data ex :eval-forms))))))

(defn shared-prepl-server
  "Create a PREPL socket-server and return the port on which it is available"
  [opts]
  (let [socket-opts    (merge {:port          0
                               :name          "repl-node"
                               :server-daemon false
                               :accept        'clojure.core.server/io-prepl}
                              opts)
        current-thread (Thread/currentThread)
        cl             (.getContextClassLoader current-thread)]
    (.setContextClassLoader current-thread (DynamicClassLoader. cl))
    (.getLocalPort ^ServerSocket (start-server socket-opts))))

(defn prepl-client
  "Attaching to a PREPL on a given `port`"
  [port]
  (let [client (Socket. "localhost" ^long port)
        reader (-> client .getInputStream InputStreamReader.
                   BufferedReader. LineNumberingPushbackReader.)
        writer (-> client .getOutputStream OutputStreamWriter.)]
    {:reader reader
     :writer writer}))

(defn shared-prepl
  ([]
   (shared-prepl {}))
  ([opts]
   (prepl-client (shared-prepl-server opts))))

(def repl-requires
  ["(require '[clojure.repl :refer [source apropos dir pst doc find-doc]])"
   "(require '[clojure.java.javadoc :refer [javadoc]])"
   "(require '[clojure.pprint :refer [pp pprint]])"
   "(require '[clj-deps.core :refer [add-lib]])"])

(defn init-prepl
  [{:keys [out-ch requires]
    :or   {requires repl-requires}
    :as   opts}]
  (let [prepl-opts (assoc (shared-prepl) :out-ch out-ch)
        digested   (map #(assoc {} :form % :message-id (digest %)) requires)]
    (doall (map (partial shared-eval prepl-opts) digested))
    (merge opts prepl-opts)))

(comment
  (defn run-cmds
    [writer]
    ;; TODO: use this as a .close option
    ;; TODO: prevent this from being sent by users!!
    (.write writer ":repl/quit\n"))
  )
