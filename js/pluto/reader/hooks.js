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
return (function (p__1370,_,___$1,___$2){
var map__1371 = p__1370;
var map__1371__$1 = ((((!((map__1371 == null)))?(((((map__1371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1371):map__1371);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1371__$1,cljs.core.cst$kw$type);
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
var map__1373 = pluto.reader.blocks.destructure(ps,properties);
var map__1373__$1 = ((((!((map__1373 == null)))?(((((map__1373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1373):map__1373);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1373__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1373__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,cljs.core.cst$kw$env,cljs.core.dissoc,cljs.core.cst$sym$properties),cljs.core.cst$kw$env,cljs.core.merge,data)], null),errors);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,m], null);
}
});
pluto.reader.hooks.hiccup_with_properties = (function pluto$reader$hooks$hiccup_with_properties(h,properties){
if(cljs.core.vector_QMARK_(h)){
var vec__1376 = h;
var seq__1377 = cljs.core.seq(vec__1376);
var first__1378 = cljs.core.first(seq__1377);
var seq__1377__$1 = cljs.core.next(seq__1377);
var tag = first__1378;
var properties_children = seq__1377__$1;
var vec__1379 = pluto.reader.views.resolve_properties_children(properties_children);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1379,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1379,(1),null);
var map__1382 = (cljs.core.truth_(properties)?pluto.reader.hooks.inject_properties(props,properties):null);
var map__1382__$1 = ((((!((map__1382 == null)))?(((((map__1382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1382):map__1382);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1382__$1,cljs.core.cst$kw$data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,(cljs.core.truth_(data)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,data], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag], null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__1376,seq__1377,first__1378,seq__1377__$1,tag,properties_children,vec__1379,props,children,map__1382,map__1382__$1,data){
return (function (p1__1375_SHARP_){
return (pluto.reader.hooks.hiccup_with_properties.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.hooks.hiccup_with_properties.cljs$core$IFn$_invoke$arity$2(p1__1375_SHARP_,properties) : pluto.reader.hooks.hiccup_with_properties.call(null,p1__1375_SHARP_,properties));
});})(vec__1376,seq__1377,first__1378,seq__1377__$1,tag,properties_children,vec__1379,props,children,map__1382,map__1382__$1,data))
,children));
} else {
return h;
}
});
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$view,(function (def,hook,opts,m){
var map__1384 = pluto.reader.reference.resolve(m,def,hook);
var map__1384__$1 = ((((!((map__1384 == null)))?(((((map__1384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1384):map__1384);
var m__$1 = map__1384__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1384__$1,cljs.core.cst$kw$data);
var map__1385 = pluto.reader.views.parse(opts,data);
var map__1385__$1 = ((((!((map__1385 == null)))?(((((map__1385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1385):map__1385);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1385__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1385__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors((cljs.core.truth_(data__$1)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,((function (map__1384,map__1384__$1,m__$1,data,map__1385,map__1385__$1,data__$1,errors){
return (function (o){
return pluto.reader.hooks.hiccup_with_properties(data__$1,o);
});})(map__1384,map__1384__$1,m__$1,data,map__1385,map__1385__$1,data__$1,errors))
], null):null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(errors,cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(m__$1)));
}));
pluto.reader.hooks.resolve_capacities_value = (function pluto$reader$hooks$resolve_capacities_value(key,error_key,capacities,p__1388,hook){
var map__1389 = p__1388;
var map__1389__$1 = ((((!((map__1389 == null)))?(((((map__1389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1389):map__1389);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1389__$1,cljs.core.cst$kw$name);
var optional_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1389__$1,cljs.core.cst$kw$optional_QMARK_);
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hook,name);
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
var temp__5455__auto____$1 = (function (){var fexpr__1391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(capacities,key);
return (fexpr__1391.cljs$core$IFn$_invoke$arity$1 ? fexpr__1391.cljs$core$IFn$_invoke$arity$1(value) : fexpr__1391.call(null,value));
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
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$component,(function (def,hook,p__1392,_){
var map__1393 = p__1392;
var map__1393__$1 = ((((!((map__1393 == null)))?(((((map__1393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1393):map__1393);
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1393__$1,cljs.core.cst$kw$capacities);
return pluto.reader.hooks.resolve_capacities_value(cljs.core.cst$kw$components,cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_component,capacities,def,hook);
}));
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$event,(function (def,hook,p__1395,m){
var map__1396 = p__1395;
var map__1396__$1 = ((((!((map__1396 == null)))?(((((map__1396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1396):map__1396);
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1396__$1,cljs.core.cst$kw$capacities);
return pluto.reader.hooks.resolve_capacities_value(cljs.core.cst$kw$events,cljs.core.cst$kw$pluto$reader$errors_SLASH_event_DASH_not_DASH_exposed,capacities,def,hook);
}));
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$query,(function (def,hook,p__1398,_){
var map__1399 = p__1398;
var map__1399__$1 = ((((!((map__1399 == null)))?(((((map__1399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1399):map__1399);
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1399__$1,cljs.core.cst$kw$capacities);
return pluto.reader.hooks.resolve_capacities_value(cljs.core.cst$kw$queries,cljs.core.cst$kw$pluto$reader$errors_SLASH_query_DASH_not_DASH_exposed,capacities,def,hook);
}));
pluto.reader.hooks.resolve_property_value = (function pluto$reader$hooks$resolve_property_value(f,p__1401,hook){
var map__1402 = p__1401;
var map__1402__$1 = ((((!((map__1402 == null)))?(((((map__1402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1402):map__1402);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1402__$1,cljs.core.cst$kw$name);
var optional_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1402__$1,cljs.core.cst$kw$optional_QMARK_);
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
return pluto.reader.hooks.resolve_property_value((function (p1__1404_SHARP_){
return clojure.set.subset_QMARK_(p1__1404_SHARP_,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(def));
}),def,hook);
}));
pluto.reader.hooks.map__GT_properties = (function pluto$reader$hooks$map__GT_properties(m){
return cljs.core.reduce_kv((function (p1__1405_SHARP_,p2__1406_SHARP_,p3__1407_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__1405_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,p2__1406_SHARP_,cljs.core.cst$kw$type,p3__1407_SHARP_], null));
}),cljs.core.PersistentVector.EMPTY,m);
});
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (def,hook,opts,m){
var G__1408 = pluto.reader.hooks.map__GT_properties(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(def));
var G__1409 = (function (){var fexpr__1412 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__1412.cljs$core$IFn$_invoke$arity$1 ? fexpr__1412.cljs$core$IFn$_invoke$arity$1(hook) : fexpr__1412.call(null,hook));
})();
var G__1410 = opts;
var G__1411 = m;
return (pluto.reader.hooks.parse_properties.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.hooks.parse_properties.cljs$core$IFn$_invoke$arity$4(G__1408,G__1409,G__1410,G__1411) : pluto.reader.hooks.parse_properties.call(null,G__1408,G__1409,G__1410,G__1411));
}));
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (def,hook,opts,m){
var props = pluto.reader.hooks.map__GT_properties(cljs.core.first(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(def)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(pluto.reader.errors.merge_results_with,((function (props){
return (function (p1__1413_SHARP_,p2__1414_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(p1__1413_SHARP_),p2__1414_SHARP_);
});})(props))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (props){
return (function (p1__1415_SHARP_){
return (pluto.reader.hooks.parse_properties.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.hooks.parse_properties.cljs$core$IFn$_invoke$arity$4(props,p1__1415_SHARP_,opts,m) : pluto.reader.hooks.parse_properties.call(null,props,p1__1415_SHARP_,opts,m));
});})(props))
,(function (){var fexpr__1416 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__1416.cljs$core$IFn$_invoke$arity$1 ? fexpr__1416.cljs$core$IFn$_invoke$arity$1(hook) : fexpr__1416.call(null,hook));
})()));
}));
pluto.reader.hooks.resolve_property.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__1417,_,___$1,___$2){
var map__1418 = p__1417;
var map__1418__$1 = ((((!((map__1418 == null)))?(((((map__1418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1418):map__1418);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1418__$1,cljs.core.cst$kw$type);
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
return cljs.core.reduce_kv((function (p1__1420_SHARP_,p2__1421_SHARP_,p3__1422_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__1420_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,p2__1421_SHARP_,cljs.core.cst$kw$type,p3__1422_SHARP_], null));
}),cljs.core.PersistentVector.EMPTY,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$hooks,s,cljs.core.cst$kw$properties], null)));
});
pluto.reader.hooks.normalize_property = (function pluto$reader$hooks$normalize_property(p__1423){
var map__1424 = p__1423;
var map__1424__$1 = ((((!((map__1424 == null)))?(((((map__1424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1424):map__1424);
var prop = map__1424__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1424__$1,cljs.core.cst$kw$name);
var normalized_name = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(name),"?",""));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(prop,cljs.core.cst$kw$name,normalized_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$optional_QMARK_,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(name,normalized_name)], 0));
});
pluto.reader.hooks.parse_properties = (function pluto$reader$hooks$parse_properties(props,v,opts,m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__1427_SHARP_,p2__1426_SHARP_){
var map__1428 = (function (){var G__1429 = pluto.reader.hooks.normalize_property(p2__1426_SHARP_);
var G__1430 = v;
var G__1431 = opts;
var G__1432 = m;
return (pluto.reader.hooks.resolve_property.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.hooks.resolve_property.cljs$core$IFn$_invoke$arity$4(G__1429,G__1430,G__1431,G__1432) : pluto.reader.hooks.resolve_property.call(null,G__1429,G__1430,G__1431,G__1432));
})();
var map__1428__$1 = ((((!((map__1428 == null)))?(((((map__1428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1428):map__1428);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1428__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1428__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors((cljs.core.truth_(data)?cljs.core.assoc_in(p1__1427_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(pluto.reader.hooks.normalize_property(p2__1426_SHARP_))], null),data):p1__1427_SHARP_),errors);
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
var map__1434 = pluto.reader.hooks.parse_hook(hook,data,opts,m);
var map__1434__$1 = ((((!((map__1434 == null)))?(((((map__1434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1434):map__1434);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1434__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1434__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(cljs.core.assoc_in(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$kw$hooks,hook_root,hook_id,cljs.core.cst$kw$parsed], null),data__$1),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$kw$hooks,hook_root,hook_id,cljs.core.cst$kw$hook_DASH_ref], null),hook),errors);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.select_keys(m,pluto.reader.hooks.hooks(m)));
});
