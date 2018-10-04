// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.hooks');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('pluto.reader.destructuring');
goog.require('pluto.reader.errors');
goog.require('pluto.reader.reference');
goog.require('pluto.reader.views');

/**
 * Encapsulate hook lifecycle.
 * @interface
 */
pluto.reader.hooks.Hook = function(){};

/**
 * Hook it into host app.
 */
pluto.reader.hooks.hook_in = (function pluto$reader$hooks$hook_in(this$,id,properties,cofx){
if(((!((this$ == null))) && (!((this$.pluto$reader$hooks$Hook$hook_in$arity$4 == null))))){
return this$.pluto$reader$hooks$Hook$hook_in$arity$4(this$,id,properties,cofx);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (pluto.reader.hooks.hook_in[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(this$,id,properties,cofx) : m__4244__auto__.call(null,this$,id,properties,cofx));
} else {
var m__4244__auto____$1 = (pluto.reader.hooks.hook_in["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,id,properties,cofx) : m__4244__auto____$1.call(null,this$,id,properties,cofx));
} else {
throw cljs.core.missing_protocol("Hook.hook-in",this$);
}
}
}
});

/**
 * Remove extension hook from app.
 */
pluto.reader.hooks.unhook = (function pluto$reader$hooks$unhook(this$,id,properties,cofx){
if(((!((this$ == null))) && (!((this$.pluto$reader$hooks$Hook$unhook$arity$4 == null))))){
return this$.pluto$reader$hooks$Hook$unhook$arity$4(this$,id,properties,cofx);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (pluto.reader.hooks.unhook[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(this$,id,properties,cofx) : m__4244__auto__.call(null,this$,id,properties,cofx));
} else {
var m__4244__auto____$1 = (pluto.reader.hooks.unhook["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,id,properties,cofx) : m__4244__auto____$1.call(null,this$,id,properties,cofx));
} else {
throw cljs.core.missing_protocol("Hook.unhook",this$);
}
}
}
});

if((typeof pluto !== 'undefined') && (typeof pluto.reader !== 'undefined') && (typeof pluto.reader.hooks !== 'undefined') && (typeof pluto.reader.hooks.resolve_property !== 'undefined')){
} else {
pluto.reader.hooks.resolve_property = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.reader.hooks","resolve-property"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (p__7325,_,___$1,___$2){
var map__7326 = p__7325;
var map__7326__$1 = ((((!((map__7326 == null)))?(((((map__7326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7326):map__7326);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7326__$1,cljs.core.cst$kw$type);
if((type instanceof cljs.core.Keyword)){
return type;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$one_DASH_of.cljs$core$IFn$_invoke$arity$1(type))){
return cljs.core.cst$kw$set;
} else {
if(cljs.core.set_QMARK_(type)){
return cljs.core.cst$kw$subset;
} else {
if(cljs.core.map_QMARK_(type)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.vector_QMARK_(type)){
return cljs.core.cst$kw$vector;
} else {
return null;
}
}
}
}
}
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,cljs.core.cst$kw$default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
pluto.reader.hooks.inject_properties = (function pluto$reader$hooks$inject_properties(m,properties){
var temp__5455__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$sym$properties], null));
if(cljs.core.truth_(temp__5455__auto__)){
var ps = temp__5455__auto__;
var map__7328 = pluto.reader.destructuring.destructure(ps,properties);
var map__7328__$1 = ((((!((map__7328 == null)))?(((((map__7328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7328):map__7328);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7328__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7328__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,cljs.core.cst$kw$env,cljs.core.dissoc,cljs.core.cst$sym$properties),cljs.core.cst$kw$env,cljs.core.merge,data)], null),errors);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,m], null);
}
});
pluto.reader.hooks.hiccup_with_properties = (function pluto$reader$hooks$hiccup_with_properties(h,properties){
if(cljs.core.vector_QMARK_(h)){
var vec__7331 = h;
var seq__7332 = cljs.core.seq(vec__7331);
var first__7333 = cljs.core.first(seq__7332);
var seq__7332__$1 = cljs.core.next(seq__7332);
var tag = first__7333;
var properties_children = seq__7332__$1;
var vec__7334 = pluto.reader.views.resolve_properties_children(properties_children);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7334,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7334,(1),null);
var map__7337 = (cljs.core.truth_(properties)?pluto.reader.hooks.inject_properties(props,properties):null);
var map__7337__$1 = ((((!((map__7337 == null)))?(((((map__7337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7337):map__7337);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7337__$1,cljs.core.cst$kw$data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,(cljs.core.truth_(data)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,data], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag], null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__7331,seq__7332,first__7333,seq__7332__$1,tag,properties_children,vec__7334,props,children,map__7337,map__7337__$1,data){
return (function (p1__7330_SHARP_){
return (pluto.reader.hooks.hiccup_with_properties.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.hooks.hiccup_with_properties.cljs$core$IFn$_invoke$arity$2(p1__7330_SHARP_,properties) : pluto.reader.hooks.hiccup_with_properties.call(null,p1__7330_SHARP_,properties));
});})(vec__7331,seq__7332,first__7333,seq__7332__$1,tag,properties_children,vec__7334,props,children,map__7337,map__7337__$1,data))
,children));
} else {
return h;
}
});
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$view,(function (def,hook,opts,m){
var map__7339 = pluto.reader.reference.resolve(m,def,hook);
var map__7339__$1 = ((((!((map__7339 == null)))?(((((map__7339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7339):map__7339);
var m__$1 = map__7339__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7339__$1,cljs.core.cst$kw$data);
var map__7340 = pluto.reader.views.parse(opts,data);
var map__7340__$1 = ((((!((map__7340 == null)))?(((((map__7340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7340):map__7340);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7340__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7340__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors((cljs.core.truth_(data__$1)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,((function (map__7339,map__7339__$1,m__$1,data,map__7340,map__7340__$1,data__$1,errors){
return (function (o){
return pluto.reader.hooks.hiccup_with_properties(data__$1,o);
});})(map__7339,map__7339__$1,m__$1,data,map__7340,map__7340__$1,data__$1,errors))
], null):null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(errors,cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(m__$1)));
}));
pluto.reader.hooks.resolve_capacities_value = (function pluto$reader$hooks$resolve_capacities_value(key,error_key,capacities,p__7343,hook){
var map__7344 = p__7343;
var map__7344__$1 = ((((!((map__7344 == null)))?(((((map__7344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7344):map__7344);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7344__$1,cljs.core.cst$kw$name);
var optional_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7344__$1,cljs.core.cst$kw$optional_QMARK_);
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hook,name);
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
var temp__5455__auto____$1 = (function (){var fexpr__7346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(capacities,key);
return (fexpr__7346.cljs$core$IFn$_invoke$arity$1 ? fexpr__7346.cljs$core$IFn$_invoke$arity$1(value) : fexpr__7346.call(null,value));
})();
if(cljs.core.truth_(temp__5455__auto____$1)){
var component = temp__5455__auto____$1;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,component], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(error_key,value)], null)], null);
}
} else {
if(cljs.core.truth_(optional_QMARK_)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_type_DASH_name,name)], null)], null);
}
}
});
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$component,(function (def,hook,p__7347,_){
var map__7348 = p__7347;
var map__7348__$1 = ((((!((map__7348 == null)))?(((((map__7348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7348):map__7348);
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7348__$1,cljs.core.cst$kw$capacities);
return pluto.reader.hooks.resolve_capacities_value(cljs.core.cst$kw$components,cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_component,capacities,def,hook);
}));
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$event,(function (def,hook,p__7350,m){
var map__7351 = p__7350;
var map__7351__$1 = ((((!((map__7351 == null)))?(((((map__7351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7351):map__7351);
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7351__$1,cljs.core.cst$kw$capacities);
return pluto.reader.hooks.resolve_capacities_value(cljs.core.cst$kw$events,cljs.core.cst$kw$pluto$reader$errors_SLASH_event_DASH_not_DASH_exposed,capacities,def,hook);
}));
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$query,(function (def,hook,p__7353,_){
var map__7354 = p__7353;
var map__7354__$1 = ((((!((map__7354 == null)))?(((((map__7354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7354):map__7354);
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7354__$1,cljs.core.cst$kw$capacities);
return pluto.reader.hooks.resolve_capacities_value(cljs.core.cst$kw$queries,cljs.core.cst$kw$pluto$reader$errors_SLASH_query_DASH_not_DASH_exposed,capacities,def,hook);
}));
pluto.reader.hooks.resolve_property_value = (function pluto$reader$hooks$resolve_property_value(f,p__7356,hook){
var map__7357 = p__7356;
var map__7357__$1 = ((((!((map__7357 == null)))?(((((map__7357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7357):map__7357);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7357__$1,cljs.core.cst$kw$name);
var optional_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7357__$1,cljs.core.cst$kw$optional_QMARK_);
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hook,name);
if(cljs.core.truth_(temp__5455__auto__)){
var o = temp__5455__auto__;
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(o) : f.call(null,o)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,o], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_type_DASH_value,o)], null)], null);
}
} else {
if(cljs.core.truth_(optional_QMARK_)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_type_DASH_name,name)], null)], null);
}
}
});
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$string,(function (def,hook,_,___$1){
return pluto.reader.hooks.resolve_property_value(cljs.core.string_QMARK_,def,hook);
}));
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$keyword,(function (def,hook,_,___$1){
return pluto.reader.hooks.resolve_property_value(cljs.core.keyword_QMARK_,def,hook);
}));
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set,(function (def,hook,_,___$1){
return pluto.reader.hooks.resolve_property_value(cljs.core.cst$kw$one_DASH_of.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(def)),def,hook);
}));
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$subset,(function (def,hook,_,___$1){
return pluto.reader.hooks.resolve_property_value((function (p1__7359_SHARP_){
return clojure.set.subset_QMARK_(p1__7359_SHARP_,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(def));
}),def,hook);
}));
pluto.reader.hooks.map__GT_properties = (function pluto$reader$hooks$map__GT_properties(m){
return cljs.core.reduce_kv((function (p1__7360_SHARP_,p2__7361_SHARP_,p3__7362_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__7360_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,p2__7361_SHARP_,cljs.core.cst$kw$type,p3__7362_SHARP_], null));
}),cljs.core.PersistentVector.EMPTY,m);
});
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (def,hook,opts,m){
var G__7363 = pluto.reader.hooks.map__GT_properties(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(def));
var G__7364 = (function (){var fexpr__7367 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__7367.cljs$core$IFn$_invoke$arity$1 ? fexpr__7367.cljs$core$IFn$_invoke$arity$1(hook) : fexpr__7367.call(null,hook));
})();
var G__7365 = opts;
var G__7366 = m;
return (pluto.reader.hooks.parse_properties.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.hooks.parse_properties.cljs$core$IFn$_invoke$arity$4(G__7363,G__7364,G__7365,G__7366) : pluto.reader.hooks.parse_properties.call(null,G__7363,G__7364,G__7365,G__7366));
}));
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (def,hook,opts,m){
var props = pluto.reader.hooks.map__GT_properties(cljs.core.first(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(def)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(pluto.reader.errors.merge_results_with,((function (props){
return (function (p1__7368_SHARP_,p2__7369_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(p1__7368_SHARP_),p2__7369_SHARP_);
});})(props))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (props){
return (function (p1__7370_SHARP_){
return (pluto.reader.hooks.parse_properties.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.hooks.parse_properties.cljs$core$IFn$_invoke$arity$4(props,p1__7370_SHARP_,opts,m) : pluto.reader.hooks.parse_properties.call(null,props,p1__7370_SHARP_,opts,m));
});})(props))
,(function (){var fexpr__7371 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__7371.cljs$core$IFn$_invoke$arity$1 ? fexpr__7371.cljs$core$IFn$_invoke$arity$1(hook) : fexpr__7371.call(null,hook));
})()));
}));
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__7372,_,___$1,___$2){
var map__7373 = p__7372;
var map__7373__$1 = ((((!((map__7373 == null)))?(((((map__7373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7373):map__7373);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7373__$1,cljs.core.cst$kw$type);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_type,type)], null)], null);
}));
pluto.reader.hooks.hook_QMARK_ = (function pluto$reader$hooks$hook_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("hooks",cljs.core.namespace(s));
});
pluto.reader.hooks.hooks = (function pluto$reader$hooks$hooks(ext){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pluto.reader.hooks.hook_QMARK_,cljs.core.keys(ext));
});
pluto.reader.hooks.local_id = (function pluto$reader$hooks$local_id(s){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.rest(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(s),/\./))));
});
pluto.reader.hooks.root_id = (function pluto$reader$hooks$root_id(s){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(s),/\./)));
});
pluto.reader.hooks.properties = (function pluto$reader$hooks$properties(opts,s){
return cljs.core.reduce_kv((function (p1__7375_SHARP_,p2__7376_SHARP_,p3__7377_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__7375_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,p2__7376_SHARP_,cljs.core.cst$kw$type,p3__7377_SHARP_], null));
}),cljs.core.PersistentVector.EMPTY,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$hooks,s,cljs.core.cst$kw$properties], null)));
});
pluto.reader.hooks.normalize_property = (function pluto$reader$hooks$normalize_property(p__7378){
var map__7379 = p__7378;
var map__7379__$1 = ((((!((map__7379 == null)))?(((((map__7379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7379):map__7379);
var prop = map__7379__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7379__$1,cljs.core.cst$kw$name);
var normalized_name = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(name),"?",""));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(prop,cljs.core.cst$kw$name,normalized_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$optional_QMARK_,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(name,normalized_name)], 0));
});
pluto.reader.hooks.parse_properties = (function pluto$reader$hooks$parse_properties(props,v,opts,m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__7382_SHARP_,p2__7381_SHARP_){
var map__7383 = (function (){var G__7384 = pluto.reader.hooks.normalize_property(p2__7381_SHARP_);
var G__7385 = v;
var G__7386 = opts;
var G__7387 = m;
return (pluto.reader.hooks.resolve_property.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.hooks.resolve_property.cljs$core$IFn$_invoke$arity$4(G__7384,G__7385,G__7386,G__7387) : pluto.reader.hooks.resolve_property.call(null,G__7384,G__7385,G__7386,G__7387));
})();
var map__7383__$1 = ((((!((map__7383 == null)))?(((((map__7383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7383):map__7383);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7383__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7383__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors((cljs.core.truth_(data)?cljs.core.assoc_in(p1__7382_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(pluto.reader.hooks.normalize_property(p2__7381_SHARP_))], null),data):p1__7382_SHARP_),errors);
}),cljs.core.PersistentArrayMap.EMPTY,props);
});
pluto.reader.hooks.parse_hook = (function pluto$reader$hooks$parse_hook(hook,v,opts,m){
return pluto.reader.hooks.parse_properties(pluto.reader.hooks.map__GT_properties(cljs.core.cst$kw$properties.cljs$core$IFn$_invoke$arity$1(hook)),v,opts,m);
});
pluto.reader.hooks.parse = (function pluto$reader$hooks$parse(opts,m){
return cljs.core.reduce_kv((function (acc,hook_key,data){
var hook_id = pluto.reader.hooks.local_id(hook_key);
var hook_root = pluto.reader.hooks.root_id(hook_key);
var hook = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$hooks,hook_root], null));
var map__7389 = pluto.reader.hooks.parse_hook(hook,data,opts,m);
var map__7389__$1 = ((((!((map__7389 == null)))?(((((map__7389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7389):map__7389);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7389__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7389__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(cljs.core.assoc_in(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$kw$hooks,hook_root,hook_id,cljs.core.cst$kw$parsed], null),data__$1),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$kw$hooks,hook_root,hook_id,cljs.core.cst$kw$hook_DASH_ref], null),hook),errors);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.select_keys(m,pluto.reader.hooks.hooks(m)));
});
