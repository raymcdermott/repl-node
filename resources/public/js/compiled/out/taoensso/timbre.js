// Compiled by ClojureScript 1.10.844 {}
goog.provide('taoensso.timbre');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.i18n.DateTimeFormat');
goog.require('taoensso.encore');
goog.require('taoensso.timbre.appenders.core');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(126),(2)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.126);
}
/**
 * Controls (:timestamp_ data)
 */
taoensso.timbre.default_timestamp_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"iso8601","iso8601",609352650)], null);
/**
 * Default (fn [data]) -> string output fn.
 *  Use`(partial default-output-fn <opts-map>)` to modify default opts.
 */
taoensso.timbre.default_output_fn = (function taoensso$timbre$default_output_fn(var_args){
var G__22374 = arguments.length;
switch (G__22374) {
case 1:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1 = (function (data){
return taoensso.timbre.default_output_fn.call(null,null,data);
}));

(taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2 = (function (opts,data){
var map__22375 = opts;
var map__22375__$1 = cljs.core.__destructure_map.call(null,map__22375);
var no_stacktrace_QMARK_ = cljs.core.get.call(null,map__22375__$1,new cljs.core.Keyword(null,"no-stacktrace?","no-stacktrace?",1701072694));
var stacktrace_fonts = cljs.core.get.call(null,map__22375__$1,new cljs.core.Keyword(null,"stacktrace-fonts","stacktrace-fonts",830799382));
var map__22376 = data;
var map__22376__$1 = cljs.core.__destructure_map.call(null,map__22376);
var level = cljs.core.get.call(null,map__22376__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.call(null,map__22376__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.call(null,map__22376__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.call(null,map__22376__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.call(null,map__22376__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.call(null,map__22376__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.call(null,map__22376__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.call(null,map__22376__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [(function (){var temp__5753__auto__ = cljs.core.force.call(null,timestamp_);
if(cljs.core.truth_(temp__5753__auto__)){
var ts = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)," "].join('');
} else {
return null;
}
})(),clojure.string.upper_case.call(null,cljs.core.name.call(null,level))," ","[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var or__4160__auto____$1 = _QMARK_file;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return "?";
}
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = _QMARK_line;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "?";
}
})()),"] - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force.call(null,msg_)),(cljs.core.truth_(no_stacktrace_QMARK_)?null:(function (){var temp__5753__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5753__auto__)){
var err = temp__5753__auto__;
return [taoensso.encore.system_newline,cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.timbre.stacktrace.call(null,err,opts))].join('');
} else {
return null;
}
})())].join('');
}));

(taoensso.timbre.default_output_fn.cljs$lang$maxFixedArity = 2);


taoensso.timbre.println_appender = taoensso.timbre.appenders.core.println_appender;
taoensso.timbre.console_appender = taoensso.timbre.appenders.core.console_appender;
/**
 * Default/example Timbre `*config*` value:
 * 
 *  {:min-level :debug #_[["taoensso.*" :error] ["*" :debug]]
 *   :ns-filter #{"*"} #_{:deny #{"taoensso.*"} :allow #{"*"}}
 * 
 *   :middleware [] ; (fns [appender-data]) -> ?data, applied left->right
 * 
 *   :timestamp-opts default-timestamp-opts ; {:pattern _ :locale _ :timezone _}
 *   :output-fn      default-output-fn ; (fn [appender-data]) -> string
 * 
 *   :appenders
 *   #?(:clj
 *      {:println (println-appender {:stream :auto})
 *       ;; :spit (spit-appender    {:fname "./timbre-spit.log"})
 *       }
 * 
 *      :cljs
 *      (if (exists? js/window)
 *        {:console (console-appender {})}
 *        {:println (println-appender {})}))}
 * 
 *  See `*config*` for more info.
 */
taoensso.timbre.default_config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-level","min-level",1634684919),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"ns-filter","ns-filter",108598448),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["*",null], null), null),new cljs.core.Keyword(null,"middleware","middleware",1462115504),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"timestamp-opts","timestamp-opts",-1359534807),taoensso.timbre.default_timestamp_opts,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),taoensso.timbre.default_output_fn,new cljs.core.Keyword(null,"appenders","appenders",1245583998),(((typeof window !== 'undefined'))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"console","console",1228072057),taoensso.timbre.console_appender.call(null,cljs.core.PersistentArrayMap.EMPTY)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"println","println",1920840330),taoensso.timbre.println_appender.call(null,cljs.core.PersistentArrayMap.EMPTY)], null))], null);
if((typeof taoensso !== 'undefined') && (typeof taoensso.timbre !== 'undefined') && (typeof taoensso.timbre._STAR_config_STAR_ !== 'undefined')){
} else {
/**
 * This map controls all Timbre behaviour including:
 *  - When to log (via level and namespace filtering)
 *  - How  to log (which appenders to use)
 *  - What to log (config to control how data sent to appenders
 *                 will be formatted to output string)
 * 
 *   See `default-config` for default value (and example config).
 * 
 *   Modify this config with `binding`, `alter-var-root`, or with utils:
 *     `set-level!`,         `with-level`,
 *    `set-config!`,        `with-config`,
 *  `merge-config!`, `with-merged-config`.
 * 
 *   MAIN OPTIONS
 * 
 *  :min-level
 *    Logging will occur only if a logging call's level is >= this
 *    min-level. Possible values, in order:
 * 
 *      :trace  = level 0
 *      :debug  = level 1 ; Default min-level
 *      :info   = level 2
 *      :warn   = level 3
 *      :error  = level 4 ; Error type
 *      :fatal  = level 5 ; Error type
 *      :report = level 6 ; High general-purpose (non-error) type
 * 
 *    It's also possible to set the min-level based on the namespace
 *    by providing a vector that maps `ns-pattern`s to min-levels, e.g.:
 *    `[[#{"taoensso.*"} :error] ... [{"*"} :debug]]`.
 * 
 *    Example `ns-pattern`s:
 *      #{}, "*", "foo.bar", "foo.bar.*", #{"foo" "bar.*"},
 *      {:allow #{"foo" "bar.*"} :deny #{"foo.*.bar.*"}}.
 * 
 *  :ns-filter
 *    Logging will occur only if a logging call's namespace is permitted
 *    by this ns-filter. Possible values:
 * 
 *      - Arbitrary (fn may-log-ns? [ns]) predicate fn.
 *      - An `ns-pattern` (see :min-level docs above).
 * 
 *    Useful for turning off logging in noisy libraries, etc.
 * 
 *  :middleware
 *    Vector of simple (fn [appender-data]) -> ?new-data fns (applied left->right)
 *    that transform the data map dispatched to appender fns. If any middleware
 *    returns nil, NO dispatch will occur (i.e. the event will be filtered).
 * 
 *    Useful for layering advanced functionality. Similar to Ring middleware.
 * 
 *  :timestamp-opts ; Config map, see `default-timestamp-opts`
 *  :output-fn      ; (fn [appender-data]) -> string, see `default-output-fn`
 * 
 *  :appenders ; {<appender-id> <appender-map>}
 * 
 *    Where each appender-map has keys:
 *      :enabled?        ; Must be truthy to log
 *      :min-level       ; Optional *additional* appender-specific min-level
 *      :ns-filter       ; Optional *additional* appender-specific ns-filter
 * 
 *      :async?          ; Dispatch using agent? Useful for slow appenders (clj only)
 *      :rate-limit      ; [[<ncalls-limit> <window-msecs>] ...], or nil
 *                       ; Appender will noop after exceeding given maximum number
 *                       ; of calls within given rolling window/s.
 *                       ; e.g. [[100 (encore/ms :mins 1)] [1000 (encore/ms :hours 1)]]
 *                       ; will limit noop after:
 *                       ;   - >100  calls in 1 rolling minute, or
 *                       ;   - >1000 calls in 1 rolling hour
 * 
 *      :output-fn       ; Optional override for inherited (fn [appender-data]) -> string
 *      :timestamp-opts  ; Optional override for inherited config map
 *      :fn              ; (fn [appender-data]) -> side-effects, with keys described below
 * 
 *   APPENDER DATA
 *  An appender's fn takes a single data map with keys:
 *    :config          ; Entire active config map
 *    :appender-id     ; Id of appender currently dispatching
 *    :appender        ; Entire map of appender currently dispatching
 *    :instant         ; Platform date (java.util.Date or js/Date)
 *    :level           ; Call's level keyword (e.g. :info) (>= active min-level)
 *    :error-level?    ; Is level e/o #{:error :fatal}?
 *    :?ns-str         ; String,  or nil
 *    :?file           ; String,  or nil
 *    :?line           ; Integer, or nil ; Waiting on CLJ-865
 *    :?err            ; First-arg platform error, or nil
 *    :?meta           ; First-arg map when it has ^:meta metadata, used as a
 *                       way of passing advanced per-call options to appenders
 *    :vargs           ; Vector of raw args provided to logging call
 *    :output_         ; Forceable - final formatted output string created
 *                     ; by calling (output-fn <this-data-map>)
 *    :msg_            ; Forceable - args as a string
 *    :timestamp_      ; Forceable - string
 *    :hostname_       ; Forceable - string (clj only)
 *    :output-fn       ; (fn [data]) -> formatted output string
 *                     ; (see `default-output-fn` for details)
 *    :context         ; `*context*` value at log time (see `with-context`)
 *    :spying?         ; Is call occuring via the `spy` macro?
 * 
 *    **NB** - any keys not specifically documented here should be
 *    considered private / subject to change without notice.
 * 
 *   COMPILE-TIME LEVEL/NS ELISION
 *  To control :min-level and :ns-filter at compile-time, use:
 * 
 *    - `taoensso.timbre.min-level.edn`  JVM property (read as edn)
 *    - `taoensso.timbre.ns-pattern.edn` JVM property (read as edn)
 * 
 *    - `TAOENSSO_TIMBRE_MIN_LEVEL_EDN`  env var      (read as edn)
 *    - `TAOENSSO_TIMBRE_NS_PATTERN_EDN` env var      (read as edn)
 */
taoensso.timbre._STAR_config_STAR_ = taoensso.timbre.default_config;
}
var ret__4820__auto___22382 = (function (){
taoensso.timbre.with_config = (function taoensso$timbre$with_config(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22383 = arguments.length;
var i__4772__auto___22384 = (0);
while(true){
if((i__4772__auto___22384 < len__4771__auto___22383)){
args__4777__auto__.push((arguments[i__4772__auto___22384]));

var G__22385 = (i__4772__auto___22384 + (1));
i__4772__auto___22384 = G__22385;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_config.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(taoensso.timbre.with_config.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,config,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,config,null,(1),null)))))),null,(1),null)),body)));
}));

