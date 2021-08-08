// Compiled by ClojureScript 1.10.844 {}
goog.provide('repl.repl.ws');
goog.require('cljs.core');
goog.require('goog.date.Date');
goog.require('taoensso.encore');
goog.require('taoensso.timbre');
goog.require('taoensso.sente');
goog.require('taoensso.sente.packers.transit');
goog.require('re_frame.core');



if((typeof repl !== 'undefined') && (typeof repl.repl !== 'undefined') && (typeof repl.repl.ws !== 'undefined') && (typeof repl.repl.ws._event_msg_handler !== 'undefined')){
} else {
/**
 * Dispatch on :id from Sente `event-msg`s
 */
repl.repl.ws._event_msg_handler = (function (){var method_table__4654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"repl.repl.ws","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4658__auto__,method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__));
})();
}
/**
 * Wraps `-event-msg-handler` with logging, error catching, etc.
 */
repl.repl.ws.event_msg_handler = (function repl$repl$ws$event_msg_handler(ev_msg){
return repl.repl.ws._event_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,repl.repl.ws._event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__31403){
var map__31404 = p__31403;
var map__31404__$1 = cljs.core.__destructure_map.call(null,map__31404);
var event = cljs.core.get.call(null,map__31404__$1,new cljs.core.Keyword(null,"event","event",301435442));
return cljs.core.println.call(null,"Unhandled event: %s",event);
}));
repl.repl.ws.client_uid = cljs.core.atom.call(null,null);
cljs.core._add_method.call(null,repl.repl.ws._event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__31405){
var map__31406 = p__31405;
var map__31406__$1 = cljs.core.__destructure_map.call(null,map__31406);
var _QMARK_data = cljs.core.get.call(null,map__31406__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__31407 = (function (){var e = (function (){try{if(cljs.core.vector_QMARK_.call(null,_QMARK_data)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e31410){if((e31410 instanceof Error)){
var e = e31410;
return e;
} else {
throw e31410;

}
}})();
if((e == null)){
return _QMARK_data;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"repl.repl.ws",31,"(vector? ?data)",_QMARK_data,e,null);
}
})();
var _ = cljs.core.nth.call(null,vec__31407,(0),null);
var new_state_map = cljs.core.nth.call(null,vec__31407,(1),null);
cljs.core.reset_BANG_.call(null,repl.repl.ws.client_uid,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(new_state_map));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","client-uid","repl.repl.events/client-uid",-1908331954),new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(new_state_map)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","network-status","repl.repl.events/network-status",-1232291707),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state_map)], null));
}));
cljs.core._add_method.call(null,repl.repl.ws._event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__31411){
var map__31412 = p__31411;
var map__31412__$1 = cljs.core.__destructure_map.call(null,map__31412);
var _QMARK_data = cljs.core.get.call(null,map__31412__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var push_event = cljs.core.first.call(null,_QMARK_data);
var push_data = cljs.core.first.call(null,cljs.core.rest.call(null,_QMARK_data));
if(cljs.core._EQ_.call(null,push_event,new cljs.core.Keyword("repl-repl","keystrokes","repl-repl/keystrokes",1265683511))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","other-user-keystrokes","repl.repl.events/other-user-keystrokes",1477994083),push_data], null));
} else {
if(cljs.core._EQ_.call(null,push_event,new cljs.core.Keyword("repl-repl","users","repl-repl/users",-209912396))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","users","repl.repl.events/users",-2115998136),push_data], null));
} else {
if(cljs.core._EQ_.call(null,push_event,new cljs.core.Keyword("repl-repl","eval","repl-repl/eval",-532966198))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","eval-result","repl.repl.events/eval-result",1929795405),push_data], null));
} else {
if(cljs.core._EQ_.call(null,push_event,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304))){
return new cljs.core.Keyword(null,"noop","noop",-673731258);
} else {
return cljs.core.println.call(null,"Unhandled data push: %s",push_event);

}
}
}
}
}));
cljs.core._add_method.call(null,repl.repl.ws._event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","team-bootstrap","repl.repl.events/team-bootstrap",1702805467)], null));
}));
if((typeof repl !== 'undefined') && (typeof repl.repl !== 'undefined') && (typeof repl.repl.ws !== 'undefined') && (typeof repl.repl.ws.router_ !== 'undefined')){
} else {
repl.repl.ws.router_ = cljs.core.atom.call(null,null);
}
repl.repl.ws.stop_router_BANG_ = (function repl$repl$ws$stop_router_BANG_(){
var temp__5753__auto__ = cljs.core.deref.call(null,repl.repl.ws.router_);
if(cljs.core.truth_(temp__5753__auto__)){
var stop_f = temp__5753__auto__;
return stop_f.call(null);
} else {
return null;
}
});
repl.repl.ws.start_router_BANG_ = (function repl$repl$ws$start_router_BANG_(){
repl.repl.ws.stop_router_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,repl.repl.ws.router_,taoensso.sente.start_client_chsk_router_BANG_.call(null,repl.repl.ws.ch_chsk,repl.repl.ws.event_msg_handler));
});
repl.repl.ws.__GT_output_BANG_ = (function repl$repl$ws$__GT_output_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___31415 = arguments.length;
var i__4772__auto___31416 = (0);
while(true){
if((i__4772__auto___31416 < len__4771__auto___31415)){
args__4777__auto__.push((arguments[i__4772__auto___31416]));

var G__31417 = (i__4772__auto___31416 + (1));
i__4772__auto___31416 = G__31417;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return repl.repl.ws.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(repl.repl.ws.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var msg = cljs.core.apply.call(null,taoensso.encore.format,fmt,args);
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"repl.repl.ws",null,76,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
}),null)),null,736126963,null);
}));

