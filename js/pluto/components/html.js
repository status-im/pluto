// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('pluto.components.html');
goog.require('cljs.core');
goog.require('cljs.core.constants');
pluto.components.html.view = (function pluto$components$html$view(var_args){
var args__4521__auto__ = [];
var len__4518__auto___1167 = arguments.length;
var i__4519__auto___1168 = (0);
while(true){
if((i__4519__auto___1168 < len__4518__auto___1167)){
args__4521__auto__.push((arguments[i__4519__auto___1168]));

var G__1169 = (i__4519__auto___1168 + (1));
i__4519__auto___1168 = G__1169;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return pluto.components.html.view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

pluto.components.html.view.cljs$core$IFn$_invoke$arity$variadic = (function (props,content){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,props], null),content);
});

pluto.components.html.view.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.components.html.view.cljs$lang$applyTo = (function (seq1165){
var G__1166 = cljs.core.first(seq1165);
var seq1165__$1 = cljs.core.next(seq1165);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1166,seq1165__$1);
});

pluto.components.html.button = (function pluto$components$html$button(var_args){
var args__4521__auto__ = [];
var len__4518__auto___1172 = arguments.length;
var i__4519__auto___1173 = (0);
while(true){
if((i__4519__auto___1173 < len__4518__auto___1172)){
args__4521__auto__.push((arguments[i__4519__auto___1173]));

var G__1174 = (i__4519__auto___1173 + (1));
i__4519__auto___1173 = G__1174;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return pluto.components.html.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

pluto.components.html.button.cljs$core$IFn$_invoke$arity$variadic = (function (props,content){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,props], null),content);
});

pluto.components.html.button.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.components.html.button.cljs$lang$applyTo = (function (seq1170){
var G__1171 = cljs.core.first(seq1170);
var seq1170__$1 = cljs.core.next(seq1170);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1171,seq1170__$1);
});

pluto.components.html.text = (function pluto$components$html$text(var_args){
var args__4521__auto__ = [];
var len__4518__auto___1177 = arguments.length;
var i__4519__auto___1178 = (0);
while(true){
if((i__4519__auto___1178 < len__4518__auto___1177)){
args__4521__auto__.push((arguments[i__4519__auto___1178]));

var G__1179 = (i__4519__auto___1178 + (1));
i__4519__auto___1178 = G__1179;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return pluto.components.html.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

pluto.components.html.text.cljs$core$IFn$_invoke$arity$variadic = (function (props,content){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,props], null),content);
});

pluto.components.html.text.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.components.html.text.cljs$lang$applyTo = (function (seq1175){
var G__1176 = cljs.core.first(seq1175);
var seq1175__$1 = cljs.core.next(seq1175);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1176,seq1175__$1);
});

pluto.components.html.components = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$view,pluto.components.html.view,cljs.core.cst$sym$button,pluto.components.html.button,cljs.core.cst$sym$text,pluto.components.html.text], null);
