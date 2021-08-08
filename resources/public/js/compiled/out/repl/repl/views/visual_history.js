// Compiled by ClojureScript 1.10.844 {}
goog.provide('repl.repl.views.visual_history');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('re_com.splits');
goog.require('repl.repl.events');
goog.require('repl.repl.subs');
if((typeof repl !== 'undefined') && (typeof repl.repl !== 'undefined') && (typeof repl.repl.views !== 'undefined') && (typeof repl.repl.views.visual_history !== 'undefined') && (typeof repl.repl.views.visual_history.label_style !== 'undefined')){
} else {
repl.repl.views.visual_history.label_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Menlo, Lucida Console, Monaco, monospace",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px",new cljs.core.Keyword(null,"color","color",1011675173),"grey"], null);
}
if((typeof repl !== 'undefined') && (typeof repl.repl !== 'undefined') && (typeof repl.repl.views !== 'undefined') && (typeof repl.repl.views.visual_history !== 'undefined') && (typeof repl.repl.views.visual_history.history_style !== 'undefined')){
} else {
repl.repl.views.visual_history.history_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 5px 0px 10px"], null);
}
repl.repl.views.visual_history.history_item_component = (function repl$repl$views$visual_history$history_item_component(p__31697){
var map__31698 = p__31697;
var map__31698__$1 = cljs.core.__destructure_map.call(null,map__31698);
var history = cljs.core.get.call(null,map__31698__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var index = cljs.core.get.call(null,map__31698__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var line_count = cljs.core.count.call(null,clojure.string.split_lines.call(null,clojure.string.trim.call(null,clojure.string.trim_newline.call(null,history))));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-caret-left-circle",new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Send to the editor",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.events","from-history","repl.repl.events/from-history",-385698773),index], null));
})], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.Keyword(null,"model","model",331153215),history,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478)], null),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var x__4249__auto__ = (2);
var y__4250__auto__ = line_count;
return ((x__4249__auto__ > y__4250__auto__) ? x__4249__auto__ : y__4250__auto__);
})(),new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return null;
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"5px"], null)], null)], null);
});
repl.repl.views.visual_history.history_browser_component = (function repl$repl$views$visual_history$history_browser_component(history){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"3px",new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Just Yours or All TBC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"10px"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.scroller,new cljs.core.Keyword(null,"v-scroll","v-scroll",-1842185668),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"h-scroll","h-scroll",-1200000150),new cljs.core.Keyword(null,"off","off",606440789),new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.doall.call(null,cljs.core.reverse.call(null,cljs.core.map.call(null,repl.repl.views.visual_history.history_item_component,history)))], null)], null)], null)], null)], null);
});
repl.repl.views.visual_history.browse_history = (function repl$repl$views$visual_history$browse_history(){
var history = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repl.repl.subs","input-history","repl.repl.subs/input-history",-498676433)], null));
return (function (){
if(cljs.core.seq.call(null,cljs.core.deref.call(null,history))){
var showing_QMARK_ = reagent.core.atom.call(null,false);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_anchor_wrapper,new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_QMARK_,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"left-above","left-above",1205957481),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Browse history",new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-search",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,showing_QMARK_,cljs.core.not);
})], null)], null)], null),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_content_wrapper,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),(function (){
return cljs.core.swap_BANG_.call(null,showing_QMARK_,cljs.core.not);
}),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.visual_history.history_browser_component,cljs.core.deref.call(null,history)], null)], null)], null);
} else {
return null;
}
});
});
repl.repl.views.visual_history.editor_history = (function repl$repl$views$visual_history$editor_history(){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"15px",new cljs.core.Keyword(null,"width","width",-384071477),"15px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 0px 20px 0px"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl.repl.views.visual_history.browse_history], null)], null)], null);
});

//# sourceMappingURL=visual_history.js.map
