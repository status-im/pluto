// Compiled by ClojureScript 1.10.516 {:static-fns true, :optimize-constants true}
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
var _STAR_current_trace_STAR__orig_val__6480 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__6481 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__6481;

try{try{var seq__6482 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__6483 = null;
var count__6484 = (0);
var i__6485 = (0);
while(true){
if((i__6485 < count__6484)){
var vec__6492 = chunk__6483.cljs$core$IIndexed$_nth$arity$2(null,i__6485);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6492,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6492,(1),null);
var temp__5718__auto___6514 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___6514)){
var effect_fn_6515 = temp__5718__auto___6514;
(effect_fn_6515.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6515.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6515.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6516 = seq__6482;
var G__6517 = chunk__6483;
var G__6518 = count__6484;
var G__6519 = (i__6485 + (1));
seq__6482 = G__6516;
chunk__6483 = G__6517;
count__6484 = G__6518;
i__6485 = G__6519;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6482);
if(temp__5720__auto__){
var seq__6482__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6482__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6482__$1);
var G__6520 = cljs.core.chunk_rest(seq__6482__$1);
var G__6521 = c__4550__auto__;
var G__6522 = cljs.core.count(c__4550__auto__);
var G__6523 = (0);
seq__6482 = G__6520;
chunk__6483 = G__6521;
count__6484 = G__6522;
i__6485 = G__6523;
continue;
} else {
var vec__6495 = cljs.core.first(seq__6482__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6495,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6495,(1),null);
var temp__5718__auto___6524 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___6524)){
var effect_fn_6525 = temp__5718__auto___6524;
(effect_fn_6525.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6525.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6525.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6526 = cljs.core.next(seq__6482__$1);
var G__6527 = null;
var G__6528 = (0);
var G__6529 = (0);
seq__6482 = G__6526;
chunk__6483 = G__6527;
count__6484 = G__6528;
i__6485 = G__6529;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__6039__auto___6530 = re_frame.interop.now();
var duration__6040__auto___6531 = (end__6039__auto___6530 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__6040__auto___6531,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__6039__auto___6530);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__6480;
}} else {
var seq__6498 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__6499 = null;
var count__6500 = (0);
var i__6501 = (0);
while(true){
if((i__6501 < count__6500)){
var vec__6508 = chunk__6499.cljs$core$IIndexed$_nth$arity$2(null,i__6501);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6508,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6508,(1),null);
var temp__5718__auto___6532 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___6532)){
var effect_fn_6533 = temp__5718__auto___6532;
(effect_fn_6533.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6533.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6533.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6534 = seq__6498;
var G__6535 = chunk__6499;
var G__6536 = count__6500;
var G__6537 = (i__6501 + (1));
seq__6498 = G__6534;
chunk__6499 = G__6535;
count__6500 = G__6536;
i__6501 = G__6537;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6498);
if(temp__5720__auto__){
var seq__6498__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6498__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6498__$1);
var G__6538 = cljs.core.chunk_rest(seq__6498__$1);
var G__6539 = c__4550__auto__;
var G__6540 = cljs.core.count(c__4550__auto__);
var G__6541 = (0);
seq__6498 = G__6538;
chunk__6499 = G__6539;
count__6500 = G__6540;
i__6501 = G__6541;
continue;
} else {
var vec__6511 = cljs.core.first(seq__6498__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6511,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6511,(1),null);
var temp__5718__auto___6542 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___6542)){
var effect_fn_6543 = temp__5718__auto___6542;
(effect_fn_6543.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6543.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6543.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6544 = cljs.core.next(seq__6498__$1);
var G__6545 = null;
var G__6546 = (0);
var G__6547 = (0);
seq__6498 = G__6544;
chunk__6499 = G__6545;
count__6500 = G__6546;
i__6501 = G__6547;
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
var seq__6548 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__6549 = null;
var count__6550 = (0);
var i__6551 = (0);
while(true){
if((i__6551 < count__6550)){
var map__6556 = chunk__6549.cljs$core$IIndexed$_nth$arity$2(null,i__6551);
var map__6556__$1 = (((((!((map__6556 == null))))?(((((map__6556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6556):map__6556);
var effect = map__6556__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6556__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6556__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__6548,chunk__6549,count__6550,i__6551,map__6556,map__6556__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__6548,chunk__6549,count__6550,i__6551,map__6556,map__6556__$1,effect,ms,dispatch))
,ms);
}


var G__6560 = seq__6548;
var G__6561 = chunk__6549;
var G__6562 = count__6550;
var G__6563 = (i__6551 + (1));
seq__6548 = G__6560;
chunk__6549 = G__6561;
count__6550 = G__6562;
i__6551 = G__6563;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6548);
if(temp__5720__auto__){
var seq__6548__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6548__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6548__$1);
var G__6564 = cljs.core.chunk_rest(seq__6548__$1);
var G__6565 = c__4550__auto__;
var G__6566 = cljs.core.count(c__4550__auto__);
var G__6567 = (0);
seq__6548 = G__6564;
chunk__6549 = G__6565;
count__6550 = G__6566;
i__6551 = G__6567;
continue;
} else {
var map__6558 = cljs.core.first(seq__6548__$1);
var map__6558__$1 = (((((!((map__6558 == null))))?(((((map__6558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6558):map__6558);
var effect = map__6558__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6558__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6558__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__6548,chunk__6549,count__6550,i__6551,map__6558,map__6558__$1,effect,ms,dispatch,seq__6548__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__6548,chunk__6549,count__6550,i__6551,map__6558,map__6558__$1,effect,ms,dispatch,seq__6548__$1,temp__5720__auto__))
,ms);
}


var G__6568 = cljs.core.next(seq__6548__$1);
var G__6569 = null;
var G__6570 = (0);
var G__6571 = (0);
seq__6548 = G__6568;
chunk__6549 = G__6569;
count__6550 = G__6570;
i__6551 = G__6571;
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
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__6572 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__6573 = null;
var count__6574 = (0);
var i__6575 = (0);
while(true){
if((i__6575 < count__6574)){
var event = chunk__6573.cljs$core$IIndexed$_nth$arity$2(null,i__6575);
re_frame.router.dispatch(event);


var G__6576 = seq__6572;
var G__6577 = chunk__6573;
var G__6578 = count__6574;
var G__6579 = (i__6575 + (1));
seq__6572 = G__6576;
chunk__6573 = G__6577;
count__6574 = G__6578;
i__6575 = G__6579;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6572);
if(temp__5720__auto__){
var seq__6572__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6572__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6572__$1);
var G__6580 = cljs.core.chunk_rest(seq__6572__$1);
var G__6581 = c__4550__auto__;
var G__6582 = cljs.core.count(c__4550__auto__);
var G__6583 = (0);
seq__6572 = G__6580;
chunk__6573 = G__6581;
count__6574 = G__6582;
i__6575 = G__6583;
continue;
} else {
var event = cljs.core.first(seq__6572__$1);
re_frame.router.dispatch(event);


var G__6584 = cljs.core.next(seq__6572__$1);
var G__6585 = null;
var G__6586 = (0);
var G__6587 = (0);
seq__6572 = G__6584;
chunk__6573 = G__6585;
count__6574 = G__6586;
i__6575 = G__6587;
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
var seq__6588 = cljs.core.seq(value);
var chunk__6589 = null;
var count__6590 = (0);
var i__6591 = (0);
while(true){
if((i__6591 < count__6590)){
var event = chunk__6589.cljs$core$IIndexed$_nth$arity$2(null,i__6591);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__6592 = seq__6588;
var G__6593 = chunk__6589;
var G__6594 = count__6590;
var G__6595 = (i__6591 + (1));
seq__6588 = G__6592;
chunk__6589 = G__6593;
count__6590 = G__6594;
i__6591 = G__6595;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6588);
if(temp__5720__auto__){
var seq__6588__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6588__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6588__$1);
var G__6596 = cljs.core.chunk_rest(seq__6588__$1);
var G__6597 = c__4550__auto__;
var G__6598 = cljs.core.count(c__4550__auto__);
var G__6599 = (0);
seq__6588 = G__6596;
chunk__6589 = G__6597;
count__6590 = G__6598;
i__6591 = G__6599;
continue;
} else {
var event = cljs.core.first(seq__6588__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__6600 = cljs.core.next(seq__6588__$1);
var G__6601 = null;
var G__6602 = (0);
var G__6603 = (0);
seq__6588 = G__6600;
chunk__6589 = G__6601;
count__6590 = G__6602;
i__6591 = G__6603;
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
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
