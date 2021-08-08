// Compiled by ClojureScript 1.10.844 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__35992 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__35993 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__35993);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___36026 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___36026)){
var new_db_36027 = temp__5753__auto___36026;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_36027);
} else {
}

var seq__35994 = cljs.core.seq.call(null,effects_without_db);
var chunk__35995 = null;
var count__35996 = (0);
var i__35997 = (0);
while(true){
if((i__35997 < count__35996)){
var vec__36004 = cljs.core._nth.call(null,chunk__35995,i__35997);
var effect_key = cljs.core.nth.call(null,vec__36004,(0),null);
var effect_value = cljs.core.nth.call(null,vec__36004,(1),null);
var temp__5751__auto___36028 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___36028)){
var effect_fn_36029 = temp__5751__auto___36028;
effect_fn_36029.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__36030 = seq__35994;
var G__36031 = chunk__35995;
var G__36032 = count__35996;
var G__36033 = (i__35997 + (1));
seq__35994 = G__36030;
chunk__35995 = G__36031;
count__35996 = G__36032;
i__35997 = G__36033;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__35994);
if(temp__5753__auto__){
var seq__35994__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35994__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__35994__$1);
var G__36034 = cljs.core.chunk_rest.call(null,seq__35994__$1);
var G__36035 = c__4591__auto__;
var G__36036 = cljs.core.count.call(null,c__4591__auto__);
var G__36037 = (0);
seq__35994 = G__36034;
chunk__35995 = G__36035;
count__35996 = G__36036;
i__35997 = G__36037;
continue;
} else {
var vec__36007 = cljs.core.first.call(null,seq__35994__$1);
var effect_key = cljs.core.nth.call(null,vec__36007,(0),null);
var effect_value = cljs.core.nth.call(null,vec__36007,(1),null);
var temp__5751__auto___36038 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___36038)){
var effect_fn_36039 = temp__5751__auto___36038;
effect_fn_36039.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__36040 = cljs.core.next.call(null,seq__35994__$1);
var G__36041 = null;
var G__36042 = (0);
var G__36043 = (0);
seq__35994 = G__36040;
chunk__35995 = G__36041;
count__35996 = G__36042;
i__35997 = G__36043;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__35790__auto___36044 = re_frame.interop.now.call(null);
var duration__35791__auto___36045 = (end__35790__auto___36044 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__35791__auto___36045,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__35790__auto___36044);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__35992);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___36046 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___36046)){
var new_db_36047 = temp__5753__auto___36046;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_36047);
} else {
}

