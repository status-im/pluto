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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__4474){
var map__4475 = p__4474;
var map__4475__$1 = (((((!((map__4475 == null))))?(((((map__4475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4475):map__4475);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4475__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4475__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4475__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4475__$1,cljs.core.cst$kw$child_DASH_of);
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
var seq__4477_4491 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__4478_4492 = null;
var count__4479_4493 = (0);
var i__4480_4494 = (0);
while(true){
if((i__4480_4494 < count__4479_4493)){
var vec__4481_4495 = chunk__4478_4492.cljs$core$IIndexed$_nth$arity$2(null,i__4480_4494);
var k_4496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4481_4495,(0),null);
var cb_4497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4481_4495,(1),null);
try{var G__4485_4498 = cljs.core.deref(re_frame.trace.traces);
(cb_4497.cljs$core$IFn$_invoke$arity$1 ? cb_4497.cljs$core$IFn$_invoke$arity$1(G__4485_4498) : cb_4497.call(null,G__4485_4498));
}catch (e4484){var e_4499 = e4484;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_4496,"while storing",cljs.core.deref(re_frame.trace.traces),e_4499], 0));
}

var G__4500 = seq__4477_4491;
var G__4501 = chunk__4478_4492;
var G__4502 = count__4479_4493;
var G__4503 = (i__4480_4494 + (1));
seq__4477_4491 = G__4500;
chunk__4478_4492 = G__4501;
count__4479_4493 = G__4502;
i__4480_4494 = G__4503;
continue;
} else {
var temp__5457__auto___4504 = cljs.core.seq(seq__4477_4491);
if(temp__5457__auto___4504){
var seq__4477_4505__$1 = temp__5457__auto___4504;
if(cljs.core.chunked_seq_QMARK_(seq__4477_4505__$1)){
var c__4461__auto___4506 = cljs.core.chunk_first(seq__4477_4505__$1);
var G__4507 = cljs.core.chunk_rest(seq__4477_4505__$1);
var G__4508 = c__4461__auto___4506;
var G__4509 = cljs.core.count(c__4461__auto___4506);
var G__4510 = (0);
seq__4477_4491 = G__4507;
chunk__4478_4492 = G__4508;
count__4479_4493 = G__4509;
i__4480_4494 = G__4510;
continue;
} else {
var vec__4486_4511 = cljs.core.first(seq__4477_4505__$1);
var k_4512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4486_4511,(0),null);
var cb_4513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4486_4511,(1),null);
try{var G__4490_4514 = cljs.core.deref(re_frame.trace.traces);
(cb_4513.cljs$core$IFn$_invoke$arity$1 ? cb_4513.cljs$core$IFn$_invoke$arity$1(G__4490_4514) : cb_4513.call(null,G__4490_4514));
}catch (e4489){var e_4515 = e4489;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_4512,"while storing",cljs.core.deref(re_frame.trace.traces),e_4515], 0));
}

var G__4516 = cljs.core.next(seq__4477_4505__$1);
var G__4517 = null;
var G__4518 = (0);
var G__4519 = (0);
seq__4477_4491 = G__4516;
chunk__4478_4492 = G__4517;
count__4479_4493 = G__4518;
i__4480_4494 = G__4519;
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