(taoensso.timbre.with_config.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_config.cljs$lang$applyTo = (function (seq22378){
var G__22379 = cljs.core.first.call(null,seq22378);
var seq22378__$1 = cljs.core.next.call(null,seq22378);
var G__22380 = cljs.core.first.call(null,seq22378__$1);
var seq22378__$2 = cljs.core.next.call(null,seq22378__$1);
var G__22381 = cljs.core.first.call(null,seq22378__$2);
var seq22378__$3 = cljs.core.next.call(null,seq22378__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22379,G__22380,G__22381,seq22378__$3);
}));

return null;
})()
;
(taoensso.timbre.with_config.cljs$lang$macro = true);

var ret__4820__auto___22390 = (function (){
taoensso.timbre.with_merged_config = (function taoensso$timbre$with_merged_config(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22391 = arguments.length;
var i__4772__auto___22392 = (0);
while(true){
if((i__4772__auto___22392 < len__4771__auto___22391)){
args__4777__auto__.push((arguments[i__4772__auto___22392]));

var G__22393 = (i__4772__auto___22392 + (1));
i__4772__auto___22392 = G__22393;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_merged_config.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(taoensso.timbre.with_merged_config.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,config,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","nested-merge","taoensso.encore/nested-merge",-258675759,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,config,null,(1),null))))),null,(1),null)))))),null,(1),null)),body)));
}));

(taoensso.timbre.with_merged_config.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_merged_config.cljs$lang$applyTo = (function (seq22386){
var G__22387 = cljs.core.first.call(null,seq22386);
var seq22386__$1 = cljs.core.next.call(null,seq22386);
var G__22388 = cljs.core.first.call(null,seq22386__$1);
var seq22386__$2 = cljs.core.next.call(null,seq22386__$1);
var G__22389 = cljs.core.first.call(null,seq22386__$2);
var seq22386__$3 = cljs.core.next.call(null,seq22386__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22387,G__22388,G__22389,seq22386__$3);
}));

return null;
})()
;
(taoensso.timbre.with_merged_config.cljs$lang$macro = true);

taoensso.timbre.set_config_BANG_ = (function taoensso$timbre$set_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_.call(null,(function (_old){
return m;
}));
});
taoensso.timbre.merge_config_BANG_ = (function taoensso$timbre$merge_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_.call(null,(function (old){
return taoensso.encore.nested_merge.call(null,old,m);
}));
});
taoensso.timbre.swap_config_BANG_ = (function taoensso$timbre$swap_config_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22396 = arguments.length;
var i__4772__auto___22397 = (0);
while(true){
if((i__4772__auto___22397 < len__4771__auto___22396)){
args__4777__auto__.push((arguments[i__4772__auto___22397]));

var G__22398 = (i__4772__auto___22397 + (1));
i__4772__auto___22397 = G__22398;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (taoensso.timbre._STAR_config_STAR_ = cljs.core.apply.call(null,f,taoensso.timbre._STAR_config_STAR_,args));
}));

(taoensso.timbre.swap_config_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.timbre.swap_config_BANG_.cljs$lang$applyTo = (function (seq22394){
var G__22395 = cljs.core.first.call(null,seq22394);
var seq22394__$1 = cljs.core.next.call(null,seq22394);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22395,seq22394__$1);
}));

taoensso.timbre.set_level_BANG_ = (function taoensso$timbre$set_level_BANG_(level){
return taoensso.timbre.swap_config_BANG_.call(null,(function (m){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"min-level","min-level",1634684919),level);
}));
});
var ret__4820__auto___22403 = (function (){
taoensso.timbre.with_level = (function taoensso$timbre$with_level(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22404 = arguments.length;
var i__4772__auto___22405 = (0);
while(true){
if((i__4772__auto___22405 < len__4771__auto___22404)){
args__4777__auto__.push((arguments[i__4772__auto___22405]));

var G__22406 = (i__4772__auto___22405 + (1));
i__4772__auto___22405 = G__22406;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_level.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(taoensso.timbre.with_level.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,(1),null)),(new cljs.core.List(null,level,null,(1),null))))),null,(1),null)))))),null,(1),null)),body)));
}));

(taoensso.timbre.with_level.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_level.cljs$lang$applyTo = (function (seq22399){
var G__22400 = cljs.core.first.call(null,seq22399);
var seq22399__$1 = cljs.core.next.call(null,seq22399);
var G__22401 = cljs.core.first.call(null,seq22399__$1);
var seq22399__$2 = cljs.core.next.call(null,seq22399__$1);
var G__22402 = cljs.core.first.call(null,seq22399__$2);
var seq22399__$3 = cljs.core.next.call(null,seq22399__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22400,G__22401,G__22402,seq22399__$3);
}));

return null;
})()
;
(taoensso.timbre.with_level.cljs$lang$macro = true);

var err_22409 = "Invalid Timbre logging level: should be e/o #{:trace :debug :info :warn :error :fatal :report}";
var level__GT_int_22410 = (function (p1__22407_SHARP_){
var G__22408 = p1__22407_SHARP_;
var G__22408__$1 = (((G__22408 instanceof cljs.core.Keyword))?G__22408.fqn:null);
switch (G__22408__$1) {
case "trace":
return (0);

break;
case "debug":
return (1);

break;
case "info":
return (2);

break;
case "warn":
return (3);

break;
case "error":
return (4);

break;
case "fatal":
return (5);

break;
case "report":
return (6);

break;
default:
return null;

}
});
taoensso.timbre.valid_level_QMARK_ = (function taoensso$timbre$valid_level_QMARK_(x){
if(cljs.core.truth_(level__GT_int_22410.call(null,x))){
return true;
} else {
return false;
}
});

