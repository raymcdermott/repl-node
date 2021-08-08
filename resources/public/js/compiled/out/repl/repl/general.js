// Compiled by ClojureScript 1.10.844 {}
goog.provide('repl.repl.general');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('clojure.string');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("repl.repl.general","string-data","repl.repl.general/string-data",-775060555),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__11738#","p1__11738#",-1493780475,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("clojure.string","blank?","clojure.string/blank?",1772874244,null),new cljs.core.Symbol(null,"p1__11738#","p1__11738#",-1493780475,null))))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("clojure.string","blank?","clojure.string/blank?",1772874244,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__11738_SHARP_){
return (!(clojure.string.blank_QMARK_.call(null,p1__11738_SHARP_)));
})], null),null));
var opts11739_11745 = null;
cljs.core.reduce.call(null,(function (ret__11530__auto__,p__11740){
var vec__11741 = p__11740;
var ___11531__auto__ = cljs.core.nth.call(null,vec__11741,(0),null);
var f__11532__auto__ = cljs.core.nth.call(null,vec__11741,(1),null);
var sym__11533__auto__ = f__11532__auto__.call(null);
var G__11744 = ret__11530__auto__;
if(cljs.core.truth_(sym__11533__auto__)){
return cljs.core.conj.call(null,G__11744,sym__11533__auto__);
} else {
return G__11744;
}
}),cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p1__11529__11534__auto__){
return cljs.spec.test.alpha.instrumentable_syms.call(null,opts11739_11745).call(null,cljs.core.first.call(null,p1__11529__11534__auto__));
}),cljs.core.zipmap.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));

//# sourceMappingURL=general.js.map
