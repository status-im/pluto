// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
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
var G__3443__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__3443 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3444__i = 0, G__3444__a = new Array(arguments.length -  0);
while (G__3444__i < G__3444__a.length) {G__3444__a[G__3444__i] = arguments[G__3444__i + 0]; ++G__3444__i;}
  args = new cljs.core.IndexedSeq(G__3444__a,0,null);
} 
return G__3443__delegate.call(this,args);};
G__3443.cljs$lang$maxFixedArity = 0;
G__3443.cljs$lang$applyTo = (function (arglist__3445){
var args = cljs.core.seq(arglist__3445);
return G__3443__delegate(args);
});
G__3443.cljs$core$IFn$_invoke$arity$variadic = G__3443__delegate;
return G__3443;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__3446__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__3446 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3447__i = 0, G__3447__a = new Array(arguments.length -  0);
while (G__3447__i < G__3447__a.length) {G__3447__a[G__3447__i] = arguments[G__3447__i + 0]; ++G__3447__i;}
  args = new cljs.core.IndexedSeq(G__3447__a,0,null);
} 
return G__3446__delegate.call(this,args);};
G__3446.cljs$lang$maxFixedArity = 0;
G__3446.cljs$lang$applyTo = (function (arglist__3448){
var args = cljs.core.seq(arglist__3448);
return G__3446__delegate(args);
});
G__3446.cljs$core$IFn$_invoke$arity$variadic = G__3446__delegate;
return G__3446;
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
