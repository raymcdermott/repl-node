// Compiled by ClojureScript 1.10.844 {}
goog.provide('repl.repl.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('repl.repl.user');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","clojure-version","repl.repl.subs/clojure-version",-844951127),(function (db){
return new cljs.core.Keyword(null,"clojure-version","clojure-version",-1850576362).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","user-keystrokes","repl.repl.subs/user-keystrokes",-414989539),(function (db,p__36569){
var vec__36570 = p__36569;
var _ = cljs.core.nth.call(null,vec__36570,(0),null);
var user = cljs.core.nth.call(null,vec__36570,(1),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-forms","current-forms",825876172),user], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","eval-results","repl.repl.subs/eval-results",-2073211989),(function (db){
return new cljs.core.Keyword(null,"eval-results","eval-results",553789722).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","show-times","repl.repl.subs/show-times",1412506233),(function (db){
return new cljs.core.Keyword(null,"show-times","show-times",1881194220).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","network-status","repl.repl.subs/network-status",1334195087),(function (db){
return new cljs.core.Keyword(null,"network-status","network-status",1807023100).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","name","repl.repl.subs/name",1102804414),(function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","current-form","repl.repl.subs/current-form",-732750871),(function (db){
return new cljs.core.Keyword(null,"current-form","current-form",1889534560).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","completions","repl.repl.subs/completions",682462578),(function (db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"local-repl-editor","local-repl-editor",-1392566418),new cljs.core.Keyword(null,"completions","completions",-190930179)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","user","repl.repl.subs/user",-1352632715),(function (db){
return new cljs.core.Keyword("repl.repl.user","user","repl.repl.user/user",-1352198451).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","logged-in","repl.repl.subs/logged-in",-915192740),(function (db){
return new cljs.core.Keyword(null,"logged-in","logged-in",627058423).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","logged-in-user","repl.repl.subs/logged-in-user",-923125079),(function (db){
return new cljs.core.Keyword("repl.repl.user","user","repl.repl.user/user",-1352198451).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","user-code-mirror","repl.repl.subs/user-code-mirror",271570225),(function (db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"local-repl-editor","local-repl-editor",-1392566418),new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","network-repl-editor","repl.repl.subs/network-repl-editor",-353152922),(function (db,p__36573){
var vec__36574 = p__36573;
var _ = cljs.core.nth.call(null,vec__36574,(0),null);
var editor_key = cljs.core.nth.call(null,vec__36574,(1),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network-repl-editors","network-repl-editors",-409341112),editor_key], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","other-users","repl.repl.subs/other-users",-1139491548),(function (db){
if(cljs.core.truth_(new cljs.core.Keyword("repl.repl.user","users","repl.repl.user/users",686298518).cljs$core$IFn$_invoke$arity$1(db))){
return repl.repl.user.other_users.call(null,new cljs.core.Keyword("repl.repl.user","name","repl.repl.user/name",1106532198).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("repl.repl.user","user","repl.repl.user/user",-1352198451).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword("repl.repl.user","users","repl.repl.user/users",686298518).cljs$core$IFn$_invoke$arity$1(db));
} else {
return null;
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","other-users-count","repl.repl.subs/other-users-count",846718297),(function (db){
return cljs.core.count.call(null,repl.repl.user.other_users.call(null,new cljs.core.Keyword("repl.repl.user","name","repl.repl.user/name",1106532198).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("repl.repl.user","user","repl.repl.user/user",-1352198451).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword("repl.repl.user","users","repl.repl.user/users",686298518).cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","network-repl-editor-keys","repl.repl.subs/network-repl-editor-keys",1641558795),(function (db){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"network-repl-editors","network-repl-editors",-409341112).cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","show-add-lib-panel","repl.repl.subs/show-add-lib-panel",-1130700932),(function (db){
return new cljs.core.Keyword(null,"show-add-lib-panel","show-add-lib-panel",-1733709335).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","doc-show?","repl.repl.subs/doc-show?",-2138986897),(function (db){
return new cljs.core.Keyword(null,"doc-show?","doc-show?",-453980196).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","doc-text","repl.repl.subs/doc-text",1796234981),(function (db){
return new cljs.core.Keyword(null,"doc-text","doc-text",117651538).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","team-data","repl.repl.subs/team-data",946694192),(function (db){
return new cljs.core.Keyword(null,"team-data","team-data",-732020079).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","show-team-data","repl.repl.subs/show-team-data",-1079604980),(function (db){
return new cljs.core.Keyword(null,"show-team-data","show-team-data",596888701).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","input-history","repl.repl.subs/input-history",-498676433),(function (db){
return new cljs.core.Keyword(null,"input-history","input-history",-2110310510).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","os","repl.repl.subs/os",462580696),(function (db){
return new cljs.core.Keyword(null,"os","os",795021913).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("repl.repl.subs","key-bindings","repl.repl.subs/key-bindings",1290073363),(function (db){
return new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map
