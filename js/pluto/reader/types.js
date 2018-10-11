// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.types');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('re_frame.core');
goog.require('pluto.reader.errors');
goog.require('pluto.reader.reference');
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
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,cljs.core.cst$kw$default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
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
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$one_DASH_of,(function (_,___$1,p__2010,value){
var map__2011 = p__2010;
var map__2011__$1 = ((((!((map__2011 == null)))?(((((map__2011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2011):map__2011);
var one_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2011__$1,cljs.core.cst$kw$one_DASH_of);
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(pluto.reader.errors.merge_results_with,(function (p1__2013_SHARP_,p2__2014_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(p1__2013_SHARP_),p2__2014_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__2015_SHARP_){
var G__2016 = ctx;
var G__2017 = ext;
var G__2018 = cljs.core.first(type);
var G__2019 = p1__2015_SHARP_;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__2016,G__2017,G__2018,G__2019) : pluto.reader.types.resolve.call(null,G__2016,G__2017,G__2018,G__2019));
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
pluto.reader.types.resolve_property = (function pluto$reader$types$resolve_property(ctx,ext,m,p__2021,type){
var map__2022 = p__2021;
var map__2022__$1 = ((((!((map__2022 == null)))?(((((map__2022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2022):map__2022);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2022__$1,cljs.core.cst$kw$name);
var optional_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2022__$1,cljs.core.cst$kw$optional_QMARK_);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2022__$1,cljs.core.cst$kw$value);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(pluto.reader.types.sentinel,value)){
var map__2024 = (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,type,value) : pluto.reader.types.resolve.call(null,ctx,ext,type,value));
var map__2024__$1 = ((((!((map__2024 == null)))?(((((map__2024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2024):map__2024);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2024__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2024__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors((cljs.core.truth_(data)?cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,name], null),data):m),errors);
} else {
if(cljs.core.truth_(optional_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$data,((function (map__2022,map__2022__$1,name,optional_QMARK_,value){
return (function (p1__2020_SHARP_){
if(cljs.core.empty_QMARK_(p1__2020_SHARP_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return p1__2020_SHARP_;
}
});})(map__2022,map__2022__$1,name,optional_QMARK_,value))
);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_missing_DASH_property,name)], null));
}
}
});
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$assoc,(function (ctx,ext,type,value){
if(cljs.core.map_QMARK_(type)){
return cljs.core.reduce_kv((function (p1__2026_SHARP_,p2__2027_SHARP_,p3__2028_SHARP_){
return pluto.reader.types.resolve_property(ctx,ext,p1__2026_SHARP_,pluto.reader.types.property(p2__2027_SHARP_,value),p3__2028_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,type);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_assoc_DASH_type,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$value,value], null))], null)], null);
}
}));
pluto.reader.types.resolve_reference = (function pluto$reader$types$resolve_reference(ctx,ext,type,p__2029,f,error){
var vec__2030 = p__2029;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2030,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2030,(1),null);
var value = vec__2030;
var map__2033 = pluto.reader.reference.resolve(ctx,ext,type,value);
var map__2033__$1 = ((((!((map__2033 == null)))?(((((map__2033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2033):map__2033);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2033__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2033__$1,cljs.core.cst$kw$errors);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(data)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(data) : f.call(null,data))], null):null),(cljs.core.truth_(errors)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(error,name)], null),errors)], null):null)], 0));
});
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$event,(function (ctx,ext,type,p__2035){
var vec__2036 = p__2035;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2036,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2036,(1),null);
var value = vec__2036;
return pluto.reader.types.resolve_reference(ctx,ext,type,value,((function (vec__2036,_,properties,value){
return (function (data){
return ((function (vec__2036,_,properties,value){
return (function (){
var G__2039 = (cljs.core.truth_(properties)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,properties], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data], null));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2039) : re_frame.core.dispatch.call(null,G__2039));
});
;})(vec__2036,_,properties,value))
});})(vec__2036,_,properties,value))
,cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_event);
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$query,(function (ctx,ext,type,p__2040){
var vec__2041 = p__2040;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2041,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2041,(1),null);
var value = vec__2041;
return pluto.reader.types.resolve_reference(ctx,ext,type,value,((function (vec__2041,name,properties,value){
return (function (data){
return ((function (vec__2041,name,properties,value){
return (function (){
var G__2044 = (cljs.core.truth_(properties)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,properties], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data], null));
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2044) : re_frame.core.subscribe.call(null,G__2044));
});
;})(vec__2041,name,properties,value))
});})(vec__2041,name,properties,value))
,cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_query);
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,___$1,type,value){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,type], null),(cljs.core.truth_(value)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,value], null):null)], 0)))], null)], null);
}));
