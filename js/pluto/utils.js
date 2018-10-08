// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('pluto.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
pluto.utils.ex_cause = (function pluto$utils$ex_cause(ex){
return cljs.core.ex_cause(ex);
});
pluto.utils.ex_message = (function pluto$utils$ex_message(ex){
return cljs.core.ex_message(ex);
});
pluto.utils.primitive_QMARK_ = (function pluto$utils$primitive_QMARK_(o){
return ((cljs.core.boolean_QMARK_(o)) || (cljs.core.int_QMARK_(o)) || (cljs.core.float_QMARK_(o)) || (typeof o === 'string'));
});
pluto.utils.update_db = (function pluto$utils$update_db(cofx,p__2075){
var map__2076 = p__2075;
var map__2076__$1 = ((((!((map__2076 == null)))?(((((map__2076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2076):map__2076);
var fx = map__2076__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2076__$1,cljs.core.cst$kw$db);
if(cljs.core.truth_(db)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$db,db);
} else {
return cofx;
}
});
pluto.utils.merge_fx = (function pluto$utils$merge_fx(var_args){
var args__4534__auto__ = [];
var len__4531__auto___2084 = arguments.length;
var i__4532__auto___2085 = (0);
while(true){
if((i__4532__auto___2085 < len__4531__auto___2084)){
args__4534__auto__.push((arguments[i__4532__auto___2085]));

var G__2086 = (i__4532__auto___2085 + (1));
i__4532__auto___2085 = G__2086;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return pluto.utils.merge_fx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

pluto.utils.merge_fx.cljs$core$IFn$_invoke$arity$variadic = (function (cofx,fx_fns){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__2080,fx_fn){
var vec__2081 = p__2080;
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2081,(0),null);
var cofx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2081,(1),null);
var new_fx = (fx_fn.cljs$core$IFn$_invoke$arity$1 ? fx_fn.cljs$core$IFn$_invoke$arity$1(cofx__$1) : fx_fn.call(null,cofx__$1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fx,new_fx], 0)),pluto.utils.update_db(cofx__$1,new_fx)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cofx], null),fx_fns));
});

pluto.utils.merge_fx.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.utils.merge_fx.cljs$lang$applyTo = (function (seq2078){
var G__2079 = cljs.core.first(seq2078);
var seq2078__$1 = cljs.core.next(seq2078);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2079,seq2078__$1);
});

