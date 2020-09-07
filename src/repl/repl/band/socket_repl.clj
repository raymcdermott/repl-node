(ns repl.repl.band.socket-repl
  (:require
    [clojure.java.io :as io]
    [clojure.core.server :as clj-server])
  (:import
    (java.net Socket ServerSocket)
    (java.io OutputStreamWriter StringReader)
    (clojure.lang LineNumberingPushbackReader DynamicClassLoader)))

(set! *warn-on-reflection* true)

(defn send-code
  [code-writer clj-code]
  (binding [*out*              code-writer
            *flush-on-newline* true]
    (prn clj-code)))

(defn nk-tag-reader
  [tag val]
  {:nk-tag tag :nk-val (read-string (str val))})

(defn eval-form
  "Evaluate `form` using the given `prepl` map"
  [{:keys [prepl-writer prepl-reader]} form]
  (try
    (send-code prepl-writer form)

    (let [EOF           ::eof
          reader-opts   {:eof EOF :default nk-tag-reader}
          prepl-read-fn (partial read reader-opts prepl-reader)]
      (loop [results [(prepl-read-fn)]]
        (cond
          (= EOF (last results))
          {:tag  :err :err-source :prepl-eof
           :form form :ms 0 :ns "user" :val ""}

          (= :ret (:tag (last results)))
          results

          :else
          (recur (conj results (prepl-read-fn))))))

    (catch Exception e
      {:tag  :err :err-source :eval-form
       :form form :ms 0 :ns "user" :val (Throwable->map e)})))

(defmacro with-read-known
  "Evaluates body with *read-eval* set to a \"known\" value,
   i.e. substituting true for :unknown if necessary."
  [& body]
  `(binding [*read-eval* (if (= :unknown *read-eval*) true *read-eval*)]
     ~@body))

(defn- split-multi-forms
  "Reads expressions in str. Returns a list of [form string]"
  [str]
  (let [EOF    (Object.)
        reader (LineNumberingPushbackReader. (StringReader. str))]
    (loop [form (with-read-known (read reader false EOF))
           result []]
      (if (identical? form EOF)
        (or (seq result) {:tag :ret :empty true :form str :ms 0 :ns "user" :val "nil"})
        (recur (with-read-known (read reader false EOF))
               (conj result form))))))

(defn shared-eval
  "Evaluate the form(s) provided in the string `input-string` using the given `repl`"
  [repl input-string]
  (try
    (let [expanded-forms (split-multi-forms input-string)]
      (if (map? expanded-forms)
        [expanded-forms]                                    ; empty input
        (flatten (map (partial eval-form repl) expanded-forms))))
    (catch Exception e
      [{:tag :err :form input-string :ms 0 :ns "user" :ex-data (Throwable->map e)
        :val (ex-message e) :err-source :read-forms}])))

(defn prepl-client
  "Attaching to a PREPL on a given `port`"
  [port]
  (let [client       (Socket. "localhost" ^Integer port)
        prepl-reader (LineNumberingPushbackReader. (io/reader client))
        prepl-writer (OutputStreamWriter. (io/output-stream client))]
    {:prepl-reader prepl-reader :prepl-writer prepl-writer}))

;; NOTE: DynamicClassLoader support addlib

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
    (.getLocalPort ^ServerSocket (clj-server/start-server socket-opts))))

(defn shared-prepl
  ([]
   (shared-prepl {}))
  ([opts]
   (-> opts shared-prepl-server prepl-client)))

(def repl-requires
  ["(require '[clojure.repl :refer (source apropos dir pst doc find-doc)])"
   "(require '[clojure.java.javadoc :refer (javadoc)])"
   "(require '[clojure.pprint :refer (pp pprint)])"
   "(require '[clj-deps.core :refer (add-lib)])"])

(defn init-prepl [{:keys [server-opts requires]
                   :or   {server-opts {} requires repl-requires}}]
  (let [p (shared-prepl server-opts)]
    (doall (map (partial shared-eval p) requires))
    p))