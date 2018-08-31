// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.reference');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pluto.reader.errors');
/**
 * Return true if argument is a reference
 */
pluto.reader.reference.reference_QMARK_ = (function pluto$reader$reference$reference_QMARK_(o){
return ((cljs.core.list_QMARK_(o)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.first(o))));
});
/**
 * Return the symbol pointed by the reference
 * 
 * ```clojure
 * (= 'some.ref (reference->name '@views/some.ref))
 * ```
 */
pluto.reader.reference.reference__GT_symbol = (function pluto$reader$reference$reference__GT_symbol(o){
if(cljs.core.truth_(pluto.reader.reference.reference_QMARK_(o))){
return cljs.core.second(o);
} else {
return null;
}
});
pluto.reader.reference.ns__GT_type = new cljs.core.PersistentArrayMap(null, 3, ["views",cljs.core.cst$kw$view,"queries",cljs.core.cst$kw$query,"events",cljs.core.cst$kw$event], null);
/**
 * Return the type of a reference
 * 
 * ```clojure
 * (= :view (reference->type '@views/some.ref))
 * ```
 */
pluto.reader.reference.reference__GT_type = (function pluto$reader$reference$reference__GT_type(o){
if(cljs.core.truth_(pluto.reader.reference.reference_QMARK_(o))){
var temp__5457__auto__ = cljs.core.namespace(pluto.reader.reference.reference__GT_symbol(o));
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pluto.reader.reference.ns__GT_type,ns);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Resolve a reference defined by a hook
 * 
 * ```clojure
 * (= {:data "view"} (resolve {'views/id "view"} {:name :view :type :view} {:view '@views/id}))
 * ```
 */
pluto.reader.reference.resolve = (function pluto$reader$reference$resolve(m,p__2089,hook){
var map__2090 = p__2089;
var map__2090__$1 = ((((!((map__2090 == null)))?(((((map__2090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2090):map__2090);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2090__$1,cljs.core.cst$kw$name);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2090__$1,cljs.core.cst$kw$type);
var optional_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2090__$1,cljs.core.cst$kw$optional_QMARK_);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hook,name);
if(cljs.core.truth_(ref)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,pluto.reader.reference.reference__GT_type(ref))){
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pluto.reader.reference.reference__GT_symbol(ref));
if(cljs.core.truth_(temp__5455__auto__)){
var o = temp__5455__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,o], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_missing_DASH_property_DASH_value,name)], null)], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_property_DASH_type,type)], null)], null);
}
} else {
if(cljs.core.truth_(optional_QMARK_)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_missing_DASH_property_DASH_name,type)], null)], null);
}
}
});
