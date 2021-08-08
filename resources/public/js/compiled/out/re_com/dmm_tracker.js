// Compiled by ClojureScript 1.10.844 {}
goog.provide('re_com.dmm_tracker');
goog.require('cljs.core');
/**
 * Listen to DOM events during the bubble phase
 *   arg1   Event type, e.g. "click" or "mouseover"
 *   arg2   callback function
 *   return function to call to remove the event listener
 */
re_com.dmm_tracker.document_event_listener = (function re_com$dmm_tracker$document_event_listener(eventType,callback){
var target = document.documentElement;
if(cljs.core.truth_(target.addEventListener)){
target.addEventListener(eventType,callback,false);

return (function (){
return target.removeEventListener(eventType,callback,false);
});
} else {
throw (new Error("Couldn't find addEventListener method in document-event-listener"));
}
});

/**
 * @interface
 */
re_com.dmm_tracker.IMouseMoveTracker = function(){};

var re_com$dmm_tracker$IMouseMoveTracker$captureMouseMoves$dyn_13374 = (function (this$,event){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (re_com.dmm_tracker.captureMouseMoves[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,this$,event);
} else {
var m__4461__auto__ = (re_com.dmm_tracker.captureMouseMoves["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IMouseMoveTracker.captureMouseMoves",this$);
}
}
});
re_com.dmm_tracker.captureMouseMoves = (function re_com$dmm_tracker$captureMouseMoves(this$,event){
if((((!((this$ == null)))) && ((!((this$.re_com$dmm_tracker$IMouseMoveTracker$captureMouseMoves$arity$2 == null)))))){
return this$.re_com$dmm_tracker$IMouseMoveTracker$captureMouseMoves$arity$2(this$,event);
} else {
return re_com$dmm_tracker$IMouseMoveTracker$captureMouseMoves$dyn_13374.call(null,this$,event);
}
});

var re_com$dmm_tracker$IMouseMoveTracker$_releaseMouseMoves$dyn_13375 = (function (this$,event){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (re_com.dmm_tracker._releaseMouseMoves[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,this$,event);
} else {
var m__4461__auto__ = (re_com.dmm_tracker._releaseMouseMoves["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IMouseMoveTracker.-releaseMouseMoves",this$);
}
}
});
re_com.dmm_tracker._releaseMouseMoves = (function re_com$dmm_tracker$_releaseMouseMoves(this$,event){
if((((!((this$ == null)))) && ((!((this$.re_com$dmm_tracker$IMouseMoveTracker$_releaseMouseMoves$arity$2 == null)))))){
return this$.re_com$dmm_tracker$IMouseMoveTracker$_releaseMouseMoves$arity$2(this$,event);
} else {
return re_com$dmm_tracker$IMouseMoveTracker$_releaseMouseMoves$dyn_13375.call(null,this$,event);
}
});

var re_com$dmm_tracker$IMouseMoveTracker$_onMouseMove$dyn_13376 = (function (this$,event){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (re_com.dmm_tracker._onMouseMove[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,this$,event);
} else {
var m__4461__auto__ = (re_com.dmm_tracker._onMouseMove["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IMouseMoveTracker.-onMouseMove",this$);
}
}
});
re_com.dmm_tracker._onMouseMove = (function re_com$dmm_tracker$_onMouseMove(this$,event){
if((((!((this$ == null)))) && ((!((this$.re_com$dmm_tracker$IMouseMoveTracker$_onMouseMove$arity$2 == null)))))){
return this$.re_com$dmm_tracker$IMouseMoveTracker$_onMouseMove$arity$2(this$,event);
} else {
return re_com$dmm_tracker$IMouseMoveTracker$_onMouseMove$dyn_13376.call(null,this$,event);
}
});


/**
* @constructor
 * @implements {re_com.dmm_tracker.IMouseMoveTracker}
*/
re_com.dmm_tracker.MouseMoveTracker = (function (on_change,on_drag_end,eventMoveToken,eventUpToken,isDragging_QMARK_,x,y){
this.on_change = on_change;
this.on_drag_end = on_drag_end;
this.eventMoveToken = eventMoveToken;
this.eventUpToken = eventUpToken;
this.isDragging_QMARK_ = isDragging_QMARK_;
this.x = x;
this.y = y;
});
(re_com.dmm_tracker.MouseMoveTracker.prototype.re_com$dmm_tracker$IMouseMoveTracker$ = cljs.core.PROTOCOL_SENTINEL);

