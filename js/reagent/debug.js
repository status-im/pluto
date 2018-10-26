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
var G__4271__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__4271 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4272__i = 0, G__4272__a = new Array(arguments.length -  0);
while (G__4272__i < G__4272__a.length) {G__4272__a[G__4272__i] = arguments[G__4272__i + 0]; ++G__4272__i;}
  args = new cljs.core.IndexedSeq(G__4272__a,0,null);
} 
return G__4271__delegate.call(this,args);};
G__4271.cljs$lang$maxFixedArity = 0;
G__4271.cljs$lang$applyTo = (function (arglist__4273){
var args = cljs.core.seq(arglist__4273);
return G__4271__delegate(args);
});
G__4271.cljs$core$IFn$_invoke$arity$variadic = G__4271__delegate;
return G__4271;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__4274__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__4274 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4275__i = 0, G__4275__a = new Array(arguments.length -  0);
while (G__4275__i < G__4275__a.length) {G__4275__a[G__4275__i] = arguments[G__4275__i + 0]; ++G__4275__i;}
  args = new cljs.core.IndexedSeq(G__4275__a,0,null);
} 
return G__4274__delegate.call(this,args);};
G__4274.cljs$lang$maxFixedArity = 0;
G__4274.cljs$lang$applyTo = (function (arglist__4276){
var args = cljs.core.seq(arglist__4276);
return G__4274__delegate(args);
});
G__4274.cljs$core$IFn$_invoke$arity$variadic = G__4274__delegate;
return G__4274;
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
