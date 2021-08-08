// Compiled by ClojureScript 1.10.844 {}
goog.provide('repl.repl.views.editor');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('re_com.splits');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('repl.repl.code_mirror');
goog.require('repl.repl.events');
goog.require('repl.repl.subs');
goog.require('repl.repl.views.other_editor');
goog.require('repl.repl.views.add_lib');
goog.require('repl.repl.views.show_team_data');
goog.require('repl.repl.views.eval');
goog.require('repl.repl.views.status');
goog.require('repl.repl.user');
if((typeof repl !== 'undefined') && (typeof repl.repl !== 'undefined') && (typeof repl.repl.views !== 'undefined') && (typeof repl.repl.views.editor !== 'undefined') && (typeof repl.repl.views.editor.default_style !== 'undefined')){
} else {
repl.repl.views.editor.default_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Menlo, Lucida Console, Monaco, monospace",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid lightgrey",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 5px 5px 5px"], null);
}
if((typeof repl !== 'undefined') && (typeof repl.repl !== 'undefined') && (typeof repl.repl.views !== 'undefined') && (typeof repl.repl.views.editor !== 'undefined') && (typeof repl.repl.views.editor.eval_panel_style !== 'undefined')){
} else {
repl.repl.views.editor.eval_panel_style = cljs.core.merge.call(null,re_com.core.flex_child_style.call(null,"1"),repl.repl.views.editor.default_style);
}
if((typeof repl !== 'undefined') && (typeof repl.repl !== 'undefined') && (typeof repl.repl.views !== 'undefined') && (typeof repl.repl.views.editor !== 'undefined') && (typeof repl.repl.views.editor.edit_style !== 'undefined')){
} else {
repl.repl.views.editor.edit_style = cljs.core.assoc.call(null,repl.repl.views.editor.default_style,new cljs.core.Keyword(null,"border","border",1444987323),"2px solid lightgrey");
}
if((typeof repl !== 'undefined') && (typeof repl.repl !== 'undefined') && (typeof repl.repl.views !== 'undefined') && (typeof repl.repl.views.editor !== 'undefined') && (typeof repl.repl.views.editor.edit_panel_style !== 'undefined')){
} else {
repl.repl.views.editor.edit_panel_style = cljs.core.merge.call(null,re_com.core.flex_child_style.call(null,"1"),repl.repl.views.editor.edit_style);
}
if((typeof repl !== 'undefined') && (typeof repl.repl !== 'undefined') && (typeof repl.repl.views !== 'undefined') && (typeof repl.repl.views.editor !== 'undefined') && (typeof repl.repl.views.editor.status_style !== 'undefined')){
} else {
repl.repl.views.editor.status_style = cljs.core.merge.call(null,cljs.core.dissoc.call(null,repl.repl.views.editor.default_style,new cljs.core.Keyword(null,"border","border",1444987323)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"lighter",new cljs.core.Keyword(null,"color","color",1011675173),"lightgrey"], null));
}
repl.repl.views.editor.notify_edits = (function repl$repl$views$editor$notify_edits(new_value){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","current-form","repl.repl.events/current-form",758619799),new_value], null));
});
repl.repl.views.editor.editor_did_mount = (function repl$repl$views$editor$editor_did_mount(extra_key_bindings){
return (function (this_textarea){
var node = reagent.dom.dom_node.call(null,this_textarea);
var options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lineWrapping","lineWrapping",1248501985),true,new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),true,new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),true,new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true,new cljs.core.Keyword(null,"extraKeys","extraKeys",1380834830),extra_key_bindings], null)], null);
var code_mirror = repl.repl.code_mirror.parinfer.call(null,node,options);
code_mirror.on("change",(function (cm,_co){
return repl.repl.views.editor.notify_edits.call(null,cm.getValue());
}));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","code-mirror","repl.repl.events/code-mirror",-1790059241),code_mirror], null));
});
});
repl.repl.views.editor.edit_component = (function repl$repl$views$editor$edit_component(panel_name,extra_key_bindings){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),repl.repl.views.editor.editor_did_mount.call(null,extra_key_bindings),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),repl.repl.code_mirror.text_area.call(null,panel_name),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (){
return null;
}),new cljs.core.Keyword(null,"display-name","display-name",694513143),"local-editor"], null));
});
repl.repl.views.editor.key_binding = (function repl$repl$views$editor$key_binding(key_map,p__33419){
var vec__33420 = p__33419;
var button = cljs.core.nth.call(null,vec__33420,(0),null);
var event = cljs.core.nth.call(null,vec__33420,(1),null);
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.get.call(null,key_map,button),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null));
}));
});
repl.repl.views.editor.extra_key_bindings = (function repl$repl$views$editor$extra_key_bindings(key_map,event_map){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,cljs.core.partial.call(null,repl.repl.views.editor.key_binding,key_map),event_map));
});
repl.repl.views.editor.event_bindings = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enter","enter",1792452624),new cljs.core.Keyword("repl.repl.events","eval","repl.repl.events/eval",-1957607306),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword("repl.repl.events","history-next","repl.repl.events/history-next",-965884701),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword("repl.repl.events","history-next","repl.repl.events/history-next",-965884701),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword("repl.repl.events","history-prev","repl.repl.events/history-prev",1419520472),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword("repl.repl.events","history-prev","repl.repl.events/history-prev",1419520472)], null);
repl.repl.views.editor.edit_panel = (function repl$repl$views$editor$edit_panel(user){
var key_bindings = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.subs","key-bindings","repl.repl.subs/key-bindings",1290073363)], null));
return (function (){
var editor_name = new cljs.core.Keyword("repl.repl.user","name","repl.repl.user/name",1106532198).cljs$core$IFn$_invoke$arity$1(user);
var extra_keys = repl.repl.views.editor.extra_key_bindings.call(null,cljs.core.deref.call(null,key_bindings),repl.repl.views.editor.event_bindings);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"style","style",-496642736),repl.repl.views.editor.edit_panel_style,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.editor.edit_component,editor_name,extra_keys], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"5px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Eval",new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),["Shortcut: ",(function (){var G__33424 = new cljs.core.Keyword(null,"enter","enter",1792452624).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,key_bindings));
if((G__33424 == null)){
return null;
} else {
return cljs.core.name.call(null,G__33424);
}
})()].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"btn-success",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","eval","repl.repl.events/eval",-1957607306)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"5px"], null)], null)], null)], null)], null);
});
});
repl.repl.views.editor.others_panel = (function repl$repl$views$editor$others_panel(other_users){
var visible_count = cljs.core.count.call(null,other_users);
if(cljs.core.truth_((function (){var and__4149__auto__ = visible_count;
if(cljs.core.truth_(and__4149__auto__)){
return (visible_count > (0));
} else {
return and__4149__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.other_editor.other_panels,other_users], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.other_editor.waiting_panel], null);
}
});
repl.repl.views.editor.button_row = (function repl$repl$views$editor$button_row(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"height","height",1025178622),"20px",new cljs.core.Keyword(null,"style","style",-496642736),repl.repl.views.other_editor.other_editors_style,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-power",new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Logout",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","logout","repl.repl.events/logout",-2085275790)], null));
})], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.add_lib.add_lib_panel], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-file-plus",new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Add a dependency",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","show-add-lib-panel","repl.repl.events/show-add-lib-panel",1436769906),true], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.show_team_data.team_data_panel], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-account-add",new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"REPL session invite link",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","show-team-data","repl.repl.events/show-team-data",-1800468426),true], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-accounts-outline",new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Hide / Show other editors",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","toggle-others","repl.repl.events/toggle-others",-2062715234)], null));
})], null)], null)], null)], null);
});
repl.repl.views.editor.editor_repl = (function repl$repl$views$editor$editor_repl(user){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_split,new cljs.core.Keyword(null,"margin","margin",-995903681),"5px",new cljs.core.Keyword(null,"splitter-size","splitter-size",245247616),"5px",new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.editor.edit_panel,user], null),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"style","style",-496642736),repl.repl.views.editor.eval_panel_style,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.eval.eval_panel,user], null)], null)], null)], null);
});
repl.repl.views.editor.main_panels = (function repl$repl$views$editor$main_panels(user){
var other_users = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.subs","other-users","repl.repl.subs/other-users",-1139491548)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"0px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.editor.button_row], null),((cljs.core.not.call(null,cljs.core.seq.call(null,other_users)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.editor.editor_repl,user], null):new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_split,new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),(20),new cljs.core.Keyword(null,"splitter-size","splitter-size",245247616),"5px",new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.editor.others_panel,other_users], null),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.editor.editor_repl,user], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.status.status_bar,user], null)], null)], null);
});
