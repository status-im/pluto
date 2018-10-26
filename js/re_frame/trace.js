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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__5295){
var map__5296 = p__5295;
var map__5296__$1 = ((((!((map__5296 == null)))?(((((map__5296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5296):map__5296);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5296__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5296__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5296__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5296__$1,cljs.core.cst$kw$child_DASH_of);
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
var seq__5298_5312 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__5299_5313 = null;
var count__5300_5314 = (0);
var i__5301_5315 = (0);
while(true){
if((i__5301_5315 < count__5300_5314)){
var vec__5302_5316 = chunk__5299_5313.cljs$core$IIndexed$_nth$arity$2(null,i__5301_5315);
var k_5317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5302_5316,(0),null);
var cb_5318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5302_5316,(1),null);
try{var G__5306_5319 = cljs.core.deref(re_frame.trace.traces);
(cb_5318.cljs$core$IFn$_invoke$arity$1 ? cb_5318.cljs$core$IFn$_invoke$arity$1(G__5306_5319) : cb_5318.call(null,G__5306_5319));
}catch (e5305){var e_5320 = e5305;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_5317,"while storing",cljs.core.deref(re_frame.trace.traces),e_5320], 0));
}

var G__5321 = seq__5298_5312;
var G__5322 = chunk__5299_5313;
var G__5323 = count__5300_5314;
var G__5324 = (i__5301_5315 + (1));
seq__5298_5312 = G__5321;
chunk__5299_5313 = G__5322;
count__5300_5314 = G__5323;
i__5301_5315 = G__5324;
continue;
} else {
var temp__5457__auto___5325 = cljs.core.seq(seq__5298_5312);
if(temp__5457__auto___5325){
var seq__5298_5326__$1 = temp__5457__auto___5325;
if(cljs.core.chunked_seq_QMARK_(seq__5298_5326__$1)){
var c__4351__auto___5327 = cljs.core.chunk_first(seq__5298_5326__$1);
var G__5328 = cljs.core.chunk_rest(seq__5298_5326__$1);
var G__5329 = c__4351__auto___5327;
var G__5330 = cljs.core.count(c__4351__auto___5327);
var G__5331 = (0);
seq__5298_5312 = G__5328;
chunk__5299_5313 = G__5329;
count__5300_5314 = G__5330;
i__5301_5315 = G__5331;
continue;
} else {
var vec__5307_5332 = cljs.core.first(seq__5298_5326__$1);
var k_5333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5307_5332,(0),null);
var cb_5334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5307_5332,(1),null);
try{var G__5311_5335 = cljs.core.deref(re_frame.trace.traces);
(cb_5334.cljs$core$IFn$_invoke$arity$1 ? cb_5334.cljs$core$IFn$_invoke$arity$1(G__5311_5335) : cb_5334.call(null,G__5311_5335));
}catch (e5310){var e_5336 = e5310;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_5333,"while storing",cljs.core.deref(re_frame.trace.traces),e_5336], 0));
}

var G__5337 = cljs.core.next(seq__5298_5326__$1);
var G__5338 = null;
var G__5339 = (0);
var G__5340 = (0);
seq__5298_5312 = G__5337;
chunk__5299_5313 = G__5338;
count__5300_5314 = G__5339;
i__5301_5315 = G__5340;
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
