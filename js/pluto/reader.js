// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
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
return pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$reader$errors_SLASH_reader_DASH_error,cljs.core.cst$kw$ex_DASH_kind.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(ex)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pluto$reader$errors_SLASH_message,pluto.utils.ex_message(ex)], null),(function (){var temp__5457__auto__ = pluto.utils.ex_cause(ex);
if(cljs.core.truth_(temp__5457__auto__)){
var c = temp__5457__auto__;
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
}catch (e2141){var ex = e2141;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.reader_error(ex)], null)], null);
}});
goog.exportSymbol('pluto.reader.read', pluto.reader.read);
pluto.reader.mandatory_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$meta,null], null), null);
pluto.reader.valid_keys = pluto.reader.mandatory_keys;
pluto.reader.capacity_QMARK_ = (function pluto$reader$capacity_QMARK_(m,s){
var keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(m)));
var G__2142 = cljs.core.name(s);
return (keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(G__2142) : keys.call(null,G__2142));
});
pluto.reader.valid_capacity_QMARK_ = (function pluto$reader$valid_capacity_QMARK_(m,k,v,spec){
if(cljs.core.truth_(pluto.reader.capacity_QMARK_(m,k))){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,v))){
return null;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_value,k)], null);
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_key,k)], null);
}
});
if((typeof pluto !== 'undefined') && (typeof pluto.reader !== 'undefined') && (typeof pluto.reader.valid_element_QMARK_ !== 'undefined')){
} else {
pluto.reader.valid_element_QMARK_ = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.reader","valid-element?"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (_,k,___$1){
var or__3949__auto__ = cljs.core.namespace(k);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.name(k);
}
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,cljs.core.cst$kw$default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader_SLASH_meta,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$reader_SLASH_name,cljs.core.cst$kw$pluto$reader_SLASH_description,cljs.core.cst$kw$pluto$reader_SLASH_documentation], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$reader_SLASH_name,cljs.core.cst$kw$pluto$reader_SLASH_description,cljs.core.cst$kw$pluto$reader_SLASH_documentation], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__2143){
return cljs.core.map_QMARK_(G__2143);
}),(function (G__2143){
return cljs.core.contains_QMARK_(G__2143,cljs.core.cst$kw$name);
}),(function (G__2143){
return cljs.core.contains_QMARK_(G__2143,cljs.core.cst$kw$description);
}),(function (G__2143){
return cljs.core.contains_QMARK_(G__2143,cljs.core.cst$kw$documentation);
})], null),(function (G__2143){
return ((cljs.core.map_QMARK_(G__2143)) && (cljs.core.contains_QMARK_(G__2143,cljs.core.cst$kw$name)) && (cljs.core.contains_QMARK_(G__2143,cljs.core.cst$kw$description)) && (cljs.core.contains_QMARK_(G__2143,cljs.core.cst$kw$documentation)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$reader_SLASH_name,cljs.core.cst$kw$pluto$reader_SLASH_description,cljs.core.cst$kw$pluto$reader_SLASH_documentation], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$description,cljs.core.cst$kw$documentation], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$name)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$description)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$documentation))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader_SLASH_hooks,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.map_QMARK_);
pluto.reader.valid_element_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,"hooks",(function (p__2144,k,v){
var map__2145 = p__2144;
var map__2145__$1 = ((((!((map__2145 == null)))?(((((map__2145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2145):map__2145);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2145__$1,cljs.core.cst$kw$hooks);
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
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader_SLASH_queries,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.map_QMARK_);
pluto.reader.valid_element_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,"queries",(function (p__2147,k,v){
var map__2148 = p__2147;
var map__2148__$1 = ((((!((map__2148 == null)))?(((((map__2148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2148):map__2148);
var queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2148__$1,cljs.core.cst$kw$queries);
return pluto.reader.valid_capacity_QMARK_(queries,k,v,cljs.core.cst$kw$pluto$reader_SLASH_queries);
}));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader_SLASH_events,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.map_QMARK_);
pluto.reader.valid_element_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,"events",(function (p__2150,k,v){
var map__2151 = p__2150;
var map__2151__$1 = ((((!((map__2151 == null)))?(((((map__2151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2151):map__2151);
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2151__$1,cljs.core.cst$kw$events);
return pluto.reader.valid_capacity_QMARK_(events,k,v,cljs.core.cst$kw$pluto$reader_SLASH_events);
}));
pluto.reader.valid_element_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,"events",(function (p__2153,k,v){
var map__2154 = p__2153;
var map__2154__$1 = ((((!((map__2154 == null)))?(((((map__2154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2154):map__2154);
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2154__$1,cljs.core.cst$kw$events);
return pluto.reader.valid_capacity_QMARK_(events,k,v,cljs.core.cst$kw$pluto$reader_SLASH_events);
}));
pluto.reader.valid_element_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,"views",(function (_,___$1,___$2){
return cljs.core.PersistentVector.EMPTY;
}));
pluto.reader.valid_element_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,k,___$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_key,k)], null);
}));
pluto.reader.validate = (function pluto$reader$validate(p__2159,m){
var map__2160 = p__2159;
var map__2160__$1 = ((((!((map__2160 == null)))?(((((map__2160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2160):map__2160);
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2160__$1,cljs.core.cst$kw$capacities);
var keys = cljs.core.set(cljs.core.keys(m));
var missing_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(pluto.reader.mandatory_keys,keys);
return cljs.core.reduce_kv(((function (keys,missing_keys,map__2160,map__2160__$1,capacities){
return (function (p1__2158_SHARP_,p2__2156_SHARP_,p3__2157_SHARP_){
var temp__5455__auto__ = (pluto.reader.valid_element_QMARK_.cljs$core$IFn$_invoke$arity$3 ? pluto.reader.valid_element_QMARK_.cljs$core$IFn$_invoke$arity$3(capacities,p2__2156_SHARP_,p3__2157_SHARP_) : pluto.reader.valid_element_QMARK_.call(null,capacities,p2__2156_SHARP_,p3__2157_SHARP_));
if(cljs.core.truth_(temp__5455__auto__)){
var errors = temp__5455__auto__;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__2158_SHARP_,errors);
} else {
return p1__2158_SHARP_;
}
});})(keys,missing_keys,map__2160,map__2160__$1,capacities))
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
 * 
 * Returns a map defining:
 * * :data a map of meta and parsed hooks
 * * :permissions a vector of required permissions
 * * :errors a vector of errors maps triggered during parse
 */
pluto.reader.parse = (function pluto$reader$parse(ctx,m){
var errors = pluto.reader.validate(ctx,m);
return pluto.reader.errors.merge_results.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pluto.reader.parse_meta((function (){var fexpr__2162 = cljs.core.cst$sym$meta;
return (fexpr__2162.cljs$core$IFn$_invoke$arity$1 ? fexpr__2162.cljs$core$IFn$_invoke$arity$1(m) : fexpr__2162.call(null,m));
})()),pluto.reader.hooks.parse(ctx,m),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null)], 0));
});
goog.exportSymbol('pluto.reader.parse', pluto.reader.parse);
