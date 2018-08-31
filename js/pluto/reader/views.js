// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('pluto.reader.blocks');
goog.require('pluto.reader.errors');
goog.require('pluto.reader.permissions');
goog.require('pluto.utils');
goog.require('re_frame.core');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader$views_SLASH_form,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$string,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$number,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.cst$kw$symbol,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$element,cljs.core.cst$kw$pluto$reader$views_SLASH_element),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,cljs.core.cst$kw$number,cljs.core.cst$kw$symbol,cljs.core.cst$kw$element], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$pluto$reader$views_SLASH_element], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.number_QMARK_,cljs.core.symbol_QMARK_,cljs.core.cst$kw$pluto$reader$views_SLASH_element], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader$views_SLASH_element,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$tag,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$symbol,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_),cljs.core.cst$kw$attrs,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$children,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.cst$kw$pluto$reader$views_SLASH_form)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tag,cljs.core.cst$kw$attrs,cljs.core.cst$kw$children], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol,cljs.core.cst$kw$fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.fn_QMARK_], null),null),cljs.core.map_QMARK_,cljs.spec.alpha.rep_impl(cljs.core.cst$kw$pluto$reader$views_SLASH_form,cljs.core.cst$kw$pluto$reader$views_SLASH_form)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$symbol,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_),cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.cst$kw$pluto$reader$views_SLASH_form)], null)));
pluto.reader.views.event_handler__GT_selector = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_press,cljs.core.constantly(true),cljs.core.cst$kw$on_DASH_change,(function (p1__2173_SHARP_){
return p1__2173_SHARP_.nativeEvent.text;
})], null);
pluto.reader.views.parse_hiccup_children = (function pluto$reader$views$parse_hiccup_children(opts,children){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__2175_SHARP_,p2__2174_SHARP_){
var map__2176 = (pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$2(opts,p2__2174_SHARP_) : pluto.reader.views.parse.call(null,opts,p2__2174_SHARP_));
var map__2176__$1 = ((((!((map__2176 == null)))?(((((map__2176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2176):map__2176);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2176__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2176__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__2175_SHARP_,cljs.core.cst$kw$data,cljs.core.conj,data),errors);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.PersistentVector.EMPTY], null),children);
});
pluto.reader.views.resolve_element = (function pluto$reader$views$resolve_element(p__2178,o){
var map__2179 = p__2178;
var map__2179__$1 = ((((!((map__2179 == null)))?(((((map__2179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2179):map__2179);
var components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2179__$1,cljs.core.cst$kw$components);
if(cljs.core.fn_QMARK_(o)){
return o;
} else {
if((o instanceof cljs.core.Symbol)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(components,o);
} else {
return null;
}
}
});
pluto.reader.views.event_QMARK_ = (function pluto$reader$views$event_QMARK_(prop_value){
return ((cljs.core.list_QMARK_(prop_value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$event,cljs.core.first(prop_value))));
});
pluto.reader.views.create_event_handler = (function pluto$reader$views$create_event_handler(re_frame_event,selector){
return (function (event_value){
var G__2181 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(re_frame_event,(selector.cljs$core$IFn$_invoke$arity$1 ? selector.cljs$core$IFn$_invoke$arity$1(event_value) : selector.call(null,event_value)));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2181) : re_frame.core.dispatch.call(null,G__2181));
});
});
pluto.reader.views.resolve_element_properties = (function pluto$reader$views$resolve_element_properties(p__2182,properties){
var map__2183 = p__2182;
var map__2183__$1 = ((((!((map__2183 == null)))?(((((map__2183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2183):map__2183);
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2183__$1,cljs.core.cst$kw$permissions);
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2183__$1,cljs.core.cst$kw$events);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__2183,map__2183__$1,permissions,events){
return (function (acc,p__2185){
var vec__2186 = p__2185;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2186,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2186,(1),null);
if(cljs.core.contains_QMARK_(pluto.reader.views.event_handler__GT_selector,k)){
if(cljs.core.not(pluto.reader.views.event_QMARK_(v))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,cljs.core.cst$kw$errors,cljs.core.conj,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_event_DASH_handler,v));
} else {
var vec__2189 = v;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2189,(0),null);
var vec__2192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2189,(1),null);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2192,(0),null);
var event_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2192,(1),null);
var re_frame_event = vec__2189;
if(!(cljs.core.contains_QMARK_(events,event_name))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,cljs.core.cst$kw$errors,cljs.core.conj,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_event_DASH_not_DASH_exposed,event_name));
} else {
if(cljs.core.not(pluto.reader.permissions.allowed_path_QMARK_(event_args,cljs.core.cst$kw$write.cljs$core$IFn$_invoke$arity$1(permissions)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,cljs.core.cst$kw$errors,cljs.core.conj,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_forbidden_DASH_write_DASH_path,event_args));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(acc,cljs.core.cst$kw$data,cljs.core.assoc,k,pluto.reader.views.create_event_handler(re_frame_event,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pluto.reader.views.event_handler__GT_selector,k)));

}
}
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(acc,cljs.core.cst$kw$data,cljs.core.assoc,k,v);
}
});})(map__2183,map__2183__$1,permissions,events))
,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$errors,cljs.core.PersistentVector.EMPTY], null),properties);
});
pluto.reader.views.parse_hiccup_element = (function pluto$reader$views$parse_hiccup_element(p__2196,o){
var map__2197 = p__2196;
var map__2197__$1 = ((((!((map__2197 == null)))?(((((map__2197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2197):map__2197);
var opts = map__2197__$1;
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2197__$1,cljs.core.cst$kw$capacities);
var explain = cljs.spec.alpha.explain_data(cljs.core.cst$kw$pluto$reader$views_SLASH_form,o);
if(cljs.core.truth_((function (){var or__3936__auto__ = (o instanceof cljs.core.Symbol);
if(or__3936__auto__){
return or__3936__auto__;
} else {
return pluto.utils.primitive_QMARK_(o);
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,o], null);
} else {
if(cljs.core.vector_QMARK_(o)){
var vec__2199 = o;
var seq__2200 = cljs.core.seq(vec__2199);
var first__2201 = cljs.core.first(seq__2200);
var seq__2200__$1 = cljs.core.next(seq__2200);
var element = first__2201;
var first__2201__$1 = cljs.core.first(seq__2200__$1);
var seq__2200__$2 = cljs.core.next(seq__2200__$1);
var properties = first__2201__$1;
var children = seq__2200__$2;
var component = pluto.reader.views.resolve_element(capacities,element);
var map__2202 = pluto.reader.views.resolve_element_properties(capacities,properties);
var map__2202__$1 = ((((!((map__2202 == null)))?(((((map__2202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2202):map__2202);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2202__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2202__$1,cljs.core.cst$kw$errors);
var G__2204 = (function (){var m = pluto.reader.views.parse_hiccup_children(opts,children);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$data,((function (m,vec__2199,seq__2200,first__2201,seq__2200__$1,element,first__2201__$1,seq__2200__$2,properties,children,component,map__2202,map__2202__$1,data,errors,explain,map__2197,map__2197__$1,opts,capacities){
return (function (p1__2195_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3936__auto__ = component;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return element;
}
})(),data], null),p1__2195_SHARP_);
});})(m,vec__2199,seq__2200,first__2201,seq__2200__$1,element,first__2201__$1,seq__2200__$2,properties,children,component,map__2202,map__2202__$1,data,errors,explain,map__2197,map__2197__$1,opts,capacities))
);
})();
var G__2204__$1 = (((component == null))?pluto.reader.errors.accumulate_errors(G__2204,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_component,element)], null)):G__2204);
if(cljs.core.seq(errors)){
return pluto.reader.errors.accumulate_errors(G__2204__$1,errors);
} else {
return G__2204__$1;
}
} else {
return null;
}
}
});
pluto.reader.views.parse = (function pluto$reader$views$parse(opts,o){
if(cljs.core.list_QMARK_(o)){
var map__2205 = (pluto.reader.blocks.parse.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.blocks.parse.cljs$core$IFn$_invoke$arity$2(opts,o) : pluto.reader.blocks.parse.call(null,opts,o));
var map__2205__$1 = ((((!((map__2205 == null)))?(((((map__2205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2205):map__2205);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2205__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2205__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return (pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$2(opts,data) : pluto.reader.views.parse.call(null,opts,data));
}
} else {
return pluto.reader.views.parse_hiccup_element(opts,o);

}
});
