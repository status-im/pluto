// Compiled by ClojureScript 1.10.329 {}
goog.provide('pluto.reader.blocks');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('pluto.reader.reference');
goog.require('re_frame.core');
if((typeof pluto !== 'undefined') && (typeof pluto.reader !== 'undefined') && (typeof pluto.reader.blocks !== 'undefined') && (typeof pluto.reader.blocks.parse !== 'undefined')){
} else {
/**
 * 
 */
pluto.reader.blocks.parse = (function (){var method_table__4401__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4402__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4403__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4404__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4405__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"pluto.reader.blocks","parse"),((function (method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__,hierarchy__4405__auto__){
return (function (_,p__2357){
var vec__2358 = p__2357;
var type = cljs.core.nth.call(null,vec__2358,(0),null);
return type;
});})(method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__,hierarchy__4405__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4405__auto__,method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__));
})();
}
pluto.reader.blocks.resolve_query = (function pluto$reader$blocks$resolve_query(o){
if(cljs.core.truth_(pluto.reader.reference.reference_QMARK_.call(null,o))){
return cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.name.call(null,cljs.core.second.call(null,o)))], null)));
} else {
return null;
}
});
pluto.reader.blocks.resolve_queries = (function pluto$reader$blocks$resolve_queries(env){
return cljs.core.reduce_kv.call(null,(function (p1__2361_SHARP_,p2__2362_SHARP_,p3__2363_SHARP_){
return cljs.core.assoc.call(null,p1__2361_SHARP_,p2__2362_SHARP_,pluto.reader.blocks.resolve_query.call(null,p3__2363_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,env);
});
pluto.reader.blocks.let_block = (function pluto$reader$blocks$let_block(p__2364,child){
var map__2365 = p__2364;
var map__2365__$1 = ((((!((map__2365 == null)))?(((((map__2365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2365):map__2365);
var env = cljs.core.get.call(null,map__2365__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.coll_QMARK_.call(null,child)){
return clojure.walk.prewalk_replace.call(null,pluto.reader.blocks.resolve_queries.call(null,env),child);
} else {
return null;
}
});
pluto.reader.blocks.bindings__GT_env = (function pluto$reader$blocks$bindings__GT_env(v){
return cljs.core.apply.call(null,cljs.core.hash_map,v);
});
cljs.core._add_method.call(null,pluto.reader.blocks.parse,new cljs.core.Symbol(null,"let","let",358118826,null),(function (_,p__2367){
var vec__2368 = p__2367;
var seq__2369 = cljs.core.seq.call(null,vec__2368);
var first__2370 = cljs.core.first.call(null,seq__2369);
var seq__2369__$1 = cljs.core.next.call(null,seq__2369);
var ___$1 = first__2370;
var first__2370__$1 = cljs.core.first.call(null,seq__2369__$1);
var seq__2369__$2 = cljs.core.next.call(null,seq__2369__$1);
var bindings = first__2370__$1;
var body = seq__2369__$2;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){var m = pluto.reader.blocks.bindings__GT_env.call(null,bindings);
var child = cljs.core.last.call(null,body);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.let_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",-1815813235),m], null),child], null);
})()], null);
}));
pluto.reader.blocks.when_block = (function pluto$reader$blocks$when_block(p__2371,body){
var map__2372 = p__2371;
var map__2372__$1 = ((((!((map__2372 == null)))?(((((map__2372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2372):map__2372);
var test = cljs.core.get.call(null,map__2372__$1,new cljs.core.Keyword(null,"test","test",577538877));
if(cljs.core.truth_(test)){
return body;
} else {
return null;
}
});
cljs.core._add_method.call(null,pluto.reader.blocks.parse,new cljs.core.Symbol(null,"when","when",1064114221,null),(function (_,p__2374){
var vec__2375 = p__2374;
var seq__2376 = cljs.core.seq.call(null,vec__2375);
var first__2377 = cljs.core.first.call(null,seq__2376);
var seq__2376__$1 = cljs.core.next.call(null,seq__2376);
var ___$1 = first__2377;
var first__2377__$1 = cljs.core.first.call(null,seq__2376__$1);
var seq__2376__$2 = cljs.core.next.call(null,seq__2376__$1);
var test = first__2377__$1;
var body = seq__2376__$2;
if((test instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.apply.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.when_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test","test",577538877),test], null)], null),body)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unsupported-type","unsupported-type",-734728196),new cljs.core.Keyword(null,"value","value",305978217),test], null)], null)], null);

}
}));
pluto.reader.blocks.if_block = (function pluto$reader$blocks$if_block(var_args){
var args__4521__auto__ = [];
var len__4518__auto___2383 = arguments.length;
var i__4519__auto___2384 = (0);
while(true){
if((i__4519__auto___2384 < len__4518__auto___2383)){
args__4521__auto__.push((arguments[i__4519__auto___2384]));

var G__2385 = (i__4519__auto___2384 + (1));
i__4519__auto___2384 = G__2385;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic = (function (p__2380,body){
var map__2381 = p__2380;
var map__2381__$1 = ((((!((map__2381 == null)))?(((((map__2381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2381):map__2381);
var test = cljs.core.get.call(null,map__2381__$1,new cljs.core.Keyword(null,"test","test",577538877));
if(cljs.core.truth_(test)){
return cljs.core.first.call(null,body);
} else {
return cljs.core.second.call(null,body);
}
});

pluto.reader.blocks.if_block.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.reader.blocks.if_block.cljs$lang$applyTo = (function (seq2378){
var G__2379 = cljs.core.first.call(null,seq2378);
var seq2378__$1 = cljs.core.next.call(null,seq2378);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2379,seq2378__$1);
});

cljs.core._add_method.call(null,pluto.reader.blocks.parse,new cljs.core.Symbol(null,"if","if",1181717262,null),(function (_,p__2386){
var vec__2387 = p__2386;
var ___$1 = cljs.core.nth.call(null,vec__2387,(0),null);
var test = cljs.core.nth.call(null,vec__2387,(1),null);
var then = cljs.core.nth.call(null,vec__2387,(2),null);
var else$ = cljs.core.nth.call(null,vec__2387,(3),null);
if((test instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.apply.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.if_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test","test",577538877),test], null)], null),(new cljs.core.List(null,then,(new cljs.core.List(null,else$,null,(1),null)),(2),null)))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unsupported-type","unsupported-type",-734728196),new cljs.core.Keyword(null,"value","value",305978217),test], null)], null)], null);

}
}));
cljs.core._add_method.call(null,pluto.reader.blocks.parse,new cljs.core.Keyword(null,"default","default",-1987822328),(function (opts,block){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unknown-block-type","unknown-block-type",-507846201),new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"block","block",664686210),block], null)], null)], null);
}));
