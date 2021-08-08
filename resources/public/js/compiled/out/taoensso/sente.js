// Compiled by ClojureScript 1.10.844 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(105),(0)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.105);
}
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs");
if((typeof taoensso !== 'undefined') && (typeof taoensso.sente !== 'undefined') && (typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined')){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.call(null,false);
}
taoensso.sente.expected = (function taoensso$sente$expected(expected,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),expected,new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if((!(cljs.core.vector_QMARK_.call(null,x)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),x)], null);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__34126 = x;
var ev_id = cljs.core.nth.call(null,vec__34126,(0),null);
var _ = cljs.core.nth.call(null,vec__34126,(1),null);
if((!((ev_id instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),ev_id)], null);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772),taoensso.sente.expected.call(null,new cljs.core.Keyword(null,"namespaced-keyword","namespaced-keyword",131372895),ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__5753__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__5753__auto__)){
var errs = temp__5753__auto__;
throw cljs.core.ex_info.call(null,"Invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"errors","errors",-908790718),errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__5751__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__5751__auto__)){
var errs = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
if(cljs.core.map_QMARK_.call(null,x)){
if(taoensso.encore.ks_GT__EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x)){
var map__34131 = x;
var map__34131__$1 = cljs.core.__destructure_map.call(null,map__34131);
var ch_recv = cljs.core.get.call(null,map__34131__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__34131__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__34131__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__34131__$1,new cljs.core.Keyword(null,"event","event",301435442));
return ((taoensso.encore.chan_QMARK_.call(null,ch_recv)) && (cljs.core.ifn_QMARK_.call(null,send_fn)) && (taoensso.encore.atom_QMARK_.call(null,state)) && (taoensso.sente.event_QMARK_.call(null,event)));
} else {
return false;
}
} else {
return false;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
if(cljs.core.map_QMARK_.call(null,x)){
if(taoensso.encore.ks_GT__EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x)){
var map__34134 = x;
var map__34134__$1 = cljs.core.__destructure_map.call(null,map__34134);
var ch_recv = cljs.core.get.call(null,map__34134__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__34134__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__34134__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var send_buffers = cljs.core.get.call(null,map__34134__$1,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787));
var ring_req = cljs.core.get.call(null,map__34134__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__34134__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__34134__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__34134__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
return ((taoensso.encore.chan_QMARK_.call(null,ch_recv)) && (cljs.core.ifn_QMARK_.call(null,send_fn)) && (taoensso.encore.atom_QMARK_.call(null,connected_uids)) && (taoensso.encore.atom_QMARK_.call(null,send_buffers)) && (cljs.core.map_QMARK_.call(null,ring_req)) && (taoensso.encore.nblank_str_QMARK_.call(null,client_id)) && (taoensso.sente.event_QMARK_.call(null,event)) && ((((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn)))));
} else {
return false;
}
} else {
return false;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__34135){
var map__34136 = p__34135;
var map__34136__$1 = cljs.core.__destructure_map.call(null,map__34136);
var ev_msg = map__34136__$1;
var event = cljs.core.get.call(null,map__34136__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__34136__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__34137 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__34137,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__34137,(1),null);
var valid_event = vec__34137;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if((!(taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_)))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,194,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
}),null)),null,1799254389,null);
} else {
return cljs.core.async.put_BANG_.call(null,ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,taoensso.sente.cb_error_QMARK_.call(null,cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",208,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,prefixed_pstr,"+");
var pstr = cljs.core.subs.call(null,prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack.call(null,packer,pstr);
}catch (e34143){var t = e34143;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,215,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
}),null)),null,101739239,null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__34140 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__34140,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__34140,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,221,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
}),null)),null,1564850254,null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__34145 = arguments.length;
switch (G__34145) {
case 2:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2 = (function (packer,clj){
var pstr = ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack.call(null,packer,clj))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,228,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",clj,pstr], null);
}),null)),null,1270344359,null);

return pstr;
}));

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack.call(null,packer,wrapped_clj))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,237,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",wrapped_clj,pstr], null);
}),null)),null,1774441931,null);

return pstr;
}));

(taoensso.sente.pack.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
});
(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.call(null,x);
}));

(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.call(null,s);
}));

(taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.sente.EdnPacker.cljs$lang$type = true);

(taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker");

(taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"taoensso.sente/EdnPacker");
}));

/**
 * Positional factory function for taoensso.sente/EdnPacker.
 */
taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__34147_SHARP_){
if((!((p1__34147_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__34147_SHARP_.taoensso$sente$interfaces$IPacker$)))){
return true;
} else {
if((!p1__34147_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__34147_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__34147_SHARP_);
}
}).call(null,x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e34148){if((e34148 instanceof Error)){
var e = e34148;
return e;
} else {
throw e34148;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",250,"((fn* [p1__34147#] (satisfies? interfaces/IPacker p1__34147#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.idx_fn.call(null);


/**
 * Alpha, subject to change.
 *   Returns true iff given Ring request is allowed by `allowed-origins`.
 *   `allowed-origins` may be `:all` or #{<origin>}.
 */
taoensso.sente.allow_origin_QMARK_ = (function taoensso$sente$allow_origin_QMARK_(allowed_origins,ring_req){
if(cljs.core._EQ_.call(null,allowed_origins,new cljs.core.Keyword(null,"all","all",892129742))){
return true;
} else {
var headers = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"headers","headers",-835030129));
var origin = cljs.core.get.call(null,headers,"origin",new cljs.core.Keyword(null,"nx","nx",-1996436366));
var have_origin_QMARK_ = cljs.core.not_EQ_.call(null,origin,new cljs.core.Keyword(null,"nx","nx",-1996436366));
if(((have_origin_QMARK_) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,allowed_origins),origin)))){
return true;
} else {
var referer = cljs.core.get.call(null,headers,"referer","");
if(cljs.core.truth_((((!(have_origin_QMARK_)))?taoensso.encore.rsome.call(null,(function (p1__34150_SHARP_){
return clojure.string.starts_with_QMARK_.call(null,referer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34150_SHARP_),"/"].join(''));
}),allowed_origins):false))){
return true;
} else {
return false;
}
}
}
});
/**
 * Takes a web server adapter[1] and returns a map with keys:
 * 
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn                     ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req])  for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req])  for Ring GET + chsk URL.
 * 
 *  :connected-uids ;             Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 *  :send-buffers   ; Implementation detail, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Security options:
 * 
 *  :allowed-origins   ; e.g. #{"http://site.com" ...}, defaults to :all. ; Alpha
 * 
 *  :csrf-token-fn     ; ?(fn [ring-req]) -> CSRF-token for Ajax POSTs and WS handshake.
 *                     ; CSRF check will be skipped iff nil (NOT RECOMMENDED!).
 * 
 *  :authorized?-fn    ; ?(fn [ring-req]) -> When non-nil, (authorized?-fn <ring-req>)
 *                     ; must return truthy, otherwise connection requests will be
 *                     ; rejected with (unauthorized-fn <ring-req>) response.
 *                     ;
 *                     ; May check Authroization HTTP header, etc.
 * 
 *  :?unauthorized-fn  ; An alternative API to `authorized?-fn`+`unauthorized-fn` pair.
 *                     ; ?(fn [ring-req)) -> <?rejection-resp>. I.e. when return value
 *                     ; is non-nil, connection requests will be rejected with that
 *                     ; non-nil value.
 * 
 *   Other common options:
 * 
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___34460 = arguments.length;
var i__4772__auto___34461 = (0);
while(true){
if((i__4772__auto___34461 < len__4771__auto___34460)){
args__4777__auto__.push((arguments[i__4772__auto___34461]));

var G__34462 = (i__4772__auto___34461 + (1));
i__4772__auto___34461 = G__34462;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__34154){
var vec__34155 = p__34154;
var map__34158 = cljs.core.nth.call(null,vec__34155,(0),null);
var map__34158__$1 = cljs.core.__destructure_map.call(null,map__34158);
var ws_kalive_ms = cljs.core.get.call(null,map__34158__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(25)));
var _QMARK_unauthorized_fn = cljs.core.get.call(null,map__34158__$1,new cljs.core.Keyword(null,"?unauthorized-fn","?unauthorized-fn",-1883475616));
var send_buf_ms_ws = cljs.core.get.call(null,map__34158__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var allowed_origins = cljs.core.get.call(null,map__34158__$1,new cljs.core.Keyword(null,"allowed-origins","allowed-origins",1477851683),new cljs.core.Keyword(null,"all","all",892129742));
var lp_timeout_ms = cljs.core.get.call(null,map__34158__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var csrf_token_fn = cljs.core.get.call(null,map__34158__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),(function (ring_req){
var or__4160__auto__ = new cljs.core.Keyword(null,"anti-forgery-token","anti-forgery-token",806990841).cljs$core$IFn$_invoke$arity$1(ring_req);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var or__4160__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
var or__4160__auto____$2 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__4160__auto____$2)){
return or__4160__auto____$2;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
}
}));
var packer = cljs.core.get.call(null,map__34158__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var unauthorized_fn = cljs.core.get.call(null,map__34158__$1,new cljs.core.Keyword(null,"unauthorized-fn","unauthorized-fn",-2032603957),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(401),new cljs.core.Keyword(null,"body","body",-2049205669),"Unauthorized request"], null);
}));
var send_buf_ms_ajax = cljs.core.get.call(null,map__34158__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var bad_origin_fn = cljs.core.get.call(null,map__34158__$1,new cljs.core.Keyword(null,"bad-origin-fn","bad-origin-fn",1385595727),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Unauthorized origin"], null);
}));
var handshake_data_fn = cljs.core.get.call(null,map__34158__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),(function (ring_req){
return null;
}));
var user_id_fn = cljs.core.get.call(null,map__34158__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),(function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
}));
var recv_buf_or_n = cljs.core.get.call(null,map__34158__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var authorized_QMARK__fn = cljs.core.get.call(null,map__34158__$1,new cljs.core.Keyword(null,"authorized?-fn","authorized?-fn",-1334669261));
var bad_csrf_fn = cljs.core.get.call(null,map__34158__$1,new cljs.core.Keyword(null,"bad-csrf-fn","bad-csrf-fn",16619032),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Bad CSRF token"], null);
}));
var e_34463 = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e34159){if((e34159 instanceof Error)){
var e_34463 = e34159;
return e_34463;
} else {
throw e34159;

}
}})();
if((e_34463 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",394,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e_34463,null);
}

var e_34464 = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e34160){if((e34160 instanceof Error)){
var e_34464 = e34160;
return e_34464;
} else {
throw e34160;

}
}})();
if((e_34464 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",394,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e_34464,null);
}


var e_34465 = (function (){try{if((function (p1__34151_SHARP_){
if((!((p1__34151_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__34151_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)))){
return true;
} else {
if((!p1__34151_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__34151_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__34151_SHARP_);
}
}).call(null,web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e34161){if((e34161 instanceof Error)){
var e_34465 = e34161;
return e_34465;
} else {
throw e34161;

}
}})();
if((e_34465 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",395,"((fn* [p1__34151#] (satisfies? interfaces/IServerChanAdapter p1__34151#)) web-server-ch-adapter)",web_server_ch_adapter,e_34465,null);
}

var max_ms_34466 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_34466)){
throw cljs.core.ex_info.call(null,[":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_34466)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_34466], null));
} else {
}

var allowed_origins__$1 = (cljs.core.truth_((function (x){
var or__4160__auto__ = cljs.core.set_QMARK_.call(null,x);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all","all",892129742),null], null), null).call(null,x);
}
}).call(null,allowed_origins))?allowed_origins:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",404,"([:or set? #{:all}] allowed-origins)",allowed_origins,null,null));
var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var user_id_fn__$1 = (function (ring_req,client_id){
var or__4160__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = (function() {
var G__34467 = null;
var G__34467__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (_QMARK_v){
var vec__34163 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.call(null,vec__34163,(0),null);
var _udt = cljs.core.nth.call(null,vec__34163,(1),null);
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
}));
});
var G__34467__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (_QMARK_v){
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
}));
});
G__34467 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__34467__3.call(this,conn_type,uid,client_id);
case 4:
return G__34467__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34467.cljs$core$IFn$_invoke$arity$3 = G__34467__3;
G__34467.cljs$core$IFn$_invoke$arity$4 = G__34467__4;
return G__34467;
})()
;
var connect_uid_BANG_ = (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e34166){if((e34166 instanceof Error)){
var e = e34166;
return e;
} else {
throw e34166;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",440,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__34167){
var map__34168 = p__34167;
var map__34168__$1 = cljs.core.__destructure_map.call(null,map__34168);
var old_m = map__34168__$1;
var ws = cljs.core.get.call(null,map__34168__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__34168__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__34168__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__34169 = conn_type;
var G__34169__$1 = (((G__34169 instanceof cljs.core.Keyword))?G__34169.fqn:null);
switch (G__34169__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.call(null,ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.call(null,ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34169__$1)].join('')));

}
})();
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((((!(cljs.core.contains_QMARK_.call(null,old_any,uid)))) && (cljs.core.contains_QMARK_.call(null,new_any,uid)))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
}));
return newly_connected_QMARK_;
});
var upd_connected_uid_BANG_ = (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e34170){if((e34170 instanceof Error)){
var e = e34170;
return e;
} else {
throw e34170;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",457,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__34171){
var map__34172 = p__34171;
var map__34172__$1 = cljs.core.__destructure_map.call(null,map__34172);
var old_m = map__34172__$1;
var ws = cljs.core.get.call(null,map__34172__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__34172__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__34172__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref.call(null,conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = ((any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_));
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.call(null,ws,uid):cljs.core.disj.call(null,ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.call(null,ajax,uid):cljs.core.disj.call(null,ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.call(null,any,uid):cljs.core.disj.call(null,any,uid))], null);
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if(((cljs.core.contains_QMARK_.call(null,old_any,uid)) && ((!(cljs.core.contains_QMARK_.call(null,new_any,uid)))))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
}));
return newly_disconnected_QMARK_;
});
var send_fn = (function() { 
var G__34469__delegate = function (user_id,ev,p__34173){
var vec__34174 = p__34173;
var map__34177 = cljs.core.nth.call(null,vec__34174,(0),null);
var map__34177__$1 = cljs.core.__destructure_map.call(null,map__34177);
var opts = map__34177__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__34177__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_34470 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __34471 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,483,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_34470,ev], null);
}),null)),null,435655622,null);
var __34472__$1 = (cljs.core.truth_(uid_34470)?null:(function(){throw (new Error(["Assert failed: ",["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join(''),"\n","uid"].join('')))})());
var __34473__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_34474 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__34475 = (function (conn_type){
var temp__5753__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),(function (m){
var vec__34178 = cljs.core.get.call(null,m,uid_34470);
var ___$3 = cljs.core.nth.call(null,vec__34178,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__34178,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_34474)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_34470),cljs.core.get.call(null,m,uid_34470));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
}));
if(cljs.core.truth_(temp__5753__auto__)){
var pulled = temp__5753__auto__;
var vec__34181 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__34181,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__34181,(1),null);
if(cljs.core.vector_QMARK_.call(null,buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",511,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_.call(null,ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",512,"(set? ev-uuids)",ev_uuids,null,null);
}

var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,515,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s",buffered_evs_ppstr], null);
}),null)),null,119354291,null);

var G__34184 = conn_type;
var G__34184__$1 = (((G__34184 instanceof cljs.core.Keyword))?G__34184.fqn:null);
switch (G__34184__$1) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_34470,buffered_evs_ppstr,upd_conn_BANG_);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_34470,buffered_evs_ppstr);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34184__$1)].join('')));

}
} else {
return null;
}
});
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,524,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_34470], null);
}),null)),null,404299834,null);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__34475.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__34475.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__34185_34477 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_34470], null))));
var chunk__34186_34478 = null;
var count__34187_34479 = (0);
var i__34188_34480 = (0);
while(true){
if((i__34188_34480 < count__34187_34479)){
var vec__34195_34481 = cljs.core._nth.call(null,chunk__34186_34478,i__34188_34480);
var _QMARK_sch_34482 = cljs.core.nth.call(null,vec__34195_34481,(0),null);
var _udt_34483 = cljs.core.nth.call(null,vec__34195_34481,(1),null);
var temp__5753__auto___34484 = _QMARK_sch_34482;
if(cljs.core.truth_(temp__5753__auto___34484)){
var sch_34485 = temp__5753__auto___34484;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_34485);
} else {
}


var G__34486 = seq__34185_34477;
var G__34487 = chunk__34186_34478;
var G__34488 = count__34187_34479;
var G__34489 = (i__34188_34480 + (1));
seq__34185_34477 = G__34486;
chunk__34186_34478 = G__34487;
count__34187_34479 = G__34488;
i__34188_34480 = G__34489;
continue;
} else {
var temp__5753__auto___34490 = cljs.core.seq.call(null,seq__34185_34477);
if(temp__5753__auto___34490){
var seq__34185_34491__$1 = temp__5753__auto___34490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34185_34491__$1)){
var c__4591__auto___34492 = cljs.core.chunk_first.call(null,seq__34185_34491__$1);
var G__34493 = cljs.core.chunk_rest.call(null,seq__34185_34491__$1);
var G__34494 = c__4591__auto___34492;
var G__34495 = cljs.core.count.call(null,c__4591__auto___34492);
var G__34496 = (0);
seq__34185_34477 = G__34493;
chunk__34186_34478 = G__34494;
count__34187_34479 = G__34495;
i__34188_34480 = G__34496;
continue;
} else {
var vec__34198_34497 = cljs.core.first.call(null,seq__34185_34491__$1);
var _QMARK_sch_34498 = cljs.core.nth.call(null,vec__34198_34497,(0),null);
var _udt_34499 = cljs.core.nth.call(null,vec__34198_34497,(1),null);
var temp__5753__auto___34500__$1 = _QMARK_sch_34498;
if(cljs.core.truth_(temp__5753__auto___34500__$1)){
var sch_34501 = temp__5753__auto___34500__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_34501);
} else {
}


var G__34502 = cljs.core.next.call(null,seq__34185_34491__$1);
var G__34503 = null;
var G__34504 = (0);
var G__34505 = (0);
seq__34185_34477 = G__34502;
chunk__34186_34478 = G__34503;
count__34187_34479 = G__34504;
i__34188_34480 = G__34505;
continue;
}
} else {
}
}
break;
}

var seq__34201_34506 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_34470], null))));
var chunk__34202_34507 = null;
var count__34203_34508 = (0);
var i__34204_34509 = (0);
while(true){
if((i__34204_34509 < count__34203_34508)){
var vec__34211_34510 = cljs.core._nth.call(null,chunk__34202_34507,i__34204_34509);
var _QMARK_sch_34511 = cljs.core.nth.call(null,vec__34211_34510,(0),null);
var _udt_34512 = cljs.core.nth.call(null,vec__34211_34510,(1),null);
var temp__5753__auto___34513 = _QMARK_sch_34511;
if(cljs.core.truth_(temp__5753__auto___34513)){
var sch_34514 = temp__5753__auto___34513;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_34514);
} else {
}


var G__34515 = seq__34201_34506;
var G__34516 = chunk__34202_34507;
var G__34517 = count__34203_34508;
var G__34518 = (i__34204_34509 + (1));
seq__34201_34506 = G__34515;
chunk__34202_34507 = G__34516;
count__34203_34508 = G__34517;
i__34204_34509 = G__34518;
continue;
} else {
var temp__5753__auto___34519 = cljs.core.seq.call(null,seq__34201_34506);
if(temp__5753__auto___34519){
var seq__34201_34520__$1 = temp__5753__auto___34519;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34201_34520__$1)){
var c__4591__auto___34521 = cljs.core.chunk_first.call(null,seq__34201_34520__$1);
var G__34522 = cljs.core.chunk_rest.call(null,seq__34201_34520__$1);
var G__34523 = c__4591__auto___34521;
var G__34524 = cljs.core.count.call(null,c__4591__auto___34521);
var G__34525 = (0);
seq__34201_34506 = G__34522;
chunk__34202_34507 = G__34523;
count__34203_34508 = G__34524;
i__34204_34509 = G__34525;
continue;
} else {
var vec__34214_34526 = cljs.core.first.call(null,seq__34201_34520__$1);
var _QMARK_sch_34527 = cljs.core.nth.call(null,vec__34214_34526,(0),null);
var _udt_34528 = cljs.core.nth.call(null,vec__34214_34526,(1),null);
var temp__5753__auto___34529__$1 = _QMARK_sch_34527;
if(cljs.core.truth_(temp__5753__auto___34529__$1)){
var sch_34530 = temp__5753__auto___34529__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_34530);
} else {
}


var G__34531 = cljs.core.next.call(null,seq__34201_34520__$1);
var G__34532 = null;
var G__34533 = (0);
var G__34534 = (0);
seq__34201_34506 = G__34531;
chunk__34202_34507 = G__34532;
count__34203_34508 = G__34533;
i__34204_34509 = G__34534;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34217_34535 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__34218_34536 = null;
var count__34219_34537 = (0);
var i__34220_34538 = (0);
while(true){
if((i__34220_34538 < count__34219_34537)){
var conn_type_34539 = cljs.core._nth.call(null,chunk__34218_34536,i__34220_34538);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_34539,uid_34470], null),((function (seq__34217_34535,chunk__34218_34536,count__34219_34537,i__34220_34538,conn_type_34539,uid_34470,__34471,__34472__$1,__34473__$2,ev_uuid_34474,flush_buffer_BANG__34475,vec__34174,map__34177,map__34177__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__34155,map__34158,map__34158__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_34474])], null);
} else {
var vec__34227 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__34227,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__34227,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_34474)], null);
}
});})(seq__34217_34535,chunk__34218_34536,count__34219_34537,i__34220_34538,conn_type_34539,uid_34470,__34471,__34472__$1,__34473__$2,ev_uuid_34474,flush_buffer_BANG__34475,vec__34174,map__34177,map__34177__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__34155,map__34158,map__34158__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn))
);


var G__34540 = seq__34217_34535;
var G__34541 = chunk__34218_34536;
var G__34542 = count__34219_34537;
var G__34543 = (i__34220_34538 + (1));
seq__34217_34535 = G__34540;
chunk__34218_34536 = G__34541;
count__34219_34537 = G__34542;
i__34220_34538 = G__34543;
continue;
} else {
var temp__5753__auto___34544 = cljs.core.seq.call(null,seq__34217_34535);
if(temp__5753__auto___34544){
var seq__34217_34545__$1 = temp__5753__auto___34544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34217_34545__$1)){
var c__4591__auto___34546 = cljs.core.chunk_first.call(null,seq__34217_34545__$1);
var G__34547 = cljs.core.chunk_rest.call(null,seq__34217_34545__$1);
var G__34548 = c__4591__auto___34546;
var G__34549 = cljs.core.count.call(null,c__4591__auto___34546);
var G__34550 = (0);
seq__34217_34535 = G__34547;
chunk__34218_34536 = G__34548;
count__34219_34537 = G__34549;
i__34220_34538 = G__34550;
continue;
} else {
var conn_type_34551 = cljs.core.first.call(null,seq__34217_34545__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_34551,uid_34470], null),((function (seq__34217_34535,chunk__34218_34536,count__34219_34537,i__34220_34538,conn_type_34551,seq__34217_34545__$1,temp__5753__auto___34544,uid_34470,__34471,__34472__$1,__34473__$2,ev_uuid_34474,flush_buffer_BANG__34475,vec__34174,map__34177,map__34177__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__34155,map__34158,map__34158__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_34474])], null);
} else {
var vec__34230 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__34230,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__34230,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_34474)], null);
}
});})(seq__34217_34535,chunk__34218_34536,count__34219_34537,i__34220_34538,conn_type_34551,seq__34217_34545__$1,temp__5753__auto___34544,uid_34470,__34471,__34472__$1,__34473__$2,ev_uuid_34474,flush_buffer_BANG__34475,vec__34174,map__34177,map__34177__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__34155,map__34158,map__34158__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn))
);


var G__34552 = cljs.core.next.call(null,seq__34217_34545__$1);
var G__34553 = null;
var G__34554 = (0);
var G__34555 = (0);
seq__34217_34535 = G__34552;
chunk__34218_34536 = G__34553;
count__34219_34537 = G__34554;
i__34220_34538 = G__34555;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__34475.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__34475.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_34556 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var ajax_timeout_34557 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var c__15329__auto___34558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_34237){
var state_val_34238 = (state_34237[(1)]);
if((state_val_34238 === (1))){
var state_34237__$1 = state_34237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34237__$1,(2),ws_timeout_34556);
} else {
if((state_val_34238 === (2))){
var inst_34234 = (state_34237[(2)]);
var inst_34235 = flush_buffer_BANG__34475.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_34237__$1 = (function (){var statearr_34239 = state_34237;
(statearr_34239[(7)] = inst_34234);

return statearr_34239;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34237__$1,inst_34235);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__15256__auto__ = null;
var taoensso$sente$state_machine__15256__auto____0 = (function (){
var statearr_34240 = [null,null,null,null,null,null,null,null];
(statearr_34240[(0)] = taoensso$sente$state_machine__15256__auto__);

(statearr_34240[(1)] = (1));

return statearr_34240;
});
var taoensso$sente$state_machine__15256__auto____1 = (function (state_34237){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_34237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e34241){var ex__15259__auto__ = e34241;
var statearr_34242_34559 = state_34237;
(statearr_34242_34559[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_34237[(4)]))){
var statearr_34243_34560 = state_34237;
(statearr_34243_34560[(1)] = cljs.core.first.call(null,(state_34237[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34561 = state_34237;
state_34237 = G__34561;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
taoensso$sente$state_machine__15256__auto__ = function(state_34237){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__15256__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__15256__auto____1.call(this,state_34237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__15256__auto____0;
taoensso$sente$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__15256__auto____1;
return taoensso$sente$state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_34244 = f__15330__auto__.call(null);
(statearr_34244[(6)] = c__15329__auto___34558);

return statearr_34244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));


var c__15329__auto___34562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_34249){
var state_val_34250 = (state_34249[(1)]);
if((state_val_34250 === (1))){
var state_34249__$1 = state_34249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34249__$1,(2),ajax_timeout_34557);
} else {
if((state_val_34250 === (2))){
var inst_34246 = (state_34249[(2)]);
var inst_34247 = flush_buffer_BANG__34475.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_34249__$1 = (function (){var statearr_34251 = state_34249;
(statearr_34251[(7)] = inst_34246);

return statearr_34251;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34249__$1,inst_34247);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__15256__auto__ = null;
var taoensso$sente$state_machine__15256__auto____0 = (function (){
var statearr_34252 = [null,null,null,null,null,null,null,null];
(statearr_34252[(0)] = taoensso$sente$state_machine__15256__auto__);

(statearr_34252[(1)] = (1));

return statearr_34252;
});
var taoensso$sente$state_machine__15256__auto____1 = (function (state_34249){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_34249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e34253){var ex__15259__auto__ = e34253;
var statearr_34254_34563 = state_34249;
(statearr_34254_34563[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_34249[(4)]))){
var statearr_34255_34564 = state_34249;
(statearr_34255_34564[(1)] = cljs.core.first.call(null,(state_34249[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34565 = state_34249;
state_34249 = G__34565;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
taoensso$sente$state_machine__15256__auto__ = function(state_34249){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__15256__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__15256__auto____1.call(this,state_34249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__15256__auto____0;
taoensso$sente$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__15256__auto____1;
return taoensso$sente$state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_34256 = f__15330__auto__.call(null);
(statearr_34256[(6)] = c__15329__auto___34562);

return statearr_34256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));

}
}

return null;
};
var G__34469 = function (user_id,ev,var_args){
var p__34173 = null;
if (arguments.length > 2) {
var G__34566__i = 0, G__34566__a = new Array(arguments.length -  2);
while (G__34566__i < G__34566__a.length) {G__34566__a[G__34566__i] = arguments[G__34566__i + 2]; ++G__34566__i;}
  p__34173 = new cljs.core.IndexedSeq(G__34566__a,0,null);
} 
return G__34469__delegate.call(this,user_id,ev,p__34173);};
G__34469.cljs$lang$maxFixedArity = 2;
G__34469.cljs$lang$applyTo = (function (arglist__34567){
var user_id = cljs.core.first(arglist__34567);
arglist__34567 = cljs.core.next(arglist__34567);
var ev = cljs.core.first(arglist__34567);
var p__34173 = cljs.core.rest(arglist__34567);
return G__34469__delegate(user_id,ev,p__34173);
});
G__34469.cljs$core$IFn$_invoke$arity$variadic = G__34469__delegate;
return G__34469;
})()
;
var bad_csrf_QMARK_ = (function (ring_req){
if((csrf_token_fn == null)){
return false;
} else {
var temp__5751__auto__ = csrf_token_fn.call(null,ring_req);
if(cljs.core.truth_(temp__5751__auto__)){
var reference_csrf_token = temp__5751__auto__;
var csrf_token_from_client = (function (){var or__4160__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var or__4160__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"x-csrf-token"], null));
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"x-xsrf-token"], null));
}
}
})();
return cljs.core.not.call(null,taoensso.encore.const_str_EQ_.call(null,reference_csrf_token,csrf_token_from_client));
} else {
return true;
}
}
});
var unauthorized_QMARK_ = (function (ring_req){
if((authorized_QMARK__fn == null)){
return false;
} else {
return cljs.core.not.call(null,authorized_QMARK__fn.call(null,ring_req));
}
});
var possible_rejection_resp = (function (ring_req){
if(bad_csrf_QMARK_.call(null,ring_req)){
return bad_csrf_fn.call(null,ring_req);
} else {
if(taoensso.sente.allow_origin_QMARK_.call(null,allowed_origins__$1,ring_req)){
if(unauthorized_QMARK_.call(null,ring_req)){
return unauthorized_fn.call(null,ring_req);
} else {
var b2__18513__auto__ = (function (){var temp__5753__auto__ = _QMARK_unauthorized_fn;
if(cljs.core.truth_(temp__5753__auto__)){
var uf = temp__5753__auto__;
return uf.call(null,ring_req);
} else {
return null;
}
})();
if((b2__18513__auto__ == null)){
return null;
} else {
var unauthorized_resp = b2__18513__auto__;
return unauthorized_resp;
}
}
} else {
return bad_origin_fn.call(null,ring_req);
}
}
});
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787),send_buffers_], null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787),send_buffers_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),(function (ring_req){
var b2__18504__auto__ = possible_rejection_resp.call(null,ring_req);
if(cljs.core.truth_(b2__18504__auto__)){
var resp = b2__18504__auto__;
return resp;
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (server_ch,websocket_QMARK_){
if(cljs.core.not.call(null,websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__34257 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__34257,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__34257,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.call(null,false);
return (function (resp_clj){
if(cljs.core.compare_and_set_BANG_.call(null,replied_QMARK__,false,true)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,642,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
}),null)),null,-1019777429,null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,resp_clj));
} else {
return null;
}
});
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__5753__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5753__auto__)){
var ms = temp__5753__auto__;
var c__15329__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_34265){
var state_val_34266 = (state_34265[(1)]);
if((state_val_34266 === (1))){
var inst_34260 = cljs.core.async.timeout.call(null,ms);
var state_34265__$1 = state_34265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34265__$1,(2),inst_34260);
} else {
if((state_val_34266 === (2))){
var inst_34262 = (state_34265[(2)]);
var inst_34263 = reply_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_34265__$1 = (function (){var statearr_34267 = state_34265;
(statearr_34267[(7)] = inst_34262);

return statearr_34267;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34265__$1,inst_34263);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__15256__auto__ = null;
var taoensso$sente$state_machine__15256__auto____0 = (function (){
var statearr_34268 = [null,null,null,null,null,null,null,null];
(statearr_34268[(0)] = taoensso$sente$state_machine__15256__auto__);

(statearr_34268[(1)] = (1));

return statearr_34268;
});
var taoensso$sente$state_machine__15256__auto____1 = (function (state_34265){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_34265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e34269){var ex__15259__auto__ = e34269;
var statearr_34270_34568 = state_34265;
(statearr_34270_34568[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_34265[(4)]))){
var statearr_34271_34569 = state_34265;
(statearr_34271_34569[(1)] = cljs.core.first.call(null,(state_34265[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34570 = state_34265;
state_34265 = G__34570;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
taoensso$sente$state_machine__15256__auto__ = function(state_34265){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__15256__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__15256__auto____1.call(this,state_34265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__15256__auto____0;
taoensso$sente$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__15256__auto____1;
return taoensso$sente$state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_34272 = f__15330__auto__.call(null);
(statearr_34272[(6)] = c__15329__auto__);

return statearr_34272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));

return c__15329__auto__;
} else {
return null;
}
} else {
return reply_fn.call(null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
})], null));
}
}),new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),(function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.call(null,(6));
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var receive_event_msg_BANG_ = (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.call(null,event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;
var send_handshake_BANG_ = (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,686,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
}),null)),null,-18255596,null);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,handshake_ev));
});
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,699,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[err_msg,": %s"].join(''),ring_req], null);
}),null)),null,-1158502472,null);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
var b2__18504__auto__ = possible_rejection_resp.call(null,ring_req);
if(cljs.core.truth_(b2__18504__auto__)){
var resp = b2__18504__auto__;
return resp;
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,710,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
}),null)),null,9751473,null);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);

var temp__5753__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__5753__auto__)){
var ms = temp__5753__auto__;
var c__15329__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_34309){
var state_val_34310 = (state_34309[(1)]);
if((state_val_34310 === (7))){
var inst_34305 = (state_34309[(2)]);
var state_34309__$1 = state_34309;
var statearr_34311_34571 = state_34309__$1;
(statearr_34311_34571[(2)] = inst_34305);

(statearr_34311_34571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (1))){
var inst_34273 = udt_open;
var inst_34274 = inst_34273;
var state_34309__$1 = (function (){var statearr_34312 = state_34309;
(statearr_34312[(7)] = inst_34274);

return statearr_34312;
})();
var statearr_34313_34572 = state_34309__$1;
(statearr_34313_34572[(2)] = null);

(statearr_34313_34572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (4))){
var inst_34283 = (state_34309[(8)]);
var inst_34278 = (state_34309[(2)]);
var inst_34279 = cljs.core.deref.call(null,conns_);
var inst_34280 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34281 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_34282 = (new cljs.core.PersistentVector(null,3,(5),inst_34280,inst_34281,null));
var inst_34283__$1 = cljs.core.get_in.call(null,inst_34279,inst_34282);
var state_34309__$1 = (function (){var statearr_34314 = state_34309;
(statearr_34314[(9)] = inst_34278);

(statearr_34314[(8)] = inst_34283__$1);

return statearr_34314;
})();
if(cljs.core.truth_(inst_34283__$1)){
var statearr_34315_34573 = state_34309__$1;
(statearr_34315_34573[(1)] = (5));

} else {
var statearr_34316_34574 = state_34309__$1;
(statearr_34316_34574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (13))){
var inst_34289 = (state_34309[(10)]);
var inst_34298 = (state_34309[(2)]);
var inst_34274 = inst_34289;
var state_34309__$1 = (function (){var statearr_34317 = state_34309;
(statearr_34317[(7)] = inst_34274);

(statearr_34317[(11)] = inst_34298);

return statearr_34317;
})();
var statearr_34318_34575 = state_34309__$1;
(statearr_34318_34575[(2)] = null);

(statearr_34318_34575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (6))){
var state_34309__$1 = state_34309;
var statearr_34319_34576 = state_34309__$1;
(statearr_34319_34576[(2)] = null);

(statearr_34319_34576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (3))){
var inst_34307 = (state_34309[(2)]);
var state_34309__$1 = state_34309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34309__$1,inst_34307);
} else {
if((state_val_34310 === (12))){
var state_34309__$1 = state_34309;
var statearr_34320_34577 = state_34309__$1;
(statearr_34320_34577[(2)] = null);

(statearr_34320_34577[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (2))){
var inst_34276 = cljs.core.async.timeout.call(null,ms);
var state_34309__$1 = state_34309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34309__$1,(4),inst_34276);
} else {
if((state_val_34310 === (11))){
var inst_34294 = taoensso.sente.pack.call(null,packer__$1,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_34295 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_34294);
var state_34309__$1 = state_34309;
var statearr_34321_34578 = state_34309__$1;
(statearr_34321_34578[(2)] = inst_34295);

(statearr_34321_34578[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (9))){
var state_34309__$1 = state_34309;
var statearr_34322_34579 = state_34309__$1;
(statearr_34322_34579[(2)] = null);

(statearr_34322_34579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (5))){
var inst_34283 = (state_34309[(8)]);
var inst_34288 = cljs.core.nth.call(null,inst_34283,(0),null);
var inst_34289 = cljs.core.nth.call(null,inst_34283,(1),null);
var inst_34290 = taoensso.sente.interfaces.sch_open_QMARK_.call(null,server_ch);
var state_34309__$1 = (function (){var statearr_34323 = state_34309;
(statearr_34323[(10)] = inst_34289);

(statearr_34323[(12)] = inst_34288);

return statearr_34323;
})();
if(cljs.core.truth_(inst_34290)){
var statearr_34324_34580 = state_34309__$1;
(statearr_34324_34580[(1)] = (8));

} else {
var statearr_34325_34581 = state_34309__$1;
(statearr_34325_34581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (10))){
var inst_34302 = (state_34309[(2)]);
var state_34309__$1 = state_34309;
var statearr_34326_34582 = state_34309__$1;
(statearr_34326_34582[(2)] = inst_34302);

(statearr_34326_34582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (8))){
var inst_34274 = (state_34309[(7)]);
var inst_34289 = (state_34309[(10)]);
var inst_34292 = cljs.core._EQ_.call(null,inst_34289,inst_34274);
var state_34309__$1 = state_34309;
if(inst_34292){
var statearr_34327_34583 = state_34309__$1;
(statearr_34327_34583[(1)] = (11));

} else {
var statearr_34328_34584 = state_34309__$1;
(statearr_34328_34584[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__15256__auto__ = null;
var taoensso$sente$state_machine__15256__auto____0 = (function (){
var statearr_34329 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34329[(0)] = taoensso$sente$state_machine__15256__auto__);

(statearr_34329[(1)] = (1));

return statearr_34329;
});
var taoensso$sente$state_machine__15256__auto____1 = (function (state_34309){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_34309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e34330){var ex__15259__auto__ = e34330;
var statearr_34331_34585 = state_34309;
(statearr_34331_34585[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_34309[(4)]))){
var statearr_34332_34586 = state_34309;
(statearr_34332_34586[(1)] = cljs.core.first.call(null,(state_34309[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34587 = state_34309;
state_34309 = G__34587;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
taoensso$sente$state_machine__15256__auto__ = function(state_34309){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__15256__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__15256__auto____1.call(this,state_34309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__15256__auto____0;
taoensso$sente$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__15256__auto____1;
return taoensso$sente$state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_34333 = f__15330__auto__.call(null);
(statearr_34333[(6)] = c__15329__auto__);

return statearr_34333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));

return c__15329__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,739,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
}),null)),null,1731917475,null);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);
} else {
var temp__5753__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5753__auto__)){
var ms = temp__5753__auto__;
var c__15329__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_34359){
var state_val_34360 = (state_34359[(1)]);
if((state_val_34360 === (1))){
var inst_34334 = cljs.core.async.timeout.call(null,ms);
var state_34359__$1 = state_34359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34359__$1,(2),inst_34334);
} else {
if((state_val_34360 === (2))){
var inst_34341 = (state_34359[(7)]);
var inst_34336 = (state_34359[(2)]);
var inst_34337 = cljs.core.deref.call(null,conns_);
var inst_34338 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34339 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_34340 = (new cljs.core.PersistentVector(null,3,(5),inst_34338,inst_34339,null));
var inst_34341__$1 = cljs.core.get_in.call(null,inst_34337,inst_34340);
var state_34359__$1 = (function (){var statearr_34361 = state_34359;
(statearr_34361[(7)] = inst_34341__$1);

(statearr_34361[(8)] = inst_34336);

return statearr_34361;
})();
if(cljs.core.truth_(inst_34341__$1)){
var statearr_34362_34588 = state_34359__$1;
(statearr_34362_34588[(1)] = (3));

} else {
var statearr_34363_34589 = state_34359__$1;
(statearr_34363_34589[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (3))){
var inst_34341 = (state_34359[(7)]);
var inst_34346 = cljs.core.nth.call(null,inst_34341,(0),null);
var inst_34347 = cljs.core.nth.call(null,inst_34341,(1),null);
var inst_34348 = cljs.core._EQ_.call(null,inst_34347,udt_open);
var state_34359__$1 = (function (){var statearr_34364 = state_34359;
(statearr_34364[(9)] = inst_34346);

return statearr_34364;
})();
if(inst_34348){
var statearr_34365_34590 = state_34359__$1;
(statearr_34365_34590[(1)] = (6));

} else {
var statearr_34366_34591 = state_34359__$1;
(statearr_34366_34591[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (4))){
var state_34359__$1 = state_34359;
var statearr_34367_34592 = state_34359__$1;
(statearr_34367_34592[(2)] = null);

(statearr_34367_34592[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (5))){
var inst_34357 = (state_34359[(2)]);
var state_34359__$1 = state_34359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34359__$1,inst_34357);
} else {
if((state_val_34360 === (6))){
var inst_34350 = taoensso.sente.pack.call(null,packer__$1,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_34351 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_34350);
var state_34359__$1 = state_34359;
var statearr_34368_34593 = state_34359__$1;
(statearr_34368_34593[(2)] = inst_34351);

(statearr_34368_34593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (7))){
var state_34359__$1 = state_34359;
var statearr_34369_34594 = state_34359__$1;
(statearr_34369_34594[(2)] = null);

(statearr_34369_34594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (8))){
var inst_34354 = (state_34359[(2)]);
var state_34359__$1 = state_34359;
var statearr_34370_34595 = state_34359__$1;
(statearr_34370_34595[(2)] = inst_34354);

(statearr_34370_34595[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__15256__auto__ = null;
var taoensso$sente$state_machine__15256__auto____0 = (function (){
var statearr_34371 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34371[(0)] = taoensso$sente$state_machine__15256__auto__);

(statearr_34371[(1)] = (1));

return statearr_34371;
});
var taoensso$sente$state_machine__15256__auto____1 = (function (state_34359){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_34359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e34372){var ex__15259__auto__ = e34372;
var statearr_34373_34596 = state_34359;
(statearr_34373_34596[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_34359[(4)]))){
var statearr_34374_34597 = state_34359;
(statearr_34374_34597[(1)] = cljs.core.first.call(null,(state_34359[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34598 = state_34359;
state_34359 = G__34598;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
taoensso$sente$state_machine__15256__auto__ = function(state_34359){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__15256__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__15256__auto____1.call(this,state_34359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__15256__auto____0;
taoensso$sente$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__15256__auto____1;
return taoensso$sente$state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_34375 = f__15330__auto__.call(null);
(statearr_34375[(6)] = c__15329__auto__);

return statearr_34375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));

return c__15329__auto__;
} else {
return null;
}
}
}
}),new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),(function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__34376 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__34376,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__34376,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?(function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,769,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
}),null)),null,-2113566398,null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,resp_clj,_QMARK_cb_uuid));
}):null));
}),new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,778,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
}),null)),null,1811936991,null);
var updated_conn = upd_conn_BANG_.call(null,conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__15329__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_34430){
var state_val_34431 = (state_34430[(1)]);
if((state_val_34431 === (7))){
var state_34430__$1 = state_34430;
var statearr_34432_34599 = state_34430__$1;
(statearr_34432_34599[(2)] = null);

(statearr_34432_34599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (1))){
var inst_34379 = cljs.core.async.timeout.call(null,(5000));
var state_34430__$1 = state_34430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34430__$1,(2),inst_34379);
} else {
if((state_val_34431 === (4))){
var state_34430__$1 = state_34430;
var statearr_34433_34600 = state_34430__$1;
(statearr_34433_34600[(2)] = null);

(statearr_34433_34600[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (13))){
var state_34430__$1 = state_34430;
var statearr_34434_34601 = state_34430__$1;
(statearr_34434_34601[(2)] = null);

(statearr_34434_34601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (6))){
var inst_34407 = (state_34430[(7)]);
var inst_34389 = (state_34430[(8)]);
var inst_34391 = (state_34430[(9)]);
var inst_34390 = (state_34430[(10)]);
var inst_34402 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34403 = [conn_type,uid,client_id];
var inst_34404 = (new cljs.core.PersistentVector(null,3,(5),inst_34402,inst_34403,null));
var inst_34406 = (function (){var vec__34382 = inst_34389;
var __QMARK_sch = inst_34390;
var udt_t1 = inst_34391;
return (function (p__34405){
var vec__34435 = p__34405;
var _sch = cljs.core.nth.call(null,vec__34435,(0),null);
var udt_t1__$1 = cljs.core.nth.call(null,vec__34435,(1),null);
if(cljs.core._EQ_.call(null,udt_t1__$1,udt_close)){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_sch,udt_t1__$1], null),false);
}
});
})();
var inst_34407__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_34404,inst_34406);
var state_34430__$1 = (function (){var statearr_34438 = state_34430;
(statearr_34438[(7)] = inst_34407__$1);

return statearr_34438;
})();
if(cljs.core.truth_(inst_34407__$1)){
var statearr_34439_34602 = state_34430__$1;
(statearr_34439_34602[(1)] = (9));

} else {
var statearr_34440_34603 = state_34430__$1;
(statearr_34440_34603[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (3))){
var inst_34389 = (state_34430[(8)]);
var inst_34391 = (state_34430[(9)]);
var inst_34390 = (state_34430[(10)]);
var inst_34394 = (function (){var vec__34382 = inst_34389;
var __QMARK_sch = inst_34390;
var udt_t1 = inst_34391;
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.call(null,udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
})();
var inst_34395 = (new cljs.core.Delay(inst_34394,null));
var inst_34396 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,792,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_34395,null,-1276101794,null);
var state_34430__$1 = state_34430;
var statearr_34441_34604 = state_34430__$1;
(statearr_34441_34604[(2)] = inst_34396);

(statearr_34441_34604[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (12))){
var inst_34416 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34417 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_34418 = (new cljs.core.PersistentVector(null,2,(5),inst_34416,inst_34417,null));
var inst_34419 = receive_event_msg_BANG_.call(null,inst_34418);
var state_34430__$1 = state_34430;
var statearr_34442_34605 = state_34430__$1;
(statearr_34442_34605[(2)] = inst_34419);

(statearr_34442_34605[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (2))){
var inst_34389 = (state_34430[(8)]);
var inst_34381 = (state_34430[(2)]);
var inst_34385 = cljs.core.deref.call(null,conns_);
var inst_34386 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34387 = [conn_type,uid,client_id];
var inst_34388 = (new cljs.core.PersistentVector(null,3,(5),inst_34386,inst_34387,null));
var inst_34389__$1 = cljs.core.get_in.call(null,inst_34385,inst_34388);
var inst_34390 = cljs.core.nth.call(null,inst_34389__$1,(0),null);
var inst_34391 = cljs.core.nth.call(null,inst_34389__$1,(1),null);
var inst_34392 = cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__);
var state_34430__$1 = (function (){var statearr_34443 = state_34430;
(statearr_34443[(8)] = inst_34389__$1);

(statearr_34443[(9)] = inst_34391);

(statearr_34443[(10)] = inst_34390);

(statearr_34443[(11)] = inst_34381);

return statearr_34443;
})();
if(cljs.core.truth_(inst_34392)){
var statearr_34444_34606 = state_34430__$1;
(statearr_34444_34606[(1)] = (3));

} else {
var statearr_34445_34607 = state_34430__$1;
(statearr_34445_34607[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (11))){
var inst_34425 = (state_34430[(2)]);
var state_34430__$1 = state_34430;
var statearr_34446_34608 = state_34430__$1;
(statearr_34446_34608[(2)] = inst_34425);

(statearr_34446_34608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (9))){
var inst_34407 = (state_34430[(7)]);
var inst_34389 = (state_34430[(8)]);
var inst_34391 = (state_34430[(9)]);
var inst_34390 = (state_34430[(10)]);
var inst_34409 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34410 = [conn_type,uid];
var inst_34411 = (new cljs.core.PersistentVector(null,2,(5),inst_34409,inst_34410,null));
var inst_34412 = (function (){var vec__34382 = inst_34389;
var __QMARK_sch = inst_34390;
var udt_t1 = inst_34391;
var disconnect_QMARK_ = inst_34407;
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_.call(null,_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
})();
var inst_34413 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_34411,inst_34412);
var inst_34414 = upd_connected_uid_BANG_.call(null,uid);
var state_34430__$1 = (function (){var statearr_34447 = state_34430;
(statearr_34447[(12)] = inst_34413);

return statearr_34447;
})();
if(cljs.core.truth_(inst_34414)){
var statearr_34448_34609 = state_34430__$1;
(statearr_34448_34609[(1)] = (12));

} else {
var statearr_34449_34610 = state_34430__$1;
(statearr_34449_34610[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (5))){
var inst_34391 = (state_34430[(9)]);
var inst_34399 = (state_34430[(2)]);
var inst_34400 = cljs.core._EQ_.call(null,inst_34391,udt_close);
var state_34430__$1 = (function (){var statearr_34450 = state_34430;
(statearr_34450[(13)] = inst_34399);

return statearr_34450;
})();
if(inst_34400){
var statearr_34451_34611 = state_34430__$1;
(statearr_34451_34611[(1)] = (6));

} else {
var statearr_34452_34612 = state_34430__$1;
(statearr_34452_34612[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (14))){
var inst_34422 = (state_34430[(2)]);
var state_34430__$1 = state_34430;
var statearr_34453_34613 = state_34430__$1;
(statearr_34453_34613[(2)] = inst_34422);

(statearr_34453_34613[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (10))){
var state_34430__$1 = state_34430;
var statearr_34454_34614 = state_34430__$1;
(statearr_34454_34614[(2)] = null);

(statearr_34454_34614[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34431 === (8))){
var inst_34428 = (state_34430[(2)]);
var state_34430__$1 = state_34430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34430__$1,inst_34428);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__15256__auto__ = null;
var taoensso$sente$state_machine__15256__auto____0 = (function (){
var statearr_34455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34455[(0)] = taoensso$sente$state_machine__15256__auto__);

(statearr_34455[(1)] = (1));

return statearr_34455;
});
var taoensso$sente$state_machine__15256__auto____1 = (function (state_34430){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_34430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e34456){var ex__15259__auto__ = e34456;
var statearr_34457_34615 = state_34430;
(statearr_34457_34615[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_34430[(4)]))){
var statearr_34458_34616 = state_34430;
(statearr_34458_34616[(1)] = cljs.core.first.call(null,(state_34430[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34617 = state_34430;
state_34430 = G__34617;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
taoensso$sente$state_machine__15256__auto__ = function(state_34430){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__15256__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__15256__auto____1.call(this,state_34430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__15256__auto____0;
taoensso$sente$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__15256__auto____1;
return taoensso$sente$state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_34459 = f__15330__auto__.call(null);
(statearr_34459[(6)] = c__15329__auto__);

return statearr_34459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));

return c__15329__auto__;
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,814,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
}),null)),null,1257214729,null);
})], null));
}
}
})], null);
}));

(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq34152){
var G__34153 = cljs.core.first.call(null,seq34152);
var seq34152__$1 = cljs.core.next.call(null,seq34152);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34153,seq34152__$1);
}));

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,820,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-445451740,null);

var seq__34618 = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__34619 = null;
var count__34620 = (0);
var i__34621 = (0);
while(true){
if((i__34621 < count__34620)){
var vec__34634 = cljs.core._nth.call(null,chunk__34619,i__34621);
var client_id = cljs.core.nth.call(null,vec__34634,(0),null);
var vec__34637 = cljs.core.nth.call(null,vec__34634,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__34637,(0),null);
var _udt = cljs.core.nth.call(null,vec__34637,(1),null);
var temp__5753__auto___34646 = _QMARK_sch;
if(cljs.core.truth_(temp__5753__auto___34646)){
var sch_34647 = temp__5753__auto___34646;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_34647,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__34648 = seq__34618;
var G__34649 = chunk__34619;
var G__34650 = count__34620;
var G__34651 = (i__34621 + (1));
seq__34618 = G__34648;
chunk__34619 = G__34649;
count__34620 = G__34650;
i__34621 = G__34651;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__34618);
if(temp__5753__auto__){
var seq__34618__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34618__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__34618__$1);
var G__34652 = cljs.core.chunk_rest.call(null,seq__34618__$1);
var G__34653 = c__4591__auto__;
var G__34654 = cljs.core.count.call(null,c__4591__auto__);
var G__34655 = (0);
seq__34618 = G__34652;
chunk__34619 = G__34653;
count__34620 = G__34654;
i__34621 = G__34655;
continue;
} else {
var vec__34640 = cljs.core.first.call(null,seq__34618__$1);
var client_id = cljs.core.nth.call(null,vec__34640,(0),null);
var vec__34643 = cljs.core.nth.call(null,vec__34640,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__34643,(0),null);
var _udt = cljs.core.nth.call(null,vec__34643,(1),null);
var temp__5753__auto___34656__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__5753__auto___34656__$1)){
var sch_34657 = temp__5753__auto___34656__$1;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_34657,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__34658 = cljs.core.next.call(null,seq__34618__$1);
var G__34659 = null;
var G__34660 = (0);
var G__34661 = (0);
seq__34618 = G__34658;
chunk__34619 = G__34659;
count__34620 = G__34660;
i__34621 = G__34661;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,830,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,583704542,null);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__15329__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_34708){
var state_val_34709 = (state_34708[(1)]);
if((state_val_34709 === (7))){
var inst_34663 = (state_34708[(7)]);
var inst_34664 = (state_34708[(8)]);
var inst_34670 = (state_34708[(9)]);
var inst_34680 = (function (){var n = inst_34663;
var client_ids_satisfied = inst_34664;
var _QMARK_pulled = inst_34670;
return (function (s,client_id,p__34679){
var vec__34710 = p__34679;
var _QMARK_sch = cljs.core.nth.call(null,vec__34710,(0),null);
var _udt = cljs.core.nth.call(null,vec__34710,(1),null);
var sent_QMARK_ = (function (){var temp__5753__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__5753__auto__)){
var sch = temp__5753__auto__;
return taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_sch,cljs.core.not.call(null,new cljs.core.Keyword(null,"websocket","websocket",-1714963101)),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.call(null,s,client_id);
} else {
return s;
}
});
})();
var inst_34681 = cljs.core.PersistentHashSet.EMPTY;
var inst_34682 = cljs.core.reduce_kv.call(null,inst_34680,inst_34681,inst_34670);
var state_34708__$1 = state_34708;
var statearr_34713_34744 = state_34708__$1;
(statearr_34713_34744[(2)] = inst_34682);

(statearr_34713_34744[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (1))){
var inst_34662 = cljs.core.PersistentHashSet.EMPTY;
var inst_34663 = (0);
var inst_34664 = inst_34662;
var state_34708__$1 = (function (){var statearr_34714 = state_34708;
(statearr_34714[(7)] = inst_34663);

(statearr_34714[(8)] = inst_34664);

return statearr_34714;
})();
var statearr_34715_34745 = state_34708__$1;
(statearr_34715_34745[(2)] = null);

(statearr_34715_34745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (4))){
var state_34708__$1 = state_34708;
var statearr_34716_34746 = state_34708__$1;
(statearr_34716_34746[(2)] = true);

(statearr_34716_34746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (15))){
var inst_34701 = (state_34708[(2)]);
var state_34708__$1 = state_34708;
var statearr_34717_34747 = state_34708__$1;
(statearr_34717_34747[(2)] = inst_34701);

(statearr_34717_34747[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (13))){
var inst_34687 = (state_34708[(10)]);
var inst_34692 = cljs.core.rand_int.call(null,inst_34687);
var inst_34693 = (inst_34687 + inst_34692);
var inst_34694 = cljs.core.async.timeout.call(null,inst_34693);
var state_34708__$1 = state_34708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34708__$1,(16),inst_34694);
} else {
if((state_val_34709 === (6))){
var inst_34670 = (state_34708[(9)]);
var inst_34677 = (state_34708[(2)]);
var state_34708__$1 = (function (){var statearr_34718 = state_34708;
(statearr_34718[(11)] = inst_34677);

return statearr_34718;
})();
if(cljs.core.truth_(inst_34670)){
var statearr_34719_34748 = state_34708__$1;
(statearr_34719_34748[(1)] = (7));

} else {
var statearr_34720_34749 = state_34708__$1;
(statearr_34720_34749[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (3))){
var inst_34706 = (state_34708[(2)]);
var state_34708__$1 = state_34708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34708__$1,inst_34706);
} else {
if((state_val_34709 === (12))){
var inst_34704 = (state_34708[(2)]);
var state_34708__$1 = state_34708;
var statearr_34721_34750 = state_34708__$1;
(statearr_34721_34750[(2)] = inst_34704);

(statearr_34721_34750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (2))){
var inst_34663 = (state_34708[(7)]);
var inst_34664 = (state_34708[(8)]);
var inst_34670 = (state_34708[(9)]);
var inst_34666 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34667 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_34668 = (new cljs.core.PersistentVector(null,2,(5),inst_34666,inst_34667,null));
var inst_34669 = (function (){var n = inst_34663;
var client_ids_satisfied = inst_34664;
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,(function (m__$1,k){
var vec__34722 = cljs.core.get.call(null,m__$1,k);
var _QMARK_sch = cljs.core.nth.call(null,vec__34722,(0),null);
var udt = cljs.core.nth.call(null,vec__34722,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
}),m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
})();
var inst_34670__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_34668,inst_34669);
var inst_34671 = (function (){var n = inst_34663;
var client_ids_satisfied = inst_34664;
var _QMARK_pulled = inst_34670__$1;
return (function (x){
var or__4160__auto__ = (x == null);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});
})();
var inst_34672 = inst_34671.call(null,inst_34670__$1);
var state_34708__$1 = (function (){var statearr_34725 = state_34708;
(statearr_34725[(9)] = inst_34670__$1);

return statearr_34725;
})();
if(cljs.core.truth_(inst_34672)){
var statearr_34726_34751 = state_34708__$1;
(statearr_34726_34751[(1)] = (4));

} else {
var statearr_34727_34752 = state_34708__$1;
(statearr_34727_34752[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (11))){
var state_34708__$1 = state_34708;
var statearr_34728_34753 = state_34708__$1;
(statearr_34728_34753[(2)] = null);

(statearr_34728_34753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (9))){
var inst_34663 = (state_34708[(7)]);
var inst_34664 = (state_34708[(8)]);
var inst_34687 = (state_34708[(10)]);
var inst_34685 = (state_34708[(2)]);
var inst_34686 = cljs.core.into.call(null,inst_34664,inst_34685);
var inst_34687__$1 = cljs.core.get.call(null,ms_backoffs,inst_34663);
var state_34708__$1 = (function (){var statearr_34729 = state_34708;
(statearr_34729[(10)] = inst_34687__$1);

(statearr_34729[(12)] = inst_34686);

return statearr_34729;
})();
if(cljs.core.truth_(inst_34687__$1)){
var statearr_34730_34754 = state_34708__$1;
(statearr_34730_34754[(1)] = (10));

} else {
var statearr_34731_34755 = state_34708__$1;
(statearr_34731_34755[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (5))){
var inst_34670 = (state_34708[(9)]);
var inst_34675 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",857,"([:or nil? map?] ?pulled)",inst_34670,null,null);
var state_34708__$1 = state_34708;
var statearr_34732_34756 = state_34708__$1;
(statearr_34732_34756[(2)] = inst_34675);

(statearr_34732_34756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (14))){
var state_34708__$1 = state_34708;
var statearr_34733_34757 = state_34708__$1;
(statearr_34733_34757[(2)] = null);

(statearr_34733_34757[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (16))){
var inst_34663 = (state_34708[(7)]);
var inst_34686 = (state_34708[(12)]);
var inst_34696 = (state_34708[(2)]);
var inst_34697 = (inst_34663 + (1));
var inst_34663__$1 = inst_34697;
var inst_34664 = inst_34686;
var state_34708__$1 = (function (){var statearr_34734 = state_34708;
(statearr_34734[(13)] = inst_34696);

(statearr_34734[(7)] = inst_34663__$1);

(statearr_34734[(8)] = inst_34664);

return statearr_34734;
})();
var statearr_34735_34758 = state_34708__$1;
(statearr_34735_34758[(2)] = null);

(statearr_34735_34758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (10))){
var inst_34686 = (state_34708[(12)]);
var inst_34689 = cljs.core.complement.call(null,inst_34686);
var inst_34690 = taoensso.encore.rsome.call(null,inst_34689,client_ids_unsatisfied);
var state_34708__$1 = state_34708;
if(cljs.core.truth_(inst_34690)){
var statearr_34736_34759 = state_34708__$1;
(statearr_34736_34759[(1)] = (13));

} else {
var statearr_34737_34760 = state_34708__$1;
(statearr_34737_34760[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (8))){
var state_34708__$1 = state_34708;
var statearr_34738_34761 = state_34708__$1;
(statearr_34738_34761[(2)] = null);

(statearr_34738_34761[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__15256__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__15256__auto____0 = (function (){
var statearr_34739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34739[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__15256__auto__);

(statearr_34739[(1)] = (1));

return statearr_34739;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__15256__auto____1 = (function (state_34708){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_34708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e34740){var ex__15259__auto__ = e34740;
var statearr_34741_34762 = state_34708;
(statearr_34741_34762[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_34708[(4)]))){
var statearr_34742_34763 = state_34708;
(statearr_34742_34763[(1)] = cljs.core.first.call(null,(state_34708[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34764 = state_34708;
state_34708 = G__34764;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__15256__auto__ = function(state_34708){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__15256__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__15256__auto____1.call(this,state_34708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__15256__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__15256__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_34743 = f__15330__auto__.call(null);
(statearr_34743[(6)] = c__15329__auto__);

return statearr_34743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));

return c__15329__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

var taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_34765 = (function (chsk){
var x__4463__auto__ = (((chsk == null))?null:chsk);
var m__4464__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,chsk);
} else {
var m__4461__auto__ = (taoensso.sente._chsk_connect_BANG_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-connect!",chsk);
}
}
});
taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
return taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_34765.call(null,chsk);
}
});

var taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_34766 = (function (chsk,reason){
var x__4463__auto__ = (((chsk == null))?null:chsk);
var m__4464__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,chsk,reason);
} else {
var m__4461__auto__ = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,chsk,reason);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-disconnect!",chsk);
}
}
});
taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
return taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_34766.call(null,chsk,reason);
}
});

var taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_34767 = (function (chsk){
var x__4463__auto__ = (((chsk == null))?null:chsk);
var m__4464__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,chsk);
} else {
var m__4461__auto__ = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-reconnect!",chsk);
}
}
});
taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
return taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_34767.call(null,chsk);
}
});

var taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_34768 = (function (chsk,ev,opts){
var x__4463__auto__ = (((chsk == null))?null:chsk);
var m__4464__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,chsk,ev,opts);
} else {
var m__4461__auto__ = (taoensso.sente._chsk_send_BANG_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-send!",chsk);
}
}
});
taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
return taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_34768.call(null,chsk,ev,opts);
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_.call(null,chsk);
});
taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_.call(null,chsk,new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641));
});
/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_.call(null,chsk);
});
/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var G__34770 = arguments.length;
switch (G__34770) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
}));

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
}));

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,904,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,-158476683,null);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
}));

(taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4);

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,908,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,-1870537768,null);

if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if((((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null)))) || (taoensso.encore.nat_int_QMARK_.call(null,_QMARK_timeout_ms)))){
} else {
throw (new Error(["Assert failed: ",["cb requires a timeout; timeout-ms should be a +ive integer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_timeout_ms)].join(''),"\n","(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))"].join('')));
}

if((((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)) || (taoensso.encore.chan_QMARK_.call(null,_QMARK_cb)))){
return null;
} else {
throw (new Error(["Assert failed: ",["cb should be nil, an ifn, or a channel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,_QMARK_cb))].join(''),"\n","(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))"].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__5753__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5753__auto__)){
var cb_uuid = temp__5753__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),(function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
}));
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__34772 = taoensso.encore.swap_in_BANG_.call(null,new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = f.call(null,old_state);
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.call(null,new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped.call(null,new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.call(null,vec__34772,(0),null);
var new_state = cljs.core.nth.call(null,vec__34772,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_34777 = (function (){try{if(cljs.core.map_QMARK_.call(null,state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e34775){if((e34775 instanceof Error)){
var e_34777 = e34775;
return e_34777;
} else {
throw e34775;

}
}})();
if((e_34777 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",951,"(map? state)",state,e_34777,null);
}

var e_34778 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null)),x);
}).call(null,reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e34776){if((e34776 instanceof Error)){
var e_34778 = e34776;
return e_34778;
} else {
throw e34776;

}
}})();
if((e_34778 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",952,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_34778,null);
}

if(cljs.core.truth_((function (){var or__4160__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.not_EQ_.call(null,reason,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}
})())){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null));
} else {
return state;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if((((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)))){
return _QMARK_cb;
} else {
var e_34783 = (function (){try{if(taoensso.encore.chan_QMARK_.call(null,_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e34779){if((e34779 instanceof Error)){
var e_34783 = e34779;
return e_34783;
} else {
throw e34779;

}
}})();
if((e_34783 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",972,"(enc/chan? ?cb)",_QMARK_cb,e_34783,null);
}

taoensso.sente.assert_event.call(null,ev);

var vec__34780 = ev;
var ev_id = cljs.core.nth.call(null,vec__34780,(0),null);
var _ = cljs.core.nth.call(null,vec__34780,(1),null);
var cb_ch = _QMARK_cb;
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[taoensso.encore.as_qname.call(null,ev_id),".cb"].join('')),reply], null));
});
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,982,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,-97296802,null);

var buffered_evs = ((cljs.core.vector_QMARK_.call(null,clj))?clj:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",983,"(vector? clj)",clj,null,null));
var seq__34784 = cljs.core.seq.call(null,buffered_evs);
var chunk__34785 = null;
var count__34786 = (0);
var i__34787 = (0);
while(true){
if((i__34787 < count__34786)){
var ev = cljs.core._nth.call(null,chunk__34785,i__34787);
taoensso.sente.assert_event.call(null,ev);

var vec__34794_34800 = ev;
var id_34801 = cljs.core.nth.call(null,vec__34794_34800,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_34801),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__34802 = seq__34784;
var G__34803 = chunk__34785;
var G__34804 = count__34786;
var G__34805 = (i__34787 + (1));
seq__34784 = G__34802;
chunk__34785 = G__34803;
count__34786 = G__34804;
i__34787 = G__34805;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__34784);
if(temp__5753__auto__){
var seq__34784__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34784__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__34784__$1);
var G__34806 = cljs.core.chunk_rest.call(null,seq__34784__$1);
var G__34807 = c__4591__auto__;
var G__34808 = cljs.core.count.call(null,c__4591__auto__);
var G__34809 = (0);
seq__34784 = G__34806;
chunk__34785 = G__34807;
count__34786 = G__34808;
i__34787 = G__34809;
continue;
} else {
var ev = cljs.core.first.call(null,seq__34784__$1);
taoensso.sente.assert_event.call(null,ev);

var vec__34797_34810 = ev;
var id_34811 = cljs.core.nth.call(null,vec__34797_34810,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_34811),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__34812 = cljs.core.next.call(null,seq__34784__$1);
var G__34813 = null;
var G__34814 = (0);
var G__34815 = (0);
seq__34784 = G__34812;
chunk__34785 = G__34813;
count__34786 = G__34814;
i__34787 = G__34815;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
if(cljs.core.vector_QMARK_.call(null,x)){
var vec__34819 = x;
var x1 = cljs.core.nth.call(null,vec__34819,(0),null);
return cljs.core._EQ_.call(null,x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return false;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_34832 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
}).call(null,chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e34823){if((e34823 instanceof Error)){
var e_34832 = e34823;
return e_34832;
} else {
throw e34823;

}
}})();
if((e_34832 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",995,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_34832,null);
}

var e_34833 = (function (){try{if(taoensso.sente.handshake_QMARK_.call(null,clj)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e34824){if((e34824 instanceof Error)){
var e_34833 = e34824;
return e_34833;
} else {
throw e34824;

}
}})();
if((e_34833 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",996,"(handshake? clj)",clj,e_34833,null);
}

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,997,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,808163572,null);

var vec__34825 = clj;
var _ = cljs.core.nth.call(null,vec__34825,(0),null);
var vec__34828 = cljs.core.nth.call(null,vec__34825,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__34828,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__34828,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__34828,(2),null);
var map__34831 = chsk;
var map__34831__$1 = cljs.core.__destructure_map.call(null,map__34831);
var chs = cljs.core.get.call(null,map__34831__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.call(null,map__34831__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_.call(null,ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,null,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event.call(null,handshake_ev);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk,(function (p1__34822_SHARP_){
return cljs.core.merge.call(null,p1__34822_SHARP_,new_state);
}));

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (function (){var make_package_name = (function (prefix){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"socket"].join('');
});
var require_fn = (((typeof require !== 'undefined'))?require:cljs.core.constantly.call(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065)));
return (new cljs.core.Delay((function (){
if(((taoensso.sente.node_target_QMARK_) && ((typeof require !== 'undefined')))){
try{return require_fn.call(null,make_package_name.call(null,"web"));
}catch (e34834){var e = e34834;
return null;
}} else {
return null;
}
}),null));
})();
taoensso.sente.create_js_client_websocket_BANG_ = (function taoensso$sente$create_js_client_websocket_BANG_(p__34835){
var map__34836 = p__34835;
var map__34836__$1 = cljs.core.__destructure_map.call(null,map__34836);
var opts = map__34836__$1;
var onerror_fn = cljs.core.get.call(null,map__34836__$1,new cljs.core.Keyword(null,"onerror-fn","onerror-fn",1069372505));
var onmessage_fn = cljs.core.get.call(null,map__34836__$1,new cljs.core.Keyword(null,"onmessage-fn","onmessage-fn",1633804172));
var onclose_fn = cljs.core.get.call(null,map__34836__$1,new cljs.core.Keyword(null,"onclose-fn","onclose-fn",-1388163785));
var uri_str = cljs.core.get.call(null,map__34836__$1,new cljs.core.Keyword(null,"uri-str","uri-str",304128675));
var headers = cljs.core.get.call(null,map__34836__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var temp__5753__auto__ = (function (){var or__4160__auto__ = taoensso.encore.oget.call(null,goog.global,"WebSocket");
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var or__4160__auto____$1 = taoensso.encore.oget.call(null,goog.global,"MozWebSocket");
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return taoensso.encore.oget.call(null,cljs.core.deref.call(null,taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var WebSocket = temp__5753__auto__;
var socket = (new WebSocket(uri_str));
var G__34837_34838 = socket;
(G__34837_34838["onerror"] = onerror_fn);

(G__34837_34838["onmessage"] = onmessage_fn);

(G__34837_34838["onclose"] = onclose_fn);


return socket;
} else {
return null;
}
});
taoensso.sente.create_websocket_BANG_ = (function taoensso$sente$create_websocket_BANG_(p__34839){
var map__34840 = p__34839;
var map__34840__$1 = cljs.core.__destructure_map.call(null,map__34840);
var opts = map__34840__$1;
var onerror_fn = cljs.core.get.call(null,map__34840__$1,new cljs.core.Keyword(null,"onerror-fn","onerror-fn",1069372505));
var onmessage_fn = cljs.core.get.call(null,map__34840__$1,new cljs.core.Keyword(null,"onmessage-fn","onmessage-fn",1633804172));
var onclose_fn = cljs.core.get.call(null,map__34840__$1,new cljs.core.Keyword(null,"onclose-fn","onclose-fn",-1388163785));
var uri_str = cljs.core.get.call(null,map__34840__$1,new cljs.core.Keyword(null,"uri-str","uri-str",304128675));
var headers = cljs.core.get.call(null,map__34840__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
return taoensso.sente.create_js_client_websocket_BANG_.call(null,opts);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,headers,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.headers = headers;
this.packer = packer;
this.url = url;
this.ws_kalive_ms = ws_kalive_ms;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k34848,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__34852 = k34848;
var G__34852__$1 = (((G__34852 instanceof cljs.core.Keyword))?G__34852.fqn:null);
switch (G__34852__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "headers":
return self__.headers;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "socket_":
return self__.socket_;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34848,else__4418__auto__);

}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4437__auto__,p__34853){
var vec__34854 = p__34853;
var k__4438__auto__ = cljs.core.nth.call(null,vec__34854,(0),null);
var v__4439__auto__ = cljs.core.nth.call(null,vec__34854,(1),null);
return f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__);
}),init__4436__auto__,this__4434__auto____$1);
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4430__auto__,pr_pair__4432__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__4431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34847){
var self__ = this;
var G__34847__$1 = this;
return (new cljs.core.RecordIter((0),G__34847__$1,15,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (15 + cljs.core.count.call(null,self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll.call(null,coll__4412__auto__));
}).call(null,this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34849,other34850){
var self__ = this;
var this34849__$1 = this;
return (((!((other34850 == null)))) && ((this34849__$1.constructor === other34850.constructor)) && (cljs.core._EQ_.call(null,this34849__$1.client_id,other34850.client_id)) && (cljs.core._EQ_.call(null,this34849__$1.chs,other34850.chs)) && (cljs.core._EQ_.call(null,this34849__$1.params,other34850.params)) && (cljs.core._EQ_.call(null,this34849__$1.headers,other34850.headers)) && (cljs.core._EQ_.call(null,this34849__$1.packer,other34850.packer)) && (cljs.core._EQ_.call(null,this34849__$1.url,other34850.url)) && (cljs.core._EQ_.call(null,this34849__$1.ws_kalive_ms,other34850.ws_kalive_ms)) && (cljs.core._EQ_.call(null,this34849__$1.state_,other34850.state_)) && (cljs.core._EQ_.call(null,this34849__$1.instance_handle_,other34850.instance_handle_)) && (cljs.core._EQ_.call(null,this34849__$1.retry_count_,other34850.retry_count_)) && (cljs.core._EQ_.call(null,this34849__$1.ever_opened_QMARK__,other34850.ever_opened_QMARK__)) && (cljs.core._EQ_.call(null,this34849__$1.backoff_ms_fn,other34850.backoff_ms_fn)) && (cljs.core._EQ_.call(null,this34849__$1.cbs_waiting_,other34850.cbs_waiting_)) && (cljs.core._EQ_.call(null,this34849__$1.socket_,other34850.socket_)) && (cljs.core._EQ_.call(null,this34849__$1.udt_last_comms_,other34850.udt_last_comms_)) && (cljs.core._EQ_.call(null,this34849__$1.__extmap,other34850.__extmap)));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"headers","headers",-835030129),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4425__auto__)),null));
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__34847){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__34857 = cljs.core.keyword_identical_QMARK_;
var expr__34858 = k__4423__auto__;
if(cljs.core.truth_(pred__34857.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__34858))){
return (new taoensso.sente.ChWebSocket(G__34847,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34857.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__34858))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__34847,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34857.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__34858))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__34847,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34857.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129),expr__34858))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__34847,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34857.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__34858))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,G__34847,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34857.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__34858))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,G__34847,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34857.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__34858))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,G__34847,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34857.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__34858))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,G__34847,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34857.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__34858))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__34847,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34857.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__34858))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__34847,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34857.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__34858))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__34847,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34857.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__34858))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__34847,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34857.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__34858))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__34847,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34857.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__34858))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__34847,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34857.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__34858))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__34847,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4423__auto__,G__34847),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__34847){
var self__ = this;
var this__4414__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__34847,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4421__auto__,(0)),cljs.core._nth.call(null,entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,(function (p1__34841_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__34841_SHARP_,reason);
}));

var temp__5753__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__5753__auto__)){
var s = temp__5753__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__34860 = opts;
var map__34860__$1 = cljs.core.__destructure_map.call(null,map__34860);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__34860__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__34860__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__34860__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,ev,_QMARK_cb_uuid);
var temp__5753__auto___34940 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5753__auto___34940)){
var cb_uuid_34941 = temp__5753__auto___34940;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_34941], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e34861){if((e34861 instanceof Error)){
var e = e34861;
return e;
} else {
throw e34861;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",1141,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__5753__auto___34942__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5753__auto___34942__$1)){
var timeout_ms_34943 = temp__5753__auto___34942__$1;
var c__15329__auto___34944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_34872){
var state_val_34873 = (state_34872[(1)]);
if((state_val_34873 === (1))){
var inst_34862 = cljs.core.async.timeout.call(null,timeout_ms_34943);
var state_34872__$1 = state_34872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34872__$1,(2),inst_34862);
} else {
if((state_val_34873 === (2))){
var inst_34865 = (state_34872[(7)]);
var inst_34864 = (state_34872[(2)]);
var inst_34865__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_34872__$1 = (function (){var statearr_34874 = state_34872;
(statearr_34874[(7)] = inst_34865__$1);

(statearr_34874[(8)] = inst_34864);

return statearr_34874;
})();
if(cljs.core.truth_(inst_34865__$1)){
var statearr_34875_34945 = state_34872__$1;
(statearr_34875_34945[(1)] = (3));

} else {
var statearr_34876_34946 = state_34872__$1;
(statearr_34876_34946[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34873 === (3))){
var inst_34865 = (state_34872[(7)]);
var inst_34867 = inst_34865.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_34872__$1 = state_34872;
var statearr_34877_34947 = state_34872__$1;
(statearr_34877_34947[(2)] = inst_34867);

(statearr_34877_34947[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34873 === (4))){
var state_34872__$1 = state_34872;
var statearr_34878_34948 = state_34872__$1;
(statearr_34878_34948[(2)] = null);

(statearr_34878_34948[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34873 === (5))){
var inst_34870 = (state_34872[(2)]);
var state_34872__$1 = state_34872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34872__$1,inst_34870);
} else {
return null;
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__15256__auto__ = null;
var taoensso$sente$state_machine__15256__auto____0 = (function (){
var statearr_34879 = [null,null,null,null,null,null,null,null,null];
(statearr_34879[(0)] = taoensso$sente$state_machine__15256__auto__);

(statearr_34879[(1)] = (1));

return statearr_34879;
});
var taoensso$sente$state_machine__15256__auto____1 = (function (state_34872){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_34872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e34880){var ex__15259__auto__ = e34880;
var statearr_34881_34949 = state_34872;
(statearr_34881_34949[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_34872[(4)]))){
var statearr_34882_34950 = state_34872;
(statearr_34882_34950[(1)] = cljs.core.first.call(null,(state_34872[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34951 = state_34872;
state_34872 = G__34951;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
taoensso$sente$state_machine__15256__auto__ = function(state_34872){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__15256__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__15256__auto____1.call(this,state_34872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__15256__auto____0;
taoensso$sente$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__15256__auto____1;
return taoensso$sente$state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_34883 = f__15330__auto__.call(null);
(statearr_34883[(6)] = c__15329__auto___34944);

return statearr_34883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e34884){var t = e34884;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1155,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"Chsk send error"], null);
}),null)),null,-839266794,null);

var temp__5753__auto___34952 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5753__auto___34952)){
var cb_uuid_34953 = temp__5753__auto___34952;
var cb_fn_STAR__34954 = (function (){var or__4160__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_34953);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e34885){if((e34885 instanceof Error)){
var e = e34885;
return e;
} else {
throw e34885;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",1158,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
}
})();
cb_fn_STAR__34954.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
}}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_.call(null,self__.instance_handle_,taoensso.encore.uuid_str.call(null));
var have_handle_QMARK_ = (function (){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.instance_handle_),instance_handle);
});
var connect_fn = (function taoensso$sente$connect_fn(){
if(have_handle_QMARK_.call(null)){
var retry_fn = (function (){
if(have_handle_QMARK_.call(null)){
var retry_count_STAR_ = cljs.core.swap_BANG_.call(null,self__.retry_count_,cljs.core.inc);
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1174,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
}),null)),null,-1960831791,null);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,(function (p1__34842_SHARP_){
return cljs.core.assoc.call(null,p1__34842_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
}));
} else {
return null;
}
});
var onerror_fn = (function (ws_ev){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.call(null,ws_ev);
}catch (e34886){var _ = e34886;
return ws_ev;
}})()], null);
}),null)),null,2047831829,null);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,(function (p1__34843_SHARP_){
return cljs.core.assoc.call(null,p1__34843_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null));
}));
});
var onmessage_fn = (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__34887 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__34887,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__34887,(1),null);
cljs.core.reset_BANG_.call(null,self__.udt_last_comms_,taoensso.encore.now_udt.call(null));

var or__4160__auto__ = ((taoensso.sente.handshake_QMARK_.call(null,clj))?(function (){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var or__4160__auto____$1 = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
var temp__5751__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5751__auto__)){
var cb_uuid = temp__5751__auto__;
var temp__5751__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__5751__auto____$1)){
var cb_fn = temp__5751__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1231,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
}),null)),null,-255521398,null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});
var onclose_fn = (function (ws_ev){
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),taoensso.encore.oget.call(null,ws_ev,"wasClean"),new cljs.core.Keyword(null,"code","code",1586293142),taoensso.encore.oget.call(null,ws_ev,"code"),new cljs.core.Keyword(null,"reason","reason",-2070751759),taoensso.encore.oget.call(null,ws_ev,"reason")], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"clean?","clean?",-1675631009).cljs$core$IFn$_invoke$arity$1(last_ws_close))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,1257,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
}),null)),null,2111755395,null);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,(function (p1__34845_SHARP_){
return cljs.core.assoc.call(null,p1__34845_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
}));
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,(function (p1__34846_SHARP_){
return cljs.core.assoc.call(null,taoensso.sente.chsk_state__GT_closed.call(null,p1__34846_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
}));

return retry_fn.call(null);
}
});
var _QMARK_socket = (function (){try{return taoensso.sente.create_websocket_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"onerror-fn","onerror-fn",1069372505),onerror_fn,new cljs.core.Keyword(null,"onmessage-fn","onmessage-fn",1633804172),onmessage_fn,new cljs.core.Keyword(null,"onclose-fn","onclose-fn",-1388163785),onclose_fn,new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers,new cljs.core.Keyword(null,"uri-str","uri-str",304128675),taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_))], null)))], null));
}catch (e34890){var t = e34890;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1280,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"WebSocket error"], null);
}),null)),null,-1918880510,null);

return null;
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
var temp__5753__auto___34955 = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__5753__auto___34955)){
var old_socket_34956 = temp__5753__auto___34955;
old_socket_34956.close();
} else {
}

return cljs.core.reset_BANG_.call(null,self__.socket_,_QMARK_socket);
}
} else {
return null;
}
});
var temp__5753__auto___34957 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5753__auto___34957)){
var ms_34958 = temp__5753__auto___34957;
var c__15329__auto___34959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_34918){
var state_val_34919 = (state_34918[(1)]);
if((state_val_34919 === (7))){
var inst_34914 = (state_34918[(2)]);
var state_34918__$1 = state_34918;
var statearr_34920_34960 = state_34918__$1;
(statearr_34920_34960[(2)] = inst_34914);

(statearr_34920_34960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (1))){
var state_34918__$1 = state_34918;
var statearr_34921_34961 = state_34918__$1;
(statearr_34921_34961[(2)] = null);

(statearr_34921_34961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (4))){
var inst_34895 = (state_34918[(2)]);
var inst_34896 = have_handle_QMARK_.call(null);
var state_34918__$1 = (function (){var statearr_34922 = state_34918;
(statearr_34922[(7)] = inst_34895);

return statearr_34922;
})();
if(inst_34896){
var statearr_34923_34962 = state_34918__$1;
(statearr_34923_34962[(1)] = (5));

} else {
var statearr_34924_34963 = state_34918__$1;
(statearr_34924_34963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (6))){
var state_34918__$1 = state_34918;
var statearr_34925_34964 = state_34918__$1;
(statearr_34925_34964[(2)] = null);

(statearr_34925_34964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (3))){
var inst_34916 = (state_34918[(2)]);
var state_34918__$1 = state_34918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34918__$1,inst_34916);
} else {
if((state_val_34919 === (2))){
var inst_34892 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_34893 = cljs.core.async.timeout.call(null,ms_34958);
var state_34918__$1 = (function (){var statearr_34926 = state_34918;
(statearr_34926[(8)] = inst_34892);

return statearr_34926;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34918__$1,(4),inst_34893);
} else {
if((state_val_34919 === (9))){
var state_34918__$1 = state_34918;
var statearr_34927_34965 = state_34918__$1;
(statearr_34927_34965[(2)] = null);

(statearr_34927_34965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (5))){
var inst_34892 = (state_34918[(8)]);
var inst_34898 = cljs.core.deref.call(null,self__.udt_last_comms_);
var inst_34899 = cljs.core._EQ_.call(null,inst_34892,inst_34898);
var state_34918__$1 = state_34918;
if(inst_34899){
var statearr_34928_34966 = state_34918__$1;
(statearr_34928_34966[(1)] = (8));

} else {
var statearr_34929_34967 = state_34918__$1;
(statearr_34929_34967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (10))){
var inst_34910 = (state_34918[(2)]);
var state_34918__$1 = (function (){var statearr_34930 = state_34918;
(statearr_34930[(9)] = inst_34910);

return statearr_34930;
})();
var statearr_34931_34968 = state_34918__$1;
(statearr_34931_34968[(2)] = null);

(statearr_34931_34968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (8))){
var inst_34901 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34902 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_34903 = (new cljs.core.PersistentVector(null,1,(5),inst_34901,inst_34902,null));
var inst_34904 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_34905 = [true];
var inst_34906 = cljs.core.PersistentHashMap.fromArrays(inst_34904,inst_34905);
var inst_34907 = taoensso.sente._chsk_send_BANG_.call(null,chsk__$1,inst_34903,inst_34906);
var state_34918__$1 = state_34918;
var statearr_34932_34969 = state_34918__$1;
(statearr_34932_34969[(2)] = inst_34907);

(statearr_34932_34969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__15256__auto__ = null;
var taoensso$sente$state_machine__15256__auto____0 = (function (){
var statearr_34933 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34933[(0)] = taoensso$sente$state_machine__15256__auto__);

(statearr_34933[(1)] = (1));

return statearr_34933;
});
var taoensso$sente$state_machine__15256__auto____1 = (function (state_34918){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_34918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e34934){var ex__15259__auto__ = e34934;
var statearr_34935_34970 = state_34918;
(statearr_34935_34970[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_34918[(4)]))){
var statearr_34936_34971 = state_34918;
(statearr_34936_34971[(1)] = cljs.core.first.call(null,(state_34918[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34972 = state_34918;
state_34918 = G__34972;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
taoensso$sente$state_machine__15256__auto__ = function(state_34918){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__15256__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__15256__auto____1.call(this,state_34918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__15256__auto____0;
taoensso$sente$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__15256__auto____1;
return taoensso$sente$state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_34937 = f__15330__auto__.call(null);
(statearr_34937[(6)] = c__15329__auto___34959);

return statearr_34937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));

} else {
}

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

connect_fn.call(null);

return chsk__$1;
}));

(taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"headers","headers",805501398,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"ws-kalive-ms","ws-kalive-ms",-1212255801,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"udt-last-comms_","udt-last-comms_",1494731888,null)], null);
}));

(taoensso.sente.ChWebSocket.cljs$lang$type = true);

(taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChWebSocket",null,(1),null));
}));

(taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write.call(null,writer__4459__auto__,"taoensso.sente/ChWebSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChWebSocket.
 */
taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,headers,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,headers,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChWebSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__34851){
var extmap__4454__auto__ = (function (){var G__34938 = cljs.core.dissoc.call(null,G__34851,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639));
if(cljs.core.record_QMARK_.call(null,G__34851)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__34938);
} else {
return G__34938;
}
})();
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__34851),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__34851),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__34851),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(G__34851),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__34851),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__34851),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__34851),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__34851),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__34851),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__34851),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__34851),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__34851),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__34851),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__34851),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__34851),null,cljs.core.not_empty.call(null,extmap__4454__auto__),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.call(null,(0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),cljs.core.atom.call(null,null)], null),opts));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(60));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k34980,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__34984 = k34980;
var G__34984__$1 = (((G__34984 instanceof cljs.core.Keyword))?G__34984.fqn:null);
switch (G__34984__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34980,else__4418__auto__);

}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4437__auto__,p__34985){
var vec__34986 = p__34985;
var k__4438__auto__ = cljs.core.nth.call(null,vec__34986,(0),null);
var v__4439__auto__ = cljs.core.nth.call(null,vec__34986,(1),null);
return f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__);
}),init__4436__auto__,this__4434__auto____$1);
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4430__auto__,pr_pair__4432__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__4431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34979){
var self__ = this;
var G__34979__$1 = this;
return (new cljs.core.RecordIter((0),G__34979__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll.call(null,coll__4412__auto__));
}).call(null,this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34981,other34982){
var self__ = this;
var this34981__$1 = this;
return (((!((other34982 == null)))) && ((this34981__$1.constructor === other34982.constructor)) && (cljs.core._EQ_.call(null,this34981__$1.client_id,other34982.client_id)) && (cljs.core._EQ_.call(null,this34981__$1.chs,other34982.chs)) && (cljs.core._EQ_.call(null,this34981__$1.params,other34982.params)) && (cljs.core._EQ_.call(null,this34981__$1.packer,other34982.packer)) && (cljs.core._EQ_.call(null,this34981__$1.url,other34982.url)) && (cljs.core._EQ_.call(null,this34981__$1.state_,other34982.state_)) && (cljs.core._EQ_.call(null,this34981__$1.instance_handle_,other34982.instance_handle_)) && (cljs.core._EQ_.call(null,this34981__$1.ever_opened_QMARK__,other34982.ever_opened_QMARK__)) && (cljs.core._EQ_.call(null,this34981__$1.backoff_ms_fn,other34982.backoff_ms_fn)) && (cljs.core._EQ_.call(null,this34981__$1.ajax_opts,other34982.ajax_opts)) && (cljs.core._EQ_.call(null,this34981__$1.curr_xhr_,other34982.curr_xhr_)) && (cljs.core._EQ_.call(null,this34981__$1.__extmap,other34982.__extmap)));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4425__auto__)),null));
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__34979){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__34989 = cljs.core.keyword_identical_QMARK_;
var expr__34990 = k__4423__auto__;
if(cljs.core.truth_(pred__34989.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__34990))){
return (new taoensso.sente.ChAjaxSocket(G__34979,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34989.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__34990))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__34979,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34989.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__34990))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__34979,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34989.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__34990))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__34979,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34989.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__34990))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__34979,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34989.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__34990))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__34979,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34989.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__34990))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__34979,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34989.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__34990))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__34979,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34989.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__34990))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__34979,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34989.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__34990))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__34979,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34989.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__34990))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__34979,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4423__auto__,G__34979),null));
}
}
}
}
}
}
}
}
}
}
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__34979){
var self__ = this;
var this__4414__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__34979,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4421__auto__,(0)),cljs.core._nth.call(null,entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,(function (p1__34973_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__34973_SHARP_,reason);
}));

