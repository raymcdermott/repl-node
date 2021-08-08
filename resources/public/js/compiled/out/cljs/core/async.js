// Compiled by ClojureScript 1.10.844 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15389 = arguments.length;
switch (G__15389) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15390 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15390 = (function (f,blockable,meta15391){
this.f = f;
this.blockable = blockable;
this.meta15391 = meta15391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15392,meta15391__$1){
var self__ = this;
var _15392__$1 = this;
return (new cljs.core.async.t_cljs$core$async15390(self__.f,self__.blockable,meta15391__$1));
}));

(cljs.core.async.t_cljs$core$async15390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15392){
var self__ = this;
var _15392__$1 = this;
return self__.meta15391;
}));

(cljs.core.async.t_cljs$core$async15390.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15390.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15390.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15390.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15391","meta15391",-581865097,null)], null);
}));

(cljs.core.async.t_cljs$core$async15390.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15390");

(cljs.core.async.t_cljs$core$async15390.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async15390");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15390.
 */
cljs.core.async.__GT_t_cljs$core$async15390 = (function cljs$core$async$__GT_t_cljs$core$async15390(f__$1,blockable__$1,meta15391){
return (new cljs.core.async.t_cljs$core$async15390(f__$1,blockable__$1,meta15391));
});

}

return (new cljs.core.async.t_cljs$core$async15390(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15396 = arguments.length;
switch (G__15396) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15399 = arguments.length;
switch (G__15399) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15402 = arguments.length;
switch (G__15402) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_15404 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15404);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_15404);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15406 = arguments.length;
switch (G__15406) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4648__auto___15408 = n;
var x_15409 = (0);
while(true){
if((x_15409 < n__4648__auto___15408)){
(a[x_15409] = x_15409);

var G__15410 = (x_15409 + (1));
x_15409 = G__15410;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15411 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15411 = (function (flag,meta15412){
this.flag = flag;
this.meta15412 = meta15412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15413,meta15412__$1){
var self__ = this;
var _15413__$1 = this;
return (new cljs.core.async.t_cljs$core$async15411(self__.flag,meta15412__$1));
}));

(cljs.core.async.t_cljs$core$async15411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15413){
var self__ = this;
var _15413__$1 = this;
return self__.meta15412;
}));

(cljs.core.async.t_cljs$core$async15411.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15411.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async15411.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15411.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15411.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15412","meta15412",-1915556013,null)], null);
}));

(cljs.core.async.t_cljs$core$async15411.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15411");

(cljs.core.async.t_cljs$core$async15411.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async15411");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15411.
 */
cljs.core.async.__GT_t_cljs$core$async15411 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15411(flag__$1,meta15412){
return (new cljs.core.async.t_cljs$core$async15411(flag__$1,meta15412));
});

}

return (new cljs.core.async.t_cljs$core$async15411(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15414 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15414 = (function (flag,cb,meta15415){
this.flag = flag;
this.cb = cb;
this.meta15415 = meta15415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15416,meta15415__$1){
var self__ = this;
var _15416__$1 = this;
return (new cljs.core.async.t_cljs$core$async15414(self__.flag,self__.cb,meta15415__$1));
}));

(cljs.core.async.t_cljs$core$async15414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15416){
var self__ = this;
var _15416__$1 = this;
return self__.meta15415;
}));

(cljs.core.async.t_cljs$core$async15414.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15414.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async15414.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15414.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15415","meta15415",-283869366,null)], null);
}));

(cljs.core.async.t_cljs$core$async15414.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15414");

(cljs.core.async.t_cljs$core$async15414.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async15414");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15414.
 */
cljs.core.async.__GT_t_cljs$core$async15414 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15414(flag__$1,cb__$1,meta15415){
return (new cljs.core.async.t_cljs$core$async15414(flag__$1,cb__$1,meta15415));
});

}

