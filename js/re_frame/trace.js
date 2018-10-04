// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__5300){
var map__5301 = p__5300;
var map__5301__$1 = ((((!((map__5301 == null)))?(((((map__5301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5301):map__5301);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5301__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5301__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5301__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5301__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__3949__auto__ = child_of;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
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
var seq__5303_5317 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__5304_5318 = null;
var count__5305_5319 = (0);
var i__5306_5320 = (0);
while(true){
if((i__5306_5320 < count__5305_5319)){
var vec__5307_5321 = chunk__5304_5318.cljs$core$IIndexed$_nth$arity$2(null,i__5306_5320);
var k_5322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5307_5321,(0),null);
var cb_5323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5307_5321,(1),null);
try{var G__5311_5324 = cljs.core.deref(re_frame.trace.traces);
(cb_5323.cljs$core$IFn$_invoke$arity$1 ? cb_5323.cljs$core$IFn$_invoke$arity$1(G__5311_5324) : cb_5323.call(null,G__5311_5324));
}catch (e5310){var e_5325 = e5310;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_5322,"while storing",cljs.core.deref(re_frame.trace.traces),e_5325], 0));
}

var G__5326 = seq__5303_5317;
var G__5327 = chunk__5304_5318;
var G__5328 = count__5305_5319;
var G__5329 = (i__5306_5320 + (1));
seq__5303_5317 = G__5326;
chunk__5304_5318 = G__5327;
count__5305_5319 = G__5328;
i__5306_5320 = G__5329;
continue;
} else {
var temp__5457__auto___5330 = cljs.core.seq(seq__5303_5317);
if(temp__5457__auto___5330){
var seq__5303_5331__$1 = temp__5457__auto___5330;
if(cljs.core.chunked_seq_QMARK_(seq__5303_5331__$1)){
var c__4351__auto___5332 = cljs.core.chunk_first(seq__5303_5331__$1);
var G__5333 = cljs.core.chunk_rest(seq__5303_5331__$1);
var G__5334 = c__4351__auto___5332;
var G__5335 = cljs.core.count(c__4351__auto___5332);
var G__5336 = (0);
seq__5303_5317 = G__5333;
chunk__5304_5318 = G__5334;
count__5305_5319 = G__5335;
i__5306_5320 = G__5336;
continue;
} else {
var vec__5312_5337 = cljs.core.first(seq__5303_5331__$1);
var k_5338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5312_5337,(0),null);
var cb_5339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5312_5337,(1),null);
try{var G__5316_5340 = cljs.core.deref(re_frame.trace.traces);
(cb_5339.cljs$core$IFn$_invoke$arity$1 ? cb_5339.cljs$core$IFn$_invoke$arity$1(G__5316_5340) : cb_5339.call(null,G__5316_5340));
}catch (e5315){var e_5341 = e5315;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_5338,"while storing",cljs.core.deref(re_frame.trace.traces),e_5341], 0));
}

var G__5342 = cljs.core.next(seq__5303_5331__$1);
var G__5343 = null;
var G__5344 = (0);
var G__5345 = (0);
seq__5303_5317 = G__5342;
chunk__5304_5318 = G__5343;
count__5305_5319 = G__5344;
i__5306_5320 = G__5345;
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
