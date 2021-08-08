// Compiled by ClojureScript 1.10.844 {}
goog.provide('repl.repl.views.login');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('repl.repl.events');
goog.require('repl.repl.subs');
goog.require('repl.repl.user');
repl.repl.views.login.login_form = (function repl$repl$views$login$login_form(form_data,process_ok){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.border,new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #eee",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Login to repl",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"30px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"User name:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_data)),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31736_SHARP_){
return cljs.core.swap_BANG_.call(null,form_data,cljs.core.assoc,new cljs.core.Keyword("repl.repl.user","name","repl.repl.user/name",1106532198),p1__31736_SHARP_);
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Team name:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"team-name","team-name",1475836072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_data)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31737_SHARP_){
return cljs.core.swap_BANG_.call(null,form_data,cljs.core.assoc,new cljs.core.Keyword(null,"team-name","team-name",1475836072),p1__31737_SHARP_);
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Team secret:",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"secret","secret",618547054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_data)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31738_SHARP_){
return cljs.core.swap_BANG_.call(null,form_data,cljs.core.assoc,new cljs.core.Keyword(null,"secret","secret",618547054),p1__31738_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"30px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Access",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-success",new cljs.core.Keyword(null,"on-click","on-click",1632826543),process_ok], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"100px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"alt","alt",-3214426),"Welcome to repl",new cljs.core.Keyword(null,"width","width",-384071477),"75px",new cljs.core.Keyword(null,"height","height",1025178622),"75px",new cljs.core.Keyword(null,"src","src",-1651076051),"/images/reptile-logo-yellow-transparent.png"], null)], null)], null)], null)], null)], null)], null)], null)], null);
});
repl.repl.views.login.authenticate = (function repl$repl$views$login$authenticate(){
var logged_in = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.subs","logged-in","repl.repl.subs/logged-in",-915192740)], null));
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,logged_in))){
return null;
} else {
var form_data = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"team-name","team-name",1475836072),"team-name",new cljs.core.Keyword(null,"secret","secret",618547054),"team-secret"], null));
var process_ok = (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","login","repl.repl.events/login",1984115176),cljs.core.deref.call(null,form_data)], null));
});
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"backdrop-color","backdrop-color",1921200717),"lightblue",new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653),0.1,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.login.login_form,form_data,process_ok], null)], null);
}
});
});

//# sourceMappingURL=login.js.map
