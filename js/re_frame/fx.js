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
var _STAR_current_trace_STAR__orig_val__8044 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__8045 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__8045;

try{try{var seq__8046 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__8047 = null;
var count__8048 = (0);
var i__8049 = (0);
while(true){
if((i__8049 < count__8048)){
var vec__8050 = chunk__8047.cljs$core$IIndexed$_nth$arity$2(null,i__8049);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8050,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8050,(1),null);
var temp__5718__auto___8066 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___8066)){
var effect_fn_8067 = temp__5718__auto___8066;
(effect_fn_8067.cljs$core$IFn$_invoke$arity$1 ? effect_fn_8067.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_8067.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__8068 = seq__8046;
var G__8069 = chunk__8047;
var G__8070 = count__8048;
var G__8071 = (i__8049 + (1));
seq__8046 = G__8068;
chunk__8047 = G__8069;
count__8048 = G__8070;
i__8049 = G__8071;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__8046);
if(temp__5720__auto__){
var seq__8046__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8046__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__8046__$1);
var G__8072 = cljs.core.chunk_rest(seq__8046__$1);
var G__8073 = c__4461__auto__;
var G__8074 = cljs.core.count(c__4461__auto__);
var G__8075 = (0);
seq__8046 = G__8072;
chunk__8047 = G__8073;
count__8048 = G__8074;
i__8049 = G__8075;
continue;
} else {
var vec__8053 = cljs.core.first(seq__8046__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8053,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8053,(1),null);
var temp__5718__auto___8076 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___8076)){
var effect_fn_8077 = temp__5718__auto___8076;
(effect_fn_8077.cljs$core$IFn$_invoke$arity$1 ? effect_fn_8077.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_8077.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__8078 = cljs.core.next(seq__8046__$1);
var G__8079 = null;
var G__8080 = (0);
var G__8081 = (0);
seq__8046 = G__8078;
chunk__8047 = G__8079;
count__8048 = G__8080;
i__8049 = G__8081;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__7004__auto___8082 = re_frame.interop.now();
var duration__7005__auto___8083 = (end__7004__auto___8082 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__7005__auto___8083,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__7004__auto___8082);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__8044;
}} else {
var seq__8056 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__8057 = null;
var count__8058 = (0);
var i__8059 = (0);
while(true){
if((i__8059 < count__8058)){
var vec__8060 = chunk__8057.cljs$core$IIndexed$_nth$arity$2(null,i__8059);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8060,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8060,(1),null);
var temp__5718__auto___8084 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___8084)){
var effect_fn_8085 = temp__5718__auto___8084;
(effect_fn_8085.cljs$core$IFn$_invoke$arity$1 ? effect_fn_8085.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_8085.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__8086 = seq__8056;
var G__8087 = chunk__8057;
var G__8088 = count__8058;
var G__8089 = (i__8059 + (1));
seq__8056 = G__8086;
chunk__8057 = G__8087;
count__8058 = G__8088;
i__8059 = G__8089;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__8056);
if(temp__5720__auto__){
var seq__8056__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8056__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__8056__$1);
var G__8090 = cljs.core.chunk_rest(seq__8056__$1);
var G__8091 = c__4461__auto__;
var G__8092 = cljs.core.count(c__4461__auto__);
var G__8093 = (0);
seq__8056 = G__8090;
chunk__8057 = G__8091;
count__8058 = G__8092;
i__8059 = G__8093;
continue;
} else {
var vec__8063 = cljs.core.first(seq__8056__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8063,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8063,(1),null);
var temp__5718__auto___8094 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___8094)){
var effect_fn_8095 = temp__5718__auto___8094;
(effect_fn_8095.cljs$core$IFn$_invoke$arity$1 ? effect_fn_8095.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_8095.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__8096 = cljs.core.next(seq__8056__$1);
var G__8097 = null;
var G__8098 = (0);
var G__8099 = (0);
seq__8056 = G__8096;
chunk__8057 = G__8097;
count__8058 = G__8098;
i__8059 = G__8099;
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
var seq__8100 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__8101 = null;
var count__8102 = (0);
var i__8103 = (0);
while(true){
if((i__8103 < count__8102)){
var map__8104 = chunk__8101.cljs$core$IIndexed$_nth$arity$2(null,i__8103);
var map__8104__$1 = (((((!((map__8104 == null))))?(((((map__8104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8104):map__8104);
var effect = map__8104__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8104__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8104__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__8100,chunk__8101,count__8102,i__8103,map__8104,map__8104__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__8100,chunk__8101,count__8102,i__8103,map__8104,map__8104__$1,effect,ms,dispatch))
,ms);
}


var G__8108 = seq__8100;
var G__8109 = chunk__8101;
var G__8110 = count__8102;
var G__8111 = (i__8103 + (1));
seq__8100 = G__8108;
chunk__8101 = G__8109;
count__8102 = G__8110;
i__8103 = G__8111;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__8100);
if(temp__5720__auto__){
var seq__8100__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8100__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__8100__$1);
var G__8112 = cljs.core.chunk_rest(seq__8100__$1);
var G__8113 = c__4461__auto__;
var G__8114 = cljs.core.count(c__4461__auto__);
var G__8115 = (0);
seq__8100 = G__8112;
chunk__8101 = G__8113;
count__8102 = G__8114;
i__8103 = G__8115;
continue;
} else {
var map__8106 = cljs.core.first(seq__8100__$1);
var map__8106__$1 = (((((!((map__8106 == null))))?(((((map__8106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8106):map__8106);
var effect = map__8106__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8106__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8106__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__8100,chunk__8101,count__8102,i__8103,map__8106,map__8106__$1,effect,ms,dispatch,seq__8100__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__8100,chunk__8101,count__8102,i__8103,map__8106,map__8106__$1,effect,ms,dispatch,seq__8100__$1,temp__5720__auto__))
,ms);
}


var G__8116 = cljs.core.next(seq__8100__$1);
var G__8117 = null;
var G__8118 = (0);
var G__8119 = (0);
seq__8100 = G__8116;
chunk__8101 = G__8117;
count__8102 = G__8118;
i__8103 = G__8119;
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
var seq__8120 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__8121 = null;
var count__8122 = (0);
var i__8123 = (0);
while(true){
if((i__8123 < count__8122)){
var event = chunk__8121.cljs$core$IIndexed$_nth$arity$2(null,i__8123);
re_frame.router.dispatch(event);


var G__8124 = seq__8120;
var G__8125 = chunk__8121;
var G__8126 = count__8122;
var G__8127 = (i__8123 + (1));
seq__8120 = G__8124;
chunk__8121 = G__8125;
count__8122 = G__8126;
i__8123 = G__8127;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__8120);
if(temp__5720__auto__){
var seq__8120__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8120__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__8120__$1);
var G__8128 = cljs.core.chunk_rest(seq__8120__$1);
var G__8129 = c__4461__auto__;
var G__8130 = cljs.core.count(c__4461__auto__);
var G__8131 = (0);
seq__8120 = G__8128;
chunk__8121 = G__8129;
count__8122 = G__8130;
i__8123 = G__8131;
continue;
} else {
var event = cljs.core.first(seq__8120__$1);
re_frame.router.dispatch(event);


var G__8132 = cljs.core.next(seq__8120__$1);
var G__8133 = null;
var G__8134 = (0);
var G__8135 = (0);
seq__8120 = G__8132;
chunk__8121 = G__8133;
count__8122 = G__8134;
i__8123 = G__8135;
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
var seq__8136 = cljs.core.seq(value);
var chunk__8137 = null;
var count__8138 = (0);
var i__8139 = (0);
while(true){
if((i__8139 < count__8138)){
var event = chunk__8137.cljs$core$IIndexed$_nth$arity$2(null,i__8139);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__8140 = seq__8136;
var G__8141 = chunk__8137;
var G__8142 = count__8138;
var G__8143 = (i__8139 + (1));
seq__8136 = G__8140;
chunk__8137 = G__8141;
count__8138 = G__8142;
i__8139 = G__8143;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__8136);
if(temp__5720__auto__){
var seq__8136__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8136__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__8136__$1);
var G__8144 = cljs.core.chunk_rest(seq__8136__$1);
var G__8145 = c__4461__auto__;
var G__8146 = cljs.core.count(c__4461__auto__);
var G__8147 = (0);
seq__8136 = G__8144;
chunk__8137 = G__8145;
count__8138 = G__8146;
i__8139 = G__8147;
continue;
} else {
var event = cljs.core.first(seq__8136__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__8148 = cljs.core.next(seq__8136__$1);
var G__8149 = null;
var G__8150 = (0);
var G__8151 = (0);
seq__8136 = G__8148;
chunk__8137 = G__8149;
count__8138 = G__8150;
i__8139 = G__8151;
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
