#!/usr/bin/env bash

echo Starting REPL-REPL build

set -ex

clojure -M:cljs:figwheel:dist

clojure -M:clj:server
