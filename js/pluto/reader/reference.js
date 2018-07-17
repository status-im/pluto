// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.reference');
goog.require('cljs.core');
goog.require('cljs.core.constants');
pluto.reader.reference.reference_QMARK_ = (function pluto$reader$reference$reference_QMARK_(o){
return ((cljs.core.list_QMARK_(o)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.first(o))));
});
if((typeof pluto !== 'undefined') && (typeof pluto.reader !== 'undefined') && (typeof pluto.reader.reference !== 'undefined') && (typeof pluto.reader.reference.resolve !== 'undefined')){
} else {
/**
 * 
 */
pluto.reader.reference.resolve = (function (){var method_table__4401__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4402__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4403__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4404__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.reader.reference","resolve"),((function (method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__,hierarchy__4405__auto__){
return (function (m,p__1199){
var map__1200 = p__1199;
var map__1200__$1 = ((((!((map__1200 == null)))?(((((map__1200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1200):map__1200);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1200__$1,cljs.core.cst$kw$type);
return type;
});})(method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__,hierarchy__4405__auto__))
,cljs.core.cst$kw$default,hierarchy__4405__auto__,method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__));
})();
}
pluto.reader.reference.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$view,(function (m,p__1202){
var map__1203 = p__1202;
var map__1203__$1 = ((((!((map__1203 == null)))?(((((map__1203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1203):map__1203);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1203__$1,cljs.core.cst$kw$value);
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,value);
if(cljs.core.truth_(temp__5455__auto__)){
var view = temp__5455__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,view], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$unknown_DASH_view,cljs.core.cst$kw$value,value], null)], null)], null);
}
}));
pluto.reader.reference.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (m,p__1205){
var map__1206 = p__1205;
var map__1206__$1 = ((((!((map__1206 == null)))?(((((map__1206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1206):map__1206);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1206__$1,cljs.core.cst$kw$type);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1206__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$unknown_DASH_reference_DASH_type,cljs.core.cst$kw$value,value], null)], null)], null);
}));