taoensso.timbre.valid_level = (function taoensso$timbre$valid_level(x){
if(cljs.core.truth_(level__GT_int_22410.call(null,x))){
return x;
} else {
throw cljs.core.ex_info.call(null,err_22409,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
});

taoensso.timbre.valid_level__GT_int = (function taoensso$timbre$valid_level__GT_int(x){
var or__4160__auto__ = level__GT_int_22410.call(null,x);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
throw cljs.core.ex_info.call(null,err_22409,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
});
var valid_level__GT_int_22412 = taoensso.timbre.valid_level__GT_int;
/**
 * Implementation detail.
 */
taoensso.timbre.level_GT__EQ_ = (function taoensso$timbre$level_GT__EQ_(x,y){
return (valid_level__GT_int_22412.call(null,x) >= valid_level__GT_int_22412.call(null,y));
});
var fn_QMARK__22417 = cljs.core.fn_QMARK_;
var compile_22418 = taoensso.encore.fmemoize.call(null,(function (x){
return taoensso.encore.compile_str_filter.call(null,x);
}));
var conform_QMARK__STAR__22419 = taoensso.encore.fmemoize.call(null,(function (x,ns){
return compile_22418.call(null,x).call(null,ns);
}));
var conform_QMARK__22420 = (function (ns_filter,ns){
if(cljs.core.truth_(fn_QMARK__22417.call(null,ns_filter))){
return ns_filter.call(null,ns);
} else {
return conform_QMARK__STAR__22419.call(null,ns_filter,ns);
}
});
/**
 * Implementation detail.
 */
taoensso.timbre.may_log_ns_QMARK_ = (function taoensso$timbre$may_log_ns_QMARK_(ns_filter,ns){
if(cljs.core.truth_(conform_QMARK__22420.call(null,ns_filter,ns))){
return true;
} else {
return false;
}
});

/**
 * [[<ns-pattern> <min-level>] ... ["*" <default-min-level>]], ns -> ?min-level
 */
taoensso.timbre.ns__GT__QMARK_min_level = taoensso.encore.fmemoize.call(null,(function (specs,ns){
return taoensso.encore.rsome.call(null,(function (p__22413){
var vec__22414 = p__22413;
var ns_pattern = cljs.core.nth.call(null,vec__22414,(0),null);
var min_level = cljs.core.nth.call(null,vec__22414,(1),null);
if(cljs.core.truth_(conform_QMARK__STAR__22419.call(null,ns_pattern,ns))){
return taoensso.timbre.valid_level.call(null,min_level);
} else {
return null;
}
}),specs);
}));
var valid_level_22421 = taoensso.timbre.valid_level;
var ns__GT__QMARK_min_level_22422 = taoensso.timbre.ns__GT__QMARK_min_level;
taoensso.timbre.get_min_level = (function taoensso$timbre$get_min_level(default$,x,ns){
return valid_level_22421.call(null,(function (){var or__4160__auto__ = ((cljs.core.vector_QMARK_.call(null,x))?ns__GT__QMARK_min_level_22422.call(null,x,ns):x);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return default$;
}
})());
});
var leglist_22423 = (function (x){
if(cljs.core.truth_(x)){
if(cljs.core.truth_(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY]).call(null,x))){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.timbre.legacy_ns_filter = (function taoensso$timbre$legacy_ns_filter(ns_whitelist,ns_blacklist){
var ns_whitelist__$1 = leglist_22423.call(null,ns_whitelist);
var ns_blacklist__$1 = leglist_22423.call(null,ns_blacklist);
if(cljs.core.truth_((function (){var or__4160__auto__ = ns_whitelist__$1;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return ns_blacklist__$1;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow","allow",-1857325745),ns_whitelist__$1,new cljs.core.Keyword(null,"deny","deny",1589338523),ns_blacklist__$1], null);
} else {
return null;
}
});
var level_GT__EQ__22426 = taoensso.timbre.level_GT__EQ_;
var may_log_ns_QMARK__22427 = taoensso.timbre.may_log_ns_QMARK_;
var get_min_level_22428 = taoensso.timbre.get_min_level;
var legacy_ns_filter_22429 = taoensso.timbre.legacy_ns_filter;
/**
 * Implementation detail.
 *  Returns true iff level and ns are runtime unfiltered.
 */
taoensso.timbre.may_log_QMARK_ = (function taoensso$timbre$may_log_QMARK_(var_args){
var G__22425 = arguments.length;
switch (G__22425) {
case 1:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (level){
return taoensso.timbre.may_log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010),level,null,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,_QMARK_ns_str){
return taoensso.timbre.may_log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010),level,_QMARK_ns_str,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (level,_QMARK_ns_str,_QMARK_config){
return taoensso.timbre.may_log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010),level,_QMARK_ns_str,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (default_min_level,level,_QMARK_ns_str,_QMARK_config){
var config = (function (){var or__4160__auto__ = _QMARK_config;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return taoensso.timbre._STAR_config_STAR_;
}
})();
var min_level = get_min_level_22428.call(null,default_min_level,(function (){var or__4160__auto__ = cljs.core.get.call(null,config,new cljs.core.Keyword(null,"min-level","min-level",1634684919));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.get.call(null,config,new cljs.core.Keyword(null,"level","level",1290497552));
}
})(),_QMARK_ns_str);
if(cljs.core.truth_(level_GT__EQ__22426.call(null,level,min_level))){
var temp__5751__auto__ = (function (){var or__4160__auto__ = cljs.core.get.call(null,config,new cljs.core.Keyword(null,"ns-filter","ns-filter",108598448));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return legacy_ns_filter_22429.call(null,cljs.core.get.call(null,config,new cljs.core.Keyword(null,"ns-whitelist","ns-whitelist",-1717299774)),cljs.core.get.call(null,config,new cljs.core.Keyword(null,"ns-blacklist","ns-blacklist",1957763142)));
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var ns_filter = temp__5751__auto__;
if(cljs.core.truth_(may_log_ns_QMARK__22427.call(null,ns_filter,_QMARK_ns_str))){
return true;
} else {
return false;
}
} else {
return true;
}
} else {
return false;
}
}));

(taoensso.timbre.may_log_QMARK_.cljs$lang$maxFixedArity = 4);

taoensso.timbre.str_join = (function taoensso$timbre$str_join(xs){
return taoensso.encore.str_join.call(null," ",cljs.core.map.call(null,(function (x){
var x__$1 = taoensso.encore.nil__GT_str.call(null,x);
if(cljs.core.record_QMARK_.call(null,x__$1)){
return cljs.core.pr_str.call(null,x__$1);
} else {
return x__$1;

}
})),xs);
});
if((typeof taoensso !== 'undefined') && (typeof taoensso.timbre !== 'undefined') && (typeof taoensso.timbre.get_rate_limiter !== 'undefined')){
} else {
taoensso.timbre.get_rate_limiter = taoensso.encore.fmemoize.call(null,(function (appender_id,specs){
return taoensso.encore.limiter.call(null,specs);
}));
}
/**
 * General-purpose dynamic logging context
 */
taoensso.timbre._STAR_context_STAR_ = null;
var ret__4820__auto___22435 = (function (){
/**
 * Executes body so that given arbitrary data will be passed (as `:context`)
 *   to appenders for any enclosed logging calls.
 * 
 *   (with-context
 *  {:user-name "Stu"} ; Will be incl. in data dispatched to appenders
 *  (info "User request"))
 * 
 *   See also `with-context+`.
 */
taoensso.timbre.with_context = (function taoensso$timbre$with_context(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22436 = arguments.length;
var i__4772__auto___22437 = (0);
while(true){
if((i__4772__auto___22437 < len__4771__auto___22436)){
args__4777__auto__.push((arguments[i__4772__auto___22437]));

var G__22438 = (i__4772__auto___22437 + (1));
i__4772__auto___22437 = G__22438;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(taoensso.timbre.with_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*context*","taoensso.timbre/*context*",-1629184691,null),null,(1),null)),(new cljs.core.List(null,context,null,(1),null)))))),null,(1),null)),body)));
}));

(taoensso.timbre.with_context.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_context.cljs$lang$applyTo = (function (seq22431){
var G__22432 = cljs.core.first.call(null,seq22431);
var seq22431__$1 = cljs.core.next.call(null,seq22431);
var G__22433 = cljs.core.first.call(null,seq22431__$1);
var seq22431__$2 = cljs.core.next.call(null,seq22431__$1);
var G__22434 = cljs.core.first.call(null,seq22431__$2);
var seq22431__$3 = cljs.core.next.call(null,seq22431__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22432,G__22433,G__22434,seq22431__$3);
}));

return null;
})()
;
(taoensso.timbre.with_context.cljs$lang$macro = true);

var ret__4820__auto___22443 = (function (){
/**
 * Like `with-context`, but merges given context into current context.
 */
taoensso.timbre.with_context_PLUS_ = (function taoensso$timbre$with_context_PLUS_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22444 = arguments.length;
var i__4772__auto___22445 = (0);
while(true){
if((i__4772__auto___22445 < len__4771__auto___22444)){
args__4777__auto__.push((arguments[i__4772__auto___22445]));

var G__22446 = (i__4772__auto___22445 + (1));
i__4772__auto___22445 = G__22446;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_context_PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(taoensso.timbre.with_context_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*context*","taoensso.timbre/*context*",-1629184691,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*context*","taoensso.timbre/*context*",-1629184691,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,context,null,(1),null))))),null,(1),null)))))),null,(1),null)),body)));
}));

(taoensso.timbre.with_context_PLUS_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_context_PLUS_.cljs$lang$applyTo = (function (seq22439){
var G__22440 = cljs.core.first.call(null,seq22439);
var seq22439__$1 = cljs.core.next.call(null,seq22439);
var G__22441 = cljs.core.first.call(null,seq22439__$1);
var seq22439__$2 = cljs.core.next.call(null,seq22439__$1);
var G__22442 = cljs.core.first.call(null,seq22439__$2);
var seq22439__$3 = cljs.core.next.call(null,seq22439__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22440,G__22441,G__22442,seq22439__$3);
}));

return null;
})()
;
(taoensso.timbre.with_context_PLUS_.cljs$lang$macro = true);

/**
 * vargs -> [?err ?meta ?msg-fmt api-vargs]
 */
taoensso.timbre.parse_vargs = (function taoensso$timbre$parse_vargs(_QMARK_err,msg_type,vargs){
var auto_error_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_err,new cljs.core.Keyword(null,"auto","auto",-566279492));
var fmt_msg_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,msg_type,new cljs.core.Keyword(null,"f","f",-1597136552));
var vec__22447 = vargs;
var v0 = cljs.core.nth.call(null,vec__22447,(0),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = auto_error_QMARK_;
if(cljs.core.truth_(and__4149__auto__)){
return taoensso.encore.error_QMARK_.call(null,v0);
} else {
return and__4149__auto__;
}
})())){
var _QMARK_err__$1 = v0;
var _QMARK_meta = null;
var vargs__$1 = taoensso.encore.vrest.call(null,vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__22450 = vargs__$1;
var v0__$1 = cljs.core.nth.call(null,vec__22450,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.encore.vrest.call(null,vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta,_QMARK_msg_fmt,vargs__$2], null);
} else {
var _QMARK_meta = (cljs.core.truth_(((cljs.core.map_QMARK_.call(null,v0))?new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v0)):false))?v0:null);
var _QMARK_err__$1 = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"err","err",-2089457205).cljs$core$IFn$_invoke$arity$1(_QMARK_meta);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
if(cljs.core.truth_(auto_error_QMARK_)){
return null;
} else {
return _QMARK_err;
}
}
})();
var _QMARK_meta__$1 = cljs.core.dissoc.call(null,_QMARK_meta,new cljs.core.Keyword(null,"err","err",-2089457205));
var vargs__$1 = (cljs.core.truth_(_QMARK_meta__$1)?taoensso.encore.vrest.call(null,vargs):vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__22453 = vargs__$1;
var v0__$1 = cljs.core.nth.call(null,vec__22453,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.encore.vrest.call(null,vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta__$1,_QMARK_msg_fmt,vargs__$2], null);
}
});
taoensso.timbre.get_timestamp = (function taoensso$timbre$get_timestamp(timestamp_opts,instant){
var map__22456 = timestamp_opts;
var map__22456__$1 = cljs.core.__destructure_map.call(null,map__22456);
var pattern = cljs.core.get.call(null,map__22456__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,pattern,new cljs.core.Keyword(null,"iso8601","iso8601",609352650)))){
return (new Date(instant)).toISOString();
} else {
return (new goog.i18n.DateTimeFormat(pattern)).format(instant);
}
});
/**
 * Core low-level log fn. Implementation detail!
 */
taoensso.timbre._log_BANG_ = (function taoensso$timbre$_log_BANG_(var_args){
var G__22458 = arguments.length;
switch (G__22458) {
case 9:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data){
return taoensso.timbre._log_BANG_.call(null,config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,null,false);
}));

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id){
return taoensso.timbre._log_BANG_.call(null,config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,false);
}));

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,spying_QMARK_){
if(taoensso.timbre.may_log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010),level,_QMARK_ns_str,config)){
var instant_22466 = (new Date());
var context_22467 = taoensso.timbre._STAR_context_STAR_;
var vargs_22468 = cljs.core.deref.call(null,vargs_);
var vec__22459_22469 = taoensso.timbre.parse_vargs.call(null,_QMARK_err,msg_type,vargs_22468);
var _QMARK_err_22470__$1 = cljs.core.nth.call(null,vec__22459_22469,(0),null);
var _QMARK_meta_22471 = cljs.core.nth.call(null,vec__22459_22469,(1),null);
var _QMARK_msg_fmt_22472 = cljs.core.nth.call(null,vec__22459_22469,(2),null);
var vargs_22473__$1 = cljs.core.nth.call(null,vec__22459_22469,(3),null);
var data_22474 = cljs.core.conj.call(null,(function (){var or__4160__auto__ = _QMARK_base_data;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"instant","instant",655498374),new cljs.core.Keyword(null,"spying?","spying?",1753444487),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"vargs","vargs",-966597273),new cljs.core.Keyword(null,"?file","?file",1533429675),new cljs.core.Keyword(null,"error-level?","error-level?",778415885),new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"?err","?err",549653299),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"?line","?line",-631853385),new cljs.core.Keyword(null,"?err_","?err_",789480858),new cljs.core.Keyword(null,"?meta","?meta",-793560773),new cljs.core.Keyword(null,"?msg-fmt","?msg-fmt",-852453891)],[instant_22466,spying_QMARK_,config,vargs_22473__$1,_QMARK_file,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fatal","fatal",1874419888),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,level),_QMARK_ns_str,level,_QMARK_err_22470__$1,context_22467,_QMARK_line,(new cljs.core.Delay((function (){
return _QMARK_err_22470__$1;
}),null)),_QMARK_meta_22471,_QMARK_msg_fmt_22472]));
var _QMARK_data_22475 = cljs.core.reduce.call(null,(function (acc,mf){
var result = mf.call(null,acc);
if((result == null)){
return cljs.core.reduced.call(null,null);
} else {
return result;
}
}),data_22474,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$1(config));
var temp__5753__auto___22476 = _QMARK_data_22475;
if(cljs.core.truth_(temp__5753__auto___22476)){
var data_22477__$1 = temp__5753__auto___22476;
var map__22462_22478 = data_22477__$1;
var map__22462_22479__$1 = cljs.core.__destructure_map.call(null,map__22462_22478);
var vargs_22480__$2 = cljs.core.get.call(null,map__22462_22479__$1,new cljs.core.Keyword(null,"vargs","vargs",-966597273));
var data_22481__$2 = cljs.core.assoc.call(null,data_22477__$1,new cljs.core.Keyword(null,"vargs_","vargs_",552132148),(new cljs.core.Delay((function (){
return vargs_22480__$2;
}),null)));
var data_22482__$3 = taoensso.encore.assoc_nx.call(null,data_22481__$2,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),(new cljs.core.Delay((function (){
var G__22463 = msg_type;
if(cljs.core._EQ_.call(null,null,G__22463)){
return "";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"p","p",151049309),G__22463)){
return taoensso.timbre.str_join.call(null,vargs_22480__$2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),G__22463)){
if(typeof _QMARK_msg_fmt_22472 === 'string'){
} else {
throw cljs.core.ex_info.call(null,"Timbre format-style logging call without a format pattern (string)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),level,new cljs.core.Keyword(null,"location","location",1815599388),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var or__4160__auto____$1 = _QMARK_file;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return "?";
}
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = _QMARK_line;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "?";
}
})())].join('')], null));
}

