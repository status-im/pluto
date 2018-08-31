// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
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
var _STAR_current_trace_STAR_4931 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__4932 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__4933 = null;
var count__4934 = (0);
var i__4935 = (0);
while(true){
if((i__4935 < count__4934)){
var vec__4936 = chunk__4933.cljs$core$IIndexed$_nth$arity$2(null,i__4935);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4936,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4936,(1),null);
var temp__5455__auto___4952 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___4952)){
var effect_fn_4953 = temp__5455__auto___4952;
(effect_fn_4953.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4953.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4953.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4954 = seq__4932;
var G__4955 = chunk__4933;
var G__4956 = count__4934;
var G__4957 = (i__4935 + (1));
seq__4932 = G__4954;
chunk__4933 = G__4955;
count__4934 = G__4956;
i__4935 = G__4957;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__4932);
if(temp__5457__auto__){
var seq__4932__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4932__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__4932__$1);
var G__4958 = cljs.core.chunk_rest(seq__4932__$1);
var G__4959 = c__4338__auto__;
var G__4960 = cljs.core.count(c__4338__auto__);
var G__4961 = (0);
seq__4932 = G__4958;
chunk__4933 = G__4959;
count__4934 = G__4960;
i__4935 = G__4961;
continue;
} else {
var vec__4939 = cljs.core.first(seq__4932__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4939,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4939,(1),null);
var temp__5455__auto___4962 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___4962)){
var effect_fn_4963 = temp__5455__auto___4962;
(effect_fn_4963.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4963.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4963.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4964 = cljs.core.next(seq__4932__$1);
var G__4965 = null;
var G__4966 = (0);
var G__4967 = (0);
seq__4932 = G__4964;
chunk__4933 = G__4965;
count__4934 = G__4966;
i__4935 = G__4967;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__4439__auto___4968 = re_frame.interop.now();
var duration__4440__auto___4969 = (end__4439__auto___4968 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__4440__auto___4969,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__4439__auto___4968);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_4931;
}} else {
var seq__4942 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__4943 = null;
var count__4944 = (0);
var i__4945 = (0);
while(true){
if((i__4945 < count__4944)){
var vec__4946 = chunk__4943.cljs$core$IIndexed$_nth$arity$2(null,i__4945);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4946,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4946,(1),null);
var temp__5455__auto___4970 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___4970)){
var effect_fn_4971 = temp__5455__auto___4970;
(effect_fn_4971.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4971.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4971.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4972 = seq__4942;
var G__4973 = chunk__4943;
var G__4974 = count__4944;
var G__4975 = (i__4945 + (1));
seq__4942 = G__4972;
chunk__4943 = G__4973;
count__4944 = G__4974;
i__4945 = G__4975;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__4942);
if(temp__5457__auto__){
var seq__4942__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4942__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__4942__$1);
var G__4976 = cljs.core.chunk_rest(seq__4942__$1);
var G__4977 = c__4338__auto__;
var G__4978 = cljs.core.count(c__4338__auto__);
var G__4979 = (0);
seq__4942 = G__4976;
chunk__4943 = G__4977;
count__4944 = G__4978;
i__4945 = G__4979;
continue;
} else {
var vec__4949 = cljs.core.first(seq__4942__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4949,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4949,(1),null);
var temp__5455__auto___4980 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___4980)){
var effect_fn_4981 = temp__5455__auto___4980;
(effect_fn_4981.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4981.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4981.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4982 = cljs.core.next(seq__4942__$1);
var G__4983 = null;
var G__4984 = (0);
var G__4985 = (0);
seq__4942 = G__4982;
chunk__4943 = G__4983;
count__4944 = G__4984;
i__4945 = G__4985;
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
var seq__4986 = cljs.core.seq(value);
var chunk__4987 = null;
var count__4988 = (0);
var i__4989 = (0);
while(true){
if((i__4989 < count__4988)){
var map__4990 = chunk__4987.cljs$core$IIndexed$_nth$arity$2(null,i__4989);
var map__4990__$1 = ((((!((map__4990 == null)))?(((((map__4990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4990):map__4990);
var effect = map__4990__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4990__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4990__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__4986,chunk__4987,count__4988,i__4989,map__4990,map__4990__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__4986,chunk__4987,count__4988,i__4989,map__4990,map__4990__$1,effect,ms,dispatch))
,ms);
}


var G__4994 = seq__4986;
var G__4995 = chunk__4987;
var G__4996 = count__4988;
var G__4997 = (i__4989 + (1));
seq__4986 = G__4994;
chunk__4987 = G__4995;
count__4988 = G__4996;
i__4989 = G__4997;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__4986);
if(temp__5457__auto__){
var seq__4986__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4986__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__4986__$1);
var G__4998 = cljs.core.chunk_rest(seq__4986__$1);
var G__4999 = c__4338__auto__;
var G__5000 = cljs.core.count(c__4338__auto__);
var G__5001 = (0);
seq__4986 = G__4998;
chunk__4987 = G__4999;
count__4988 = G__5000;
i__4989 = G__5001;
continue;
} else {
var map__4992 = cljs.core.first(seq__4986__$1);
var map__4992__$1 = ((((!((map__4992 == null)))?(((((map__4992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4992):map__4992);
var effect = map__4992__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4992__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4992__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__4986,chunk__4987,count__4988,i__4989,map__4992,map__4992__$1,effect,ms,dispatch,seq__4986__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__4986,chunk__4987,count__4988,i__4989,map__4992,map__4992__$1,effect,ms,dispatch,seq__4986__$1,temp__5457__auto__))
,ms);
}


var G__5002 = cljs.core.next(seq__4986__$1);
var G__5003 = null;
var G__5004 = (0);
var G__5005 = (0);
seq__4986 = G__5002;
chunk__4987 = G__5003;
count__4988 = G__5004;
i__4989 = G__5005;
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
var seq__5006 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__5007 = null;
var count__5008 = (0);
var i__5009 = (0);
while(true){
if((i__5009 < count__5008)){
var event = chunk__5007.cljs$core$IIndexed$_nth$arity$2(null,i__5009);
re_frame.router.dispatch(event);


var G__5010 = seq__5006;
var G__5011 = chunk__5007;
var G__5012 = count__5008;
var G__5013 = (i__5009 + (1));
seq__5006 = G__5010;
chunk__5007 = G__5011;
count__5008 = G__5012;
i__5009 = G__5013;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5006);
if(temp__5457__auto__){
var seq__5006__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5006__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__5006__$1);
var G__5014 = cljs.core.chunk_rest(seq__5006__$1);
var G__5015 = c__4338__auto__;
var G__5016 = cljs.core.count(c__4338__auto__);
var G__5017 = (0);
seq__5006 = G__5014;
chunk__5007 = G__5015;
count__5008 = G__5016;
i__5009 = G__5017;
continue;
} else {
var event = cljs.core.first(seq__5006__$1);
re_frame.router.dispatch(event);


var G__5018 = cljs.core.next(seq__5006__$1);
var G__5019 = null;
var G__5020 = (0);
var G__5021 = (0);
seq__5006 = G__5018;
chunk__5007 = G__5019;
count__5008 = G__5020;
i__5009 = G__5021;
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
var seq__5022 = cljs.core.seq(value);
var chunk__5023 = null;
var count__5024 = (0);
var i__5025 = (0);
while(true){
if((i__5025 < count__5024)){
var event = chunk__5023.cljs$core$IIndexed$_nth$arity$2(null,i__5025);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__5026 = seq__5022;
var G__5027 = chunk__5023;
var G__5028 = count__5024;
var G__5029 = (i__5025 + (1));
seq__5022 = G__5026;
chunk__5023 = G__5027;
count__5024 = G__5028;
i__5025 = G__5029;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5022);
if(temp__5457__auto__){
var seq__5022__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5022__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__5022__$1);
var G__5030 = cljs.core.chunk_rest(seq__5022__$1);
var G__5031 = c__4338__auto__;
var G__5032 = cljs.core.count(c__4338__auto__);
var G__5033 = (0);
seq__5022 = G__5030;
chunk__5023 = G__5031;
count__5024 = G__5032;
i__5025 = G__5033;
continue;
} else {
var event = cljs.core.first(seq__5022__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__5034 = cljs.core.next(seq__5022__$1);
var G__5035 = null;
var G__5036 = (0);
var G__5037 = (0);
seq__5022 = G__5034;
chunk__5023 = G__5035;
count__5024 = G__5036;
i__5025 = G__5037;
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
