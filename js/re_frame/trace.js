// Compiled by ClojureScript 1.10.516 {:static-fns true, :optimize-constants true}
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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__6061){
var map__6062 = p__6061;
var map__6062__$1 = (((((!((map__6062 == null))))?(((((map__6062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6062):map__6062);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6062__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6062__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6062__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6062__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
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
var seq__6064_6088 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__6065_6089 = null;
var count__6066_6090 = (0);
var i__6067_6091 = (0);
while(true){
if((i__6067_6091 < count__6066_6090)){
var vec__6078_6092 = chunk__6065_6089.cljs$core$IIndexed$_nth$arity$2(null,i__6067_6091);
var k_6093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6078_6092,(0),null);
var cb_6094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6078_6092,(1),null);
try{var G__6082_6095 = cljs.core.deref(re_frame.trace.traces);
(cb_6094.cljs$core$IFn$_invoke$arity$1 ? cb_6094.cljs$core$IFn$_invoke$arity$1(G__6082_6095) : cb_6094.call(null,G__6082_6095));
}catch (e6081){var e_6096 = e6081;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_6093,"while storing",cljs.core.deref(re_frame.trace.traces),e_6096], 0));
}

var G__6097 = seq__6064_6088;
var G__6098 = chunk__6065_6089;
var G__6099 = count__6066_6090;
var G__6100 = (i__6067_6091 + (1));
seq__6064_6088 = G__6097;
chunk__6065_6089 = G__6098;
count__6066_6090 = G__6099;
i__6067_6091 = G__6100;
continue;
} else {
var temp__5720__auto___6101 = cljs.core.seq(seq__6064_6088);
if(temp__5720__auto___6101){
var seq__6064_6102__$1 = temp__5720__auto___6101;
if(cljs.core.chunked_seq_QMARK_(seq__6064_6102__$1)){
var c__4550__auto___6103 = cljs.core.chunk_first(seq__6064_6102__$1);
var G__6104 = cljs.core.chunk_rest(seq__6064_6102__$1);
var G__6105 = c__4550__auto___6103;
var G__6106 = cljs.core.count(c__4550__auto___6103);
var G__6107 = (0);
seq__6064_6088 = G__6104;
chunk__6065_6089 = G__6105;
count__6066_6090 = G__6106;
i__6067_6091 = G__6107;
continue;
} else {
var vec__6083_6108 = cljs.core.first(seq__6064_6102__$1);
var k_6109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6083_6108,(0),null);
var cb_6110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6083_6108,(1),null);
try{var G__6087_6111 = cljs.core.deref(re_frame.trace.traces);
(cb_6110.cljs$core$IFn$_invoke$arity$1 ? cb_6110.cljs$core$IFn$_invoke$arity$1(G__6087_6111) : cb_6110.call(null,G__6087_6111));
}catch (e6086){var e_6112 = e6086;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_6109,"while storing",cljs.core.deref(re_frame.trace.traces),e_6112], 0));
}

var G__6113 = cljs.core.next(seq__6064_6102__$1);
var G__6114 = null;
var G__6115 = (0);
var G__6116 = (0);
seq__6064_6088 = G__6113;
chunk__6065_6089 = G__6114;
count__6066_6090 = G__6115;
i__6067_6091 = G__6116;
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
