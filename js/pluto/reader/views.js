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
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader$views_SLASH_form,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$string,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$number,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.cst$kw$symbol,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$element,cljs.core.cst$kw$pluto$reader$views_SLASH_element),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,cljs.core.cst$kw$number,cljs.core.cst$kw$symbol,cljs.core.cst$kw$element], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$pluto$reader$views_SLASH_element], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.number_QMARK_,cljs.core.symbol_QMARK_,cljs.core.cst$kw$pluto$reader$views_SLASH_element], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader$views_SLASH_element,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$tag,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$symbol,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_),cljs.core.cst$kw$attrs,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$children,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.cst$kw$pluto$reader$views_SLASH_form)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tag,cljs.core.cst$kw$attrs,cljs.core.cst$kw$children], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol,cljs.core.cst$kw$fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.fn_QMARK_], null),null),cljs.core.map_QMARK_,cljs.spec.alpha.rep_impl(cljs.core.cst$kw$pluto$reader$views_SLASH_form,cljs.core.cst$kw$pluto$reader$views_SLASH_form)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$symbol,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_),cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.cst$kw$pluto$reader$views_SLASH_form)], null)));
pluto.reader.views.parse_hiccup_children = (function pluto$reader$views$parse_hiccup_children(ctx,ext,children){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__2120_SHARP_,p2__2119_SHARP_){
var map__2121 = (pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$3 ? pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$3(ctx,ext,p2__2119_SHARP_) : pluto.reader.views.parse.call(null,ctx,ext,p2__2119_SHARP_));
var map__2121__$1 = ((((!((map__2121 == null)))?(((((map__2121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2121):map__2121);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2121__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2121__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__2120_SHARP_,cljs.core.cst$kw$data,cljs.core.conj,data),errors);
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
pluto.reader.views.resolve_component_property = (function pluto$reader$views$resolve_component_property(ctx,ext,component,k,v){
var or__3949__auto__ = (pluto.reader.views.resolve_default_component_properties.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.views.resolve_default_component_properties.cljs$core$IFn$_invoke$arity$2(k,v) : pluto.reader.views.resolve_default_component_properties.call(null,k,v));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var temp__5455__auto__ = (function (){var G__2123 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$components,component,cljs.core.cst$kw$properties], null));
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__2123) : k.call(null,G__2123));
})();
if(cljs.core.truth_(temp__5455__auto__)){
var type = temp__5455__auto__;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,type,v) : pluto.reader.types.resolve.call(null,ctx,ext,type,v));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_component_DASH_property,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,component,cljs.core.cst$kw$property,k], null))], null)], null);
}
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
return cljs.core.reduce_kv((function (acc,k,v){
var map__2124 = pluto.reader.views.resolve_property(ctx,ext,component,k,v);
var map__2124__$1 = ((((!((map__2124 == null)))?(((((map__2124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2124):map__2124);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2124__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2124__$1,cljs.core.cst$kw$errors);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(acc,cljs.core.cst$kw$data,cljs.core.assoc,k,data);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$errors,cljs.core.PersistentVector.EMPTY], null),properties);
});
pluto.reader.views.resolve_properties_children = (function pluto$reader$views$resolve_properties_children(p__2126){
var vec__2127 = p__2126;
var seq__2128 = cljs.core.seq(vec__2127);
var first__2129 = cljs.core.first(seq__2128);
var seq__2128__$1 = cljs.core.next(seq__2128);
var properties_QMARK_ = first__2129;
var children = seq__2128__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var and__3938__auto__ = cljs.core.map_QMARK_(properties_QMARK_);
if(and__3938__auto__){
return properties_QMARK_;
} else {
return and__3938__auto__;
}
})(),((cljs.core.map_QMARK_(properties_QMARK_))?children:cljs.core.cons(properties_QMARK_,children))], null);
});
pluto.reader.views.parse_hiccup_element = (function pluto$reader$views$parse_hiccup_element(ctx,ext,o){
var explain = cljs.spec.alpha.explain_data(cljs.core.cst$kw$pluto$reader$views_SLASH_form,o);
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
var vec__2131 = o;
var seq__2132 = cljs.core.seq(vec__2131);
var first__2133 = cljs.core.first(seq__2132);
var seq__2132__$1 = cljs.core.next(seq__2132);
var element = first__2133;
var properties_children = seq__2132__$1;
var vec__2134 = pluto.reader.views.resolve_properties_children(properties_children);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2134,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2134,(1),null);
var component = pluto.reader.views.resolve_component(ctx,element);
var map__2137 = (cljs.core.truth_(properties)?pluto.reader.views.resolve_component_properties(ctx,ext,element,properties):null);
var map__2137__$1 = ((((!((map__2137 == null)))?(((((map__2137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2137):map__2137);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2137__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2137__$1,cljs.core.cst$kw$errors);
var G__2139 = (function (){var m = pluto.reader.views.parse_hiccup_children(ctx,ext,children);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$data,((function (m,vec__2131,seq__2132,first__2133,seq__2132__$1,element,properties_children,vec__2134,properties,children,component,map__2137,map__2137__$1,data,errors,explain){
return (function (p1__2130_SHARP_){
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
})()], null)),p1__2130_SHARP_);
});})(m,vec__2131,seq__2132,first__2133,seq__2132__$1,element,properties_children,vec__2134,properties,children,component,map__2137,map__2137__$1,data,errors,explain))
);
})();
var G__2139__$1 = (((component == null))?pluto.reader.errors.accumulate_errors(G__2139,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_component,element)], null)):G__2139);
if(cljs.core.seq(errors)){
return pluto.reader.errors.accumulate_errors(G__2139__$1,errors);
} else {
return G__2139__$1;
}
} else {
return null;
}
}
});
pluto.reader.views.parse = (function pluto$reader$views$parse(ctx,ext,o){
if(cljs.core.list_QMARK_(o)){
var map__2140 = (pluto.reader.blocks.parse.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.blocks.parse.cljs$core$IFn$_invoke$arity$2(ctx,o) : pluto.reader.blocks.parse.call(null,ctx,o));
var map__2140__$1 = ((((!((map__2140 == null)))?(((((map__2140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2140):map__2140);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2140__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2140__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return (pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$3 ? pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$3(ctx,ext,data) : pluto.reader.views.parse.call(null,ctx,ext,data));
}
} else {
return pluto.reader.views.parse_hiccup_element(ctx,ext,o);

}
});
pluto.reader.views.inject_properties = (function pluto$reader$views$inject_properties(m,properties){
var temp__5455__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$sym$properties], null));
if(cljs.core.truth_(temp__5455__auto__)){
var ps = temp__5455__auto__;
var map__2142 = pluto.reader.destructuring.destructure(ps,properties);
var map__2142__$1 = ((((!((map__2142 == null)))?(((((map__2142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2142):map__2142);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2142__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2142__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,cljs.core.cst$kw$env,cljs.core.dissoc,cljs.core.cst$sym$properties),cljs.core.cst$kw$env,cljs.core.merge,data)], null),errors);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,m], null);
}
});
pluto.reader.views.hiccup_with_properties = (function pluto$reader$views$hiccup_with_properties(h,properties){
if(cljs.core.vector_QMARK_(h)){
var vec__2145 = h;
var seq__2146 = cljs.core.seq(vec__2145);
var first__2147 = cljs.core.first(seq__2146);
var seq__2146__$1 = cljs.core.next(seq__2146);
var tag = first__2147;
var properties_children = seq__2146__$1;
var vec__2148 = pluto.reader.views.resolve_properties_children(properties_children);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2148,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2148,(1),null);
var map__2151 = (cljs.core.truth_(properties)?pluto.reader.views.inject_properties(props,properties):null);
var map__2151__$1 = ((((!((map__2151 == null)))?(((((map__2151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2151):map__2151);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2151__$1,cljs.core.cst$kw$data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,(cljs.core.truth_(data)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,data], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag], null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__2145,seq__2146,first__2147,seq__2146__$1,tag,properties_children,vec__2148,props,children,map__2151,map__2151__$1,data){
return (function (p1__2144_SHARP_){
return (pluto.reader.views.hiccup_with_properties.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.views.hiccup_with_properties.cljs$core$IFn$_invoke$arity$2(p1__2144_SHARP_,properties) : pluto.reader.views.hiccup_with_properties.call(null,p1__2144_SHARP_,properties));
});})(vec__2145,seq__2146,first__2147,seq__2146__$1,tag,properties_children,vec__2148,props,children,map__2151,map__2151__$1,data))
,children));
} else {
return h;
}
});
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$view,(function (ctx,ext,type,value){
var map__2153 = pluto.reader.reference.resolve(ctx,ext,type,value);
var map__2153__$1 = ((((!((map__2153 == null)))?(((((map__2153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2153):map__2153);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2153__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2153__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(data)){
var map__2155 = pluto.reader.views.parse(ctx,ext,data);
var map__2155__$1 = ((((!((map__2155 == null)))?(((((map__2155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2155):map__2155);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2155__$1,cljs.core.cst$kw$data);
var errors__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2155__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors((cljs.core.truth_(data__$1)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,((function (map__2155,map__2155__$1,data__$1,errors__$1,map__2153,map__2153__$1,data,errors){
return (function (o){
return pluto.reader.views.hiccup_with_properties(data__$1,o);
});})(map__2155,map__2155__$1,data__$1,errors__$1,map__2153,map__2153__$1,data,errors))
], null):null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(errors__$1,cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(ext)));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
}
}));
