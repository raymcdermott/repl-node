// Compiled by ClojureScript 1.10.844 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31358){
var map__31359 = p__31358;
var map__31359__$1 = cljs.core.__destructure_map.call(null,map__31359);
var m = map__31359__$1;
var n = cljs.core.get.call(null,map__31359__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31359__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4160__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31360_31388 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31361_31389 = null;
var count__31362_31390 = (0);
var i__31363_31391 = (0);
while(true){
if((i__31363_31391 < count__31362_31390)){
var f_31392 = cljs.core._nth.call(null,chunk__31361_31389,i__31363_31391);
cljs.core.println.call(null,"  ",f_31392);


var G__31393 = seq__31360_31388;
var G__31394 = chunk__31361_31389;
var G__31395 = count__31362_31390;
var G__31396 = (i__31363_31391 + (1));
seq__31360_31388 = G__31393;
chunk__31361_31389 = G__31394;
count__31362_31390 = G__31395;
i__31363_31391 = G__31396;
continue;
} else {
var temp__5753__auto___31397 = cljs.core.seq.call(null,seq__31360_31388);
if(temp__5753__auto___31397){
var seq__31360_31398__$1 = temp__5753__auto___31397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31360_31398__$1)){
var c__4591__auto___31399 = cljs.core.chunk_first.call(null,seq__31360_31398__$1);
var G__31400 = cljs.core.chunk_rest.call(null,seq__31360_31398__$1);
var G__31401 = c__4591__auto___31399;
var G__31402 = cljs.core.count.call(null,c__4591__auto___31399);
var G__31403 = (0);
seq__31360_31388 = G__31400;
chunk__31361_31389 = G__31401;
count__31362_31390 = G__31402;
i__31363_31391 = G__31403;
continue;
} else {
var f_31404 = cljs.core.first.call(null,seq__31360_31398__$1);
cljs.core.println.call(null,"  ",f_31404);


var G__31405 = cljs.core.next.call(null,seq__31360_31398__$1);
var G__31406 = null;
var G__31407 = (0);
var G__31408 = (0);
seq__31360_31388 = G__31405;
chunk__31361_31389 = G__31406;
count__31362_31390 = G__31407;
i__31363_31391 = G__31408;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31409 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31409);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31409)))?cljs.core.second.call(null,arglists_31409):arglists_31409));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31364_31410 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31365_31411 = null;
var count__31366_31412 = (0);
var i__31367_31413 = (0);
while(true){
if((i__31367_31413 < count__31366_31412)){
var vec__31376_31414 = cljs.core._nth.call(null,chunk__31365_31411,i__31367_31413);
var name_31415 = cljs.core.nth.call(null,vec__31376_31414,(0),null);
var map__31379_31416 = cljs.core.nth.call(null,vec__31376_31414,(1),null);
var map__31379_31417__$1 = cljs.core.__destructure_map.call(null,map__31379_31416);
var doc_31418 = cljs.core.get.call(null,map__31379_31417__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31419 = cljs.core.get.call(null,map__31379_31417__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31415);

cljs.core.println.call(null," ",arglists_31419);

if(cljs.core.truth_(doc_31418)){
cljs.core.println.call(null," ",doc_31418);
} else {
}


var G__31420 = seq__31364_31410;
var G__31421 = chunk__31365_31411;
var G__31422 = count__31366_31412;
var G__31423 = (i__31367_31413 + (1));
seq__31364_31410 = G__31420;
chunk__31365_31411 = G__31421;
count__31366_31412 = G__31422;
i__31367_31413 = G__31423;
continue;
} else {
var temp__5753__auto___31424 = cljs.core.seq.call(null,seq__31364_31410);
if(temp__5753__auto___31424){
var seq__31364_31425__$1 = temp__5753__auto___31424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31364_31425__$1)){
var c__4591__auto___31426 = cljs.core.chunk_first.call(null,seq__31364_31425__$1);
var G__31427 = cljs.core.chunk_rest.call(null,seq__31364_31425__$1);
var G__31428 = c__4591__auto___31426;
var G__31429 = cljs.core.count.call(null,c__4591__auto___31426);
var G__31430 = (0);
seq__31364_31410 = G__31427;
chunk__31365_31411 = G__31428;
count__31366_31412 = G__31429;
i__31367_31413 = G__31430;
continue;
} else {
var vec__31380_31431 = cljs.core.first.call(null,seq__31364_31425__$1);
var name_31432 = cljs.core.nth.call(null,vec__31380_31431,(0),null);
var map__31383_31433 = cljs.core.nth.call(null,vec__31380_31431,(1),null);
var map__31383_31434__$1 = cljs.core.__destructure_map.call(null,map__31383_31433);
var doc_31435 = cljs.core.get.call(null,map__31383_31434__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31436 = cljs.core.get.call(null,map__31383_31434__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31432);

cljs.core.println.call(null," ",arglists_31436);

if(cljs.core.truth_(doc_31435)){
cljs.core.println.call(null," ",doc_31435);
} else {
}


var G__31437 = cljs.core.next.call(null,seq__31364_31425__$1);
var G__31438 = null;
var G__31439 = (0);
var G__31440 = (0);
seq__31364_31410 = G__31437;
chunk__31365_31411 = G__31438;
count__31366_31412 = G__31439;
i__31367_31413 = G__31440;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.call(null,"Spec");

var seq__31384 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31385 = null;
var count__31386 = (0);
var i__31387 = (0);
while(true){
if((i__31387 < count__31386)){
var role = cljs.core._nth.call(null,chunk__31385,i__31387);
var temp__5753__auto___31441__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___31441__$1)){
var spec_31442 = temp__5753__auto___31441__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31442));
} else {
}


var G__31443 = seq__31384;
var G__31444 = chunk__31385;
var G__31445 = count__31386;
var G__31446 = (i__31387 + (1));
seq__31384 = G__31443;
chunk__31385 = G__31444;
count__31386 = G__31445;
i__31387 = G__31446;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__31384);
if(temp__5753__auto____$1){
var seq__31384__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31384__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__31384__$1);
var G__31447 = cljs.core.chunk_rest.call(null,seq__31384__$1);
var G__31448 = c__4591__auto__;
var G__31449 = cljs.core.count.call(null,c__4591__auto__);
var G__31450 = (0);
seq__31384 = G__31447;
chunk__31385 = G__31448;
count__31386 = G__31449;
i__31387 = G__31450;
continue;
} else {
var role = cljs.core.first.call(null,seq__31384__$1);
var temp__5753__auto___31451__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___31451__$2)){
var spec_31452 = temp__5753__auto___31451__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31452));
} else {
}


