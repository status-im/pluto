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
pluto.reader.views.event_handler__GT_selector = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_press,cljs.core.constantly(true),cljs.core.cst$kw$on_DASH_change,(function (p1__1200_SHARP_){
return p1__1200_SHARP_.nativeEvent.text;
})], null);
pluto.reader.views.parse_hiccup_children = (function pluto$reader$views$parse_hiccup_children(opts,children){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__1202_SHARP_,p2__1201_SHARP_){
var map__1203 = (pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$2(opts,p2__1201_SHARP_) : pluto.reader.views.parse.call(null,opts,p2__1201_SHARP_));
var map__1203__$1 = ((((!((map__1203 == null)))?(((((map__1203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1203):map__1203);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1203__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1203__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__1202_SHARP_,cljs.core.cst$kw$data,cljs.core.conj,data),errors);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.PersistentVector.EMPTY], null),children);
});
pluto.reader.views.resolve_component = (function pluto$reader$views$resolve_component(p__1205,o){
var map__1206 = p__1205;
var map__1206__$1 = ((((!((map__1206 == null)))?(((((map__1206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1206):map__1206);
var components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1206__$1,cljs.core.cst$kw$components);
if(cljs.core.fn_QMARK_(o)){
return o;
} else {
if((o instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(components,o));
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
var G__1208 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(re_frame_event,(selector.cljs$core$IFn$_invoke$arity$1 ? selector.cljs$core$IFn$_invoke$arity$1(event_value) : selector.call(null,event_value)));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1208) : re_frame.core.dispatch.call(null,G__1208));
});
});
pluto.reader.views.resolve_component_properties = (function pluto$reader$views$resolve_component_properties(component,p__1209,properties){
var map__1210 = p__1209;
var map__1210__$1 = ((((!((map__1210 == null)))?(((((map__1210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1210):map__1210);
var capacities = map__1210__$1;
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1210__$1,cljs.core.cst$kw$permissions);
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1210__$1,cljs.core.cst$kw$events);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["::",capacities], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["::",properties], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":",component,cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(capacities,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components,component], null))),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(capacities,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components,component,cljs.core.cst$kw$properties], null))], 0));

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__1210,map__1210__$1,capacities,permissions,events){
return (function (acc,p__1212){
var vec__1213 = p__1212;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1213,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1213,(1),null);
if(cljs.core.contains_QMARK_(pluto.reader.views.event_handler__GT_selector,k)){
if(cljs.core.not(pluto.reader.views.event_QMARK_(v))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,cljs.core.cst$kw$errors,cljs.core.conj,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_event_DASH_handler,v));
} else {
var vec__1216 = v;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1216,(0),null);
var vec__1219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1216,(1),null);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1219,(0),null);
var event_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1219,(1),null);
var re_frame_event = vec__1216;
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
});})(map__1210,map__1210__$1,capacities,permissions,events))
,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$errors,cljs.core.PersistentVector.EMPTY], null),properties);
});
pluto.reader.views.resolve_properties_children = (function pluto$reader$views$resolve_properties_children(p__1222){
var vec__1223 = p__1222;
var seq__1224 = cljs.core.seq(vec__1223);
var first__1225 = cljs.core.first(seq__1224);
var seq__1224__$1 = cljs.core.next(seq__1224);
var properties_QMARK_ = first__1225;
var children = seq__1224__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var and__3925__auto__ = cljs.core.map_QMARK_(properties_QMARK_);
if(and__3925__auto__){
return properties_QMARK_;
} else {
return and__3925__auto__;
}
})(),((cljs.core.map_QMARK_(properties_QMARK_))?children:cljs.core.cons(properties_QMARK_,children))], null);
});
pluto.reader.views.parse_hiccup_element = (function pluto$reader$views$parse_hiccup_element(p__1227,o){
var map__1228 = p__1227;
var map__1228__$1 = ((((!((map__1228 == null)))?(((((map__1228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1228):map__1228);
var opts = map__1228__$1;
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1228__$1,cljs.core.cst$kw$capacities);
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
var vec__1230 = o;
var seq__1231 = cljs.core.seq(vec__1230);
var first__1232 = cljs.core.first(seq__1231);
var seq__1231__$1 = cljs.core.next(seq__1231);
var element = first__1232;
var properties_children = seq__1231__$1;
var vec__1233 = pluto.reader.views.resolve_properties_children(properties_children);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1233,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1233,(1),null);
var component = pluto.reader.views.resolve_component(capacities,element);
var map__1236 = (cljs.core.truth_(properties)?pluto.reader.views.resolve_component_properties(element,capacities,properties):null);
var map__1236__$1 = ((((!((map__1236 == null)))?(((((map__1236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1236):map__1236);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1236__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1236__$1,cljs.core.cst$kw$errors);
var G__1238 = (function (){var m = pluto.reader.views.parse_hiccup_children(opts,children);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$data,((function (m,vec__1230,seq__1231,first__1232,seq__1231__$1,element,properties_children,vec__1233,properties,children,component,map__1236,map__1236__$1,data,errors,explain,map__1228,map__1228__$1,opts,capacities){
return (function (p1__1226_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,(cljs.core.truth_(data)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3936__auto__ = component;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return element;
}
})(),data], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3936__auto__ = component;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return element;
}
})()], null)),p1__1226_SHARP_);
});})(m,vec__1230,seq__1231,first__1232,seq__1231__$1,element,properties_children,vec__1233,properties,children,component,map__1236,map__1236__$1,data,errors,explain,map__1228,map__1228__$1,opts,capacities))
);
})();
var G__1238__$1 = (((component == null))?pluto.reader.errors.accumulate_errors(G__1238,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_component,element)], null)):G__1238);
if(cljs.core.seq(errors)){
return pluto.reader.errors.accumulate_errors(G__1238__$1,errors);
} else {
return G__1238__$1;
}
} else {
return null;
}
}
});
pluto.reader.views.parse = (function pluto$reader$views$parse(opts,o){
if(cljs.core.list_QMARK_(o)){
var map__1239 = (pluto.reader.blocks.parse.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.blocks.parse.cljs$core$IFn$_invoke$arity$2(opts,o) : pluto.reader.blocks.parse.call(null,opts,o));
var map__1239__$1 = ((((!((map__1239 == null)))?(((((map__1239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1239):map__1239);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1239__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1239__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return (pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$2(opts,data) : pluto.reader.views.parse.call(null,opts,data));
}
} else {
return pluto.reader.views.parse_hiccup_element(opts,o);

}
});