var temp__5753__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__5753__auto__)){
var x = temp__5753__auto__;
return x.abort();
} else {
return null;
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__34992 = opts;
var map__34992__$1 = cljs.core.__destructure_map.call(null,map__34992);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__34992__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__34992__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__34992__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__4160__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var or__4160__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),(function taoensso$sente$ajax_cb(p__34993){
var map__34994 = p__34993;
var map__34994__$1 = cljs.core.__destructure_map.call(null,map__34994);
var _QMARK_error = cljs.core.get.call(null,map__34994__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__34994__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,(function (p1__34974_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__34974_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__34995 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__34995,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__34995,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1404,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
}),null)),null,768748319,null);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,(function (p1__34975_SHARP_){
return cljs.core.assoc.call(null,p1__34975_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));
}
}));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_.call(null,self__.instance_handle_,taoensso.encore.uuid_str.call(null));
var have_handle_QMARK_ = (function (){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.instance_handle_),instance_handle);
});
var poll_fn = (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,1414,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
}),null)),null,-1801728268,null);

if(have_handle_QMARK_.call(null)){
var retry_fn = (function (){
if(have_handle_QMARK_.call(null)){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
var udt_next_reconnect = (taoensso.encore.now_udt.call(null) + backoff_ms);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1422,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
}),null)),null,1663306676,null);

