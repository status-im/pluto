// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('pluto.components.html');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
pluto.components.html.view = (function pluto$components$html$view(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5879 = arguments.length;
var i__4532__auto___5880 = (0);
while(true){
if((i__4532__auto___5880 < len__4531__auto___5879)){
args__4534__auto__.push((arguments[i__4532__auto___5880]));

var G__5881 = (i__4532__auto___5880 + (1));
i__4532__auto___5880 = G__5881;
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
pluto.components.html.view.cljs$lang$applyTo = (function (seq5877){
var G__5878 = cljs.core.first(seq5877);
var seq5877__$1 = cljs.core.next(seq5877);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5878,seq5877__$1);
});

pluto.components.html.button = (function pluto$components$html$button(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5887 = arguments.length;
var i__4532__auto___5888 = (0);
while(true){
if((i__4532__auto___5888 < len__4531__auto___5887)){
args__4534__auto__.push((arguments[i__4532__auto___5888]));

var G__5889 = (i__4532__auto___5888 + (1));
i__4532__auto___5888 = G__5889;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return pluto.components.html.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

pluto.components.html.button.cljs$core$IFn$_invoke$arity$variadic = (function (p__5884,content){
var map__5885 = p__5884;
var map__5885__$1 = ((((!((map__5885 == null)))?(((((map__5885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5885):map__5885);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5885__$1,cljs.core.cst$kw$on_DASH_click);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (map__5885,map__5885__$1,on_click){
return (function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(on_click) : re_frame.core.dispatch.call(null,on_click));
});})(map__5885,map__5885__$1,on_click))
], null)], null),content);
});

pluto.components.html.button.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.components.html.button.cljs$lang$applyTo = (function (seq5882){
var G__5883 = cljs.core.first(seq5882);
var seq5882__$1 = cljs.core.next(seq5882);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5883,seq5882__$1);
});

pluto.components.html.text = (function pluto$components$html$text(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5892 = arguments.length;
var i__4532__auto___5893 = (0);
while(true){
if((i__4532__auto___5893 < len__4531__auto___5892)){
args__4534__auto__.push((arguments[i__4532__auto___5893]));

var G__5894 = (i__4532__auto___5893 + (1));
i__4532__auto___5893 = G__5894;
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
pluto.components.html.text.cljs$lang$applyTo = (function (seq5890){
var G__5891 = cljs.core.first(seq5890);
var seq5890__$1 = cljs.core.next(seq5890);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5891,seq5890__$1);
});

pluto.components.html.components = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$view,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$properties,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$value,pluto.components.html.view,cljs.core.cst$kw$description,"",cljs.core.cst$kw$examples,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$sym$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$properties,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$value,pluto.components.html.button,cljs.core.cst$kw$examples,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$sym$text,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$event], null),cljs.core.cst$kw$value,pluto.components.html.text,cljs.core.cst$kw$examples,cljs.core.PersistentVector.EMPTY], null)], null);
