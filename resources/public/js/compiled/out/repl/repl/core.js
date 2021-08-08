// Compiled by ClojureScript 1.10.844 {}
goog.provide('repl.repl.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('repl.repl.events');
goog.require('repl.repl.main_view');
goog.require('repl.repl.subs');
goog.require('reagent.dom');
repl.repl.core.dev_setup = (function repl$repl$core$dev_setup(){
return cljs.core.enable_console_print_BANG_.call(null);
});
repl.repl.core.mount_root = (function repl$repl$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

var el = document.getElementById("app");
reagent.dom.unmount_component_at_node.call(null,el);

return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.main_view.main_panel], null),el);
});
repl.repl.core.init = (function repl$repl$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","initialize-db","repl.repl.events/initialize-db",2040306647)], null));

repl.repl.core.dev_setup.call(null);

return repl.repl.core.mount_root.call(null);
});
goog.exportSymbol('repl.repl.core.init', repl.repl.core.init);

//# sourceMappingURL=core.js.map
