// Compiled by ClojureScript 1.10.844 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__11884__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11885__i = 0, G__11885__a = new Array(arguments.length -  0);
while (G__11885__i < G__11885__a.length) {G__11885__a[G__11885__i] = arguments[G__11885__i + 0]; ++G__11885__i;}
  args = new cljs.core.IndexedSeq(G__11885__a,0,null);
} 
return G__11884__delegate.call(this,args);};
G__11884.cljs$lang$maxFixedArity = 0;
G__11884.cljs$lang$applyTo = (function (arglist__11886){
var args = cljs.core.seq(arglist__11886);
return G__11884__delegate(args);
});
G__11884.cljs$core$IFn$_invoke$arity$variadic = G__11884__delegate;
return G__11884;
})()
);

(o.error = (function() { 
var G__11887__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11888__i = 0, G__11888__a = new Array(arguments.length -  0);
while (G__11888__i < G__11888__a.length) {G__11888__a[G__11888__i] = arguments[G__11888__i + 0]; ++G__11888__i;}
  args = new cljs.core.IndexedSeq(G__11888__a,0,null);
} 
return G__11887__delegate.call(this,args);};
G__11887.cljs$lang$maxFixedArity = 0;
G__11887.cljs$lang$applyTo = (function (arglist__11889){
var args = cljs.core.seq(arglist__11889);
return G__11887__delegate(args);
});
G__11887.cljs$core$IFn$_invoke$arity$variadic = G__11887__delegate;
return G__11887;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
