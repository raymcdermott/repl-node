// Compiled by ClojureScript 1.10.844 {}
goog.provide('re_com.debug');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.impl.component');
goog.require('re_com.config');
/**
 * Returns the interesting part of component-name
 */
re_com.debug.short_component_name = (function re_com$debug$short_component_name(component_name){
return clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.last.call(null,clojure.string.split.call(null,component_name,/\./)),/_render/,""),/_/,"-");
});
/**
 * Return a version of args which is stripped of uninteresting values, suitable for logging.
 */
re_com.debug.loggable_args = (function re_com$debug$loggable_args(args){
if(cljs.core.map_QMARK_.call(null,args)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.second),cljs.core.dissoc.call(null,args,new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.Keyword(null,"debug-as","debug-as",283322354))));
} else {
return args;
}
});
re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__12496){
var map__12497 = p__12496;
var map__12497__$1 = cljs.core.__destructure_map.call(null,map__12497);
var args = map__12497__$1;
var src = cljs.core.get.call(null,map__12497__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var debug_as = cljs.core.get.call(null,map__12497__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
if((!(re_com.config.debug_QMARK_))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var rc_component = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return re_com.debug.short_component_name.call(null,reagent.impl.component.component_name.call(null,reagent.core.current_component.call(null)));
}
})();
var rc_args = re_com.debug.loggable_args.call(null,(function (){var or__4160__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return args;
}
})());
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
goog.object.set(el,"__rc-args",rc_args);
} else {
}

var temp__5753__auto__ = cljs.core.get_in.call(null,args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"ref","ref",1289896967)], null));
if(cljs.core.truth_(temp__5753__auto__)){
var user_ref_fn = temp__5753__auto__;
if(cljs.core.fn_QMARK_.call(null,user_ref_fn)){
return user_ref_fn.call(null,el);
} else {
return null;
}
} else {
return null;
}
});
var map__12498 = src;
var map__12498__$1 = cljs.core.__destructure_map.call(null,map__12498);
var file = cljs.core.get.call(null,map__12498__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__12498__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__12499 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn,new cljs.core.Keyword(null,"data-rc","data-rc",1949262543),rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.call(null,G__12499,new cljs.core.Keyword(null,"data-rc-src","data-rc-src",-344701880),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__12499;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__12501 = arguments.length;
switch (G__12501) {
case 1:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1 = (function (el){
return re_com.debug.component_stack.call(null,cljs.core.PersistentVector.EMPTY,el);
}));

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2 = (function (stack,el){
if(cljs.core.not.call(null,el)){
return stack;
} else {
var component = el.dataset.rc;
var parent = el.parentElement;
return re_com.debug.component_stack.call(null,((cljs.core._EQ_.call(null,"stack-spy",component))?stack:cljs.core.conj.call(null,stack,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"src","src",-1651076051),el.dataset.rcSrc,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"args","args",1315556576),goog.object.get(el,"__rc-args")], null))),parent);
}
}));

(re_com.debug.component_stack.cljs$lang$maxFixedArity = 2);

