// Compiled by ClojureScript 1.10.844 {}
goog.provide('repl.repl.views.status');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('repl.repl.subs');
goog.require('repl.repl.user');
goog.require('clojure.edn');
if((typeof repl !== 'undefined') && (typeof repl.repl !== 'undefined') && (typeof repl.repl.views !== 'undefined') && (typeof repl.repl.views.status !== 'undefined') && (typeof repl.repl.views.status.default_style !== 'undefined')){
} else {
repl.repl.views.status.default_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Menlo, Lucida Console, Monaco, monospace",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid lightgray",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 5px 5px 5px"], null);
}
if((typeof repl !== 'undefined') && (typeof repl.repl !== 'undefined') && (typeof repl.repl.views !== 'undefined') && (typeof repl.repl.views.status !== 'undefined') && (typeof repl.repl.views.status.status_style !== 'undefined')){
} else {
repl.repl.views.status.status_style = cljs.core.merge.call(null,cljs.core.dissoc.call(null,repl.repl.views.status.default_style,new cljs.core.Keyword(null,"border","border",1444987323)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"lighter",new cljs.core.Keyword(null,"color","color",1011675173),"lightgrey"], null));
}
repl.repl.views.status.status_bar = (function repl$repl$views$status$status_bar(user){
var network_status = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.subs","network-status","repl.repl.subs/network-status",1334195087)], null)));
var map__36613 = clojure.edn.read_string.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.subs","clojure-version","repl.repl.subs/clojure-version",-844951127)], null))));
var map__36613__$1 = cljs.core.__destructure_map.call(null,map__36613);
var major = cljs.core.get.call(null,map__36613__$1,new cljs.core.Keyword(null,"major","major",-27376078));
var minor = cljs.core.get.call(null,map__36613__$1,new cljs.core.Keyword(null,"minor","minor",-608536071));
var incremental = cljs.core.get.call(null,map__36613__$1,new cljs.core.Keyword(null,"incremental","incremental",-84630877));
var qualifier = cljs.core.get.call(null,map__36613__$1,new cljs.core.Keyword(null,"qualifier","qualifier",125841738));
var clojure_version = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(major),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(minor),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(incremental),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__4149__auto__ = qualifier;
if(cljs.core.truth_(and__4149__auto__)){
return ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qualifier)].join('');
} else {
return and__4149__auto__;
}
})())].join('');
var network_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(network_status)?"rgba(127, 191, 63, 0.32)":"red")], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"20px",new cljs.core.Keyword(null,"style","style",-496642736),repl.repl.views.status.status_style,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),["Login: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("repl.repl.user","name","repl.repl.user/name",1106532198).cljs$core$IFn$_invoke$arity$1(user))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),["Clojure version: ",clojure_version].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"style","style",-496642736),network_style,new cljs.core.Keyword(null,"label","label",1718410804),"Connect Status:"], null),(function (){var icon_suffix = (cljs.core.truth_(network_status)?"-done":"-off");
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),["zmdi-cloud",icon_suffix].join(''),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"style","style",-496642736),network_style], null);
})()], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"style","style",-496642736),network_style,new cljs.core.Keyword(null,"label","label",1718410804),"Font size: Large"], null)], null)], null)], null)], null);
});

//# sourceMappingURL=status.js.map
