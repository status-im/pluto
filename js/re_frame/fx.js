// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true, :target :nodejs}
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
var _STAR_current_trace_STAR_2136 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__2137 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__2138 = null;
var count__2139 = (0);
var i__2140 = (0);
while(true){
if((i__2140 < count__2139)){
var vec__2141 = chunk__2138.cljs$core$IIndexed$_nth$arity$2(null,i__2140);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2141,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2141,(1),null);
var temp__5455__auto___2157 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___2157)){
var effect_fn_2158 = temp__5455__auto___2157;
(effect_fn_2158.cljs$core$IFn$_invoke$arity$1 ? effect_fn_2158.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_2158.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__2159 = seq__2137;
var G__2160 = chunk__2138;
var G__2161 = count__2139;
var G__2162 = (i__2140 + (1));
seq__2137 = G__2159;
chunk__2138 = G__2160;
count__2139 = G__2161;
i__2140 = G__2162;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__2137);
if(temp__5457__auto__){
var seq__2137__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2137__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__2137__$1);
var G__2163 = cljs.core.chunk_rest(seq__2137__$1);
var G__2164 = c__4338__auto__;
var G__2165 = cljs.core.count(c__4338__auto__);
var G__2166 = (0);
seq__2137 = G__2163;
chunk__2138 = G__2164;
count__2139 = G__2165;
i__2140 = G__2166;
continue;
} else {
var vec__2144 = cljs.core.first(seq__2137__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2144,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2144,(1),null);
var temp__5455__auto___2167 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___2167)){
var effect_fn_2168 = temp__5455__auto___2167;
(effect_fn_2168.cljs$core$IFn$_invoke$arity$1 ? effect_fn_2168.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_2168.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__2169 = cljs.core.next(seq__2137__$1);
var G__2170 = null;
var G__2171 = (0);
var G__2172 = (0);
seq__2137 = G__2169;
chunk__2138 = G__2170;
count__2139 = G__2171;
i__2140 = G__2172;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__1644__auto___2173 = re_frame.interop.now();
var duration__1645__auto___2174 = (end__1644__auto___2173 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__1645__auto___2174,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__1644__auto___2173);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_2136;
}} else {
var seq__2147 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__2148 = null;
var count__2149 = (0);
var i__2150 = (0);
while(true){
if((i__2150 < count__2149)){
var vec__2151 = chunk__2148.cljs$core$IIndexed$_nth$arity$2(null,i__2150);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2151,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2151,(1),null);
var temp__5455__auto___2175 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___2175)){
var effect_fn_2176 = temp__5455__auto___2175;
(effect_fn_2176.cljs$core$IFn$_invoke$arity$1 ? effect_fn_2176.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_2176.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__2177 = seq__2147;
var G__2178 = chunk__2148;
var G__2179 = count__2149;
var G__2180 = (i__2150 + (1));
seq__2147 = G__2177;
chunk__2148 = G__2178;
count__2149 = G__2179;
i__2150 = G__2180;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__2147);
if(temp__5457__auto__){
var seq__2147__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2147__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__2147__$1);
var G__2181 = cljs.core.chunk_rest(seq__2147__$1);
var G__2182 = c__4338__auto__;
var G__2183 = cljs.core.count(c__4338__auto__);
var G__2184 = (0);
seq__2147 = G__2181;
chunk__2148 = G__2182;
count__2149 = G__2183;
i__2150 = G__2184;
continue;
} else {
var vec__2154 = cljs.core.first(seq__2147__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2154,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2154,(1),null);
var temp__5455__auto___2185 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___2185)){
var effect_fn_2186 = temp__5455__auto___2185;
(effect_fn_2186.cljs$core$IFn$_invoke$arity$1 ? effect_fn_2186.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_2186.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__2187 = cljs.core.next(seq__2147__$1);
var G__2188 = null;
var G__2189 = (0);
var G__2190 = (0);
seq__2147 = G__2187;
chunk__2148 = G__2188;
count__2149 = G__2189;
i__2150 = G__2190;
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
var seq__2191 = cljs.core.seq(value);
var chunk__2192 = null;
var count__2193 = (0);
var i__2194 = (0);
while(true){
if((i__2194 < count__2193)){
var map__2195 = chunk__2192.cljs$core$IIndexed$_nth$arity$2(null,i__2194);
var map__2195__$1 = ((((!((map__2195 == null)))?(((((map__2195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2195):map__2195);
var effect = map__2195__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2195__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2195__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__2191,chunk__2192,count__2193,i__2194,map__2195,map__2195__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__2191,chunk__2192,count__2193,i__2194,map__2195,map__2195__$1,effect,ms,dispatch))
,ms);
}


var G__2199 = seq__2191;
var G__2200 = chunk__2192;
var G__2201 = count__2193;
var G__2202 = (i__2194 + (1));
seq__2191 = G__2199;
chunk__2192 = G__2200;
count__2193 = G__2201;
i__2194 = G__2202;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__2191);
if(temp__5457__auto__){
var seq__2191__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2191__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__2191__$1);
var G__2203 = cljs.core.chunk_rest(seq__2191__$1);
var G__2204 = c__4338__auto__;
var G__2205 = cljs.core.count(c__4338__auto__);
var G__2206 = (0);
seq__2191 = G__2203;
chunk__2192 = G__2204;
count__2193 = G__2205;
i__2194 = G__2206;
continue;
} else {
var map__2197 = cljs.core.first(seq__2191__$1);
var map__2197__$1 = ((((!((map__2197 == null)))?(((((map__2197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2197):map__2197);
var effect = map__2197__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2197__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2197__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__2191,chunk__2192,count__2193,i__2194,map__2197,map__2197__$1,effect,ms,dispatch,seq__2191__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__2191,chunk__2192,count__2193,i__2194,map__2197,map__2197__$1,effect,ms,dispatch,seq__2191__$1,temp__5457__auto__))
,ms);
}


var G__2207 = cljs.core.next(seq__2191__$1);
var G__2208 = null;
var G__2209 = (0);
var G__2210 = (0);
seq__2191 = G__2207;
chunk__2192 = G__2208;
count__2193 = G__2209;
i__2194 = G__2210;
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
var seq__2211 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__2212 = null;
var count__2213 = (0);
var i__2214 = (0);
while(true){
if((i__2214 < count__2213)){
var event = chunk__2212.cljs$core$IIndexed$_nth$arity$2(null,i__2214);
re_frame.router.dispatch(event);


var G__2215 = seq__2211;
var G__2216 = chunk__2212;
var G__2217 = count__2213;
var G__2218 = (i__2214 + (1));
seq__2211 = G__2215;
chunk__2212 = G__2216;
count__2213 = G__2217;
i__2214 = G__2218;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__2211);
if(temp__5457__auto__){
var seq__2211__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2211__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__2211__$1);
var G__2219 = cljs.core.chunk_rest(seq__2211__$1);
var G__2220 = c__4338__auto__;
var G__2221 = cljs.core.count(c__4338__auto__);
var G__2222 = (0);
seq__2211 = G__2219;
chunk__2212 = G__2220;
count__2213 = G__2221;
i__2214 = G__2222;
continue;
} else {
var event = cljs.core.first(seq__2211__$1);
re_frame.router.dispatch(event);


var G__2223 = cljs.core.next(seq__2211__$1);
var G__2224 = null;
var G__2225 = (0);
var G__2226 = (0);
seq__2211 = G__2223;
chunk__2212 = G__2224;
count__2213 = G__2225;
i__2214 = G__2226;
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
var seq__2227 = cljs.core.seq(value);
var chunk__2228 = null;
var count__2229 = (0);
var i__2230 = (0);
while(true){
if((i__2230 < count__2229)){
var event = chunk__2228.cljs$core$IIndexed$_nth$arity$2(null,i__2230);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__2231 = seq__2227;
var G__2232 = chunk__2228;
var G__2233 = count__2229;
var G__2234 = (i__2230 + (1));
seq__2227 = G__2231;
chunk__2228 = G__2232;
count__2229 = G__2233;
i__2230 = G__2234;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__2227);
if(temp__5457__auto__){
var seq__2227__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2227__$1)){
var c__4338__auto__ = cljs.core.chunk_first(seq__2227__$1);
var G__2235 = cljs.core.chunk_rest(seq__2227__$1);
var G__2236 = c__4338__auto__;
var G__2237 = cljs.core.count(c__4338__auto__);
var G__2238 = (0);
seq__2227 = G__2235;
chunk__2228 = G__2236;
count__2229 = G__2237;
i__2230 = G__2238;
continue;
} else {
var event = cljs.core.first(seq__2227__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__2239 = cljs.core.next(seq__2227__$1);
var G__2240 = null;
var G__2241 = (0);
var G__2242 = (0);
seq__2227 = G__2239;
chunk__2228 = G__2240;
count__2229 = G__2241;
i__2230 = G__2242;
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
