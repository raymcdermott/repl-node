#!/usr/bin/env bash

set -ex

clojure -X:uberjar :jar repl-repl.jar :main-class repl.repl.http :aliases '[:clj]'