// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('pluto.reader.blocks');
goog.require('pluto.reader.errors');
goog.require('pluto.reader.reference');
goog.require('pluto.reader.types');
goog.require('pluto.utils');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader$views_SLASH_form,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$string,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$number,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.cst$kw$symbol,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$element,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$block,cljs.core.cst$sym$cljs$core_SLASH_list_QMARK_),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,cljs.core.cst$kw$number,cljs.core.cst$kw$symbol,cljs.core.cst$kw$element,cljs.core.cst$kw$block], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_list_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.number_QMARK_,cljs.core.symbol_QMARK_,cljs.core.vector_QMARK_,cljs.core.list_QMARK_], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader$views_SLASH_property_DASH_map,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$keyword_QMARK_,cljs.core.cst$sym$any_QMARK_),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__8902){
return cljs.core.map_QMARK_(G__8902);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__365__auto__,v__366__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__366__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader$views_SLASH_element,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$tag,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$symbol,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_),cljs.core.cst$kw$attrs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.core.cst$kw$children,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.cst$kw$pluto$reader$views_SLASH_form)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tag,cljs.core.cst$kw$attrs,cljs.core.cst$kw$children], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol,cljs.core.cst$kw$fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.fn_QMARK_], null),null),cljs.spec.alpha.maybe_impl(cljs.core.map_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.rep_impl(cljs.core.cst$kw$pluto$reader$views_SLASH_form,cljs.core.cst$kw$pluto$reader$views_SLASH_form)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$symbol,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.cst$kw$pluto$reader$views_SLASH_form)], null)));
pluto.reader.views.parse_hiccup_children = (function pluto$reader$views$parse_hiccup_children(ctx,ext,children){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__8904_SHARP_,p2__8903_SHARP_){
var map__8905 = (pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$3 ? pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$3(ctx,ext,p2__8903_SHARP_) : pluto.reader.views.parse.call(null,ctx,ext,p2__8903_SHARP_));
var map__8905__$1 = (((((!((map__8905 == null))))?(((((map__8905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8905):map__8905);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8905__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8905__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__8904_SHARP_,cljs.core.cst$kw$data,cljs.core.conj,data),errors);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.PersistentVector.EMPTY], null),children);
});
pluto.reader.views.component_QMARK_ = (function pluto$reader$views$component_QMARK_(o){
return (o instanceof cljs.core.Symbol);
});
pluto.reader.views.resolve_component = (function pluto$reader$views$resolve_component(ctx,ext,p__8907){
var vec__8908 = p__8907;
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8908,(0),null);
var o = vec__8908;
if(cljs.core.fn_QMARK_(element)){
return element;
} else {
if((element instanceof cljs.core.Symbol)){
var or__4047__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$components,element,cljs.core.cst$kw$value], null));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1((function (){var G__8911 = ctx;
var G__8912 = ext;
var G__8913 = cljs.core.cst$kw$view;
var G__8914 = o;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__8911,G__8912,G__8913,G__8914) : pluto.reader.types.resolve.call(null,G__8911,G__8912,G__8913,G__8914));
})());
}
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
pluto.reader.views.resolve_default_component_properties = (function (){var method_table__4524__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__8915 = cljs.core.get_global_hierarchy;
return (fexpr__8915.cljs$core$IFn$_invoke$arity$0 ? fexpr__8915.cljs$core$IFn$_invoke$arity$0() : fexpr__8915.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.reader.views","resolve-default-component-properties"),((function (method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__){
return (function (property,value){
return property;
});})(method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__))
,cljs.core.cst$kw$default,hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
pluto.reader.views.resolve_default_component_properties.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$style,(function (_,value){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
}));
pluto.reader.views.resolve_default_component_properties.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,___$1){
return null;
}));
pluto.reader.views.resolve_custom_component_properties = (function pluto$reader$views$resolve_custom_component_properties(ctx,ext,component,k,v){
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$components,component,cljs.core.cst$kw$properties,k], null));
if(cljs.core.truth_(temp__5718__auto__)){
var type = temp__5718__auto__;
if(cljs.core.not((function (){var and__4036__auto__ = (pluto.reader.types.reference_types.cljs$core$IFn$_invoke$arity$1 ? pluto.reader.types.reference_types.cljs$core$IFn$_invoke$arity$1(type) : pluto.reader.types.reference_types.call(null,type));
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not((function (){var fexpr__8916 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$event,null,cljs.core.cst$kw$view,null], null), null);
return (fexpr__8916.cljs$core$IFn$_invoke$arity$1 ? fexpr__8916.cljs$core$IFn$_invoke$arity$1(type) : fexpr__8916.call(null,type));
})());
} else {
return and__4036__auto__;
}
})())){
if((!((v instanceof cljs.core.Symbol)))){
var map__8917 = (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,type,v) : pluto.reader.types.resolve.call(null,ctx,ext,type,v));
var map__8917__$1 = (((((!((map__8917 == null))))?(((((map__8917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8917):map__8917);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8917__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8917__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors((cljs.core.truth_(data)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,data], null):null),errors);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,v], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_component_DASH_property_DASH_type,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component,component,cljs.core.cst$kw$property,k,cljs.core.cst$kw$type,type], null))], null)], null);
}
} else {
if(cljs.core.truth_((function (){var G__8919 = ctx;
var G__8920 = ext;
var G__8921 = cljs.core.cst$kw$view;
var G__8922 = v;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__8919,G__8920,G__8921,G__8922) : pluto.reader.types.resolve.call(null,G__8919,G__8920,G__8921,G__8922));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,v], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_component_DASH_property,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,component,cljs.core.cst$kw$property,k], null))], null)], null);
}
}
});
pluto.reader.views.resolve_component_property = (function pluto$reader$views$resolve_component_property(ctx,ext,component,k,v){
var or__4047__auto__ = (pluto.reader.views.resolve_default_component_properties.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.views.resolve_default_component_properties.cljs$core$IFn$_invoke$arity$2(k,v) : pluto.reader.views.resolve_default_component_properties.call(null,k,v));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return pluto.reader.views.resolve_custom_component_properties(ctx,ext,component,k,v);
}
});
pluto.reader.views.resolve_property = (function pluto$reader$views$resolve_property(ctx,ext,component,k,v){
if(pluto.reader.views.component_QMARK_(component)){
return pluto.reader.views.resolve_component_property(ctx,ext,component,k,v);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,v], null);
}
});
pluto.reader.views.resolve_component_properties = (function pluto$reader$views$resolve_component_properties(ctx,ext,component,properties){
var temp__5718__auto__ = cljs.spec.alpha.explain_data(cljs.core.cst$kw$pluto$reader$views_SLASH_property_DASH_map,properties);
if(cljs.core.truth_(temp__5718__auto__)){
var explain = temp__5718__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_property_DASH_map,properties,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$explain_DASH_data,explain], null))], null)], null);
} else {
return cljs.core.reduce_kv(((function (temp__5718__auto__){
return (function (acc,k,v){
var map__8923 = pluto.reader.views.resolve_property(ctx,ext,component,k,v);
var map__8923__$1 = (((((!((map__8923 == null))))?(((((map__8923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8923):map__8923);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8923__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8923__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(cljs.core.update.cljs$core$IFn$_invoke$arity$5(acc,cljs.core.cst$kw$data,cljs.core.assoc,k,data),errors);
});})(temp__5718__auto__))
,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$errors,cljs.core.PersistentVector.EMPTY], null),properties);
}
});
pluto.reader.views.resolve_properties_children = (function pluto$reader$views$resolve_properties_children(p__8925){
var vec__8926 = p__8925;
var seq__8927 = cljs.core.seq(vec__8926);
var first__8928 = cljs.core.first(seq__8927);
var seq__8927__$1 = cljs.core.next(seq__8927);
var properties_QMARK_ = first__8928;
var children = seq__8927__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var and__4036__auto__ = cljs.core.map_QMARK_(properties_QMARK_);
if(and__4036__auto__){
return properties_QMARK_;
} else {
return and__4036__auto__;
}
})(),((cljs.core.map_QMARK_(properties_QMARK_))?children:(((!((properties_QMARK_ == null))))?cljs.core.cons(properties_QMARK_,children):children
))], null);
});
pluto.reader.views.parse_hiccup_element = (function pluto$reader$views$parse_hiccup_element(ctx,ext,o){
var explain = ((cljs.core.vector_QMARK_(o))?cljs.spec.alpha.explain_data(cljs.core.cst$kw$pluto$reader$views_SLASH_element,o):cljs.spec.alpha.explain_data(cljs.core.cst$kw$pluto$reader$views_SLASH_form,o));
if((!((explain == null)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_view,o,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$explain_DASH_data,explain], null))], null)], null);
} else {
if((((o instanceof cljs.core.Symbol)) || (pluto.utils.primitive_QMARK_(o)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,o], null);
} else {
if(cljs.core.vector_QMARK_(o)){
var vec__8930 = o;
var seq__8931 = cljs.core.seq(vec__8930);
var first__8932 = cljs.core.first(seq__8931);
var seq__8931__$1 = cljs.core.next(seq__8931);
var element = first__8932;
var properties_children = seq__8931__$1;
var component = pluto.reader.views.resolve_component(ctx,ext,o);
var vec__8933 = pluto.reader.views.resolve_properties_children(properties_children);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8933,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8933,(1),null);
var map__8936 = (cljs.core.truth_(properties)?pluto.reader.views.resolve_component_properties(ctx,ext,element,properties):null);
var map__8936__$1 = (((((!((map__8936 == null))))?(((((map__8936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8936):map__8936);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8936__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8936__$1,cljs.core.cst$kw$errors);
var G__8938 = (function (){var m = pluto.reader.views.parse_hiccup_children(ctx,ext,children);
if(cljs.core.truth_(component)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$data,((function (m,vec__8930,seq__8931,first__8932,seq__8931__$1,element,properties_children,component,vec__8933,properties,children,map__8936,map__8936__$1,data,errors,explain){
return (function (p1__8929_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,(cljs.core.truth_(data)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,data], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null)),p1__8929_SHARP_);
});})(m,vec__8930,seq__8931,first__8932,seq__8931__$1,element,properties_children,component,vec__8933,properties,children,map__8936,map__8936__$1,data,errors,explain))
);
} else {
return m;
}
})();
var G__8938__$1 = (((component == null))?pluto.reader.errors.accumulate_errors(G__8938,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_component,element)], null)):G__8938);
if(cljs.core.seq(errors)){
return pluto.reader.errors.accumulate_errors(G__8938__$1,errors);
} else {
return G__8938__$1;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_component,o)], null)], null);

}
}
}
});
pluto.reader.views.unresolved_properties = (function pluto$reader$views$unresolved_properties(acc,o){
if((o instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,o);
} else {
if(cljs.core.vector_QMARK_(o)){
var vec__8941 = o;
var seq__8942 = cljs.core.seq(vec__8941);
var first__8943 = cljs.core.first(seq__8942);
var seq__8942__$1 = cljs.core.next(seq__8942);
var _ = first__8943;
var first__8943__$1 = cljs.core.first(seq__8942__$1);
var seq__8942__$2 = cljs.core.next(seq__8942__$1);
var ___$1 = first__8943__$1;
var children = seq__8942__$2;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__8941,seq__8942,first__8943,seq__8942__$1,_,first__8943__$1,seq__8942__$2,___$1,children){
return (function (p1__8939_SHARP_,p2__8940_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,p1__8939_SHARP_,(pluto.reader.views.unresolved_properties.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.views.unresolved_properties.cljs$core$IFn$_invoke$arity$2(acc,p2__8940_SHARP_) : pluto.reader.views.unresolved_properties.call(null,acc,p2__8940_SHARP_)));
});})(vec__8941,seq__8942,first__8943,seq__8942__$1,_,first__8943__$1,seq__8942__$2,___$1,children))
,acc,children);
} else {
return acc;

}
}
});
pluto.reader.views.parse = (function pluto$reader$views$parse(ctx,ext,o){
if(cljs.core.list_QMARK_(o)){
var map__8944 = (pluto.reader.blocks.parse.cljs$core$IFn$_invoke$arity$3 ? pluto.reader.blocks.parse.cljs$core$IFn$_invoke$arity$3(ctx,ext,o) : pluto.reader.blocks.parse.call(null,ctx,ext,o));
var map__8944__$1 = (((((!((map__8944 == null))))?(((((map__8944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8944):map__8944);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8944__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8944__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(data)){
var d = (pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$3 ? pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$3(ctx,ext,data) : pluto.reader.views.parse.call(null,ctx,ext,data));
var props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(pluto.reader.views.unresolved_properties,cljs.core.PersistentHashSet.EMPTY,d);
return pluto.reader.errors.merge_errors(d,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(errors,((cljs.core.seq(props))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unresolved_DASH_properties,props)], null)], null):null)));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
}
} else {
return pluto.reader.views.parse_hiccup_element(ctx,ext,o);
}
});
pluto.reader.views.hiccup_with_properties = (function pluto$reader$views$hiccup_with_properties(h,properties){
if(cljs.core.vector_QMARK_(h)){
var vec__8947 = h;
var seq__8948 = cljs.core.seq(vec__8947);
var first__8949 = cljs.core.first(seq__8948);
var seq__8948__$1 = cljs.core.next(seq__8948);
var tag = first__8949;
var properties_children = seq__8948__$1;
var vec__8950 = pluto.reader.views.resolve_properties_children(properties_children);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8950,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8950,(1),null);
var props__$1 = (cljs.core.truth_((function (){var and__4036__auto__ = properties;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,pluto.reader.blocks.let_block);
} else {
return and__4036__auto__;
}
})())?cljs.core.assoc_in(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prev_DASH_env,cljs.core.cst$kw$pluto$reader_SLASH_properties], null),properties):props);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,(cljs.core.truth_(props__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,props__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag], null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__8947,seq__8948,first__8949,seq__8948__$1,tag,properties_children,vec__8950,props,children,props__$1){
return (function (p1__8946_SHARP_){
return (pluto.reader.views.hiccup_with_properties.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.views.hiccup_with_properties.cljs$core$IFn$_invoke$arity$2(p1__8946_SHARP_,properties) : pluto.reader.views.hiccup_with_properties.call(null,p1__8946_SHARP_,properties));
});})(vec__8947,seq__8948,first__8949,seq__8948__$1,tag,properties_children,vec__8950,props,children,props__$1))
,children));
} else {
return h;
}
});
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$view,(function (ctx,ext,type,value){
var map__8953 = pluto.reader.reference.resolve(ctx,ext,type,value);
var map__8953__$1 = (((((!((map__8953 == null))))?(((((map__8953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8953):map__8953);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8953__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8953__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(data)){
if(cljs.core.fn_QMARK_(data)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,data], null);
} else {
var map__8955 = pluto.reader.views.parse(ctx,ext,data);
var map__8955__$1 = (((((!((map__8955 == null))))?(((((map__8955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8955):map__8955);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8955__$1,cljs.core.cst$kw$data);
var errors__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8955__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors((cljs.core.truth_(data__$1)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,((function (map__8955,map__8955__$1,data__$1,errors__$1,map__8953,map__8953__$1,data,errors){
return (function (o){
return pluto.reader.views.hiccup_with_properties(data__$1,o);
});})(map__8955,map__8955__$1,data__$1,errors__$1,map__8953,map__8953__$1,data,errors))
], null):null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(errors__$1,cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(ext)));
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
}
}));
