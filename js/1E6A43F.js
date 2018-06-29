goog.provide('cljs.nodejs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_((function() { 
var G__4061__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__4061 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4062__i = 0, G__4062__a = new Array(arguments.length -  0);
while (G__4062__i < G__4062__a.length) {G__4062__a[G__4062__i] = arguments[G__4062__i + 0]; ++G__4062__i;}
  args = new cljs.core.IndexedSeq(G__4062__a,0,null);
} 
return G__4061__delegate.call(this,args);};
G__4061.cljs$lang$maxFixedArity = 0;
G__4061.cljs$lang$applyTo = (function (arglist__4063){
var args = cljs.core.seq(arglist__4063);
return G__4061__delegate(args);
});
G__4061.cljs$core$IFn$_invoke$arity$variadic = G__4061__delegate;
return G__4061;
})()
);

cljs.core.set_print_err_fn_BANG_((function() { 
var G__4064__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__4064 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4065__i = 0, G__4065__a = new Array(arguments.length -  0);
while (G__4065__i < G__4065__a.length) {G__4065__a[G__4065__i] = arguments[G__4065__i + 0]; ++G__4065__i;}
  args = new cljs.core.IndexedSeq(G__4065__a,0,null);
} 
return G__4064__delegate.call(this,args);};
G__4064.cljs$lang$maxFixedArity = 0;
G__4064.cljs$lang$applyTo = (function (arglist__4066){
var args = cljs.core.seq(arglist__4066);
return G__4064__delegate(args);
});
G__4064.cljs$core$IFn$_invoke$arity$variadic = G__4064__delegate;
return G__4064;
})()
);

return null;
});
