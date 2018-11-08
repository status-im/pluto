// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('pluto.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
pluto.utils.ex_cause = (function pluto$utils$ex_cause(ex){
return cljs.core.ex_cause(ex);
});
pluto.utils.ex_message = (function pluto$utils$ex_message(ex){
return cljs.core.ex_message(ex);
});
pluto.utils.atom_QMARK_ = (function pluto$utils$atom_QMARK_(o){
return (o instanceof cljs.core.Atom);
});
pluto.utils.primitive_QMARK_ = (function pluto$utils$primitive_QMARK_(o){
return ((cljs.core.boolean_QMARK_(o)) || (cljs.core.int_QMARK_(o)) || (cljs.core.float_QMARK_(o)) || (typeof o === 'string'));
});
pluto.utils.interpolate = (function pluto$utils$interpolate(values,s){
return cljs.core.reduce_kv((function (p1__6403_SHARP_,p2__6404_SHARP_,p3__6405_SHARP_){
return clojure.string.replace(p1__6403_SHARP_,["${",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__6404_SHARP_)),"}"].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p3__6405_SHARP_));
}),s,values);
});
pluto.utils.update_db = (function pluto$utils$update_db(cofx,p__6406){
var map__6407 = p__6406;
var map__6407__$1 = (((((!((map__6407 == null))))?(((((map__6407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6407):map__6407);
var fx = map__6407__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6407__$1,cljs.core.cst$kw$db);
if(cljs.core.truth_(db)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$db,db);
} else {
return cofx;
}
});
pluto.utils.merge_fx = (function pluto$utils$merge_fx(var_args){
var args__4647__auto__ = [];
var len__4641__auto___6415 = arguments.length;
var i__4642__auto___6416 = (0);
while(true){
if((i__4642__auto___6416 < len__4641__auto___6415)){
args__4647__auto__.push((arguments[i__4642__auto___6416]));

var G__6417 = (i__4642__auto___6416 + (1));
i__4642__auto___6416 = G__6417;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return pluto.utils.merge_fx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

pluto.utils.merge_fx.cljs$core$IFn$_invoke$arity$variadic = (function (cofx,fx_fns){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__6411,fx_fn){
var vec__6412 = p__6411;
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6412,(0),null);
var cofx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6412,(1),null);
var new_fx = (fx_fn.cljs$core$IFn$_invoke$arity$1 ? fx_fn.cljs$core$IFn$_invoke$arity$1(cofx__$1) : fx_fn.call(null,cofx__$1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fx,new_fx], 0)),pluto.utils.update_db(cofx__$1,new_fx)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cofx], null),fx_fns));
});

pluto.utils.merge_fx.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.utils.merge_fx.cljs$lang$applyTo = (function (seq6409){
var G__6410 = cljs.core.first(seq6409);
var seq6409__$1 = cljs.core.next(seq6409);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6410,seq6409__$1);
});

