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
return (function (_,p__1193){
var vec__1194 = p__1193;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1194,(0),null);
return type;
});})(method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__,hierarchy__4405__auto__))
,cljs.core.cst$kw$default,hierarchy__4405__auto__,method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__));
})();
}
pluto.reader.blocks.resolve_query = (function pluto$reader$blocks$resolve_query(o){
if(cljs.core.truth_(pluto.reader.reference.reference_QMARK_(o))){
return cljs.core.deref((function (){var G__1197 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.second(o)))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1197) : re_frame.core.subscribe.call(null,G__1197));
})());
} else {
return null;
}
});
pluto.reader.blocks.resolve_queries = (function pluto$reader$blocks$resolve_queries(env){
return cljs.core.reduce_kv((function (p1__1198_SHARP_,p2__1199_SHARP_,p3__1200_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__1198_SHARP_,p2__1199_SHARP_,pluto.reader.blocks.resolve_query(p3__1200_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,env);
});
pluto.reader.blocks.let_block = (function pluto$reader$blocks$let_block(p__1201,child){
var map__1202 = p__1201;
var map__1202__$1 = ((((!((map__1202 == null)))?(((((map__1202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1202):map__1202);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1202__$1,cljs.core.cst$kw$env);
if(cljs.core.coll_QMARK_(child)){
return clojure.walk.prewalk_replace(pluto.reader.blocks.resolve_queries(env),child);
} else {
return null;
}
});
pluto.reader.blocks.bindings__GT_env = (function pluto$reader$blocks$bindings__GT_env(v){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,v);
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$let,(function (_,p__1204){
var vec__1205 = p__1204;
var seq__1206 = cljs.core.seq(vec__1205);
var first__1207 = cljs.core.first(seq__1206);
var seq__1206__$1 = cljs.core.next(seq__1206);
var ___$1 = first__1207;
var first__1207__$1 = cljs.core.first(seq__1206__$1);
var seq__1206__$2 = cljs.core.next(seq__1206__$1);
var bindings = first__1207__$1;
var body = seq__1206__$2;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,(function (){var m = pluto.reader.blocks.bindings__GT_env(bindings);
var child = cljs.core.last(body);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.let_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$env,m], null),child], null);
})()], null);
}));
pluto.reader.blocks.when_block = (function pluto$reader$blocks$when_block(p__1208,body){
var map__1209 = p__1208;
var map__1209__$1 = ((((!((map__1209 == null)))?(((((map__1209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1209):map__1209);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1209__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return body;
} else {
return null;
}
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$when,(function (_,p__1211){
var vec__1212 = p__1211;
var seq__1213 = cljs.core.seq(vec__1212);
var first__1214 = cljs.core.first(seq__1213);
var seq__1213__$1 = cljs.core.next(seq__1213);
var ___$1 = first__1214;
var first__1214__$1 = cljs.core.first(seq__1213__$1);
var seq__1213__$2 = cljs.core.next(seq__1213__$1);
var test = first__1214__$1;
var body = seq__1213__$2;
if((test instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.when_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,test], null)], null),body)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$unsupported_DASH_type,cljs.core.cst$kw$value,test], null)], null)], null);

}
}));
pluto.reader.blocks.if_block = (function pluto$reader$blocks$if_block(var_args){
var args__4521__auto__ = [];
var len__4518__auto___1220 = arguments.length;
var i__4519__auto___1221 = (0);
while(true){
if((i__4519__auto___1221 < len__4518__auto___1220)){
args__4521__auto__.push((arguments[i__4519__auto___1221]));

var G__1222 = (i__4519__auto___1221 + (1));
i__4519__auto___1221 = G__1222;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic = (function (p__1217,body){
var map__1218 = p__1217;
var map__1218__$1 = ((((!((map__1218 == null)))?(((((map__1218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1218):map__1218);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1218__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return cljs.core.first(body);
} else {
return cljs.core.second(body);
}
});

pluto.reader.blocks.if_block.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.reader.blocks.if_block.cljs$lang$applyTo = (function (seq1215){
var G__1216 = cljs.core.first(seq1215);
var seq1215__$1 = cljs.core.next(seq1215);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1216,seq1215__$1);
});

pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$if,(function (_,p__1223){
var vec__1224 = p__1223;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1224,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1224,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1224,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1224,(3),null);
if((test instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.if_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,test], null)], null),(new cljs.core.List(null,then,(new cljs.core.List(null,else$,null,(1),null)),(2),null)))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$unsupported_DASH_type,cljs.core.cst$kw$value,test], null)], null)], null);

}
}));
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (opts,block){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$unknown_DASH_block_DASH_type,cljs.core.cst$kw$opts,opts,cljs.core.cst$kw$block,block], null)], null)], null);
}));
