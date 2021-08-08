#!/usr/bin/env bash

echo Starting REPL-REPL build

set -x

clojure -M:cljs:figwheel:dist && clojure -M:clj:server