return taoensso.encore.format_STAR_.call(null,_QMARK_msg_fmt_22472,vargs_22480__$2);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22463)].join('')));

}
}
}
}),null)),new cljs.core.Keyword(null,"hash_","hash_",-827203612),(new cljs.core.Delay((function (){
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [callsite_id,_QMARK_msg_fmt_22472,cljs.core.get.call(null,_QMARK_meta_22471,new cljs.core.Keyword(null,"hash","hash",-13781596),vargs_22480__$2)], null));
}),null)));
var output_fn1_22483 = taoensso.encore.fmemoize.call(null,cljs.core.get.call(null,config,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),taoensso.timbre.default_output_fn));
var timestamp_opts1_22484 = cljs.core.conj.call(null,taoensso.timbre.default_timestamp_opts,cljs.core.get.call(null,config,new cljs.core.Keyword(null,"timestamp-opts","timestamp-opts",-1359534807)));
var get_timestamp__22485 = taoensso.encore.fmemoize.call(null,(function (opts){
return (new cljs.core.Delay((function (){
return taoensso.timbre.get_timestamp.call(null,opts,cljs.core.get.call(null,data_22482__$3,new cljs.core.Keyword(null,"instant","instant",655498374)));
}),null));
}));
cljs.core.reduce_kv.call(null,(function (_,id,appender){
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(and__4149__auto__)){
return taoensso.timbre.may_log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415),level,_QMARK_ns_str,appender);
} else {
return and__4149__auto__;
}
})())){
var rate_limit_specs = new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022).cljs$core$IFn$_invoke$arity$1(appender);
var rate_limit_okay_QMARK_ = (function (){var or__4160__auto__ = cljs.core.empty_QMARK_.call(null,rate_limit_specs);
if(or__4160__auto__){
return or__4160__auto__;
} else {
var rl_fn = taoensso.timbre.get_rate_limiter.call(null,id,rate_limit_specs);
return cljs.core.not.call(null,rl_fn.call(null,cljs.core.force.call(null,new cljs.core.Keyword(null,"hash_","hash_",-827203612).cljs$core$IFn$_invoke$arity$1(data_22482__$3))));
}
})();
if(rate_limit_okay_QMARK_){
var map__22464 = appender;
var map__22464__$1 = cljs.core.__destructure_map.call(null,map__22464);
var apfn = cljs.core.get.call(null,map__22464__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var async_QMARK_ = cljs.core.get.call(null,map__22464__$1,new cljs.core.Keyword(null,"async?","async?",1523057758));
var output_fn = (function (){var f = new cljs.core.Keyword(null,"output-fn","output-fn",1600951539).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_((function (){var or__4160__auto__ = (f == null);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword(null,"inherit","inherit",-1840815422));
}
})())){
return output_fn1_22483;
} else {
return f;
}
})();
var timestamp_ = (function (){var opts = new cljs.core.Keyword(null,"timestamp-opts","timestamp-opts",-1359534807).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_((function (){var or__4160__auto__ = (opts == null);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return taoensso.encore.kw_identical_QMARK_.call(null,opts,new cljs.core.Keyword(null,"inherit","inherit",-1840815422));
}
})())){
return get_timestamp__22485.call(null,timestamp_opts1_22484);
} else {
return get_timestamp__22485.call(null,cljs.core.conj.call(null,timestamp_opts1_22484,opts));
}
})();
var output_ = (new cljs.core.Delay((function (){
return output_fn.call(null,cljs.core.assoc.call(null,data_22482__$3,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417),timestamp_));
}),null));
var data__$4 = cljs.core.conj.call(null,data_22482__$3,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"appender-id","appender-id",-1917983538),id,new cljs.core.Keyword(null,"appender","appender",1267426510),appender,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),output_fn,new cljs.core.Keyword(null,"output_","output_",-36797880),output_,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417),timestamp_], null));
var _QMARK_data__$1 = (function (){var temp__5751__auto__ = new cljs.core.Keyword(null,"middleware-fn","middleware-fn",-61585752).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(temp__5751__auto__)){
var mfn = temp__5751__auto__;
return mfn.call(null,data__$4);
} else {
return data__$4;
}
})();
var temp__5753__auto____$1 = _QMARK_data__$1;
if(cljs.core.truth_(temp__5753__auto____$1)){
var data__$5 = temp__5753__auto____$1;
return apfn.call(null,data__$5);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}),null,new cljs.core.Keyword(null,"appenders","appenders",1245583998).cljs$core$IFn$_invoke$arity$1(config));
} else {
}
} else {
}

return null;
}));

(taoensso.timbre._log_BANG_.cljs$lang$maxFixedArity = 11);

taoensso.timbre.fline = (function taoensso$timbre$fline(and_form){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,and_form));
});
var ret__4820__auto___22498 = (function (){
/**
 * Core low-level log macro. Useful for tooling, etc.
 * 
 *  * `level`    - must eval to a valid logging level
 *  * `msg-type` - must eval to e/o #{:p :f nil}
 *  * `opts`     - ks e/o #{:config :?err :?ns-str :?file :?line :?base-data :spying?}
 * 
 *   Supports compile-time elision when compile-time const vals
 *   provided for `level` and/or `?ns-str`.
 */
taoensso.timbre.log_BANG_ = (function taoensso$timbre$log_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22499 = arguments.length;
var i__4772__auto___22500 = (0);
while(true){
if((i__4772__auto___22500 < len__4771__auto___22499)){
args__4777__auto__.push((arguments[i__4772__auto___22500]));

var G__22501 = (i__4772__auto___22500 + (1));
i__4772__auto___22500 = G__22501;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((5) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((5)),(0),null)):null);
return taoensso.timbre.log_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4778__auto__);
});

(taoensso.timbre.log_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,msg_type,args,p__22492){
var vec__22493 = p__22492;
var opts = cljs.core.nth.call(null,vec__22493,(0),null);
if((function (x){
return (((x == null)) || (cljs.core.sequential_QMARK_.call(null,x)));
}).call(null,args)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.timbre",689,"([:or nil? sequential?] args)",args,null,null);
}

var map__22496 = opts;
var map__22496__$1 = cljs.core.__destructure_map.call(null,map__22496);
var _QMARK_ns_str = cljs.core.get.call(null,map__22496__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_));
var map__22497 = opts;
var map__22497__$1 = cljs.core.__destructure_map.call(null,map__22497);
var config = cljs.core.get.call(null,map__22497__$1,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null));
var _QMARK_err = cljs.core.get.call(null,map__22497__$1,new cljs.core.Keyword(null,"?err","?err",549653299),new cljs.core.Keyword(null,"auto","auto",-566279492));
var _QMARK_file = cljs.core.get.call(null,map__22497__$1,new cljs.core.Keyword(null,"?file","?file",1533429675),null);
var _QMARK_line = cljs.core.get.call(null,map__22497__$1,new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form));
var _QMARK_base_data = cljs.core.get.call(null,map__22497__$1,new cljs.core.Keyword(null,"?base-data","?base-data",1332523851));
var spying_QMARK_ = cljs.core.get.call(null,map__22497__$1,new cljs.core.Keyword(null,"spying?","spying?",1753444487));
var _QMARK_file__$1 = ((cljs.core.not_EQ_.call(null,_QMARK_file,"NO_SOURCE_PATH"))?_QMARK_file:null);
var callsite_id = cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [level,msg_type,args,_QMARK_ns_str,_QMARK_file__$1,_QMARK_line,cljs.core.rand.call(null)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-log!","taoensso.timbre/-log!",-1032395770,null),null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,_QMARK_ns_str,null,(1),null)),(new cljs.core.List(null,_QMARK_file__$1,null,(1),null)),(new cljs.core.List(null,_QMARK_line,null,(1),null)),(new cljs.core.List(null,msg_type,null,(1),null)),(new cljs.core.List(null,_QMARK_err,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","delay","cljs.core/delay",-406049125,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,args)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,_QMARK_base_data,null,(1),null)),(new cljs.core.List(null,callsite_id,null,(1),null)),(new cljs.core.List(null,spying_QMARK_,null,(1),null)))));

}));

