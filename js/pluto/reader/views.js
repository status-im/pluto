// Compiled by ClojureScript 1.10.516 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('reagent.core');
goog.require('pluto.reader.blocks');
goog.require('pluto.reader.errors');
goog.require('pluto.reader.reference');
goog.require('pluto.reader.types');
goog.require('pluto.utils');
goog.require('pluto.trace');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader$views_SLASH_form,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$string,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$number,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.cst$kw$symbol,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$element,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$block,cljs.core.cst$sym$cljs$core_SLASH_list_QMARK_),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,cljs.core.cst$kw$number,cljs.core.cst$kw$symbol,cljs.core.cst$kw$element,cljs.core.cst$kw$block], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_list_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.number_QMARK_,cljs.core.symbol_QMARK_,cljs.core.vector_QMARK_,cljs.core.list_QMARK_], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader$views_SLASH_property_DASH_map,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$keyword_QMARK_,cljs.core.cst$sym$any_QMARK_),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__7047){
return cljs.core.map_QMARK_(G__7047);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__615__auto__,v__616__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__616__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader$views_SLASH_element,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$tag,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$symbol,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_),cljs.core.cst$kw$attrs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.core.cst$kw$children,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.cst$kw$pluto$reader$views_SLASH_form)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tag,cljs.core.cst$kw$attrs,cljs.core.cst$kw$children], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol,cljs.core.cst$kw$fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.fn_QMARK_], null),null),cljs.spec.alpha.maybe_impl(cljs.core.map_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.rep_impl(cljs.core.cst$kw$pluto$reader$views_SLASH_form,cljs.core.cst$kw$pluto$reader$views_SLASH_form)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$symbol,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.cst$kw$pluto$reader$views_SLASH_form)], null)));
pluto.reader.views.parse_hiccup_children = (function pluto$reader$views$parse_hiccup_children(ctx,ext,parent,children){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__7049_SHARP_,p2__7048_SHARP_){
var map__7050 = (pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$4(ctx,ext,parent,p2__7048_SHARP_) : pluto.reader.views.parse.call(null,ctx,ext,parent,p2__7048_SHARP_));
var map__7050__$1 = (((((!((map__7050 == null))))?(((((map__7050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7050):map__7050);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7050__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7050__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__7049_SHARP_,cljs.core.cst$kw$data,cljs.core.conj,data),errors);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.PersistentVector.EMPTY], null),children);
});
pluto.reader.views.component_QMARK_ = (function pluto$reader$views$component_QMARK_(o){
return (o instanceof cljs.core.Symbol);
});
pluto.reader.views.block_QMARK_ = (function pluto$reader$views$block_QMARK_(o){
return cljs.core.fn_QMARK_(o);
});
pluto.reader.views.resolve_component = (function pluto$reader$views$resolve_component(ctx,ext,p__7052){
var vec__7053 = p__7052;
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7053,(0),null);
var o = vec__7053;
if(pluto.reader.views.block_QMARK_(element)){
return element;
} else {
if((element instanceof cljs.core.Symbol)){
var or__4131__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$components,element,cljs.core.cst$kw$data], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1((function (){var G__7056 = ctx;
var G__7057 = ext;
var G__7058 = cljs.core.cst$kw$view;
var G__7059 = o;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__7056,G__7057,G__7058,G__7059) : pluto.reader.types.resolve.call(null,G__7056,G__7057,G__7058,G__7059));
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
pluto.reader.views.resolve_default_component_properties = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__7060 = cljs.core.get_global_hierarchy;
return (fexpr__7060.cljs$core$IFn$_invoke$arity$0 ? fexpr__7060.cljs$core$IFn$_invoke$arity$0() : fexpr__7060.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.reader.views","resolve-default-component-properties"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (property,value){
return property;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
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
if(cljs.core.not((function (){var and__4120__auto__ = (pluto.reader.types.reference_types.cljs$core$IFn$_invoke$arity$1 ? pluto.reader.types.reference_types.cljs$core$IFn$_invoke$arity$1(type) : pluto.reader.types.reference_types.call(null,type));
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var fexpr__7061 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$event,null,cljs.core.cst$kw$view,null], null), null);
return (fexpr__7061.cljs$core$IFn$_invoke$arity$1 ? fexpr__7061.cljs$core$IFn$_invoke$arity$1(type) : fexpr__7061.call(null,type));
})());
} else {
return and__4120__auto__;
}
})())){
if((!((v instanceof cljs.core.Symbol)))){
var map__7062 = (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,type,v) : pluto.reader.types.resolve.call(null,ctx,ext,type,v));
var map__7062__$1 = (((((!((map__7062 == null))))?(((((map__7062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7062):map__7062);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7062__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7062__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors((cljs.core.truth_(data)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,data], null):null),errors);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,v], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_component_DASH_property_DASH_type,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component,component,cljs.core.cst$kw$property,k,cljs.core.cst$kw$type,type], null))], null)], null);
}
} else {
if(cljs.core.truth_((function (){var G__7064 = ctx;
var G__7065 = ext;
var G__7066 = cljs.core.cst$kw$view;
var G__7067 = v;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__7064,G__7065,G__7066,G__7067) : pluto.reader.types.resolve.call(null,G__7064,G__7065,G__7066,G__7067));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,v], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_component_DASH_property,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,component,cljs.core.cst$kw$property,k], null))], null)], null);
}
}
});
pluto.reader.views.resolve_component_property = (function pluto$reader$views$resolve_component_property(ctx,ext,component,k,v){
var or__4131__auto__ = (pluto.reader.views.resolve_default_component_properties.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.views.resolve_default_component_properties.cljs$core$IFn$_invoke$arity$2(k,v) : pluto.reader.views.resolve_default_component_properties.call(null,k,v));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
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
var map__7068 = pluto.reader.views.resolve_property(ctx,ext,component,k,v);
var map__7068__$1 = (((((!((map__7068 == null))))?(((((map__7068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7068):map__7068);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7068__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7068__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(cljs.core.update.cljs$core$IFn$_invoke$arity$5(acc,cljs.core.cst$kw$data,cljs.core.assoc,k,data),errors);
});})(temp__5718__auto__))
,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$errors,cljs.core.PersistentVector.EMPTY], null),properties);
}
});
pluto.reader.views.resolve_properties_children = (function pluto$reader$views$resolve_properties_children(p__7070){
var vec__7071 = p__7070;
var seq__7072 = cljs.core.seq(vec__7071);
var first__7073 = cljs.core.first(seq__7072);
var seq__7072__$1 = cljs.core.next(seq__7072);
var properties_QMARK_ = first__7073;
var children = seq__7072__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var and__4120__auto__ = cljs.core.map_QMARK_(properties_QMARK_);
if(and__4120__auto__){
return properties_QMARK_;
} else {
return and__4120__auto__;
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
var vec__7075 = o;
var seq__7076 = cljs.core.seq(vec__7075);
var first__7077 = cljs.core.first(seq__7076);
var seq__7076__$1 = cljs.core.next(seq__7076);
var element = first__7077;
var properties_children = seq__7076__$1;
var component = pluto.reader.views.resolve_component(ctx,ext,o);
var vec__7078 = pluto.reader.views.resolve_properties_children(properties_children);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7078,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7078,(1),null);
var map__7081 = (cljs.core.truth_(properties)?pluto.reader.views.resolve_component_properties(ctx,ext,element,properties):null);
var map__7081__$1 = (((((!((map__7081 == null))))?(((((map__7081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7081):map__7081);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7081__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7081__$1,cljs.core.cst$kw$errors);
var G__7083 = (function (){var m = pluto.reader.views.parse_hiccup_children(ctx,ext,o,children);
if(cljs.core.truth_(component)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$data,((function (m,vec__7075,seq__7076,first__7077,seq__7076__$1,element,properties_children,component,vec__7078,properties,children,map__7081,map__7081__$1,data,errors,explain){
return (function (p1__7074_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,(cljs.core.truth_(data)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,data], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null)),p1__7074_SHARP_);
});})(m,vec__7075,seq__7076,first__7077,seq__7076__$1,element,properties_children,component,vec__7078,properties,children,map__7081,map__7081__$1,data,errors,explain))
);
} else {
return m;
}
})();
var G__7083__$1 = (((component == null))?pluto.reader.errors.accumulate_errors(G__7083,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_component,element)], null)):G__7083);
if(cljs.core.seq(errors)){
return pluto.reader.errors.accumulate_errors(G__7083__$1,errors);
} else {
return G__7083__$1;
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
var vec__7086 = o;
var seq__7087 = cljs.core.seq(vec__7086);
var first__7088 = cljs.core.first(seq__7087);
var seq__7087__$1 = cljs.core.next(seq__7087);
var _ = first__7088;
var first__7088__$1 = cljs.core.first(seq__7087__$1);
var seq__7087__$2 = cljs.core.next(seq__7087__$1);
var ___$1 = first__7088__$1;
var children = seq__7087__$2;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__7086,seq__7087,first__7088,seq__7087__$1,_,first__7088__$1,seq__7087__$2,___$1,children){
return (function (p1__7084_SHARP_,p2__7085_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,p1__7084_SHARP_,(pluto.reader.views.unresolved_properties.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.views.unresolved_properties.cljs$core$IFn$_invoke$arity$2(acc,p2__7085_SHARP_) : pluto.reader.views.unresolved_properties.call(null,acc,p2__7085_SHARP_)));
});})(vec__7086,seq__7087,first__7088,seq__7087__$1,_,first__7088__$1,seq__7087__$2,___$1,children))
,acc,children);
} else {
return acc;

}
}
});
pluto.reader.views.event__GT_fn = (function pluto$reader$views$event__GT_fn(ctx,ext,event,f){
return (function() { 
var G__7096__delegate = function (o){
if(cljs.core.truth_(event)){
var map__7089 = (function (){var G__7090 = ctx;
var G__7091 = ext;
var G__7092 = cljs.core.cst$kw$event;
var G__7093 = event;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__7090,G__7091,G__7092,G__7093) : pluto.reader.types.resolve.call(null,G__7090,G__7091,G__7092,G__7093));
})();
var map__7089__$1 = (((((!((map__7089 == null))))?(((((map__7089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7089):map__7089);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7089__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7089__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(data)){
var G__7095 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,o);
return (data.cljs$core$IFn$_invoke$arity$1 ? data.cljs$core$IFn$_invoke$arity$1(G__7095) : data.call(null,G__7095));
} else {
return null;
}
} else {
return null;
}
};
var G__7096 = function (var_args){
var o = null;
if (arguments.length > 0) {
var G__7097__i = 0, G__7097__a = new Array(arguments.length -  0);
while (G__7097__i < G__7097__a.length) {G__7097__a[G__7097__i] = arguments[G__7097__i + 0]; ++G__7097__i;}
  o = new cljs.core.IndexedSeq(G__7097__a,0,null);
} 
return G__7096__delegate.call(this,o);};
G__7096.cljs$lang$maxFixedArity = 0;
G__7096.cljs$lang$applyTo = (function (arglist__7098){
var o = cljs.core.seq(arglist__7098);
return G__7096__delegate(o);
});
G__7096.cljs$core$IFn$_invoke$arity$variadic = G__7096__delegate;
return G__7096;
})()
;
});
pluto.reader.views.default_logger = (function pluto$reader$views$default_logger(ctx,error,info){
return pluto.trace.trace(ctx,pluto.trace.create_trace(cljs.core.cst$kw$error,cljs.core.cst$kw$view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,error,cljs.core.cst$kw$info,info], null)));
});
pluto.reader.views.error_boundary = (function pluto$reader$views$error_boundary(ctx,component){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"error-boundary-wrapper",cljs.core.cst$kw$component_DASH_did_DASH_catch,(function (p1__7099_SHARP_,p2__7100_SHARP_){
return pluto.reader.views.default_logger(ctx,p1__7099_SHARP_,p2__7100_SHARP_);
}),cljs.core.cst$kw$reagent_DASH_render,(function pluto$reader$views$error_boundary_$_error_boundary(_){
return component;
})], null));
});
/**
 * Inject `properties` into the top level `let` block.
 */
