// Compiled by ClojureScript 1.10.844 {}
goog.provide('repl.repl.views.eval');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('reagent.core');
goog.require('repl.repl.subs');
goog.require('reagent.dom');
goog.require('repl.repl.events');
goog.require('repl.repl.code_mirror');
goog.require('repl.repl.views.visual_history');
if((typeof repl !== 'undefined') && (typeof repl.repl !== 'undefined') && (typeof repl.repl.views !== 'undefined') && (typeof repl.repl.views.eval !== 'undefined') && (typeof repl.repl.views.eval.eval_panel_style !== 'undefined')){
} else {
repl.repl.views.eval.eval_panel_style = cljs.core.merge.call(null,re_com.core.flex_child_style.call(null,"1"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 5px 5px 5px"], null));
}
if((typeof repl !== 'undefined') && (typeof repl.repl !== 'undefined') && (typeof repl.repl.views !== 'undefined') && (typeof repl.repl.views.eval !== 'undefined') && (typeof repl.repl.views.eval.eval_component_style !== 'undefined')){
} else {
repl.repl.views.eval.eval_component_style = cljs.core.merge.call(null,re_com.core.flex_child_style.call(null,"1"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 5px 0px 5px"], null));
}
repl.repl.views.eval.eval_did_mount = (function repl$repl$views$eval$eval_did_mount(){
return (function (this$){
var scrollToBottom = (function repl$repl$views$eval$eval_did_mount_$_scrollToBottom(cm){
return cm.scrollIntoView(({"line": cm.lastLine()}));
});
var node = reagent.dom.dom_node.call(null,this$);
var options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lineWrapping","lineWrapping",1248501985),true,new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true], null)], null);
var code_mirror = repl.repl.code_mirror.parinfer.call(null,node,options);
code_mirror.on("change",(function (){
return scrollToBottom.call(null,code_mirror);
}));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","eval-code-mirror","repl.repl.events/eval-code-mirror",211894630),code_mirror], null));
});
});
repl.repl.views.eval.eval_component = (function repl$repl$views$eval$eval_component(panel_name){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),repl.repl.views.eval.eval_did_mount.call(null),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),repl.repl.code_mirror.text_area.call(null,["eval-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(panel_name)].join('')),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (){
return null;
}),new cljs.core.Keyword(null,"display-name","display-name",694513143),"eval"], null));
});
repl.repl.views.eval.eval_panel = (function repl$repl$views$eval$eval_panel(panel_name){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"style","style",-496642736),repl.repl.views.eval.eval_component_style,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.eval.eval_component,panel_name], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.visual_history.editor_history], null)], null)], null);
});

//# sourceMappingURL=eval.js.map
