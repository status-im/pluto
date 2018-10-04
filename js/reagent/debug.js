// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
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
var G__4276__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__4276 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4277__i = 0, G__4277__a = new Array(arguments.length -  0);
while (G__4277__i < G__4277__a.length) {G__4277__a[G__4277__i] = arguments[G__4277__i + 0]; ++G__4277__i;}
  args = new cljs.core.IndexedSeq(G__4277__a,0,null);
} 
return G__4276__delegate.call(this,args);};
G__4276.cljs$lang$maxFixedArity = 0;
G__4276.cljs$lang$applyTo = (function (arglist__4278){
var args = cljs.core.seq(arglist__4278);
return G__4276__delegate(args);
});
G__4276.cljs$core$IFn$_invoke$arity$variadic = G__4276__delegate;
return G__4276;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__4279__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__4279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4280__i = 0, G__4280__a = new Array(arguments.length -  0);
while (G__4280__i < G__4280__a.length) {G__4280__a[G__4280__i] = arguments[G__4280__i + 0]; ++G__4280__i;}
  args = new cljs.core.IndexedSeq(G__4280__a,0,null);
} 
return G__4279__delegate.call(this,args);};
G__4279.cljs$lang$maxFixedArity = 0;
G__4279.cljs$lang$applyTo = (function (arglist__4281){
var args = cljs.core.seq(arglist__4281);
return G__4279__delegate(args);
});
G__4279.cljs$core$IFn$_invoke$arity$variadic = G__4279__delegate;
return G__4279;
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