(repl.repl.ws.__GT_output_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(repl.repl.ws.__GT_output_BANG_.cljs$lang$applyTo = (function (seq31413){
var G__31414 = cljs.core.first.call(null,seq31413);
var seq31413__$1 = cljs.core.next.call(null,seq31413);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31414,seq31413__$1);
}));

repl.repl.ws.__GT_output_BANG_.call(null,"ClojureScript appears to have loaded correctly.");
repl.repl.ws._QMARK_csrf_token = (function (){var temp__5753__auto__ = document.getElementById("sente-csrf-token");
if(cljs.core.truth_(temp__5753__auto__)){
var el = temp__5753__auto__;
return el.getAttribute("data-csrf-token");
} else {
return null;
}
})();
if(cljs.core.truth_(repl.repl.ws._QMARK_csrf_token)){
repl.repl.ws.__GT_output_BANG_.call(null,"CSRF token detected in HTML, great!");
} else {
repl.repl.ws.__GT_output_BANG_.call(null,"CSRF token NOT detected in HTML, default Sente config will reject requests");
}
var packer_31419 = taoensso.sente.packers.transit.get_transit_packer.call(null);
var map__31418_31420 = taoensso.sente.make_channel_socket_client_BANG_.call(null,"/chsk",repl.repl.ws._QMARK_csrf_token,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"packer","packer",66077544),packer_31419], null));
var map__31418_31421__$1 = cljs.core.__destructure_map.call(null,map__31418_31420);
var chsk_31422 = cljs.core.get.call(null,map__31418_31421__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_31423 = cljs.core.get.call(null,map__31418_31421__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_31424 = cljs.core.get.call(null,map__31418_31421__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_31425 = cljs.core.get.call(null,map__31418_31421__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
repl.repl.ws.chsk = chsk_31422;

repl.repl.ws.ch_chsk = ch_recv_31423;

repl.repl.ws.chsk_send_BANG_ = send_fn_31424;

repl.repl.ws.chsk_state = state_31425;
repl.repl.ws.start_BANG_ = (function repl$repl$ws$start_BANG_(){
return repl.repl.ws.start_router_BANG_.call(null);
});
if((typeof repl !== 'undefined') && (typeof repl.repl !== 'undefined') && (typeof repl.repl.ws !== 'undefined') && (typeof repl.repl.ws._start_once !== 'undefined')){
} else {
repl.repl.ws._start_once = repl.repl.ws.start_BANG_.call(null);
}

//# sourceMappingURL=ws.js.map