(re_com.dmm_tracker.MouseMoveTracker.prototype.re_com$dmm_tracker$IMouseMoveTracker$captureMouseMoves$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
if(((cljs.core.not.call(null,self__.eventMoveToken)) && (cljs.core.not.call(null,self__.eventUpToken)))){
(self__.eventMoveToken = re_com.dmm_tracker.document_event_listener.call(null,"mousemove",(function (p1__13377_SHARP_){
return re_com.dmm_tracker._onMouseMove.call(null,this$__$1,p1__13377_SHARP_);
})));

(self__.eventUpToken = re_com.dmm_tracker.document_event_listener.call(null,"mouseup",(function (p1__13378_SHARP_){
return re_com.dmm_tracker._releaseMouseMoves.call(null,this$__$1,p1__13378_SHARP_);
})));
} else {
}

if(cljs.core.truth_(self__.isDragging_QMARK_)){
return null;
} else {
(self__.isDragging_QMARK_ = true);

(self__.x = event.clientX);

return (self__.y = event.clientY);
}
}));

(re_com.dmm_tracker.MouseMoveTracker.prototype.re_com$dmm_tracker$IMouseMoveTracker$_releaseMouseMoves$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.eventMoveToken)){
self__.eventMoveToken.call(null);

(self__.eventMoveToken = null);
} else {
}

if(cljs.core.truth_(self__.eventUpToken)){
self__.eventUpToken.call(null);

(self__.eventUpToken = null);
} else {
}

if(cljs.core.truth_(self__.isDragging_QMARK_)){
(self__.isDragging_QMARK_ = false);

(self__.x = null);

(self__.y = null);

return self__.on_drag_end.call(null,event.ctrlKey,event.shiftKey,event);
} else {
return null;
}
}));

(re_com.dmm_tracker.MouseMoveTracker.prototype.re_com$dmm_tracker$IMouseMoveTracker$_onMouseMove$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
var curr_x = event.clientX;
var curr_y = event.clientY;
var delta_x = (curr_x - self__.x);
var delta_y = (curr_y - self__.y);
self__.on_change.call(null,delta_x,delta_y,curr_x,curr_y,event.ctrlKey,event.shiftKey,event);

(self__.x = curr_x);

(self__.y = curr_y);

return event.preventDefault();
}));

(re_com.dmm_tracker.MouseMoveTracker.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-change","on-change",908485378,null),new cljs.core.Symbol(null,"on-drag-end","on-drag-end",-2134163098,null),cljs.core.with_meta(new cljs.core.Symbol(null,"eventMoveToken","eventMoveToken",600656310,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"eventUpToken","eventUpToken",-1044363884,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"isDragging?","isDragging?",-691405813,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(re_com.dmm_tracker.MouseMoveTracker.cljs$lang$type = true);

(re_com.dmm_tracker.MouseMoveTracker.cljs$lang$ctorStr = "re-com.dmm-tracker/MouseMoveTracker");

(re_com.dmm_tracker.MouseMoveTracker.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"re-com.dmm-tracker/MouseMoveTracker");
}));

/**
 * Positional factory function for re-com.dmm-tracker/MouseMoveTracker.
 */
re_com.dmm_tracker.__GT_MouseMoveTracker = (function re_com$dmm_tracker$__GT_MouseMoveTracker(on_change,on_drag_end,eventMoveToken,eventUpToken,isDragging_QMARK_,x,y){
return (new re_com.dmm_tracker.MouseMoveTracker(on_change,on_drag_end,eventMoveToken,eventUpToken,isDragging_QMARK_,x,y));
});

re_com.dmm_tracker.make_dmm_tracker = (function re_com$dmm_tracker$make_dmm_tracker(on_change,on_drag_end){
return re_com.dmm_tracker.__GT_MouseMoveTracker.call(null,on_change,on_drag_end,null,null,false,null,null);
});

//# sourceMappingURL=dmm_tracker.js.map
