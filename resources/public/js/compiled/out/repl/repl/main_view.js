// Compiled by ClojureScript 1.10.844 {}
goog.provide('repl.repl.main_view');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('repl.repl.subs');
goog.require('repl.repl.views.login');
goog.require('repl.repl.views.editor');
repl.repl.main_view.main_panel = (function repl$repl$main_view$main_panel(){
var logged_in_user = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.subs","logged-in-user","repl.repl.subs/logged-in-user",-923125079)], null)));
if(cljs.core.not.call(null,logged_in_user)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.login.authenticate], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.editor.main_panels,logged_in_user], null);
}
});

//# sourceMappingURL=main_view.js.map
