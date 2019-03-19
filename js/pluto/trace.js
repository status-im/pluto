// Compiled by ClojureScript 1.10.516 {:static-fns true, :optimize-constants true}
goog.provide('pluto.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
pluto.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
pluto.trace.next_id = (function pluto$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pluto.trace.id,cljs.core.inc);
});
/**
 * Create a trace map. To be used with `trace`
 */
pluto.trace.create_trace = (function pluto$trace$create_trace(c,t,v){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,pluto.trace.next_id(),cljs.core.cst$kw$category,c,cljs.core.cst$kw$type,t,cljs.core.cst$kw$data,v], null);
});
/**
 * Trace provided object using the ctx `tracer`
 */
pluto.trace.trace = (function pluto$trace$trace(p__980,m){
var map__981 = p__980;
var map__981__$1 = (((((!((map__981 == null))))?(((((map__981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__981):map__981);
var tracer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__981__$1,cljs.core.cst$kw$tracer);
if(cljs.core.fn_QMARK_(tracer)){
return (tracer.cljs$core$IFn$_invoke$arity$1 ? tracer.cljs$core$IFn$_invoke$arity$1(m) : tracer.call(null,m));
} else {
return null;
}
});
