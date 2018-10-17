// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.types');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('pluto.reader.destructuring');
goog.require('pluto.reader.errors');
goog.require('pluto.reader.reference');
goog.require('pluto.utils');
pluto.reader.types.reference_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event,null,cljs.core.cst$kw$query,null,cljs.core.cst$kw$view,null], null), null);
if((typeof pluto !== 'undefined') && (typeof pluto.reader !== 'undefined') && (typeof pluto.reader.types !== 'undefined') && (typeof pluto.reader.types.resolve !== 'undefined')){
} else {
/**
 * Resolve a value based on a type.
 * Returns a map of either:
 *  * data with the resolved data
 *  * errors encapsulating all errors generated during resolution
 */
pluto.reader.types.resolve = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.reader.types","resolve"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (ctx,ext,type,value){
if((value instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if((type instanceof cljs.core.Keyword)){
return type;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$one_DASH_of.cljs$core$IFn$_invoke$arity$1(type))){
return cljs.core.cst$kw$one_DASH_of;
} else {
if(cljs.core.set_QMARK_(type)){
return cljs.core.cst$kw$subset;
} else {
if(cljs.core.map_QMARK_(type)){
return cljs.core.cst$kw$assoc;
} else {
if(cljs.core.vector_QMARK_(type)){
return cljs.core.cst$kw$sequence;
} else {
return null;
}
}
}
}
}
}
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,cljs.core.cst$kw$default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$symbol,(function (_,___$1,___$2,value){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
}));
pluto.reader.types.invalid_type_value = (function pluto$reader$types$invalid_type_value(type,value){
return pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_type_DASH_value,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$value,value], null));
});
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$string,(function (_,___$1,___$2,value){
if(typeof value === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$string,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$keyword,(function (_,___$1,___$2,value){
if((value instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$keyword,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$subset,(function (_,___$1,type,value){
if(cljs.core.truth_((function (){var and__3938__auto__ = !((value == null));
if(and__3938__auto__){
return clojure.set.subset_QMARK_(value,type);
} else {
return and__3938__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$subset,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$one_DASH_of,(function (_,___$1,p__2026,value){
var map__2027 = p__2026;
var map__2027__$1 = ((((!((map__2027 == null)))?(((((map__2027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2027):map__2027);
var one_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2027__$1,cljs.core.cst$kw$one_DASH_of);
var temp__5455__auto__ = (one_of.cljs$core$IFn$_invoke$arity$1 ? one_of.cljs$core$IFn$_invoke$arity$1(value) : one_of.call(null,value));
if(cljs.core.truth_(temp__5455__auto__)){
var o = temp__5455__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,o], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$one_DASH_of,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$sequence,(function (ctx,ext,type,value){
if(((cljs.core.vector_QMARK_(type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(type))) && (cljs.core.map_QMARK_(cljs.core.first(type))))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(pluto.reader.errors.merge_results_with,(function (p1__2029_SHARP_,p2__2030_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(p1__2029_SHARP_),p2__2030_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__2031_SHARP_){
var G__2032 = ctx;
var G__2033 = ext;
var G__2034 = cljs.core.first(type);
var G__2035 = p1__2031_SHARP_;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__2032,G__2033,G__2034,G__2035) : pluto.reader.types.resolve.call(null,G__2032,G__2033,G__2034,G__2035));
}),value));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_sequential_DASH_type,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$value,value], null))], null)], null);
}
}));
pluto.reader.types.sentinel = cljs.core.cst$kw$pluto$reader$types_SLASH_sentinel;
pluto.reader.types.property = (function pluto$reader$types$property(name,value){
var normalized_name = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(name),"?",""));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.get.cljs$core$IFn$_invoke$arity$3(value,normalized_name,pluto.reader.types.sentinel),cljs.core.cst$kw$name,normalized_name,cljs.core.cst$kw$optional_QMARK_,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(name,normalized_name)], null);
});
pluto.reader.types.resolve_property = (function pluto$reader$types$resolve_property(ctx,ext,m,p__2037,type){
var map__2038 = p__2037;
var map__2038__$1 = ((((!((map__2038 == null)))?(((((map__2038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2038):map__2038);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2038__$1,cljs.core.cst$kw$name);
var optional_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2038__$1,cljs.core.cst$kw$optional_QMARK_);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2038__$1,cljs.core.cst$kw$value);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(pluto.reader.types.sentinel,value)){
var map__2040 = (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,type,value) : pluto.reader.types.resolve.call(null,ctx,ext,type,value));
var map__2040__$1 = ((((!((map__2040 == null)))?(((((map__2040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2040):map__2040);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2040__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2040__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors((cljs.core.truth_(data)?cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,name], null),data):m),errors);
} else {
if(cljs.core.truth_(optional_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$data,((function (map__2038,map__2038__$1,name,optional_QMARK_,value){
return (function (p1__2036_SHARP_){
if(cljs.core.empty_QMARK_(p1__2036_SHARP_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return p1__2036_SHARP_;
}
});})(map__2038,map__2038__$1,name,optional_QMARK_,value))
);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_missing_DASH_property,name)], null));
}
}
});
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$assoc,(function (ctx,ext,type,value){
if(cljs.core.map_QMARK_(type)){
return cljs.core.reduce_kv((function (p1__2042_SHARP_,p2__2043_SHARP_,p3__2044_SHARP_){
return pluto.reader.types.resolve_property(ctx,ext,p1__2042_SHARP_,pluto.reader.types.property(p2__2043_SHARP_,value),p3__2044_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,type);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_assoc_DASH_type,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$value,value], null))], null)], null);
}
}));
pluto.reader.types.resolve_arguments = (function pluto$reader$types$resolve_arguments(ctx,ext,event,arguments$){
var temp__5455__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$events,event,cljs.core.cst$kw$arguments], null));
if(cljs.core.truth_(temp__5455__auto__)){
var type = temp__5455__auto__;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,type,arguments$) : pluto.reader.types.resolve.call(null,ctx,ext,type,arguments$));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_missing_DASH_reference_DASH_arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$events,cljs.core.cst$kw$value,event], null))], null)], null);
}
});
pluto.reader.types.replace_atom = (function pluto$reader$types$replace_atom(env,o){
if(cljs.core.contains_QMARK_(env,o)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,o);
} else {
if((o instanceof cljs.core.Symbol)){
return null;
} else {
if(typeof o === 'string'){
return pluto.utils.interpolate(env,o);
} else {
return o;

}
}
}
});
pluto.reader.types.event_after_env = (function pluto$reader$types$event_after_env(ref,data,args,bindings){
return (function (o,env){
var env__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,cljs.core.reduce_kv((function (p1__2045_SHARP_,p2__2046_SHARP_,p3__2047_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__2045_SHARP_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p2__2046_SHARP_)),p3__2047_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,o),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(pluto.reader.destructuring.destructure(bindings,args))], 0));
var dic = cljs.core.reduce_kv(((function (env__$1){
return (function (p1__2048_SHARP_,p2__2049_SHARP_,p3__2050_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__2048_SHARP_,p2__2049_SHARP_,((cljs.core.contains_QMARK_(env__$1,p3__2050_SHARP_))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,p3__2050_SHARP_):p3__2050_SHARP_));
});})(env__$1))
,cljs.core.PersistentArrayMap.EMPTY,env__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o,cljs.core.reduce_kv(((function (env__$1,dic){
return (function (p1__2051_SHARP_,p2__2052_SHARP_,p3__2053_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__2051_SHARP_,p2__2052_SHARP_,pluto.reader.types.replace_atom(dic,p3__2053_SHARP_));
});})(env__$1,dic))
,cljs.core.PersistentArrayMap.EMPTY,data)], 0))], null);
});
});
pluto.reader.types.reference_with_arguments = (function pluto$reader$types$reference_with_arguments(ctx,ext,ref,event,arguments$,args,bindings){
if(cljs.core.truth_(arguments$)){
var map__2054 = pluto.reader.types.resolve_arguments(ctx,ext,event,arguments$);
var map__2054__$1 = ((((!((map__2054 == null)))?(((((map__2054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2054):map__2054);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2054__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2054__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,pluto.reader.types.event_after_env(ref,data,args,bindings)], null),errors);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,(function (o,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,o], null);
})], null);
}
});
pluto.reader.types.reference_symbol = (function pluto$reader$types$reference_symbol(value){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value,(2));
});
/**
 * A local event must define a let block and have a single destructuring binding accessing 'properties.
 */
