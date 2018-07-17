// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__4461){
var map__4462 = p__4461;
var map__4462__$1 = ((((!((map__4462 == null)))?(((((map__4462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4462):map__4462);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4462__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4462__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4462__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4462__$1,cljs.core.cst$kw$child_DASH_of);
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
var seq__4464_4478 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__4465_4479 = null;
var count__4466_4480 = (0);
var i__4467_4481 = (0);
while(true){
if((i__4467_4481 < count__4466_4480)){
var vec__4468_4482 = chunk__4465_4479.cljs$core$IIndexed$_nth$arity$2(null,i__4467_4481);
var k_4483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4468_4482,(0),null);
var cb_4484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4468_4482,(1),null);
try{var G__4472_4485 = cljs.core.deref(re_frame.trace.traces);
(cb_4484.cljs$core$IFn$_invoke$arity$1 ? cb_4484.cljs$core$IFn$_invoke$arity$1(G__4472_4485) : cb_4484.call(null,G__4472_4485));
}catch (e4471){var e_4486 = e4471;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_4483,"while storing",cljs.core.deref(re_frame.trace.traces),e_4486], 0));
}

var G__4487 = seq__4464_4478;
var G__4488 = chunk__4465_4479;
var G__4489 = count__4466_4480;
var G__4490 = (i__4467_4481 + (1));
seq__4464_4478 = G__4487;
chunk__4465_4479 = G__4488;
count__4466_4480 = G__4489;
i__4467_4481 = G__4490;
continue;
} else {
var temp__5457__auto___4491 = cljs.core.seq(seq__4464_4478);
if(temp__5457__auto___4491){
var seq__4464_4492__$1 = temp__5457__auto___4491;
if(cljs.core.chunked_seq_QMARK_(seq__4464_4492__$1)){
var c__4338__auto___4493 = cljs.core.chunk_first(seq__4464_4492__$1);
var G__4494 = cljs.core.chunk_rest(seq__4464_4492__$1);
var G__4495 = c__4338__auto___4493;
var G__4496 = cljs.core.count(c__4338__auto___4493);
var G__4497 = (0);
seq__4464_4478 = G__4494;
chunk__4465_4479 = G__4495;
count__4466_4480 = G__4496;
i__4467_4481 = G__4497;
continue;
} else {
var vec__4473_4498 = cljs.core.first(seq__4464_4492__$1);
var k_4499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4473_4498,(0),null);
var cb_4500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4473_4498,(1),null);
try{var G__4477_4501 = cljs.core.deref(re_frame.trace.traces);
(cb_4500.cljs$core$IFn$_invoke$arity$1 ? cb_4500.cljs$core$IFn$_invoke$arity$1(G__4477_4501) : cb_4500.call(null,G__4477_4501));
}catch (e4476){var e_4502 = e4476;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_4499,"while storing",cljs.core.deref(re_frame.trace.traces),e_4502], 0));
}

var G__4503 = cljs.core.next(seq__4464_4492__$1);
var G__4504 = null;
var G__4505 = (0);
var G__4506 = (0);
seq__4464_4478 = G__4503;
chunk__4465_4479 = G__4504;
count__4466_4480 = G__4505;
i__4467_4481 = G__4506;
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