goog.global.setTimeout((function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
}),backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,(function (p1__34976_SHARP_){
return cljs.core.assoc.call(null,p1__34976_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
}));
} else {
return null;
}
});
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__4160__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null))),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_))], null))], null)),(function taoensso$sente$poll_fn_$_ajax_cb(p__34998){
var map__34999 = p__34998;
var map__34999__$1 = cljs.core.__destructure_map.call(null,map__34999);
var _QMARK_error = cljs.core.get.call(null,map__34999__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__34999__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,(function (p1__34977_SHARP_){
return taoensso.sente.chsk_state__GT_closed.call(null,p1__34977_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__35000 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__35000,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_.call(null,clj);
if(handshake_QMARK_){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_.call(null,chsk__$1,(function (p1__34978_SHARP_){
return cljs.core.assoc.call(null,p1__34978_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));

taoensso$sente$poll_fn.call(null,(0));

if(handshake_QMARK_){
return null;
} else {
var or__4160__auto__ = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
})));
} else {
return null;
}
});
poll_fn.call(null,(0));

return chsk__$1;
}));

(taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
}));

(taoensso.sente.ChAjaxSocket.cljs$lang$type = true);

(taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAjaxSocket",null,(1),null));
}));

(taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write.call(null,writer__4459__auto__,"taoensso.sente/ChAjaxSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChAjaxSocket.
 */
taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAjaxSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__34983){
var extmap__4454__auto__ = (function (){var G__35003 = cljs.core.dissoc.call(null,G__34983,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696));
if(cljs.core.record_QMARK_.call(null,G__34983)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35003);
} else {
return G__35003;
}
})();
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__34983),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__34983),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__34983),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__34983),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__34983),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__34983),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__34983),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__34983),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__34983),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__34983),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__34983),null,cljs.core.not_empty.call(null,extmap__4454__auto__),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.call(null,null)], null),opts));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k35006,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__35010 = k35006;
var G__35010__$1 = (((G__35010 instanceof cljs.core.Keyword))?G__35010.fqn:null);
switch (G__35010__$1) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35006,else__4418__auto__);

}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4437__auto__,p__35011){
var vec__35012 = p__35011;
var k__4438__auto__ = cljs.core.nth.call(null,vec__35012,(0),null);
var v__4439__auto__ = cljs.core.nth.call(null,vec__35012,(1),null);
return f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__);
}),init__4436__auto__,this__4434__auto____$1);
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4430__auto__,pr_pair__4432__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__4431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35005){
var self__ = this;
var G__35005__$1 = this;
return (new cljs.core.RecordIter((0),G__35005__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (-1193508708 ^ cljs.core.hash_unordered_coll.call(null,coll__4412__auto__));
}).call(null,this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35007,other35008){
var self__ = this;
var this35007__$1 = this;
return (((!((other35008 == null)))) && ((this35007__$1.constructor === other35008.constructor)) && (cljs.core._EQ_.call(null,this35007__$1.ws_chsk_opts,other35008.ws_chsk_opts)) && (cljs.core._EQ_.call(null,this35007__$1.ajax_chsk_opts,other35008.ajax_chsk_opts)) && (cljs.core._EQ_.call(null,this35007__$1.state_,other35008.state_)) && (cljs.core._EQ_.call(null,this35007__$1.impl_,other35008.impl_)) && (cljs.core._EQ_.call(null,this35007__$1.__extmap,other35008.__extmap)));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4425__auto__)),null));
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__35005){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__35015 = cljs.core.keyword_identical_QMARK_;
var expr__35016 = k__4423__auto__;
if(cljs.core.truth_(pred__35015.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__35016))){
return (new taoensso.sente.ChAutoSocket(G__35005,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35015.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__35016))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__35005,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35015.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__35016))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__35005,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35015.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__35016))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__35005,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4423__auto__,G__35005),null));
}
}
}
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__35005){
var self__ = this;
var this__4414__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__35005,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4421__auto__,(0)),cljs.core._nth.call(null,entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__5753__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__5753__auto__)){
var impl = temp__5753__auto__;
return taoensso.sente._chsk_disconnect_BANG_.call(null,impl,reason);
} else {
return null;
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5753__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__5753__auto__)){
var impl = temp__5753__auto__;
taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
} else {
return null;
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__5751__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__5751__auto__)){
var impl = temp__5751__auto__;
return taoensso.sente._chsk_send_BANG_.call(null,impl,ev,opts);
} else {
var map__35018 = opts;
var map__35018__$1 = cljs.core.__destructure_map.call(null,map__35018);
var _QMARK_cb = cljs.core.get.call(null,map__35018__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_conn_BANG_ = (function (){
cljs.core.remove_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_))));
});
var ws_conn_BANG_ = (function (){
var downgraded_QMARK___35021 = cljs.core.atom.call(null,false);
cljs.core.add_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),(function (_,___$1,old_state,new_state){
var temp__5753__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__5753__auto__)){
var impl = temp__5753__auto__;
var temp__5753__auto____$1 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ever_opened_QMARK__ = temp__5753__auto____$1;
if(cljs.core.truth_(cljs.core.deref.call(null,ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502).cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.compare_and_set_BANG_.call(null,downgraded_QMARK___35021,false,true)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1555,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
}),null)),null,-1200569007,null);

taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720));

return cljs.core.reset_BANG_.call(null,self__.impl_,ajax_conn_BANG_.call(null));
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
}));

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_))));
});
cljs.core.reset_BANG_.call(null,self__.impl_,(function (){var or__4160__auto__ = ws_conn_BANG_.call(null);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return ajax_conn_BANG_.call(null);
}
})());

return chsk__$1;
}));

(taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
}));

(taoensso.sente.ChAutoSocket.cljs$lang$type = true);

(taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAutoSocket",null,(1),null));
}));

(taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write.call(null,writer__4459__auto__,"taoensso.sente/ChAutoSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChAutoSocket.
 */
taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAutoSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__35009){
var extmap__4454__auto__ = (function (){var G__35019 = cljs.core.dissoc.call(null,G__35009,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179));
if(cljs.core.record_QMARK_.call(null,G__35009)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35019);
} else {
return G__35019;
}
})();
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__35009),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__35009),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__35009),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__35009),null,cljs.core.not_empty.call(null,extmap__4454__auto__),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAutoSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.call(null,null)], null),opts));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__35022 = protocol;
var G__35022__$1 = (((G__35022 instanceof cljs.core.Keyword))?G__35022.fqn:null);
switch (G__35022__$1) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null)),x);
}).call(null,protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e35023){if((e35023 instanceof Error)){
var e = e35023;
return e;
} else {
throw e35023;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",1574,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__35024 = type;
var G__35024__$1 = (((G__35024 instanceof cljs.core.Keyword))?G__35024.fqn:null);
switch (G__35024__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__35025 = protocol__$2;
switch (G__35025) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35025)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35024__$1)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$3),"//",taoensso.encore.path.call(null,host,path)].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :port           ; Server port (defaults to current page's port).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :headers        ; Map of additional headers to include in the initiating request
 *                     ; (currently only for Java clients).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *     :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___35048 = arguments.length;
var i__4772__auto___35049 = (0);
while(true){
if((i__4772__auto___35049 < len__4771__auto___35048)){
args__4777__auto__.push((arguments[i__4772__auto___35049]));

var G__35050 = (i__4772__auto___35049 + (1));
i__4772__auto___35049 = G__35050;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,_QMARK_csrf_token,p__35032){
var vec__35033 = p__35032;
var map__35036 = cljs.core.nth.call(null,vec__35033,(0),null);
var map__35036__$1 = cljs.core.__destructure_map.call(null,map__35036);
var opts = map__35036__$1;
var ajax_opts = cljs.core.get.call(null,map__35036__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__35036__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var client_id = cljs.core.get.call(null,map__35036__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__4160__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var protocol = cljs.core.get.call(null,map__35036__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.call(null,map__35036__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__35036__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__35036__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var port = cljs.core.get.call(null,map__35036__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var headers = cljs.core.get.call(null,map__35036__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var host = cljs.core.get.call(null,map__35036__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__35036__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__35036__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__35036__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__35033,(1),null);
var e_35051 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
}).call(null,type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e35037){if((e35037 instanceof Error)){
var e_35051 = e35037;
return e_35051;
} else {
throw e35037;

}
}})();
if((e_35051 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",1618,"([:in #{:ws :ajax :auto}] type)",type,e_35051,null);
}

var e_35052 = (function (){try{if(taoensso.encore.nblank_str_QMARK_.call(null,client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e35038){if((e35038 instanceof Error)){
var e_35052 = e35038;
return e_35052;
} else {
throw e35038;

}
}})();
if((e_35052 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",1619,"(enc/nblank-str? client-id)",client_id,e_35052,null);
}

if((!((_deprecated_more_opts == null)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1621,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
}),null)),null,1947572596,null);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1622,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
}),null)),null,348880768,null);
} else {
}

if((((!(typeof _QMARK_csrf_token === 'string'))) || (clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1625,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WARNING: no CSRF token provided. Connections will FAIL if server-side CSRF check is enabled (as it is by default)."], null);
}),null)),null,-1438730395,null);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var vec__35039 = (function (){var win_loc = taoensso.encore.get_win_loc.call(null);
var path__$1 = (function (){var z = (function (){try{var or__4160__auto__ = path;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
}catch (e35042){if((e35042 instanceof Error)){
var e = e35042;
return (new taoensso.truss.impl.WrappedError(e));
} else {
throw e35042;

}
}})();
var e = (function (){try{if((z instanceof taoensso.truss.impl.WrappedError)){
return z;
} else {
if(taoensso.truss.impl.some_QMARK_.call(null,z)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}
}catch (e35043){if((e35043 instanceof Error)){
var e = e35043;
return e;
} else {
throw e35043;

}
}})();
if((e == null)){
return z;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",1633,"(taoensso.truss.impl/some? (or path (:pathname win-loc)))",z,e,null);
}
})();
var temp__5751__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5751__auto__)){
var f = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)),f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
} else {
var protocol__$1 = (function (){var or__4160__auto__ = protocol;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var or__4160__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (cljs.core.truth_(host)?(cljs.core.truth_(port)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join(''):host):(cljs.core.truth_(port)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hostname","hostname",2105669933).cljs$core$IFn$_invoke$arity$1(win_loc)),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join(''):new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.call(null,vec__35039,(0),null);
var ajax_url = cljs.core.nth.call(null,vec__35039,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer.call(null,(512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.call(null,buf,cljs.core.map.call(null,(function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
})));
} else {
return cljs.core.async.chan.call(null,buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var ajax_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_.call(null,(function (){var G__35044 = type;
var G__35044__$1 = (((G__35044 instanceof cljs.core.Keyword))?G__35044.fqn:null);
switch (G__35044__$1) {
case "ws":
return taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts,_QMARK_csrf_token);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts,_QMARK_csrf_token);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket.call(null,auto_chsk_opts,_QMARK_csrf_token);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35044__$1)].join('')));

}
})());
var temp__5751__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__5751__auto__)){
var chsk = temp__5751__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,(function (ev){
var vec__35045 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__35045,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__35045,(1),null);
var ev__$1 = vec__35045;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
})));
cljs.core.async.pipe.call(null,ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1727,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
}),null)),null,61197511,null);
}
}));

