#!/usr/bin/env bash

set -x

clojure -M:cljs:figwheel:dist && clojure -M:clj:server