return (new cljs.core.async.t_cljs$core$async15414(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15417_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15417_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15418_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15418_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4160__auto__ = wport;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15419 = (i + (1));
i = G__15419;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4160__auto__ = ret;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4149__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___15424 = arguments.length;
var i__4772__auto___15425 = (0);
while(true){
if((i__4772__auto___15425 < len__4771__auto___15424)){
args__4777__auto__.push((arguments[i__4772__auto___15425]));

var G__15426 = (i__4772__auto___15425 + (1));
i__4772__auto___15425 = G__15426;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15422){
var map__15423 = p__15422;
var map__15423__$1 = cljs.core.__destructure_map.call(null,map__15423);
var opts = map__15423__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15420){
var G__15421 = cljs.core.first.call(null,seq15420);
var seq15420__$1 = cljs.core.next.call(null,seq15420);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15421,seq15420__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15428 = arguments.length;
switch (G__15428) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15329__auto___15475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_15452){
var state_val_15453 = (state_15452[(1)]);
if((state_val_15453 === (7))){
var inst_15448 = (state_15452[(2)]);
var state_15452__$1 = state_15452;
var statearr_15454_15476 = state_15452__$1;
(statearr_15454_15476[(2)] = inst_15448);

(statearr_15454_15476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15453 === (1))){
var state_15452__$1 = state_15452;
var statearr_15455_15477 = state_15452__$1;
(statearr_15455_15477[(2)] = null);

(statearr_15455_15477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15453 === (4))){
var inst_15431 = (state_15452[(7)]);
var inst_15431__$1 = (state_15452[(2)]);
var inst_15432 = (inst_15431__$1 == null);
var state_15452__$1 = (function (){var statearr_15456 = state_15452;
(statearr_15456[(7)] = inst_15431__$1);

return statearr_15456;
})();
if(cljs.core.truth_(inst_15432)){
var statearr_15457_15478 = state_15452__$1;
(statearr_15457_15478[(1)] = (5));

} else {
var statearr_15458_15479 = state_15452__$1;
(statearr_15458_15479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15453 === (13))){
var state_15452__$1 = state_15452;
var statearr_15459_15480 = state_15452__$1;
(statearr_15459_15480[(2)] = null);

(statearr_15459_15480[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15453 === (6))){
var inst_15431 = (state_15452[(7)]);
var state_15452__$1 = state_15452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15452__$1,(11),to,inst_15431);
} else {
if((state_val_15453 === (3))){
var inst_15450 = (state_15452[(2)]);
var state_15452__$1 = state_15452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15452__$1,inst_15450);
} else {
if((state_val_15453 === (12))){
var state_15452__$1 = state_15452;
var statearr_15460_15481 = state_15452__$1;
(statearr_15460_15481[(2)] = null);

(statearr_15460_15481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15453 === (2))){
var state_15452__$1 = state_15452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15452__$1,(4),from);
} else {
if((state_val_15453 === (11))){
var inst_15441 = (state_15452[(2)]);
var state_15452__$1 = state_15452;
if(cljs.core.truth_(inst_15441)){
var statearr_15461_15482 = state_15452__$1;
(statearr_15461_15482[(1)] = (12));

} else {
var statearr_15462_15483 = state_15452__$1;
(statearr_15462_15483[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15453 === (9))){
var state_15452__$1 = state_15452;
var statearr_15463_15484 = state_15452__$1;
(statearr_15463_15484[(2)] = null);

(statearr_15463_15484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15453 === (5))){
var state_15452__$1 = state_15452;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15464_15485 = state_15452__$1;
(statearr_15464_15485[(1)] = (8));

} else {
var statearr_15465_15486 = state_15452__$1;
(statearr_15465_15486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15453 === (14))){
var inst_15446 = (state_15452[(2)]);
var state_15452__$1 = state_15452;
var statearr_15466_15487 = state_15452__$1;
(statearr_15466_15487[(2)] = inst_15446);

(statearr_15466_15487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15453 === (10))){
var inst_15438 = (state_15452[(2)]);
var state_15452__$1 = state_15452;
var statearr_15467_15488 = state_15452__$1;
(statearr_15467_15488[(2)] = inst_15438);

(statearr_15467_15488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15453 === (8))){
var inst_15435 = cljs.core.async.close_BANG_.call(null,to);
var state_15452__$1 = state_15452;
var statearr_15468_15489 = state_15452__$1;
(statearr_15468_15489[(2)] = inst_15435);

(statearr_15468_15489[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__15256__auto__ = null;
var cljs$core$async$state_machine__15256__auto____0 = (function (){
var statearr_15469 = [null,null,null,null,null,null,null,null];
(statearr_15469[(0)] = cljs$core$async$state_machine__15256__auto__);

(statearr_15469[(1)] = (1));

return statearr_15469;
});
var cljs$core$async$state_machine__15256__auto____1 = (function (state_15452){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_15452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e15470){var ex__15259__auto__ = e15470;
var statearr_15471_15490 = state_15452;
(statearr_15471_15490[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_15452[(4)]))){
var statearr_15472_15491 = state_15452;
(statearr_15472_15491[(1)] = cljs.core.first.call(null,(state_15452[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15492 = state_15452;
state_15452 = G__15492;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
cljs$core$async$state_machine__15256__auto__ = function(state_15452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15256__auto____1.call(this,state_15452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15256__auto____0;
cljs$core$async$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15256__auto____1;
return cljs$core$async$state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_15473 = f__15330__auto__.call(null);
(statearr_15473[(6)] = c__15329__auto___15475);

return statearr_15473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__15493){
var vec__15494 = p__15493;
var v = cljs.core.nth.call(null,vec__15494,(0),null);
var p = cljs.core.nth.call(null,vec__15494,(1),null);
var job = vec__15494;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15329__auto___15670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_15501){
var state_val_15502 = (state_15501[(1)]);
if((state_val_15502 === (1))){
var state_15501__$1 = state_15501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15501__$1,(2),res,v);
} else {
if((state_val_15502 === (2))){
var inst_15498 = (state_15501[(2)]);
var inst_15499 = cljs.core.async.close_BANG_.call(null,res);
var state_15501__$1 = (function (){var statearr_15503 = state_15501;
(statearr_15503[(7)] = inst_15498);

return statearr_15503;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15501__$1,inst_15499);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____0 = (function (){
var statearr_15504 = [null,null,null,null,null,null,null,null];
(statearr_15504[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__);

(statearr_15504[(1)] = (1));

return statearr_15504;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____1 = (function (state_15501){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_15501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e15505){var ex__15259__auto__ = e15505;
var statearr_15506_15671 = state_15501;
(statearr_15506_15671[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_15501[(4)]))){
var statearr_15507_15672 = state_15501;
(statearr_15507_15672[(1)] = cljs.core.first.call(null,(state_15501[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15673 = state_15501;
state_15501 = G__15673;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__ = function(state_15501){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____1.call(this,state_15501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_15508 = f__15330__auto__.call(null);
(statearr_15508[(6)] = c__15329__auto___15670);

return statearr_15508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__15509){
var vec__15510 = p__15509;
var v = cljs.core.nth.call(null,vec__15510,(0),null);
var p = cljs.core.nth.call(null,vec__15510,(1),null);
var job = vec__15510;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4648__auto___15674 = n;
var __15675 = (0);
while(true){
if((__15675 < n__4648__auto___15674)){
var G__15513_15676 = type;
var G__15513_15677__$1 = (((G__15513_15676 instanceof cljs.core.Keyword))?G__15513_15676.fqn:null);
switch (G__15513_15677__$1) {
case "compute":
var c__15329__auto___15679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15675,c__15329__auto___15679,G__15513_15676,G__15513_15677__$1,n__4648__auto___15674,jobs,results,process,async){
return (function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = ((function (__15675,c__15329__auto___15679,G__15513_15676,G__15513_15677__$1,n__4648__auto___15674,jobs,results,process,async){
return (function (state_15526){
var state_val_15527 = (state_15526[(1)]);
if((state_val_15527 === (1))){
var state_15526__$1 = state_15526;
var statearr_15528_15680 = state_15526__$1;
(statearr_15528_15680[(2)] = null);

(statearr_15528_15680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15527 === (2))){
var state_15526__$1 = state_15526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15526__$1,(4),jobs);
} else {
if((state_val_15527 === (3))){
var inst_15524 = (state_15526[(2)]);
var state_15526__$1 = state_15526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15526__$1,inst_15524);
} else {
if((state_val_15527 === (4))){
var inst_15516 = (state_15526[(2)]);
var inst_15517 = process.call(null,inst_15516);
var state_15526__$1 = state_15526;
if(cljs.core.truth_(inst_15517)){
var statearr_15529_15681 = state_15526__$1;
(statearr_15529_15681[(1)] = (5));

} else {
var statearr_15530_15682 = state_15526__$1;
(statearr_15530_15682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15527 === (5))){
var state_15526__$1 = state_15526;
var statearr_15531_15683 = state_15526__$1;
(statearr_15531_15683[(2)] = null);

(statearr_15531_15683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15527 === (6))){
var state_15526__$1 = state_15526;
var statearr_15532_15684 = state_15526__$1;
(statearr_15532_15684[(2)] = null);

(statearr_15532_15684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15527 === (7))){
var inst_15522 = (state_15526[(2)]);
var state_15526__$1 = state_15526;
var statearr_15533_15685 = state_15526__$1;
(statearr_15533_15685[(2)] = inst_15522);

(statearr_15533_15685[(1)] = (3));


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
});})(__15675,c__15329__auto___15679,G__15513_15676,G__15513_15677__$1,n__4648__auto___15674,jobs,results,process,async))
;
return ((function (__15675,switch__15255__auto__,c__15329__auto___15679,G__15513_15676,G__15513_15677__$1,n__4648__auto___15674,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____0 = (function (){
var statearr_15534 = [null,null,null,null,null,null,null];
(statearr_15534[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__);

(statearr_15534[(1)] = (1));

return statearr_15534;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____1 = (function (state_15526){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_15526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e15535){var ex__15259__auto__ = e15535;
var statearr_15536_15686 = state_15526;
(statearr_15536_15686[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_15526[(4)]))){
var statearr_15537_15687 = state_15526;
(statearr_15537_15687[(1)] = cljs.core.first.call(null,(state_15526[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15688 = state_15526;
state_15526 = G__15688;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__ = function(state_15526){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____1.call(this,state_15526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__;
})()
;})(__15675,switch__15255__auto__,c__15329__auto___15679,G__15513_15676,G__15513_15677__$1,n__4648__auto___15674,jobs,results,process,async))
})();
var state__15331__auto__ = (function (){var statearr_15538 = f__15330__auto__.call(null);
(statearr_15538[(6)] = c__15329__auto___15679);

return statearr_15538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
});})(__15675,c__15329__auto___15679,G__15513_15676,G__15513_15677__$1,n__4648__auto___15674,jobs,results,process,async))
);


break;
case "async":
var c__15329__auto___15689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15675,c__15329__auto___15689,G__15513_15676,G__15513_15677__$1,n__4648__auto___15674,jobs,results,process,async){
return (function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = ((function (__15675,c__15329__auto___15689,G__15513_15676,G__15513_15677__$1,n__4648__auto___15674,jobs,results,process,async){
return (function (state_15551){
var state_val_15552 = (state_15551[(1)]);
if((state_val_15552 === (1))){
var state_15551__$1 = state_15551;
var statearr_15553_15690 = state_15551__$1;
(statearr_15553_15690[(2)] = null);

(statearr_15553_15690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (2))){
var state_15551__$1 = state_15551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15551__$1,(4),jobs);
} else {
if((state_val_15552 === (3))){
var inst_15549 = (state_15551[(2)]);
var state_15551__$1 = state_15551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15551__$1,inst_15549);
} else {
if((state_val_15552 === (4))){
var inst_15541 = (state_15551[(2)]);
var inst_15542 = async.call(null,inst_15541);
var state_15551__$1 = state_15551;
if(cljs.core.truth_(inst_15542)){
var statearr_15554_15691 = state_15551__$1;
(statearr_15554_15691[(1)] = (5));

} else {
var statearr_15555_15692 = state_15551__$1;
(statearr_15555_15692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (5))){
var state_15551__$1 = state_15551;
var statearr_15556_15693 = state_15551__$1;
(statearr_15556_15693[(2)] = null);

(statearr_15556_15693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (6))){
var state_15551__$1 = state_15551;
var statearr_15557_15694 = state_15551__$1;
(statearr_15557_15694[(2)] = null);

(statearr_15557_15694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (7))){
var inst_15547 = (state_15551[(2)]);
var state_15551__$1 = state_15551;
var statearr_15558_15695 = state_15551__$1;
(statearr_15558_15695[(2)] = inst_15547);

(statearr_15558_15695[(1)] = (3));


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
});})(__15675,c__15329__auto___15689,G__15513_15676,G__15513_15677__$1,n__4648__auto___15674,jobs,results,process,async))
;
return ((function (__15675,switch__15255__auto__,c__15329__auto___15689,G__15513_15676,G__15513_15677__$1,n__4648__auto___15674,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____0 = (function (){
var statearr_15559 = [null,null,null,null,null,null,null];
(statearr_15559[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__);

(statearr_15559[(1)] = (1));

return statearr_15559;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____1 = (function (state_15551){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_15551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e15560){var ex__15259__auto__ = e15560;
var statearr_15561_15696 = state_15551;
(statearr_15561_15696[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_15551[(4)]))){
var statearr_15562_15697 = state_15551;
(statearr_15562_15697[(1)] = cljs.core.first.call(null,(state_15551[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15698 = state_15551;
state_15551 = G__15698;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__ = function(state_15551){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____1.call(this,state_15551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__;
})()
;})(__15675,switch__15255__auto__,c__15329__auto___15689,G__15513_15676,G__15513_15677__$1,n__4648__auto___15674,jobs,results,process,async))
})();
var state__15331__auto__ = (function (){var statearr_15563 = f__15330__auto__.call(null);
(statearr_15563[(6)] = c__15329__auto___15689);

return statearr_15563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
});})(__15675,c__15329__auto___15689,G__15513_15676,G__15513_15677__$1,n__4648__auto___15674,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15513_15677__$1)].join('')));

}

var G__15699 = (__15675 + (1));
__15675 = G__15699;
continue;
} else {
}
break;
}

var c__15329__auto___15700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_15585){
var state_val_15586 = (state_15585[(1)]);
if((state_val_15586 === (7))){
var inst_15581 = (state_15585[(2)]);
var state_15585__$1 = state_15585;
var statearr_15587_15701 = state_15585__$1;
(statearr_15587_15701[(2)] = inst_15581);

(statearr_15587_15701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15586 === (1))){
var state_15585__$1 = state_15585;
var statearr_15588_15702 = state_15585__$1;
(statearr_15588_15702[(2)] = null);

(statearr_15588_15702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15586 === (4))){
var inst_15566 = (state_15585[(7)]);
var inst_15566__$1 = (state_15585[(2)]);
var inst_15567 = (inst_15566__$1 == null);
var state_15585__$1 = (function (){var statearr_15589 = state_15585;
(statearr_15589[(7)] = inst_15566__$1);

return statearr_15589;
})();
if(cljs.core.truth_(inst_15567)){
var statearr_15590_15703 = state_15585__$1;
(statearr_15590_15703[(1)] = (5));

} else {
var statearr_15591_15704 = state_15585__$1;
(statearr_15591_15704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15586 === (6))){
var inst_15571 = (state_15585[(8)]);
var inst_15566 = (state_15585[(7)]);
var inst_15571__$1 = cljs.core.async.chan.call(null,(1));
var inst_15572 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15573 = [inst_15566,inst_15571__$1];
var inst_15574 = (new cljs.core.PersistentVector(null,2,(5),inst_15572,inst_15573,null));
var state_15585__$1 = (function (){var statearr_15592 = state_15585;
(statearr_15592[(8)] = inst_15571__$1);

return statearr_15592;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15585__$1,(8),jobs,inst_15574);
} else {
if((state_val_15586 === (3))){
var inst_15583 = (state_15585[(2)]);
var state_15585__$1 = state_15585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15585__$1,inst_15583);
} else {
if((state_val_15586 === (2))){
var state_15585__$1 = state_15585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15585__$1,(4),from);
} else {
if((state_val_15586 === (9))){
var inst_15578 = (state_15585[(2)]);
var state_15585__$1 = (function (){var statearr_15593 = state_15585;
(statearr_15593[(9)] = inst_15578);

return statearr_15593;
})();
var statearr_15594_15705 = state_15585__$1;
(statearr_15594_15705[(2)] = null);

(statearr_15594_15705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15586 === (5))){
var inst_15569 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15585__$1 = state_15585;
var statearr_15595_15706 = state_15585__$1;
(statearr_15595_15706[(2)] = inst_15569);

(statearr_15595_15706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15586 === (8))){
var inst_15571 = (state_15585[(8)]);
var inst_15576 = (state_15585[(2)]);
var state_15585__$1 = (function (){var statearr_15596 = state_15585;
(statearr_15596[(10)] = inst_15576);

return statearr_15596;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15585__$1,(9),results,inst_15571);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____0 = (function (){
var statearr_15597 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15597[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__);

(statearr_15597[(1)] = (1));

return statearr_15597;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____1 = (function (state_15585){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_15585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e15598){var ex__15259__auto__ = e15598;
var statearr_15599_15707 = state_15585;
(statearr_15599_15707[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_15585[(4)]))){
var statearr_15600_15708 = state_15585;
(statearr_15600_15708[(1)] = cljs.core.first.call(null,(state_15585[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15709 = state_15585;
state_15585 = G__15709;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__ = function(state_15585){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____1.call(this,state_15585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_15601 = f__15330__auto__.call(null);
(statearr_15601[(6)] = c__15329__auto___15700);

return statearr_15601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));


var c__15329__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_15639){
var state_val_15640 = (state_15639[(1)]);
if((state_val_15640 === (7))){
var inst_15635 = (state_15639[(2)]);
var state_15639__$1 = state_15639;
var statearr_15641_15710 = state_15639__$1;
(statearr_15641_15710[(2)] = inst_15635);

(statearr_15641_15710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15640 === (20))){
var state_15639__$1 = state_15639;
var statearr_15642_15711 = state_15639__$1;
(statearr_15642_15711[(2)] = null);

(statearr_15642_15711[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15640 === (1))){
var state_15639__$1 = state_15639;
var statearr_15643_15712 = state_15639__$1;
(statearr_15643_15712[(2)] = null);

(statearr_15643_15712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15640 === (4))){
var inst_15604 = (state_15639[(7)]);
var inst_15604__$1 = (state_15639[(2)]);
var inst_15605 = (inst_15604__$1 == null);
var state_15639__$1 = (function (){var statearr_15644 = state_15639;
(statearr_15644[(7)] = inst_15604__$1);

return statearr_15644;
})();
if(cljs.core.truth_(inst_15605)){
var statearr_15645_15713 = state_15639__$1;
(statearr_15645_15713[(1)] = (5));

} else {
var statearr_15646_15714 = state_15639__$1;
(statearr_15646_15714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15640 === (15))){
var inst_15617 = (state_15639[(8)]);
var state_15639__$1 = state_15639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15639__$1,(18),to,inst_15617);
} else {
if((state_val_15640 === (21))){
var inst_15630 = (state_15639[(2)]);
var state_15639__$1 = state_15639;
var statearr_15647_15715 = state_15639__$1;
(statearr_15647_15715[(2)] = inst_15630);

(statearr_15647_15715[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15640 === (13))){
var inst_15632 = (state_15639[(2)]);
var state_15639__$1 = (function (){var statearr_15648 = state_15639;
(statearr_15648[(9)] = inst_15632);

return statearr_15648;
})();
var statearr_15649_15716 = state_15639__$1;
(statearr_15649_15716[(2)] = null);

(statearr_15649_15716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15640 === (6))){
var inst_15604 = (state_15639[(7)]);
var state_15639__$1 = state_15639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15639__$1,(11),inst_15604);
} else {
if((state_val_15640 === (17))){
var inst_15625 = (state_15639[(2)]);
var state_15639__$1 = state_15639;
if(cljs.core.truth_(inst_15625)){
var statearr_15650_15717 = state_15639__$1;
(statearr_15650_15717[(1)] = (19));

} else {
var statearr_15651_15718 = state_15639__$1;
(statearr_15651_15718[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15640 === (3))){
var inst_15637 = (state_15639[(2)]);
var state_15639__$1 = state_15639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15639__$1,inst_15637);
} else {
if((state_val_15640 === (12))){
var inst_15614 = (state_15639[(10)]);
var state_15639__$1 = state_15639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15639__$1,(14),inst_15614);
} else {
if((state_val_15640 === (2))){
var state_15639__$1 = state_15639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15639__$1,(4),results);
} else {
if((state_val_15640 === (19))){
var state_15639__$1 = state_15639;
var statearr_15652_15719 = state_15639__$1;
(statearr_15652_15719[(2)] = null);

(statearr_15652_15719[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15640 === (11))){
var inst_15614 = (state_15639[(2)]);
var state_15639__$1 = (function (){var statearr_15653 = state_15639;
(statearr_15653[(10)] = inst_15614);

return statearr_15653;
})();
var statearr_15654_15720 = state_15639__$1;
(statearr_15654_15720[(2)] = null);

(statearr_15654_15720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15640 === (9))){
var state_15639__$1 = state_15639;
var statearr_15655_15721 = state_15639__$1;
(statearr_15655_15721[(2)] = null);

(statearr_15655_15721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15640 === (5))){
var state_15639__$1 = state_15639;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15656_15722 = state_15639__$1;
(statearr_15656_15722[(1)] = (8));

} else {
var statearr_15657_15723 = state_15639__$1;
(statearr_15657_15723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15640 === (14))){
var inst_15617 = (state_15639[(8)]);
var inst_15617__$1 = (state_15639[(2)]);
var inst_15618 = (inst_15617__$1 == null);
var inst_15619 = cljs.core.not.call(null,inst_15618);
var state_15639__$1 = (function (){var statearr_15658 = state_15639;
(statearr_15658[(8)] = inst_15617__$1);

return statearr_15658;
})();
if(inst_15619){
var statearr_15659_15724 = state_15639__$1;
(statearr_15659_15724[(1)] = (15));

} else {
var statearr_15660_15725 = state_15639__$1;
(statearr_15660_15725[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15640 === (16))){
var state_15639__$1 = state_15639;
var statearr_15661_15726 = state_15639__$1;
(statearr_15661_15726[(2)] = false);

(statearr_15661_15726[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15640 === (10))){
var inst_15611 = (state_15639[(2)]);
var state_15639__$1 = state_15639;
var statearr_15662_15727 = state_15639__$1;
(statearr_15662_15727[(2)] = inst_15611);

(statearr_15662_15727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15640 === (18))){
var inst_15622 = (state_15639[(2)]);
var state_15639__$1 = state_15639;
var statearr_15663_15728 = state_15639__$1;
(statearr_15663_15728[(2)] = inst_15622);

(statearr_15663_15728[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15640 === (8))){
var inst_15608 = cljs.core.async.close_BANG_.call(null,to);
var state_15639__$1 = state_15639;
var statearr_15664_15729 = state_15639__$1;
(statearr_15664_15729[(2)] = inst_15608);

(statearr_15664_15729[(1)] = (10));


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
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____0 = (function (){
var statearr_15665 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15665[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__);

(statearr_15665[(1)] = (1));

return statearr_15665;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____1 = (function (state_15639){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_15639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e15666){var ex__15259__auto__ = e15666;
var statearr_15667_15730 = state_15639;
(statearr_15667_15730[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_15639[(4)]))){
var statearr_15668_15731 = state_15639;
(statearr_15668_15731[(1)] = cljs.core.first.call(null,(state_15639[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15732 = state_15639;
state_15639 = G__15732;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__ = function(state_15639){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____1.call(this,state_15639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15256__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_15669 = f__15330__auto__.call(null);
(statearr_15669[(6)] = c__15329__auto__);

return statearr_15669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));

return c__15329__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15734 = arguments.length;
switch (G__15734) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15737 = arguments.length;
switch (G__15737) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15740 = arguments.length;
switch (G__15740) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15329__auto___15790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_15766){
var state_val_15767 = (state_15766[(1)]);
if((state_val_15767 === (7))){
var inst_15762 = (state_15766[(2)]);
var state_15766__$1 = state_15766;
var statearr_15768_15791 = state_15766__$1;
(statearr_15768_15791[(2)] = inst_15762);

(statearr_15768_15791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (1))){
var state_15766__$1 = state_15766;
var statearr_15769_15792 = state_15766__$1;
(statearr_15769_15792[(2)] = null);

(statearr_15769_15792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (4))){
var inst_15743 = (state_15766[(7)]);
var inst_15743__$1 = (state_15766[(2)]);
var inst_15744 = (inst_15743__$1 == null);
var state_15766__$1 = (function (){var statearr_15770 = state_15766;
(statearr_15770[(7)] = inst_15743__$1);

return statearr_15770;
})();
if(cljs.core.truth_(inst_15744)){
var statearr_15771_15793 = state_15766__$1;
(statearr_15771_15793[(1)] = (5));

} else {
var statearr_15772_15794 = state_15766__$1;
(statearr_15772_15794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (13))){
var state_15766__$1 = state_15766;
var statearr_15773_15795 = state_15766__$1;
(statearr_15773_15795[(2)] = null);

(statearr_15773_15795[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (6))){
var inst_15743 = (state_15766[(7)]);
var inst_15749 = p.call(null,inst_15743);
var state_15766__$1 = state_15766;
if(cljs.core.truth_(inst_15749)){
var statearr_15774_15796 = state_15766__$1;
(statearr_15774_15796[(1)] = (9));

} else {
var statearr_15775_15797 = state_15766__$1;
(statearr_15775_15797[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (3))){
var inst_15764 = (state_15766[(2)]);
var state_15766__$1 = state_15766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15766__$1,inst_15764);
} else {
if((state_val_15767 === (12))){
var state_15766__$1 = state_15766;
var statearr_15776_15798 = state_15766__$1;
(statearr_15776_15798[(2)] = null);

(statearr_15776_15798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (2))){
var state_15766__$1 = state_15766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15766__$1,(4),ch);
} else {
if((state_val_15767 === (11))){
var inst_15743 = (state_15766[(7)]);
var inst_15753 = (state_15766[(2)]);
var state_15766__$1 = state_15766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15766__$1,(8),inst_15753,inst_15743);
} else {
if((state_val_15767 === (9))){
var state_15766__$1 = state_15766;
var statearr_15777_15799 = state_15766__$1;
(statearr_15777_15799[(2)] = tc);

(statearr_15777_15799[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (5))){
var inst_15746 = cljs.core.async.close_BANG_.call(null,tc);
var inst_15747 = cljs.core.async.close_BANG_.call(null,fc);
var state_15766__$1 = (function (){var statearr_15778 = state_15766;
(statearr_15778[(8)] = inst_15746);

return statearr_15778;
})();
var statearr_15779_15800 = state_15766__$1;
(statearr_15779_15800[(2)] = inst_15747);

(statearr_15779_15800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (14))){
var inst_15760 = (state_15766[(2)]);
var state_15766__$1 = state_15766;
var statearr_15780_15801 = state_15766__$1;
(statearr_15780_15801[(2)] = inst_15760);

(statearr_15780_15801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (10))){
var state_15766__$1 = state_15766;
var statearr_15781_15802 = state_15766__$1;
(statearr_15781_15802[(2)] = fc);

(statearr_15781_15802[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (8))){
var inst_15755 = (state_15766[(2)]);
var state_15766__$1 = state_15766;
if(cljs.core.truth_(inst_15755)){
var statearr_15782_15803 = state_15766__$1;
(statearr_15782_15803[(1)] = (12));

} else {
var statearr_15783_15804 = state_15766__$1;
(statearr_15783_15804[(1)] = (13));

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
}
});
return (function() {
var cljs$core$async$state_machine__15256__auto__ = null;
var cljs$core$async$state_machine__15256__auto____0 = (function (){
var statearr_15784 = [null,null,null,null,null,null,null,null,null];
(statearr_15784[(0)] = cljs$core$async$state_machine__15256__auto__);

(statearr_15784[(1)] = (1));

return statearr_15784;
});
var cljs$core$async$state_machine__15256__auto____1 = (function (state_15766){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_15766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e15785){var ex__15259__auto__ = e15785;
var statearr_15786_15805 = state_15766;
(statearr_15786_15805[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_15766[(4)]))){
var statearr_15787_15806 = state_15766;
(statearr_15787_15806[(1)] = cljs.core.first.call(null,(state_15766[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15807 = state_15766;
state_15766 = G__15807;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
cljs$core$async$state_machine__15256__auto__ = function(state_15766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15256__auto____1.call(this,state_15766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15256__auto____0;
cljs$core$async$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15256__auto____1;
return cljs$core$async$state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_15788 = f__15330__auto__.call(null);
(statearr_15788[(6)] = c__15329__auto___15790);

return statearr_15788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15329__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_15829){
var state_val_15830 = (state_15829[(1)]);
if((state_val_15830 === (7))){
var inst_15825 = (state_15829[(2)]);
var state_15829__$1 = state_15829;
var statearr_15831_15850 = state_15829__$1;
(statearr_15831_15850[(2)] = inst_15825);

(statearr_15831_15850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (1))){
var inst_15808 = init;
var inst_15809 = inst_15808;
var state_15829__$1 = (function (){var statearr_15832 = state_15829;
(statearr_15832[(7)] = inst_15809);

return statearr_15832;
})();
var statearr_15833_15851 = state_15829__$1;
(statearr_15833_15851[(2)] = null);

(statearr_15833_15851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (4))){
var inst_15812 = (state_15829[(8)]);
var inst_15812__$1 = (state_15829[(2)]);
var inst_15813 = (inst_15812__$1 == null);
var state_15829__$1 = (function (){var statearr_15834 = state_15829;
(statearr_15834[(8)] = inst_15812__$1);

return statearr_15834;
})();
if(cljs.core.truth_(inst_15813)){
var statearr_15835_15852 = state_15829__$1;
(statearr_15835_15852[(1)] = (5));

} else {
var statearr_15836_15853 = state_15829__$1;
(statearr_15836_15853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (6))){
var inst_15816 = (state_15829[(9)]);
var inst_15809 = (state_15829[(7)]);
var inst_15812 = (state_15829[(8)]);
var inst_15816__$1 = f.call(null,inst_15809,inst_15812);
var inst_15817 = cljs.core.reduced_QMARK_.call(null,inst_15816__$1);
var state_15829__$1 = (function (){var statearr_15837 = state_15829;
(statearr_15837[(9)] = inst_15816__$1);

return statearr_15837;
})();
if(inst_15817){
var statearr_15838_15854 = state_15829__$1;
(statearr_15838_15854[(1)] = (8));

} else {
var statearr_15839_15855 = state_15829__$1;
(statearr_15839_15855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (3))){
var inst_15827 = (state_15829[(2)]);
var state_15829__$1 = state_15829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15829__$1,inst_15827);
} else {
if((state_val_15830 === (2))){
var state_15829__$1 = state_15829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15829__$1,(4),ch);
} else {
if((state_val_15830 === (9))){
var inst_15816 = (state_15829[(9)]);
var inst_15809 = inst_15816;
var state_15829__$1 = (function (){var statearr_15840 = state_15829;
(statearr_15840[(7)] = inst_15809);

return statearr_15840;
})();
var statearr_15841_15856 = state_15829__$1;
(statearr_15841_15856[(2)] = null);

(statearr_15841_15856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (5))){
var inst_15809 = (state_15829[(7)]);
var state_15829__$1 = state_15829;
var statearr_15842_15857 = state_15829__$1;
(statearr_15842_15857[(2)] = inst_15809);

(statearr_15842_15857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (10))){
var inst_15823 = (state_15829[(2)]);
var state_15829__$1 = state_15829;
var statearr_15843_15858 = state_15829__$1;
(statearr_15843_15858[(2)] = inst_15823);

(statearr_15843_15858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (8))){
var inst_15816 = (state_15829[(9)]);
var inst_15819 = cljs.core.deref.call(null,inst_15816);
var state_15829__$1 = state_15829;
var statearr_15844_15859 = state_15829__$1;
(statearr_15844_15859[(2)] = inst_15819);

(statearr_15844_15859[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__15256__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15256__auto____0 = (function (){
var statearr_15845 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15845[(0)] = cljs$core$async$reduce_$_state_machine__15256__auto__);

(statearr_15845[(1)] = (1));

return statearr_15845;
});
var cljs$core$async$reduce_$_state_machine__15256__auto____1 = (function (state_15829){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_15829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e15846){var ex__15259__auto__ = e15846;
var statearr_15847_15860 = state_15829;
(statearr_15847_15860[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_15829[(4)]))){
var statearr_15848_15861 = state_15829;
(statearr_15848_15861[(1)] = cljs.core.first.call(null,(state_15829[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15862 = state_15829;
state_15829 = G__15862;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15256__auto__ = function(state_15829){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15256__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15256__auto____1.call(this,state_15829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15256__auto____0;
cljs$core$async$reduce_$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15256__auto____1;
return cljs$core$async$reduce_$_state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_15849 = f__15330__auto__.call(null);
(statearr_15849[(6)] = c__15329__auto__);

return statearr_15849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));

return c__15329__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__15329__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_15868){
var state_val_15869 = (state_15868[(1)]);
if((state_val_15869 === (1))){
var inst_15863 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_15868__$1 = state_15868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15868__$1,(2),inst_15863);
} else {
if((state_val_15869 === (2))){
var inst_15865 = (state_15868[(2)]);
var inst_15866 = f__$1.call(null,inst_15865);
var state_15868__$1 = state_15868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15868__$1,inst_15866);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15256__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15256__auto____0 = (function (){
var statearr_15870 = [null,null,null,null,null,null,null];
(statearr_15870[(0)] = cljs$core$async$transduce_$_state_machine__15256__auto__);

(statearr_15870[(1)] = (1));

return statearr_15870;
});
var cljs$core$async$transduce_$_state_machine__15256__auto____1 = (function (state_15868){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_15868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e15871){var ex__15259__auto__ = e15871;
var statearr_15872_15875 = state_15868;
(statearr_15872_15875[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_15868[(4)]))){
var statearr_15873_15876 = state_15868;
(statearr_15873_15876[(1)] = cljs.core.first.call(null,(state_15868[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15877 = state_15868;
state_15868 = G__15877;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15256__auto__ = function(state_15868){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15256__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15256__auto____1.call(this,state_15868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15256__auto____0;
cljs$core$async$transduce_$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15256__auto____1;
return cljs$core$async$transduce_$_state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_15874 = f__15330__auto__.call(null);
(statearr_15874[(6)] = c__15329__auto__);

return statearr_15874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));

return c__15329__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15879 = arguments.length;
switch (G__15879) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15329__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_15904){
var state_val_15905 = (state_15904[(1)]);
if((state_val_15905 === (7))){
var inst_15886 = (state_15904[(2)]);
var state_15904__$1 = state_15904;
var statearr_15906_15928 = state_15904__$1;
(statearr_15906_15928[(2)] = inst_15886);

(statearr_15906_15928[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15905 === (1))){
var inst_15880 = cljs.core.seq.call(null,coll);
var inst_15881 = inst_15880;
var state_15904__$1 = (function (){var statearr_15907 = state_15904;
(statearr_15907[(7)] = inst_15881);

return statearr_15907;
})();
var statearr_15908_15929 = state_15904__$1;
(statearr_15908_15929[(2)] = null);

(statearr_15908_15929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15905 === (4))){
var inst_15881 = (state_15904[(7)]);
var inst_15884 = cljs.core.first.call(null,inst_15881);
var state_15904__$1 = state_15904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15904__$1,(7),ch,inst_15884);
} else {
if((state_val_15905 === (13))){
var inst_15898 = (state_15904[(2)]);
var state_15904__$1 = state_15904;
var statearr_15909_15930 = state_15904__$1;
(statearr_15909_15930[(2)] = inst_15898);

(statearr_15909_15930[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15905 === (6))){
var inst_15889 = (state_15904[(2)]);
var state_15904__$1 = state_15904;
if(cljs.core.truth_(inst_15889)){
var statearr_15910_15931 = state_15904__$1;
(statearr_15910_15931[(1)] = (8));

} else {
var statearr_15911_15932 = state_15904__$1;
(statearr_15911_15932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15905 === (3))){
var inst_15902 = (state_15904[(2)]);
var state_15904__$1 = state_15904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15904__$1,inst_15902);
} else {
if((state_val_15905 === (12))){
var state_15904__$1 = state_15904;
var statearr_15912_15933 = state_15904__$1;
(statearr_15912_15933[(2)] = null);

(statearr_15912_15933[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15905 === (2))){
var inst_15881 = (state_15904[(7)]);
var state_15904__$1 = state_15904;
if(cljs.core.truth_(inst_15881)){
var statearr_15913_15934 = state_15904__$1;
(statearr_15913_15934[(1)] = (4));

} else {
var statearr_15914_15935 = state_15904__$1;
(statearr_15914_15935[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15905 === (11))){
var inst_15895 = cljs.core.async.close_BANG_.call(null,ch);
var state_15904__$1 = state_15904;
var statearr_15915_15936 = state_15904__$1;
(statearr_15915_15936[(2)] = inst_15895);

(statearr_15915_15936[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15905 === (9))){
var state_15904__$1 = state_15904;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15916_15937 = state_15904__$1;
(statearr_15916_15937[(1)] = (11));

} else {
var statearr_15917_15938 = state_15904__$1;
(statearr_15917_15938[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15905 === (5))){
var inst_15881 = (state_15904[(7)]);
var state_15904__$1 = state_15904;
var statearr_15918_15939 = state_15904__$1;
(statearr_15918_15939[(2)] = inst_15881);

(statearr_15918_15939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15905 === (10))){
var inst_15900 = (state_15904[(2)]);
var state_15904__$1 = state_15904;
var statearr_15919_15940 = state_15904__$1;
(statearr_15919_15940[(2)] = inst_15900);

(statearr_15919_15940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15905 === (8))){
var inst_15881 = (state_15904[(7)]);
var inst_15891 = cljs.core.next.call(null,inst_15881);
var inst_15881__$1 = inst_15891;
var state_15904__$1 = (function (){var statearr_15920 = state_15904;
(statearr_15920[(7)] = inst_15881__$1);

return statearr_15920;
})();
var statearr_15921_15941 = state_15904__$1;
(statearr_15921_15941[(2)] = null);

(statearr_15921_15941[(1)] = (2));


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
var cljs$core$async$state_machine__15256__auto__ = null;
var cljs$core$async$state_machine__15256__auto____0 = (function (){
var statearr_15922 = [null,null,null,null,null,null,null,null];
(statearr_15922[(0)] = cljs$core$async$state_machine__15256__auto__);

(statearr_15922[(1)] = (1));

return statearr_15922;
});
var cljs$core$async$state_machine__15256__auto____1 = (function (state_15904){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_15904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e15923){var ex__15259__auto__ = e15923;
var statearr_15924_15942 = state_15904;
(statearr_15924_15942[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_15904[(4)]))){
var statearr_15925_15943 = state_15904;
(statearr_15925_15943[(1)] = cljs.core.first.call(null,(state_15904[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15944 = state_15904;
state_15904 = G__15944;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
cljs$core$async$state_machine__15256__auto__ = function(state_15904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15256__auto____1.call(this,state_15904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15256__auto____0;
cljs$core$async$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15256__auto____1;
return cljs$core$async$state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_15926 = f__15330__auto__.call(null);
(statearr_15926[(6)] = c__15329__auto__);

return statearr_15926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));

return c__15329__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15946 = arguments.length;
switch (G__15946) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_15948 = (function (_){
var x__4463__auto__ = (((_ == null))?null:_);
var m__4464__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,_);
} else {
var m__4461__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_15948.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_15949 = (function (m,ch,close_QMARK_){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4461__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_15949.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_15950 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,ch);
} else {
var m__4461__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_15950.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_15951 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m);
} else {
var m__4461__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_15951.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15952 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15952 = (function (ch,cs,meta15953){
this.ch = ch;
this.cs = cs;
this.meta15953 = meta15953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15954,meta15953__$1){
var self__ = this;
var _15954__$1 = this;
return (new cljs.core.async.t_cljs$core$async15952(self__.ch,self__.cs,meta15953__$1));
}));

(cljs.core.async.t_cljs$core$async15952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15954){
var self__ = this;
var _15954__$1 = this;
return self__.meta15953;
}));

(cljs.core.async.t_cljs$core$async15952.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15952.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15952.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15952.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15952.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15952.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15953","meta15953",-630755338,null)], null);
}));

(cljs.core.async.t_cljs$core$async15952.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15952");

(cljs.core.async.t_cljs$core$async15952.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async15952");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15952.
 */
cljs.core.async.__GT_t_cljs$core$async15952 = (function cljs$core$async$mult_$___GT_t_cljs$core$async15952(ch__$1,cs__$1,meta15953){
return (new cljs.core.async.t_cljs$core$async15952(ch__$1,cs__$1,meta15953));
});

}

return (new cljs.core.async.t_cljs$core$async15952(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__15329__auto___16171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_16087){
var state_val_16088 = (state_16087[(1)]);
if((state_val_16088 === (7))){
var inst_16083 = (state_16087[(2)]);
var state_16087__$1 = state_16087;
var statearr_16089_16172 = state_16087__$1;
(statearr_16089_16172[(2)] = inst_16083);

(statearr_16089_16172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (20))){
var inst_15988 = (state_16087[(7)]);
var inst_16000 = cljs.core.first.call(null,inst_15988);
var inst_16001 = cljs.core.nth.call(null,inst_16000,(0),null);
var inst_16002 = cljs.core.nth.call(null,inst_16000,(1),null);
var state_16087__$1 = (function (){var statearr_16090 = state_16087;
(statearr_16090[(8)] = inst_16001);

return statearr_16090;
})();
if(cljs.core.truth_(inst_16002)){
var statearr_16091_16173 = state_16087__$1;
(statearr_16091_16173[(1)] = (22));

} else {
var statearr_16092_16174 = state_16087__$1;
(statearr_16092_16174[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (27))){
var inst_16032 = (state_16087[(9)]);
var inst_15957 = (state_16087[(10)]);
var inst_16030 = (state_16087[(11)]);
var inst_16037 = (state_16087[(12)]);
var inst_16037__$1 = cljs.core._nth.call(null,inst_16030,inst_16032);
var inst_16038 = cljs.core.async.put_BANG_.call(null,inst_16037__$1,inst_15957,done);
var state_16087__$1 = (function (){var statearr_16093 = state_16087;
(statearr_16093[(12)] = inst_16037__$1);

return statearr_16093;
})();
if(cljs.core.truth_(inst_16038)){
var statearr_16094_16175 = state_16087__$1;
(statearr_16094_16175[(1)] = (30));

} else {
var statearr_16095_16176 = state_16087__$1;
(statearr_16095_16176[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (1))){
var state_16087__$1 = state_16087;
var statearr_16096_16177 = state_16087__$1;
(statearr_16096_16177[(2)] = null);

(statearr_16096_16177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (24))){
var inst_15988 = (state_16087[(7)]);
var inst_16007 = (state_16087[(2)]);
var inst_16008 = cljs.core.next.call(null,inst_15988);
var inst_15966 = inst_16008;
var inst_15967 = null;
var inst_15968 = (0);
var inst_15969 = (0);
var state_16087__$1 = (function (){var statearr_16097 = state_16087;
(statearr_16097[(13)] = inst_15969);

(statearr_16097[(14)] = inst_15966);

(statearr_16097[(15)] = inst_16007);

(statearr_16097[(16)] = inst_15968);

(statearr_16097[(17)] = inst_15967);

return statearr_16097;
})();
var statearr_16098_16178 = state_16087__$1;
(statearr_16098_16178[(2)] = null);

(statearr_16098_16178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (39))){
var state_16087__$1 = state_16087;
var statearr_16102_16179 = state_16087__$1;
(statearr_16102_16179[(2)] = null);

(statearr_16102_16179[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (4))){
var inst_15957 = (state_16087[(10)]);
var inst_15957__$1 = (state_16087[(2)]);
var inst_15958 = (inst_15957__$1 == null);
var state_16087__$1 = (function (){var statearr_16103 = state_16087;
(statearr_16103[(10)] = inst_15957__$1);

return statearr_16103;
})();
if(cljs.core.truth_(inst_15958)){
var statearr_16104_16180 = state_16087__$1;
(statearr_16104_16180[(1)] = (5));

} else {
var statearr_16105_16181 = state_16087__$1;
(statearr_16105_16181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (15))){
var inst_15969 = (state_16087[(13)]);
var inst_15966 = (state_16087[(14)]);
var inst_15968 = (state_16087[(16)]);
var inst_15967 = (state_16087[(17)]);
var inst_15984 = (state_16087[(2)]);
var inst_15985 = (inst_15969 + (1));
var tmp16099 = inst_15966;
var tmp16100 = inst_15968;
var tmp16101 = inst_15967;
var inst_15966__$1 = tmp16099;
var inst_15967__$1 = tmp16101;
var inst_15968__$1 = tmp16100;
var inst_15969__$1 = inst_15985;
var state_16087__$1 = (function (){var statearr_16106 = state_16087;
(statearr_16106[(18)] = inst_15984);

(statearr_16106[(13)] = inst_15969__$1);

(statearr_16106[(14)] = inst_15966__$1);

(statearr_16106[(16)] = inst_15968__$1);

(statearr_16106[(17)] = inst_15967__$1);

return statearr_16106;
})();
var statearr_16107_16182 = state_16087__$1;
(statearr_16107_16182[(2)] = null);

(statearr_16107_16182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (21))){
var inst_16011 = (state_16087[(2)]);
var state_16087__$1 = state_16087;
var statearr_16111_16183 = state_16087__$1;
(statearr_16111_16183[(2)] = inst_16011);

(statearr_16111_16183[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (31))){
var inst_16037 = (state_16087[(12)]);
var inst_16041 = cljs.core.async.untap_STAR_.call(null,m,inst_16037);
var state_16087__$1 = state_16087;
var statearr_16112_16184 = state_16087__$1;
(statearr_16112_16184[(2)] = inst_16041);

(statearr_16112_16184[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (32))){
var inst_16029 = (state_16087[(19)]);
var inst_16032 = (state_16087[(9)]);
var inst_16030 = (state_16087[(11)]);
var inst_16031 = (state_16087[(20)]);
var inst_16043 = (state_16087[(2)]);
var inst_16044 = (inst_16032 + (1));
var tmp16108 = inst_16029;
var tmp16109 = inst_16030;
var tmp16110 = inst_16031;
var inst_16029__$1 = tmp16108;
var inst_16030__$1 = tmp16109;
var inst_16031__$1 = tmp16110;
var inst_16032__$1 = inst_16044;
var state_16087__$1 = (function (){var statearr_16113 = state_16087;
(statearr_16113[(19)] = inst_16029__$1);

(statearr_16113[(21)] = inst_16043);

(statearr_16113[(9)] = inst_16032__$1);

(statearr_16113[(11)] = inst_16030__$1);

(statearr_16113[(20)] = inst_16031__$1);

return statearr_16113;
})();
var statearr_16114_16185 = state_16087__$1;
(statearr_16114_16185[(2)] = null);

(statearr_16114_16185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (40))){
var inst_16056 = (state_16087[(22)]);
var inst_16060 = cljs.core.async.untap_STAR_.call(null,m,inst_16056);
var state_16087__$1 = state_16087;
var statearr_16115_16186 = state_16087__$1;
(statearr_16115_16186[(2)] = inst_16060);

(statearr_16115_16186[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (33))){
var inst_16047 = (state_16087[(23)]);
var inst_16049 = cljs.core.chunked_seq_QMARK_.call(null,inst_16047);
var state_16087__$1 = state_16087;
if(inst_16049){
var statearr_16116_16187 = state_16087__$1;
(statearr_16116_16187[(1)] = (36));

} else {
var statearr_16117_16188 = state_16087__$1;
(statearr_16117_16188[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (13))){
var inst_15978 = (state_16087[(24)]);
var inst_15981 = cljs.core.async.close_BANG_.call(null,inst_15978);
var state_16087__$1 = state_16087;
var statearr_16118_16189 = state_16087__$1;
(statearr_16118_16189[(2)] = inst_15981);

(statearr_16118_16189[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (22))){
var inst_16001 = (state_16087[(8)]);
var inst_16004 = cljs.core.async.close_BANG_.call(null,inst_16001);
var state_16087__$1 = state_16087;
var statearr_16119_16190 = state_16087__$1;
(statearr_16119_16190[(2)] = inst_16004);

(statearr_16119_16190[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (36))){
var inst_16047 = (state_16087[(23)]);
var inst_16051 = cljs.core.chunk_first.call(null,inst_16047);
var inst_16052 = cljs.core.chunk_rest.call(null,inst_16047);
var inst_16053 = cljs.core.count.call(null,inst_16051);
var inst_16029 = inst_16052;
var inst_16030 = inst_16051;
var inst_16031 = inst_16053;
var inst_16032 = (0);
var state_16087__$1 = (function (){var statearr_16120 = state_16087;
(statearr_16120[(19)] = inst_16029);

(statearr_16120[(9)] = inst_16032);

(statearr_16120[(11)] = inst_16030);

(statearr_16120[(20)] = inst_16031);

return statearr_16120;
})();
var statearr_16121_16191 = state_16087__$1;
(statearr_16121_16191[(2)] = null);

(statearr_16121_16191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (41))){
var inst_16047 = (state_16087[(23)]);
var inst_16062 = (state_16087[(2)]);
var inst_16063 = cljs.core.next.call(null,inst_16047);
var inst_16029 = inst_16063;
var inst_16030 = null;
var inst_16031 = (0);
var inst_16032 = (0);
var state_16087__$1 = (function (){var statearr_16122 = state_16087;
(statearr_16122[(25)] = inst_16062);

(statearr_16122[(19)] = inst_16029);

(statearr_16122[(9)] = inst_16032);

(statearr_16122[(11)] = inst_16030);

(statearr_16122[(20)] = inst_16031);

return statearr_16122;
})();
var statearr_16123_16192 = state_16087__$1;
(statearr_16123_16192[(2)] = null);

(statearr_16123_16192[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (43))){
var state_16087__$1 = state_16087;
var statearr_16124_16193 = state_16087__$1;
(statearr_16124_16193[(2)] = null);

(statearr_16124_16193[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (29))){
var inst_16071 = (state_16087[(2)]);
var state_16087__$1 = state_16087;
var statearr_16125_16194 = state_16087__$1;
(statearr_16125_16194[(2)] = inst_16071);

(statearr_16125_16194[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (44))){
var inst_16080 = (state_16087[(2)]);
var state_16087__$1 = (function (){var statearr_16126 = state_16087;
(statearr_16126[(26)] = inst_16080);

return statearr_16126;
})();
var statearr_16127_16195 = state_16087__$1;
(statearr_16127_16195[(2)] = null);

(statearr_16127_16195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (6))){
var inst_16021 = (state_16087[(27)]);
var inst_16020 = cljs.core.deref.call(null,cs);
var inst_16021__$1 = cljs.core.keys.call(null,inst_16020);
var inst_16022 = cljs.core.count.call(null,inst_16021__$1);
var inst_16023 = cljs.core.reset_BANG_.call(null,dctr,inst_16022);
var inst_16028 = cljs.core.seq.call(null,inst_16021__$1);
var inst_16029 = inst_16028;
var inst_16030 = null;
var inst_16031 = (0);
var inst_16032 = (0);
var state_16087__$1 = (function (){var statearr_16128 = state_16087;
(statearr_16128[(19)] = inst_16029);

(statearr_16128[(9)] = inst_16032);

(statearr_16128[(28)] = inst_16023);

(statearr_16128[(11)] = inst_16030);

(statearr_16128[(20)] = inst_16031);

(statearr_16128[(27)] = inst_16021__$1);

return statearr_16128;
})();
var statearr_16129_16196 = state_16087__$1;
(statearr_16129_16196[(2)] = null);

(statearr_16129_16196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (28))){
var inst_16029 = (state_16087[(19)]);
var inst_16047 = (state_16087[(23)]);
var inst_16047__$1 = cljs.core.seq.call(null,inst_16029);
var state_16087__$1 = (function (){var statearr_16130 = state_16087;
(statearr_16130[(23)] = inst_16047__$1);

return statearr_16130;
})();
if(inst_16047__$1){
var statearr_16131_16197 = state_16087__$1;
(statearr_16131_16197[(1)] = (33));

} else {
var statearr_16132_16198 = state_16087__$1;
(statearr_16132_16198[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (25))){
var inst_16032 = (state_16087[(9)]);
var inst_16031 = (state_16087[(20)]);
var inst_16034 = (inst_16032 < inst_16031);
var inst_16035 = inst_16034;
var state_16087__$1 = state_16087;
if(cljs.core.truth_(inst_16035)){
var statearr_16133_16199 = state_16087__$1;
(statearr_16133_16199[(1)] = (27));

} else {
var statearr_16134_16200 = state_16087__$1;
(statearr_16134_16200[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (34))){
var state_16087__$1 = state_16087;
var statearr_16135_16201 = state_16087__$1;
(statearr_16135_16201[(2)] = null);

(statearr_16135_16201[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (17))){
var state_16087__$1 = state_16087;
var statearr_16136_16202 = state_16087__$1;
(statearr_16136_16202[(2)] = null);

(statearr_16136_16202[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (3))){
var inst_16085 = (state_16087[(2)]);
var state_16087__$1 = state_16087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16087__$1,inst_16085);
} else {
if((state_val_16088 === (12))){
var inst_16016 = (state_16087[(2)]);
var state_16087__$1 = state_16087;
var statearr_16137_16203 = state_16087__$1;
(statearr_16137_16203[(2)] = inst_16016);

(statearr_16137_16203[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (2))){
var state_16087__$1 = state_16087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16087__$1,(4),ch);
} else {
if((state_val_16088 === (23))){
var state_16087__$1 = state_16087;
var statearr_16138_16204 = state_16087__$1;
(statearr_16138_16204[(2)] = null);

(statearr_16138_16204[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (35))){
var inst_16069 = (state_16087[(2)]);
var state_16087__$1 = state_16087;
var statearr_16139_16205 = state_16087__$1;
(statearr_16139_16205[(2)] = inst_16069);

(statearr_16139_16205[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (19))){
var inst_15988 = (state_16087[(7)]);
var inst_15992 = cljs.core.chunk_first.call(null,inst_15988);
var inst_15993 = cljs.core.chunk_rest.call(null,inst_15988);
var inst_15994 = cljs.core.count.call(null,inst_15992);
var inst_15966 = inst_15993;
var inst_15967 = inst_15992;
var inst_15968 = inst_15994;
var inst_15969 = (0);
var state_16087__$1 = (function (){var statearr_16140 = state_16087;
(statearr_16140[(13)] = inst_15969);

(statearr_16140[(14)] = inst_15966);

(statearr_16140[(16)] = inst_15968);

(statearr_16140[(17)] = inst_15967);

return statearr_16140;
})();
var statearr_16141_16206 = state_16087__$1;
(statearr_16141_16206[(2)] = null);

(statearr_16141_16206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (11))){
var inst_15988 = (state_16087[(7)]);
var inst_15966 = (state_16087[(14)]);
var inst_15988__$1 = cljs.core.seq.call(null,inst_15966);
var state_16087__$1 = (function (){var statearr_16142 = state_16087;
(statearr_16142[(7)] = inst_15988__$1);

return statearr_16142;
})();
if(inst_15988__$1){
var statearr_16143_16207 = state_16087__$1;
(statearr_16143_16207[(1)] = (16));

} else {
var statearr_16144_16208 = state_16087__$1;
(statearr_16144_16208[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (9))){
var inst_16018 = (state_16087[(2)]);
var state_16087__$1 = state_16087;
var statearr_16145_16209 = state_16087__$1;
(statearr_16145_16209[(2)] = inst_16018);

(statearr_16145_16209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (5))){
var inst_15964 = cljs.core.deref.call(null,cs);
var inst_15965 = cljs.core.seq.call(null,inst_15964);
var inst_15966 = inst_15965;
var inst_15967 = null;
var inst_15968 = (0);
var inst_15969 = (0);
var state_16087__$1 = (function (){var statearr_16146 = state_16087;
(statearr_16146[(13)] = inst_15969);

(statearr_16146[(14)] = inst_15966);

(statearr_16146[(16)] = inst_15968);

(statearr_16146[(17)] = inst_15967);

return statearr_16146;
})();
var statearr_16147_16210 = state_16087__$1;
(statearr_16147_16210[(2)] = null);

(statearr_16147_16210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (14))){
var state_16087__$1 = state_16087;
var statearr_16148_16211 = state_16087__$1;
(statearr_16148_16211[(2)] = null);

(statearr_16148_16211[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (45))){
var inst_16077 = (state_16087[(2)]);
var state_16087__$1 = state_16087;
var statearr_16149_16212 = state_16087__$1;
(statearr_16149_16212[(2)] = inst_16077);

(statearr_16149_16212[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (26))){
var inst_16021 = (state_16087[(27)]);
var inst_16073 = (state_16087[(2)]);
var inst_16074 = cljs.core.seq.call(null,inst_16021);
var state_16087__$1 = (function (){var statearr_16150 = state_16087;
(statearr_16150[(29)] = inst_16073);

return statearr_16150;
})();
if(inst_16074){
var statearr_16151_16213 = state_16087__$1;
(statearr_16151_16213[(1)] = (42));

} else {
var statearr_16152_16214 = state_16087__$1;
(statearr_16152_16214[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (16))){
var inst_15988 = (state_16087[(7)]);
var inst_15990 = cljs.core.chunked_seq_QMARK_.call(null,inst_15988);
var state_16087__$1 = state_16087;
if(inst_15990){
var statearr_16153_16215 = state_16087__$1;
(statearr_16153_16215[(1)] = (19));

} else {
var statearr_16154_16216 = state_16087__$1;
(statearr_16154_16216[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (38))){
var inst_16066 = (state_16087[(2)]);
var state_16087__$1 = state_16087;
var statearr_16155_16217 = state_16087__$1;
(statearr_16155_16217[(2)] = inst_16066);

(statearr_16155_16217[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (30))){
var state_16087__$1 = state_16087;
var statearr_16156_16218 = state_16087__$1;
(statearr_16156_16218[(2)] = null);

(statearr_16156_16218[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (10))){
var inst_15969 = (state_16087[(13)]);
var inst_15967 = (state_16087[(17)]);
var inst_15977 = cljs.core._nth.call(null,inst_15967,inst_15969);
var inst_15978 = cljs.core.nth.call(null,inst_15977,(0),null);
var inst_15979 = cljs.core.nth.call(null,inst_15977,(1),null);
var state_16087__$1 = (function (){var statearr_16157 = state_16087;
(statearr_16157[(24)] = inst_15978);

return statearr_16157;
})();
if(cljs.core.truth_(inst_15979)){
var statearr_16158_16219 = state_16087__$1;
(statearr_16158_16219[(1)] = (13));

} else {
var statearr_16159_16220 = state_16087__$1;
(statearr_16159_16220[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (18))){
var inst_16014 = (state_16087[(2)]);
var state_16087__$1 = state_16087;
var statearr_16160_16221 = state_16087__$1;
(statearr_16160_16221[(2)] = inst_16014);

(statearr_16160_16221[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (42))){
var state_16087__$1 = state_16087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16087__$1,(45),dchan);
} else {
if((state_val_16088 === (37))){
var inst_16047 = (state_16087[(23)]);
var inst_15957 = (state_16087[(10)]);
var inst_16056 = (state_16087[(22)]);
var inst_16056__$1 = cljs.core.first.call(null,inst_16047);
var inst_16057 = cljs.core.async.put_BANG_.call(null,inst_16056__$1,inst_15957,done);
var state_16087__$1 = (function (){var statearr_16161 = state_16087;
(statearr_16161[(22)] = inst_16056__$1);

return statearr_16161;
})();
if(cljs.core.truth_(inst_16057)){
var statearr_16162_16222 = state_16087__$1;
(statearr_16162_16222[(1)] = (39));

} else {
var statearr_16163_16223 = state_16087__$1;
(statearr_16163_16223[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (8))){
var inst_15969 = (state_16087[(13)]);
var inst_15968 = (state_16087[(16)]);
var inst_15971 = (inst_15969 < inst_15968);
var inst_15972 = inst_15971;
var state_16087__$1 = state_16087;
if(cljs.core.truth_(inst_15972)){
var statearr_16164_16224 = state_16087__$1;
(statearr_16164_16224[(1)] = (10));

} else {
var statearr_16165_16225 = state_16087__$1;
(statearr_16165_16225[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__15256__auto__ = null;
var cljs$core$async$mult_$_state_machine__15256__auto____0 = (function (){
var statearr_16166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16166[(0)] = cljs$core$async$mult_$_state_machine__15256__auto__);

(statearr_16166[(1)] = (1));

return statearr_16166;
});
var cljs$core$async$mult_$_state_machine__15256__auto____1 = (function (state_16087){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_16087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e16167){var ex__15259__auto__ = e16167;
var statearr_16168_16226 = state_16087;
(statearr_16168_16226[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_16087[(4)]))){
var statearr_16169_16227 = state_16087;
(statearr_16169_16227[(1)] = cljs.core.first.call(null,(state_16087[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16228 = state_16087;
state_16087 = G__16228;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15256__auto__ = function(state_16087){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15256__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15256__auto____1.call(this,state_16087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15256__auto____0;
cljs$core$async$mult_$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15256__auto____1;
return cljs$core$async$mult_$_state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_16170 = f__15330__auto__.call(null);
(statearr_16170[(6)] = c__15329__auto___16171);

return statearr_16170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16230 = arguments.length;
switch (G__16230) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_16232 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,ch);
} else {
var m__4461__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_16232.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_16233 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,ch);
} else {
var m__4461__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_16233.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_16234 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m);
} else {
var m__4461__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_16234.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_16235 = (function (m,state_map){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,state_map);
} else {
var m__4461__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_16235.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_16236 = (function (m,mode){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,mode);
} else {
var m__4461__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_16236.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___16246 = arguments.length;
var i__4772__auto___16247 = (0);
while(true){
if((i__4772__auto___16247 < len__4771__auto___16246)){
args__4777__auto__.push((arguments[i__4772__auto___16247]));

var G__16248 = (i__4772__auto___16247 + (1));
i__4772__auto___16247 = G__16248;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16241){
var map__16242 = p__16241;
var map__16242__$1 = cljs.core.__destructure_map.call(null,map__16242);
var opts = map__16242__$1;
var statearr_16243_16249 = state;
(statearr_16243_16249[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_16244_16250 = state;
(statearr_16244_16250[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_16245_16251 = state;
(statearr_16245_16251[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16237){
var G__16238 = cljs.core.first.call(null,seq16237);
var seq16237__$1 = cljs.core.next.call(null,seq16237);
var G__16239 = cljs.core.first.call(null,seq16237__$1);
var seq16237__$2 = cljs.core.next.call(null,seq16237__$1);
var G__16240 = cljs.core.first.call(null,seq16237__$2);
var seq16237__$3 = cljs.core.next.call(null,seq16237__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16238,G__16239,G__16240,seq16237__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16252 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16252 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16253){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16253 = meta16253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16254,meta16253__$1){
var self__ = this;
var _16254__$1 = this;
return (new cljs.core.async.t_cljs$core$async16252(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16253__$1));
}));

(cljs.core.async.t_cljs$core$async16252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16254){
var self__ = this;
var _16254__$1 = this;
return self__.meta16253;
}));

(cljs.core.async.t_cljs$core$async16252.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16252.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16252.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16252.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async16252.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async16252.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async16252.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async16252.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async16252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16253","meta16253",-2088311204,null)], null);
}));

(cljs.core.async.t_cljs$core$async16252.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16252");

(cljs.core.async.t_cljs$core$async16252.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async16252");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16252.
 */
cljs.core.async.__GT_t_cljs$core$async16252 = (function cljs$core$async$mix_$___GT_t_cljs$core$async16252(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16253){
return (new cljs.core.async.t_cljs$core$async16252(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16253));
});

}

return (new cljs.core.async.t_cljs$core$async16252(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15329__auto___16352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_16316){
var state_val_16317 = (state_16316[(1)]);
if((state_val_16317 === (7))){
var inst_16312 = (state_16316[(2)]);
var state_16316__$1 = state_16316;
var statearr_16318_16353 = state_16316__$1;
(statearr_16318_16353[(2)] = inst_16312);

(statearr_16318_16353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (20))){
var inst_16306 = (state_16316[(2)]);
var state_16316__$1 = state_16316;
var statearr_16319_16354 = state_16316__$1;
(statearr_16319_16354[(2)] = inst_16306);

(statearr_16319_16354[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (1))){
var inst_16258 = calc_state.call(null);
var inst_16259 = cljs.core.__destructure_map.call(null,inst_16258);
var inst_16260 = cljs.core.get.call(null,inst_16259,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16261 = cljs.core.get.call(null,inst_16259,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16262 = cljs.core.get.call(null,inst_16259,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16263 = inst_16258;
var state_16316__$1 = (function (){var statearr_16320 = state_16316;
(statearr_16320[(7)] = inst_16261);

(statearr_16320[(8)] = inst_16262);

(statearr_16320[(9)] = inst_16263);

(statearr_16320[(10)] = inst_16260);

return statearr_16320;
})();
var statearr_16321_16355 = state_16316__$1;
(statearr_16321_16355[(2)] = null);

(statearr_16321_16355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (4))){
var inst_16276 = (state_16316[(11)]);
var inst_16275 = (state_16316[(12)]);
var inst_16274 = (state_16316[(2)]);
var inst_16275__$1 = cljs.core.nth.call(null,inst_16274,(0),null);
var inst_16276__$1 = cljs.core.nth.call(null,inst_16274,(1),null);
var inst_16277 = (inst_16275__$1 == null);
var inst_16278 = cljs.core._EQ_.call(null,inst_16276__$1,change);
var inst_16279 = ((inst_16277) || (inst_16278));
var state_16316__$1 = (function (){var statearr_16322 = state_16316;
(statearr_16322[(11)] = inst_16276__$1);

(statearr_16322[(12)] = inst_16275__$1);

return statearr_16322;
})();
if(cljs.core.truth_(inst_16279)){
var statearr_16323_16356 = state_16316__$1;
(statearr_16323_16356[(1)] = (5));

} else {
var statearr_16324_16357 = state_16316__$1;
(statearr_16324_16357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (15))){
var inst_16266 = (state_16316[(13)]);
var inst_16263 = inst_16266;
var state_16316__$1 = (function (){var statearr_16325 = state_16316;
(statearr_16325[(9)] = inst_16263);

return statearr_16325;
})();
var statearr_16326_16358 = state_16316__$1;
(statearr_16326_16358[(2)] = null);

(statearr_16326_16358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (13))){
var inst_16298 = (state_16316[(2)]);
var state_16316__$1 = state_16316;
if(cljs.core.truth_(inst_16298)){
var statearr_16327_16359 = state_16316__$1;
(statearr_16327_16359[(1)] = (14));

} else {
var statearr_16328_16360 = state_16316__$1;
(statearr_16328_16360[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (6))){
var inst_16267 = (state_16316[(14)]);
var inst_16276 = (state_16316[(11)]);
var inst_16290 = (state_16316[(15)]);
var inst_16290__$1 = inst_16267.call(null,inst_16276);
var state_16316__$1 = (function (){var statearr_16329 = state_16316;
(statearr_16329[(15)] = inst_16290__$1);

return statearr_16329;
})();
if(cljs.core.truth_(inst_16290__$1)){
var statearr_16330_16361 = state_16316__$1;
(statearr_16330_16361[(1)] = (11));

} else {
var statearr_16331_16362 = state_16316__$1;
(statearr_16331_16362[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (17))){
var inst_16301 = (state_16316[(2)]);
var state_16316__$1 = state_16316;
if(cljs.core.truth_(inst_16301)){
var statearr_16332_16363 = state_16316__$1;
(statearr_16332_16363[(1)] = (18));

} else {
var statearr_16333_16364 = state_16316__$1;
(statearr_16333_16364[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (3))){
var inst_16314 = (state_16316[(2)]);
var state_16316__$1 = state_16316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16316__$1,inst_16314);
} else {
if((state_val_16317 === (12))){
var inst_16267 = (state_16316[(14)]);
var inst_16276 = (state_16316[(11)]);
var inst_16268 = (state_16316[(16)]);
var inst_16293 = cljs.core.empty_QMARK_.call(null,inst_16267);
var inst_16294 = inst_16268.call(null,inst_16276);
var inst_16295 = cljs.core.not.call(null,inst_16294);
var inst_16296 = ((inst_16293) && (inst_16295));
var state_16316__$1 = state_16316;
var statearr_16334_16365 = state_16316__$1;
(statearr_16334_16365[(2)] = inst_16296);

(statearr_16334_16365[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (2))){
var inst_16263 = (state_16316[(9)]);
var inst_16266 = (state_16316[(13)]);
var inst_16266__$1 = cljs.core.__destructure_map.call(null,inst_16263);
var inst_16267 = cljs.core.get.call(null,inst_16266__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16268 = cljs.core.get.call(null,inst_16266__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16269 = cljs.core.get.call(null,inst_16266__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16316__$1 = (function (){var statearr_16335 = state_16316;
(statearr_16335[(14)] = inst_16267);

(statearr_16335[(16)] = inst_16268);

(statearr_16335[(13)] = inst_16266__$1);

return statearr_16335;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16316__$1,(4),inst_16269);
} else {
if((state_val_16317 === (19))){
var state_16316__$1 = state_16316;
var statearr_16336_16366 = state_16316__$1;
(statearr_16336_16366[(2)] = null);

(statearr_16336_16366[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (11))){
var inst_16290 = (state_16316[(15)]);
var state_16316__$1 = state_16316;
var statearr_16337_16367 = state_16316__$1;
(statearr_16337_16367[(2)] = inst_16290);

(statearr_16337_16367[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (9))){
var state_16316__$1 = state_16316;
var statearr_16338_16368 = state_16316__$1;
(statearr_16338_16368[(2)] = null);

(statearr_16338_16368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (5))){
var inst_16275 = (state_16316[(12)]);
var inst_16281 = (inst_16275 == null);
var state_16316__$1 = state_16316;
if(cljs.core.truth_(inst_16281)){
var statearr_16339_16369 = state_16316__$1;
(statearr_16339_16369[(1)] = (8));

} else {
var statearr_16340_16370 = state_16316__$1;
(statearr_16340_16370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (14))){
var inst_16275 = (state_16316[(12)]);
var state_16316__$1 = state_16316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16316__$1,(17),out,inst_16275);
} else {
if((state_val_16317 === (16))){
var inst_16310 = (state_16316[(2)]);
var state_16316__$1 = state_16316;
var statearr_16341_16371 = state_16316__$1;
(statearr_16341_16371[(2)] = inst_16310);

(statearr_16341_16371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (10))){
var inst_16286 = (state_16316[(2)]);
var inst_16287 = calc_state.call(null);
var inst_16263 = inst_16287;
var state_16316__$1 = (function (){var statearr_16342 = state_16316;
(statearr_16342[(17)] = inst_16286);

(statearr_16342[(9)] = inst_16263);

return statearr_16342;
})();
var statearr_16343_16372 = state_16316__$1;
(statearr_16343_16372[(2)] = null);

(statearr_16343_16372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (18))){
var inst_16266 = (state_16316[(13)]);
var inst_16263 = inst_16266;
var state_16316__$1 = (function (){var statearr_16344 = state_16316;
(statearr_16344[(9)] = inst_16263);

return statearr_16344;
})();
var statearr_16345_16373 = state_16316__$1;
(statearr_16345_16373[(2)] = null);

(statearr_16345_16373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (8))){
var inst_16276 = (state_16316[(11)]);
var inst_16283 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16276);
var state_16316__$1 = state_16316;
var statearr_16346_16374 = state_16316__$1;
(statearr_16346_16374[(2)] = inst_16283);

(statearr_16346_16374[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__15256__auto__ = null;
var cljs$core$async$mix_$_state_machine__15256__auto____0 = (function (){
var statearr_16347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16347[(0)] = cljs$core$async$mix_$_state_machine__15256__auto__);

(statearr_16347[(1)] = (1));

return statearr_16347;
});
var cljs$core$async$mix_$_state_machine__15256__auto____1 = (function (state_16316){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_16316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e16348){var ex__15259__auto__ = e16348;
var statearr_16349_16375 = state_16316;
(statearr_16349_16375[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_16316[(4)]))){
var statearr_16350_16376 = state_16316;
(statearr_16350_16376[(1)] = cljs.core.first.call(null,(state_16316[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16377 = state_16316;
state_16316 = G__16377;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15256__auto__ = function(state_16316){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15256__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15256__auto____1.call(this,state_16316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15256__auto____0;
cljs$core$async$mix_$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15256__auto____1;
return cljs$core$async$mix_$_state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_16351 = f__15330__auto__.call(null);
(statearr_16351[(6)] = c__15329__auto___16352);

return statearr_16351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_16380 = (function (p,v,ch,close_QMARK_){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4461__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_16380.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_16381 = (function (p,v,ch){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,p,v,ch);
} else {
var m__4461__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_16381.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_16382 = (function() {
var G__16383 = null;
var G__16383__1 = (function (p){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,p);
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__16383__2 = (function (p,v){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,p,v);
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__16383 = function(p,v){
switch(arguments.length){
case 1:
return G__16383__1.call(this,p);
case 2:
return G__16383__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16383.cljs$core$IFn$_invoke$arity$1 = G__16383__1;
G__16383.cljs$core$IFn$_invoke$arity$2 = G__16383__2;
return G__16383;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16379 = arguments.length;
switch (G__16379) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16382.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16382.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16387 = arguments.length;
switch (G__16387) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4160__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__16385_SHARP_){
if(cljs.core.truth_(p1__16385_SHARP_.call(null,topic))){
return p1__16385_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16385_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16388 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16388 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16389){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16389 = meta16389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16390,meta16389__$1){
var self__ = this;
var _16390__$1 = this;
return (new cljs.core.async.t_cljs$core$async16388(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16389__$1));
}));

(cljs.core.async.t_cljs$core$async16388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16390){
var self__ = this;
var _16390__$1 = this;
return self__.meta16389;
}));

(cljs.core.async.t_cljs$core$async16388.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16388.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16388.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16388.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16388.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16388.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16388.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16388.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16389","meta16389",-1586375751,null)], null);
}));

(cljs.core.async.t_cljs$core$async16388.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16388.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16388");

(cljs.core.async.t_cljs$core$async16388.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async16388");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16388.
 */
cljs.core.async.__GT_t_cljs$core$async16388 = (function cljs$core$async$__GT_t_cljs$core$async16388(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16389){
return (new cljs.core.async.t_cljs$core$async16388(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16389));
});

}

return (new cljs.core.async.t_cljs$core$async16388(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15329__auto___16509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_16462){
var state_val_16463 = (state_16462[(1)]);
if((state_val_16463 === (7))){
var inst_16458 = (state_16462[(2)]);
var state_16462__$1 = state_16462;
var statearr_16464_16510 = state_16462__$1;
(statearr_16464_16510[(2)] = inst_16458);

(statearr_16464_16510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (20))){
var state_16462__$1 = state_16462;
var statearr_16465_16511 = state_16462__$1;
(statearr_16465_16511[(2)] = null);

(statearr_16465_16511[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (1))){
var state_16462__$1 = state_16462;
var statearr_16466_16512 = state_16462__$1;
(statearr_16466_16512[(2)] = null);

(statearr_16466_16512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (24))){
var inst_16441 = (state_16462[(7)]);
var inst_16450 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16441);
var state_16462__$1 = state_16462;
var statearr_16467_16513 = state_16462__$1;
(statearr_16467_16513[(2)] = inst_16450);

(statearr_16467_16513[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (4))){
var inst_16393 = (state_16462[(8)]);
var inst_16393__$1 = (state_16462[(2)]);
var inst_16394 = (inst_16393__$1 == null);
var state_16462__$1 = (function (){var statearr_16468 = state_16462;
(statearr_16468[(8)] = inst_16393__$1);

return statearr_16468;
})();
if(cljs.core.truth_(inst_16394)){
var statearr_16469_16514 = state_16462__$1;
(statearr_16469_16514[(1)] = (5));

} else {
var statearr_16470_16515 = state_16462__$1;
(statearr_16470_16515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (15))){
var inst_16435 = (state_16462[(2)]);
var state_16462__$1 = state_16462;
var statearr_16471_16516 = state_16462__$1;
(statearr_16471_16516[(2)] = inst_16435);

(statearr_16471_16516[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (21))){
var inst_16455 = (state_16462[(2)]);
var state_16462__$1 = (function (){var statearr_16472 = state_16462;
(statearr_16472[(9)] = inst_16455);

return statearr_16472;
})();
var statearr_16473_16517 = state_16462__$1;
(statearr_16473_16517[(2)] = null);

(statearr_16473_16517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (13))){
var inst_16417 = (state_16462[(10)]);
var inst_16419 = cljs.core.chunked_seq_QMARK_.call(null,inst_16417);
var state_16462__$1 = state_16462;
if(inst_16419){
var statearr_16474_16518 = state_16462__$1;
(statearr_16474_16518[(1)] = (16));

} else {
var statearr_16475_16519 = state_16462__$1;
(statearr_16475_16519[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (22))){
var inst_16447 = (state_16462[(2)]);
var state_16462__$1 = state_16462;
if(cljs.core.truth_(inst_16447)){
var statearr_16476_16520 = state_16462__$1;
(statearr_16476_16520[(1)] = (23));

} else {
var statearr_16477_16521 = state_16462__$1;
(statearr_16477_16521[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (6))){
var inst_16443 = (state_16462[(11)]);
var inst_16441 = (state_16462[(7)]);
var inst_16393 = (state_16462[(8)]);
var inst_16441__$1 = topic_fn.call(null,inst_16393);
var inst_16442 = cljs.core.deref.call(null,mults);
var inst_16443__$1 = cljs.core.get.call(null,inst_16442,inst_16441__$1);
var state_16462__$1 = (function (){var statearr_16478 = state_16462;
(statearr_16478[(11)] = inst_16443__$1);

(statearr_16478[(7)] = inst_16441__$1);

return statearr_16478;
})();
if(cljs.core.truth_(inst_16443__$1)){
var statearr_16479_16522 = state_16462__$1;
(statearr_16479_16522[(1)] = (19));

} else {
var statearr_16480_16523 = state_16462__$1;
(statearr_16480_16523[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (25))){
var inst_16452 = (state_16462[(2)]);
var state_16462__$1 = state_16462;
var statearr_16481_16524 = state_16462__$1;
(statearr_16481_16524[(2)] = inst_16452);

(statearr_16481_16524[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (17))){
var inst_16417 = (state_16462[(10)]);
var inst_16426 = cljs.core.first.call(null,inst_16417);
var inst_16427 = cljs.core.async.muxch_STAR_.call(null,inst_16426);
var inst_16428 = cljs.core.async.close_BANG_.call(null,inst_16427);
var inst_16429 = cljs.core.next.call(null,inst_16417);
var inst_16403 = inst_16429;
var inst_16404 = null;
var inst_16405 = (0);
var inst_16406 = (0);
var state_16462__$1 = (function (){var statearr_16482 = state_16462;
(statearr_16482[(12)] = inst_16406);

(statearr_16482[(13)] = inst_16428);

(statearr_16482[(14)] = inst_16403);

(statearr_16482[(15)] = inst_16404);

(statearr_16482[(16)] = inst_16405);

return statearr_16482;
})();
var statearr_16483_16525 = state_16462__$1;
(statearr_16483_16525[(2)] = null);

(statearr_16483_16525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (3))){
var inst_16460 = (state_16462[(2)]);
var state_16462__$1 = state_16462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16462__$1,inst_16460);
} else {
if((state_val_16463 === (12))){
var inst_16437 = (state_16462[(2)]);
var state_16462__$1 = state_16462;
var statearr_16484_16526 = state_16462__$1;
(statearr_16484_16526[(2)] = inst_16437);

(statearr_16484_16526[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (2))){
var state_16462__$1 = state_16462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16462__$1,(4),ch);
} else {
if((state_val_16463 === (23))){
var state_16462__$1 = state_16462;
var statearr_16485_16527 = state_16462__$1;
(statearr_16485_16527[(2)] = null);

(statearr_16485_16527[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (19))){
var inst_16443 = (state_16462[(11)]);
var inst_16393 = (state_16462[(8)]);
var inst_16445 = cljs.core.async.muxch_STAR_.call(null,inst_16443);
var state_16462__$1 = state_16462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16462__$1,(22),inst_16445,inst_16393);
} else {
if((state_val_16463 === (11))){
var inst_16403 = (state_16462[(14)]);
var inst_16417 = (state_16462[(10)]);
var inst_16417__$1 = cljs.core.seq.call(null,inst_16403);
var state_16462__$1 = (function (){var statearr_16486 = state_16462;
(statearr_16486[(10)] = inst_16417__$1);

return statearr_16486;
})();
if(inst_16417__$1){
var statearr_16487_16528 = state_16462__$1;
(statearr_16487_16528[(1)] = (13));

} else {
var statearr_16488_16529 = state_16462__$1;
(statearr_16488_16529[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (9))){
var inst_16439 = (state_16462[(2)]);
var state_16462__$1 = state_16462;
var statearr_16489_16530 = state_16462__$1;
(statearr_16489_16530[(2)] = inst_16439);

(statearr_16489_16530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (5))){
var inst_16400 = cljs.core.deref.call(null,mults);
var inst_16401 = cljs.core.vals.call(null,inst_16400);
var inst_16402 = cljs.core.seq.call(null,inst_16401);
var inst_16403 = inst_16402;
var inst_16404 = null;
var inst_16405 = (0);
var inst_16406 = (0);
var state_16462__$1 = (function (){var statearr_16490 = state_16462;
(statearr_16490[(12)] = inst_16406);

(statearr_16490[(14)] = inst_16403);

(statearr_16490[(15)] = inst_16404);

(statearr_16490[(16)] = inst_16405);

return statearr_16490;
})();
var statearr_16491_16531 = state_16462__$1;
(statearr_16491_16531[(2)] = null);

(statearr_16491_16531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (14))){
var state_16462__$1 = state_16462;
var statearr_16495_16532 = state_16462__$1;
(statearr_16495_16532[(2)] = null);

(statearr_16495_16532[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (16))){
var inst_16417 = (state_16462[(10)]);
var inst_16421 = cljs.core.chunk_first.call(null,inst_16417);
var inst_16422 = cljs.core.chunk_rest.call(null,inst_16417);
var inst_16423 = cljs.core.count.call(null,inst_16421);
var inst_16403 = inst_16422;
var inst_16404 = inst_16421;
var inst_16405 = inst_16423;
var inst_16406 = (0);
var state_16462__$1 = (function (){var statearr_16496 = state_16462;
(statearr_16496[(12)] = inst_16406);

(statearr_16496[(14)] = inst_16403);

(statearr_16496[(15)] = inst_16404);

(statearr_16496[(16)] = inst_16405);

return statearr_16496;
})();
var statearr_16497_16533 = state_16462__$1;
(statearr_16497_16533[(2)] = null);

(statearr_16497_16533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (10))){
var inst_16406 = (state_16462[(12)]);
var inst_16403 = (state_16462[(14)]);
var inst_16404 = (state_16462[(15)]);
var inst_16405 = (state_16462[(16)]);
var inst_16411 = cljs.core._nth.call(null,inst_16404,inst_16406);
var inst_16412 = cljs.core.async.muxch_STAR_.call(null,inst_16411);
var inst_16413 = cljs.core.async.close_BANG_.call(null,inst_16412);
var inst_16414 = (inst_16406 + (1));
var tmp16492 = inst_16403;
var tmp16493 = inst_16404;
var tmp16494 = inst_16405;
var inst_16403__$1 = tmp16492;
var inst_16404__$1 = tmp16493;
var inst_16405__$1 = tmp16494;
var inst_16406__$1 = inst_16414;
var state_16462__$1 = (function (){var statearr_16498 = state_16462;
(statearr_16498[(12)] = inst_16406__$1);

(statearr_16498[(14)] = inst_16403__$1);

(statearr_16498[(17)] = inst_16413);

(statearr_16498[(15)] = inst_16404__$1);

(statearr_16498[(16)] = inst_16405__$1);

return statearr_16498;
})();
var statearr_16499_16534 = state_16462__$1;
(statearr_16499_16534[(2)] = null);

(statearr_16499_16534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (18))){
var inst_16432 = (state_16462[(2)]);
var state_16462__$1 = state_16462;
var statearr_16500_16535 = state_16462__$1;
(statearr_16500_16535[(2)] = inst_16432);

(statearr_16500_16535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (8))){
var inst_16406 = (state_16462[(12)]);
var inst_16405 = (state_16462[(16)]);
var inst_16408 = (inst_16406 < inst_16405);
var inst_16409 = inst_16408;
var state_16462__$1 = state_16462;
if(cljs.core.truth_(inst_16409)){
var statearr_16501_16536 = state_16462__$1;
(statearr_16501_16536[(1)] = (10));

} else {
var statearr_16502_16537 = state_16462__$1;
(statearr_16502_16537[(1)] = (11));

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
var cljs$core$async$state_machine__15256__auto__ = null;
var cljs$core$async$state_machine__15256__auto____0 = (function (){
var statearr_16503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16503[(0)] = cljs$core$async$state_machine__15256__auto__);

(statearr_16503[(1)] = (1));

return statearr_16503;
});
var cljs$core$async$state_machine__15256__auto____1 = (function (state_16462){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_16462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e16504){var ex__15259__auto__ = e16504;
var statearr_16505_16538 = state_16462;
(statearr_16505_16538[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_16462[(4)]))){
var statearr_16506_16539 = state_16462;
(statearr_16506_16539[(1)] = cljs.core.first.call(null,(state_16462[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16540 = state_16462;
state_16462 = G__16540;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
cljs$core$async$state_machine__15256__auto__ = function(state_16462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15256__auto____1.call(this,state_16462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15256__auto____0;
cljs$core$async$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15256__auto____1;
return cljs$core$async$state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_16507 = f__15330__auto__.call(null);
(statearr_16507[(6)] = c__15329__auto___16509);

return statearr_16507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16542 = arguments.length;
switch (G__16542) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16545 = arguments.length;
switch (G__16545) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16548 = arguments.length;
switch (G__16548) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__15329__auto___16626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_16591){
var state_val_16592 = (state_16591[(1)]);
if((state_val_16592 === (7))){
var state_16591__$1 = state_16591;
var statearr_16593_16627 = state_16591__$1;
(statearr_16593_16627[(2)] = null);

(statearr_16593_16627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (1))){
var state_16591__$1 = state_16591;
var statearr_16594_16628 = state_16591__$1;
(statearr_16594_16628[(2)] = null);

(statearr_16594_16628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (4))){
var inst_16552 = (state_16591[(7)]);
var inst_16551 = (state_16591[(8)]);
var inst_16554 = (inst_16552 < inst_16551);
var state_16591__$1 = state_16591;
if(cljs.core.truth_(inst_16554)){
var statearr_16595_16629 = state_16591__$1;
(statearr_16595_16629[(1)] = (6));

} else {
var statearr_16596_16630 = state_16591__$1;
(statearr_16596_16630[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (15))){
var inst_16577 = (state_16591[(9)]);
var inst_16582 = cljs.core.apply.call(null,f,inst_16577);
var state_16591__$1 = state_16591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16591__$1,(17),out,inst_16582);
} else {
if((state_val_16592 === (13))){
var inst_16577 = (state_16591[(9)]);
var inst_16577__$1 = (state_16591[(2)]);
var inst_16578 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16577__$1);
var state_16591__$1 = (function (){var statearr_16597 = state_16591;
(statearr_16597[(9)] = inst_16577__$1);

return statearr_16597;
})();
if(cljs.core.truth_(inst_16578)){
var statearr_16598_16631 = state_16591__$1;
(statearr_16598_16631[(1)] = (14));

} else {
var statearr_16599_16632 = state_16591__$1;
(statearr_16599_16632[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (6))){
var state_16591__$1 = state_16591;
var statearr_16600_16633 = state_16591__$1;
(statearr_16600_16633[(2)] = null);

(statearr_16600_16633[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (17))){
var inst_16584 = (state_16591[(2)]);
var state_16591__$1 = (function (){var statearr_16602 = state_16591;
(statearr_16602[(10)] = inst_16584);

return statearr_16602;
})();
var statearr_16603_16634 = state_16591__$1;
(statearr_16603_16634[(2)] = null);

(statearr_16603_16634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (3))){
var inst_16589 = (state_16591[(2)]);
var state_16591__$1 = state_16591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16591__$1,inst_16589);
} else {
if((state_val_16592 === (12))){
var _ = (function (){var statearr_16604 = state_16591;
(statearr_16604[(4)] = cljs.core.rest.call(null,(state_16591[(4)])));

return statearr_16604;
})();
var state_16591__$1 = state_16591;
var ex16601 = (state_16591__$1[(2)]);
var statearr_16605_16635 = state_16591__$1;
(statearr_16605_16635[(5)] = ex16601);


if((ex16601 instanceof Object)){
var statearr_16606_16636 = state_16591__$1;
(statearr_16606_16636[(1)] = (11));

(statearr_16606_16636[(5)] = null);

} else {
throw ex16601;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (2))){
var inst_16550 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16551 = cnt;
var inst_16552 = (0);
var state_16591__$1 = (function (){var statearr_16607 = state_16591;
(statearr_16607[(11)] = inst_16550);

(statearr_16607[(7)] = inst_16552);

(statearr_16607[(8)] = inst_16551);

return statearr_16607;
})();
var statearr_16608_16637 = state_16591__$1;
(statearr_16608_16637[(2)] = null);

(statearr_16608_16637[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (11))){
var inst_16556 = (state_16591[(2)]);
var inst_16557 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16591__$1 = (function (){var statearr_16609 = state_16591;
(statearr_16609[(12)] = inst_16556);

return statearr_16609;
})();
var statearr_16610_16638 = state_16591__$1;
(statearr_16610_16638[(2)] = inst_16557);

(statearr_16610_16638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (9))){
var inst_16552 = (state_16591[(7)]);
var _ = (function (){var statearr_16611 = state_16591;
(statearr_16611[(4)] = cljs.core.cons.call(null,(12),(state_16591[(4)])));

return statearr_16611;
})();
var inst_16563 = chs__$1.call(null,inst_16552);
var inst_16564 = done.call(null,inst_16552);
var inst_16565 = cljs.core.async.take_BANG_.call(null,inst_16563,inst_16564);
var ___$1 = (function (){var statearr_16612 = state_16591;
(statearr_16612[(4)] = cljs.core.rest.call(null,(state_16591[(4)])));

return statearr_16612;
})();
var state_16591__$1 = state_16591;
var statearr_16613_16639 = state_16591__$1;
(statearr_16613_16639[(2)] = inst_16565);

(statearr_16613_16639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (5))){
var inst_16575 = (state_16591[(2)]);
var state_16591__$1 = (function (){var statearr_16614 = state_16591;
(statearr_16614[(13)] = inst_16575);

return statearr_16614;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16591__$1,(13),dchan);
} else {
if((state_val_16592 === (14))){
var inst_16580 = cljs.core.async.close_BANG_.call(null,out);
var state_16591__$1 = state_16591;
var statearr_16615_16640 = state_16591__$1;
(statearr_16615_16640[(2)] = inst_16580);

(statearr_16615_16640[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (16))){
var inst_16587 = (state_16591[(2)]);
var state_16591__$1 = state_16591;
var statearr_16616_16641 = state_16591__$1;
(statearr_16616_16641[(2)] = inst_16587);

(statearr_16616_16641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (10))){
var inst_16552 = (state_16591[(7)]);
var inst_16568 = (state_16591[(2)]);
var inst_16569 = (inst_16552 + (1));
var inst_16552__$1 = inst_16569;
var state_16591__$1 = (function (){var statearr_16617 = state_16591;
(statearr_16617[(7)] = inst_16552__$1);

(statearr_16617[(14)] = inst_16568);

return statearr_16617;
})();
var statearr_16618_16642 = state_16591__$1;
(statearr_16618_16642[(2)] = null);

(statearr_16618_16642[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (8))){
var inst_16573 = (state_16591[(2)]);
var state_16591__$1 = state_16591;
var statearr_16619_16643 = state_16591__$1;
(statearr_16619_16643[(2)] = inst_16573);

(statearr_16619_16643[(1)] = (5));


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
}
});
return (function() {
var cljs$core$async$state_machine__15256__auto__ = null;
var cljs$core$async$state_machine__15256__auto____0 = (function (){
var statearr_16620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16620[(0)] = cljs$core$async$state_machine__15256__auto__);

(statearr_16620[(1)] = (1));

return statearr_16620;
});
var cljs$core$async$state_machine__15256__auto____1 = (function (state_16591){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_16591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e16621){var ex__15259__auto__ = e16621;
var statearr_16622_16644 = state_16591;
(statearr_16622_16644[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_16591[(4)]))){
var statearr_16623_16645 = state_16591;
(statearr_16623_16645[(1)] = cljs.core.first.call(null,(state_16591[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16646 = state_16591;
state_16591 = G__16646;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
cljs$core$async$state_machine__15256__auto__ = function(state_16591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15256__auto____1.call(this,state_16591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15256__auto____0;
cljs$core$async$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15256__auto____1;
return cljs$core$async$state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_16624 = f__15330__auto__.call(null);
(statearr_16624[(6)] = c__15329__auto___16626);

return statearr_16624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16649 = arguments.length;
switch (G__16649) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15329__auto___16704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_16681){
var state_val_16682 = (state_16681[(1)]);
if((state_val_16682 === (7))){
var inst_16660 = (state_16681[(7)]);
var inst_16661 = (state_16681[(8)]);
var inst_16660__$1 = (state_16681[(2)]);
var inst_16661__$1 = cljs.core.nth.call(null,inst_16660__$1,(0),null);
var inst_16662 = cljs.core.nth.call(null,inst_16660__$1,(1),null);
var inst_16663 = (inst_16661__$1 == null);
var state_16681__$1 = (function (){var statearr_16683 = state_16681;
(statearr_16683[(7)] = inst_16660__$1);

(statearr_16683[(8)] = inst_16661__$1);

(statearr_16683[(9)] = inst_16662);

return statearr_16683;
})();
if(cljs.core.truth_(inst_16663)){
var statearr_16684_16705 = state_16681__$1;
(statearr_16684_16705[(1)] = (8));

} else {
var statearr_16685_16706 = state_16681__$1;
(statearr_16685_16706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (1))){
var inst_16650 = cljs.core.vec.call(null,chs);
var inst_16651 = inst_16650;
var state_16681__$1 = (function (){var statearr_16686 = state_16681;
(statearr_16686[(10)] = inst_16651);

return statearr_16686;
})();
var statearr_16687_16707 = state_16681__$1;
(statearr_16687_16707[(2)] = null);

(statearr_16687_16707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (4))){
var inst_16651 = (state_16681[(10)]);
var state_16681__$1 = state_16681;
return cljs.core.async.ioc_alts_BANG_.call(null,state_16681__$1,(7),inst_16651);
} else {
if((state_val_16682 === (6))){
var inst_16677 = (state_16681[(2)]);
var state_16681__$1 = state_16681;
var statearr_16688_16708 = state_16681__$1;
(statearr_16688_16708[(2)] = inst_16677);

(statearr_16688_16708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (3))){
var inst_16679 = (state_16681[(2)]);
var state_16681__$1 = state_16681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16681__$1,inst_16679);
} else {
if((state_val_16682 === (2))){
var inst_16651 = (state_16681[(10)]);
var inst_16653 = cljs.core.count.call(null,inst_16651);
var inst_16654 = (inst_16653 > (0));
var state_16681__$1 = state_16681;
if(cljs.core.truth_(inst_16654)){
var statearr_16690_16709 = state_16681__$1;
(statearr_16690_16709[(1)] = (4));

} else {
var statearr_16691_16710 = state_16681__$1;
(statearr_16691_16710[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (11))){
var inst_16651 = (state_16681[(10)]);
var inst_16670 = (state_16681[(2)]);
var tmp16689 = inst_16651;
var inst_16651__$1 = tmp16689;
var state_16681__$1 = (function (){var statearr_16692 = state_16681;
(statearr_16692[(10)] = inst_16651__$1);

(statearr_16692[(11)] = inst_16670);

return statearr_16692;
})();
var statearr_16693_16711 = state_16681__$1;
(statearr_16693_16711[(2)] = null);

(statearr_16693_16711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (9))){
var inst_16661 = (state_16681[(8)]);
var state_16681__$1 = state_16681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16681__$1,(11),out,inst_16661);
} else {
if((state_val_16682 === (5))){
var inst_16675 = cljs.core.async.close_BANG_.call(null,out);
var state_16681__$1 = state_16681;
var statearr_16694_16712 = state_16681__$1;
(statearr_16694_16712[(2)] = inst_16675);

(statearr_16694_16712[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (10))){
var inst_16673 = (state_16681[(2)]);
var state_16681__$1 = state_16681;
var statearr_16695_16713 = state_16681__$1;
(statearr_16695_16713[(2)] = inst_16673);

(statearr_16695_16713[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (8))){
var inst_16660 = (state_16681[(7)]);
var inst_16661 = (state_16681[(8)]);
var inst_16662 = (state_16681[(9)]);
var inst_16651 = (state_16681[(10)]);
var inst_16665 = (function (){var cs = inst_16651;
var vec__16656 = inst_16660;
var v = inst_16661;
var c = inst_16662;
return (function (p1__16647_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__16647_SHARP_);
});
})();
var inst_16666 = cljs.core.filterv.call(null,inst_16665,inst_16651);
var inst_16651__$1 = inst_16666;
var state_16681__$1 = (function (){var statearr_16696 = state_16681;
(statearr_16696[(10)] = inst_16651__$1);

return statearr_16696;
})();
var statearr_16697_16714 = state_16681__$1;
(statearr_16697_16714[(2)] = null);

(statearr_16697_16714[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__15256__auto__ = null;
var cljs$core$async$state_machine__15256__auto____0 = (function (){
var statearr_16698 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16698[(0)] = cljs$core$async$state_machine__15256__auto__);

(statearr_16698[(1)] = (1));

return statearr_16698;
});
var cljs$core$async$state_machine__15256__auto____1 = (function (state_16681){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_16681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e16699){var ex__15259__auto__ = e16699;
var statearr_16700_16715 = state_16681;
(statearr_16700_16715[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_16681[(4)]))){
var statearr_16701_16716 = state_16681;
(statearr_16701_16716[(1)] = cljs.core.first.call(null,(state_16681[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16717 = state_16681;
state_16681 = G__16717;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
cljs$core$async$state_machine__15256__auto__ = function(state_16681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15256__auto____1.call(this,state_16681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15256__auto____0;
cljs$core$async$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15256__auto____1;
return cljs$core$async$state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_16702 = f__15330__auto__.call(null);
(statearr_16702[(6)] = c__15329__auto___16704);

return statearr_16702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16719 = arguments.length;
switch (G__16719) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15329__auto___16765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_16743){
var state_val_16744 = (state_16743[(1)]);
if((state_val_16744 === (7))){
var inst_16725 = (state_16743[(7)]);
var inst_16725__$1 = (state_16743[(2)]);
var inst_16726 = (inst_16725__$1 == null);
var inst_16727 = cljs.core.not.call(null,inst_16726);
var state_16743__$1 = (function (){var statearr_16745 = state_16743;
(statearr_16745[(7)] = inst_16725__$1);

return statearr_16745;
})();
if(inst_16727){
var statearr_16746_16766 = state_16743__$1;
(statearr_16746_16766[(1)] = (8));

} else {
var statearr_16747_16767 = state_16743__$1;
(statearr_16747_16767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16744 === (1))){
var inst_16720 = (0);
var state_16743__$1 = (function (){var statearr_16748 = state_16743;
(statearr_16748[(8)] = inst_16720);

return statearr_16748;
})();
var statearr_16749_16768 = state_16743__$1;
(statearr_16749_16768[(2)] = null);

(statearr_16749_16768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16744 === (4))){
var state_16743__$1 = state_16743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16743__$1,(7),ch);
} else {
if((state_val_16744 === (6))){
var inst_16738 = (state_16743[(2)]);
var state_16743__$1 = state_16743;
var statearr_16750_16769 = state_16743__$1;
(statearr_16750_16769[(2)] = inst_16738);

(statearr_16750_16769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16744 === (3))){
var inst_16740 = (state_16743[(2)]);
var inst_16741 = cljs.core.async.close_BANG_.call(null,out);
var state_16743__$1 = (function (){var statearr_16751 = state_16743;
(statearr_16751[(9)] = inst_16740);

return statearr_16751;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16743__$1,inst_16741);
} else {
if((state_val_16744 === (2))){
var inst_16720 = (state_16743[(8)]);
var inst_16722 = (inst_16720 < n);
var state_16743__$1 = state_16743;
if(cljs.core.truth_(inst_16722)){
var statearr_16752_16770 = state_16743__$1;
(statearr_16752_16770[(1)] = (4));

} else {
var statearr_16753_16771 = state_16743__$1;
(statearr_16753_16771[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16744 === (11))){
var inst_16720 = (state_16743[(8)]);
var inst_16730 = (state_16743[(2)]);
var inst_16731 = (inst_16720 + (1));
var inst_16720__$1 = inst_16731;
var state_16743__$1 = (function (){var statearr_16754 = state_16743;
(statearr_16754[(10)] = inst_16730);

(statearr_16754[(8)] = inst_16720__$1);

return statearr_16754;
})();
var statearr_16755_16772 = state_16743__$1;
(statearr_16755_16772[(2)] = null);

(statearr_16755_16772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16744 === (9))){
var state_16743__$1 = state_16743;
var statearr_16756_16773 = state_16743__$1;
(statearr_16756_16773[(2)] = null);

(statearr_16756_16773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16744 === (5))){
var state_16743__$1 = state_16743;
var statearr_16757_16774 = state_16743__$1;
(statearr_16757_16774[(2)] = null);

(statearr_16757_16774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16744 === (10))){
var inst_16735 = (state_16743[(2)]);
var state_16743__$1 = state_16743;
var statearr_16758_16775 = state_16743__$1;
(statearr_16758_16775[(2)] = inst_16735);

(statearr_16758_16775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16744 === (8))){
var inst_16725 = (state_16743[(7)]);
var state_16743__$1 = state_16743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16743__$1,(11),out,inst_16725);
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
});
return (function() {
var cljs$core$async$state_machine__15256__auto__ = null;
var cljs$core$async$state_machine__15256__auto____0 = (function (){
var statearr_16759 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16759[(0)] = cljs$core$async$state_machine__15256__auto__);

(statearr_16759[(1)] = (1));

return statearr_16759;
});
var cljs$core$async$state_machine__15256__auto____1 = (function (state_16743){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_16743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e16760){var ex__15259__auto__ = e16760;
var statearr_16761_16776 = state_16743;
(statearr_16761_16776[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_16743[(4)]))){
var statearr_16762_16777 = state_16743;
(statearr_16762_16777[(1)] = cljs.core.first.call(null,(state_16743[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16778 = state_16743;
state_16743 = G__16778;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
cljs$core$async$state_machine__15256__auto__ = function(state_16743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15256__auto____1.call(this,state_16743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15256__auto____0;
cljs$core$async$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15256__auto____1;
return cljs$core$async$state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_16763 = f__15330__auto__.call(null);
(statearr_16763[(6)] = c__15329__auto___16765);

return statearr_16763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16780 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16780 = (function (f,ch,meta16781){
this.f = f;
this.ch = ch;
this.meta16781 = meta16781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16782,meta16781__$1){
var self__ = this;
var _16782__$1 = this;
return (new cljs.core.async.t_cljs$core$async16780(self__.f,self__.ch,meta16781__$1));
}));

(cljs.core.async.t_cljs$core$async16780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16782){
var self__ = this;
var _16782__$1 = this;
return self__.meta16781;
}));

(cljs.core.async.t_cljs$core$async16780.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16780.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async16780.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async16780.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16780.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16783 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16783 = (function (f,ch,meta16781,_,fn1,meta16784){
this.f = f;
this.ch = ch;
this.meta16781 = meta16781;
this._ = _;
this.fn1 = fn1;
this.meta16784 = meta16784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16785,meta16784__$1){
var self__ = this;
var _16785__$1 = this;
return (new cljs.core.async.t_cljs$core$async16783(self__.f,self__.ch,self__.meta16781,self__._,self__.fn1,meta16784__$1));
}));

(cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16785){
var self__ = this;
var _16785__$1 = this;
return self__.meta16784;
}));

(cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__16779_SHARP_){
return f1.call(null,(((p1__16779_SHARP_ == null))?null:self__.f.call(null,p1__16779_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async16783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16781","meta16781",-790353683,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16780","cljs.core.async/t_cljs$core$async16780",1488610618,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16784","meta16784",-658629748,null)], null);
}));

(cljs.core.async.t_cljs$core$async16783.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16783");

(cljs.core.async.t_cljs$core$async16783.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async16783");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16783.
 */
cljs.core.async.__GT_t_cljs$core$async16783 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16783(f__$1,ch__$1,meta16781__$1,___$2,fn1__$1,meta16784){
return (new cljs.core.async.t_cljs$core$async16783(f__$1,ch__$1,meta16781__$1,___$2,fn1__$1,meta16784));
});

}

return (new cljs.core.async.t_cljs$core$async16783(self__.f,self__.ch,self__.meta16781,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4149__auto__ = ret;
if(cljs.core.truth_(and__4149__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4149__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16780.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16780.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16781","meta16781",-790353683,null)], null);
}));

(cljs.core.async.t_cljs$core$async16780.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16780");

(cljs.core.async.t_cljs$core$async16780.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async16780");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16780.
 */
cljs.core.async.__GT_t_cljs$core$async16780 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16780(f__$1,ch__$1,meta16781){
return (new cljs.core.async.t_cljs$core$async16780(f__$1,ch__$1,meta16781));
});

}

return (new cljs.core.async.t_cljs$core$async16780(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16786 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16786 = (function (f,ch,meta16787){
this.f = f;
this.ch = ch;
this.meta16787 = meta16787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16788,meta16787__$1){
var self__ = this;
var _16788__$1 = this;
return (new cljs.core.async.t_cljs$core$async16786(self__.f,self__.ch,meta16787__$1));
}));

(cljs.core.async.t_cljs$core$async16786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16788){
var self__ = this;
var _16788__$1 = this;
return self__.meta16787;
}));

(cljs.core.async.t_cljs$core$async16786.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16786.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async16786.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16786.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16786.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16786.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async16786.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16787","meta16787",767067732,null)], null);
}));

(cljs.core.async.t_cljs$core$async16786.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16786");

(cljs.core.async.t_cljs$core$async16786.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async16786");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16786.
 */
cljs.core.async.__GT_t_cljs$core$async16786 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16786(f__$1,ch__$1,meta16787){
return (new cljs.core.async.t_cljs$core$async16786(f__$1,ch__$1,meta16787));
});

}

return (new cljs.core.async.t_cljs$core$async16786(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16789 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16789 = (function (p,ch,meta16790){
this.p = p;
this.ch = ch;
this.meta16790 = meta16790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16791,meta16790__$1){
var self__ = this;
var _16791__$1 = this;
return (new cljs.core.async.t_cljs$core$async16789(self__.p,self__.ch,meta16790__$1));
}));

(cljs.core.async.t_cljs$core$async16789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16791){
var self__ = this;
var _16791__$1 = this;
return self__.meta16790;
}));

(cljs.core.async.t_cljs$core$async16789.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16789.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async16789.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async16789.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16789.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16789.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16789.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16789.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16790","meta16790",-1426877058,null)], null);
}));

(cljs.core.async.t_cljs$core$async16789.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16789");

(cljs.core.async.t_cljs$core$async16789.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async16789");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16789.
 */
cljs.core.async.__GT_t_cljs$core$async16789 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16789(p__$1,ch__$1,meta16790){
return (new cljs.core.async.t_cljs$core$async16789(p__$1,ch__$1,meta16790));
});

}

return (new cljs.core.async.t_cljs$core$async16789(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16793 = arguments.length;
switch (G__16793) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15329__auto___16834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_16814){
var state_val_16815 = (state_16814[(1)]);
if((state_val_16815 === (7))){
var inst_16810 = (state_16814[(2)]);
var state_16814__$1 = state_16814;
var statearr_16816_16835 = state_16814__$1;
(statearr_16816_16835[(2)] = inst_16810);

(statearr_16816_16835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (1))){
var state_16814__$1 = state_16814;
var statearr_16817_16836 = state_16814__$1;
(statearr_16817_16836[(2)] = null);

(statearr_16817_16836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (4))){
var inst_16796 = (state_16814[(7)]);
var inst_16796__$1 = (state_16814[(2)]);
var inst_16797 = (inst_16796__$1 == null);
var state_16814__$1 = (function (){var statearr_16818 = state_16814;
(statearr_16818[(7)] = inst_16796__$1);

return statearr_16818;
})();
if(cljs.core.truth_(inst_16797)){
var statearr_16819_16837 = state_16814__$1;
(statearr_16819_16837[(1)] = (5));

} else {
var statearr_16820_16838 = state_16814__$1;
(statearr_16820_16838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (6))){
var inst_16796 = (state_16814[(7)]);
var inst_16801 = p.call(null,inst_16796);
var state_16814__$1 = state_16814;
if(cljs.core.truth_(inst_16801)){
var statearr_16821_16839 = state_16814__$1;
(statearr_16821_16839[(1)] = (8));

} else {
var statearr_16822_16840 = state_16814__$1;
(statearr_16822_16840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (3))){
var inst_16812 = (state_16814[(2)]);
var state_16814__$1 = state_16814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16814__$1,inst_16812);
} else {
if((state_val_16815 === (2))){
var state_16814__$1 = state_16814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16814__$1,(4),ch);
} else {
if((state_val_16815 === (11))){
var inst_16804 = (state_16814[(2)]);
var state_16814__$1 = state_16814;
var statearr_16823_16841 = state_16814__$1;
(statearr_16823_16841[(2)] = inst_16804);

(statearr_16823_16841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (9))){
var state_16814__$1 = state_16814;
var statearr_16824_16842 = state_16814__$1;
(statearr_16824_16842[(2)] = null);

(statearr_16824_16842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (5))){
var inst_16799 = cljs.core.async.close_BANG_.call(null,out);
var state_16814__$1 = state_16814;
var statearr_16825_16843 = state_16814__$1;
(statearr_16825_16843[(2)] = inst_16799);

(statearr_16825_16843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (10))){
var inst_16807 = (state_16814[(2)]);
var state_16814__$1 = (function (){var statearr_16826 = state_16814;
(statearr_16826[(8)] = inst_16807);

return statearr_16826;
})();
var statearr_16827_16844 = state_16814__$1;
(statearr_16827_16844[(2)] = null);

(statearr_16827_16844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (8))){
var inst_16796 = (state_16814[(7)]);
var state_16814__$1 = state_16814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16814__$1,(11),out,inst_16796);
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
});
return (function() {
var cljs$core$async$state_machine__15256__auto__ = null;
var cljs$core$async$state_machine__15256__auto____0 = (function (){
var statearr_16828 = [null,null,null,null,null,null,null,null,null];
(statearr_16828[(0)] = cljs$core$async$state_machine__15256__auto__);

(statearr_16828[(1)] = (1));

return statearr_16828;
});
var cljs$core$async$state_machine__15256__auto____1 = (function (state_16814){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_16814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e16829){var ex__15259__auto__ = e16829;
var statearr_16830_16845 = state_16814;
(statearr_16830_16845[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_16814[(4)]))){
var statearr_16831_16846 = state_16814;
(statearr_16831_16846[(1)] = cljs.core.first.call(null,(state_16814[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16847 = state_16814;
state_16814 = G__16847;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
cljs$core$async$state_machine__15256__auto__ = function(state_16814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15256__auto____1.call(this,state_16814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15256__auto____0;
cljs$core$async$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15256__auto____1;
return cljs$core$async$state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_16832 = f__15330__auto__.call(null);
(statearr_16832[(6)] = c__15329__auto___16834);

return statearr_16832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16849 = arguments.length;
switch (G__16849) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15329__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_16912){
var state_val_16913 = (state_16912[(1)]);
if((state_val_16913 === (7))){
var inst_16908 = (state_16912[(2)]);
var state_16912__$1 = state_16912;
var statearr_16914_16953 = state_16912__$1;
(statearr_16914_16953[(2)] = inst_16908);

(statearr_16914_16953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (20))){
var inst_16878 = (state_16912[(7)]);
var inst_16889 = (state_16912[(2)]);
var inst_16890 = cljs.core.next.call(null,inst_16878);
var inst_16864 = inst_16890;
var inst_16865 = null;
var inst_16866 = (0);
var inst_16867 = (0);
var state_16912__$1 = (function (){var statearr_16915 = state_16912;
(statearr_16915[(8)] = inst_16889);

(statearr_16915[(9)] = inst_16865);

(statearr_16915[(10)] = inst_16866);

(statearr_16915[(11)] = inst_16864);

(statearr_16915[(12)] = inst_16867);

return statearr_16915;
})();
var statearr_16916_16954 = state_16912__$1;
(statearr_16916_16954[(2)] = null);

(statearr_16916_16954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (1))){
var state_16912__$1 = state_16912;
var statearr_16917_16955 = state_16912__$1;
(statearr_16917_16955[(2)] = null);

(statearr_16917_16955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (4))){
var inst_16853 = (state_16912[(13)]);
var inst_16853__$1 = (state_16912[(2)]);
var inst_16854 = (inst_16853__$1 == null);
var state_16912__$1 = (function (){var statearr_16918 = state_16912;
(statearr_16918[(13)] = inst_16853__$1);

return statearr_16918;
})();
if(cljs.core.truth_(inst_16854)){
var statearr_16919_16956 = state_16912__$1;
(statearr_16919_16956[(1)] = (5));

} else {
var statearr_16920_16957 = state_16912__$1;
(statearr_16920_16957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (15))){
var state_16912__$1 = state_16912;
var statearr_16924_16958 = state_16912__$1;
(statearr_16924_16958[(2)] = null);

(statearr_16924_16958[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (21))){
var state_16912__$1 = state_16912;
var statearr_16925_16959 = state_16912__$1;
(statearr_16925_16959[(2)] = null);

(statearr_16925_16959[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (13))){
var inst_16865 = (state_16912[(9)]);
var inst_16866 = (state_16912[(10)]);
var inst_16864 = (state_16912[(11)]);
var inst_16867 = (state_16912[(12)]);
var inst_16874 = (state_16912[(2)]);
var inst_16875 = (inst_16867 + (1));
var tmp16921 = inst_16865;
var tmp16922 = inst_16866;
var tmp16923 = inst_16864;
var inst_16864__$1 = tmp16923;
var inst_16865__$1 = tmp16921;
var inst_16866__$1 = tmp16922;
var inst_16867__$1 = inst_16875;
var state_16912__$1 = (function (){var statearr_16926 = state_16912;
(statearr_16926[(9)] = inst_16865__$1);

(statearr_16926[(10)] = inst_16866__$1);

(statearr_16926[(11)] = inst_16864__$1);

(statearr_16926[(14)] = inst_16874);

(statearr_16926[(12)] = inst_16867__$1);

return statearr_16926;
})();
var statearr_16927_16960 = state_16912__$1;
(statearr_16927_16960[(2)] = null);

(statearr_16927_16960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (22))){
var state_16912__$1 = state_16912;
var statearr_16928_16961 = state_16912__$1;
(statearr_16928_16961[(2)] = null);

(statearr_16928_16961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (6))){
var inst_16853 = (state_16912[(13)]);
var inst_16862 = f.call(null,inst_16853);
var inst_16863 = cljs.core.seq.call(null,inst_16862);
var inst_16864 = inst_16863;
var inst_16865 = null;
var inst_16866 = (0);
var inst_16867 = (0);
var state_16912__$1 = (function (){var statearr_16929 = state_16912;
(statearr_16929[(9)] = inst_16865);

(statearr_16929[(10)] = inst_16866);

(statearr_16929[(11)] = inst_16864);

(statearr_16929[(12)] = inst_16867);

return statearr_16929;
})();
var statearr_16930_16962 = state_16912__$1;
(statearr_16930_16962[(2)] = null);

(statearr_16930_16962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (17))){
var inst_16878 = (state_16912[(7)]);
var inst_16882 = cljs.core.chunk_first.call(null,inst_16878);
var inst_16883 = cljs.core.chunk_rest.call(null,inst_16878);
var inst_16884 = cljs.core.count.call(null,inst_16882);
var inst_16864 = inst_16883;
var inst_16865 = inst_16882;
var inst_16866 = inst_16884;
var inst_16867 = (0);
var state_16912__$1 = (function (){var statearr_16931 = state_16912;
(statearr_16931[(9)] = inst_16865);

(statearr_16931[(10)] = inst_16866);

(statearr_16931[(11)] = inst_16864);

(statearr_16931[(12)] = inst_16867);

return statearr_16931;
})();
var statearr_16932_16963 = state_16912__$1;
(statearr_16932_16963[(2)] = null);

(statearr_16932_16963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (3))){
var inst_16910 = (state_16912[(2)]);
var state_16912__$1 = state_16912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16912__$1,inst_16910);
} else {
if((state_val_16913 === (12))){
var inst_16898 = (state_16912[(2)]);
var state_16912__$1 = state_16912;
var statearr_16933_16964 = state_16912__$1;
(statearr_16933_16964[(2)] = inst_16898);

(statearr_16933_16964[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (2))){
var state_16912__$1 = state_16912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16912__$1,(4),in$);
} else {
if((state_val_16913 === (23))){
var inst_16906 = (state_16912[(2)]);
var state_16912__$1 = state_16912;
var statearr_16934_16965 = state_16912__$1;
(statearr_16934_16965[(2)] = inst_16906);

(statearr_16934_16965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (19))){
var inst_16893 = (state_16912[(2)]);
var state_16912__$1 = state_16912;
var statearr_16935_16966 = state_16912__$1;
(statearr_16935_16966[(2)] = inst_16893);

(statearr_16935_16966[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (11))){
var inst_16878 = (state_16912[(7)]);
var inst_16864 = (state_16912[(11)]);
var inst_16878__$1 = cljs.core.seq.call(null,inst_16864);
var state_16912__$1 = (function (){var statearr_16936 = state_16912;
(statearr_16936[(7)] = inst_16878__$1);

return statearr_16936;
})();
if(inst_16878__$1){
var statearr_16937_16967 = state_16912__$1;
(statearr_16937_16967[(1)] = (14));

} else {
var statearr_16938_16968 = state_16912__$1;
(statearr_16938_16968[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (9))){
var inst_16900 = (state_16912[(2)]);
var inst_16901 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_16912__$1 = (function (){var statearr_16939 = state_16912;
(statearr_16939[(15)] = inst_16900);

return statearr_16939;
})();
if(cljs.core.truth_(inst_16901)){
var statearr_16940_16969 = state_16912__$1;
(statearr_16940_16969[(1)] = (21));

} else {
var statearr_16941_16970 = state_16912__$1;
(statearr_16941_16970[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (5))){
var inst_16856 = cljs.core.async.close_BANG_.call(null,out);
var state_16912__$1 = state_16912;
var statearr_16942_16971 = state_16912__$1;
(statearr_16942_16971[(2)] = inst_16856);

(statearr_16942_16971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (14))){
var inst_16878 = (state_16912[(7)]);
var inst_16880 = cljs.core.chunked_seq_QMARK_.call(null,inst_16878);
var state_16912__$1 = state_16912;
if(inst_16880){
var statearr_16943_16972 = state_16912__$1;
(statearr_16943_16972[(1)] = (17));

} else {
var statearr_16944_16973 = state_16912__$1;
(statearr_16944_16973[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (16))){
var inst_16896 = (state_16912[(2)]);
var state_16912__$1 = state_16912;
var statearr_16945_16974 = state_16912__$1;
(statearr_16945_16974[(2)] = inst_16896);

(statearr_16945_16974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16913 === (10))){
var inst_16865 = (state_16912[(9)]);
var inst_16867 = (state_16912[(12)]);
var inst_16872 = cljs.core._nth.call(null,inst_16865,inst_16867);
var state_16912__$1 = state_16912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16912__$1,(13),out,inst_16872);
} else {
if((state_val_16913 === (18))){
var inst_16878 = (state_16912[(7)]);
var inst_16887 = cljs.core.first.call(null,inst_16878);
var state_16912__$1 = state_16912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16912__$1,(20),out,inst_16887);
} else {
if((state_val_16913 === (8))){
var inst_16866 = (state_16912[(10)]);
var inst_16867 = (state_16912[(12)]);
var inst_16869 = (inst_16867 < inst_16866);
var inst_16870 = inst_16869;
var state_16912__$1 = state_16912;
if(cljs.core.truth_(inst_16870)){
var statearr_16946_16975 = state_16912__$1;
(statearr_16946_16975[(1)] = (10));

} else {
var statearr_16947_16976 = state_16912__$1;
(statearr_16947_16976[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__15256__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15256__auto____0 = (function (){
var statearr_16948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16948[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15256__auto__);

(statearr_16948[(1)] = (1));

return statearr_16948;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15256__auto____1 = (function (state_16912){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_16912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e16949){var ex__15259__auto__ = e16949;
var statearr_16950_16977 = state_16912;
(statearr_16950_16977[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_16912[(4)]))){
var statearr_16951_16978 = state_16912;
(statearr_16951_16978[(1)] = cljs.core.first.call(null,(state_16912[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16979 = state_16912;
state_16912 = G__16979;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15256__auto__ = function(state_16912){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15256__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15256__auto____1.call(this,state_16912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15256__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15256__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_16952 = f__15330__auto__.call(null);
(statearr_16952[(6)] = c__15329__auto__);

return statearr_16952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));

return c__15329__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16981 = arguments.length;
switch (G__16981) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16984 = arguments.length;
switch (G__16984) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16987 = arguments.length;
switch (G__16987) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15329__auto___17035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_17011){
var state_val_17012 = (state_17011[(1)]);
if((state_val_17012 === (7))){
var inst_17006 = (state_17011[(2)]);
var state_17011__$1 = state_17011;
var statearr_17013_17036 = state_17011__$1;
(statearr_17013_17036[(2)] = inst_17006);

(statearr_17013_17036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (1))){
var inst_16988 = null;
var state_17011__$1 = (function (){var statearr_17014 = state_17011;
(statearr_17014[(7)] = inst_16988);

return statearr_17014;
})();
var statearr_17015_17037 = state_17011__$1;
(statearr_17015_17037[(2)] = null);

(statearr_17015_17037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (4))){
var inst_16991 = (state_17011[(8)]);
var inst_16991__$1 = (state_17011[(2)]);
var inst_16992 = (inst_16991__$1 == null);
var inst_16993 = cljs.core.not.call(null,inst_16992);
var state_17011__$1 = (function (){var statearr_17016 = state_17011;
(statearr_17016[(8)] = inst_16991__$1);

return statearr_17016;
})();
if(inst_16993){
var statearr_17017_17038 = state_17011__$1;
(statearr_17017_17038[(1)] = (5));

} else {
var statearr_17018_17039 = state_17011__$1;
(statearr_17018_17039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (6))){
var state_17011__$1 = state_17011;
var statearr_17019_17040 = state_17011__$1;
(statearr_17019_17040[(2)] = null);

(statearr_17019_17040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (3))){
var inst_17008 = (state_17011[(2)]);
var inst_17009 = cljs.core.async.close_BANG_.call(null,out);
var state_17011__$1 = (function (){var statearr_17020 = state_17011;
(statearr_17020[(9)] = inst_17008);

return statearr_17020;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17011__$1,inst_17009);
} else {
if((state_val_17012 === (2))){
var state_17011__$1 = state_17011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17011__$1,(4),ch);
} else {
if((state_val_17012 === (11))){
var inst_16991 = (state_17011[(8)]);
var inst_17000 = (state_17011[(2)]);
var inst_16988 = inst_16991;
var state_17011__$1 = (function (){var statearr_17021 = state_17011;
(statearr_17021[(7)] = inst_16988);

(statearr_17021[(10)] = inst_17000);

return statearr_17021;
})();
var statearr_17022_17041 = state_17011__$1;
(statearr_17022_17041[(2)] = null);

(statearr_17022_17041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (9))){
var inst_16991 = (state_17011[(8)]);
var state_17011__$1 = state_17011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17011__$1,(11),out,inst_16991);
} else {
if((state_val_17012 === (5))){
var inst_16988 = (state_17011[(7)]);
var inst_16991 = (state_17011[(8)]);
var inst_16995 = cljs.core._EQ_.call(null,inst_16991,inst_16988);
var state_17011__$1 = state_17011;
if(inst_16995){
var statearr_17024_17042 = state_17011__$1;
(statearr_17024_17042[(1)] = (8));

} else {
var statearr_17025_17043 = state_17011__$1;
(statearr_17025_17043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (10))){
var inst_17003 = (state_17011[(2)]);
var state_17011__$1 = state_17011;
var statearr_17026_17044 = state_17011__$1;
(statearr_17026_17044[(2)] = inst_17003);

(statearr_17026_17044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (8))){
var inst_16988 = (state_17011[(7)]);
var tmp17023 = inst_16988;
var inst_16988__$1 = tmp17023;
var state_17011__$1 = (function (){var statearr_17027 = state_17011;
(statearr_17027[(7)] = inst_16988__$1);

return statearr_17027;
})();
var statearr_17028_17045 = state_17011__$1;
(statearr_17028_17045[(2)] = null);

(statearr_17028_17045[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__15256__auto__ = null;
var cljs$core$async$state_machine__15256__auto____0 = (function (){
var statearr_17029 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17029[(0)] = cljs$core$async$state_machine__15256__auto__);

(statearr_17029[(1)] = (1));

return statearr_17029;
});
var cljs$core$async$state_machine__15256__auto____1 = (function (state_17011){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_17011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e17030){var ex__15259__auto__ = e17030;
var statearr_17031_17046 = state_17011;
(statearr_17031_17046[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_17011[(4)]))){
var statearr_17032_17047 = state_17011;
(statearr_17032_17047[(1)] = cljs.core.first.call(null,(state_17011[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17048 = state_17011;
state_17011 = G__17048;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
cljs$core$async$state_machine__15256__auto__ = function(state_17011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15256__auto____1.call(this,state_17011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15256__auto____0;
cljs$core$async$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15256__auto____1;
return cljs$core$async$state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_17033 = f__15330__auto__.call(null);
(statearr_17033[(6)] = c__15329__auto___17035);

return statearr_17033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17050 = arguments.length;
switch (G__17050) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15329__auto___17117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_17088){
var state_val_17089 = (state_17088[(1)]);
if((state_val_17089 === (7))){
var inst_17084 = (state_17088[(2)]);
var state_17088__$1 = state_17088;
var statearr_17090_17118 = state_17088__$1;
(statearr_17090_17118[(2)] = inst_17084);

(statearr_17090_17118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (1))){
var inst_17051 = (new Array(n));
var inst_17052 = inst_17051;
var inst_17053 = (0);
var state_17088__$1 = (function (){var statearr_17091 = state_17088;
(statearr_17091[(7)] = inst_17052);

(statearr_17091[(8)] = inst_17053);

return statearr_17091;
})();
var statearr_17092_17119 = state_17088__$1;
(statearr_17092_17119[(2)] = null);

(statearr_17092_17119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (4))){
var inst_17056 = (state_17088[(9)]);
var inst_17056__$1 = (state_17088[(2)]);
var inst_17057 = (inst_17056__$1 == null);
var inst_17058 = cljs.core.not.call(null,inst_17057);
var state_17088__$1 = (function (){var statearr_17093 = state_17088;
(statearr_17093[(9)] = inst_17056__$1);

return statearr_17093;
})();
if(inst_17058){
var statearr_17094_17120 = state_17088__$1;
(statearr_17094_17120[(1)] = (5));

} else {
var statearr_17095_17121 = state_17088__$1;
(statearr_17095_17121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (15))){
var inst_17078 = (state_17088[(2)]);
var state_17088__$1 = state_17088;
var statearr_17096_17122 = state_17088__$1;
(statearr_17096_17122[(2)] = inst_17078);

(statearr_17096_17122[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (13))){
var state_17088__$1 = state_17088;
var statearr_17097_17123 = state_17088__$1;
(statearr_17097_17123[(2)] = null);

(statearr_17097_17123[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (6))){
var inst_17053 = (state_17088[(8)]);
var inst_17074 = (inst_17053 > (0));
var state_17088__$1 = state_17088;
if(cljs.core.truth_(inst_17074)){
var statearr_17098_17124 = state_17088__$1;
(statearr_17098_17124[(1)] = (12));

} else {
var statearr_17099_17125 = state_17088__$1;
(statearr_17099_17125[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (3))){
var inst_17086 = (state_17088[(2)]);
var state_17088__$1 = state_17088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17088__$1,inst_17086);
} else {
if((state_val_17089 === (12))){
var inst_17052 = (state_17088[(7)]);
var inst_17076 = cljs.core.vec.call(null,inst_17052);
var state_17088__$1 = state_17088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17088__$1,(15),out,inst_17076);
} else {
if((state_val_17089 === (2))){
var state_17088__$1 = state_17088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17088__$1,(4),ch);
} else {
if((state_val_17089 === (11))){
var inst_17068 = (state_17088[(2)]);
var inst_17069 = (new Array(n));
var inst_17052 = inst_17069;
var inst_17053 = (0);
var state_17088__$1 = (function (){var statearr_17100 = state_17088;
(statearr_17100[(7)] = inst_17052);

(statearr_17100[(8)] = inst_17053);

(statearr_17100[(10)] = inst_17068);

return statearr_17100;
})();
var statearr_17101_17126 = state_17088__$1;
(statearr_17101_17126[(2)] = null);

(statearr_17101_17126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (9))){
var inst_17052 = (state_17088[(7)]);
var inst_17066 = cljs.core.vec.call(null,inst_17052);
var state_17088__$1 = state_17088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17088__$1,(11),out,inst_17066);
} else {
if((state_val_17089 === (5))){
var inst_17052 = (state_17088[(7)]);
var inst_17053 = (state_17088[(8)]);
var inst_17056 = (state_17088[(9)]);
var inst_17061 = (state_17088[(11)]);
var inst_17060 = (inst_17052[inst_17053] = inst_17056);
var inst_17061__$1 = (inst_17053 + (1));
var inst_17062 = (inst_17061__$1 < n);
var state_17088__$1 = (function (){var statearr_17102 = state_17088;
(statearr_17102[(12)] = inst_17060);

(statearr_17102[(11)] = inst_17061__$1);

return statearr_17102;
})();
if(cljs.core.truth_(inst_17062)){
var statearr_17103_17127 = state_17088__$1;
(statearr_17103_17127[(1)] = (8));

} else {
var statearr_17104_17128 = state_17088__$1;
(statearr_17104_17128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (14))){
var inst_17081 = (state_17088[(2)]);
var inst_17082 = cljs.core.async.close_BANG_.call(null,out);
var state_17088__$1 = (function (){var statearr_17106 = state_17088;
(statearr_17106[(13)] = inst_17081);

return statearr_17106;
})();
var statearr_17107_17129 = state_17088__$1;
(statearr_17107_17129[(2)] = inst_17082);

(statearr_17107_17129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (10))){
var inst_17072 = (state_17088[(2)]);
var state_17088__$1 = state_17088;
var statearr_17108_17130 = state_17088__$1;
(statearr_17108_17130[(2)] = inst_17072);

(statearr_17108_17130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (8))){
var inst_17052 = (state_17088[(7)]);
var inst_17061 = (state_17088[(11)]);
var tmp17105 = inst_17052;
var inst_17052__$1 = tmp17105;
var inst_17053 = inst_17061;
var state_17088__$1 = (function (){var statearr_17109 = state_17088;
(statearr_17109[(7)] = inst_17052__$1);

(statearr_17109[(8)] = inst_17053);

return statearr_17109;
})();
var statearr_17110_17131 = state_17088__$1;
(statearr_17110_17131[(2)] = null);

(statearr_17110_17131[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__15256__auto__ = null;
var cljs$core$async$state_machine__15256__auto____0 = (function (){
var statearr_17111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17111[(0)] = cljs$core$async$state_machine__15256__auto__);

(statearr_17111[(1)] = (1));

return statearr_17111;
});
var cljs$core$async$state_machine__15256__auto____1 = (function (state_17088){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_17088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e17112){var ex__15259__auto__ = e17112;
var statearr_17113_17132 = state_17088;
(statearr_17113_17132[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_17088[(4)]))){
var statearr_17114_17133 = state_17088;
(statearr_17114_17133[(1)] = cljs.core.first.call(null,(state_17088[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17134 = state_17088;
state_17088 = G__17134;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
cljs$core$async$state_machine__15256__auto__ = function(state_17088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15256__auto____1.call(this,state_17088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15256__auto____0;
cljs$core$async$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15256__auto____1;
return cljs$core$async$state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_17115 = f__15330__auto__.call(null);
(statearr_17115[(6)] = c__15329__auto___17117);

return statearr_17115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17136 = arguments.length;
switch (G__17136) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15329__auto___17207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15330__auto__ = (function (){var switch__15255__auto__ = (function (state_17178){
var state_val_17179 = (state_17178[(1)]);
if((state_val_17179 === (7))){
var inst_17174 = (state_17178[(2)]);
var state_17178__$1 = state_17178;
var statearr_17180_17208 = state_17178__$1;
(statearr_17180_17208[(2)] = inst_17174);

(statearr_17180_17208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17179 === (1))){
var inst_17137 = [];
var inst_17138 = inst_17137;
var inst_17139 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17178__$1 = (function (){var statearr_17181 = state_17178;
(statearr_17181[(7)] = inst_17139);

(statearr_17181[(8)] = inst_17138);

return statearr_17181;
})();
var statearr_17182_17209 = state_17178__$1;
(statearr_17182_17209[(2)] = null);

(statearr_17182_17209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17179 === (4))){
var inst_17142 = (state_17178[(9)]);
var inst_17142__$1 = (state_17178[(2)]);
var inst_17143 = (inst_17142__$1 == null);
var inst_17144 = cljs.core.not.call(null,inst_17143);
var state_17178__$1 = (function (){var statearr_17183 = state_17178;
(statearr_17183[(9)] = inst_17142__$1);

return statearr_17183;
})();
if(inst_17144){
var statearr_17184_17210 = state_17178__$1;
(statearr_17184_17210[(1)] = (5));

} else {
var statearr_17185_17211 = state_17178__$1;
(statearr_17185_17211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17179 === (15))){
var inst_17168 = (state_17178[(2)]);
var state_17178__$1 = state_17178;
var statearr_17186_17212 = state_17178__$1;
(statearr_17186_17212[(2)] = inst_17168);

(statearr_17186_17212[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17179 === (13))){
var state_17178__$1 = state_17178;
var statearr_17187_17213 = state_17178__$1;
(statearr_17187_17213[(2)] = null);

(statearr_17187_17213[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17179 === (6))){
var inst_17138 = (state_17178[(8)]);
var inst_17163 = inst_17138.length;
var inst_17164 = (inst_17163 > (0));
var state_17178__$1 = state_17178;
if(cljs.core.truth_(inst_17164)){
var statearr_17188_17214 = state_17178__$1;
(statearr_17188_17214[(1)] = (12));

} else {
var statearr_17189_17215 = state_17178__$1;
(statearr_17189_17215[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17179 === (3))){
var inst_17176 = (state_17178[(2)]);
var state_17178__$1 = state_17178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17178__$1,inst_17176);
} else {
if((state_val_17179 === (12))){
var inst_17138 = (state_17178[(8)]);
var inst_17166 = cljs.core.vec.call(null,inst_17138);
var state_17178__$1 = state_17178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17178__$1,(15),out,inst_17166);
} else {
if((state_val_17179 === (2))){
var state_17178__$1 = state_17178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17178__$1,(4),ch);
} else {
if((state_val_17179 === (11))){
var inst_17146 = (state_17178[(10)]);
var inst_17142 = (state_17178[(9)]);
var inst_17156 = (state_17178[(2)]);
var inst_17157 = [];
var inst_17158 = inst_17157.push(inst_17142);
var inst_17138 = inst_17157;
var inst_17139 = inst_17146;
var state_17178__$1 = (function (){var statearr_17190 = state_17178;
(statearr_17190[(11)] = inst_17156);

(statearr_17190[(7)] = inst_17139);

(statearr_17190[(12)] = inst_17158);

(statearr_17190[(8)] = inst_17138);

return statearr_17190;
})();
var statearr_17191_17216 = state_17178__$1;
(statearr_17191_17216[(2)] = null);

(statearr_17191_17216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17179 === (9))){
var inst_17138 = (state_17178[(8)]);
var inst_17154 = cljs.core.vec.call(null,inst_17138);
var state_17178__$1 = state_17178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17178__$1,(11),out,inst_17154);
} else {
if((state_val_17179 === (5))){
var inst_17146 = (state_17178[(10)]);
var inst_17139 = (state_17178[(7)]);
var inst_17142 = (state_17178[(9)]);
var inst_17146__$1 = f.call(null,inst_17142);
var inst_17147 = cljs.core._EQ_.call(null,inst_17146__$1,inst_17139);
var inst_17148 = cljs.core.keyword_identical_QMARK_.call(null,inst_17139,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_17149 = ((inst_17147) || (inst_17148));
var state_17178__$1 = (function (){var statearr_17192 = state_17178;
(statearr_17192[(10)] = inst_17146__$1);

return statearr_17192;
})();
if(cljs.core.truth_(inst_17149)){
var statearr_17193_17217 = state_17178__$1;
(statearr_17193_17217[(1)] = (8));

} else {
var statearr_17194_17218 = state_17178__$1;
(statearr_17194_17218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17179 === (14))){
var inst_17171 = (state_17178[(2)]);
var inst_17172 = cljs.core.async.close_BANG_.call(null,out);
var state_17178__$1 = (function (){var statearr_17196 = state_17178;
(statearr_17196[(13)] = inst_17171);

return statearr_17196;
})();
var statearr_17197_17219 = state_17178__$1;
(statearr_17197_17219[(2)] = inst_17172);

(statearr_17197_17219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17179 === (10))){
var inst_17161 = (state_17178[(2)]);
var state_17178__$1 = state_17178;
var statearr_17198_17220 = state_17178__$1;
(statearr_17198_17220[(2)] = inst_17161);

(statearr_17198_17220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17179 === (8))){
var inst_17146 = (state_17178[(10)]);
var inst_17142 = (state_17178[(9)]);
var inst_17138 = (state_17178[(8)]);
var inst_17151 = inst_17138.push(inst_17142);
var tmp17195 = inst_17138;
var inst_17138__$1 = tmp17195;
var inst_17139 = inst_17146;
var state_17178__$1 = (function (){var statearr_17199 = state_17178;
(statearr_17199[(14)] = inst_17151);

(statearr_17199[(7)] = inst_17139);

(statearr_17199[(8)] = inst_17138__$1);

return statearr_17199;
})();
var statearr_17200_17221 = state_17178__$1;
(statearr_17200_17221[(2)] = null);

(statearr_17200_17221[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__15256__auto__ = null;
var cljs$core$async$state_machine__15256__auto____0 = (function (){
var statearr_17201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17201[(0)] = cljs$core$async$state_machine__15256__auto__);

(statearr_17201[(1)] = (1));

return statearr_17201;
});
var cljs$core$async$state_machine__15256__auto____1 = (function (state_17178){
while(true){
var ret_value__15257__auto__ = (function (){try{while(true){
var result__15258__auto__ = switch__15255__auto__.call(null,state_17178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15258__auto__;
}
break;
}
}catch (e17202){var ex__15259__auto__ = e17202;
var statearr_17203_17222 = state_17178;
(statearr_17203_17222[(2)] = ex__15259__auto__);


if(cljs.core.seq.call(null,(state_17178[(4)]))){
var statearr_17204_17223 = state_17178;
(statearr_17204_17223[(1)] = cljs.core.first.call(null,(state_17178[(4)])));

} else {
throw ex__15259__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15257__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17224 = state_17178;
state_17178 = G__17224;
continue;
} else {
return ret_value__15257__auto__;
}
break;
}
});
cljs$core$async$state_machine__15256__auto__ = function(state_17178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15256__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15256__auto____1.call(this,state_17178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15256__auto____0;
cljs$core$async$state_machine__15256__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15256__auto____1;
return cljs$core$async$state_machine__15256__auto__;
})()
})();
var state__15331__auto__ = (function (){var statearr_17205 = f__15330__auto__.call(null);
(statearr_17205[(6)] = c__15329__auto___17207);

return statearr_17205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15331__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
