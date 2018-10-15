// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('pluto.components.html');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
pluto.components.html.view = (function pluto$components$html$view(var_args){
var args__4534__auto__ = [];
var len__4531__auto___1997 = arguments.length;
var i__4532__auto___1998 = (0);
while(true){
if((i__4532__auto___1998 < len__4531__auto___1997)){
args__4534__auto__.push((arguments[i__4532__auto___1998]));

var G__1999 = (i__4532__auto___1998 + (1));
i__4532__auto___1998 = G__1999;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return pluto.components.html.view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

pluto.components.html.view.cljs$core$IFn$_invoke$arity$variadic = (function (props,content){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,props], null),content);
});

pluto.components.html.view.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.components.html.view.cljs$lang$applyTo = (function (seq1995){
var G__1996 = cljs.core.first(seq1995);
var seq1995__$1 = cljs.core.next(seq1995);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1996,seq1995__$1);
});

pluto.components.html.button = (function pluto$components$html$button(var_args){
var args__4534__auto__ = [];
var len__4531__auto___2005 = arguments.length;
var i__4532__auto___2006 = (0);
while(true){
if((i__4532__auto___2006 < len__4531__auto___2005)){
args__4534__auto__.push((arguments[i__4532__auto___2006]));

var G__2007 = (i__4532__auto___2006 + (1));
i__4532__auto___2006 = G__2007;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return pluto.components.html.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

pluto.components.html.button.cljs$core$IFn$_invoke$arity$variadic = (function (p__2002,content){
var map__2003 = p__2002;
var map__2003__$1 = ((((!((map__2003 == null)))?(((((map__2003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2003):map__2003);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2003__$1,cljs.core.cst$kw$on_DASH_click);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (map__2003,map__2003__$1,on_click){
return (function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(on_click) : re_frame.core.dispatch.call(null,on_click));
});})(map__2003,map__2003__$1,on_click))
], null)], null),content);
});

pluto.components.html.button.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.components.html.button.cljs$lang$applyTo = (function (seq2000){
var G__2001 = cljs.core.first(seq2000);
var seq2000__$1 = cljs.core.next(seq2000);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2001,seq2000__$1);
});

pluto.components.html.text = (function pluto$components$html$text(var_args){
var args__4534__auto__ = [];
var len__4531__auto___2010 = arguments.length;
var i__4532__auto___2011 = (0);
while(true){
if((i__4532__auto___2011 < len__4531__auto___2010)){
args__4534__auto__.push((arguments[i__4532__auto___2011]));

var G__2012 = (i__4532__auto___2011 + (1));
i__4532__auto___2011 = G__2012;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return pluto.components.html.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

pluto.components.html.text.cljs$core$IFn$_invoke$arity$variadic = (function (props,content){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,props], null),content);
});

pluto.components.html.text.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.components.html.text.cljs$lang$applyTo = (function (seq2008){
var G__2009 = cljs.core.first(seq2008);
var seq2008__$1 = cljs.core.next(seq2008);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2009,seq2008__$1);
});

pluto.components.html.components = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$view,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$properties,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$value,pluto.components.html.view,cljs.core.cst$kw$description,"",cljs.core.cst$kw$examples,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$sym$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$event], null),cljs.core.cst$kw$value,pluto.components.html.button,cljs.core.cst$kw$examples,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$sym$text,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$properties,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$value,pluto.components.html.text,cljs.core.cst$kw$examples,cljs.core.PersistentVector.EMPTY], null)], null);
