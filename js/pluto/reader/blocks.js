// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.blocks');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cljs.spec.alpha');
goog.require('re_frame.core');
goog.require('pluto.reader.destructuring');
goog.require('pluto.reader.errors');
goog.require('pluto.reader.permissions');
goog.require('pluto.reader.types');
goog.require('pluto.utils');
if((typeof pluto !== 'undefined') && (typeof pluto.reader !== 'undefined') && (typeof pluto.reader.blocks !== 'undefined') && (typeof pluto.reader.blocks.parse !== 'undefined')){
} else {
/**
 * Parse a block element. Return hiccup data.
 */
pluto.reader.blocks.parse = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.reader.blocks","parse"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (ctx,ext,p__2010){
var vec__2011 = p__2010;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2011,(0),null);
return type;
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,cljs.core.cst$kw$default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
pluto.reader.blocks.resolve_binding_value = (function pluto$reader$blocks$resolve_binding_value(v){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.deref((re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(v) : re_frame.core.subscribe.call(null,v)));
} else {
if(!(cljs.core.list_QMARK_(v))){
return v;
} else {
return null;
}
}
});
pluto.reader.blocks.resolve_binding_key = (function pluto$reader$blocks$resolve_binding_key(k,v){
if((k instanceof cljs.core.Symbol)){
return k;
} else {
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(pluto.reader.destructuring.destructure(k,v));
}
});
pluto.reader.blocks.assoc_binding = (function pluto$reader$blocks$assoc_binding(m,k,v){
var resolved_value = pluto.reader.blocks.resolve_binding_value(v);
var o = pluto.reader.blocks.resolve_binding_key(k,resolved_value);
if((o instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,o,resolved_value);
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,o], 0));
}
});
pluto.reader.blocks.interpolate = (function pluto$reader$blocks$interpolate(values,s){
return cljs.core.reduce_kv((function (p1__2014_SHARP_,p2__2015_SHARP_,p3__2016_SHARP_){
return clojure.string.replace(p1__2014_SHARP_,["${",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__2015_SHARP_)].join('')),"}"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p3__2016_SHARP_)].join(''));
}),s,values);
});
pluto.reader.blocks.replace_atom = (function pluto$reader$blocks$replace_atom(values,o){
if(cljs.core.contains_QMARK_(values,o)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,o);
} else {
if((o instanceof cljs.core.Symbol)){
return null;
} else {
if(typeof o === 'string'){
return pluto.reader.blocks.interpolate(values,o);
} else {
return o;

}
}
}
});
pluto.reader.blocks.let_block = (function pluto$reader$blocks$let_block(p__2018,children){
var map__2019 = p__2018;
var map__2019__$1 = ((((!((map__2019 == null)))?(((((map__2019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2019):map__2019);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2019__$1,cljs.core.cst$kw$env);
var values = cljs.core.reduce_kv(pluto.reader.blocks.assoc_binding,cljs.core.PersistentArrayMap.EMPTY,env);
return clojure.walk.prewalk(((function (values,map__2019,map__2019__$1,env){
return (function (p1__2017_SHARP_){
return pluto.reader.blocks.replace_atom(values,p1__2017_SHARP_);
});})(values,map__2019,map__2019__$1,env))
,children);
});
pluto.reader.blocks.properties_QMARK_ = (function pluto$reader$blocks$properties_QMARK_(o){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$properties,o);
});
pluto.reader.blocks.static_value_QMARK_ = (function pluto$reader$blocks$static_value_QMARK_(v){
var or__3949__auto__ = pluto.utils.primitive_QMARK_(v);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.map_QMARK_(v);
}
});
pluto.reader.blocks.query_QMARK_ = (function pluto$reader$blocks$query_QMARK_(binding_value){
return cljs.core.vector_QMARK_(binding_value);
});
pluto.reader.blocks.valid_bindings_QMARK_ = (function pluto$reader$blocks$valid_bindings_QMARK_(k,v){
var and__3938__auto__ = (((k instanceof cljs.core.Symbol)) || (cljs.core.map_QMARK_(k)));
if(and__3938__auto__){
var or__3949__auto__ = (v instanceof cljs.core.Symbol);
if(or__3949__auto__){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = pluto.reader.blocks.static_value_QMARK_(v);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = pluto.reader.blocks.query_QMARK_(v);
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return pluto.reader.blocks.query_QMARK_(v);
}
}
}
} else {
return and__3938__auto__;
}
});
pluto.reader.blocks.resolve_symbol = (function pluto$reader$blocks$resolve_symbol(m,s){
if((((s instanceof cljs.core.Symbol)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$properties,s)))){
var G__2021 = m;
var G__2022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,s);
return (pluto.reader.blocks.resolve_symbol.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.blocks.resolve_symbol.cljs$core$IFn$_invoke$arity$2(G__2021,G__2022) : pluto.reader.blocks.resolve_symbol.call(null,G__2021,G__2022));
} else {
return s;
}
});
/**
 * Resolve key/value pairs, specifically:
 * * 'properties are kept as is
 * * symbol values are replaced by their respective values if already present in the let scope
 * * queries (defined as vectors) are replaced by atoms
 * 
 * Returns a map of:
 * * :data the resolved values
 * * :errors the errors
 */
