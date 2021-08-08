// Compiled by ClojureScript 1.10.844 {}
goog.provide('repl.repl.events');
goog.require('cljs.core');
goog.require('cljs.tools.reader.edn');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('re_frame.core');
goog.require('repl.repl.code_mirror');
goog.require('repl.repl.helpers');
goog.require('repl.repl.ws');
goog.require('repl.repl.messages');
goog.require('repl.repl.user');
goog.require('taoensso.sente');
repl.repl.events.system_user = repl.repl.user.__GT_user.call(null,"system","0");
repl.repl.events.default_server_timeout = (3000);
repl.repl.events.key_bindings = (function repl$repl$events$key_bindings(os){
var ckey = ((cljs.core._EQ_.call(null,os,new cljs.core.Keyword(null,"macosx","macosx",-1369181402)))?"cmd":"ctrl");
var keys = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["enter","up","down","left","right"], null);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (c_key,the_key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,the_key),cljs.core.keyword.call(null,[clojure.string.capitalize.call(null,c_key),"-",clojure.string.capitalize.call(null,the_key)].join(''))], null);
}),cljs.core.repeat.call(null,ckey),keys));
});
if((typeof repl !== 'undefined') && (typeof repl.repl !== 'undefined') && (typeof repl.repl.events !== 'undefined') && (typeof repl.repl.events.os_data !== 'undefined')){
} else {
repl.repl.events.os_data = (function (){var app_version = navigator.appVersion;
var os = (cljs.core.truth_(cljs.core.re_find.call(null,/Win/,app_version))?new cljs.core.Keyword(null,"windows","windows",2068861701):(cljs.core.truth_(cljs.core.re_find.call(null,/X11/,app_version))?new cljs.core.Keyword(null,"unix","unix",1361815212):(cljs.core.truth_(cljs.core.re_find.call(null,/Linux/,app_version))?new cljs.core.Keyword(null,"linux","linux",-238042662):(cljs.core.truth_(cljs.core.re_find.call(null,/Mac/,app_version))?new cljs.core.Keyword(null,"macosx","macosx",-1369181402):new cljs.core.Keyword(null,"unknown-os","unknown-os",-2005955628)
))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"os","os",795021913),os,new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982),repl.repl.events.key_bindings.call(null,os)], null);
})();
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("repl.repl.events","initialize-db","repl.repl.events/initialize-db",2040306647),(function (_,___$1){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("repl.repl.events","name","repl.repl.events/name",414971064),"repl-repl",new cljs.core.Keyword("repl.repl.events","other-visibility","repl.repl.events/other-visibility",865339284),true], null),repl.repl.events.os_data);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("repl.repl.events","network-status","repl.repl.events/network-status",-1232291707),(function (db,p__33269){
var vec__33270 = p__33269;
var _ = cljs.core.nth.call(null,vec__33270,(0),null);
var status = cljs.core.nth.call(null,vec__33270,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"network-status","network-status",1807023100),status);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("repl.repl.events","client-uid","repl.repl.events/client-uid",-1908331954),(function (db,p__33273){
var vec__33274 = p__33273;
var _ = cljs.core.nth.call(null,vec__33274,(0),null);
var uid = cljs.core.nth.call(null,vec__33274,(1),null);
var temp__5751__auto__ = new cljs.core.Keyword("repl.repl.user","user","repl.repl.user/user",-1352198451).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(temp__5751__auto__)){
var map__33277 = temp__5751__auto__;
var map__33277__$1 = cljs.core.__destructure_map.call(null,map__33277);
var name = cljs.core.get.call(null,map__33277__$1,new cljs.core.Keyword("repl.repl.user","name","repl.repl.user/name",1106532198));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("repl.repl.user","user","repl.repl.user/user",-1352198451),repl.repl.user.__GT_user.call(null,name,uid),new cljs.core.Keyword("repl.repl.user","uid","repl.repl.user/uid",1302646803),uid);
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("repl.repl.user","uid","repl.repl.user/uid",1302646803),uid);
}
}));
repl.repl.events.pred_fails = (function repl$repl$events$pred_fails(problems){
var G__33279 = problems;
var G__33279__$1 = (((G__33279 == null))?null:cljs.core.map.call(null,(function (p1__33278_SHARP_){
return ["\uD83E\uDD14  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(p1__33278_SHARP_))," is not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(p1__33278_SHARP_))].join('');
}),G__33279));
var G__33279__$2 = (((G__33279__$1 == null))?null:cljs.core.interpose.call(null,"\n",G__33279__$1));
if((G__33279__$2 == null)){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.str,G__33279__$2);
}
});
repl.repl.events.default_reptile_tag_reader = (function repl$repl$events$default_reptile_tag_reader(tag,val){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nk-tag","nk-tag",286167133),tag,new cljs.core.Keyword(null,"nk-val","nk-val",839907975),cljs.tools.reader.edn.read_string.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(val))], null);
});
repl.repl.events.read_exception = (function repl$repl$events$read_exception(val){
try{var reader_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),repl.repl.events.default_reptile_tag_reader], null);
return cljs.tools.reader.edn.read_string.call(null,reader_opts,val);
}catch (e33280){var _ignore_reader_errors = e33280;
return null;
}});
repl.repl.events.bugs = "...\n";
repl.repl.events.check_exception = (function repl$repl$events$check_exception(val){
var map__33281 = repl.repl.events.read_exception.call(null,val);
var map__33281__$1 = cljs.core.__destructure_map.call(null,map__33281);
var cause = cljs.core.get.call(null,map__33281__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var via = cljs.core.get.call(null,map__33281__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__33281__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var data = cljs.core.get.call(null,map__33281__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var phase = cljs.core.get.call(null,map__33281__$1,new cljs.core.Keyword(null,"phase","phase",575722892));
var problems = new cljs.core.Keyword("clojure.spec.alpha","problems","clojure.spec.alpha/problems",1395345052).cljs$core$IFn$_invoke$arity$1(data);
var spec = new cljs.core.Keyword("clojure.spec.alpha","spec","clojure.spec.alpha/spec",-1165071684).cljs$core$IFn$_invoke$arity$1(data);
var value = new cljs.core.Keyword("clojure.spec.alpha","value","clojure.spec.alpha/value",-1120646092).cljs$core$IFn$_invoke$arity$1(data);
var args = new cljs.core.Keyword("clojure.spec.alpha","args","clojure.spec.alpha/args",-1207829595).cljs$core$IFn$_invoke$arity$1(data);
var or__4160__auto__ = problems;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cause;
}
});
repl.repl.events.format_response = (function repl$repl$events$format_response(show_times_QMARK_,result){
var map__33282 = result;
var map__33282__$1 = cljs.core.__destructure_map.call(null,map__33282);
var val = cljs.core.get.call(null,map__33282__$1,new cljs.core.Keyword(null,"val","val",128701612));
var tag = cljs.core.get.call(null,map__33282__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var ms = cljs.core.get.call(null,map__33282__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var user = cljs.core.get.call(null,map__33282__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var input = cljs.core.get.call(null,map__33282__$1,new cljs.core.Keyword(null,"input","input",556931961));
var username = new cljs.core.Keyword("repl.repl.user","name","repl.repl.user/name",1106532198).cljs$core$IFn$_invoke$arity$1(user);
var exception_data = repl.repl.events.check_exception.call(null,val);
if(cljs.core.truth_(exception_data)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input),"\n","=> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception_data),"\n\n"].join('');
} else {
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"err","err",-2089457205))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),"\n\n"].join('');
} else {
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"out","out",-910545517))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(val);
} else {
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"ret","ret",-468222814))){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(username),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(input),"\n",(cljs.core.truth_(show_times_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ms)," ms "].join(''):null),"=> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = val;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "nil";
}
})()),"\n\n"].join('');
} else {
return null;
}
}
}
}
});
repl.repl.events.format_results = (function repl$repl$events$format_results(show_times_QMARK_,results){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,repl.repl.events.format_response,show_times_QMARK_),results));
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("repl.repl.events","clear-evals","repl.repl.events/clear-evals",970635424),(function (p__33283,p__33284){
var map__33285 = p__33283;
var map__33285__$1 = cljs.core.__destructure_map.call(null,map__33285);
var db = cljs.core.get.call(null,map__33285__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33286 = p__33284;
var _ = cljs.core.nth.call(null,vec__33286,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__33286,(1),null);
var temp__5753__auto__ = new cljs.core.Keyword(null,"eval-code-mirror","eval-code-mirror",1904715227).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(temp__5753__auto__)){
var code_mirror = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"eval-results","eval-results",553789722),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("repl.repl.code-mirror","set-cm-value","repl.repl.code-mirror/set-cm-value",1379864027),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768),code_mirror], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("repl.repl.events","input-history","repl.repl.events/input-history",1027558409),(function (db,p__33289){
var vec__33290 = p__33289;
var _ = cljs.core.nth.call(null,vec__33290,(0),null);
var clojure_form = cljs.core.nth.call(null,vec__33290,(1),null);
var history = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"input-history","input-history",-2110310510).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"input-history","input-history",-2110310510),cljs.core.conj.call(null,history,clojure_form),new cljs.core.Keyword(null,"history-index","history-index",-394704427),cljs.core.count.call(null,history));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("repl.repl.events","eval-result","repl.repl.events/eval-result",1929795405),(function (p__33293,p__33294){
var map__33295 = p__33293;
var map__33295__$1 = cljs.core.__destructure_map.call(null,map__33295);
var db = cljs.core.get.call(null,map__33295__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33296 = p__33294;
var _ = cljs.core.nth.call(null,vec__33296,(0),null);
var map__33299 = cljs.core.nth.call(null,vec__33296,(1),null);
var map__33299__$1 = cljs.core.__destructure_map.call(null,map__33299);
var eval_result = map__33299__$1;
var form = cljs.core.get.call(null,map__33299__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var val = cljs.core.get.call(null,map__33299__$1,new cljs.core.Keyword(null,"val","val",128701612));
if(cljs.core._EQ_.call(null,form,"*clojure-version*")){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"clojure-version","clojure-version",-1850576362),val)], null);
} else {
var code_mirror = new cljs.core.Keyword(null,"eval-code-mirror","eval-code-mirror",1904715227).cljs$core$IFn$_invoke$arity$1(db);
var show_times_QMARK_ = new cljs.core.Keyword(null,"show-times","show-times",1881194220).cljs$core$IFn$_invoke$arity$1(db) === true;
var eval_results = cljs.core.conj.call(null,new cljs.core.Keyword(null,"eval-results","eval-results",553789722).cljs$core$IFn$_invoke$arity$1(db),eval_result);
var str_results = cljs.core.apply.call(null,cljs.core.str,cljs.core.reverse.call(null,repl.repl.events.format_results.call(null,show_times_QMARK_,eval_results)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"eval-results","eval-results",553789722),eval_results),new cljs.core.Keyword("repl.repl.code-mirror","set-cm-value","repl.repl.code-mirror/set-cm-value",1379864027),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),str_results,new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768),code_mirror], null)], null);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("repl.repl.events","show-times","repl.repl.events/show-times",-1158110349),(function (p__33300,p__33301){
var map__33302 = p__33300;
var map__33302__$1 = cljs.core.__destructure_map.call(null,map__33302);
var db = cljs.core.get.call(null,map__33302__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33303 = p__33301;
var _ = cljs.core.nth.call(null,vec__33303,(0),null);
var show_times = cljs.core.nth.call(null,vec__33303,(1),null);
var code_mirror = new cljs.core.Keyword(null,"eval-code-mirror","eval-code-mirror",1904715227).cljs$core$IFn$_invoke$arity$1(db);
var show_times_QMARK_ = show_times === true;
var eval_results = new cljs.core.Keyword(null,"eval-results","eval-results",553789722).cljs$core$IFn$_invoke$arity$1(db);
var str_results = cljs.core.apply.call(null,cljs.core.str,cljs.core.reverse.call(null,repl.repl.events.format_results.call(null,show_times_QMARK_,eval_results)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"show-times","show-times",1881194220),show_times),new cljs.core.Keyword("repl.repl.code-mirror","set-cm-value","repl.repl.code-mirror/set-cm-value",1379864027),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),str_results,new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768),code_mirror], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("repl.repl.events","eval-code-mirror","repl.repl.events/eval-code-mirror",211894630),(function (db,p__33306){
var vec__33307 = p__33306;
var _ = cljs.core.nth.call(null,vec__33307,(0),null);
var code_mirror = cljs.core.nth.call(null,vec__33307,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"eval-code-mirror","eval-code-mirror",1904715227),code_mirror);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("repl.repl.events","team-bootstrap","repl.repl.events/team-bootstrap",1702805467),(function (db,p__33310){
var vec__33311 = p__33310;
var _ = cljs.core.nth.call(null,vec__33311,(0),null);
var boot = cljs.core.nth.call(null,vec__33311,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bootstrap","bootstrap",-462579128),boot);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("repl.repl.events",">repl-eval","repl.repl.events/>repl-eval",1570635902),(function (p__33314){
var vec__33315 = p__33314;
var source = cljs.core.nth.call(null,vec__33315,(0),null);
var user = cljs.core.nth.call(null,vec__33315,(1),null);
var form = cljs.core.nth.call(null,vec__33315,(2),null);
if(clojure.string.blank_QMARK_.call(null,form)){
return null;
} else {
repl.repl.ws.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl-repl","eval","repl-repl/eval",-532966198),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"team-name","team-name",1475836072),"team-name",new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"forms","forms",2045992350),form], null)], null),(function (){var or__4160__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(form);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return repl.repl.events.default_server_timeout;
}
})());

if(cljs.core._EQ_.call(null,repl.repl.events.system_user,user)){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","input-history","repl.repl.events/input-history",1027558409),form], null));
}
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("repl.repl.events","eval","repl.repl.events/eval",-1957607306),(function (p__33318,_){
var map__33319 = p__33318;
var map__33319__$1 = cljs.core.__destructure_map.call(null,map__33319);
var db = cljs.core.get.call(null,map__33319__$1,new cljs.core.Keyword(null,"db","db",993250759));
var form = new cljs.core.Keyword(null,"current-form","current-form",1889534560).cljs$core$IFn$_invoke$arity$1(db);
var user = new cljs.core.Keyword("repl.repl.user","user","repl.repl.user/user",-1352198451).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"form-to-eval","form-to-eval",-376330436),form),new cljs.core.Keyword("repl.repl.events",">repl-eval","repl.repl.events/>repl-eval",1570635902),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),user,form], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("repl.repl.events","clojure-version","repl.repl.events/clojure-version",612994703),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl.repl.events",">repl-eval","repl.repl.events/>repl-eval",1570635902),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),repl.repl.events.system_user,"*clojure-version*"], null)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("repl.repl.events",">login","repl.repl.events/>login",-1181147946),(function (p__33320){
var map__33321 = p__33320;
var map__33321__$1 = cljs.core.__destructure_map.call(null,map__33321);
var options = cljs.core.get.call(null,map__33321__$1,new cljs.core.Keyword(null,"options","options",99638489));
var timeout = cljs.core.get.call(null,map__33321__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var user = repl.repl.user.__GT_user.call(null,new cljs.core.Keyword("repl.repl.user","name","repl.repl.user/name",1106532198).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword("repl.repl.user","uid","repl.repl.user/uid",1302646803).cljs$core$IFn$_invoke$arity$1(options));
return repl.repl.ws.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl-repl","login","repl-repl/login",-446702476),user], null),(function (){var or__4160__auto__ = timeout;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return repl.repl.events.default_server_timeout;
}
})(),(function (reply){
if(((taoensso.sente.cb_success_QMARK_.call(null,reply)) && (cljs.core._EQ_.call(null,reply,new cljs.core.Keyword(null,"login-ok","login-ok",-314596002))))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","logged-in-user","repl.repl.events/logged-in-user",805419919),user], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","clojure-version","repl.repl.events/clojure-version",612994703)], null));
} else {
return alert("Login failed");
}
}));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("repl.repl.events","login","repl.repl.events/login",1984115176),(function (p__33322,p__33323){
var map__33324 = p__33322;
var map__33324__$1 = cljs.core.__destructure_map.call(null,map__33324);
var db = cljs.core.get.call(null,map__33324__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33325 = p__33323;
var _ = cljs.core.nth.call(null,vec__33325,(0),null);
var login_options = cljs.core.nth.call(null,vec__33325,(1),null);
var temp__5753__auto__ = new cljs.core.Keyword("repl.repl.user","uid","repl.repl.user/uid",1302646803).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(temp__5753__auto__)){
var uid = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"proposed-user","proposed-user",510024205),new cljs.core.Keyword("repl.repl.user","name","repl.repl.user/name",1106532198).cljs$core$IFn$_invoke$arity$1(login_options),new cljs.core.Keyword("repl.repl.user","name","repl.repl.user/name",1106532198),null),new cljs.core.Keyword("repl.repl.events",">login","repl.repl.events/>login",-1181147946),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),cljs.core.assoc.call(null,login_options,new cljs.core.Keyword("repl.repl.user","uid","repl.repl.user/uid",1302646803),uid)], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("repl.repl.events",">logout","repl.repl.events/>logout",-1310249416),(function (p__33328){
var map__33329 = p__33328;
var map__33329__$1 = cljs.core.__destructure_map.call(null,map__33329);
var options = cljs.core.get.call(null,map__33329__$1,new cljs.core.Keyword(null,"options","options",99638489));
var timeout = cljs.core.get.call(null,map__33329__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
return repl.repl.ws.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl-repl","logout","repl-repl/logout",-292396546),options], null),(function (){var or__4160__auto__ = timeout;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return repl.repl.events.default_server_timeout;
}
})());
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("repl.repl.events","logout","repl.repl.events/logout",-2085275790),(function (p__33330,_){
var map__33331 = p__33330;
var map__33331__$1 = cljs.core.__destructure_map.call(null,map__33331);
var db = cljs.core.get.call(null,map__33331__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto__ = new cljs.core.Keyword("repl.repl.user","user","repl.repl.user/user",-1352198451).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(temp__5753__auto__)){
var user = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.call(null,db,new cljs.core.Keyword("repl.repl.user","user","repl.repl.user/user",-1352198451)),new cljs.core.Keyword("repl.repl.events",">logout","repl.repl.events/>logout",-1310249416),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),user], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("repl.repl.events","show-add-lib-panel","repl.repl.events/show-add-lib-panel",1436769906),(function (db,p__33332){
var vec__33333 = p__33332;
var _ = cljs.core.nth.call(null,vec__33333,(0),null);
var show_QMARK_ = cljs.core.nth.call(null,vec__33333,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"show-add-lib-panel","show-add-lib-panel",-1733709335),show_QMARK_);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("repl.repl.events","add-lib","repl.repl.events/add-lib",1125902198),(function (cofx,p__33336){
var vec__33337 = p__33336;
var _ = cljs.core.nth.call(null,vec__33337,(0),null);
var map__33340 = cljs.core.nth.call(null,vec__33337,(1),null);
var map__33340__$1 = cljs.core.__destructure_map.call(null,map__33340);
var lib = map__33340__$1;
var name = cljs.core.get.call(null,map__33340__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var version = cljs.core.get.call(null,map__33340__$1,new cljs.core.Keyword(null,"version","version",425292698));
var url = cljs.core.get.call(null,map__33340__$1,new cljs.core.Keyword(null,"url","url",276297046));
var sha = cljs.core.get.call(null,map__33340__$1,new cljs.core.Keyword(null,"sha","sha",-950317251));
var maven = cljs.core.get.call(null,map__33340__$1,new cljs.core.Keyword(null,"maven","maven",155779801));
var lib_spec = ["(add-lib '",clojure.string.trim.call(null,name)," {",(cljs.core.truth_(maven)?[":mvn/version \"",clojure.string.trim.call(null,version),"\""].join(''):[":git/url \"",clojure.string.trim.call(null,url),"\" :sha \"",clojure.string.trim.call(null,sha),"\""].join('')),"})"].join('');
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","show-add-lib-panel","repl.repl.events/show-add-lib-panel",1436769906),false], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"proposed-lib","proposed-lib",-963409834),lib),new cljs.core.Keyword("repl.repl.events",">repl-eval","repl.repl.events/>repl-eval",1570635902),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),repl.repl.events.system_user,lib_spec], null)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("repl.repl.events",">current-form","repl.repl.events/>current-form",382170427),(function (p__33341){
var vec__33342 = p__33341;
var user = cljs.core.nth.call(null,vec__33342,(0),null);
var user_count = cljs.core.nth.call(null,vec__33342,(1),null);
var patch = cljs.core.nth.call(null,vec__33342,(2),null);
if((user_count > (1))){
return repl.repl.ws.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl-repl","keystrokes","repl-repl/keystrokes",1265683511),repl.repl.messages.__GT_keystrokes.call(null,patch,user)], null));
} else {
return null;
}
}));
repl.repl.events.form_differ = (function repl$repl$events$form_differ(current_form,previous_form){
var differ = (new diff_match_patch());
return differ.patch_toText(differ.patch_make(differ.diff_main(previous_form,current_form)));
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("repl.repl.events","current-form","repl.repl.events/current-form",758619799),(function (p__33345,p__33346){
var map__33347 = p__33345;
var map__33347__$1 = cljs.core.__destructure_map.call(null,map__33347);
var db = cljs.core.get.call(null,map__33347__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33348 = p__33346;
var _ = cljs.core.nth.call(null,vec__33348,(0),null);
var current_form = cljs.core.nth.call(null,vec__33348,(1),null);
if(clojure.string.blank_QMARK_.call(null,clojure.string.trim.call(null,current_form))){
return null;
} else {
var prev_form = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"current-form","current-form",1889534560).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "";
}
})();
var user = new cljs.core.Keyword("repl.repl.user","user","repl.repl.user/user",-1352198451).cljs$core$IFn$_invoke$arity$1(db);
var user_count = cljs.core.count.call(null,new cljs.core.Keyword("repl.repl.user","users","repl.repl.user/users",686298518).cljs$core$IFn$_invoke$arity$1(db));
var diff = repl.repl.events.form_differ.call(null,current_form,prev_form);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-form","current-form",1889534560),current_form),new cljs.core.Keyword("repl.repl.events",">current-form","repl.repl.events/>current-form",382170427),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [user,user_count,diff], null)], null);
}
}));
repl.repl.events.next_prev = (function repl$repl$events$next_prev(db,f){
var index = f.call(null,new cljs.core.Keyword(null,"history-index","history-index",-394704427).cljs$core$IFn$_invoke$arity$1(db));
var history = new cljs.core.Keyword(null,"input-history","input-history",-2110310510).cljs$core$IFn$_invoke$arity$1(db);
var item = cljs.core.nth.call(null,history,index,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
if(cljs.core._EQ_.call(null,item,new cljs.core.Keyword(null,"not-found","not-found",-629079980))){
return db;
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"history-index","history-index",-394704427),index,new cljs.core.Keyword(null,"restore-item","restore-item",-522170560),item,new cljs.core.Keyword(null,"current-form","current-form",1889534560),item);
}
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("repl.repl.events","history-prev","repl.repl.events/history-prev",1419520472),(function (p__33351,_){
var map__33352 = p__33351;
var map__33352__$1 = cljs.core.__destructure_map.call(null,map__33352);
var db = cljs.core.get.call(null,map__33352__$1,new cljs.core.Keyword(null,"db","db",993250759));
var db__$1 = repl.repl.events.next_prev.call(null,db,cljs.core.dec);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db__$1,new cljs.core.Keyword("repl.repl.code-mirror","set-cm-value","repl.repl.code-mirror/set-cm-value",1379864027),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768),new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768).cljs$core$IFn$_invoke$arity$1(db__$1),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"current-form","current-form",1889534560).cljs$core$IFn$_invoke$arity$1(db__$1)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("repl.repl.events","history-next","repl.repl.events/history-next",-965884701),(function (p__33353,_){
var map__33354 = p__33353;
var map__33354__$1 = cljs.core.__destructure_map.call(null,map__33354);
var db = cljs.core.get.call(null,map__33354__$1,new cljs.core.Keyword(null,"db","db",993250759));
var db__$1 = repl.repl.events.next_prev.call(null,db,cljs.core.inc);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db__$1,new cljs.core.Keyword("repl.repl.code-mirror","set-cm-value","repl.repl.code-mirror/set-cm-value",1379864027),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768),new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768).cljs$core$IFn$_invoke$arity$1(db__$1),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"current-form","current-form",1889534560).cljs$core$IFn$_invoke$arity$1(db__$1)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("repl.repl.events","logged-in-user","repl.repl.events/logged-in-user",805419919),(function (db,p__33355){
var vec__33356 = p__33355;
var _ = cljs.core.nth.call(null,vec__33356,(0),null);
var user = cljs.core.nth.call(null,vec__33356,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("repl.repl.user","user","repl.repl.user/user",-1352198451),user);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("repl.repl.events","toggle-others","repl.repl.events/toggle-others",-2062715234),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("repl.repl.events","other-visibility","repl.repl.events/other-visibility",865339284),cljs.core.not.call(null,new cljs.core.Keyword("repl.repl.events","other-visibility","repl.repl.events/other-visibility",865339284).cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("repl.repl.events","code-mirror","repl.repl.events/code-mirror",-1790059241),(function (db,p__33359){
var vec__33360 = p__33359;
var _ = cljs.core.nth.call(null,vec__33360,(0),null);
var code_mirror = cljs.core.nth.call(null,vec__33360,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768),code_mirror);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("repl.repl.events","other-user-code-mirror","repl.repl.events/other-user-code-mirror",581609148),(function (db,p__33363){
var vec__33364 = p__33363;
var _ = cljs.core.nth.call(null,vec__33364,(0),null);
var code_mirror = cljs.core.nth.call(null,vec__33364,(1),null);
var user = cljs.core.nth.call(null,vec__33364,(2),null);
var user_key = cljs.core.first.call(null,user);
var cm_entries = new cljs.core.Keyword(null,"other-user-code-mirrors","other-user-code-mirrors",852519562).cljs$core$IFn$_invoke$arity$1(db);
var cm_entry = cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,user_key,code_mirror);
var cm_update = cljs.core.merge.call(null,cm_entries,cm_entry);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"other-user-code-mirrors","other-user-code-mirrors",852519562),cm_update);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("repl.repl.events","users","repl.repl.events/users",-2115998136),(function (db,p__33367){
var vec__33368 = p__33367;
var _ = cljs.core.nth.call(null,vec__33368,(0),null);
var users = cljs.core.nth.call(null,vec__33368,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("repl.repl.user","users","repl.repl.user/users",686298518),users);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("repl.repl.events","other-user-keystrokes","repl.repl.events/other-user-keystrokes",1477994083),(function (p__33371,p__33372){
var map__33373 = p__33371;
var map__33373__$1 = cljs.core.__destructure_map.call(null,map__33373);
var db = cljs.core.get.call(null,map__33373__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33374 = p__33372;
var _ = cljs.core.nth.call(null,vec__33374,(0),null);
var map__33377 = cljs.core.nth.call(null,vec__33374,(1),null);
var map__33377__$1 = cljs.core.__destructure_map.call(null,map__33377);
var user = cljs.core.get.call(null,map__33377__$1,new cljs.core.Keyword("repl.repl.user","user","repl.repl.user/user",-1352198451));
var patch = cljs.core.get.call(null,map__33377__$1,new cljs.core.Keyword("repl.repl.messages","patch","repl.repl.messages/patch",-1522543087));
if(cljs.core._EQ_.call(null,user,new cljs.core.Keyword("repl.repl.user","user","repl.repl.user/user",-1352198451).cljs$core$IFn$_invoke$arity$1(db))){
return null;
} else {
var editor_key = cljs.core.keyword.call(null,new cljs.core.Keyword("repl.repl.user","name","repl.repl.user/name",1106532198).cljs$core$IFn$_invoke$arity$1(user));
var code_mirrors = new cljs.core.Keyword(null,"other-user-code-mirrors","other-user-code-mirrors",852519562).cljs$core$IFn$_invoke$arity$1(db);
var code_mirror = cljs.core.get.call(null,code_mirrors,editor_key);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword("repl.repl.code-mirror","patch-cm-value","repl.repl.code-mirror/patch-cm-value",-1432812340),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768),code_mirror,new cljs.core.Keyword(null,"patch","patch",380775109),patch], null)], null);
}
}));
