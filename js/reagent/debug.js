// Compiled by ClojureScript 1.10.516 {:static-fns true, :optimize-constants true}
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
var G__3773__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__3773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3774__i = 0, G__3774__a = new Array(arguments.length -  0);
while (G__3774__i < G__3774__a.length) {G__3774__a[G__3774__i] = arguments[G__3774__i + 0]; ++G__3774__i;}
  args = new cljs.core.IndexedSeq(G__3774__a,0,null);
} 
return G__3773__delegate.call(this,args);};
G__3773.cljs$lang$maxFixedArity = 0;
G__3773.cljs$lang$applyTo = (function (arglist__3775){
var args = cljs.core.seq(arglist__3775);
return G__3773__delegate(args);
});
G__3773.cljs$core$IFn$_invoke$arity$variadic = G__3773__delegate;
return G__3773;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__3776__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__3776 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3777__i = 0, G__3777__a = new Array(arguments.length -  0);
while (G__3777__i < G__3777__a.length) {G__3777__a[G__3777__i] = arguments[G__3777__i + 0]; ++G__3777__i;}
  args = new cljs.core.IndexedSeq(G__3777__a,0,null);
} 
return G__3776__delegate.call(this,args);};
G__3776.cljs$lang$maxFixedArity = 0;
G__3776.cljs$lang$applyTo = (function (arglist__3778){
var args = cljs.core.seq(arglist__3778);
return G__3776__delegate(args);
});
G__3776.cljs$core$IFn$_invoke$arity$variadic = G__3776__delegate;
return G__3776;
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
