// Compiled by ClojureScript 1.10.329 {}
goog.provide('pluto.components.html');
goog.require('cljs.core');
pluto.components.html.view = (function pluto$components$html$view(var_args){
var args__4521__auto__ = [];
var len__4518__auto___1778 = arguments.length;
var i__4519__auto___1779 = (0);
while(true){
if((i__4519__auto___1779 < len__4518__auto___1778)){
args__4521__auto__.push((arguments[i__4519__auto___1779]));

var G__1780 = (i__4519__auto___1779 + (1));
i__4519__auto___1779 = G__1780;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return pluto.components.html.view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

pluto.components.html.view.cljs$core$IFn$_invoke$arity$variadic = (function (props,content){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),props], null),content);
});

pluto.components.html.view.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.components.html.view.cljs$lang$applyTo = (function (seq1776){
var G__1777 = cljs.core.first.call(null,seq1776);
var seq1776__$1 = cljs.core.next.call(null,seq1776);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1777,seq1776__$1);
});

pluto.components.html.button = (function pluto$components$html$button(var_args){
var args__4521__auto__ = [];
var len__4518__auto___1783 = arguments.length;
var i__4519__auto___1784 = (0);
while(true){
if((i__4519__auto___1784 < len__4518__auto___1783)){
args__4521__auto__.push((arguments[i__4519__auto___1784]));

var G__1785 = (i__4519__auto___1784 + (1));
i__4519__auto___1784 = G__1785;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return pluto.components.html.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

pluto.components.html.button.cljs$core$IFn$_invoke$arity$variadic = (function (props,content){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),props], null),content);
});

pluto.components.html.button.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.components.html.button.cljs$lang$applyTo = (function (seq1781){
var G__1782 = cljs.core.first.call(null,seq1781);
var seq1781__$1 = cljs.core.next.call(null,seq1781);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1782,seq1781__$1);
});

pluto.components.html.text = (function pluto$components$html$text(var_args){
var args__4521__auto__ = [];
var len__4518__auto___1788 = arguments.length;
var i__4519__auto___1789 = (0);
while(true){
if((i__4519__auto___1789 < len__4518__auto___1788)){
args__4521__auto__.push((arguments[i__4519__auto___1789]));

var G__1790 = (i__4519__auto___1789 + (1));
i__4519__auto___1789 = G__1790;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return pluto.components.html.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

pluto.components.html.text.cljs$core$IFn$_invoke$arity$variadic = (function (props,content){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),props], null),content);
});

pluto.components.html.text.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.components.html.text.cljs$lang$applyTo = (function (seq1786){
var G__1787 = cljs.core.first.call(null,seq1786);
var seq1786__$1 = cljs.core.next.call(null,seq1786);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1787,seq1786__$1);
});

pluto.components.html.components = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"view","view",-1406440955,null),pluto.components.html.view,new cljs.core.Symbol(null,"button","button",-1197855826,null),pluto.components.html.button,new cljs.core.Symbol(null,"text","text",-150030170,null),pluto.components.html.text], null);
