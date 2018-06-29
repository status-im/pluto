goog.provide('cljs.nodejs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_((function() { 
var G__1188__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__1188 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1189__i = 0, G__1189__a = new Array(arguments.length -  0);
while (G__1189__i < G__1189__a.length) {G__1189__a[G__1189__i] = arguments[G__1189__i + 0]; ++G__1189__i;}
  args = new cljs.core.IndexedSeq(G__1189__a,0,null);
} 
return G__1188__delegate.call(this,args);};
G__1188.cljs$lang$maxFixedArity = 0;
G__1188.cljs$lang$applyTo = (function (arglist__1190){
var args = cljs.core.seq(arglist__1190);
return G__1188__delegate(args);
});
G__1188.cljs$core$IFn$_invoke$arity$variadic = G__1188__delegate;
return G__1188;
})()
);

cljs.core.set_print_err_fn_BANG_((function() { 
var G__1191__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__1191 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1192__i = 0, G__1192__a = new Array(arguments.length -  0);
while (G__1192__i < G__1192__a.length) {G__1192__a[G__1192__i] = arguments[G__1192__i + 0]; ++G__1192__i;}
  args = new cljs.core.IndexedSeq(G__1192__a,0,null);
} 
return G__1191__delegate.call(this,args);};
G__1191.cljs$lang$maxFixedArity = 0;
G__1191.cljs$lang$applyTo = (function (arglist__1193){
var args = cljs.core.seq(arglist__1193);
return G__1191__delegate(args);
});
G__1191.cljs$core$IFn$_invoke$arity$variadic = G__1191__delegate;
return G__1191;
})()
);

return null;
});
