// Compiled by ClojureScript 1.10.516 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.global$module$react_dom.unmountComponentAtNode.cljs$core$IFn$_invoke$arity$1 ? reagent.dom.global$module$react_dom.unmountComponentAtNode.cljs$core$IFn$_invoke$arity$1(container) : reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container));
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__4212 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__4213 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__4213;

try{var G__4214 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__4215 = container;
var G__4216 = ((function (G__4214,G__4215,_STAR_always_update_STAR__orig_val__4212,_STAR_always_update_STAR__temp_val__4213){
return (function (){
var _STAR_always_update_STAR__orig_val__4217 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__4218 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__4218;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__4217;
}});})(G__4214,G__4215,_STAR_always_update_STAR__orig_val__4212,_STAR_always_update_STAR__temp_val__4213))
;
return (reagent.dom.global$module$react_dom.render.cljs$core$IFn$_invoke$arity$3 ? reagent.dom.global$module$react_dom.render.cljs$core$IFn$_invoke$arity$3(G__4214,G__4215,G__4216) : reagent.dom.global$module$react_dom.render.call(null,G__4214,G__4215,G__4216));
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__4212;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__4220 = arguments.length;
switch (G__4220) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.global$module$react_dom.findDOMNode.cljs$core$IFn$_invoke$arity$1 ? reagent.dom.global$module$react_dom.findDOMNode.cljs$core$IFn$_invoke$arity$1(this$) : reagent.dom.global$module$react_dom.findDOMNode.call(null,this$));
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__4222_4226 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.dom.roots)));
var chunk__4223_4227 = null;
var count__4224_4228 = (0);
var i__4225_4229 = (0);
while(true){
if((i__4225_4229 < count__4224_4228)){
var v_4230 = chunk__4223_4227.cljs$core$IIndexed$_nth$arity$2(null,i__4225_4229);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_4230);


var G__4231 = seq__4222_4226;
var G__4232 = chunk__4223_4227;
var G__4233 = count__4224_4228;
var G__4234 = (i__4225_4229 + (1));
seq__4222_4226 = G__4231;
chunk__4223_4227 = G__4232;
count__4224_4228 = G__4233;
i__4225_4229 = G__4234;
continue;
} else {
var temp__5720__auto___4235 = cljs.core.seq(seq__4222_4226);
if(temp__5720__auto___4235){
var seq__4222_4236__$1 = temp__5720__auto___4235;
if(cljs.core.chunked_seq_QMARK_(seq__4222_4236__$1)){
var c__4550__auto___4237 = cljs.core.chunk_first(seq__4222_4236__$1);
var G__4238 = cljs.core.chunk_rest(seq__4222_4236__$1);
var G__4239 = c__4550__auto___4237;
var G__4240 = cljs.core.count(c__4550__auto___4237);
var G__4241 = (0);
seq__4222_4226 = G__4238;
chunk__4223_4227 = G__4239;
count__4224_4228 = G__4240;
i__4225_4229 = G__4241;
continue;
} else {
var v_4242 = cljs.core.first(seq__4222_4236__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_4242);


var G__4243 = cljs.core.next(seq__4222_4236__$1);
var G__4244 = null;
var G__4245 = (0);
var G__4246 = (0);
seq__4222_4226 = G__4243;
chunk__4223_4227 = G__4244;
count__4224_4228 = G__4245;
i__4225_4229 = G__4246;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
