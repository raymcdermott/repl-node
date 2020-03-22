(ns repl.repl.band.reload-server
  (:require [repl.repl.band.http :as http]
            [clojure-watch.core :refer [start-watch]]
            [clojure.java.io :as io]))

(defn start-server
  [port secret socket-host socket-port]
  (let [current-thread (Thread/currentThread)
        cl             (.getContextClassLoader current-thread)] ; DynamicClassLoader supports add-lib
    (.setContextClassLoader current-thread (clojure.lang.DynamicClassLoader. cl))
    (http/start-reptile-server port secret socket-host socket-port)))

(defn absolute-path
  [path]
  (.getCanonicalPath (io/file path)))

(defn boot-and-watch-fs!
  ([path port secret]
   (boot-and-watch-fs! path port secret :self 0))
  ([path port secret socket-host socket-port]
   (start-watch
     [{:path        (absolute-path path)
       :event-types [:create :modify :delete]
       :bootstrap   (fn [_]
                      (start-server port secret socket-host socket-port))
       :callback    (fn [_ filename]
                      (when-not (.isDirectory (io/file filename))
                        (http/stop!)
                        (load-file (absolute-path (str path "/repl/repl/band/names.clj")))
                        (load-file (absolute-path (str path "/repl/repl/band/team.clj")))
                        (load-file (absolute-path (str path "/repl/repl/band/completion.clj")))
                        (load-file (absolute-path (str path "/repl/repl/band/socket_repl.clj")))
                        (load-file (absolute-path (str path "/repl/repl/band/http.clj")))
                        (start-server port secret socket-host socket-port)))
       :options     {:recursive true}}])))