(taoensso.timbre.log_BANG_.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(taoensso.timbre.log_BANG_.cljs$lang$applyTo = (function (seq22486){
var G__22487 = cljs.core.first.call(null,seq22486);
var seq22486__$1 = cljs.core.next.call(null,seq22486);
var G__22488 = cljs.core.first.call(null,seq22486__$1);
var seq22486__$2 = cljs.core.next.call(null,seq22486__$1);
var G__22489 = cljs.core.first.call(null,seq22486__$2);
var seq22486__$3 = cljs.core.next.call(null,seq22486__$2);
var G__22490 = cljs.core.first.call(null,seq22486__$3);
var seq22486__$4 = cljs.core.next.call(null,seq22486__$3);
var G__22491 = cljs.core.first.call(null,seq22486__$4);
var seq22486__$5 = cljs.core.next.call(null,seq22486__$4);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22487,G__22488,G__22489,G__22490,G__22491,seq22486__$5);
}));

return null;
})()
;
(taoensso.timbre.log_BANG_.cljs$lang$macro = true);

var ret__4820__auto___22507 = (function (){
taoensso.timbre.log_STAR_ = (function taoensso$timbre$log_STAR_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22508 = arguments.length;
var i__4772__auto___22509 = (0);
while(true){
if((i__4772__auto___22509 < len__4771__auto___22508)){
args__4777__auto__.push((arguments[i__4772__auto___22509]));

var G__22510 = (i__4772__auto___22509 + (1));
i__4772__auto___22509 = G__22510;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((4) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((4)),(0),null)):null);
return taoensso.timbre.log_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4778__auto__);
});

(taoensso.timbre.log_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,config,level,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form),new cljs.core.Keyword(null,"config","config",994861415),config], null),null,(1),null)))));
}));

(taoensso.timbre.log_STAR_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(taoensso.timbre.log_STAR_.cljs$lang$applyTo = (function (seq22502){
var G__22503 = cljs.core.first.call(null,seq22502);
var seq22502__$1 = cljs.core.next.call(null,seq22502);
var G__22504 = cljs.core.first.call(null,seq22502__$1);
var seq22502__$2 = cljs.core.next.call(null,seq22502__$1);
var G__22505 = cljs.core.first.call(null,seq22502__$2);
var seq22502__$3 = cljs.core.next.call(null,seq22502__$2);
var G__22506 = cljs.core.first.call(null,seq22502__$3);
var seq22502__$4 = cljs.core.next.call(null,seq22502__$3);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22503,G__22504,G__22505,G__22506,seq22502__$4);
}));

return null;
})()
;
(taoensso.timbre.log_STAR_.cljs$lang$macro = true);