re_com.debug.validate_args_problems_style = (function re_com$debug$validate_args_problems_style(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"32px",new cljs.core.Keyword(null,"min-height","min-height",398480837),"32px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.4em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#FF4136"], null);
});
re_com.debug.h1_style = "background: #FF4136; color: white; font-size: 1.4em; padding: 3px";
re_com.debug.h2_style = "background: #0074D9; color: white; padding: 0.25em";
re_com.debug.code_style = "font-family: monospace; font-weight: bold; background: #eee; color: #333; padding: 3px";
re_com.debug.error_style = "font-weight: bold";
re_com.debug.index_style = "font-weight: bold; font-size: 1.1em";
re_com.debug.collision_icon = "\uD83D\uDCA5";
re_com.debug.gear_icon = "\u2699\uFE0F";
re_com.debug.blue_book_icon = "\uD83D\uDCD8";
re_com.debug.confused_icon = "\uD83D\uDE15";
re_com.debug.globe_icon = "\uD83C\uDF10";
re_com.debug.log_component_stack = (function re_com$debug$log_component_stack(stack){
console.groupCollapsed("\u2022 %c Component stack (click me)",re_com.debug.h2_style);

var seq__12505_12525 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,(function (p1__12504_SHARP_,p2__12503_SHARP_){
return cljs.core.assoc.call(null,p2__12503_SHARP_,new cljs.core.Keyword(null,"i","i",-1386841315),(p1__12504_SHARP_ + (1)));
}),stack));
var chunk__12506_12526 = null;
var count__12507_12527 = (0);
var i__12508_12528 = (0);
while(true){
if((i__12508_12528 < count__12507_12527)){
var map__12517_12529 = cljs.core._nth.call(null,chunk__12506_12526,i__12508_12528);
var map__12517_12530__$1 = cljs.core.__destructure_map.call(null,map__12517_12529);
var i_12531 = cljs.core.get.call(null,map__12517_12530__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_12532 = cljs.core.get.call(null,map__12517_12530__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_12533 = cljs.core.get.call(null,map__12517_12530__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_12534 = cljs.core.get.call(null,map__12517_12530__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_12535 = cljs.core.get.call(null,map__12517_12530__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_12533)){
if(cljs.core.truth_(src_12534)){
var vec__12518_12536 = clojure.string.split.call(null,src_12534,/:/);
var file_12537 = cljs.core.nth.call(null,vec__12518_12536,(0),null);
var line_12538 = cljs.core.nth.call(null,vec__12518_12536,(1),null);
if(cljs.core.truth_(args_12535)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_12531),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_12533)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_12537),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_12538),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_12535,el_12532);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_12531),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_12533)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_12537),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_12538),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_12532);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_12531),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_12533)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_12535,el_12532);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_12531),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_12532);
}


var G__12539 = seq__12505_12525;
var G__12540 = chunk__12506_12526;
var G__12541 = count__12507_12527;
var G__12542 = (i__12508_12528 + (1));
seq__12505_12525 = G__12539;
chunk__12506_12526 = G__12540;
count__12507_12527 = G__12541;
i__12508_12528 = G__12542;
continue;
} else {
var temp__5753__auto___12543 = cljs.core.seq.call(null,seq__12505_12525);
if(temp__5753__auto___12543){
var seq__12505_12544__$1 = temp__5753__auto___12543;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12505_12544__$1)){
var c__4591__auto___12545 = cljs.core.chunk_first.call(null,seq__12505_12544__$1);
var G__12546 = cljs.core.chunk_rest.call(null,seq__12505_12544__$1);
var G__12547 = c__4591__auto___12545;
var G__12548 = cljs.core.count.call(null,c__4591__auto___12545);
var G__12549 = (0);
seq__12505_12525 = G__12546;
chunk__12506_12526 = G__12547;
count__12507_12527 = G__12548;
i__12508_12528 = G__12549;
continue;
} else {
var map__12521_12550 = cljs.core.first.call(null,seq__12505_12544__$1);
var map__12521_12551__$1 = cljs.core.__destructure_map.call(null,map__12521_12550);
var i_12552 = cljs.core.get.call(null,map__12521_12551__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_12553 = cljs.core.get.call(null,map__12521_12551__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_12554 = cljs.core.get.call(null,map__12521_12551__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_12555 = cljs.core.get.call(null,map__12521_12551__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_12556 = cljs.core.get.call(null,map__12521_12551__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_12554)){
if(cljs.core.truth_(src_12555)){
var vec__12522_12557 = clojure.string.split.call(null,src_12555,/:/);
var file_12558 = cljs.core.nth.call(null,vec__12522_12557,(0),null);
var line_12559 = cljs.core.nth.call(null,vec__12522_12557,(1),null);
if(cljs.core.truth_(args_12556)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_12552),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_12554)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_12558),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_12559),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_12556,el_12553);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_12552),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_12554)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_12558),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_12559),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_12553);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_12552),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_12554)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_12556,el_12553);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_12552),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_12553);
}


