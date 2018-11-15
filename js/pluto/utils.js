// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('pluto.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
pluto.utils.ex_cause = (function pluto$utils$ex_cause(ex){
return cljs.core.ex_cause(ex);
});
pluto.utils.ex_message = (function pluto$utils$ex_message(ex){
return cljs.core.ex_message(ex);
});
pluto.utils.atom_QMARK_ = (function pluto$utils$atom_QMARK_(o){
return (o instanceof cljs.core.Atom);
});
pluto.utils.primitive_QMARK_ = (function pluto$utils$primitive_QMARK_(o){
return ((cljs.core.boolean_QMARK_(o)) || (cljs.core.int_QMARK_(o)) || (cljs.core.float_QMARK_(o)) || (typeof o === 'string'));
});
pluto.utils.interpolate = (function pluto$utils$interpolate(values,s){
return cljs.core.reduce_kv((function (p1__1182_SHARP_,p2__1183_SHARP_,p3__1184_SHARP_){
return clojure.string.replace(p1__1182_SHARP_,["${",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__1183_SHARP_)),"}"].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p3__1184_SHARP_));
}),s,values);
});