(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq35029){
var G__35030 = cljs.core.first.call(null,seq35029);
var seq35029__$1 = cljs.core.next.call(null,seq35029);
var G__35031 = cljs.core.first.call(null,seq35029__$1);
var seq35029__$2 = cljs.core.next.call(null,seq35029__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35030,G__35031,seq35029__$2);
}));

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__35054 = opts;
var map__35054__$1 = cljs.core.__destructure_map.call(null,map__35054);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__35054__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__35054__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__35054__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.call(null);
var execute1 = (function (f){
return f.call(null);
});
var c__15329__auto___35101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_35082){
var state_val_35083 = (state_35082[(1)]);
if((state_val_35083 === (1))){
var state_35082__$1 = state_35082;
var statearr_35084_35102 = state_35082__$1;
(statearr_35084_35102[(2)] = null);

(statearr_35084_35102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (2))){
var inst_35059 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35060 = [ch_recv,ch_ctrl];
var inst_35061 = (new cljs.core.PersistentVector(null,2,(5),inst_35059,inst_35060,null));
var state_35082__$1 = state_35082;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35082__$1,(4),inst_35061);
} else {
if((state_val_35083 === (3))){
var inst_35080 = (state_35082[(2)]);
var state_35082__$1 = state_35082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35082__$1,inst_35080);
} else {
if((state_val_35083 === (4))){
var inst_35063 = (state_35082[(7)]);
var inst_35064 = (state_35082[(8)]);
var inst_35068 = (state_35082[(9)]);
var inst_35065 = (state_35082[(10)]);
var inst_35063__$1 = (state_35082[(2)]);
var inst_35064__$1 = cljs.core.nth.call(null,inst_35063__$1,(0),null);
var inst_35065__$1 = cljs.core.nth.call(null,inst_35063__$1,(1),null);
var inst_35066 = cljs.core._EQ_.call(null,inst_35065__$1,ch_ctrl);
var inst_35067 = (inst_35064__$1 == null);
var inst_35068__$1 = ((inst_35066) || (inst_35067));
var state_35082__$1 = (function (){var statearr_35085 = state_35082;
(statearr_35085[(7)] = inst_35063__$1);

(statearr_35085[(8)] = inst_35064__$1);

(statearr_35085[(9)] = inst_35068__$1);

(statearr_35085[(10)] = inst_35065__$1);

return statearr_35085;
})();
if(cljs.core.truth_(inst_35068__$1)){
var statearr_35086_35103 = state_35082__$1;
(statearr_35086_35103[(1)] = (5));

} else {
var statearr_35087_35104 = state_35082__$1;
(statearr_35087_35104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (5))){
var state_35082__$1 = state_35082;
var statearr_35088_35105 = state_35082__$1;
(statearr_35088_35105[(2)] = null);

(statearr_35088_35105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (6))){
var inst_35063 = (state_35082[(7)]);
var inst_35064 = (state_35082[(8)]);
var inst_35068 = (state_35082[(9)]);
var inst_35065 = (state_35082[(10)]);
var inst_35072 = cljs.core.__destructure_map.call(null,inst_35064);
var inst_35073 = cljs.core.get.call(null,inst_35072,new cljs.core.Keyword(null,"event","event",301435442));
var inst_35074 = (function (){var vec__35056 = inst_35063;
var v = inst_35064;
var p = inst_35065;
var stop_QMARK_ = inst_35068;
var map__35071 = inst_35072;
var event_msg = inst_35072;
var event = inst_35073;
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,1754,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
}),null)),null,-390464823,null);
} else {
}

