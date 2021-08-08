#!/usr/bin/env bash

echo Starting REPL-REPL build

set -ex

echo | clojure -M:clj

echo | clojure -A:clj

clojure -A:figwheel

clojure -M:figwheel

clojure -A:cljs:figwheel:dist

clojure -M:cljs:figwheel:dist

clojure -M:clj:server
