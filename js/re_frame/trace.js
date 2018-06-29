// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__1666){
var map__1667 = p__1666;
var map__1667__$1 = ((((!((map__1667 == null)))?(((((map__1667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1667):map__1667);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1667__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1667__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1667__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1667__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__3936__auto__ = child_of;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__1669_1683 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__1670_1684 = null;
var count__1671_1685 = (0);
var i__1672_1686 = (0);
while(true){
if((i__1672_1686 < count__1671_1685)){
var vec__1673_1687 = chunk__1670_1684.cljs$core$IIndexed$_nth$arity$2(null,i__1672_1686);
var k_1688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1673_1687,(0),null);
var cb_1689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1673_1687,(1),null);
try{var G__1677_1690 = cljs.core.deref(re_frame.trace.traces);
(cb_1689.cljs$core$IFn$_invoke$arity$1 ? cb_1689.cljs$core$IFn$_invoke$arity$1(G__1677_1690) : cb_1689.call(null,G__1677_1690));
}catch (e1676){var e_1691 = e1676;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_1688,"while storing",cljs.core.deref(re_frame.trace.traces),e_1691], 0));
}

var G__1692 = seq__1669_1683;
var G__1693 = chunk__1670_1684;
var G__1694 = count__1671_1685;
var G__1695 = (i__1672_1686 + (1));
seq__1669_1683 = G__1692;
chunk__1670_1684 = G__1693;
count__1671_1685 = G__1694;
i__1672_1686 = G__1695;
continue;
} else {
var temp__5457__auto___1696 = cljs.core.seq(seq__1669_1683);
if(temp__5457__auto___1696){
var seq__1669_1697__$1 = temp__5457__auto___1696;
if(cljs.core.chunked_seq_QMARK_(seq__1669_1697__$1)){
var c__4338__auto___1698 = cljs.core.chunk_first(seq__1669_1697__$1);
var G__1699 = cljs.core.chunk_rest(seq__1669_1697__$1);
var G__1700 = c__4338__auto___1698;
var G__1701 = cljs.core.count(c__4338__auto___1698);
var G__1702 = (0);
seq__1669_1683 = G__1699;
chunk__1670_1684 = G__1700;
count__1671_1685 = G__1701;
i__1672_1686 = G__1702;
continue;
} else {
var vec__1678_1703 = cljs.core.first(seq__1669_1697__$1);
var k_1704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1678_1703,(0),null);
var cb_1705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1678_1703,(1),null);
try{var G__1682_1706 = cljs.core.deref(re_frame.trace.traces);
(cb_1705.cljs$core$IFn$_invoke$arity$1 ? cb_1705.cljs$core$IFn$_invoke$arity$1(G__1682_1706) : cb_1705.call(null,G__1682_1706));
}catch (e1681){var e_1707 = e1681;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_1704,"while storing",cljs.core.deref(re_frame.trace.traces),e_1707], 0));
}

var G__1708 = cljs.core.next(seq__1669_1697__$1);
var G__1709 = null;
var G__1710 = (0);
var G__1711 = (0);
seq__1669_1683 = G__1708;
chunk__1670_1684 = G__1709;
count__1671_1685 = G__1710;
i__1672_1686 = G__1711;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (10)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
