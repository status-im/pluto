// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
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
return cljs.core.reduce_kv((function (p1__2077_SHARP_,p2__2078_SHARP_,p3__2079_SHARP_){
return clojure.string.replace(p1__2077_SHARP_,["${",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__2078_SHARP_)].join('')),"}"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p3__2079_SHARP_)].join(''));
}),s,values);
});
pluto.utils.update_db = (function pluto$utils$update_db(cofx,p__2080){
var map__2081 = p__2080;
var map__2081__$1 = ((((!((map__2081 == null)))?(((((map__2081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2081):map__2081);
var fx = map__2081__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2081__$1,cljs.core.cst$kw$db);
if(cljs.core.truth_(db)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$db,db);
} else {
return cofx;
}
});
pluto.utils.merge_fx = (function pluto$utils$merge_fx(var_args){
var args__4534__auto__ = [];
var len__4531__auto___2089 = arguments.length;
var i__4532__auto___2090 = (0);
while(true){
if((i__4532__auto___2090 < len__4531__auto___2089)){
args__4534__auto__.push((arguments[i__4532__auto___2090]));

var G__2091 = (i__4532__auto___2090 + (1));
i__4532__auto___2090 = G__2091;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return pluto.utils.merge_fx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

pluto.utils.merge_fx.cljs$core$IFn$_invoke$arity$variadic = (function (cofx,fx_fns){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__2085,fx_fn){
var vec__2086 = p__2085;
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2086,(0),null);
var cofx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2086,(1),null);
var new_fx = (fx_fn.cljs$core$IFn$_invoke$arity$1 ? fx_fn.cljs$core$IFn$_invoke$arity$1(cofx__$1) : fx_fn.call(null,cofx__$1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fx,new_fx], 0)),pluto.utils.update_db(cofx__$1,new_fx)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cofx], null),fx_fns));
});

pluto.utils.merge_fx.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.utils.merge_fx.cljs$lang$applyTo = (function (seq2083){
var G__2084 = cljs.core.first(seq2083);
var seq2083__$1 = cljs.core.next(seq2083);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2084,seq2083__$1);
});

