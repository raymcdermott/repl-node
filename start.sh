#!/usr/bin/env bash

set -ex

clojure -M:cljs:figwheel:dist

java -cp repl-repl.jar clojure.main -m repl.repl.http