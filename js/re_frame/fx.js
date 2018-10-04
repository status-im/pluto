// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_5445 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__5446 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__5447 = null;
var count__5448 = (0);
var i__5449 = (0);
while(true){
if((i__5449 < count__5448)){
var vec__5450 = chunk__5447.cljs$core$IIndexed$_nth$arity$2(null,i__5449);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5450,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5450,(1),null);
var temp__5455__auto___5466 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___5466)){
var effect_fn_5467 = temp__5455__auto___5466;
(effect_fn_5467.cljs$core$IFn$_invoke$arity$1 ? effect_fn_5467.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_5467.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__5468 = seq__5446;
var G__5469 = chunk__5447;
var G__5470 = count__5448;
var G__5471 = (i__5449 + (1));
seq__5446 = G__5468;
chunk__5447 = G__5469;
count__5448 = G__5470;
i__5449 = G__5471;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5446);
if(temp__5457__auto__){
var seq__5446__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5446__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__5446__$1);
var G__5472 = cljs.core.chunk_rest(seq__5446__$1);
var G__5473 = c__4351__auto__;
var G__5474 = cljs.core.count(c__4351__auto__);
var G__5475 = (0);
seq__5446 = G__5472;
chunk__5447 = G__5473;
count__5448 = G__5474;
i__5449 = G__5475;
continue;
} else {
var vec__5453 = cljs.core.first(seq__5446__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5453,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5453,(1),null);
var temp__5455__auto___5476 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___5476)){
var effect_fn_5477 = temp__5455__auto___5476;
(effect_fn_5477.cljs$core$IFn$_invoke$arity$1 ? effect_fn_5477.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_5477.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__5478 = cljs.core.next(seq__5446__$1);
var G__5479 = null;
var G__5480 = (0);
var G__5481 = (0);
seq__5446 = G__5478;
chunk__5447 = G__5479;
count__5448 = G__5480;
i__5449 = G__5481;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__5278__auto___5482 = re_frame.interop.now();
var duration__5279__auto___5483 = (end__5278__auto___5482 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__5279__auto___5483,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__5278__auto___5482);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_5445;
}} else {
var seq__5456 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__5457 = null;
var count__5458 = (0);
var i__5459 = (0);
while(true){
if((i__5459 < count__5458)){
var vec__5460 = chunk__5457.cljs$core$IIndexed$_nth$arity$2(null,i__5459);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5460,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5460,(1),null);
var temp__5455__auto___5484 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___5484)){
var effect_fn_5485 = temp__5455__auto___5484;
(effect_fn_5485.cljs$core$IFn$_invoke$arity$1 ? effect_fn_5485.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_5485.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__5486 = seq__5456;
var G__5487 = chunk__5457;
var G__5488 = count__5458;
var G__5489 = (i__5459 + (1));
seq__5456 = G__5486;
chunk__5457 = G__5487;
count__5458 = G__5488;
i__5459 = G__5489;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5456);
if(temp__5457__auto__){
var seq__5456__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5456__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__5456__$1);
var G__5490 = cljs.core.chunk_rest(seq__5456__$1);
var G__5491 = c__4351__auto__;
var G__5492 = cljs.core.count(c__4351__auto__);
var G__5493 = (0);
seq__5456 = G__5490;
chunk__5457 = G__5491;
count__5458 = G__5492;
i__5459 = G__5493;
continue;
} else {
var vec__5463 = cljs.core.first(seq__5456__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5463,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5463,(1),null);
var temp__5455__auto___5494 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___5494)){
var effect_fn_5495 = temp__5455__auto___5494;
(effect_fn_5495.cljs$core$IFn$_invoke$arity$1 ? effect_fn_5495.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_5495.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__5496 = cljs.core.next(seq__5456__$1);
var G__5497 = null;
var G__5498 = (0);
var G__5499 = (0);
seq__5456 = G__5496;
chunk__5457 = G__5497;
count__5458 = G__5498;
i__5459 = G__5499;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__5500 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__5501 = null;
var count__5502 = (0);
var i__5503 = (0);
while(true){
if((i__5503 < count__5502)){
var map__5504 = chunk__5501.cljs$core$IIndexed$_nth$arity$2(null,i__5503);
var map__5504__$1 = ((((!((map__5504 == null)))?(((((map__5504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5504):map__5504);
var effect = map__5504__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5504__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5504__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__5500,chunk__5501,count__5502,i__5503,map__5504,map__5504__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__5500,chunk__5501,count__5502,i__5503,map__5504,map__5504__$1,effect,ms,dispatch))
,ms);
}


var G__5508 = seq__5500;
var G__5509 = chunk__5501;
var G__5510 = count__5502;
var G__5511 = (i__5503 + (1));
seq__5500 = G__5508;
chunk__5501 = G__5509;
count__5502 = G__5510;
i__5503 = G__5511;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5500);
if(temp__5457__auto__){
var seq__5500__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5500__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__5500__$1);
var G__5512 = cljs.core.chunk_rest(seq__5500__$1);
var G__5513 = c__4351__auto__;
var G__5514 = cljs.core.count(c__4351__auto__);
var G__5515 = (0);
seq__5500 = G__5512;
chunk__5501 = G__5513;
count__5502 = G__5514;
i__5503 = G__5515;
continue;
} else {
var map__5506 = cljs.core.first(seq__5500__$1);
var map__5506__$1 = ((((!((map__5506 == null)))?(((((map__5506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5506):map__5506);
var effect = map__5506__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5506__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5506__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__5500,chunk__5501,count__5502,i__5503,map__5506,map__5506__$1,effect,ms,dispatch,seq__5500__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__5500,chunk__5501,count__5502,i__5503,map__5506,map__5506__$1,effect,ms,dispatch,seq__5500__$1,temp__5457__auto__))
,ms);
}


var G__5516 = cljs.core.next(seq__5500__$1);
var G__5517 = null;
var G__5518 = (0);
var G__5519 = (0);
seq__5500 = G__5516;
chunk__5501 = G__5517;
count__5502 = G__5518;
i__5503 = G__5519;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__5520 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__5521 = null;
var count__5522 = (0);
var i__5523 = (0);
while(true){
if((i__5523 < count__5522)){
var event = chunk__5521.cljs$core$IIndexed$_nth$arity$2(null,i__5523);
re_frame.router.dispatch(event);


var G__5524 = seq__5520;
var G__5525 = chunk__5521;
var G__5526 = count__5522;
var G__5527 = (i__5523 + (1));
seq__5520 = G__5524;
chunk__5521 = G__5525;
count__5522 = G__5526;
i__5523 = G__5527;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5520);
if(temp__5457__auto__){
var seq__5520__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5520__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__5520__$1);
var G__5528 = cljs.core.chunk_rest(seq__5520__$1);
var G__5529 = c__4351__auto__;
var G__5530 = cljs.core.count(c__4351__auto__);
var G__5531 = (0);
seq__5520 = G__5528;
chunk__5521 = G__5529;
count__5522 = G__5530;
i__5523 = G__5531;
continue;
} else {
var event = cljs.core.first(seq__5520__$1);
re_frame.router.dispatch(event);


var G__5532 = cljs.core.next(seq__5520__$1);
var G__5533 = null;
var G__5534 = (0);
var G__5535 = (0);
seq__5520 = G__5532;
chunk__5521 = G__5533;
count__5522 = G__5534;
i__5523 = G__5535;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__5536 = cljs.core.seq(value);
var chunk__5537 = null;
var count__5538 = (0);
var i__5539 = (0);
while(true){
if((i__5539 < count__5538)){
var event = chunk__5537.cljs$core$IIndexed$_nth$arity$2(null,i__5539);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__5540 = seq__5536;
var G__5541 = chunk__5537;
var G__5542 = count__5538;
var G__5543 = (i__5539 + (1));
seq__5536 = G__5540;
chunk__5537 = G__5541;
count__5538 = G__5542;
i__5539 = G__5543;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5536);
if(temp__5457__auto__){
var seq__5536__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5536__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__5536__$1);
var G__5544 = cljs.core.chunk_rest(seq__5536__$1);
var G__5545 = c__4351__auto__;
var G__5546 = cljs.core.count(c__4351__auto__);
var G__5547 = (0);
seq__5536 = G__5544;
chunk__5537 = G__5545;
count__5538 = G__5546;
i__5539 = G__5547;
continue;
} else {
var event = cljs.core.first(seq__5536__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__5548 = cljs.core.next(seq__5536__$1);
var G__5549 = null;
var G__5550 = (0);
var G__5551 = (0);
seq__5536 = G__5548;
chunk__5537 = G__5549;
count__5538 = G__5550;
i__5539 = G__5551;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if(!((cljs.core.deref(re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