pluto.reader.blocks.resolve_env = (function pluto$reader$blocks$resolve_env(ctx,ext,p__2023,k,v){
var map__2024 = p__2023;
var map__2024__$1 = ((((!((map__2024 == null)))?(((((map__2024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2024):map__2024);
var m = map__2024__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2024__$1,cljs.core.cst$kw$data);
if(cljs.core.truth_(pluto.reader.blocks.valid_bindings_QMARK_(k,v))){
if(cljs.core.truth_(pluto.reader.blocks.properties_QMARK_(v))){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$sym$properties], null),k);
} else {
if(cljs.core.truth_(pluto.reader.blocks.static_value_QMARK_(v))){
if(cljs.core.map_QMARK_(k)){
var temp__5455__auto__ = pluto.reader.destructuring.destructure(k,v);
if(cljs.core.truth_(temp__5455__auto__)){
var o = temp__5455__auto__;
return pluto.reader.errors.merge_results.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,o], 0));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_destructuring_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null))], null)], null);
}
} else {
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,k], null),v);
}
} else {
if(cljs.core.truth_(pluto.reader.blocks.query_QMARK_(v))){
var map__2026 = (function (){var G__2027 = ctx;
var G__2028 = ext;
var G__2029 = cljs.core.cst$kw$query;
var G__2030 = v;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__2027,G__2028,G__2029,G__2030) : pluto.reader.types.resolve.call(null,G__2027,G__2028,G__2029,G__2030));
})();
var map__2026__$1 = ((((!((map__2026 == null)))?(((((map__2026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2026):map__2026);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2026__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2026__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,k], null),data__$1),errors);
} else {
return null;
}
}
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null))], null)], null);
}
});
pluto.reader.blocks.valid_bindings_form_QMARK_ = (function pluto$reader$blocks$valid_bindings_form_QMARK_(bindings){
return cljs.core.even_QMARK_(cljs.core.count(bindings));
});
pluto.reader.blocks.bindings__GT_env = (function pluto$reader$blocks$bindings__GT_env(ctx,ext,bindings){
if(cljs.core.truth_(pluto.reader.blocks.valid_bindings_form_QMARK_(bindings))){
return cljs.core.reduce_kv((function (p1__2032_SHARP_,p2__2033_SHARP_,p3__2034_SHARP_){
return pluto.reader.blocks.resolve_env(ctx,ext,p1__2032_SHARP_,p2__2033_SHARP_,pluto.reader.blocks.resolve_symbol(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(p1__2032_SHARP_),p3__2034_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,bindings));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_bindings_DASH_format,bindings)], null)], null);
}
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$let,(function (ctx,ext,p__2035){
var vec__2036 = p__2035;
var seq__2037 = cljs.core.seq(vec__2036);
var first__2038 = cljs.core.first(seq__2037);
var seq__2037__$1 = cljs.core.next(seq__2037);
var _ = first__2038;
var first__2038__$1 = cljs.core.first(seq__2037__$1);
var seq__2037__$2 = cljs.core.next(seq__2037__$1);
var bindings = first__2038__$1;
var body = seq__2037__$2;
var map__2039 = pluto.reader.blocks.bindings__GT_env(ctx,ext,bindings);
var map__2039__$1 = ((((!((map__2039 == null)))?(((((map__2039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2039):map__2039);
var m = map__2039__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2039__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2039__$1,cljs.core.cst$kw$errors);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(body))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.let_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$env,data], null),cljs.core.last(body)], null)], null),(cljs.core.truth_(errors)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null):null)], 0));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_let_DASH_body,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,body], null))], null)], null);
}
}));
pluto.reader.blocks.when_block = (function pluto$reader$blocks$when_block(p__2041,body){
var map__2042 = p__2041;
var map__2042__$1 = ((((!((map__2042 == null)))?(((((map__2042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2042):map__2042);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2042__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return body;
} else {
return null;
}
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$when,(function (_,___$1,p__2044){
var vec__2045 = p__2044;
var seq__2046 = cljs.core.seq(vec__2045);
var first__2047 = cljs.core.first(seq__2046);
var seq__2046__$1 = cljs.core.next(seq__2046);
var ___$2 = first__2047;
var first__2047__$1 = cljs.core.first(seq__2046__$1);
var seq__2046__$2 = cljs.core.next(seq__2046__$1);
var test = first__2047__$1;
var body = seq__2046__$2;
var parts = vec__2045;
var errors = (function (){var G__2048 = null;
var G__2048__$1 = ((!((test instanceof cljs.core.Symbol)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2048,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unsupported_DASH_test_DASH_type,test)):G__2048);
if(cljs.core.empty_QMARK_(body)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2048__$1,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_when_DASH_block,parts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$empty_DASH_body_DASH_clause,body], null)));
} else {
return G__2048__$1;
}
})();
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.when_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,test], null)], null),body)], null);
}
}));
pluto.reader.blocks.if_block = (function pluto$reader$blocks$if_block(var_args){
var args__4534__auto__ = [];
var len__4531__auto___2054 = arguments.length;
var i__4532__auto___2055 = (0);
while(true){
if((i__4532__auto___2055 < len__4531__auto___2054)){
args__4534__auto__.push((arguments[i__4532__auto___2055]));

var G__2056 = (i__4532__auto___2055 + (1));
i__4532__auto___2055 = G__2056;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic = (function (p__2051,body){
var map__2052 = p__2051;
var map__2052__$1 = ((((!((map__2052 == null)))?(((((map__2052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2052):map__2052);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2052__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return cljs.core.first(body);
} else {
return cljs.core.second(body);
}
});

pluto.reader.blocks.if_block.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.reader.blocks.if_block.cljs$lang$applyTo = (function (seq2049){
var G__2050 = cljs.core.first(seq2049);
var seq2049__$1 = cljs.core.next(seq2049);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2050,seq2049__$1);
});

pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$if,(function (_,___$1,p__2057){
var vec__2058 = p__2057;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2058,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2058,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2058,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2058,(3),null);
var parts = vec__2058;
var parts_count = cljs.core.count(cljs.core.rest(parts));
var errors = (function (){var G__2061 = null;
var G__2061__$1 = ((!((test instanceof cljs.core.Symbol)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2061,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unsupported_DASH_test_DASH_type,test)):G__2061);
var G__2061__$2 = ((((3) < parts_count))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2061__$1,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_if_DASH_block,parts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$too_DASH_many_DASH_clauses,cljs.core.cst$kw$clause_DASH_count,parts_count], null))):G__2061__$1);
if(((3) > parts_count)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2061__$2,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_if_DASH_block,parts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$three_DASH_clauses_DASH_required,cljs.core.cst$kw$clause_DASH_count,parts_count], null)));
} else {
return G__2061__$2;
}
})();
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.if_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,test], null)], null),(new cljs.core.List(null,then,(new cljs.core.List(null,else$,null,(1),null)),(2),null)))], null);
}
}));
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (ctx,ext,block){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$unknown_DASH_block_DASH_type,cljs.core.cst$kw$ctx,ctx,cljs.core.cst$kw$block,block], null)], null)], null);
}));
