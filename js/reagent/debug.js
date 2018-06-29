// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true, :target :nodejs}
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
var G__646__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__646 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__647__i = 0, G__647__a = new Array(arguments.length -  0);
while (G__647__i < G__647__a.length) {G__647__a[G__647__i] = arguments[G__647__i + 0]; ++G__647__i;}
  args = new cljs.core.IndexedSeq(G__647__a,0,null);
} 
return G__646__delegate.call(this,args);};
G__646.cljs$lang$maxFixedArity = 0;
G__646.cljs$lang$applyTo = (function (arglist__648){
var args = cljs.core.seq(arglist__648);
return G__646__delegate(args);
});
G__646.cljs$core$IFn$_invoke$arity$variadic = G__646__delegate;
return G__646;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__649__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__650__i = 0, G__650__a = new Array(arguments.length -  0);
while (G__650__i < G__650__a.length) {G__650__a[G__650__i] = arguments[G__650__i + 0]; ++G__650__i;}
  args = new cljs.core.IndexedSeq(G__650__a,0,null);
} 
return G__649__delegate.call(this,args);};
G__649.cljs$lang$maxFixedArity = 0;
G__649.cljs$lang$applyTo = (function (arglist__651){
var args = cljs.core.seq(arglist__651);
return G__649__delegate(args);
});
G__649.cljs$core$IFn$_invoke$arity$variadic = G__649__delegate;
return G__649;
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
