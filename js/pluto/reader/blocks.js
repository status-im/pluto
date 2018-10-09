// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.blocks');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('re_frame.core');
goog.require('pluto.reader.destructuring');
goog.require('pluto.reader.errors');
goog.require('pluto.reader.permissions');
goog.require('pluto.reader.types');
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
pluto.reader.blocks.resolve_query = (function pluto$reader$blocks$resolve_query(ctx,ext,query){
var map__2014 = (function (){var G__2015 = ctx;
var G__2016 = ext;
var G__2017 = cljs.core.cst$kw$query;
var G__2018 = query;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__2015,G__2016,G__2017,G__2018) : pluto.reader.types.resolve.call(null,G__2015,G__2016,G__2017,G__2018));
})();
var map__2014__$1 = ((((!((map__2014 == null)))?(((((map__2014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2014):map__2014);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2014__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2014__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(data)){
return (data.cljs$core$IFn$_invoke$arity$0 ? data.cljs$core$IFn$_invoke$arity$0() : data.call(null));
} else {
return null;
}
});
pluto.reader.blocks.query_QMARK_ = (function pluto$reader$blocks$query_QMARK_(binding_value){
return cljs.core.vector_QMARK_(binding_value);
});
pluto.reader.blocks.resolve_binding_value = (function pluto$reader$blocks$resolve_binding_value(ctx,ext,v){
if(cljs.core.truth_(pluto.reader.blocks.query_QMARK_(v))){
return pluto.reader.blocks.resolve_query(ctx,ext,v);
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
pluto.reader.blocks.assoc_binding = (function pluto$reader$blocks$assoc_binding(ctx,ext,m,k,v){
var resolved_value = pluto.reader.blocks.resolve_binding_value(ctx,ext,v);
var o = pluto.reader.blocks.resolve_binding_key(k,resolved_value);
if((o instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,o,resolved_value);
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,o], 0));
}
});
pluto.reader.blocks.let_block = (function pluto$reader$blocks$let_block(p__2023,child){
var map__2024 = p__2023;
var map__2024__$1 = ((((!((map__2024 == null)))?(((((map__2024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2024):map__2024);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2024__$1,cljs.core.cst$kw$env);
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2024__$1,cljs.core.cst$kw$ctx);
var ext = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2024__$1,cljs.core.cst$kw$ext);
if(cljs.core.coll_QMARK_(child)){
return clojure.walk.prewalk_replace(cljs.core.reduce_kv(((function (map__2024,map__2024__$1,env,ctx,ext){
return (function (p1__2020_SHARP_,p2__2021_SHARP_,p3__2022_SHARP_){
return pluto.reader.blocks.assoc_binding(ctx,ext,p1__2020_SHARP_,p2__2021_SHARP_,p3__2022_SHARP_);
});})(map__2024,map__2024__$1,env,ctx,ext))
,cljs.core.PersistentArrayMap.EMPTY,env),child);
} else {
return null;
}
});
pluto.reader.blocks.properties_QMARK_ = (function pluto$reader$blocks$properties_QMARK_(o){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$properties,o);
});
pluto.reader.blocks.inject_new_bindings = (function pluto$reader$blocks$inject_new_bindings(m,v){
if((v instanceof cljs.core.Symbol)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,v);
} else {
if(cljs.core.list_QMARK_(v)){
return clojure.walk.prewalk_replace(m,v);
} else {
return v;

}
}
});
pluto.reader.blocks.merge_bindings = (function pluto$reader$blocks$merge_bindings(p__2026,k,v){
var map__2027 = p__2026;
var map__2027__$1 = ((((!((map__2027 == null)))?(((((map__2027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2027):map__2027);
var m = map__2027__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2027__$1,cljs.core.cst$kw$data);
if(cljs.core.truth_(pluto.reader.blocks.properties_QMARK_(v))){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$sym$properties], null),k);
} else {
var av = pluto.reader.blocks.inject_new_bindings(data,v);
if(cljs.core.truth_((function (){var or__3949__auto__ = (k instanceof cljs.core.Symbol);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return pluto.reader.blocks.query_QMARK_(av);
}
})())){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,k], null),av);
} else {
var temp__5455__auto__ = pluto.reader.destructuring.destructure(k,av);
if(cljs.core.truth_(temp__5455__auto__)){
var o = temp__5455__auto__;
return pluto.reader.errors.merge_results.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,o], 0));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_destructuring_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,av], null))], null)], null);
}
}
}
});
pluto.reader.blocks.bindings__GT_env = (function pluto$reader$blocks$bindings__GT_env(bindings){
if(cljs.core.odd_QMARK_(cljs.core.count(bindings))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_destructuring_DASH_format,bindings)], null)], null);
} else {
return cljs.core.reduce_kv(pluto.reader.blocks.merge_bindings,cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,bindings));
}
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$let,(function (ctx,ext,p__2029){
var vec__2030 = p__2029;
var seq__2031 = cljs.core.seq(vec__2030);
var first__2032 = cljs.core.first(seq__2031);
var seq__2031__$1 = cljs.core.next(seq__2031);
var _ = first__2032;
var first__2032__$1 = cljs.core.first(seq__2031__$1);
var seq__2031__$2 = cljs.core.next(seq__2031__$1);
var bindings = first__2032__$1;
var body = seq__2031__$2;
var map__2033 = pluto.reader.blocks.bindings__GT_env(bindings);
var map__2033__$1 = ((((!((map__2033 == null)))?(((((map__2033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2033):map__2033);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2033__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2033__$1,cljs.core.cst$kw$errors);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,(function (){var child = cljs.core.last(body);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.let_block,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$env,data,cljs.core.cst$kw$ctx,ctx,cljs.core.cst$kw$ext,ext], null),child], null);
})()], null),(cljs.core.truth_(errors)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null):null)], 0));
}));
pluto.reader.blocks.when_block = (function pluto$reader$blocks$when_block(p__2035,body){
var map__2036 = p__2035;
var map__2036__$1 = ((((!((map__2036 == null)))?(((((map__2036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2036):map__2036);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2036__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return body;
} else {
return null;
}
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$when,(function (_,___$1,p__2038){
var vec__2039 = p__2038;
var seq__2040 = cljs.core.seq(vec__2039);
var first__2041 = cljs.core.first(seq__2040);
var seq__2040__$1 = cljs.core.next(seq__2040);
var ___$2 = first__2041;
var first__2041__$1 = cljs.core.first(seq__2040__$1);
var seq__2040__$2 = cljs.core.next(seq__2040__$1);
var test = first__2041__$1;
var body = seq__2040__$2;
if((test instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.when_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,test], null)], null),body)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unsupported_DASH_test_DASH_type,test)], null)], null);

}
}));
pluto.reader.blocks.if_block = (function pluto$reader$blocks$if_block(var_args){
var args__4534__auto__ = [];
var len__4531__auto___2047 = arguments.length;
var i__4532__auto___2048 = (0);
while(true){
if((i__4532__auto___2048 < len__4531__auto___2047)){
args__4534__auto__.push((arguments[i__4532__auto___2048]));

var G__2049 = (i__4532__auto___2048 + (1));
i__4532__auto___2048 = G__2049;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic = (function (p__2044,body){
var map__2045 = p__2044;
var map__2045__$1 = ((((!((map__2045 == null)))?(((((map__2045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2045):map__2045);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2045__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return cljs.core.first(body);
} else {
return cljs.core.second(body);
}
});

pluto.reader.blocks.if_block.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.reader.blocks.if_block.cljs$lang$applyTo = (function (seq2042){
var G__2043 = cljs.core.first(seq2042);
var seq2042__$1 = cljs.core.next(seq2042);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2043,seq2042__$1);
});

pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$if,(function (_,___$1,p__2050){
var vec__2051 = p__2050;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2051,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2051,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2051,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2051,(3),null);
if((test instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.if_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,test], null)], null),(new cljs.core.List(null,then,(new cljs.core.List(null,else$,null,(1),null)),(2),null)))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unsupported_DASH_test_DASH_type,test)], null)], null);

}
}));
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (opts,block){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$unknown_DASH_block_DASH_type,cljs.core.cst$kw$opts,opts,cljs.core.cst$kw$block,block], null)], null)], null);
}));
