// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('cljs.spec.alpha');
goog.require('cljs.tools.reader.edn');
goog.require('pluto.reader.errors');
goog.require('pluto.reader.hooks');
goog.require('pluto.reader.views');
goog.require('pluto.utils');
pluto.reader.reader_error = (function pluto$reader$reader_error(ex){
return pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$reader$errors_SLASH_reader_DASH_error,cljs.core.cst$kw$ex_DASH_kind.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(ex)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pluto$reader$errors_SLASH_message,pluto.utils.ex_message(ex)], null),(function (){var temp__5720__auto__ = pluto.utils.ex_cause(ex);
if(cljs.core.truth_(temp__5720__auto__)){
var c = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cause,c], null);
} else {
return null;
}
})()], 0)));
});
/**
 * Reads an extension definition as an EDN string.
 * 
 * No semantic validation is performed at this stage.
 * 
 * Returns a map defining:
 * * :data the extension definition as a map
 * * :errors a vector of errors map triggered during read
 */
pluto.reader.read = (function pluto$reader$read(s){
try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,s)], null);
}catch (e1488){var ex = e1488;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.reader_error(ex)], null)], null);
}});
goog.exportSymbol('pluto.reader.read', pluto.reader.read);
pluto.reader.mandatory_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$meta,null], null), null);
pluto.reader.valid_keys = pluto.reader.mandatory_keys;
pluto.reader.capacity_QMARK_ = (function pluto$reader$capacity_QMARK_(m,s){
var keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(m)));
var G__1489 = cljs.core.name(s);
return (keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(G__1489) : keys.call(null,G__1489));
});
if((typeof pluto !== 'undefined') && (typeof pluto.reader !== 'undefined') && (typeof pluto.reader.valid_element_QMARK_ !== 'undefined')){
} else {
pluto.reader.valid_element_QMARK_ = (function (){var method_table__4524__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__1490 = cljs.core.get_global_hierarchy;
return (fexpr__1490.cljs$core$IFn$_invoke$arity$0 ? fexpr__1490.cljs$core$IFn$_invoke$arity$0() : fexpr__1490.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.reader","valid-element?"),((function (method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__){
return (function (_,k,___$1){
var or__4047__auto__ = cljs.core.namespace(k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.name(k);
}
});})(method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__))
,cljs.core.cst$kw$default,hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader_SLASH_meta,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$reader_SLASH_name,cljs.core.cst$kw$pluto$reader_SLASH_description,cljs.core.cst$kw$pluto$reader_SLASH_documentation], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$reader_SLASH_name,cljs.core.cst$kw$pluto$reader_SLASH_description,cljs.core.cst$kw$pluto$reader_SLASH_documentation], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__1491){
return cljs.core.map_QMARK_(G__1491);
}),(function (G__1491){
return cljs.core.contains_QMARK_(G__1491,cljs.core.cst$kw$name);
}),(function (G__1491){
return cljs.core.contains_QMARK_(G__1491,cljs.core.cst$kw$description);
}),(function (G__1491){
return cljs.core.contains_QMARK_(G__1491,cljs.core.cst$kw$documentation);
})], null),(function (G__1491){
return ((cljs.core.map_QMARK_(G__1491)) && (cljs.core.contains_QMARK_(G__1491,cljs.core.cst$kw$name)) && (cljs.core.contains_QMARK_(G__1491,cljs.core.cst$kw$description)) && (cljs.core.contains_QMARK_(G__1491,cljs.core.cst$kw$documentation)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$reader_SLASH_name,cljs.core.cst$kw$pluto$reader_SLASH_description,cljs.core.cst$kw$pluto$reader_SLASH_documentation], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$description,cljs.core.cst$kw$documentation], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$name)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$description)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$documentation))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader_SLASH_hooks,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.map_QMARK_);
pluto.reader.valid_element_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,"hooks",(function (p__1492,k,v){
var map__1493 = p__1492;
var map__1493__$1 = (((((!((map__1493 == null))))?(((((map__1493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1493):map__1493);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1493__$1,cljs.core.cst$kw$hooks);
if(cljs.core.truth_(pluto.reader.capacity_QMARK_(hooks,pluto.reader.hooks.root_id(k)))){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader_SLASH_hooks,v))){
return null;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_value,k)], null);
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_key,k)], null);
}
}));
pluto.reader.valid_element_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,"queries",(function (p__1495,k,v){
var map__1496 = p__1495;
var map__1496__$1 = (((((!((map__1496 == null))))?(((((map__1496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1496):map__1496);
var queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1496__$1,cljs.core.cst$kw$queries);
return null;
}));
pluto.reader.valid_element_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,"events",(function (p__1498,k,v){
var map__1499 = p__1498;
var map__1499__$1 = (((((!((map__1499 == null))))?(((((map__1499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1499):map__1499);
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1499__$1,cljs.core.cst$kw$events);
return null;
}));
pluto.reader.valid_element_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,"events",(function (p__1501,k,v){
var map__1502 = p__1501;
var map__1502__$1 = (((((!((map__1502 == null))))?(((((map__1502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1502):map__1502);
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1502__$1,cljs.core.cst$kw$events);
return null;
}));
pluto.reader.valid_element_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,"views",(function (p__1504,k,_){
var map__1505 = p__1504;
var map__1505__$1 = (((((!((map__1505 == null))))?(((((map__1505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1505):map__1505);
var components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1505__$1,cljs.core.cst$kw$components);
if(cljs.core.truth_((function (){var G__1508 = cljs.core.name(k);
var fexpr__1507 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.keys(components)));
return (fexpr__1507.cljs$core$IFn$_invoke$arity$1 ? fexpr__1507.cljs$core$IFn$_invoke$arity$1(G__1508) : fexpr__1507.call(null,G__1508));
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_key,k)], null);
} else {
return null;
}
}));
pluto.reader.valid_element_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,k,___$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_key,k)], null);
}));
pluto.reader.validate = (function pluto$reader$validate(p__1512,m){
var map__1513 = p__1512;
var map__1513__$1 = (((((!((map__1513 == null))))?(((((map__1513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1513):map__1513);
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1513__$1,cljs.core.cst$kw$capacities);
var keys = cljs.core.set(cljs.core.keys(m));
var missing_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(pluto.reader.mandatory_keys,keys);
return cljs.core.reduce_kv(((function (keys,missing_keys,map__1513,map__1513__$1,capacities){
return (function (p1__1511_SHARP_,p2__1509_SHARP_,p3__1510_SHARP_){
var temp__5718__auto__ = (pluto.reader.valid_element_QMARK_.cljs$core$IFn$_invoke$arity$3 ? pluto.reader.valid_element_QMARK_.cljs$core$IFn$_invoke$arity$3(capacities,p2__1509_SHARP_,p3__1510_SHARP_) : pluto.reader.valid_element_QMARK_.call(null,capacities,p2__1509_SHARP_,p3__1510_SHARP_));
if(cljs.core.truth_(temp__5718__auto__)){
var errors = temp__5718__auto__;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__1511_SHARP_,errors);
} else {
return p1__1511_SHARP_;
}
});})(keys,missing_keys,map__1513,map__1513__$1,capacities))
,((cljs.core.seq(missing_keys))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_missing_DASH_keys,missing_keys)], null):null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$sym$meta));
});
pluto.reader.parse_meta = (function pluto$reader$parse_meta(v){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader_SLASH_meta,v))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$meta,v], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_meta,v)], null)], null);
}
});
/**
 * Parse an extension definition map as encapsulated in :data key of the map returned by read.
 * `ctx` is a map defining:
 * * `capacities` a map of valid supported capacities (hooks, queries, events)
 * * `env` [optional] a map of extension environment, may contain for example id of extension {:id 'id'}, will be
 * * provided as second parameter into event and query handlers
 * 
 * Returns a map defining:
 * * :data a map of meta and parsed hooks
 * * :permissions a vector of required permissions
 * * :errors a vector of errors maps triggered during parse
 */
pluto.reader.parse = (function pluto$reader$parse(ctx,m){
var errors = pluto.reader.validate(ctx,m);
return pluto.reader.errors.merge_results.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pluto.reader.parse_meta((function (){var fexpr__1515 = cljs.core.cst$sym$meta;
return (fexpr__1515.cljs$core$IFn$_invoke$arity$1 ? fexpr__1515.cljs$core$IFn$_invoke$arity$1(m) : fexpr__1515.call(null,m));
})()),pluto.reader.hooks.parse(ctx,m),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null)], 0));
});
goog.exportSymbol('pluto.reader.parse', pluto.reader.parse);