var G__12560 = cljs.core.next.call(null,seq__12505_12544__$1);
var G__12561 = null;
var G__12562 = (0);
var G__12563 = (0);
seq__12505_12525 = G__12560;
chunk__12506_12526 = G__12561;
count__12507_12527 = G__12562;
i__12508_12528 = G__12563;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
re_com.debug.log_validate_args_error_problems = (function re_com$debug$log_validate_args_error_problems(problems){
var seq__12564 = cljs.core.seq.call(null,problems);
var chunk__12565 = null;
var count__12566 = (0);
var i__12567 = (0);
while(true){
if((i__12567 < count__12566)){
var map__12572 = cljs.core._nth.call(null,chunk__12565,i__12567);
var map__12572__$1 = cljs.core.__destructure_map.call(null,map__12572);
var problem = cljs.core.get.call(null,map__12572__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.call(null,map__12572__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.call(null,map__12572__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__12572__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.call(null,map__12572__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__12573_12576 = problem;
var G__12573_12577__$1 = (((G__12573_12576 instanceof cljs.core.Keyword))?G__12573_12576.fqn:null);
switch (G__12573_12577__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__12579 = seq__12564;
var G__12580 = chunk__12565;
var G__12581 = count__12566;
var G__12582 = (i__12567 + (1));
seq__12564 = G__12579;
chunk__12565 = G__12580;
count__12566 = G__12581;
i__12567 = G__12582;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__12564);
if(temp__5753__auto__){
var seq__12564__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12564__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__12564__$1);
var G__12583 = cljs.core.chunk_rest.call(null,seq__12564__$1);
var G__12584 = c__4591__auto__;
var G__12585 = cljs.core.count.call(null,c__4591__auto__);
var G__12586 = (0);
seq__12564 = G__12583;
chunk__12565 = G__12584;
count__12566 = G__12585;
i__12567 = G__12586;
continue;
} else {
var map__12574 = cljs.core.first.call(null,seq__12564__$1);
var map__12574__$1 = cljs.core.__destructure_map.call(null,map__12574);
var problem = cljs.core.get.call(null,map__12574__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.call(null,map__12574__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.call(null,map__12574__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__12574__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.call(null,map__12574__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__12575_12587 = problem;
var G__12575_12588__$1 = (((G__12575_12587 instanceof cljs.core.Keyword))?G__12575_12587.fqn:null);
switch (G__12575_12588__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__12590 = cljs.core.next.call(null,seq__12564__$1);
var G__12591 = null;
var G__12592 = (0);
var G__12593 = (0);
seq__12564 = G__12590;
chunk__12565 = G__12591;
count__12566 = G__12592;
i__12567 = G__12593;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__12594){
var map__12595 = p__12594;
var map__12595__$1 = cljs.core.__destructure_map.call(null,map__12595);
var src = map__12595__$1;
var file = cljs.core.get.call(null,map__12595__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__12595__$1,new cljs.core.Keyword(null,"line","line",212345235));
var source_url = (((!(cljs.core.empty_QMARK_.call(null,re_com.config.root_url_for_compiler_output))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.config.root_url_for_compiler_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):null);
console.group(["%c",re_com.debug.collision_icon," re-com validation error "].join(''),re_com.debug.h1_style);

if(cljs.core.truth_(src)){
if(cljs.core.truth_(source_url)){
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name.call(null,component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"%c see ",source_url].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"");
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name.call(null,component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Add %cre-com.config/root-url-for-compiler-output%c to your %c:closure-defines%c to enable clickable source urls"].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"");
}
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name.call(null,component_name)," ...]"].join(''),re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Learn how to add source coordinates to your components at https://re-com.day8.com.au/#/debug"].join(''));
}

re_com.debug.log_validate_args_error_problems.call(null,problems);

re_com.debug.log_component_stack.call(null,re_com.debug.component_stack.call(null,cljs.core.deref.call(null,element)));

return console.groupEnd();
});
re_com.debug.validate_args_error = (function re_com$debug$validate_args_error(var_args){
var args__4777__auto__ = [];
var len__4771__auto___12601 = arguments.length;
var i__4772__auto___12602 = (0);
while(true){
if((i__4772__auto___12602 < len__4771__auto___12601)){
args__4777__auto__.push((arguments[i__4772__auto___12602]));

var G__12603 = (i__4772__auto___12602 + (1));
i__4772__auto___12602 = G__12603;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__12597){
var map__12598 = p__12597;
var map__12598__$1 = cljs.core.__destructure_map.call(null,map__12598);
var problems = cljs.core.get.call(null,map__12598__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component = cljs.core.get.call(null,map__12598__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args = cljs.core.get.call(null,map__12598__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var element = cljs.core.atom.call(null,null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_.call(null,element,el);
} else {
return null;
}
});
var internal_problems = cljs.core.atom.call(null,problems);
var internal_component = cljs.core.atom.call(null,component);
var internal_args = cljs.core.atom.call(null,args);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"validate-args-error",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return re_com.debug.log_validate_args_error.call(null,element,cljs.core.deref.call(null,internal_problems),cljs.core.deref.call(null,internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,internal_args)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,argv,old_state,snapshot){
return re_com.debug.log_validate_args_error.call(null,element,cljs.core.deref.call(null,internal_problems),cljs.core.deref.call(null,internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,internal_args)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__12604__delegate = function (p__12599){
var map__12600 = p__12599;
var map__12600__$1 = cljs.core.__destructure_map.call(null,map__12600);
var problems__$1 = cljs.core.get.call(null,map__12600__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component__$1 = cljs.core.get.call(null,map__12600__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args__$1 = cljs.core.get.call(null,map__12600__$1,new cljs.core.Keyword(null,"args","args",1315556576));
cljs.core.reset_BANG_.call(null,internal_problems,problems__$1);

cljs.core.reset_BANG_.call(null,internal_component,component__$1);

cljs.core.reset_BANG_.call(null,internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,re_com.debug.__GT_attr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args__$1),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"re-com validation error. Look in the DevTools console.",new cljs.core.Keyword(null,"style","style",-496642736),re_com.debug.validate_args_problems_style.call(null)], null)),re_com.debug.collision_icon], null);
};
var G__12604 = function (var_args){
var p__12599 = null;
if (arguments.length > 0) {
var G__12605__i = 0, G__12605__a = new Array(arguments.length -  0);
while (G__12605__i < G__12605__a.length) {G__12605__a[G__12605__i] = arguments[G__12605__i + 0]; ++G__12605__i;}
  p__12599 = new cljs.core.IndexedSeq(G__12605__a,0,null);
} 
return G__12604__delegate.call(this,p__12599);};
G__12604.cljs$lang$maxFixedArity = 0;
G__12604.cljs$lang$applyTo = (function (arglist__12606){
var p__12599 = cljs.core.seq(arglist__12606);
return G__12604__delegate(p__12599);
});
G__12604.cljs$core$IFn$_invoke$arity$variadic = G__12604__delegate;
return G__12604;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq12596){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12596));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__4777__auto__ = [];
var len__4771__auto___12612 = arguments.length;
var i__4772__auto___12613 = (0);
while(true){
if((i__4772__auto___12613 < len__4771__auto___12612)){
args__4777__auto__.push((arguments[i__4772__auto___12613]));

var G__12614 = (i__4772__auto___12613 + (1));
i__4772__auto___12613 = G__12614;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__12608){
var map__12609 = p__12608;
var map__12609__$1 = cljs.core.__destructure_map.call(null,map__12609);
var component = cljs.core.get.call(null,map__12609__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src = cljs.core.get.call(null,map__12609__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var element = cljs.core.atom.call(null,null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_.call(null,element,el);
} else {
return null;
}
});
var log_fn = (function (){
var el = cljs.core.deref.call(null,element);
if(cljs.core.truth_(el)){
var first_child = cljs.core.first.call(null,el.children);
console.group("%c[stack-spy ...]",re_com.debug.code_style);

re_com.debug.log_component_stack.call(null,re_com.debug.component_stack.call(null,first_child));

return console.groupEnd();
} else {
return null;
}
});
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"stack-spy",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),log_fn,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),log_fn,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__12615__delegate = function (p__12610){
var map__12611 = p__12610;
var map__12611__$1 = cljs.core.__destructure_map.call(null,map__12611);
var component__$1 = cljs.core.get.call(null,map__12611__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src__$1 = cljs.core.get.call(null,map__12611__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),re_com.debug.__GT_attr.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),component__$1], null);
};
var G__12615 = function (var_args){
var p__12610 = null;
if (arguments.length > 0) {
var G__12616__i = 0, G__12616__a = new Array(arguments.length -  0);
while (G__12616__i < G__12616__a.length) {G__12616__a[G__12616__i] = arguments[G__12616__i + 0]; ++G__12616__i;}
  p__12610 = new cljs.core.IndexedSeq(G__12616__a,0,null);
} 
return G__12615__delegate.call(this,p__12610);};
G__12615.cljs$lang$maxFixedArity = 0;
G__12615.cljs$lang$applyTo = (function (arglist__12617){
var p__12610 = cljs.core.seq(arglist__12617);
return G__12615__delegate(p__12610);
});
G__12615.cljs$core$IFn$_invoke$arity$variadic = G__12615__delegate;
return G__12615;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq12607){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12607));
}));


//# sourceMappingURL=debug.js.map