return event_msg_handler.call(null,(cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(taoensso.sente.server_event_msg_QMARK_.call(null,event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e35091){if((e35091 instanceof Error)){
var e = e35091;
return e;
} else {
throw e35091;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",1757,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(taoensso.sente.client_event_msg_QMARK_.call(null,event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e35092){if((e35092 instanceof Error)){
var e = e35092;
return e;
} else {
throw e35092;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",1758,"(client-event-msg? event-msg)",event_msg,e,null);
}
})()));
}catch (e35089){var e1 = e35089;
try{var temp__5751__auto__ = error_handler;
if(cljs.core.truth_(temp__5751__auto__)){
var eh = temp__5751__auto__;
return error_handler.call(null,e1,event_msg);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1763,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
}),null)),null,-1170822762,null);
}
}catch (e35090){var e2 = e35090;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1764,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
}),null)),null,1536455879,null);
}}});
})();
var inst_35075 = execute1.call(null,inst_35074);
var state_35082__$1 = (function (){var statearr_35093 = state_35082;
(statearr_35093[(11)] = inst_35075);

return statearr_35093;
})();
var statearr_35094_35106 = state_35082__$1;
(statearr_35094_35106[(2)] = null);

(statearr_35094_35106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35083 === (7))){
var inst_35078 = (state_35082[(2)]);
var state_35082__$1 = state_35082;
var statearr_35095_35107 = state_35082__$1;
(statearr_35095_35107[(2)] = inst_35078);

(statearr_35095_35107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__15256__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__15256__auto____0 = (function (){
var statearr_35096 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35096[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__15256__auto__);

(statearr_35096[(1)] = (1));

return statearr_35096;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__15256__auto____1 = (function (state_35082){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_35082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e35097){var ex__15259__auto__ = e35097;
var statearr_35098_35108 = state_35082;
(statearr_35098_35108[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_35082[(4)]))){
var statearr_35099_35109 = state_35082;
(statearr_35099_35109[(1)] = cljs.core.first.call(null,(state_35082[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35110 = state_35082;
state_35082 = G__35110;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__15256__auto__ = function(state_35082){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__15256__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__15256__auto____1.call(this,state_35082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__15256__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__15256__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_35100 = f__15330__auto__.call(null);
(statearr_35100[(6)] = c__15329__auto___35101);

return statearr_35100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));


return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___35119 = arguments.length;
var i__4772__auto___35120 = (0);
while(true){
if((i__4772__auto___35120 < len__4771__auto___35119)){
args__4777__auto__.push((arguments[i__4772__auto___35120]));

var G__35121 = (i__4772__auto___35120 + (1));
i__4772__auto___35120 = G__35121;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__35114){
var vec__35115 = p__35114;
var map__35118 = cljs.core.nth.call(null,vec__35115,(0),null);
var map__35118__$1 = cljs.core.__destructure_map.call(null,map__35118);
var opts = map__35118__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__35118__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__35118__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.call(null,map__35118__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq35111){
var G__35112 = cljs.core.first.call(null,seq35111);
var seq35111__$1 = cljs.core.next.call(null,seq35111);
var G__35113 = cljs.core.first.call(null,seq35111__$1);
var seq35111__$2 = cljs.core.next.call(null,seq35111__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35112,G__35113,seq35111__$2);
}));

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___35130 = arguments.length;
var i__4772__auto___35131 = (0);
while(true){
if((i__4772__auto___35131 < len__4771__auto___35130)){
args__4777__auto__.push((arguments[i__4772__auto___35131]));

var G__35132 = (i__4772__auto___35131 + (1));
i__4772__auto___35131 = G__35132;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__35125){
var vec__35126 = p__35125;
var map__35129 = cljs.core.nth.call(null,vec__35126,(0),null);
var map__35129__$1 = cljs.core.__destructure_map.call(null,map__35129);
var opts = map__35129__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__35129__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__35129__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq35122){
var G__35123 = cljs.core.first.call(null,seq35122);
var seq35122__$1 = cljs.core.next.call(null,seq35122);
var G__35124 = cljs.core.first.call(null,seq35122__$1);
var seq35122__$2 = cljs.core.next.call(null,seq35122__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35123,G__35124,seq35122__$2);
}));

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__35133,websocket_QMARK_){
var map__35134 = p__35133;
var map__35134__$1 = cljs.core.__destructure_map.call(null,map__35134);
var location = map__35134__$1;
var protocol = cljs.core.get.call(null,map__35134__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__35134__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__35134__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = path;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map
