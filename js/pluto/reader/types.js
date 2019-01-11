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
var hierarchy__4528__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__7782 = cljs.core.get_global_hierarchy;
return (fexpr__7782.cljs$core$IFn$_invoke$arity$0 ? fexpr__7782.cljs$core$IFn$_invoke$arity$0() : fexpr__7782.call(null));
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(pluto.reader.errors.merge_results_with,(function (p1__7783_SHARP_,p2__7784_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(p1__7783_SHARP_),p2__7784_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7785_SHARP_){
var G__7786 = ctx;
var G__7787 = ext;
var G__7788 = cljs.core.first(type);
var G__7789 = p1__7785_SHARP_;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__7786,G__7787,G__7788,G__7789) : pluto.reader.types.resolve.call(null,G__7786,G__7787,G__7788,G__7789));
}),value));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_sequential_DASH_type,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$value,value], null))], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$one_DASH_of,(function (_,___$1,p__7790,value){
var map__7791 = p__7790;
var map__7791__$1 = (((((!((map__7791 == null))))?(((((map__7791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7791):map__7791);
var one_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7791__$1,cljs.core.cst$kw$one_DASH_of);
var temp__5718__auto__ = (one_of.cljs$core$IFn$_invoke$arity$1 ? one_of.cljs$core$IFn$_invoke$arity$1(value) : one_of.call(null,value));
if(cljs.core.truth_(temp__5718__auto__)){
var o = temp__5718__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,o], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$one_DASH_of,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$or,(function (ctx,ext,p__7794,value){
var map__7795 = p__7794;
var map__7795__$1 = (((((!((map__7795 == null))))?(((((map__7795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7795):map__7795);
var or = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7795__$1,cljs.core.cst$kw$or);
if(cljs.core.coll_QMARK_(or)){
var temp__5718__auto__ = cljs.core.some(((function (map__7795,map__7795__$1,or){
return (function (p1__7793_SHARP_){
var temp__5720__auto__ = (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,p1__7793_SHARP_,value) : pluto.reader.types.resolve.call(null,ctx,ext,p1__7793_SHARP_,value));
if(cljs.core.truth_(temp__5720__auto__)){
var map__7797 = temp__5720__auto__;
var map__7797__$1 = (((((!((map__7797 == null))))?(((((map__7797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7797):map__7797);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7797__$1,cljs.core.cst$kw$data);
return data;
} else {
return null;
}
});})(map__7795,map__7795__$1,or))
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
pluto.reader.types.resolve_property = (function pluto$reader$types$resolve_property(ctx,ext,m,p__7800,type){
var map__7801 = p__7800;
var map__7801__$1 = (((((!((map__7801 == null))))?(((((map__7801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7801):map__7801);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7801__$1,cljs.core.cst$kw$name);
var optional_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7801__$1,cljs.core.cst$kw$optional_QMARK_);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7801__$1,cljs.core.cst$kw$value);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(pluto.reader.types.sentinel,value)){
var map__7803 = (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,type,value) : pluto.reader.types.resolve.call(null,ctx,ext,type,value));
var map__7803__$1 = (((((!((map__7803 == null))))?(((((map__7803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7803):map__7803);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7803__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7803__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors((cljs.core.truth_(data)?cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,name], null),data):m),errors);
} else {
if(cljs.core.truth_(optional_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$data,((function (map__7801,map__7801__$1,name,optional_QMARK_,value){
return (function (p1__7799_SHARP_){
if(cljs.core.empty_QMARK_(p1__7799_SHARP_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return p1__7799_SHARP_;
}
});})(map__7801,map__7801__$1,name,optional_QMARK_,value))
);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_missing_DASH_property,name)], null));
}
}
});
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$assoc,(function (ctx,ext,type,value){
if(cljs.core.map_QMARK_(type)){
return cljs.core.reduce_kv((function (p1__7805_SHARP_,p2__7806_SHARP_,p3__7807_SHARP_){
return pluto.reader.types.resolve_property(ctx,ext,p1__7805_SHARP_,pluto.reader.types.property(p2__7806_SHARP_,value),p3__7807_SHARP_);
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
return (function (p1__7808_SHARP_){
return (o.cljs$core$IFn$_invoke$arity$2 ? o.cljs$core$IFn$_invoke$arity$2(p1__7808_SHARP_,env) : o.call(null,p1__7808_SHARP_,env));
});
} else {
return clojure.walk.postwalk_replace(env,o);

}
}
}
}
});
pluto.reader.types.symbol_map__GT_keyword_map = (function pluto$reader$types$symbol_map__GT_keyword_map(m){
return cljs.core.reduce_kv((function (p1__7809_SHARP_,p2__7810_SHARP_,p3__7811_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__7809_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p2__7810_SHARP_)),p3__7811_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
pluto.reader.types.keyword_map__GT_symbol_map = (function pluto$reader$types$keyword_map__GT_symbol_map(m){
return cljs.core.reduce_kv((function (p1__7812_SHARP_,p2__7813_SHARP_,p3__7814_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__7812_SHARP_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p2__7813_SHARP_)),p3__7814_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
pluto.reader.types.event_after_env = (function pluto$reader$types$event_after_env(ctx,ref,inline,static$,bindings){
return cljs.core.with_meta((function (dynamic,env){
var env_SINGLEQUOTE_ = cljs.core.reduce_kv((function (p1__7815_SHARP_,p2__7816_SHARP_,p3__7817_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__7815_SHARP_,p2__7816_SHARP_,((cljs.core.contains_QMARK_(env,p3__7817_SHARP_))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,p3__7817_SHARP_):p3__7817_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(pluto.reader.destructuring.destructure(bindings,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dynamic,static$], 0))))], 0)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.reduce_kv(((function (env_SINGLEQUOTE_){
return (function (p1__7818_SHARP_,p2__7819_SHARP_,p3__7820_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__7818_SHARP_,p2__7819_SHARP_,pluto.reader.types.replace_atom(env_SINGLEQUOTE_,p3__7820_SHARP_));
});})(env_SINGLEQUOTE_))
,cljs.core.PersistentArrayMap.EMPTY,inline)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,true], null));
});
pluto.reader.types.event_reference_with_arguments = (function pluto$reader$types$event_reference_with_arguments(ctx,ext,ref,event,arguments$,args,bindings){
if(cljs.core.truth_(arguments$)){
var map__7821 = pluto.reader.types.resolve_arguments(ctx,ext,event,arguments$);
var map__7821__$1 = (((((!((map__7821 == null))))?(((((map__7821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7821):map__7821);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7821__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7821__$1,cljs.core.cst$kw$errors);
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
var vec__7823 = data;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7823,(0),null);
var bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7823,(1),null);
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
var vec__7826 = a;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7826,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7826,(1),null);
var reference = vec__7826;
var bindings = cljs.core.first(cljs.core.second(data));
var map__7829 = pluto.reader.reference.resolve(ctx,ext,type,reference);
var map__7829__$1 = (((((!((map__7829 == null))))?(((((map__7829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7829):map__7829);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7829__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7829__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ref,data__$1,cljs.core.cst$kw$event,event,cljs.core.cst$kw$args,args,cljs.core.cst$kw$bindings,bindings], null)], null),errors);
} else {
return null;
}
});
/**
 * References local references defining let blocks
 */
pluto.reader.types.resolve_local_reference = (function pluto$reader$types$resolve_local_reference(ctx,ext,type,p__7831){
var vec__7832 = p__7831;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7832,(0),null);
var value = vec__7832;
var map__7835 = pluto.reader.reference.resolve(ctx,ext,type,value);
var map__7835__$1 = (((((!((map__7835 == null))))?(((((map__7835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7835):map__7835);
var m = map__7835__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7835__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7835__$1,cljs.core.cst$kw$errors);
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
pluto.reader.types.resolve_event = (function pluto$reader$types$resolve_event(ctx,ext,type,p__7837){
var vec__7838 = p__7837;
var symbol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7838,(0),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7838,(1),null);
var value = vec__7838;
var map__7841 = pluto.reader.types.resolve_local_reference(ctx,ext,type,value);
var map__7841__$1 = (((((!((map__7841 == null))))?(((((map__7841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7841):map__7841);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7841__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7841__$1,cljs.core.cst$kw$errors);
var map__7842 = data;
var map__7842__$1 = (((((!((map__7842 == null))))?(((((map__7842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7842):map__7842);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7842__$1,cljs.core.cst$kw$event);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7842__$1,cljs.core.cst$kw$ref);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7842__$1,cljs.core.cst$kw$args);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7842__$1,cljs.core.cst$kw$bindings);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(data)?pluto.reader.types.event_reference_with_arguments(ctx,ext,ref,event,(function (){var or__4047__auto__ = args;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return arguments$;
}
})(),arguments$,bindings):null),(cljs.core.truth_(errors)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_event,symbol)], null),errors)], null):null)], 0));
});
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$event,(function (ctx,ext,type,p__7845){
var vec__7846 = p__7845;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7846,(0),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7846,(1),null);
var value = vec__7846;
return pluto.reader.types.resolve_event(ctx,ext,type,value);
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$query,(function (p__7849,ext,type,p__7850){
var map__7851 = p__7849;
var map__7851__$1 = (((((!((map__7851 == null))))?(((((map__7851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7851):map__7851);
var ctx = map__7851__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7851__$1,cljs.core.cst$kw$env);
var vec__7852 = p__7850;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7852,(0),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7852,(1),null);
var value = vec__7852;
var map__7856 = pluto.reader.reference.resolve(ctx,ext,type,value);
var map__7856__$1 = (((((!((map__7856 == null))))?(((((map__7856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7856):map__7856);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7856__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7856__$1,cljs.core.cst$kw$errors);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(data)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,(cljs.core.truth_(arguments$)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,env,arguments$], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,env], null))], null):null),(cljs.core.truth_(errors)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_query,name)], null),errors)], null):null)], 0));
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,___$1,type,value){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,type], null),(cljs.core.truth_(value)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,value], null):null)], 0)))], null)], null);
}));