var ret__4820__auto___22515 = (function (){
taoensso.timbre.log = (function taoensso$timbre$log(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22516 = arguments.length;
var i__4772__auto___22517 = (0);
while(true){
if((i__4772__auto___22517 < len__4771__auto___22516)){
args__4777__auto__.push((arguments[i__4772__auto___22517]));

var G__22518 = (i__4772__auto___22517 + (1));
i__4772__auto___22517 = G__22518;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(taoensso.timbre.log.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.log.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.log.cljs$lang$applyTo = (function (seq22511){
var G__22512 = cljs.core.first.call(null,seq22511);
var seq22511__$1 = cljs.core.next.call(null,seq22511);
var G__22513 = cljs.core.first.call(null,seq22511__$1);
var seq22511__$2 = cljs.core.next.call(null,seq22511__$1);
var G__22514 = cljs.core.first.call(null,seq22511__$2);
var seq22511__$3 = cljs.core.next.call(null,seq22511__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22512,G__22513,G__22514,seq22511__$3);
}));

return null;
})()
;
(taoensso.timbre.log.cljs$lang$macro = true);

var ret__4820__auto___22522 = (function (){
taoensso.timbre.trace = (function taoensso$timbre$trace(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22523 = arguments.length;
var i__4772__auto___22524 = (0);
while(true){
if((i__4772__auto___22524 < len__4771__auto___22523)){
args__4777__auto__.push((arguments[i__4772__auto___22524]));

var G__22525 = (i__4772__auto___22524 + (1));
i__4772__auto___22524 = G__22525;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.trace.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(taoensso.timbre.trace.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"trace","trace",-1082747415),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.trace.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.trace.cljs$lang$applyTo = (function (seq22519){
var G__22520 = cljs.core.first.call(null,seq22519);
var seq22519__$1 = cljs.core.next.call(null,seq22519);
var G__22521 = cljs.core.first.call(null,seq22519__$1);
var seq22519__$2 = cljs.core.next.call(null,seq22519__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22520,G__22521,seq22519__$2);
}));

return null;
})()
;
(taoensso.timbre.trace.cljs$lang$macro = true);

var ret__4820__auto___22529 = (function (){
taoensso.timbre.debug = (function taoensso$timbre$debug(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22530 = arguments.length;
var i__4772__auto___22531 = (0);
while(true){
if((i__4772__auto___22531 < len__4771__auto___22530)){
args__4777__auto__.push((arguments[i__4772__auto___22531]));

var G__22532 = (i__4772__auto___22531 + (1));
i__4772__auto___22531 = G__22532;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.debug.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(taoensso.timbre.debug.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.debug.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.debug.cljs$lang$applyTo = (function (seq22526){
var G__22527 = cljs.core.first.call(null,seq22526);
var seq22526__$1 = cljs.core.next.call(null,seq22526);
var G__22528 = cljs.core.first.call(null,seq22526__$1);
var seq22526__$2 = cljs.core.next.call(null,seq22526__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22527,G__22528,seq22526__$2);
}));

return null;
})()
;
(taoensso.timbre.debug.cljs$lang$macro = true);

var ret__4820__auto___22536 = (function (){
taoensso.timbre.info = (function taoensso$timbre$info(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22537 = arguments.length;
var i__4772__auto___22538 = (0);
while(true){
if((i__4772__auto___22538 < len__4771__auto___22537)){
args__4777__auto__.push((arguments[i__4772__auto___22538]));

var G__22539 = (i__4772__auto___22538 + (1));
i__4772__auto___22538 = G__22539;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(taoensso.timbre.info.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"info","info",-317069002),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.info.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.info.cljs$lang$applyTo = (function (seq22533){
var G__22534 = cljs.core.first.call(null,seq22533);
var seq22533__$1 = cljs.core.next.call(null,seq22533);
var G__22535 = cljs.core.first.call(null,seq22533__$1);
var seq22533__$2 = cljs.core.next.call(null,seq22533__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22534,G__22535,seq22533__$2);
}));

return null;
})()
;
(taoensso.timbre.info.cljs$lang$macro = true);

var ret__4820__auto___22543 = (function (){
taoensso.timbre.warn = (function taoensso$timbre$warn(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22544 = arguments.length;
var i__4772__auto___22545 = (0);
while(true){
if((i__4772__auto___22545 < len__4771__auto___22544)){
args__4777__auto__.push((arguments[i__4772__auto___22545]));

var G__22546 = (i__4772__auto___22545 + (1));
i__4772__auto___22545 = G__22546;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(taoensso.timbre.warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"warn","warn",-436710552),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.warn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.warn.cljs$lang$applyTo = (function (seq22540){
var G__22541 = cljs.core.first.call(null,seq22540);
var seq22540__$1 = cljs.core.next.call(null,seq22540);
var G__22542 = cljs.core.first.call(null,seq22540__$1);
var seq22540__$2 = cljs.core.next.call(null,seq22540__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22541,G__22542,seq22540__$2);
}));

return null;
})()
;
(taoensso.timbre.warn.cljs$lang$macro = true);

var ret__4820__auto___22550 = (function (){
taoensso.timbre.error = (function taoensso$timbre$error(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22551 = arguments.length;
var i__4772__auto___22552 = (0);
while(true){
if((i__4772__auto___22552 < len__4771__auto___22551)){
args__4777__auto__.push((arguments[i__4772__auto___22552]));

var G__22553 = (i__4772__auto___22552 + (1));
i__4772__auto___22552 = G__22553;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(taoensso.timbre.error.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"error","error",-978969032),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.error.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.error.cljs$lang$applyTo = (function (seq22547){
var G__22548 = cljs.core.first.call(null,seq22547);
var seq22547__$1 = cljs.core.next.call(null,seq22547);
var G__22549 = cljs.core.first.call(null,seq22547__$1);
var seq22547__$2 = cljs.core.next.call(null,seq22547__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22548,G__22549,seq22547__$2);
}));

return null;
})()
;
(taoensso.timbre.error.cljs$lang$macro = true);

var ret__4820__auto___22557 = (function (){
taoensso.timbre.fatal = (function taoensso$timbre$fatal(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22558 = arguments.length;
var i__4772__auto___22559 = (0);
while(true){
if((i__4772__auto___22559 < len__4771__auto___22558)){
args__4777__auto__.push((arguments[i__4772__auto___22559]));

var G__22560 = (i__4772__auto___22559 + (1));
i__4772__auto___22559 = G__22560;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.fatal.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(taoensso.timbre.fatal.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.fatal.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.fatal.cljs$lang$applyTo = (function (seq22554){
var G__22555 = cljs.core.first.call(null,seq22554);
var seq22554__$1 = cljs.core.next.call(null,seq22554);
var G__22556 = cljs.core.first.call(null,seq22554__$1);
var seq22554__$2 = cljs.core.next.call(null,seq22554__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22555,G__22556,seq22554__$2);
}));

return null;
})()
;
(taoensso.timbre.fatal.cljs$lang$macro = true);

var ret__4820__auto___22564 = (function (){
taoensso.timbre.report = (function taoensso$timbre$report(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22565 = arguments.length;
var i__4772__auto___22566 = (0);
while(true){
if((i__4772__auto___22566 < len__4771__auto___22565)){
args__4777__auto__.push((arguments[i__4772__auto___22566]));

var G__22567 = (i__4772__auto___22566 + (1));
i__4772__auto___22566 = G__22567;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.report.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(taoensso.timbre.report.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"report","report",1394055010),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.report.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.report.cljs$lang$applyTo = (function (seq22561){
var G__22562 = cljs.core.first.call(null,seq22561);
var seq22561__$1 = cljs.core.next.call(null,seq22561);
var G__22563 = cljs.core.first.call(null,seq22561__$1);
var seq22561__$2 = cljs.core.next.call(null,seq22561__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22562,G__22563,seq22561__$2);
}));

return null;
})()
;
(taoensso.timbre.report.cljs$lang$macro = true);

var ret__4820__auto___22573 = (function (){
taoensso.timbre.logf_STAR_ = (function taoensso$timbre$logf_STAR_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22574 = arguments.length;
var i__4772__auto___22575 = (0);
while(true){
if((i__4772__auto___22575 < len__4771__auto___22574)){
args__4777__auto__.push((arguments[i__4772__auto___22575]));

var G__22576 = (i__4772__auto___22575 + (1));
i__4772__auto___22575 = G__22576;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((4) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((4)),(0),null)):null);
return taoensso.timbre.logf_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4778__auto__);
});

(taoensso.timbre.logf_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,config,level,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form),new cljs.core.Keyword(null,"config","config",994861415),config], null),null,(1),null)))));
}));

(taoensso.timbre.logf_STAR_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(taoensso.timbre.logf_STAR_.cljs$lang$applyTo = (function (seq22568){
var G__22569 = cljs.core.first.call(null,seq22568);
var seq22568__$1 = cljs.core.next.call(null,seq22568);
var G__22570 = cljs.core.first.call(null,seq22568__$1);
var seq22568__$2 = cljs.core.next.call(null,seq22568__$1);
var G__22571 = cljs.core.first.call(null,seq22568__$2);
var seq22568__$3 = cljs.core.next.call(null,seq22568__$2);
var G__22572 = cljs.core.first.call(null,seq22568__$3);
var seq22568__$4 = cljs.core.next.call(null,seq22568__$3);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22569,G__22570,G__22571,G__22572,seq22568__$4);
}));

return null;
})()
;
(taoensso.timbre.logf_STAR_.cljs$lang$macro = true);

var ret__4820__auto___22581 = (function (){
taoensso.timbre.logf = (function taoensso$timbre$logf(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22582 = arguments.length;
var i__4772__auto___22583 = (0);
while(true){
if((i__4772__auto___22583 < len__4771__auto___22582)){
args__4777__auto__.push((arguments[i__4772__auto___22583]));

var G__22584 = (i__4772__auto___22583 + (1));
i__4772__auto___22583 = G__22584;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(taoensso.timbre.logf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.logf.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.logf.cljs$lang$applyTo = (function (seq22577){
var G__22578 = cljs.core.first.call(null,seq22577);
var seq22577__$1 = cljs.core.next.call(null,seq22577);
var G__22579 = cljs.core.first.call(null,seq22577__$1);
var seq22577__$2 = cljs.core.next.call(null,seq22577__$1);
var G__22580 = cljs.core.first.call(null,seq22577__$2);
var seq22577__$3 = cljs.core.next.call(null,seq22577__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22578,G__22579,G__22580,seq22577__$3);
}));

return null;
})()
;
(taoensso.timbre.logf.cljs$lang$macro = true);

var ret__4820__auto___22588 = (function (){
taoensso.timbre.tracef = (function taoensso$timbre$tracef(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22589 = arguments.length;
var i__4772__auto___22590 = (0);
while(true){
if((i__4772__auto___22590 < len__4771__auto___22589)){
args__4777__auto__.push((arguments[i__4772__auto___22590]));

var G__22591 = (i__4772__auto___22590 + (1));
i__4772__auto___22590 = G__22591;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(taoensso.timbre.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"trace","trace",-1082747415),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.tracef.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.tracef.cljs$lang$applyTo = (function (seq22585){
var G__22586 = cljs.core.first.call(null,seq22585);
var seq22585__$1 = cljs.core.next.call(null,seq22585);
var G__22587 = cljs.core.first.call(null,seq22585__$1);
var seq22585__$2 = cljs.core.next.call(null,seq22585__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22586,G__22587,seq22585__$2);
}));

return null;
})()
;
(taoensso.timbre.tracef.cljs$lang$macro = true);

var ret__4820__auto___22595 = (function (){
taoensso.timbre.debugf = (function taoensso$timbre$debugf(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22596 = arguments.length;
var i__4772__auto___22597 = (0);
while(true){
if((i__4772__auto___22597 < len__4771__auto___22596)){
args__4777__auto__.push((arguments[i__4772__auto___22597]));

var G__22598 = (i__4772__auto___22597 + (1));
i__4772__auto___22597 = G__22598;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(taoensso.timbre.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.debugf.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.debugf.cljs$lang$applyTo = (function (seq22592){
var G__22593 = cljs.core.first.call(null,seq22592);
var seq22592__$1 = cljs.core.next.call(null,seq22592);
var G__22594 = cljs.core.first.call(null,seq22592__$1);
var seq22592__$2 = cljs.core.next.call(null,seq22592__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22593,G__22594,seq22592__$2);
}));

return null;
})()
;
(taoensso.timbre.debugf.cljs$lang$macro = true);

var ret__4820__auto___22602 = (function (){
taoensso.timbre.infof = (function taoensso$timbre$infof(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22603 = arguments.length;
var i__4772__auto___22604 = (0);
while(true){
if((i__4772__auto___22604 < len__4771__auto___22603)){
args__4777__auto__.push((arguments[i__4772__auto___22604]));

var G__22605 = (i__4772__auto___22604 + (1));
i__4772__auto___22604 = G__22605;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(taoensso.timbre.infof.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"info","info",-317069002),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.infof.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.infof.cljs$lang$applyTo = (function (seq22599){
var G__22600 = cljs.core.first.call(null,seq22599);
var seq22599__$1 = cljs.core.next.call(null,seq22599);
var G__22601 = cljs.core.first.call(null,seq22599__$1);
var seq22599__$2 = cljs.core.next.call(null,seq22599__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22600,G__22601,seq22599__$2);
}));

return null;
})()
;
(taoensso.timbre.infof.cljs$lang$macro = true);

var ret__4820__auto___22609 = (function (){
taoensso.timbre.warnf = (function taoensso$timbre$warnf(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22610 = arguments.length;
var i__4772__auto___22611 = (0);
while(true){
if((i__4772__auto___22611 < len__4771__auto___22610)){
args__4777__auto__.push((arguments[i__4772__auto___22611]));

var G__22612 = (i__4772__auto___22611 + (1));
i__4772__auto___22611 = G__22612;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(taoensso.timbre.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"warn","warn",-436710552),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.warnf.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.warnf.cljs$lang$applyTo = (function (seq22606){
var G__22607 = cljs.core.first.call(null,seq22606);
var seq22606__$1 = cljs.core.next.call(null,seq22606);
var G__22608 = cljs.core.first.call(null,seq22606__$1);
var seq22606__$2 = cljs.core.next.call(null,seq22606__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22607,G__22608,seq22606__$2);
}));

return null;
})()
;
(taoensso.timbre.warnf.cljs$lang$macro = true);

var ret__4820__auto___22616 = (function (){
taoensso.timbre.errorf = (function taoensso$timbre$errorf(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22617 = arguments.length;
var i__4772__auto___22618 = (0);
while(true){
if((i__4772__auto___22618 < len__4771__auto___22617)){
args__4777__auto__.push((arguments[i__4772__auto___22618]));

var G__22619 = (i__4772__auto___22618 + (1));
i__4772__auto___22618 = G__22619;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(taoensso.timbre.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"error","error",-978969032),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.errorf.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.errorf.cljs$lang$applyTo = (function (seq22613){
var G__22614 = cljs.core.first.call(null,seq22613);
var seq22613__$1 = cljs.core.next.call(null,seq22613);
var G__22615 = cljs.core.first.call(null,seq22613__$1);
var seq22613__$2 = cljs.core.next.call(null,seq22613__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22614,G__22615,seq22613__$2);
}));

return null;
})()
;
(taoensso.timbre.errorf.cljs$lang$macro = true);

var ret__4820__auto___22623 = (function (){
taoensso.timbre.fatalf = (function taoensso$timbre$fatalf(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22624 = arguments.length;
var i__4772__auto___22625 = (0);
while(true){
if((i__4772__auto___22625 < len__4771__auto___22624)){
args__4777__auto__.push((arguments[i__4772__auto___22625]));

var G__22626 = (i__4772__auto___22625 + (1));
i__4772__auto___22625 = G__22626;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(taoensso.timbre.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.fatalf.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.fatalf.cljs$lang$applyTo = (function (seq22620){
var G__22621 = cljs.core.first.call(null,seq22620);
var seq22620__$1 = cljs.core.next.call(null,seq22620);
var G__22622 = cljs.core.first.call(null,seq22620__$1);
var seq22620__$2 = cljs.core.next.call(null,seq22620__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22621,G__22622,seq22620__$2);
}));

return null;
})()
;
(taoensso.timbre.fatalf.cljs$lang$macro = true);

var ret__4820__auto___22630 = (function (){
taoensso.timbre.reportf = (function taoensso$timbre$reportf(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22631 = arguments.length;
var i__4772__auto___22632 = (0);
while(true){
if((i__4772__auto___22632 < len__4771__auto___22631)){
args__4777__auto__.push((arguments[i__4772__auto___22632]));

var G__22633 = (i__4772__auto___22632 + (1));
i__4772__auto___22632 = G__22633;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(taoensso.timbre.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"report","report",1394055010),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"f","f",-1597136552),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),taoensso.timbre.fline.call(null,_AMPERSAND_form)], null),null,(1),null)))));
}));

(taoensso.timbre.reportf.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.reportf.cljs$lang$applyTo = (function (seq22627){
var G__22628 = cljs.core.first.call(null,seq22627);
var seq22627__$1 = cljs.core.next.call(null,seq22627);
var G__22629 = cljs.core.first.call(null,seq22627__$1);
var seq22627__$2 = cljs.core.next.call(null,seq22627__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22628,G__22629,seq22627__$2);
}));

return null;
})()
;
(taoensso.timbre.reportf.cljs$lang$macro = true);

var ret__4820__auto___22639 = (function (){
taoensso.timbre._log_errors = (function taoensso$timbre$_log_errors(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22640 = arguments.length;
var i__4772__auto___22641 = (0);
while(true){
if((i__4772__auto___22641 < len__4771__auto___22640)){
args__4777__auto__.push((arguments[i__4772__auto___22641]));

var G__22642 = (i__4772__auto___22641 + (1));
i__4772__auto___22641 = G__22642;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return taoensso.timbre._log_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(taoensso.timbre._log_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","catching","taoensso.encore/catching",-139882551,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__22634__auto__","e__22634__auto__",-34529158,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"error","error",-978969032),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"e__22634__auto__","e__22634__auto__",-34529158,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),_QMARK_line], null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(taoensso.timbre._log_errors.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre._log_errors.cljs$lang$applyTo = (function (seq22635){
var G__22636 = cljs.core.first.call(null,seq22635);
var seq22635__$1 = cljs.core.next.call(null,seq22635);
var G__22637 = cljs.core.first.call(null,seq22635__$1);
var seq22635__$2 = cljs.core.next.call(null,seq22635__$1);
var G__22638 = cljs.core.first.call(null,seq22635__$2);
var seq22635__$3 = cljs.core.next.call(null,seq22635__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22636,G__22637,G__22638,seq22635__$3);
}));

return null;
})()
;
(taoensso.timbre._log_errors.cljs$lang$macro = true);

var ret__4820__auto___22648 = (function (){
taoensso.timbre._log_and_rethrow_errors = (function taoensso$timbre$_log_and_rethrow_errors(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22649 = arguments.length;
var i__4772__auto___22650 = (0);
while(true){
if((i__4772__auto___22650 < len__4771__auto___22649)){
args__4777__auto__.push((arguments[i__4772__auto___22650]));

var G__22651 = (i__4772__auto___22650 + (1));
i__4772__auto___22650 = G__22651;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return taoensso.timbre._log_and_rethrow_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(taoensso.timbre._log_and_rethrow_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","catching","taoensso.encore/catching",-139882551,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__22643__auto__","e__22643__auto__",2136251016,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"error","error",-978969032),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"e__22643__auto__","e__22643__auto__",2136251016,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?line","?line",-631853385),_QMARK_line], null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__22643__auto__","e__22643__auto__",2136251016,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(taoensso.timbre._log_and_rethrow_errors.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre._log_and_rethrow_errors.cljs$lang$applyTo = (function (seq22644){
var G__22645 = cljs.core.first.call(null,seq22644);
var seq22644__$1 = cljs.core.next.call(null,seq22644);
var G__22646 = cljs.core.first.call(null,seq22644__$1);
var seq22644__$2 = cljs.core.next.call(null,seq22644__$1);
var G__22647 = cljs.core.first.call(null,seq22644__$2);
var seq22644__$3 = cljs.core.next.call(null,seq22644__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22645,G__22646,G__22647,seq22644__$3);
}));

return null;
})()
;
(taoensso.timbre._log_and_rethrow_errors.cljs$lang$macro = true);

var ret__4820__auto___22656 = (function (){
taoensso.timbre._logged_future = (function taoensso$timbre$_logged_future(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22657 = arguments.length;
var i__4772__auto___22658 = (0);
while(true){
if((i__4772__auto___22658 < len__4771__auto___22657)){
args__4777__auto__.push((arguments[i__4772__auto___22658]));

var G__22659 = (i__4772__auto___22658 + (1));
i__4772__auto___22658 = G__22659;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return taoensso.timbre._logged_future.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(taoensso.timbre._logged_future.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","future","taoensso.timbre/future",997994192,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-log-errors","taoensso.timbre/-log-errors",572252972,null),null,(1),null)),(new cljs.core.List(null,_QMARK_line,null,(1),null)),body))),null,(1),null)))));
}));

(taoensso.timbre._logged_future.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre._logged_future.cljs$lang$applyTo = (function (seq22652){
var G__22653 = cljs.core.first.call(null,seq22652);
var seq22652__$1 = cljs.core.next.call(null,seq22652);
var G__22654 = cljs.core.first.call(null,seq22652__$1);
var seq22652__$2 = cljs.core.next.call(null,seq22652__$1);
var G__22655 = cljs.core.first.call(null,seq22652__$2);
var seq22652__$3 = cljs.core.next.call(null,seq22652__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22653,G__22654,G__22655,seq22652__$3);
}));

return null;
})()
;
(taoensso.timbre._logged_future.cljs$lang$macro = true);

var ret__4820__auto___22663 = (function (){
taoensso.timbre.log_errors = (function taoensso$timbre$log_errors(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22664 = arguments.length;
var i__4772__auto___22665 = (0);
while(true){
if((i__4772__auto___22665 < len__4771__auto___22664)){
args__4777__auto__.push((arguments[i__4772__auto___22665]));

var G__22666 = (i__4772__auto___22665 + (1));
i__4772__auto___22665 = G__22666;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.log_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(taoensso.timbre.log_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-log-errors","taoensso.timbre/-log-errors",572252972,null),null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline.call(null,_AMPERSAND_form),null,(1),null)),body)));
}));

(taoensso.timbre.log_errors.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.log_errors.cljs$lang$applyTo = (function (seq22660){
var G__22661 = cljs.core.first.call(null,seq22660);
var seq22660__$1 = cljs.core.next.call(null,seq22660);
var G__22662 = cljs.core.first.call(null,seq22660__$1);
var seq22660__$2 = cljs.core.next.call(null,seq22660__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22661,G__22662,seq22660__$2);
}));

return null;
})()
;
(taoensso.timbre.log_errors.cljs$lang$macro = true);

var ret__4820__auto___22670 = (function (){
taoensso.timbre.log_and_rethrow_errors = (function taoensso$timbre$log_and_rethrow_errors(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22671 = arguments.length;
var i__4772__auto___22672 = (0);
while(true){
if((i__4772__auto___22672 < len__4771__auto___22671)){
args__4777__auto__.push((arguments[i__4772__auto___22672]));

var G__22673 = (i__4772__auto___22672 + (1));
i__4772__auto___22672 = G__22673;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.log_and_rethrow_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(taoensso.timbre.log_and_rethrow_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-log-and-rethrow-errors","taoensso.timbre/-log-and-rethrow-errors",994909149,null),null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline.call(null,_AMPERSAND_form),null,(1),null)),body)));
}));

(taoensso.timbre.log_and_rethrow_errors.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.log_and_rethrow_errors.cljs$lang$applyTo = (function (seq22667){
var G__22668 = cljs.core.first.call(null,seq22667);
var seq22667__$1 = cljs.core.next.call(null,seq22667);
var G__22669 = cljs.core.first.call(null,seq22667__$1);
var seq22667__$2 = cljs.core.next.call(null,seq22667__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22668,G__22669,seq22667__$2);
}));

return null;
})()
;
(taoensso.timbre.log_and_rethrow_errors.cljs$lang$macro = true);

var ret__4820__auto___22677 = (function (){
taoensso.timbre.logged_future = (function taoensso$timbre$logged_future(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22678 = arguments.length;
var i__4772__auto___22679 = (0);
while(true){
if((i__4772__auto___22679 < len__4771__auto___22678)){
args__4777__auto__.push((arguments[i__4772__auto___22679]));

var G__22680 = (i__4772__auto___22679 + (1));
i__4772__auto___22679 = G__22680;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.logged_future.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(taoensso.timbre.logged_future.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-logged-future","taoensso.timbre/-logged-future",-576685890,null),null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline.call(null,_AMPERSAND_form),null,(1),null)),body)));
}));

(taoensso.timbre.logged_future.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.logged_future.cljs$lang$applyTo = (function (seq22674){
var G__22675 = cljs.core.first.call(null,seq22674);
var seq22674__$1 = cljs.core.next.call(null,seq22674);
var G__22676 = cljs.core.first.call(null,seq22674__$1);
var seq22674__$2 = cljs.core.next.call(null,seq22674__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22675,G__22676,seq22674__$2);
}));

return null;
})()
;
(taoensso.timbre.logged_future.cljs$lang$macro = true);

var ret__4820__auto___22682 = taoensso.timbre._spy = (function taoensso$timbre$_spy(_AMPERSAND_form,_AMPERSAND_env,_QMARK_line,config,level,name,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-log-and-rethrow-errors","taoensso.timbre/-log-and-rethrow-errors",994909149,null),null,(1),null)),(new cljs.core.List(null,_QMARK_line,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"result__22681__auto__","result__22681__auto__",-554957507,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log!","taoensso.timbre/log!",-852972943,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"p","p",151049309),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,"=>",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__22681__auto__","result__22681__auto__",-554957507,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"?line","?line",-631853385),_QMARK_line,new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"spying?","spying?",1753444487),true], null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__22681__auto__","result__22681__auto__",-554957507,null),null,(1),null))))),null,(1),null)))));
});
(taoensso.timbre._spy.cljs$lang$macro = true);

var ret__4820__auto___22685 = (function (){
/**
 * Evaluates named expression and logs its result. Always returns the result.
 *   Defaults to :debug logging level and unevaluated expression as name.
 */
taoensso.timbre.spy = (function taoensso$timbre$spy(var_args){
var G__22684 = arguments.length;
switch (G__22684) {
case 3:
return taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-spy","taoensso.timbre/-spy",-337382415,null),null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline.call(null,_AMPERSAND_form),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))));
}));

(taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,level,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-spy","taoensso.timbre/-spy",-337382415,null),null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline.call(null,_AMPERSAND_form),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))));
}));

(taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,level,name,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-spy","taoensso.timbre/-spy",-337382415,null),null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline.call(null,_AMPERSAND_form),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))));
}));

(taoensso.timbre.spy.cljs$core$IFn$_invoke$arity$6 = (function (_AMPERSAND_form,_AMPERSAND_env,config,level,name,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","-spy","taoensso.timbre/-spy",-337382415,null),null,(1),null)),(new cljs.core.List(null,taoensso.timbre.fline.call(null,_AMPERSAND_form),null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))));
}));

(taoensso.timbre.spy.cljs$lang$maxFixedArity = 6);

return null;
})()
;
(taoensso.timbre.spy.cljs$lang$macro = true);

var ret__4820__auto___22687 = taoensso.timbre.get_env = (function taoensso$timbre$get_env(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","get-env","taoensso.encore/get-env",2067773776,null),null,(1),null)))));
});
(taoensso.timbre.get_env.cljs$lang$macro = true);

var ret__4820__auto___22692 = (function (){
taoensso.timbre.with_default_outs = (function taoensso$timbre$with_default_outs(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22693 = arguments.length;
var i__4772__auto___22694 = (0);
while(true){
if((i__4772__auto___22694 < len__4771__auto___22693)){
args__4777__auto__.push((arguments[i__4772__auto___22694]));

var G__22695 = (i__4772__auto___22694 + (1));
i__4772__auto___22694 = G__22695;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.with_default_outs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(taoensso.timbre.with_default_outs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","default-out","taoensso.timbre/default-out",858097375,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*err*","taoensso.timbre/*err*",-1766459963,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","default-err","taoensso.timbre/default-err",-724946294,null),null,(1),null)))))),null,(1),null)),body)));
}));

(taoensso.timbre.with_default_outs.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.with_default_outs.cljs$lang$applyTo = (function (seq22689){
var G__22690 = cljs.core.first.call(null,seq22689);
var seq22689__$1 = cljs.core.next.call(null,seq22689);
var G__22691 = cljs.core.first.call(null,seq22689__$1);
var seq22689__$2 = cljs.core.next.call(null,seq22689__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22690,G__22691,seq22689__$2);
}));

return null;
})()
;
(taoensso.timbre.with_default_outs.cljs$lang$macro = true);

taoensso.timbre.stacktrace = (function taoensso$timbre$stacktrace(var_args){
var G__22697 = arguments.length;
switch (G__22697) {
case 1:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1 = (function (err){
return taoensso.timbre.stacktrace.call(null,err,null);
}));

(taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (err,opts){
var or__4160__auto__ = err.stack;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(err);
}
}));

(taoensso.timbre.stacktrace.cljs$lang$maxFixedArity = 2);

var ret__4820__auto___22703 = (function (){
/**
 * Handy for sampled logging, etc.
 */
taoensso.timbre.sometimes = (function taoensso$timbre$sometimes(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22704 = arguments.length;
var i__4772__auto___22705 = (0);
while(true){
if((i__4772__auto___22705 < len__4771__auto___22704)){
args__4777__auto__.push((arguments[i__4772__auto___22705]));

var G__22706 = (i__4772__auto___22705 + (1));
i__4772__auto___22705 = G__22706;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.sometimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(taoensso.timbre.sometimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,probability,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,probability,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"Probability: 0 <= p <= 1",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rand","cljs.core/rand",-1079209816,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,probability,null,(1),null))))),null,(1),null)),body))),null,(1),null)))));
}));

(taoensso.timbre.sometimes.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.sometimes.cljs$lang$applyTo = (function (seq22699){
var G__22700 = cljs.core.first.call(null,seq22699);
var seq22699__$1 = cljs.core.next.call(null,seq22699);
var G__22701 = cljs.core.first.call(null,seq22699__$1);
var seq22699__$2 = cljs.core.next.call(null,seq22699__$1);
var G__22702 = cljs.core.first.call(null,seq22699__$2);
var seq22699__$3 = cljs.core.next.call(null,seq22699__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22700,G__22701,G__22702,seq22699__$3);
}));

return null;
})()
;
(taoensso.timbre.sometimes.cljs$lang$macro = true);

taoensso.timbre.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;

taoensso.timbre.ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"fatal","fatal",1874419888),new cljs.core.Keyword(null,"report","report",1394055010)], null);

taoensso.timbre.log_QMARK_ = taoensso.timbre.may_log_QMARK_;

/**
 * DEPRECATED, prefer `default-config`
 */
taoensso.timbre.example_config = taoensso.timbre.default_config;

taoensso.timbre.logging_enabled_QMARK_ = (function taoensso$timbre$logging_enabled_QMARK_(level,compile_time_ns){
return taoensso.timbre.may_log_QMARK_.call(null,level,cljs.core.str.cljs$core$IFn$_invoke$arity$1(compile_time_ns));
});

taoensso.timbre.str_println = (function taoensso$timbre$str_println(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22721 = arguments.length;
var i__4772__auto___22722 = (0);
while(true){
if((i__4772__auto___22722 < len__4771__auto___22721)){
args__4777__auto__.push((arguments[i__4772__auto___22722]));

var G__22723 = (i__4772__auto___22722 + (1));
i__4772__auto___22722 = G__22723;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.timbre.str_join.call(null,xs);
}));

(taoensso.timbre.str_println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.timbre.str_println.cljs$lang$applyTo = (function (seq22707){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22707));
}));


var ret__4820__auto___22724 = (function (){
taoensso.timbre.with_log_level = (function taoensso$timbre$with_log_level(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22725 = arguments.length;
var i__4772__auto___22726 = (0);
while(true){
if((i__4772__auto___22726 < len__4771__auto___22725)){
args__4777__auto__.push((arguments[i__4772__auto___22726]));

var G__22727 = (i__4772__auto___22726 + (1));
i__4772__auto___22726 = G__22727;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_log_level.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(taoensso.timbre.with_log_level.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","with-level","taoensso.timbre/with-level",1514604232,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),body)));
}));

(taoensso.timbre.with_log_level.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_log_level.cljs$lang$applyTo = (function (seq22708){
var G__22709 = cljs.core.first.call(null,seq22708);
var seq22708__$1 = cljs.core.next.call(null,seq22708);
var G__22710 = cljs.core.first.call(null,seq22708__$1);
var seq22708__$2 = cljs.core.next.call(null,seq22708__$1);
var G__22711 = cljs.core.first.call(null,seq22708__$2);
var seq22708__$3 = cljs.core.next.call(null,seq22708__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22709,G__22710,G__22711,seq22708__$3);
}));

return null;
})()
;
(taoensso.timbre.with_log_level.cljs$lang$macro = true);


var ret__4820__auto___22728 = (function (){
taoensso.timbre.with_logging_config = (function taoensso$timbre$with_logging_config(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22729 = arguments.length;
var i__4772__auto___22730 = (0);
while(true){
if((i__4772__auto___22730 < len__4771__auto___22729)){
args__4777__auto__.push((arguments[i__4772__auto___22730]));

var G__22731 = (i__4772__auto___22730 + (1));
i__4772__auto___22730 = G__22731;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_logging_config.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(taoensso.timbre.with_logging_config.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,config,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","with-config","taoensso.timbre/with-config",-1144239945,null),null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),body)));
}));

(taoensso.timbre.with_logging_config.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_logging_config.cljs$lang$applyTo = (function (seq22712){
var G__22713 = cljs.core.first.call(null,seq22712);
var seq22712__$1 = cljs.core.next.call(null,seq22712);
var G__22714 = cljs.core.first.call(null,seq22712__$1);
var seq22712__$2 = cljs.core.next.call(null,seq22712__$1);
var G__22715 = cljs.core.first.call(null,seq22712__$2);
var seq22712__$3 = cljs.core.next.call(null,seq22712__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22713,G__22714,G__22715,seq22712__$3);
}));

return null;
})()
;
(taoensso.timbre.with_logging_config.cljs$lang$macro = true);


var ret__4820__auto___22732 = (function (){
taoensso.timbre.logp = (function taoensso$timbre$logp(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22733 = arguments.length;
var i__4772__auto___22734 = (0);
while(true){
if((i__4772__auto___22734 < len__4771__auto___22733)){
args__4777__auto__.push((arguments[i__4772__auto___22734]));

var G__22735 = (i__4772__auto___22734 + (1));
i__4772__auto___22734 = G__22735;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.logp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(taoensso.timbre.logp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log","taoensso.timbre/log",-1743194436,null),null,(1),null)),args)));
}));

(taoensso.timbre.logp.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.logp.cljs$lang$applyTo = (function (seq22716){
var G__22717 = cljs.core.first.call(null,seq22716);
var seq22716__$1 = cljs.core.next.call(null,seq22716);
var G__22718 = cljs.core.first.call(null,seq22716__$1);
var seq22716__$2 = cljs.core.next.call(null,seq22716__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22717,G__22718,seq22716__$2);
}));

return null;
})()
;
(taoensso.timbre.logp.cljs$lang$macro = true);


var ret__4820__auto___22736 = (function (){
taoensso.timbre.log_env = (function taoensso$timbre$log_env(var_args){
var G__22720 = arguments.length;
switch (G__22720) {
case 2:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log-env","taoensso.timbre/log-env",-166251696,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),null,(1),null)))));
}));

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,level){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log-env","taoensso.timbre/log-env",-166251696,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,"&env",null,(1),null)))));
}));

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,level,name){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log-env","taoensso.timbre/log-env",-166251696,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)))));
}));

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,config,level,name){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log*","taoensso.timbre/log*",1207553629,null),null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,"=>",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","get-env","taoensso.timbre/get-env",92671901,null),null,(1),null))))),null,(1),null)))));
}));

(taoensso.timbre.log_env.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(taoensso.timbre.log_env.cljs$lang$macro = true);


//# sourceMappingURL=timbre.js.map
