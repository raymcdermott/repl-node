(ns repl.repl.band.socket-repl
  (:require
    [clojure.java.io :as io]
    [clojure.core.server :as clj-server])
  (:import
    (java.net Socket ServerSocket)
    (java.io OutputStreamWriter StringReader PushbackReader)
    (clojure.lang LineNumberingPushbackReader DynamicClassLoader)))

(defn send-code
  [code-writer clj-code]
  (binding [*out*              code-writer
            *flush-on-newline* true]
    (prn clj-code)))

(defn default-reptile-tag-reader
  [tag val]
  {:nk-tag tag :nk-val (read-string (str val))})

(defn eval-form
  "Evaluate `form` using the given `prepl` map"
  [{:keys [prepl-writer prepl-reader]} form]
  (try

    (send-code prepl-writer form)

    (let [sentinel      ::eof
          reader-opts   {:eof sentinel :default default-reptile-tag-reader}
          prepl-read-fn (partial read reader-opts prepl-reader)]
      (loop [results [(prepl-read-fn)]]
        (cond
          (= sentinel (last results))
          {:tag        :err :form form :ms 0 :ns "user" :val ""
           :err-source :prepl-eof}

          (= :ret (:tag (last results)))
          results

          :else
          (recur (conj results (prepl-read-fn))))))

    (catch Exception e
      {:tag        :err :form form :ms 0 :ns "user" :val (pr-str e)
       :err-source :process-form})))

(defn read-forms
  "Read the string in the REPL buffer to obtain all forms (rather than just the first)"
  [repl-forms]
  (try
    (let [pbr         (PushbackReader. (StringReader. repl-forms))
          sentinel    ::eof
          reader-opts {:eof sentinel :default default-reptile-tag-reader}
          form-reader (partial read reader-opts pbr)]
      (loop [data-read (form-reader)
             result    []]
        (if (= data-read sentinel)
          (if (empty? result)
            {:tag        :err :form repl-forms :ms 0 :ns "user" :ex-data true
             :val        (pr-str {:type :reader-exception, :ex-kind :eof})
             :err-source :read-forms}
            result)
          (recur (form-reader)
                 (conj result data-read)))))
    (catch Exception e
      (let [msg-data   (ex-data e)
            msg-string (.getMessage e)]
        {:tag :err :form repl-forms :ms 0 :ns "user" :ex-data (map? msg-data)
         :val (if msg-data (pr-str msg-data) msg-string) :err-source :read-forms}))))

(defn shared-eval
  "Evaluate the form(s) provided in the string `forms-str` using the given `repl`"
  [repl forms-str]
  (let [expanded-forms (read-forms forms-str)]
    (if (map? expanded-forms)                               ; error map
      [expanded-forms]
      (flatten (map (partial eval-form repl) expanded-forms)))))

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


;; then hook core.async

;; then make things nice