pluto.reader.views.inject_properties = (function pluto$reader$views$inject_properties(h,properties){
if(cljs.core.vector_QMARK_(h)){
var vec__7102 = h;
var seq__7103 = cljs.core.seq(vec__7102);
var first__7104 = cljs.core.first(seq__7103);
var seq__7103__$1 = cljs.core.next(seq__7103);
var tag = first__7104;
var properties_children = seq__7103__$1;
var vec__7105 = pluto.reader.views.resolve_properties_children(properties_children);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7105,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7105,(1),null);
var props__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = properties;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,pluto.reader.blocks.let_block);
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc_in(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prev_DASH_env,cljs.core.cst$kw$pluto$reader_SLASH_properties], null),properties):props);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,(cljs.core.truth_(props__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,props__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag], null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__7102,seq__7103,first__7104,seq__7103__$1,tag,properties_children,vec__7105,props,children,props__$1){
return (function (p1__7101_SHARP_){
return (pluto.reader.views.inject_properties.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.views.inject_properties.cljs$core$IFn$_invoke$arity$2(p1__7101_SHARP_,properties) : pluto.reader.views.inject_properties.call(null,p1__7101_SHARP_,properties));
});})(vec__7102,seq__7103,first__7104,seq__7103__$1,tag,properties_children,vec__7105,props,children,props__$1))
,children));
} else {
return h;
}
});
pluto.reader.views.create_reagent_spec = (function pluto$reader$views$create_reagent_spec(ctx,ext,p__7119,data){
var map__7120 = p__7119;
var map__7120__$1 = (((((!((map__7120 == null))))?(((((map__7120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7120):map__7120);
var get_initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7120__$1,cljs.core.cst$kw$get_DASH_initial_DASH_state);
var component_will_receive_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7120__$1,cljs.core.cst$kw$component_DASH_will_DASH_receive_DASH_props);
var should_component_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7120__$1,cljs.core.cst$kw$should_DASH_component_DASH_update);
var component_will_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7120__$1,cljs.core.cst$kw$component_DASH_will_DASH_mount);
var component_did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7120__$1,cljs.core.cst$kw$component_DASH_did_DASH_mount);
var component_will_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7120__$1,cljs.core.cst$kw$component_DASH_will_DASH_update);
var component_did_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7120__$1,cljs.core.cst$kw$component_DASH_did_DASH_update);
var component_will_unmount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7120__$1,cljs.core.cst$kw$component_DASH_will_DASH_unmount);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display_DASH_name,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(data)),cljs.core.cst$kw$reagent_DASH_render,((function (map__7120,map__7120__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount){
return (function (o){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.views.error_boundary,ctx,pluto.reader.views.inject_properties(data,o)], null);
});})(map__7120,map__7120__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount))
], null),(cljs.core.truth_(get_initial_state)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$get_DASH_initial_DASH_state_DASH_mount,pluto.reader.views.event__GT_fn(ctx,ext,get_initial_state,((function (map__7120,map__7120__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount){
return (function (p1__7108_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__7108_SHARP_);
});})(map__7120,map__7120__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount))
)], null):null),(cljs.core.truth_(component_will_receive_props)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_will_DASH_receive_DASH_props,pluto.reader.views.event__GT_fn(ctx,ext,component_will_receive_props,((function (map__7120,map__7120__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount){
return (function (p1__7109_SHARP_,p2__7110_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__7109_SHARP_),cljs.core.cst$kw$new,p2__7110_SHARP_);
});})(map__7120,map__7120__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount))
)], null):null),(cljs.core.truth_(should_component_update)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$should_DASH_component_DASH_update,pluto.reader.views.event__GT_fn(ctx,ext,should_component_update,((function (map__7120,map__7120__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount){
return (function (p1__7111_SHARP_,p2__7112_SHARP_,p3__7113_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__7111_SHARP_),cljs.core.cst$kw$old,p2__7112_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$new,p3__7113_SHARP_], 0));
});})(map__7120,map__7120__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount))
)], null):null),(cljs.core.truth_(component_will_mount)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_will_DASH_mount,pluto.reader.views.event__GT_fn(ctx,ext,component_will_mount,((function (map__7120,map__7120__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount){
return (function (p1__7114_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__7114_SHARP_);
});})(map__7120,map__7120__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount))
)], null):null),(cljs.core.truth_(component_did_mount)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_did_DASH_mount,pluto.reader.views.event__GT_fn(ctx,ext,component_did_mount,((function (map__7120,map__7120__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount){
return (function (){
return cljs.core.PersistentArrayMap.EMPTY;
});})(map__7120,map__7120__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount))
)], null):null),(cljs.core.truth_(component_will_update)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_will_DASH_update,pluto.reader.views.event__GT_fn(ctx,ext,component_will_update,((function (map__7120,map__7120__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount){
return (function (p1__7115_SHARP_,p2__7116_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__7115_SHARP_),cljs.core.cst$kw$new,p2__7116_SHARP_);
});})(map__7120,map__7120__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount))
)], null):null),(cljs.core.truth_(component_did_update)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_did_DASH_update,pluto.reader.views.event__GT_fn(ctx,ext,component_did_update,((function (map__7120,map__7120__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount){
return (function (p1__7117_SHARP_,p2__7118_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__7117_SHARP_),cljs.core.cst$kw$old,p2__7118_SHARP_);
});})(map__7120,map__7120__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount))
)], null):null),(cljs.core.truth_(component_will_unmount)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_will_DASH_unmount,pluto.reader.views.event__GT_fn(ctx,ext,component_will_unmount,((function (map__7120,map__7120__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount){
return (function (){
return cljs.core.PersistentArrayMap.EMPTY;
});})(map__7120,map__7120__$1,get_initial_state,component_will_receive_props,should_component_update,component_will_mount,component_did_mount,component_will_update,component_did_update,component_will_unmount))
)], null):null)], 0));
});
pluto.reader.views.parse = (function pluto$reader$views$parse(var_args){
var G__7123 = arguments.length;
switch (G__7123) {
case 3:
return pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$3 = (function (ctx,ext,o){
var map__7124 = pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$4(ctx,ext,null,((cljs.core.map_QMARK_(o))?cljs.core.cst$kw$view.cljs$core$IFn$_invoke$arity$1(o):o));
var map__7124__$1 = (((((!((map__7124 == null))))?(((((map__7124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7124):map__7124);
var m = map__7124__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7124__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7124__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
return m;
} else {
if(cljs.core.map_QMARK_(o)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,reagent.core.create_class(pluto.reader.views.create_reagent_spec(ctx,ext,o,data))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,((function (map__7124,map__7124__$1,m,data,errors){
return (function (o__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.views.error_boundary,ctx,pluto.reader.views.inject_properties(data,o__$1)], null);
});})(map__7124,map__7124__$1,m,data,errors))
], null);
}
}
});

pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$4 = (function (ctx,ext,parent,o){
if(cljs.core.list_QMARK_(o)){
var map__7126 = (pluto.reader.blocks.parse.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.blocks.parse.cljs$core$IFn$_invoke$arity$4(ctx,ext,parent,o) : pluto.reader.blocks.parse.call(null,ctx,ext,parent,o));
var map__7126__$1 = (((((!((map__7126 == null))))?(((((map__7126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7126):map__7126);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7126__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7126__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
var d = pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$4(ctx,ext,o,data);
var props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(pluto.reader.views.unresolved_properties,cljs.core.PersistentHashSet.EMPTY,d);
return pluto.reader.errors.merge_errors(d,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(errors,((cljs.core.seq(props))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unresolved_DASH_properties,props)], null)], null):null)));
}
} else {
return pluto.reader.views.parse_hiccup_element(ctx,ext,o);
}
});

pluto.reader.views.parse.cljs$lang$maxFixedArity = 4;

pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$view,(function (ctx,ext,type,value){
var map__7129 = pluto.reader.reference.resolve(ctx,ext,type,value);
var map__7129__$1 = (((((!((map__7129 == null))))?(((((map__7129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7129):map__7129);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7129__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7129__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(data)){
return pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$3(ctx,ext,data);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
}
}));
