// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
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
var _STAR_current_trace_STAR__orig_val__4622 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__4623 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__4623;

try{try{var seq__4624 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__4625 = null;
var count__4626 = (0);
var i__4627 = (0);
while(true){
if((i__4627 < count__4626)){
var vec__4628 = chunk__4625.cljs$core$IIndexed$_nth$arity$2(null,i__4627);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4628,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4628,(1),null);
var temp__5455__auto___4644 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___4644)){
var effect_fn_4645 = temp__5455__auto___4644;
(effect_fn_4645.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4645.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4645.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4646 = seq__4624;
var G__4647 = chunk__4625;
var G__4648 = count__4626;
var G__4649 = (i__4627 + (1));
seq__4624 = G__4646;
chunk__4625 = G__4647;
count__4626 = G__4648;
i__4627 = G__4649;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__4624);
if(temp__5457__auto__){
var seq__4624__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4624__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__4624__$1);
var G__4650 = cljs.core.chunk_rest(seq__4624__$1);
var G__4651 = c__4461__auto__;
var G__4652 = cljs.core.count(c__4461__auto__);
var G__4653 = (0);
seq__4624 = G__4650;
chunk__4625 = G__4651;
count__4626 = G__4652;
i__4627 = G__4653;
continue;
} else {
var vec__4631 = cljs.core.first(seq__4624__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4631,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4631,(1),null);
var temp__5455__auto___4654 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___4654)){
var effect_fn_4655 = temp__5455__auto___4654;
(effect_fn_4655.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4655.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4655.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4656 = cljs.core.next(seq__4624__$1);
var G__4657 = null;
var G__4658 = (0);
var G__4659 = (0);
seq__4624 = G__4656;
chunk__4625 = G__4657;
count__4626 = G__4658;
i__4627 = G__4659;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__4452__auto___4660 = re_frame.interop.now();
var duration__4453__auto___4661 = (end__4452__auto___4660 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__4453__auto___4661,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__4452__auto___4660);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__4622;
}} else {
var seq__4634 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__4635 = null;
var count__4636 = (0);
var i__4637 = (0);
while(true){
if((i__4637 < count__4636)){
var vec__4638 = chunk__4635.cljs$core$IIndexed$_nth$arity$2(null,i__4637);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4638,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4638,(1),null);
var temp__5455__auto___4662 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___4662)){
var effect_fn_4663 = temp__5455__auto___4662;
(effect_fn_4663.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4663.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4663.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4664 = seq__4634;
var G__4665 = chunk__4635;
var G__4666 = count__4636;
var G__4667 = (i__4637 + (1));
seq__4634 = G__4664;
chunk__4635 = G__4665;
count__4636 = G__4666;
i__4637 = G__4667;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__4634);
if(temp__5457__auto__){
var seq__4634__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4634__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__4634__$1);
var G__4668 = cljs.core.chunk_rest(seq__4634__$1);
var G__4669 = c__4461__auto__;
var G__4670 = cljs.core.count(c__4461__auto__);
var G__4671 = (0);
seq__4634 = G__4668;
chunk__4635 = G__4669;
count__4636 = G__4670;
i__4637 = G__4671;
continue;
} else {
var vec__4641 = cljs.core.first(seq__4634__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4641,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4641,(1),null);
var temp__5455__auto___4672 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___4672)){
var effect_fn_4673 = temp__5455__auto___4672;
(effect_fn_4673.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4673.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4673.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4674 = cljs.core.next(seq__4634__$1);
var G__4675 = null;
var G__4676 = (0);
var G__4677 = (0);
seq__4634 = G__4674;
chunk__4635 = G__4675;
count__4636 = G__4676;
i__4637 = G__4677;
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
var seq__4678 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__4679 = null;
var count__4680 = (0);
var i__4681 = (0);
while(true){
if((i__4681 < count__4680)){
var map__4682 = chunk__4679.cljs$core$IIndexed$_nth$arity$2(null,i__4681);
var map__4682__$1 = (((((!((map__4682 == null))))?(((((map__4682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4682):map__4682);
var effect = map__4682__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4682__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4682__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__4678,chunk__4679,count__4680,i__4681,map__4682,map__4682__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__4678,chunk__4679,count__4680,i__4681,map__4682,map__4682__$1,effect,ms,dispatch))
,ms);
}


var G__4686 = seq__4678;
var G__4687 = chunk__4679;
var G__4688 = count__4680;
var G__4689 = (i__4681 + (1));
seq__4678 = G__4686;
chunk__4679 = G__4687;
count__4680 = G__4688;
i__4681 = G__4689;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__4678);
if(temp__5457__auto__){
var seq__4678__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4678__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__4678__$1);
var G__4690 = cljs.core.chunk_rest(seq__4678__$1);
var G__4691 = c__4461__auto__;
var G__4692 = cljs.core.count(c__4461__auto__);
var G__4693 = (0);
seq__4678 = G__4690;
chunk__4679 = G__4691;
count__4680 = G__4692;
i__4681 = G__4693;
continue;
} else {
var map__4684 = cljs.core.first(seq__4678__$1);
var map__4684__$1 = (((((!((map__4684 == null))))?(((((map__4684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4684):map__4684);
var effect = map__4684__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4684__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4684__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__4678,chunk__4679,count__4680,i__4681,map__4684,map__4684__$1,effect,ms,dispatch,seq__4678__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__4678,chunk__4679,count__4680,i__4681,map__4684,map__4684__$1,effect,ms,dispatch,seq__4678__$1,temp__5457__auto__))
,ms);
}


var G__4694 = cljs.core.next(seq__4678__$1);
var G__4695 = null;
var G__4696 = (0);
var G__4697 = (0);
seq__4678 = G__4694;
chunk__4679 = G__4695;
count__4680 = G__4696;
i__4681 = G__4697;
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
var seq__4698 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__4699 = null;
var count__4700 = (0);
var i__4701 = (0);
while(true){
if((i__4701 < count__4700)){
var event = chunk__4699.cljs$core$IIndexed$_nth$arity$2(null,i__4701);
re_frame.router.dispatch(event);


var G__4702 = seq__4698;
var G__4703 = chunk__4699;
var G__4704 = count__4700;
var G__4705 = (i__4701 + (1));
seq__4698 = G__4702;
chunk__4699 = G__4703;
count__4700 = G__4704;
i__4701 = G__4705;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__4698);
if(temp__5457__auto__){
var seq__4698__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4698__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__4698__$1);
var G__4706 = cljs.core.chunk_rest(seq__4698__$1);
var G__4707 = c__4461__auto__;
var G__4708 = cljs.core.count(c__4461__auto__);
var G__4709 = (0);
seq__4698 = G__4706;
chunk__4699 = G__4707;
count__4700 = G__4708;
i__4701 = G__4709;
continue;
} else {
var event = cljs.core.first(seq__4698__$1);
re_frame.router.dispatch(event);


var G__4710 = cljs.core.next(seq__4698__$1);
var G__4711 = null;
var G__4712 = (0);
var G__4713 = (0);
seq__4698 = G__4710;
chunk__4699 = G__4711;
count__4700 = G__4712;
i__4701 = G__4713;
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
var seq__4714 = cljs.core.seq(value);
var chunk__4715 = null;
var count__4716 = (0);
var i__4717 = (0);
while(true){
if((i__4717 < count__4716)){
var event = chunk__4715.cljs$core$IIndexed$_nth$arity$2(null,i__4717);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__4718 = seq__4714;
var G__4719 = chunk__4715;
var G__4720 = count__4716;
var G__4721 = (i__4717 + (1));
seq__4714 = G__4718;
chunk__4715 = G__4719;
count__4716 = G__4720;
i__4717 = G__4721;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__4714);
if(temp__5457__auto__){
var seq__4714__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4714__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__4714__$1);
var G__4722 = cljs.core.chunk_rest(seq__4714__$1);
var G__4723 = c__4461__auto__;
var G__4724 = cljs.core.count(c__4461__auto__);
var G__4725 = (0);
seq__4714 = G__4722;
chunk__4715 = G__4723;
count__4716 = G__4724;
i__4717 = G__4725;
continue;
} else {
var event = cljs.core.first(seq__4714__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__4726 = cljs.core.next(seq__4714__$1);
var G__4727 = null;
var G__4728 = (0);
var G__4729 = (0);
seq__4714 = G__4726;
chunk__4715 = G__4727;
count__4716 = G__4728;
i__4717 = G__4729;
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
