#!/usr/bin/env bash

set -ex

clojure -A:cljs:figwheel:dist

java -cp repl-repl.jar clojure.main -m repl.repl.http