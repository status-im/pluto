// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__3441__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__3441 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3442__i = 0, G__3442__a = new Array(arguments.length -  0);
while (G__3442__i < G__3442__a.length) {G__3442__a[G__3442__i] = arguments[G__3442__i + 0]; ++G__3442__i;}
  args = new cljs.core.IndexedSeq(G__3442__a,0,null);
} 
return G__3441__delegate.call(this,args);};
G__3441.cljs$lang$maxFixedArity = 0;
G__3441.cljs$lang$applyTo = (function (arglist__3443){
var args = cljs.core.seq(arglist__3443);
return G__3441__delegate(args);
});
G__3441.cljs$core$IFn$_invoke$arity$variadic = G__3441__delegate;
return G__3441;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__3444__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__3444 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3445__i = 0, G__3445__a = new Array(arguments.length -  0);
while (G__3445__i < G__3445__a.length) {G__3445__a[G__3445__i] = arguments[G__3445__i + 0]; ++G__3445__i;}
  args = new cljs.core.IndexedSeq(G__3445__a,0,null);
} 
return G__3444__delegate.call(this,args);};
G__3444.cljs$lang$maxFixedArity = 0;
G__3444.cljs$lang$applyTo = (function (arglist__3446){
var args = cljs.core.seq(arglist__3446);
return G__3444__delegate(args);
});
G__3444.cljs$core$IFn$_invoke$arity$variadic = G__3444__delegate;
return G__3444;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
