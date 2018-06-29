// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
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
return (function (_,p__1210){
var vec__1211 = p__1210;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1211,(0),null);
return type;
});})(method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__,hierarchy__4405__auto__))
,cljs.core.cst$kw$default,hierarchy__4405__auto__,method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__));
})();
}
pluto.reader.blocks.resolve_query = (function pluto$reader$blocks$resolve_query(o){
if(cljs.core.truth_(pluto.reader.reference.reference_QMARK_(o))){
return cljs.core.deref((function (){var G__1214 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.second(o)))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1214) : re_frame.core.subscribe.call(null,G__1214));
})());
} else {
return null;
}
});
pluto.reader.blocks.resolve_queries = (function pluto$reader$blocks$resolve_queries(env){
return cljs.core.reduce_kv((function (p1__1215_SHARP_,p2__1216_SHARP_,p3__1217_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__1215_SHARP_,p2__1216_SHARP_,pluto.reader.blocks.resolve_query(p3__1217_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,env);
});
pluto.reader.blocks.let_block = (function pluto$reader$blocks$let_block(p__1218,child){
var map__1219 = p__1218;
var map__1219__$1 = ((((!((map__1219 == null)))?(((((map__1219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1219):map__1219);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1219__$1,cljs.core.cst$kw$env);
if(cljs.core.coll_QMARK_(child)){
return clojure.walk.prewalk_replace(pluto.reader.blocks.resolve_queries(env),child);
} else {
return null;
}
});
pluto.reader.blocks.bindings__GT_env = (function pluto$reader$blocks$bindings__GT_env(v){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,v);
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$let,(function (_,p__1221){
var vec__1222 = p__1221;
var seq__1223 = cljs.core.seq(vec__1222);
var first__1224 = cljs.core.first(seq__1223);
var seq__1223__$1 = cljs.core.next(seq__1223);
var ___$1 = first__1224;
var first__1224__$1 = cljs.core.first(seq__1223__$1);
var seq__1223__$2 = cljs.core.next(seq__1223__$1);
var bindings = first__1224__$1;
var body = seq__1223__$2;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,(function (){var m = pluto.reader.blocks.bindings__GT_env(bindings);
var child = cljs.core.last(body);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.let_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$env,m], null),child], null);
})()], null);
}));
pluto.reader.blocks.when_block = (function pluto$reader$blocks$when_block(p__1225,body){
var map__1226 = p__1225;
var map__1226__$1 = ((((!((map__1226 == null)))?(((((map__1226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1226):map__1226);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1226__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return body;
} else {
return null;
}
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$when,(function (_,p__1228){
var vec__1229 = p__1228;
var seq__1230 = cljs.core.seq(vec__1229);
var first__1231 = cljs.core.first(seq__1230);
var seq__1230__$1 = cljs.core.next(seq__1230);
var ___$1 = first__1231;
var first__1231__$1 = cljs.core.first(seq__1230__$1);
var seq__1230__$2 = cljs.core.next(seq__1230__$1);
var test = first__1231__$1;
var body = seq__1230__$2;
if((test instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.when_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,test], null)], null),body)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$unsupported_DASH_type,cljs.core.cst$kw$value,test], null)], null)], null);

}
}));
pluto.reader.blocks.if_block = (function pluto$reader$blocks$if_block(var_args){
var args__4521__auto__ = [];
var len__4518__auto___1237 = arguments.length;
var i__4519__auto___1238 = (0);
while(true){
if((i__4519__auto___1238 < len__4518__auto___1237)){
args__4521__auto__.push((arguments[i__4519__auto___1238]));

var G__1239 = (i__4519__auto___1238 + (1));
i__4519__auto___1238 = G__1239;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic = (function (p__1234,body){
var map__1235 = p__1234;
var map__1235__$1 = ((((!((map__1235 == null)))?(((((map__1235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1235):map__1235);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1235__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return cljs.core.first(body);
} else {
return cljs.core.second(body);
}
});

pluto.reader.blocks.if_block.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.reader.blocks.if_block.cljs$lang$applyTo = (function (seq1232){
var G__1233 = cljs.core.first(seq1232);
var seq1232__$1 = cljs.core.next(seq1232);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1233,seq1232__$1);
});

pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$if,(function (_,p__1240){
var vec__1241 = p__1240;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1241,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1241,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1241,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1241,(3),null);
if((test instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.if_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,test], null)], null),(new cljs.core.List(null,then,(new cljs.core.List(null,else$,null,(1),null)),(2),null)))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$unsupported_DASH_type,cljs.core.cst$kw$value,test], null)], null)], null);

}
}));
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (opts,block){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$unknown_DASH_block_DASH_type,cljs.core.cst$kw$opts,opts,cljs.core.cst$kw$block,block], null)], null)], null);
}));
