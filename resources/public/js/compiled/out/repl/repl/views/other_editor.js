// Compiled by ClojureScript 1.10.844 {}
goog.provide('repl.repl.views.other_editor');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('re_com.splits');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('repl.repl.helpers');
goog.require('repl.repl.events');
goog.require('repl.repl.code_mirror');
goog.require('repl.repl.user');
if((typeof repl !== 'undefined') && (typeof repl.repl !== 'undefined') && (typeof repl.repl.views !== 'undefined') && (typeof repl.repl.views.other_editor !== 'undefined') && (typeof repl.repl.views.other_editor.other_editors_style !== 'undefined')){
} else {
repl.repl.views.other_editor.other_editors_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"20px 20px 20px 10px"], null);
}
repl.repl.views.other_editor.other_editor_did_mount = (function repl$repl$views$other_editor$other_editor_did_mount(user){
return (function (this$){
var node = reagent.dom.dom_node.call(null,this$);
var options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lineWrapping","lineWrapping",1248501985),true,new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true], null)], null);
var code_mirror = repl.repl.code_mirror.parinfer.call(null,node,options);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","other-user-code-mirror","repl.repl.events/other-user-code-mirror",581609148),code_mirror,user], null));
});
});
repl.repl.views.other_editor.other_component = (function repl$repl$views$other_editor$other_component(user){
var editor_name = new cljs.core.Keyword("repl.repl.user","name","repl.repl.user/name",1106532198).cljs$core$IFn$_invoke$arity$1(user);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),repl.repl.views.other_editor.other_editor_did_mount.call(null,user),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),repl.repl.code_mirror.text_area.call(null,editor_name),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (){
return null;
}),new cljs.core.Keyword(null,"display-name","display-name",694513143),["network-editor-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(editor_name)].join('')], null));
});
if((typeof repl !== 'undefined') && (typeof repl.repl !== 'undefined') && (typeof repl.repl.views !== 'undefined') && (typeof repl.repl.views.other_editor !== 'undefined') && (typeof repl.repl.views.other_editor.other_panel_style !== 'undefined')){
} else {
repl.repl.views.other_editor.other_panel_style = cljs.core.merge.call(null,re_com.core.flex_child_style.call(null,"1"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Menlo, Lucida Console, Monaco, monospace",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px",new cljs.core.Keyword(null,"color","color",1011675173),"lightgrey",new cljs.core.Keyword(null,"border","border",1444987323),"0.5px solid lightgrey",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 5px 5px 5px"], null));
}
repl.repl.views.other_editor.other_panel = (function repl$repl$views$other_editor$other_panel(user,style){
var user_name = new cljs.core.Keyword("repl.repl.user","name","repl.repl.user/name",1106532198).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,user));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"style","style",-496642736),repl.repl.views.other_editor.other_panel_style,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.other_editor.other_component,user], null)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"20px",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),user_name], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.helpers.icon_button.call(null,"keyboard"),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.helpers.icon_button.call(null,"comment-more"),repl.repl.helpers.icon_button.call(null,"comment-outline")], null))], null)], null)], null)], null)], null)], null);
});
repl.repl.views.other_editor.waiting_panel = (function repl$repl$views$other_editor$waiting_panel(){
var panel_style = cljs.core.select_keys.call(null,repl.repl.views.other_editor.other_panel_style,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"color","color",1011675173)], null));
var large = cljs.core.assoc.call(null,panel_style,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px");
var medium = cljs.core.assoc.call(null,panel_style,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px");
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"around","around",-265975553),new cljs.core.Keyword(null,"style","style",-496642736),repl.repl.views.other_editor.other_panel_style,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"style","style",-496642736),large,new cljs.core.Keyword(null,"label","label",1718410804),"WHERE ARE THE OTHERS\uFE0F?"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"style","style",-496642736),medium,new cljs.core.Keyword(null,"label","label",1718410804),"Hint: drag to change the size of the window"], null)], null)], null);
});
repl.repl.views.other_editor.other_panels = (function repl$repl$views$other_editor$other_panels(other_users){
var border = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid lightgrey"], null);
var gray = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightgrey",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null),border);
var black = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),border);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"2px",new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__31703_SHARP_,p2__31704_SHARP_){
return repl.repl.views.other_editor.other_panel.call(null,p1__31703_SHARP_,p2__31704_SHARP_);
}),other_users,cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gray,black], null))))], null);
});

//# sourceMappingURL=other_editor.js.map
