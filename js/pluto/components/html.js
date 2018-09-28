// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('pluto.components.html');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
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
var len__4518__auto___1175 = arguments.length;
var i__4519__auto___1176 = (0);
while(true){
if((i__4519__auto___1176 < len__4518__auto___1175)){
args__4521__auto__.push((arguments[i__4519__auto___1176]));

var G__1177 = (i__4519__auto___1176 + (1));
i__4519__auto___1176 = G__1177;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return pluto.components.html.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

pluto.components.html.button.cljs$core$IFn$_invoke$arity$variadic = (function (p__1172,content){
var map__1173 = p__1172;
var map__1173__$1 = ((((!((map__1173 == null)))?(((((map__1173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1173):map__1173);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1173__$1,cljs.core.cst$kw$on_DASH_click);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (map__1173,map__1173__$1,on_click){
return (function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(on_click) : re_frame.core.dispatch.call(null,on_click));
});})(map__1173,map__1173__$1,on_click))
], null)], null),content);
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
var len__4518__auto___1180 = arguments.length;
var i__4519__auto___1181 = (0);
while(true){
if((i__4519__auto___1181 < len__4518__auto___1180)){
args__4521__auto__.push((arguments[i__4519__auto___1181]));

var G__1182 = (i__4519__auto___1181 + (1));
i__4519__auto___1181 = G__1182;
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
pluto.components.html.text.cljs$lang$applyTo = (function (seq1178){
var G__1179 = cljs.core.first(seq1178);
var seq1178__$1 = cljs.core.next(seq1178);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1179,seq1178__$1);
});

pluto.components.html.components = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$view,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$properties,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$value,pluto.components.html.view,cljs.core.cst$kw$description,"",cljs.core.cst$kw$examples,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$sym$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$properties,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$value,pluto.components.html.button,cljs.core.cst$kw$examples,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$sym$text,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$event], null),cljs.core.cst$kw$value,pluto.components.html.text,cljs.core.cst$kw$examples,cljs.core.PersistentVector.EMPTY], null)], null);