pluto.reader.types.local_event_QMARK_ = (function pluto$reader$types$local_event_QMARK_(data){
if(cljs.core.list_QMARK_(data)){
var vec__2056 = data;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2056,(0),null);
var bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2056,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(data))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$let,form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))) && (cljs.core.map_QMARK_(cljs.core.first(bindings))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$properties,cljs.core.second(bindings))) && (cljs.core.vector_QMARK_(pluto.reader.types.reference_symbol(data))));
} else {
return null;
}
});
/**
 * References local references defining let blocks
 */
pluto.reader.types.resolve_local_reference = (function pluto$reader$types$resolve_local_reference(ctx,ext,type,p__2059){
var vec__2060 = p__2059;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2060,(0),null);
var value = vec__2060;
var map__2063 = pluto.reader.reference.resolve(ctx,ext,type,value);
var map__2063__$1 = ((((!((map__2063 == null)))?(((((map__2063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2063):map__2063);
var m = map__2063__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2063__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2063__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(data)){
if(cljs.core.truth_(pluto.reader.types.local_event_QMARK_(data))){
var vec__2065 = pluto.reader.types.reference_symbol(data);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2065,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2065,(1),null);
var reference = vec__2065;
var bindings = cljs.core.first(cljs.core.second(data));
var map__2068 = pluto.reader.reference.resolve(ctx,ext,type,reference);
var map__2068__$1 = ((((!((map__2068 == null)))?(((((map__2068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2068):map__2068);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2068__$1,cljs.core.cst$kw$data);
var errors__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2068__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ref,data__$1,cljs.core.cst$kw$event,event,cljs.core.cst$kw$args,args,cljs.core.cst$kw$bindings,bindings], null)], null),errors__$1);
} else {
if((data instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ref,data,cljs.core.cst$kw$event,name], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_local_DASH_event,data)], null)], null);

}
}
} else {
return m;
}
});
pluto.reader.types.resolve_event = (function pluto$reader$types$resolve_event(ctx,ext,type,p__2070){
var vec__2071 = p__2070;
var symbol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2071,(0),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2071,(1),null);
var value = vec__2071;
var map__2074 = pluto.reader.types.resolve_local_reference(ctx,ext,type,value);
var map__2074__$1 = ((((!((map__2074 == null)))?(((((map__2074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2074):map__2074);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2074__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2074__$1,cljs.core.cst$kw$errors);
var map__2075 = data;
var map__2075__$1 = ((((!((map__2075 == null)))?(((((map__2075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2075):map__2075);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2075__$1,cljs.core.cst$kw$event);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2075__$1,cljs.core.cst$kw$ref);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2075__$1,cljs.core.cst$kw$args);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2075__$1,cljs.core.cst$kw$bindings);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(data)?pluto.reader.types.reference_with_arguments(ctx,ext,ref,event,(function (){var or__3949__auto__ = args;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return arguments$;
}
})(),arguments$,bindings):null),(cljs.core.truth_(errors)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_event,symbol)], null),errors)], null):null)], 0));
});
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$event,(function (ctx,ext,type,p__2078){
var vec__2079 = p__2078;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2079,(0),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2079,(1),null);
var value = vec__2079;
return pluto.reader.types.resolve_event(ctx,ext,type,value);
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$query,(function (ctx,ext,type,p__2082){
var vec__2083 = p__2082;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2083,(0),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2083,(1),null);
var value = vec__2083;
var map__2086 = pluto.reader.reference.resolve(ctx,ext,type,value);
var map__2086__$1 = ((((!((map__2086 == null)))?(((((map__2086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2086):map__2086);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2086__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2086__$1,cljs.core.cst$kw$errors);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(data)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,(cljs.core.truth_(arguments$)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,arguments$], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data], null))], null):null),(cljs.core.truth_(errors)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_query,name)], null),errors)], null):null)], 0));
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,___$1,type,value){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,type], null),(cljs.core.truth_(value)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,value], null):null)], 0)))], null)], null);
}));
