#!/usr/bin/env bash

echo Starting REPL-REPL build

set -ex

# clojure -A:cljs:figwheel:dist

clojure -A:clj:server
