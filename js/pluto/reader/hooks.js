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
return (function (p__1245,_,___$1,___$2){
var map__1246 = p__1245;
var map__1246__$1 = ((((!((map__1246 == null)))?(((((map__1246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1246):map__1246);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1246__$1,cljs.core.cst$kw$type);
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
var map__1248 = pluto.reader.blocks.destructure(ps,properties);
var map__1248__$1 = ((((!((map__1248 == null)))?(((((map__1248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1248):map__1248);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1248__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1248__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,cljs.core.cst$kw$env,cljs.core.dissoc,cljs.core.cst$sym$properties),cljs.core.cst$kw$env,cljs.core.merge,data)], null),errors);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,m], null);
}
});
pluto.reader.hooks.hiccup_with_properties = (function pluto$reader$hooks$hiccup_with_properties(h,properties){
if(cljs.core.vector_QMARK_(h)){
var vec__1251 = h;
var seq__1252 = cljs.core.seq(vec__1251);
var first__1253 = cljs.core.first(seq__1252);
var seq__1252__$1 = cljs.core.next(seq__1252);
var tag = first__1253;
var properties_children = seq__1252__$1;
var vec__1254 = pluto.reader.views.resolve_properties_children(properties_children);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1254,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1254,(1),null);
var map__1257 = (cljs.core.truth_(properties)?pluto.reader.hooks.inject_properties(props,properties):null);
var map__1257__$1 = ((((!((map__1257 == null)))?(((((map__1257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1257):map__1257);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1257__$1,cljs.core.cst$kw$data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,(cljs.core.truth_(data)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,data], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag], null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__1251,seq__1252,first__1253,seq__1252__$1,tag,properties_children,vec__1254,props,children,map__1257,map__1257__$1,data){
return (function (p1__1250_SHARP_){
return (pluto.reader.hooks.hiccup_with_properties.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.hooks.hiccup_with_properties.cljs$core$IFn$_invoke$arity$2(p1__1250_SHARP_,properties) : pluto.reader.hooks.hiccup_with_properties.call(null,p1__1250_SHARP_,properties));
});})(vec__1251,seq__1252,first__1253,seq__1252__$1,tag,properties_children,vec__1254,props,children,map__1257,map__1257__$1,data))
,children));
} else {
return h;
}
});
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$view,(function (def,hook,opts,m){
var map__1259 = pluto.reader.reference.resolve(m,def,hook);
var map__1259__$1 = ((((!((map__1259 == null)))?(((((map__1259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1259):map__1259);
var m__$1 = map__1259__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1259__$1,cljs.core.cst$kw$data);
var map__1260 = pluto.reader.views.parse(opts,data);
var map__1260__$1 = ((((!((map__1260 == null)))?(((((map__1260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1260):map__1260);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1260__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1260__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors((cljs.core.truth_(data__$1)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,((function (map__1259,map__1259__$1,m__$1,data,map__1260,map__1260__$1,data__$1,errors){
return (function (o){
return pluto.reader.hooks.hiccup_with_properties(data__$1,o);
});})(map__1259,map__1259__$1,m__$1,data,map__1260,map__1260__$1,data__$1,errors))
], null):null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(errors,cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(m__$1)));
}));
pluto.reader.hooks.resolve_capacities_value = (function pluto$reader$hooks$resolve_capacities_value(key,error_key,capacities,p__1263,hook){
var map__1264 = p__1263;
var map__1264__$1 = ((((!((map__1264 == null)))?(((((map__1264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1264):map__1264);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1264__$1,cljs.core.cst$kw$name);
var optional_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1264__$1,cljs.core.cst$kw$optional_QMARK_);
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hook,name);
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
var temp__5455__auto____$1 = (function (){var fexpr__1266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(capacities,key);
return (fexpr__1266.cljs$core$IFn$_invoke$arity$1 ? fexpr__1266.cljs$core$IFn$_invoke$arity$1(value) : fexpr__1266.call(null,value));
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
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$component,(function (def,hook,p__1267,_){
var map__1268 = p__1267;
var map__1268__$1 = ((((!((map__1268 == null)))?(((((map__1268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1268):map__1268);
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1268__$1,cljs.core.cst$kw$capacities);
return pluto.reader.hooks.resolve_capacities_value(cljs.core.cst$kw$components,cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_component,capacities,def,hook);
}));
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$event,(function (def,hook,p__1270,m){
var map__1271 = p__1270;
var map__1271__$1 = ((((!((map__1271 == null)))?(((((map__1271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1271):map__1271);
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1271__$1,cljs.core.cst$kw$capacities);
return pluto.reader.hooks.resolve_capacities_value(cljs.core.cst$kw$events,cljs.core.cst$kw$pluto$reader$errors_SLASH_event_DASH_not_DASH_exposed,capacities,def,hook);
}));
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$query,(function (def,hook,p__1273,_){
var map__1274 = p__1273;
var map__1274__$1 = ((((!((map__1274 == null)))?(((((map__1274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1274):map__1274);
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1274__$1,cljs.core.cst$kw$capacities);
return pluto.reader.hooks.resolve_capacities_value(cljs.core.cst$kw$queries,cljs.core.cst$kw$pluto$reader$errors_SLASH_query_DASH_not_DASH_exposed,capacities,def,hook);
}));
pluto.reader.hooks.resolve_property_value = (function pluto$reader$hooks$resolve_property_value(f,p__1276,hook){
var map__1277 = p__1276;
var map__1277__$1 = ((((!((map__1277 == null)))?(((((map__1277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1277):map__1277);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1277__$1,cljs.core.cst$kw$name);
var optional_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1277__$1,cljs.core.cst$kw$optional_QMARK_);
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
return pluto.reader.hooks.resolve_property_value((function (p1__1279_SHARP_){
return clojure.set.subset_QMARK_(p1__1279_SHARP_,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(def));
}),def,hook);
}));
pluto.reader.hooks.map__GT_properties = (function pluto$reader$hooks$map__GT_properties(m){
return cljs.core.reduce_kv((function (p1__1280_SHARP_,p2__1281_SHARP_,p3__1282_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__1280_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,p2__1281_SHARP_,cljs.core.cst$kw$type,p3__1282_SHARP_], null));
}),cljs.core.PersistentVector.EMPTY,m);
});
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (def,hook,opts,m){
var G__1283 = pluto.reader.hooks.map__GT_properties(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(def));
var G__1284 = (function (){var fexpr__1287 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__1287.cljs$core$IFn$_invoke$arity$1 ? fexpr__1287.cljs$core$IFn$_invoke$arity$1(hook) : fexpr__1287.call(null,hook));
})();
var G__1285 = opts;
var G__1286 = m;
return (pluto.reader.hooks.parse_properties.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.hooks.parse_properties.cljs$core$IFn$_invoke$arity$4(G__1283,G__1284,G__1285,G__1286) : pluto.reader.hooks.parse_properties.call(null,G__1283,G__1284,G__1285,G__1286));
}));
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (def,hook,opts,m){
var props = pluto.reader.hooks.map__GT_properties(cljs.core.first(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(def)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(pluto.reader.errors.merge_results_with,((function (props){
return (function (p1__1288_SHARP_,p2__1289_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(p1__1288_SHARP_),p2__1289_SHARP_);
});})(props))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (props){
return (function (p1__1290_SHARP_){
return (pluto.reader.hooks.parse_properties.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.hooks.parse_properties.cljs$core$IFn$_invoke$arity$4(props,p1__1290_SHARP_,opts,m) : pluto.reader.hooks.parse_properties.call(null,props,p1__1290_SHARP_,opts,m));
});})(props))
,(function (){var fexpr__1291 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__1291.cljs$core$IFn$_invoke$arity$1 ? fexpr__1291.cljs$core$IFn$_invoke$arity$1(hook) : fexpr__1291.call(null,hook));
})()));
}));
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__1292,_,___$1,___$2){
var map__1293 = p__1292;
var map__1293__$1 = ((((!((map__1293 == null)))?(((((map__1293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1293):map__1293);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1293__$1,cljs.core.cst$kw$type);
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
return cljs.core.reduce_kv((function (p1__1295_SHARP_,p2__1296_SHARP_,p3__1297_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__1295_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,p2__1296_SHARP_,cljs.core.cst$kw$type,p3__1297_SHARP_], null));
}),cljs.core.PersistentVector.EMPTY,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$hooks,s,cljs.core.cst$kw$properties], null)));
});
pluto.reader.hooks.normalize_property = (function pluto$reader$hooks$normalize_property(p__1298){
var map__1299 = p__1298;
var map__1299__$1 = ((((!((map__1299 == null)))?(((((map__1299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1299):map__1299);
var prop = map__1299__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1299__$1,cljs.core.cst$kw$name);
var normalized_name = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(name),"?",""));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(prop,cljs.core.cst$kw$name,normalized_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$optional_QMARK_,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(name,normalized_name)], 0));
});
pluto.reader.hooks.parse_properties = (function pluto$reader$hooks$parse_properties(props,v,opts,m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__1302_SHARP_,p2__1301_SHARP_){
var map__1303 = (function (){var G__1304 = pluto.reader.hooks.normalize_property(p2__1301_SHARP_);
var G__1305 = v;
var G__1306 = opts;
var G__1307 = m;
return (pluto.reader.hooks.resolve_property.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.hooks.resolve_property.cljs$core$IFn$_invoke$arity$4(G__1304,G__1305,G__1306,G__1307) : pluto.reader.hooks.resolve_property.call(null,G__1304,G__1305,G__1306,G__1307));
})();
var map__1303__$1 = ((((!((map__1303 == null)))?(((((map__1303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1303):map__1303);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1303__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1303__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors((cljs.core.truth_(data)?cljs.core.assoc_in(p1__1302_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(pluto.reader.hooks.normalize_property(p2__1301_SHARP_))], null),data):p1__1302_SHARP_),errors);
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
var map__1309 = pluto.reader.hooks.parse_hook(hook,data,opts,m);
var map__1309__$1 = ((((!((map__1309 == null)))?(((((map__1309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1309):map__1309);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1309__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1309__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(cljs.core.assoc_in(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$kw$hooks,hook_root,hook_id,cljs.core.cst$kw$parsed], null),data__$1),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$kw$hooks,hook_root,hook_id,cljs.core.cst$kw$hook_DASH_ref], null),hook),errors);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.select_keys(m,pluto.reader.hooks.hooks(m)));
});
