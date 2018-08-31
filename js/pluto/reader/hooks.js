// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.hooks');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('pluto.host');
goog.require('pluto.reader.blocks');
goog.require('pluto.reader.errors');
goog.require('pluto.reader.reference');
goog.require('pluto.reader.views');
if((typeof pluto !== 'undefined') && (typeof pluto.reader !== 'undefined') && (typeof pluto.reader.hooks !== 'undefined') && (typeof pluto.reader.hooks.resolve_property !== 'undefined')){
} else {
pluto.reader.hooks.resolve_property = (function (){var method_table__4401__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4402__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4403__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4404__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.reader.hooks","resolve-property"),((function (method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__,hierarchy__4405__auto__){
return (function (p__2226,_,___$1,___$2){
var map__2227 = p__2226;
var map__2227__$1 = ((((!((map__2227 == null)))?(((((map__2227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2227):map__2227);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2227__$1,cljs.core.cst$kw$type);
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
});})(method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__,hierarchy__4405__auto__))
,cljs.core.cst$kw$default,hierarchy__4405__auto__,method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__));
})();
}
pluto.reader.hooks.inject_properties = (function pluto$reader$hooks$inject_properties(m,properties){
var temp__5455__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$sym$properties], null));
if(cljs.core.truth_(temp__5455__auto__)){
var ps = temp__5455__auto__;
var map__2229 = pluto.reader.blocks.destructure(ps,properties);
var map__2229__$1 = ((((!((map__2229 == null)))?(((((map__2229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2229):map__2229);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2229__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2229__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,cljs.core.cst$kw$env,cljs.core.dissoc,cljs.core.cst$sym$properties),cljs.core.cst$kw$env,cljs.core.merge,data)], null),errors);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,m], null);
}
});
pluto.reader.hooks.hiccup_with_properties = (function pluto$reader$hooks$hiccup_with_properties(h,properties){
if(cljs.core.vector_QMARK_(h)){
var vec__2232 = h;
var seq__2233 = cljs.core.seq(vec__2232);
var first__2234 = cljs.core.first(seq__2233);
var seq__2233__$1 = cljs.core.next(seq__2233);
var tag = first__2234;
var first__2234__$1 = cljs.core.first(seq__2233__$1);
var seq__2233__$2 = cljs.core.next(seq__2233__$1);
var props = first__2234__$1;
var children = seq__2233__$2;
var map__2235 = pluto.reader.hooks.inject_properties(props,properties);
var map__2235__$1 = ((((!((map__2235 == null)))?(((((map__2235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2235):map__2235);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2235__$1,cljs.core.cst$kw$data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,data], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__2232,seq__2233,first__2234,seq__2233__$1,tag,first__2234__$1,seq__2233__$2,props,children,map__2235,map__2235__$1,data){
return (function (p1__2231_SHARP_){
return (pluto.reader.hooks.hiccup_with_properties.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.hooks.hiccup_with_properties.cljs$core$IFn$_invoke$arity$2(p1__2231_SHARP_,properties) : pluto.reader.hooks.hiccup_with_properties.call(null,p1__2231_SHARP_,properties));
});})(vec__2232,seq__2233,first__2234,seq__2233__$1,tag,first__2234__$1,seq__2233__$2,props,children,map__2235,map__2235__$1,data))
,children));
} else {
return h;
}
});
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$view,(function (def,hook,opts,m){
var map__2237 = pluto.reader.reference.resolve(m,def,hook);
var map__2237__$1 = ((((!((map__2237 == null)))?(((((map__2237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2237):map__2237);
var m__$1 = map__2237__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2237__$1,cljs.core.cst$kw$data);
var map__2238 = pluto.reader.views.parse(opts,data);
var map__2238__$1 = ((((!((map__2238 == null)))?(((((map__2238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2238):map__2238);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2238__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2238__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors((cljs.core.truth_(data__$1)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,((function (map__2237,map__2237__$1,m__$1,data,map__2238,map__2238__$1,data__$1,errors){
return (function (o){
return pluto.reader.hooks.hiccup_with_properties(data__$1,o);
});})(map__2237,map__2237__$1,m__$1,data,map__2238,map__2238__$1,data__$1,errors))
], null):null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(errors,cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(m__$1)));
}));
pluto.reader.hooks.resolve_capacities_value = (function pluto$reader$hooks$resolve_capacities_value(key,error_key,capacities,p__2241,hook){
var map__2242 = p__2241;
var map__2242__$1 = ((((!((map__2242 == null)))?(((((map__2242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2242):map__2242);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2242__$1,cljs.core.cst$kw$name);
var optional_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2242__$1,cljs.core.cst$kw$optional_QMARK_);
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hook,name);
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
var temp__5455__auto____$1 = (function (){var fexpr__2244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(capacities,key);
return (fexpr__2244.cljs$core$IFn$_invoke$arity$1 ? fexpr__2244.cljs$core$IFn$_invoke$arity$1(value) : fexpr__2244.call(null,value));
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
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_property_DASH_name,name)], null)], null);
}
}
});
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$component,(function (def,hook,p__2245,_){
var map__2246 = p__2245;
var map__2246__$1 = ((((!((map__2246 == null)))?(((((map__2246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2246):map__2246);
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2246__$1,cljs.core.cst$kw$capacities);
return pluto.reader.hooks.resolve_capacities_value(cljs.core.cst$kw$components,cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_component,capacities,def,hook);
}));
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$event,(function (def,hook,p__2248,m){
var map__2249 = p__2248;
var map__2249__$1 = ((((!((map__2249 == null)))?(((((map__2249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2249):map__2249);
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2249__$1,cljs.core.cst$kw$capacities);
return pluto.reader.hooks.resolve_capacities_value(cljs.core.cst$kw$events,cljs.core.cst$kw$pluto$reader$errors_SLASH_event_DASH_not_DASH_exposed,capacities,def,hook);
}));
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$query,(function (def,hook,p__2251,_){
var map__2252 = p__2251;
var map__2252__$1 = ((((!((map__2252 == null)))?(((((map__2252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2252):map__2252);
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2252__$1,cljs.core.cst$kw$capacities);
return pluto.reader.hooks.resolve_capacities_value(cljs.core.cst$kw$queries,cljs.core.cst$kw$pluto$reader$errors_SLASH_query_DASH_not_DASH_exposed,capacities,def,hook);
}));
pluto.reader.hooks.resolve_property_value = (function pluto$reader$hooks$resolve_property_value(f,p__2254,hook){
var map__2255 = p__2254;
var map__2255__$1 = ((((!((map__2255 == null)))?(((((map__2255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2255):map__2255);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2255__$1,cljs.core.cst$kw$name);
var optional_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2255__$1,cljs.core.cst$kw$optional_QMARK_);
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hook,name);
if(cljs.core.truth_(temp__5455__auto__)){
var o = temp__5455__auto__;
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(o) : f.call(null,o)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,o], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_property_DASH_value,o)], null)], null);
}
} else {
if(cljs.core.truth_(optional_QMARK_)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_property_DASH_name,name)], null)], null);
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
return pluto.reader.hooks.resolve_property_value((function (p1__2257_SHARP_){
return clojure.set.subset_QMARK_(p1__2257_SHARP_,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(def));
}),def,hook);
}));
pluto.reader.hooks.map__GT_properties = (function pluto$reader$hooks$map__GT_properties(m){
return cljs.core.reduce_kv((function (p1__2258_SHARP_,p2__2259_SHARP_,p3__2260_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__2258_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,p2__2259_SHARP_,cljs.core.cst$kw$type,p3__2260_SHARP_], null));
}),cljs.core.PersistentVector.EMPTY,m);
});
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (def,hook,opts,m){
var G__2261 = pluto.reader.hooks.map__GT_properties(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(def));
var G__2262 = (function (){var fexpr__2265 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__2265.cljs$core$IFn$_invoke$arity$1 ? fexpr__2265.cljs$core$IFn$_invoke$arity$1(hook) : fexpr__2265.call(null,hook));
})();
var G__2263 = opts;
var G__2264 = m;
return (pluto.reader.hooks.parse_properties.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.hooks.parse_properties.cljs$core$IFn$_invoke$arity$4(G__2261,G__2262,G__2263,G__2264) : pluto.reader.hooks.parse_properties.call(null,G__2261,G__2262,G__2263,G__2264));
}));
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (def,hook,opts,m){
var props = pluto.reader.hooks.map__GT_properties(cljs.core.first(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(def)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(pluto.reader.errors.merge_results_with,((function (props){
return (function (p1__2266_SHARP_,p2__2267_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(p1__2266_SHARP_),p2__2267_SHARP_);
});})(props))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (props){
return (function (p1__2268_SHARP_){
return (pluto.reader.hooks.parse_properties.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.hooks.parse_properties.cljs$core$IFn$_invoke$arity$4(props,p1__2268_SHARP_,opts,m) : pluto.reader.hooks.parse_properties.call(null,props,p1__2268_SHARP_,opts,m));
});})(props))
,(function (){var fexpr__2269 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__2269.cljs$core$IFn$_invoke$arity$1 ? fexpr__2269.cljs$core$IFn$_invoke$arity$1(hook) : fexpr__2269.call(null,hook));
})()));
}));
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__2270,_,___$1,___$2){
var map__2271 = p__2270;
var map__2271__$1 = ((((!((map__2271 == null)))?(((((map__2271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2271):map__2271);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2271__$1,cljs.core.cst$kw$type);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_property_DASH_type,type)], null)], null);
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
return cljs.core.reduce_kv((function (p1__2273_SHARP_,p2__2274_SHARP_,p3__2275_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__2273_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,p2__2274_SHARP_,cljs.core.cst$kw$type,p3__2275_SHARP_], null));
}),cljs.core.PersistentVector.EMPTY,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$hooks,s,cljs.core.cst$kw$properties], null)));
});
pluto.reader.hooks.normalize_property = (function pluto$reader$hooks$normalize_property(p__2276){
var map__2277 = p__2276;
var map__2277__$1 = ((((!((map__2277 == null)))?(((((map__2277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2277):map__2277);
var prop = map__2277__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2277__$1,cljs.core.cst$kw$name);
var normalized_name = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(name),"?",""));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(prop,cljs.core.cst$kw$name,normalized_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$optional_QMARK_,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(name,normalized_name)], 0));
});
pluto.reader.hooks.parse_properties = (function pluto$reader$hooks$parse_properties(props,v,opts,m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__2280_SHARP_,p2__2279_SHARP_){
var map__2281 = (function (){var G__2282 = pluto.reader.hooks.normalize_property(p2__2279_SHARP_);
var G__2283 = v;
var G__2284 = opts;
var G__2285 = m;
return (pluto.reader.hooks.resolve_property.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.hooks.resolve_property.cljs$core$IFn$_invoke$arity$4(G__2282,G__2283,G__2284,G__2285) : pluto.reader.hooks.resolve_property.call(null,G__2282,G__2283,G__2284,G__2285));
})();
var map__2281__$1 = ((((!((map__2281 == null)))?(((((map__2281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2281):map__2281);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2281__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2281__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors((cljs.core.truth_(data)?cljs.core.assoc_in(p1__2280_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(pluto.reader.hooks.normalize_property(p2__2279_SHARP_))], null),data):p1__2280_SHARP_),errors);
}),cljs.core.PersistentArrayMap.EMPTY,props);
});
pluto.reader.hooks.parse_hook = (function pluto$reader$hooks$parse_hook(hook,v,opts,m){
return pluto.reader.hooks.parse_properties(pluto.reader.hooks.map__GT_properties(pluto.host.properties(hook)),v,opts,m);
});
pluto.reader.hooks.parse = (function pluto$reader$hooks$parse(opts,m){
return cljs.core.reduce_kv((function (acc,hook_key,data){
var hook_id = pluto.reader.hooks.local_id(hook_key);
var hook_root = pluto.reader.hooks.root_id(hook_key);
var hook = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$hooks,hook_root], null));
var map__2287 = pluto.reader.hooks.parse_hook(hook,data,opts,m);
var map__2287__$1 = ((((!((map__2287 == null)))?(((((map__2287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2287):map__2287);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2287__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2287__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(cljs.core.assoc_in(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$kw$hooks,hook_root,hook_id,cljs.core.cst$kw$parsed], null),data__$1),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$kw$hooks,hook_root,hook_id,cljs.core.cst$kw$hook_DASH_ref], null),hook),errors);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.select_keys(m,pluto.reader.hooks.hooks(m)));
});
