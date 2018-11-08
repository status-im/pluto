// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('pluto.components.html');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
pluto.components.html.view = (function pluto$components$html$view(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5065 = arguments.length;
var i__4642__auto___5066 = (0);
while(true){
if((i__4642__auto___5066 < len__4641__auto___5065)){
args__4647__auto__.push((arguments[i__4642__auto___5066]));

var G__5067 = (i__4642__auto___5066 + (1));
i__4642__auto___5066 = G__5067;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return pluto.components.html.view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

pluto.components.html.view.cljs$core$IFn$_invoke$arity$variadic = (function (props,content){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,props], null),content);
});

pluto.components.html.view.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.components.html.view.cljs$lang$applyTo = (function (seq5063){
var G__5064 = cljs.core.first(seq5063);
var seq5063__$1 = cljs.core.next(seq5063);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5064,seq5063__$1);
});

pluto.components.html.button = (function pluto$components$html$button(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5075 = arguments.length;
var i__4642__auto___5076 = (0);
while(true){
if((i__4642__auto___5076 < len__4641__auto___5075)){
args__4647__auto__.push((arguments[i__4642__auto___5076]));

var G__5077 = (i__4642__auto___5076 + (1));
i__4642__auto___5076 = G__5077;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return pluto.components.html.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

pluto.components.html.button.cljs$core$IFn$_invoke$arity$variadic = (function (p__5070,content){
var map__5071 = p__5070;
var map__5071__$1 = (((((!((map__5071 == null))))?(((((map__5071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5071):map__5071);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5071__$1,cljs.core.cst$kw$on_DASH_click);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (map__5071,map__5071__$1,on_click){
return (function (){
var G__5073 = (function (){var G__5074 = cljs.core.PersistentArrayMap.EMPTY;
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(G__5074) : on_click.call(null,G__5074));
})();
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__5073) : re_frame.core.dispatch.call(null,G__5073));
});})(map__5071,map__5071__$1,on_click))
], null)], null),content);
});

pluto.components.html.button.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.components.html.button.cljs$lang$applyTo = (function (seq5068){
var G__5069 = cljs.core.first(seq5068);
var seq5068__$1 = cljs.core.next(seq5068);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5069,seq5068__$1);
});

pluto.components.html.text = (function pluto$components$html$text(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5080 = arguments.length;
var i__4642__auto___5081 = (0);
while(true){
if((i__4642__auto___5081 < len__4641__auto___5080)){
args__4647__auto__.push((arguments[i__4642__auto___5081]));

var G__5082 = (i__4642__auto___5081 + (1));
i__4642__auto___5081 = G__5082;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return pluto.components.html.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

pluto.components.html.text.cljs$core$IFn$_invoke$arity$variadic = (function (props,content){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,props], null),content);
});

pluto.components.html.text.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.components.html.text.cljs$lang$applyTo = (function (seq5078){
var G__5079 = cljs.core.first(seq5078);
var seq5078__$1 = cljs.core.next(seq5078);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5079,seq5078__$1);
});

pluto.components.html.components = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$view,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$properties,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$value,pluto.components.html.view,cljs.core.cst$kw$description,"",cljs.core.cst$kw$examples,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$sym$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$event], null),cljs.core.cst$kw$value,pluto.components.html.button,cljs.core.cst$kw$examples,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$sym$text,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$properties,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$value,pluto.components.html.text,cljs.core.cst$kw$examples,cljs.core.PersistentVector.EMPTY], null)], null);
