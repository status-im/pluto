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
var _STAR_current_trace_STAR_5440 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__5441 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__5442 = null;
var count__5443 = (0);
var i__5444 = (0);
while(true){
if((i__5444 < count__5443)){
var vec__5445 = chunk__5442.cljs$core$IIndexed$_nth$arity$2(null,i__5444);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5445,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5445,(1),null);
var temp__5455__auto___5461 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___5461)){
var effect_fn_5462 = temp__5455__auto___5461;
(effect_fn_5462.cljs$core$IFn$_invoke$arity$1 ? effect_fn_5462.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_5462.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__5463 = seq__5441;
var G__5464 = chunk__5442;
var G__5465 = count__5443;
var G__5466 = (i__5444 + (1));
seq__5441 = G__5463;
chunk__5442 = G__5464;
count__5443 = G__5465;
i__5444 = G__5466;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5441);
if(temp__5457__auto__){
var seq__5441__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5441__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__5441__$1);
var G__5467 = cljs.core.chunk_rest(seq__5441__$1);
var G__5468 = c__4351__auto__;
var G__5469 = cljs.core.count(c__4351__auto__);
var G__5470 = (0);
seq__5441 = G__5467;
chunk__5442 = G__5468;
count__5443 = G__5469;
i__5444 = G__5470;
continue;
} else {
var vec__5448 = cljs.core.first(seq__5441__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5448,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5448,(1),null);
var temp__5455__auto___5471 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___5471)){
var effect_fn_5472 = temp__5455__auto___5471;
(effect_fn_5472.cljs$core$IFn$_invoke$arity$1 ? effect_fn_5472.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_5472.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__5473 = cljs.core.next(seq__5441__$1);
var G__5474 = null;
var G__5475 = (0);
var G__5476 = (0);
seq__5441 = G__5473;
chunk__5442 = G__5474;
count__5443 = G__5475;
i__5444 = G__5476;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__5273__auto___5477 = re_frame.interop.now();
var duration__5274__auto___5478 = (end__5273__auto___5477 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__5274__auto___5478,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__5273__auto___5477);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_5440;
}} else {
var seq__5451 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__5452 = null;
var count__5453 = (0);
var i__5454 = (0);
while(true){
if((i__5454 < count__5453)){
var vec__5455 = chunk__5452.cljs$core$IIndexed$_nth$arity$2(null,i__5454);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5455,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5455,(1),null);
var temp__5455__auto___5479 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___5479)){
var effect_fn_5480 = temp__5455__auto___5479;
(effect_fn_5480.cljs$core$IFn$_invoke$arity$1 ? effect_fn_5480.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_5480.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__5481 = seq__5451;
var G__5482 = chunk__5452;
var G__5483 = count__5453;
var G__5484 = (i__5454 + (1));
seq__5451 = G__5481;
chunk__5452 = G__5482;
count__5453 = G__5483;
i__5454 = G__5484;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5451);
if(temp__5457__auto__){
var seq__5451__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5451__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__5451__$1);
var G__5485 = cljs.core.chunk_rest(seq__5451__$1);
var G__5486 = c__4351__auto__;
var G__5487 = cljs.core.count(c__4351__auto__);
var G__5488 = (0);
seq__5451 = G__5485;
chunk__5452 = G__5486;
count__5453 = G__5487;
i__5454 = G__5488;
continue;
} else {
var vec__5458 = cljs.core.first(seq__5451__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5458,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5458,(1),null);
var temp__5455__auto___5489 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___5489)){
var effect_fn_5490 = temp__5455__auto___5489;
(effect_fn_5490.cljs$core$IFn$_invoke$arity$1 ? effect_fn_5490.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_5490.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__5491 = cljs.core.next(seq__5451__$1);
var G__5492 = null;
var G__5493 = (0);
var G__5494 = (0);
seq__5451 = G__5491;
chunk__5452 = G__5492;
count__5453 = G__5493;
i__5454 = G__5494;
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
var seq__5495 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__5496 = null;
var count__5497 = (0);
var i__5498 = (0);
while(true){
if((i__5498 < count__5497)){
var map__5499 = chunk__5496.cljs$core$IIndexed$_nth$arity$2(null,i__5498);
var map__5499__$1 = ((((!((map__5499 == null)))?(((((map__5499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5499):map__5499);
var effect = map__5499__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5499__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5499__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__5495,chunk__5496,count__5497,i__5498,map__5499,map__5499__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__5495,chunk__5496,count__5497,i__5498,map__5499,map__5499__$1,effect,ms,dispatch))
,ms);
}


var G__5503 = seq__5495;
var G__5504 = chunk__5496;
var G__5505 = count__5497;
var G__5506 = (i__5498 + (1));
seq__5495 = G__5503;
chunk__5496 = G__5504;
count__5497 = G__5505;
i__5498 = G__5506;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5495);
if(temp__5457__auto__){
var seq__5495__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5495__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__5495__$1);
var G__5507 = cljs.core.chunk_rest(seq__5495__$1);
var G__5508 = c__4351__auto__;
var G__5509 = cljs.core.count(c__4351__auto__);
var G__5510 = (0);
seq__5495 = G__5507;
chunk__5496 = G__5508;
count__5497 = G__5509;
i__5498 = G__5510;
continue;
} else {
var map__5501 = cljs.core.first(seq__5495__$1);
var map__5501__$1 = ((((!((map__5501 == null)))?(((((map__5501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5501):map__5501);
var effect = map__5501__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5501__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5501__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__5495,chunk__5496,count__5497,i__5498,map__5501,map__5501__$1,effect,ms,dispatch,seq__5495__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__5495,chunk__5496,count__5497,i__5498,map__5501,map__5501__$1,effect,ms,dispatch,seq__5495__$1,temp__5457__auto__))
,ms);
}


var G__5511 = cljs.core.next(seq__5495__$1);
var G__5512 = null;
var G__5513 = (0);
var G__5514 = (0);
seq__5495 = G__5511;
chunk__5496 = G__5512;
count__5497 = G__5513;
i__5498 = G__5514;
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
var seq__5515 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__5516 = null;
var count__5517 = (0);
var i__5518 = (0);
while(true){
if((i__5518 < count__5517)){
var event = chunk__5516.cljs$core$IIndexed$_nth$arity$2(null,i__5518);
re_frame.router.dispatch(event);


var G__5519 = seq__5515;
var G__5520 = chunk__5516;
var G__5521 = count__5517;
var G__5522 = (i__5518 + (1));
seq__5515 = G__5519;
chunk__5516 = G__5520;
count__5517 = G__5521;
i__5518 = G__5522;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5515);
if(temp__5457__auto__){
var seq__5515__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5515__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__5515__$1);
var G__5523 = cljs.core.chunk_rest(seq__5515__$1);
var G__5524 = c__4351__auto__;
var G__5525 = cljs.core.count(c__4351__auto__);
var G__5526 = (0);
seq__5515 = G__5523;
chunk__5516 = G__5524;
count__5517 = G__5525;
i__5518 = G__5526;
continue;
} else {
var event = cljs.core.first(seq__5515__$1);
re_frame.router.dispatch(event);


var G__5527 = cljs.core.next(seq__5515__$1);
var G__5528 = null;
var G__5529 = (0);
var G__5530 = (0);
seq__5515 = G__5527;
chunk__5516 = G__5528;
count__5517 = G__5529;
i__5518 = G__5530;
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
var seq__5531 = cljs.core.seq(value);
var chunk__5532 = null;
var count__5533 = (0);
var i__5534 = (0);
while(true){
if((i__5534 < count__5533)){
var event = chunk__5532.cljs$core$IIndexed$_nth$arity$2(null,i__5534);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__5535 = seq__5531;
var G__5536 = chunk__5532;
var G__5537 = count__5533;
var G__5538 = (i__5534 + (1));
seq__5531 = G__5535;
chunk__5532 = G__5536;
count__5533 = G__5537;
i__5534 = G__5538;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5531);
if(temp__5457__auto__){
var seq__5531__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5531__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__5531__$1);
var G__5539 = cljs.core.chunk_rest(seq__5531__$1);
var G__5540 = c__4351__auto__;
var G__5541 = cljs.core.count(c__4351__auto__);
var G__5542 = (0);
seq__5531 = G__5539;
chunk__5532 = G__5540;
count__5533 = G__5541;
i__5534 = G__5542;
continue;
} else {
var event = cljs.core.first(seq__5531__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__5543 = cljs.core.next(seq__5531__$1);
var G__5544 = null;
var G__5545 = (0);
var G__5546 = (0);
seq__5531 = G__5543;
chunk__5532 = G__5544;
count__5533 = G__5545;
i__5534 = G__5546;
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
