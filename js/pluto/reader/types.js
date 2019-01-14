// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.types');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.walk');
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
pluto.reader.types.resolve = (function (){var method_table__4524__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__1178 = cljs.core.get_global_hierarchy;
return (fexpr__1178.cljs$core$IFn$_invoke$arity$0 ? fexpr__1178.cljs$core$IFn$_invoke$arity$0() : fexpr__1178.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.reader.types","resolve"),((function (method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__){
return (function (ctx,ext,type,value){
if((value instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$one_DASH_of.cljs$core$IFn$_invoke$arity$1(type))){
return cljs.core.cst$kw$one_DASH_of;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$or.cljs$core$IFn$_invoke$arity$1(type))){
return cljs.core.cst$kw$or;
} else {
if((type instanceof cljs.core.Keyword)){
return type;
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
}
});})(method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__))
,cljs.core.cst$kw$default,hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$symbol,(function (_,___$1,___$2,value){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
}));
pluto.reader.types.invalid_type_value = (function pluto$reader$types$invalid_type_value(type,value){
return pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_type_DASH_value,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$value,value], null));
});
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$any,(function (_,___$1,___$2,value){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$boolean,(function (_,___$1,___$2,value){
if(cljs.core.boolean_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$boolean,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$number,(function (_,___$1,___$2,value){
if(typeof value === 'number'){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$number,value)], null)], null);
}
}));
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
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (_,___$1,___$2,value){
if(cljs.core.vector_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$vector,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (_,___$1,___$2,value){
if(cljs.core.map_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$map,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$subset,(function (_,___$1,type,value){
if(((cljs.core.set_QMARK_(value)) && (clojure.set.subset_QMARK_(value,type)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$subset,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$sequence,(function (ctx,ext,type,value){
if(((cljs.core.vector_QMARK_(type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(type))) && (cljs.core.map_QMARK_(cljs.core.first(type))))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(pluto.reader.errors.merge_results_with,(function (p1__1179_SHARP_,p2__1180_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(p1__1179_SHARP_),p2__1180_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__1181_SHARP_){
var G__1182 = ctx;
var G__1183 = ext;
var G__1184 = cljs.core.first(type);
var G__1185 = p1__1181_SHARP_;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__1182,G__1183,G__1184,G__1185) : pluto.reader.types.resolve.call(null,G__1182,G__1183,G__1184,G__1185));
}),value));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_sequential_DASH_type,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$value,value], null))], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$one_DASH_of,(function (_,___$1,p__1186,value){
var map__1187 = p__1186;
var map__1187__$1 = (((((!((map__1187 == null))))?(((((map__1187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1187):map__1187);
var one_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1187__$1,cljs.core.cst$kw$one_DASH_of);
var temp__5718__auto__ = (one_of.cljs$core$IFn$_invoke$arity$1 ? one_of.cljs$core$IFn$_invoke$arity$1(value) : one_of.call(null,value));
if(cljs.core.truth_(temp__5718__auto__)){
var o = temp__5718__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,o], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$one_DASH_of,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$or,(function (ctx,ext,p__1190,value){
var map__1191 = p__1190;
var map__1191__$1 = (((((!((map__1191 == null))))?(((((map__1191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1191):map__1191);
var or = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1191__$1,cljs.core.cst$kw$or);
if(cljs.core.coll_QMARK_(or)){
var temp__5718__auto__ = cljs.core.some(((function (map__1191,map__1191__$1,or){
return (function (p1__1189_SHARP_){
var temp__5720__auto__ = (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,p1__1189_SHARP_,value) : pluto.reader.types.resolve.call(null,ctx,ext,p1__1189_SHARP_,value));
if(cljs.core.truth_(temp__5720__auto__)){
var map__1193 = temp__5720__auto__;
var map__1193__$1 = (((((!((map__1193 == null))))?(((((map__1193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1193):map__1193);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1193__$1,cljs.core.cst$kw$data);
return data;
} else {
return null;
}
});})(map__1191,map__1191__$1,or))
,or);
if(cljs.core.truth_(temp__5718__auto__)){
var o = temp__5718__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,o], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$or,value)], null)], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$or,value)], null)], null);
}
}));
pluto.reader.types.sentinel = cljs.core.cst$kw$pluto$reader$types_SLASH_sentinel;
pluto.reader.types.property = (function pluto$reader$types$property(name,value){
var normalized_name = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(name),"?",""));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.get.cljs$core$IFn$_invoke$arity$3(value,normalized_name,pluto.reader.types.sentinel),cljs.core.cst$kw$name,normalized_name,cljs.core.cst$kw$optional_QMARK_,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(name,normalized_name)], null);
});
pluto.reader.types.resolve_property = (function pluto$reader$types$resolve_property(ctx,ext,m,p__1196,type){
var map__1197 = p__1196;
var map__1197__$1 = (((((!((map__1197 == null))))?(((((map__1197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1197):map__1197);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1197__$1,cljs.core.cst$kw$name);
var optional_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1197__$1,cljs.core.cst$kw$optional_QMARK_);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1197__$1,cljs.core.cst$kw$value);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(pluto.reader.types.sentinel,value)){
var map__1199 = (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,type,value) : pluto.reader.types.resolve.call(null,ctx,ext,type,value));
var map__1199__$1 = (((((!((map__1199 == null))))?(((((map__1199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1199):map__1199);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1199__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1199__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors((cljs.core.truth_(data)?cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,name], null),data):m),errors);
} else {
if(cljs.core.truth_(optional_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$data,((function (map__1197,map__1197__$1,name,optional_QMARK_,value){
return (function (p1__1195_SHARP_){
if(cljs.core.empty_QMARK_(p1__1195_SHARP_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return p1__1195_SHARP_;
}
});})(map__1197,map__1197__$1,name,optional_QMARK_,value))
);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_missing_DASH_property,name)], null));
}
}
});
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$assoc,(function (ctx,ext,type,value){
if(cljs.core.map_QMARK_(type)){
return cljs.core.reduce_kv((function (p1__1201_SHARP_,p2__1202_SHARP_,p3__1203_SHARP_){
return pluto.reader.types.resolve_property(ctx,ext,p1__1201_SHARP_,pluto.reader.types.property(p2__1202_SHARP_,value),p3__1203_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,type);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_assoc_DASH_type,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$value,value], null))], null)], null);
}
}));
pluto.reader.types.resolve_arguments = (function pluto$reader$types$resolve_arguments(ctx,ext,event,arguments$){
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$events,event,cljs.core.cst$kw$arguments], null));
if(cljs.core.truth_(temp__5718__auto__)){
var type = temp__5718__auto__;
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
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(pluto.utils.interpolate(env,o));
} else {
if(cljs.core.fn_QMARK_(o)){
return (function (p1__1204_SHARP_){
return (o.cljs$core$IFn$_invoke$arity$2 ? o.cljs$core$IFn$_invoke$arity$2(p1__1204_SHARP_,env) : o.call(null,p1__1204_SHARP_,env));
});
} else {
return clojure.walk.postwalk_replace(env,o);

}
}
}
}
});
pluto.reader.types.symbol_map__GT_keyword_map = (function pluto$reader$types$symbol_map__GT_keyword_map(m){
return cljs.core.reduce_kv((function (p1__1205_SHARP_,p2__1206_SHARP_,p3__1207_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__1205_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p2__1206_SHARP_)),p3__1207_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
pluto.reader.types.keyword_map__GT_symbol_map = (function pluto$reader$types$keyword_map__GT_symbol_map(m){
return cljs.core.reduce_kv((function (p1__1208_SHARP_,p2__1209_SHARP_,p3__1210_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__1208_SHARP_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p2__1209_SHARP_)),p3__1210_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
pluto.reader.types.event_after_env = (function pluto$reader$types$event_after_env(ctx,ref,inline,static$,bindings){
return cljs.core.with_meta((function (dynamic,env){
var env_SINGLEQUOTE_ = cljs.core.reduce_kv((function (p1__1211_SHARP_,p2__1212_SHARP_,p3__1213_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__1211_SHARP_,p2__1212_SHARP_,((cljs.core.contains_QMARK_(env,p3__1213_SHARP_))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,p3__1213_SHARP_):p3__1213_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(pluto.reader.destructuring.destructure(bindings,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dynamic,static$], 0))))], 0)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.reduce_kv(((function (env_SINGLEQUOTE_){
return (function (p1__1214_SHARP_,p2__1215_SHARP_,p3__1216_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__1214_SHARP_,p2__1215_SHARP_,pluto.reader.types.replace_atom(env_SINGLEQUOTE_,p3__1216_SHARP_));
});})(env_SINGLEQUOTE_))
,cljs.core.PersistentArrayMap.EMPTY,inline)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,true], null));
});
pluto.reader.types.event_reference_with_arguments = (function pluto$reader$types$event_reference_with_arguments(ctx,ext,ref,event,arguments$,args,bindings){
if(cljs.core.truth_(arguments$)){
var map__1217 = pluto.reader.types.resolve_arguments(ctx,ext,event,arguments$);
var map__1217__$1 = (((((!((map__1217 == null))))?(((((map__1217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1217):map__1217);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1217__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1217__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,pluto.reader.types.event_after_env(ctx,ref,data,args,bindings)], null),errors);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,(function (o,v){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),o], null);
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
var vec__1219 = data;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1219,(0),null);
var bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1219,(1),null);
var and__4036__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(data));
if(and__4036__auto__){
var and__4036__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$let,form);
if(and__4036__auto____$1){
var and__4036__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings));
if(and__4036__auto____$2){
var and__4036__auto____$3 = cljs.core.map_QMARK_(cljs.core.first(bindings));
if(and__4036__auto____$3){
var and__4036__auto____$4 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$properties,cljs.core.second(bindings));
if(and__4036__auto____$4){
var s = pluto.reader.types.reference_symbol(data);
return ((cljs.core.vector_QMARK_(s)) || (((cljs.core.list_QMARK_(s)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$if,cljs.core.first(s))))));
} else {
return and__4036__auto____$4;
}
} else {
return and__4036__auto____$3;
}
} else {
return and__4036__auto____$2;
}
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
} else {
return null;
}
});
pluto.reader.types.resolve_local_event = (function pluto$reader$types$resolve_local_event(ctx,ext,type,data){
var a = pluto.reader.types.reference_symbol(data);
if(cljs.core.vector_QMARK_(a)){
var vec__1222 = a;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1222,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1222,(1),null);
var reference = vec__1222;
var bindings = cljs.core.first(cljs.core.second(data));
var map__1225 = pluto.reader.reference.resolve(ctx,ext,type,reference);
var map__1225__$1 = (((((!((map__1225 == null))))?(((((map__1225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1225):map__1225);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1225__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1225__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ref,data__$1,cljs.core.cst$kw$event,event,cljs.core.cst$kw$args,args,cljs.core.cst$kw$bindings,bindings], null)], null),errors);
} else {
return null;
}
});
/**
 * References local references defining let blocks
 */
