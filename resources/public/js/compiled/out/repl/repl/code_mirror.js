// Compiled by ClojureScript 1.10.844 {}
goog.provide('repl.repl.code_mirror');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljsjs.codemirror');
goog.require('cljsjs.codemirror.mode.clojure');
goog.require('cljsjs.codemirror.addon.edit.matchbrackets');
goog.require('cljsjs.codemirror.addon.hint.show_hint');
goog.require('cljsjs.parinfer_codemirror');
goog.require('cljsjs.parinfer');
goog.require('cljsjs.google_diff_match_patch');
repl.repl.code_mirror.text_area = (function repl$repl$code_mirror$text_area(id){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"default-value","default-value",232220170),""], null)], null);
});
});
repl.repl.code_mirror.parinfer = (function repl$repl$code_mirror$parinfer(dom_node,config){
var editor_options = cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"clojure","clojure",438975815)], null),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(config)));
var code_mirror = CodeMirror.fromTextArea(dom_node,editor_options);
var editor_width = cljs.core.get_in.call(null,config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"width","width",-384071477)], null),"100%");
var editor_height = cljs.core.get_in.call(null,config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"height","height",1025178622)], null),"100%");
code_mirror.setSize(editor_width,editor_height);

parinferCodeMirror.init(code_mirror);

return code_mirror;
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("repl.repl.code-mirror","set-cm-value","repl.repl.code-mirror/set-cm-value",1379864027),(function (p__36449){
var map__36450 = p__36449;
var map__36450__$1 = cljs.core.__destructure_map.call(null,map__36450);
var code_mirror = cljs.core.get.call(null,map__36450__$1,new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768));
var value = cljs.core.get.call(null,map__36450__$1,new cljs.core.Keyword(null,"value","value",305978217));
return code_mirror.setValue(value);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("repl.repl.code-mirror","patch-cm-value","repl.repl.code-mirror/patch-cm-value",-1432812340),(function (p__36451){
var map__36452 = p__36451;
var map__36452__$1 = cljs.core.__destructure_map.call(null,map__36452);
var code_mirror = cljs.core.get.call(null,map__36452__$1,new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768));
var patch = cljs.core.get.call(null,map__36452__$1,new cljs.core.Keyword(null,"patch","patch",380775109));
var value = code_mirror.getValue();
var differ = (new diff_match_patch());
var js_patch = differ.patch_fromText(patch);
var vec__36453 = differ.patch_apply(js_patch,value);
var new_val = cljs.core.nth.call(null,vec__36453,(0),null);
var patched_QMARK_ = cljs.core.nth.call(null,vec__36453,(1),null);
if(cljs.core.truth_(patched_QMARK_)){
return code_mirror.setValue(new_val);
} else {
return null;
}
}));

//# sourceMappingURL=code_mirror.js.map
