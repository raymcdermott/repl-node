// Compiled by ClojureScript 1.10.844 {}
goog.provide('repl.repl.views.add_lib');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('reagent.core');
goog.require('repl.repl.events');
goog.require('repl.repl.subs');
repl.repl.views.add_lib.lib_type = (function repl$repl$views$add_lib$lib_type(lib_data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.doall.call(null,(function (){var iter__4564__auto__ = (function repl$repl$views$add_lib$lib_type_$_iter__31708(s__31709){
return (new cljs.core.LazySeq(null,(function (){
var s__31709__$1 = s__31709;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__31709__$1);
if(temp__5753__auto__){
var s__31709__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31709__$2)){
var c__4562__auto__ = cljs.core.chunk_first.call(null,s__31709__$2);
var size__4563__auto__ = cljs.core.count.call(null,c__4562__auto__);
var b__31711 = cljs.core.chunk_buffer.call(null,size__4563__auto__);
if((function (){var i__31710 = (0);
while(true){
if((i__31710 < size__4563__auto__)){
var maven_QMARK_ = cljs.core._nth.call(null,c__4562__auto__,i__31710);
cljs.core.chunk_append.call(null,b__31711,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.radio_button,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.name.call(null,maven_QMARK_),new cljs.core.Keyword(null,"value","value",305978217),maven_QMARK_,new cljs.core.Keyword(null,"model","model",331153215),(cljs.core.truth_(new cljs.core.Keyword(null,"maven","maven",155779801).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lib_data)))?new cljs.core.Keyword(null,"maven","maven",155779801):new cljs.core.Keyword(null,"git","git",-163493751)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__31710,maven_QMARK_,c__4562__auto__,size__4563__auto__,b__31711,s__31709__$2,temp__5753__auto__){
return (function (p1__31707_SHARP_){
return cljs.core.swap_BANG_.call(null,lib_data,cljs.core.assoc,new cljs.core.Keyword(null,"maven","maven",155779801),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"maven","maven",155779801),p1__31707_SHARP_));
});})(i__31710,maven_QMARK_,c__4562__auto__,size__4563__auto__,b__31711,s__31709__$2,temp__5753__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),maven_QMARK_], null)));

var G__31712 = (i__31710 + (1));
i__31710 = G__31712;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31711),repl$repl$views$add_lib$lib_type_$_iter__31708.call(null,cljs.core.chunk_rest.call(null,s__31709__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31711),null);
}
} else {
var maven_QMARK_ = cljs.core.first.call(null,s__31709__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.radio_button,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.name.call(null,maven_QMARK_),new cljs.core.Keyword(null,"value","value",305978217),maven_QMARK_,new cljs.core.Keyword(null,"model","model",331153215),(cljs.core.truth_(new cljs.core.Keyword(null,"maven","maven",155779801).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lib_data)))?new cljs.core.Keyword(null,"maven","maven",155779801):new cljs.core.Keyword(null,"git","git",-163493751)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (maven_QMARK_,s__31709__$2,temp__5753__auto__){
return (function (p1__31707_SHARP_){
return cljs.core.swap_BANG_.call(null,lib_data,cljs.core.assoc,new cljs.core.Keyword(null,"maven","maven",155779801),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"maven","maven",155779801),p1__31707_SHARP_));
});})(maven_QMARK_,s__31709__$2,temp__5753__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),maven_QMARK_], null)),repl$repl$views$add_lib$lib_type_$_iter__31708.call(null,cljs.core.rest.call(null,s__31709__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maven","maven",155779801),new cljs.core.Keyword(null,"git","git",-163493751)], null));
})())], null)], null);
});
repl.repl.views.add_lib.dep_name = (function repl$repl$views$add_lib$dep_name(lib_data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Dependency Name"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"width","width",-384071477),"350px",new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lib_data)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31713_SHARP_){
return cljs.core.swap_BANG_.call(null,lib_data,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),p1__31713_SHARP_);
})], null)], null)], null);
});
repl.repl.views.add_lib.maven_dep = (function repl$repl$views$add_lib$maven_dep(lib_data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Maven Version"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"width","width",-384071477),"350px",new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lib_data)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31714_SHARP_){
return cljs.core.swap_BANG_.call(null,lib_data,cljs.core.assoc,new cljs.core.Keyword(null,"version","version",425292698),p1__31714_SHARP_);
})], null)], null)], null);
});
repl.repl.views.add_lib.git_dep = (function repl$repl$views$add_lib$git_dep(lib_data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Repository URL"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"width","width",-384071477),"350px",new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lib_data)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31715_SHARP_){
return cljs.core.swap_BANG_.call(null,lib_data,cljs.core.assoc,new cljs.core.Keyword(null,"url","url",276297046),p1__31715_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Commit SHA"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"width","width",-384071477),"350px",new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lib_data)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31716_SHARP_){
return cljs.core.swap_BANG_.call(null,lib_data,cljs.core.assoc,new cljs.core.Keyword(null,"sha","sha",-950317251),p1__31716_SHARP_);
})], null)], null)], null);
});
repl.repl.views.add_lib.add_lib_form = (function repl$repl$views$add_lib$add_lib_form(lib_data,process_ok){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.border,new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #eee",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"30px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"height","height",1025178622),"450px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Add a dependency to the REPL",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.add_lib.lib_type,lib_data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.add_lib.dep_name,lib_data], null),(cljs.core.truth_(new cljs.core.Keyword(null,"maven","maven",155779801).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lib_data)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.add_lib.maven_dep,lib_data], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.add_lib.git_dep,lib_data], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"30px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Add",new cljs.core.Keyword(null,"on-click","on-click",1632826543),process_ok], null)], null)], null)], null)], null)], null);
});
});
repl.repl.views.add_lib.add_lib_panel = (function repl$repl$views$add_lib$add_lib_panel(){
var show_add_lib_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.subs","show-add-lib-panel","repl.repl.subs/show-add-lib-panel",-1130700932)], null));
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,show_add_lib_QMARK_))){
var lib_data = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"vvvvalvalval/supdate",new cljs.core.Keyword(null,"version","version",425292698),"0.2.3",new cljs.core.Keyword(null,"url","url",276297046),"https://github.com/vvvvalvalval/supdate.git",new cljs.core.Keyword(null,"sha","sha",-950317251),"c7afc460b68a32d2494f98a55d438b67dd677a2b",new cljs.core.Keyword(null,"maven","maven",155779801),true], null));
var add_lib_event = (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","add-lib","repl.repl.events/add-lib",1125902198),cljs.core.deref.call(null,lib_data)], null));
});
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"backdrop-color","backdrop-color",1921200717),"lightgray",new cljs.core.Keyword(null,"backdrop-on-click","backdrop-on-click",-1460240426),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","show-add-lib-panel","repl.repl.events/show-add-lib-panel",1436769906),false], null));
}),new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653),0.7,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.add_lib.add_lib_form,lib_data,add_lib_event], null)], null);
} else {
return null;
}
});
});

//# sourceMappingURL=add_lib.js.map
