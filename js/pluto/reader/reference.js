// Compiled by ClojureScript 1.10.516 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.reference');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pluto.reader.errors');
/**
 * Return true if argument is a reference
 */
pluto.reader.reference.reference_QMARK_ = (function pluto$reader$reference$reference_QMARK_(ref){
if(cljs.core.vector_QMARK_(ref)){
var vec__5338 = ref;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5338,(0),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5338,(1),null);
return (((name instanceof cljs.core.Symbol)) && (((2) >= cljs.core.count(ref))) && ((((arguments$ == null)) || (cljs.core.map_QMARK_(arguments$)) || ((arguments$ instanceof cljs.core.Symbol)))));
} else {
return null;
}
});
/**
 * Return the symbol pointed by the reference
 * 
 * ```clojure
 * (= 'some.ref (reference->symbol ['some.ref]))
 * ```
 */
pluto.reader.reference.reference__GT_symbol = (function pluto$reader$reference$reference__GT_symbol(o){
if(cljs.core.truth_(pluto.reader.reference.reference_QMARK_(o))){
return cljs.core.first(o);
} else {
return null;
}
});
pluto.reader.reference.type__GT_ns = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$view,"views",cljs.core.cst$kw$query,"queries",cljs.core.cst$kw$event,"events"], null);
pluto.reader.reference.type__GT_capacity = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$view,cljs.core.cst$kw$components,cljs.core.cst$kw$query,cljs.core.cst$kw$queries,cljs.core.cst$kw$event,cljs.core.cst$kw$events], null);
/**
 * Resolve a symbol first via the extension definition then via the host ctx.
 */
pluto.reader.reference.resolve_symbol = (function pluto$reader$reference$resolve_symbol(ctx,ext,type,ns,s){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.name(s)));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$view,cljs.core.cst$kw$components,cljs.core.cst$kw$query,cljs.core.cst$kw$queries,cljs.core.cst$kw$event,cljs.core.cst$kw$events], null),type),s,cljs.core.cst$kw$data], null));
}
});
/**
 * Resolve a reference to a primitive.
 * 
 * ```clojure
 * (= {:data "view"} (resolve {} {'views/id "view"} :view ['id]))
 * ```
 */
pluto.reader.reference.resolve = (function pluto$reader$reference$resolve(ctx,ext,type,ref){
var temp__5718__auto__ = pluto.reader.reference.reference__GT_symbol(ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
var temp__5718__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$view,"views",cljs.core.cst$kw$query,"queries",cljs.core.cst$kw$event,"events"], null),type);
if(cljs.core.truth_(temp__5718__auto____$1)){
var ns = temp__5718__auto____$1;
var temp__5718__auto____$2 = pluto.reader.reference.resolve_symbol(ctx,ext,type,ns,s);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o = temp__5718__auto____$2;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,o], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_reference,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,s,cljs.core.cst$kw$type,type], null))], null)], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_reference_DASH_type,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,type], null))], null)], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_reference,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$value,ref], null))], null)], null);
}
});
