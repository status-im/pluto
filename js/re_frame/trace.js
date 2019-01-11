// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
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
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__7077){
var map__7078 = p__7077;
var map__7078__$1 = (((((!((map__7078 == null))))?(((((map__7078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7078):map__7078);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7078__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7078__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7078__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7078__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4047__auto__ = child_of;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
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
var seq__7080_7094 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__7081_7095 = null;
var count__7082_7096 = (0);
var i__7083_7097 = (0);
while(true){
if((i__7083_7097 < count__7082_7096)){
var vec__7084_7098 = chunk__7081_7095.cljs$core$IIndexed$_nth$arity$2(null,i__7083_7097);
var k_7099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7084_7098,(0),null);
var cb_7100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7084_7098,(1),null);
try{var G__7088_7101 = cljs.core.deref(re_frame.trace.traces);
(cb_7100.cljs$core$IFn$_invoke$arity$1 ? cb_7100.cljs$core$IFn$_invoke$arity$1(G__7088_7101) : cb_7100.call(null,G__7088_7101));
}catch (e7087){var e_7102 = e7087;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_7099,"while storing",cljs.core.deref(re_frame.trace.traces),e_7102], 0));
}

var G__7103 = seq__7080_7094;
var G__7104 = chunk__7081_7095;
var G__7105 = count__7082_7096;
var G__7106 = (i__7083_7097 + (1));
seq__7080_7094 = G__7103;
chunk__7081_7095 = G__7104;
count__7082_7096 = G__7105;
i__7083_7097 = G__7106;
continue;
} else {
var temp__5720__auto___7107 = cljs.core.seq(seq__7080_7094);
if(temp__5720__auto___7107){
var seq__7080_7108__$1 = temp__5720__auto___7107;
if(cljs.core.chunked_seq_QMARK_(seq__7080_7108__$1)){
var c__4461__auto___7109 = cljs.core.chunk_first(seq__7080_7108__$1);
var G__7110 = cljs.core.chunk_rest(seq__7080_7108__$1);
var G__7111 = c__4461__auto___7109;
var G__7112 = cljs.core.count(c__4461__auto___7109);
var G__7113 = (0);
seq__7080_7094 = G__7110;
chunk__7081_7095 = G__7111;
count__7082_7096 = G__7112;
i__7083_7097 = G__7113;
continue;
} else {
var vec__7089_7114 = cljs.core.first(seq__7080_7108__$1);
var k_7115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7089_7114,(0),null);
var cb_7116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7089_7114,(1),null);
try{var G__7093_7117 = cljs.core.deref(re_frame.trace.traces);
(cb_7116.cljs$core$IFn$_invoke$arity$1 ? cb_7116.cljs$core$IFn$_invoke$arity$1(G__7093_7117) : cb_7116.call(null,G__7093_7117));
}catch (e7092){var e_7118 = e7092;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_7115,"while storing",cljs.core.deref(re_frame.trace.traces),e_7118], 0));
}

var G__7119 = cljs.core.next(seq__7080_7108__$1);
var G__7120 = null;
var G__7121 = (0);
var G__7122 = (0);
seq__7080_7094 = G__7119;
chunk__7081_7095 = G__7120;
count__7082_7096 = G__7121;
i__7083_7097 = G__7122;
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
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
