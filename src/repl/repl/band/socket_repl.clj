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

;; TODO ... poll band and enable reconnection
(defn prepl-client
  "Attaching PREPL to a given `host` and `port`"
  [host port]
  (let [host          (if (= :self host) "localhost" host)
        client        (Socket. ^String host ^Integer port)
        server-reader (LineNumberingPushbackReader. (io/reader client))
        server-writer (OutputStreamWriter. (io/output-stream client))]
    [server-reader server-writer]))

(defn default-reptile-tag-reader
  [tag val]
  {:nk-tag tag :nk-val (read-string (str val))})

(defn eval-form
  "Evaluate it using the given `repl`"
  [repl form]
  (try

    (send-code (:writer repl) form)

    (let [sentinel     ::eof
          reader-opts  {:eof sentinel :default default-reptile-tag-reader}
          repl-reader  (:reader repl)
          prepl-reader (partial read reader-opts repl-reader)]
      (loop [results [(prepl-reader)]]
        (cond
          (= sentinel (last results))
          {:tag :err :form form :ms 0 :ns "user" :val "" :err-source :prepl-eof}

          (= :ret (:tag (last results)))
          results

          :else
          (recur (conj results (prepl-reader))))))

    (catch Exception e
      {:tag :err :form form :ms 0 :ns "user" :val (pr-str e) :err-source :process-form})))

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
            {:tag :err :form repl-forms :ms 0 :ns "user" :ex-data true
             :val (pr-str {:type :reader-exception, :ex-kind :eof}) :err-source :read-forms}
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

(defn shared-prepl-server
  "Create a PREPL band and return the port on which it is available"
  [opts]
  (let [socket-opts {:port          0
                     :name          "REPtiLe band"
                     :server-daemon false
                     :accept        'clojure.core.server/io-prepl}]

    ;; A clojure.lang.DynamicClassLoader is needed to enable interactive library addition
    (try
      (let [server-opts    (merge socket-opts opts)
            current-thread (Thread/currentThread)
            cl             (.getContextClassLoader current-thread)
            _              (.setContextClassLoader current-thread (DynamicClassLoader. cl))
            server         (clj-server/start-server server-opts)]

        (.getLocalPort ^ServerSocket server))

      (catch Exception e (println (str "shared-prepl-band - exception: " (ex-data e)))))))

(defn team-prepl
  [{:keys [host port] :as prepl-opts}]

  (let [port (if (= host :self) (shared-prepl-server prepl-opts) port)
        host (if (= host :self) "localhost" host)

        [prepl-reader prepl-writer] (prepl-client host port)]
    {:reader prepl-reader :writer prepl-writer}))


;; then hook core.async

;; then make things nice
