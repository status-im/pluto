// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('pluto.reader.blocks');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('pluto.reader.reference');
goog.require('re_frame.core');
if((typeof pluto !== 'undefined') && (typeof pluto.reader !== 'undefined') && (typeof pluto.reader.blocks !== 'undefined') && (typeof pluto.reader.blocks.parse !== 'undefined')){
} else {
/**
 * 
 */
pluto.reader.blocks.parse = (function (){var method_table__4401__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4402__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4403__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4404__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.reader.blocks","parse"),((function (method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__,hierarchy__4405__auto__){
return (function (_,p__3988){
var vec__3989 = p__3988;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3989,(0),null);
return type;
});})(method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__,hierarchy__4405__auto__))
,cljs.core.cst$kw$default,hierarchy__4405__auto__,method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__));
})();
}
pluto.reader.blocks.resolve_query = (function pluto$reader$blocks$resolve_query(o){
if(cljs.core.truth_(pluto.reader.reference.reference_QMARK_(o))){
return cljs.core.deref((function (){var G__3992 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.second(o)))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__3992) : re_frame.core.subscribe.call(null,G__3992));
})());
} else {
return null;
}
});
pluto.reader.blocks.resolve_queries = (function pluto$reader$blocks$resolve_queries(env){
return cljs.core.reduce_kv((function (p1__3993_SHARP_,p2__3994_SHARP_,p3__3995_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__3993_SHARP_,p2__3994_SHARP_,pluto.reader.blocks.resolve_query(p3__3995_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,env);
});
pluto.reader.blocks.let_block = (function pluto$reader$blocks$let_block(p__3996,child){
var map__3997 = p__3996;
var map__3997__$1 = ((((!((map__3997 == null)))?(((((map__3997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3997):map__3997);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3997__$1,cljs.core.cst$kw$env);
if(cljs.core.coll_QMARK_(child)){
return clojure.walk.prewalk_replace(pluto.reader.blocks.resolve_queries(env),child);
} else {
return null;
}
});
pluto.reader.blocks.bindings__GT_env = (function pluto$reader$blocks$bindings__GT_env(v){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,v);
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$let,(function (_,p__3999){
var vec__4000 = p__3999;
var seq__4001 = cljs.core.seq(vec__4000);
var first__4002 = cljs.core.first(seq__4001);
var seq__4001__$1 = cljs.core.next(seq__4001);
var ___$1 = first__4002;
var first__4002__$1 = cljs.core.first(seq__4001__$1);
var seq__4001__$2 = cljs.core.next(seq__4001__$1);
var bindings = first__4002__$1;
var body = seq__4001__$2;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,(function (){var m = pluto.reader.blocks.bindings__GT_env(bindings);
var child = cljs.core.last(body);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.let_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$env,m], null),child], null);
})()], null);
}));
pluto.reader.blocks.when_block = (function pluto$reader$blocks$when_block(p__4003,body){
var map__4004 = p__4003;
var map__4004__$1 = ((((!((map__4004 == null)))?(((((map__4004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4004):map__4004);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4004__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return body;
} else {
return null;
}
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$when,(function (_,p__4006){
var vec__4007 = p__4006;
var seq__4008 = cljs.core.seq(vec__4007);
var first__4009 = cljs.core.first(seq__4008);
var seq__4008__$1 = cljs.core.next(seq__4008);
var ___$1 = first__4009;
var first__4009__$1 = cljs.core.first(seq__4008__$1);
var seq__4008__$2 = cljs.core.next(seq__4008__$1);
var test = first__4009__$1;
var body = seq__4008__$2;
if((test instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.when_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,test], null)], null),body)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$unsupported_DASH_type,cljs.core.cst$kw$value,test], null)], null)], null);

}
}));
pluto.reader.blocks.if_block = (function pluto$reader$blocks$if_block(var_args){
var args__4521__auto__ = [];
var len__4518__auto___4015 = arguments.length;
var i__4519__auto___4016 = (0);
while(true){
if((i__4519__auto___4016 < len__4518__auto___4015)){
args__4521__auto__.push((arguments[i__4519__auto___4016]));

var G__4017 = (i__4519__auto___4016 + (1));
i__4519__auto___4016 = G__4017;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic = (function (p__4012,body){
var map__4013 = p__4012;
var map__4013__$1 = ((((!((map__4013 == null)))?(((((map__4013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4013):map__4013);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4013__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return cljs.core.first(body);
} else {
return cljs.core.second(body);
}
});

pluto.reader.blocks.if_block.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.reader.blocks.if_block.cljs$lang$applyTo = (function (seq4010){
var G__4011 = cljs.core.first(seq4010);
var seq4010__$1 = cljs.core.next(seq4010);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4011,seq4010__$1);
});

pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$if,(function (_,p__4018){
var vec__4019 = p__4018;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4019,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4019,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4019,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4019,(3),null);
if((test instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.if_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,test], null)], null),(new cljs.core.List(null,then,(new cljs.core.List(null,else$,null,(1),null)),(2),null)))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$unsupported_DASH_type,cljs.core.cst$kw$value,test], null)], null)], null);

}
}));
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (opts,block){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$unknown_DASH_block_DASH_type,cljs.core.cst$kw$opts,opts,cljs.core.cst$kw$block,block], null)], null)], null);
}));