var seq__36010 = cljs.core.seq.call(null,effects_without_db);
var chunk__36011 = null;
var count__36012 = (0);
var i__36013 = (0);
while(true){
if((i__36013 < count__36012)){
var vec__36020 = cljs.core._nth.call(null,chunk__36011,i__36013);
var effect_key = cljs.core.nth.call(null,vec__36020,(0),null);
var effect_value = cljs.core.nth.call(null,vec__36020,(1),null);
var temp__5751__auto___36048 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___36048)){
var effect_fn_36049 = temp__5751__auto___36048;
effect_fn_36049.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__36050 = seq__36010;
var G__36051 = chunk__36011;
var G__36052 = count__36012;
var G__36053 = (i__36013 + (1));
seq__36010 = G__36050;
chunk__36011 = G__36051;
count__36012 = G__36052;
i__36013 = G__36053;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__36010);
if(temp__5753__auto__){
var seq__36010__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36010__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__36010__$1);
var G__36054 = cljs.core.chunk_rest.call(null,seq__36010__$1);
var G__36055 = c__4591__auto__;
var G__36056 = cljs.core.count.call(null,c__4591__auto__);
var G__36057 = (0);
seq__36010 = G__36054;
chunk__36011 = G__36055;
count__36012 = G__36056;
i__36013 = G__36057;
continue;
} else {
var vec__36023 = cljs.core.first.call(null,seq__36010__$1);
var effect_key = cljs.core.nth.call(null,vec__36023,(0),null);
var effect_value = cljs.core.nth.call(null,vec__36023,(1),null);
var temp__5751__auto___36058 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___36058)){
var effect_fn_36059 = temp__5751__auto___36058;
effect_fn_36059.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__36060 = cljs.core.next.call(null,seq__36010__$1);
var G__36061 = null;
var G__36062 = (0);
var G__36063 = (0);
seq__36010 = G__36060;
chunk__36011 = G__36061;
count__36012 = G__36062;
i__36013 = G__36063;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__36064){
var map__36065 = p__36064;
var map__36065__$1 = cljs.core.__destructure_map.call(null,map__36065);
var effect = map__36065__$1;
var ms = cljs.core.get.call(null,map__36065__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__36065__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
return re_frame.interop.set_timeout_BANG_.call(null,(function (){
return re_frame.router.dispatch.call(null,dispatch);
}),ms);
}
});
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_.call(null,value)){
return re_frame.fx.dispatch_later.call(null,value);
} else {
var seq__36066 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__36067 = null;
var count__36068 = (0);
var i__36069 = (0);
while(true){
if((i__36069 < count__36068)){
var effect = cljs.core._nth.call(null,chunk__36067,i__36069);
re_frame.fx.dispatch_later.call(null,effect);


var G__36070 = seq__36066;
var G__36071 = chunk__36067;
var G__36072 = count__36068;
var G__36073 = (i__36069 + (1));
seq__36066 = G__36070;
chunk__36067 = G__36071;
count__36068 = G__36072;
i__36069 = G__36073;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__36066);
if(temp__5753__auto__){
var seq__36066__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36066__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__36066__$1);
var G__36074 = cljs.core.chunk_rest.call(null,seq__36066__$1);
var G__36075 = c__4591__auto__;
var G__36076 = cljs.core.count.call(null,c__4591__auto__);
var G__36077 = (0);
seq__36066 = G__36074;
chunk__36067 = G__36075;
count__36068 = G__36076;
i__36069 = G__36077;
continue;
} else {
var effect = cljs.core.first.call(null,seq__36066__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__36078 = cljs.core.next.call(null,seq__36066__$1);
var G__36079 = null;
var G__36080 = (0);
var G__36081 = (0);
seq__36066 = G__36078;
chunk__36067 = G__36079;
count__36068 = G__36080;
i__36069 = G__36081;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_.call(null,seq_of_effects)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type.call(null,seq_of_effects));
} else {
var seq__36082 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__36083 = null;
var count__36084 = (0);
var i__36085 = (0);
while(true){
if((i__36085 < count__36084)){
var vec__36092 = cljs.core._nth.call(null,chunk__36083,i__36085);
var effect_key = cljs.core.nth.call(null,vec__36092,(0),null);
var effect_value = cljs.core.nth.call(null,vec__36092,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5751__auto___36098 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___36098)){
var effect_fn_36099 = temp__5751__auto___36098;
effect_fn_36099.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__36100 = seq__36082;
var G__36101 = chunk__36083;
var G__36102 = count__36084;
var G__36103 = (i__36085 + (1));
seq__36082 = G__36100;
chunk__36083 = G__36101;
count__36084 = G__36102;
i__36085 = G__36103;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__36082);
if(temp__5753__auto__){
var seq__36082__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36082__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__36082__$1);
var G__36104 = cljs.core.chunk_rest.call(null,seq__36082__$1);
var G__36105 = c__4591__auto__;
var G__36106 = cljs.core.count.call(null,c__4591__auto__);
var G__36107 = (0);
seq__36082 = G__36104;
chunk__36083 = G__36105;
count__36084 = G__36106;
i__36085 = G__36107;
continue;
} else {
var vec__36095 = cljs.core.first.call(null,seq__36082__$1);
var effect_key = cljs.core.nth.call(null,vec__36095,(0),null);
var effect_value = cljs.core.nth.call(null,vec__36095,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5751__auto___36108 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___36108)){
var effect_fn_36109 = temp__5751__auto___36108;
effect_fn_36109.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__36110 = cljs.core.next.call(null,seq__36082__$1);
var G__36111 = null;
var G__36112 = (0);
var G__36113 = (0);
seq__36082 = G__36110;
chunk__36083 = G__36111;
count__36084 = G__36112;
i__36085 = G__36113;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__36114 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__36115 = null;
var count__36116 = (0);
var i__36117 = (0);
while(true){
if((i__36117 < count__36116)){
var event = cljs.core._nth.call(null,chunk__36115,i__36117);
re_frame.router.dispatch.call(null,event);


var G__36118 = seq__36114;
var G__36119 = chunk__36115;
var G__36120 = count__36116;
var G__36121 = (i__36117 + (1));
seq__36114 = G__36118;
chunk__36115 = G__36119;
count__36116 = G__36120;
i__36117 = G__36121;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__36114);
if(temp__5753__auto__){
var seq__36114__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36114__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__36114__$1);
var G__36122 = cljs.core.chunk_rest.call(null,seq__36114__$1);
var G__36123 = c__4591__auto__;
var G__36124 = cljs.core.count.call(null,c__4591__auto__);
var G__36125 = (0);
seq__36114 = G__36122;
chunk__36115 = G__36123;
count__36116 = G__36124;
i__36117 = G__36125;
continue;
} else {
var event = cljs.core.first.call(null,seq__36114__$1);
re_frame.router.dispatch.call(null,event);


var G__36126 = cljs.core.next.call(null,seq__36114__$1);
var G__36127 = null;
var G__36128 = (0);
var G__36129 = (0);
seq__36114 = G__36126;
chunk__36115 = G__36127;
count__36116 = G__36128;
i__36117 = G__36129;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__36130 = cljs.core.seq.call(null,value);
var chunk__36131 = null;
var count__36132 = (0);
var i__36133 = (0);
while(true){
if((i__36133 < count__36132)){
var event = cljs.core._nth.call(null,chunk__36131,i__36133);
clear_event.call(null,event);


var G__36134 = seq__36130;
var G__36135 = chunk__36131;
var G__36136 = count__36132;
var G__36137 = (i__36133 + (1));
seq__36130 = G__36134;
chunk__36131 = G__36135;
count__36132 = G__36136;
i__36133 = G__36137;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__36130);
if(temp__5753__auto__){
var seq__36130__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36130__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__36130__$1);
var G__36138 = cljs.core.chunk_rest.call(null,seq__36130__$1);
var G__36139 = c__4591__auto__;
var G__36140 = cljs.core.count.call(null,c__4591__auto__);
var G__36141 = (0);
seq__36130 = G__36138;
chunk__36131 = G__36139;
count__36132 = G__36140;
i__36133 = G__36141;
continue;
} else {
var event = cljs.core.first.call(null,seq__36130__$1);
clear_event.call(null,event);


var G__36142 = cljs.core.next.call(null,seq__36130__$1);
var G__36143 = null;
var G__36144 = (0);
var G__36145 = (0);
seq__36130 = G__36142;
chunk__36131 = G__36143;
count__36132 = G__36144;
i__36133 = G__36145;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