var G__31453 = cljs.core.next.call(null,seq__31384__$1);
var G__31454 = null;
var G__31455 = (0);
var G__31456 = (0);
seq__31384 = G__31453;
chunk__31385 = G__31454;
count__31386 = G__31455;
i__31387 = G__31456;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__31457 = cljs.core.conj.call(null,via,t);
var G__31458 = cljs.core.ex_cause.call(null,t);
via = G__31457;
t = G__31458;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31461 = datafied_throwable;
var map__31461__$1 = cljs.core.__destructure_map.call(null,map__31461);
var via = cljs.core.get.call(null,map__31461__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__31461__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__31461__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31462 = cljs.core.last.call(null,via);
var map__31462__$1 = cljs.core.__destructure_map.call(null,map__31462);
var type = cljs.core.get.call(null,map__31462__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__31462__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__31462__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31463 = data;
var map__31463__$1 = cljs.core.__destructure_map.call(null,map__31463);
var problems = cljs.core.get.call(null,map__31463__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__31463__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__31463__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31464 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__31464__$1 = cljs.core.__destructure_map.call(null,map__31464);
var top_data = map__31464__$1;
var source = cljs.core.get.call(null,map__31464__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__31465 = phase;
var G__31465__$1 = (((G__31465 instanceof cljs.core.Keyword))?G__31465.fqn:null);
switch (G__31465__$1) {
case "read-source":
var map__31466 = data;
var map__31466__$1 = cljs.core.__destructure_map.call(null,map__31466);
var line = cljs.core.get.call(null,map__31466__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31466__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31467 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__31467__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31467,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31467);
var G__31467__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31467__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31467__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31467__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31467__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31468 = top_data;
var G__31468__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31468,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31468);
var G__31468__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31468__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31468__$1);
var G__31468__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31468__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31468__$2);
var G__31468__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31468__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31468__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31468__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31468__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31469 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31469,(0),null);
var method = cljs.core.nth.call(null,vec__31469,(1),null);
var file = cljs.core.nth.call(null,vec__31469,(2),null);
var line = cljs.core.nth.call(null,vec__31469,(3),null);
var G__31472 = top_data;
var G__31472__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__31472,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31472);
var G__31472__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__31472__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31472__$1);
var G__31472__$3 = (cljs.core.truth_((function (){var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
})())?cljs.core.assoc.call(null,G__31472__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31472__$2);
var G__31472__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31472__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31472__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31472__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31472__$4;
}

break;
case "execution":
var vec__31473 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31473,(0),null);
var method = cljs.core.nth.call(null,vec__31473,(1),null);
var file = cljs.core.nth.call(null,vec__31473,(2),null);
var line = cljs.core.nth.call(null,vec__31473,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__31460_SHARP_){
var or__4160__auto__ = (p1__31460_SHARP_ == null);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__31460_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return line;
}
})();
var G__31476 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31476__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__31476,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31476);
var G__31476__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31476__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31476__$1);
var G__31476__$3 = (cljs.core.truth_((function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
}
})())?cljs.core.assoc.call(null,G__31476__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31476__$2);
var G__31476__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__31476__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31476__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31476__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31476__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31465__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31480){
var map__31481 = p__31480;
var map__31481__$1 = cljs.core.__destructure_map.call(null,map__31481);
var triage_data = map__31481__$1;
var phase = cljs.core.get.call(null,map__31481__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__31481__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__31481__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31481__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__31481__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__31481__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__31481__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__31481__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = source;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = line;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4160__auto__ = class$;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31482 = phase;
var G__31482__$1 = (((G__31482 instanceof cljs.core.Keyword))?G__31482.fqn:null);
switch (G__31482__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31483_31492 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31484_31493 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31485_31494 = true;
var _STAR_print_fn_STAR__temp_val__31486_31495 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31485_31494);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31486_31495);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31478_SHARP_){
return cljs.core.dissoc.call(null,p1__31478_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31484_31493);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31483_31492);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31487_31496 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31488_31497 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31489_31498 = true;
var _STAR_print_fn_STAR__temp_val__31490_31499 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31489_31498);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31490_31499);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31479_SHARP_){
return cljs.core.dissoc.call(null,p1__31479_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31488_31497);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31487_31496);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31482__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
