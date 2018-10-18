// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('pluto.reader.blocks');
goog.require('pluto.reader.destructuring');
goog.require('pluto.reader.errors');
goog.require('pluto.reader.permissions');
goog.require('pluto.reader.reference');
goog.require('pluto.reader.types');
goog.require('pluto.utils');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader$views_SLASH_form,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$string,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$number,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.cst$kw$symbol,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$element,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$block,cljs.core.cst$sym$cljs$core_SLASH_list_QMARK_),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,cljs.core.cst$kw$number,cljs.core.cst$kw$symbol,cljs.core.cst$kw$element,cljs.core.cst$kw$block], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_list_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.number_QMARK_,cljs.core.symbol_QMARK_,cljs.core.vector_QMARK_,cljs.core.list_QMARK_], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader$views_SLASH_property_DASH_map,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$keyword_QMARK_,cljs.core.cst$sym$any_QMARK_),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__2160){
return cljs.core.map_QMARK_(G__2160);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__1202__auto__,v__1203__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__1203__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader$views_SLASH_element,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$tag,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$symbol,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_),cljs.core.cst$kw$attrs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.core.cst$kw$children,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.cst$kw$pluto$reader$views_SLASH_form)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tag,cljs.core.cst$kw$attrs,cljs.core.cst$kw$children], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol,cljs.core.cst$kw$fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.fn_QMARK_], null),null),cljs.spec.alpha.maybe_impl(cljs.core.map_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.rep_impl(cljs.core.cst$kw$pluto$reader$views_SLASH_form,cljs.core.cst$kw$pluto$reader$views_SLASH_form)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$symbol,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.cst$kw$pluto$reader$views_SLASH_form)], null)));
pluto.reader.views.parse_hiccup_children = (function pluto$reader$views$parse_hiccup_children(ctx,ext,children){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__2162_SHARP_,p2__2161_SHARP_){
var map__2163 = (pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$3 ? pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$3(ctx,ext,p2__2161_SHARP_) : pluto.reader.views.parse.call(null,ctx,ext,p2__2161_SHARP_));
var map__2163__$1 = ((((!((map__2163 == null)))?(((((map__2163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2163):map__2163);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2163__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2163__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__2162_SHARP_,cljs.core.cst$kw$data,cljs.core.conj,data),errors);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.PersistentVector.EMPTY], null),children);
});
pluto.reader.views.component_QMARK_ = (function pluto$reader$views$component_QMARK_(o){
return (o instanceof cljs.core.Symbol);
});
pluto.reader.views.resolve_component = (function pluto$reader$views$resolve_component(ctx,o){
if(cljs.core.fn_QMARK_(o)){
return o;
} else {
if((o instanceof cljs.core.Symbol)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$components,o,cljs.core.cst$kw$value], null));
} else {
return null;
}
}
});
if((typeof pluto !== 'undefined') && (typeof pluto.reader !== 'undefined') && (typeof pluto.reader.views !== 'undefined') && (typeof pluto.reader.views.resolve_default_component_properties !== 'undefined')){
} else {
/**
 * Resolve default properties available for all components.
 */
pluto.reader.views.resolve_default_component_properties = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.reader.views","resolve-default-component-properties"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (property,value){
return property;
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,cljs.core.cst$kw$default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
pluto.reader.views.resolve_default_component_properties.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$style,(function (_,value){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
}));
pluto.reader.views.resolve_default_component_properties.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,value){
return null;
}));
pluto.reader.views.wrap_data = (function pluto$reader$views$wrap_data(type,data,env,o){
if(cljs.core.truth_((pluto.reader.types.reference_types.cljs$core$IFn$_invoke$arity$1 ? pluto.reader.types.reference_types.cljs$core$IFn$_invoke$arity$1(type) : pluto.reader.types.reference_types.call(null,type)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$event,type)){
return cljs.core.with_meta((function (env__$1,o__$1){
return (data.cljs$core$IFn$_invoke$arity$2 ? data.cljs$core$IFn$_invoke$arity$2(env__$1,o__$1) : data.call(null,env__$1,o__$1));
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,true], null));
} else {
return data;
}
} else {
return data;
}
});
pluto.reader.views.resolve_custom_component_properties = (function pluto$reader$views$resolve_custom_component_properties(ctx,ext,component,k,v){
var temp__5455__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$components,component,cljs.core.cst$kw$properties,k], null));
if(cljs.core.truth_(temp__5455__auto__)){
var type = temp__5455__auto__;
if(cljs.core.not((function (){var and__3938__auto__ = (pluto.reader.types.reference_types.cljs$core$IFn$_invoke$arity$1 ? pluto.reader.types.reference_types.cljs$core$IFn$_invoke$arity$1(type) : pluto.reader.types.reference_types.call(null,type));
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not((function (){var fexpr__2165 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$event,null,cljs.core.cst$kw$view,null], null), null);
return (fexpr__2165.cljs$core$IFn$_invoke$arity$1 ? fexpr__2165.cljs$core$IFn$_invoke$arity$1(type) : fexpr__2165.call(null,type));
})());
} else {
return and__3938__auto__;
}
})())){
if(!((v instanceof cljs.core.Symbol))){
var map__2166 = (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,type,v) : pluto.reader.types.resolve.call(null,ctx,ext,type,v));
var map__2166__$1 = ((((!((map__2166 == null)))?(((((map__2166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2166):map__2166);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2166__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2166__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors((cljs.core.truth_(data)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,data], null):null),errors);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,v], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_component_DASH_property_DASH_type,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component,component,cljs.core.cst$kw$property,k,cljs.core.cst$kw$type,type], null))], null)], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_component_DASH_property,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,component,cljs.core.cst$kw$property,k], null))], null)], null);
}
});
pluto.reader.views.resolve_component_property = (function pluto$reader$views$resolve_component_property(ctx,ext,component,k,v){
var or__3949__auto__ = (pluto.reader.views.resolve_default_component_properties.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.views.resolve_default_component_properties.cljs$core$IFn$_invoke$arity$2(k,v) : pluto.reader.views.resolve_default_component_properties.call(null,k,v));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return pluto.reader.views.resolve_custom_component_properties(ctx,ext,component,k,v);
}
});
pluto.reader.views.resolve_property = (function pluto$reader$views$resolve_property(ctx,ext,component,k,v){
if(cljs.core.truth_(pluto.reader.views.component_QMARK_(component))){
return pluto.reader.views.resolve_component_property(ctx,ext,component,k,v);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,v], null);
}
});
pluto.reader.views.resolve_component_properties = (function pluto$reader$views$resolve_component_properties(ctx,ext,component,properties){
var temp__5455__auto__ = cljs.spec.alpha.explain_data(cljs.core.cst$kw$pluto$reader$views_SLASH_property_DASH_map,properties);
if(cljs.core.truth_(temp__5455__auto__)){
var explain = temp__5455__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_property_DASH_map,properties,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$explain_DASH_data,explain], null))], null)], null);
} else {
return cljs.core.reduce_kv(((function (temp__5455__auto__){
return (function (acc,k,v){
var map__2168 = pluto.reader.views.resolve_property(ctx,ext,component,k,v);
var map__2168__$1 = ((((!((map__2168 == null)))?(((((map__2168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2168):map__2168);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2168__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2168__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(cljs.core.update.cljs$core$IFn$_invoke$arity$5(acc,cljs.core.cst$kw$data,cljs.core.assoc,k,data),errors);
});})(temp__5455__auto__))
,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$errors,cljs.core.PersistentVector.EMPTY], null),properties);
}
});
pluto.reader.views.resolve_properties_children = (function pluto$reader$views$resolve_properties_children(p__2170){
var vec__2171 = p__2170;
var seq__2172 = cljs.core.seq(vec__2171);
var first__2173 = cljs.core.first(seq__2172);
var seq__2172__$1 = cljs.core.next(seq__2172);
var properties_QMARK_ = first__2173;
var children = seq__2172__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var and__3938__auto__ = cljs.core.map_QMARK_(properties_QMARK_);
if(and__3938__auto__){
return properties_QMARK_;
} else {
return and__3938__auto__;
}
})(),((cljs.core.map_QMARK_(properties_QMARK_))?children:((!((properties_QMARK_ == null)))?cljs.core.cons(properties_QMARK_,children):children
))], null);
});
pluto.reader.views.parse_hiccup_element = (function pluto$reader$views$parse_hiccup_element(ctx,ext,o){
var explain = ((cljs.core.vector_QMARK_(o))?cljs.spec.alpha.explain_data(cljs.core.cst$kw$pluto$reader$views_SLASH_element,o):cljs.spec.alpha.explain_data(cljs.core.cst$kw$pluto$reader$views_SLASH_form,o));
if(!((explain == null))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_view,o,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$explain_DASH_data,explain], null))], null)], null);
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = (o instanceof cljs.core.Symbol);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return pluto.utils.primitive_QMARK_(o);
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,o], null);
} else {
if(cljs.core.vector_QMARK_(o)){
var vec__2175 = o;
var seq__2176 = cljs.core.seq(vec__2175);
var first__2177 = cljs.core.first(seq__2176);
var seq__2176__$1 = cljs.core.next(seq__2176);
var element = first__2177;
var properties_children = seq__2176__$1;
var vec__2178 = pluto.reader.views.resolve_properties_children(properties_children);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2178,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2178,(1),null);
var component = pluto.reader.views.resolve_component(ctx,element);
var map__2181 = (cljs.core.truth_(properties)?pluto.reader.views.resolve_component_properties(ctx,ext,element,properties):null);
var map__2181__$1 = ((((!((map__2181 == null)))?(((((map__2181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2181):map__2181);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2181__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2181__$1,cljs.core.cst$kw$errors);
var G__2183 = (function (){var m = pluto.reader.views.parse_hiccup_children(ctx,ext,children);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$data,((function (m,vec__2175,seq__2176,first__2177,seq__2176__$1,element,properties_children,vec__2178,properties,children,component,map__2181,map__2181__$1,data,errors,explain){
return (function (p1__2174_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,(cljs.core.truth_(data)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3949__auto__ = component;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return element;
}
})(),data], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3949__auto__ = component;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return element;
}
})()], null)),p1__2174_SHARP_);
});})(m,vec__2175,seq__2176,first__2177,seq__2176__$1,element,properties_children,vec__2178,properties,children,component,map__2181,map__2181__$1,data,errors,explain))
);
})();
var G__2183__$1 = (((component == null))?pluto.reader.errors.accumulate_errors(G__2183,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_component,element)], null)):G__2183);
if(cljs.core.seq(errors)){
return pluto.reader.errors.accumulate_errors(G__2183__$1,errors);
} else {
return G__2183__$1;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_component,o)], null)], null);

}
}
}
});
pluto.reader.views.parse = (function pluto$reader$views$parse(ctx,ext,o){
if(cljs.core.list_QMARK_(o)){
var map__2184 = (pluto.reader.blocks.parse.cljs$core$IFn$_invoke$arity$3 ? pluto.reader.blocks.parse.cljs$core$IFn$_invoke$arity$3(ctx,ext,o) : pluto.reader.blocks.parse.call(null,ctx,ext,o));
var map__2184__$1 = ((((!((map__2184 == null)))?(((((map__2184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2184):map__2184);
var m = map__2184__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2184__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2184__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors((cljs.core.truth_(data)?(pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$3 ? pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$3(ctx,ext,data) : pluto.reader.views.parse.call(null,ctx,ext,data)):null),errors);
} else {
return pluto.reader.views.parse_hiccup_element(ctx,ext,o);
}
});
pluto.reader.views.hiccup_with_properties = (function pluto$reader$views$hiccup_with_properties(h,properties){
if(cljs.core.vector_QMARK_(h)){
var vec__2187 = h;
var seq__2188 = cljs.core.seq(vec__2187);
var first__2189 = cljs.core.first(seq__2188);
var seq__2188__$1 = cljs.core.next(seq__2188);
var tag = first__2189;
var properties_children = seq__2188__$1;
var vec__2190 = pluto.reader.views.resolve_properties_children(properties_children);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2190,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2190,(1),null);
var props__$1 = (cljs.core.truth_((function (){var and__3938__auto__ = properties;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,pluto.reader.blocks.let_block);
} else {
return and__3938__auto__;
}
})())?cljs.core.assoc_in(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prev_DASH_env,cljs.core.cst$kw$pluto$reader_SLASH_properties], null),properties):props);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,(cljs.core.truth_(props__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,props__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag], null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__2187,seq__2188,first__2189,seq__2188__$1,tag,properties_children,vec__2190,props,children,props__$1){
return (function (p1__2186_SHARP_){
return (pluto.reader.views.hiccup_with_properties.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.views.hiccup_with_properties.cljs$core$IFn$_invoke$arity$2(p1__2186_SHARP_,properties) : pluto.reader.views.hiccup_with_properties.call(null,p1__2186_SHARP_,properties));
});})(vec__2187,seq__2188,first__2189,seq__2188__$1,tag,properties_children,vec__2190,props,children,props__$1))
,children));
} else {
return h;
}
});
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$view,(function (ctx,ext,type,value){
var map__2193 = pluto.reader.reference.resolve(ctx,ext,type,value);
var map__2193__$1 = ((((!((map__2193 == null)))?(((((map__2193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2193):map__2193);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2193__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2193__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(data)){
if(cljs.core.fn_QMARK_(data)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,data], null);
} else {
var map__2195 = pluto.reader.views.parse(ctx,ext,data);
var map__2195__$1 = ((((!((map__2195 == null)))?(((((map__2195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2195):map__2195);
var m = map__2195__$1;
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2195__$1,cljs.core.cst$kw$data);
var errors__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2195__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors((cljs.core.truth_(data__$1)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,((function (map__2195,map__2195__$1,m,data__$1,errors__$1,map__2193,map__2193__$1,data,errors){
return (function (o){
return pluto.reader.views.hiccup_with_properties(data__$1,o);
});})(map__2195,map__2195__$1,m,data__$1,errors__$1,map__2193,map__2193__$1,data,errors))
], null):null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(errors__$1,cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(ext)));
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
}
}));