pluto.reader.types.resolve_local_reference = (function pluto$reader$types$resolve_local_reference(ctx,ext,type,p__1227){
var vec__1228 = p__1227;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1228,(0),null);
var value = vec__1228;
var map__1231 = pluto.reader.reference.resolve(ctx,ext,type,value);
var map__1231__$1 = (((((!((map__1231 == null))))?(((((map__1231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1231):map__1231);
var m = map__1231__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1231__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1231__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(data)){
if(cljs.core.truth_(pluto.reader.types.local_event_QMARK_(data))){
return pluto.reader.types.resolve_local_event(ctx,ext,type,data);
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
pluto.reader.types.resolve_event = (function pluto$reader$types$resolve_event(ctx,ext,type,p__1233){
var vec__1234 = p__1233;
var symbol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1234,(0),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1234,(1),null);
var value = vec__1234;
var map__1237 = pluto.reader.types.resolve_local_reference(ctx,ext,type,value);
var map__1237__$1 = (((((!((map__1237 == null))))?(((((map__1237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1237):map__1237);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1237__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1237__$1,cljs.core.cst$kw$errors);
var map__1238 = data;
var map__1238__$1 = (((((!((map__1238 == null))))?(((((map__1238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1238):map__1238);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1238__$1,cljs.core.cst$kw$event);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1238__$1,cljs.core.cst$kw$ref);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1238__$1,cljs.core.cst$kw$args);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1238__$1,cljs.core.cst$kw$bindings);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(data)?pluto.reader.types.event_reference_with_arguments(ctx,ext,ref,event,(function (){var or__4047__auto__ = args;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return arguments$;
}
})(),arguments$,bindings):null),(cljs.core.truth_(errors)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_event,symbol)], null),errors)], null):null)], 0));
});
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$event,(function (ctx,ext,type,p__1241){
var vec__1242 = p__1241;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1242,(0),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1242,(1),null);
var value = vec__1242;
return pluto.reader.types.resolve_event(ctx,ext,type,value);
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$query,(function (p__1245,ext,type,p__1246){
var map__1247 = p__1245;
var map__1247__$1 = (((((!((map__1247 == null))))?(((((map__1247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1247):map__1247);
var ctx = map__1247__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1247__$1,cljs.core.cst$kw$env);
var vec__1248 = p__1246;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1248,(0),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1248,(1),null);
var value = vec__1248;
var map__1252 = pluto.reader.reference.resolve(ctx,ext,type,value);
var map__1252__$1 = (((((!((map__1252 == null))))?(((((map__1252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1252):map__1252);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1252__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1252__$1,cljs.core.cst$kw$errors);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(data)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,(cljs.core.truth_(arguments$)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,env,arguments$], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,env], null))], null):null),(cljs.core.truth_(errors)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_query,name)], null),errors)], null):null)], 0));
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,___$1,type,value){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,type], null),(cljs.core.truth_(value)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,value], null):null)], 0)))], null)], null);
}));
