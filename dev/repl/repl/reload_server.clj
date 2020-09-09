(ns repl.repl.reload-server
  (:require [repl.repl.http :as http]
            [clojure-watch.core :refer [start-watch]]
            [clojure.java.io :as io])
  (:import (clojure.lang DynamicClassLoader)))

;; DynamicClassLoader to support add-lib

(defn start-server
  [port secret]
  (let [current-thread (Thread/currentThread)
        cl             (.getContextClassLoader current-thread)]
    (.setContextClassLoader current-thread (DynamicClassLoader. cl))
    (http/start-reptile-server port secret)))

(defn absolute-path
  [path]
  (.getCanonicalPath (io/file path)))

(defn boot-and-watch-fs!
  [path port secret]
  (start-watch
    [{:path        (absolute-path path)
      :event-types [:create :modify :delete]
      :bootstrap   (fn [_]
                     (start-server port secret))
      :callback    (fn [_ filename]
                     (when-not (.isDirectory (io/file filename))
                       (http/stop!)
                       (load-file (absolute-path (str path "/repl/repl/socket_prepl.clj")))
                       (load-file (absolute-path (str path "/repl/repl/http.clj")))
                       (start-server port secret)))
      :options     {:recursive true}}]))
