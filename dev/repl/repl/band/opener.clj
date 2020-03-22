(ns repl.repl.band.opener
  (:use [repl.repl.band.reload-server]))

;------------------- ************* -------------------
;
; Bootstrap when the namespace is loaded
;
;------------------- ************* -------------------

(boot-and-watch-fs! "src" 56665 "warm-blooded-lizards-rock")

