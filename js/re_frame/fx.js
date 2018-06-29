// Compiled by ClojureScript 1.10.329 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
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
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_2104 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__2105 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__2106 = null;
var count__2107 = (0);
var i__2108 = (0);
while(true){
if((i__2108 < count__2107)){
var vec__2109 = cljs.core._nth.call(null,chunk__2106,i__2108);
var effect_key = cljs.core.nth.call(null,vec__2109,(0),null);
var effect_value = cljs.core.nth.call(null,vec__2109,(1),null);
var temp__5455__auto___2125 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___2125)){
var effect_fn_2126 = temp__5455__auto___2125;
effect_fn_2126.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__2127 = seq__2105;
var G__2128 = chunk__2106;
var G__2129 = count__2107;
var G__2130 = (i__2108 + (1));
seq__2105 = G__2127;
chunk__2106 = G__2128;
count__2107 = G__2129;
i__2108 = G__2130;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__2105);
if(temp__5457__auto__){
var seq__2105__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2105__$1)){
var c__4338__auto__ = cljs.core.chunk_first.call(null,seq__2105__$1);
var G__2131 = cljs.core.chunk_rest.call(null,seq__2105__$1);
var G__2132 = c__4338__auto__;
var G__2133 = cljs.core.count.call(null,c__4338__auto__);
var G__2134 = (0);
seq__2105 = G__2131;
chunk__2106 = G__2132;
count__2107 = G__2133;
i__2108 = G__2134;
continue;
} else {
var vec__2112 = cljs.core.first.call(null,seq__2105__$1);
var effect_key = cljs.core.nth.call(null,vec__2112,(0),null);
var effect_value = cljs.core.nth.call(null,vec__2112,(1),null);
var temp__5455__auto___2135 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___2135)){
var effect_fn_2136 = temp__5455__auto___2135;
effect_fn_2136.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__2137 = cljs.core.next.call(null,seq__2105__$1);
var G__2138 = null;
var G__2139 = (0);
var G__2140 = (0);
seq__2105 = G__2137;
chunk__2106 = G__2138;
count__2107 = G__2139;
i__2108 = G__2140;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__1601__auto___2141 = re_frame.interop.now.call(null);
var duration__1602__auto___2142 = (end__1601__auto___2141 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__1602__auto___2142,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__1601__auto___2141);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_2104;
}} else {
var seq__2115 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__2116 = null;
var count__2117 = (0);
var i__2118 = (0);
while(true){
if((i__2118 < count__2117)){
var vec__2119 = cljs.core._nth.call(null,chunk__2116,i__2118);
var effect_key = cljs.core.nth.call(null,vec__2119,(0),null);
var effect_value = cljs.core.nth.call(null,vec__2119,(1),null);
var temp__5455__auto___2143 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___2143)){
var effect_fn_2144 = temp__5455__auto___2143;
effect_fn_2144.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__2145 = seq__2115;
var G__2146 = chunk__2116;
var G__2147 = count__2117;
var G__2148 = (i__2118 + (1));
seq__2115 = G__2145;
chunk__2116 = G__2146;
count__2117 = G__2147;
i__2118 = G__2148;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__2115);
if(temp__5457__auto__){
var seq__2115__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2115__$1)){
var c__4338__auto__ = cljs.core.chunk_first.call(null,seq__2115__$1);
var G__2149 = cljs.core.chunk_rest.call(null,seq__2115__$1);
var G__2150 = c__4338__auto__;
var G__2151 = cljs.core.count.call(null,c__4338__auto__);
var G__2152 = (0);
seq__2115 = G__2149;
chunk__2116 = G__2150;
count__2117 = G__2151;
i__2118 = G__2152;
continue;
} else {
var vec__2122 = cljs.core.first.call(null,seq__2115__$1);
var effect_key = cljs.core.nth.call(null,vec__2122,(0),null);
var effect_value = cljs.core.nth.call(null,vec__2122,(1),null);
var temp__5455__auto___2153 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___2153)){
var effect_fn_2154 = temp__5455__auto___2153;
effect_fn_2154.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__2155 = cljs.core.next.call(null,seq__2115__$1);
var G__2156 = null;
var G__2157 = (0);
var G__2158 = (0);
seq__2115 = G__2155;
chunk__2116 = G__2156;
count__2117 = G__2157;
i__2118 = G__2158;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__2159 = cljs.core.seq.call(null,value);
var chunk__2160 = null;
var count__2161 = (0);
var i__2162 = (0);
while(true){
if((i__2162 < count__2161)){
var map__2163 = cljs.core._nth.call(null,chunk__2160,i__2162);
var map__2163__$1 = ((((!((map__2163 == null)))?(((((map__2163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2163):map__2163);
var effect = map__2163__$1;
var ms = cljs.core.get.call(null,map__2163__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__2163__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__2159,chunk__2160,count__2161,i__2162,map__2163,map__2163__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__2159,chunk__2160,count__2161,i__2162,map__2163,map__2163__$1,effect,ms,dispatch))
,ms);
}


var G__2167 = seq__2159;
var G__2168 = chunk__2160;
var G__2169 = count__2161;
var G__2170 = (i__2162 + (1));
seq__2159 = G__2167;
chunk__2160 = G__2168;
count__2161 = G__2169;
i__2162 = G__2170;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__2159);
if(temp__5457__auto__){
var seq__2159__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2159__$1)){
var c__4338__auto__ = cljs.core.chunk_first.call(null,seq__2159__$1);
var G__2171 = cljs.core.chunk_rest.call(null,seq__2159__$1);
var G__2172 = c__4338__auto__;
var G__2173 = cljs.core.count.call(null,c__4338__auto__);
var G__2174 = (0);
seq__2159 = G__2171;
chunk__2160 = G__2172;
count__2161 = G__2173;
i__2162 = G__2174;
continue;
} else {
var map__2165 = cljs.core.first.call(null,seq__2159__$1);
var map__2165__$1 = ((((!((map__2165 == null)))?(((((map__2165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2165):map__2165);
var effect = map__2165__$1;
var ms = cljs.core.get.call(null,map__2165__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__2165__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__2159,chunk__2160,count__2161,i__2162,map__2165,map__2165__$1,effect,ms,dispatch,seq__2159__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__2159,chunk__2160,count__2161,i__2162,map__2165,map__2165__$1,effect,ms,dispatch,seq__2159__$1,temp__5457__auto__))
,ms);
}


var G__2175 = cljs.core.next.call(null,seq__2159__$1);
var G__2176 = null;
var G__2177 = (0);
var G__2178 = (0);
seq__2159 = G__2175;
chunk__2160 = G__2176;
count__2161 = G__2177;
i__2162 = G__2178;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__2179 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__2180 = null;
var count__2181 = (0);
var i__2182 = (0);
while(true){
if((i__2182 < count__2181)){
var event = cljs.core._nth.call(null,chunk__2180,i__2182);
re_frame.router.dispatch.call(null,event);


var G__2183 = seq__2179;
var G__2184 = chunk__2180;
var G__2185 = count__2181;
var G__2186 = (i__2182 + (1));
seq__2179 = G__2183;
chunk__2180 = G__2184;
count__2181 = G__2185;
i__2182 = G__2186;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__2179);
if(temp__5457__auto__){
var seq__2179__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2179__$1)){
var c__4338__auto__ = cljs.core.chunk_first.call(null,seq__2179__$1);
var G__2187 = cljs.core.chunk_rest.call(null,seq__2179__$1);
var G__2188 = c__4338__auto__;
var G__2189 = cljs.core.count.call(null,c__4338__auto__);
var G__2190 = (0);
seq__2179 = G__2187;
chunk__2180 = G__2188;
count__2181 = G__2189;
i__2182 = G__2190;
continue;
} else {
var event = cljs.core.first.call(null,seq__2179__$1);
re_frame.router.dispatch.call(null,event);


var G__2191 = cljs.core.next.call(null,seq__2179__$1);
var G__2192 = null;
var G__2193 = (0);
var G__2194 = (0);
seq__2179 = G__2191;
chunk__2180 = G__2192;
count__2181 = G__2193;
i__2182 = G__2194;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__2195 = cljs.core.seq.call(null,value);
var chunk__2196 = null;
var count__2197 = (0);
var i__2198 = (0);
while(true){
if((i__2198 < count__2197)){
var event = cljs.core._nth.call(null,chunk__2196,i__2198);
clear_event.call(null,event);


var G__2199 = seq__2195;
var G__2200 = chunk__2196;
var G__2201 = count__2197;
var G__2202 = (i__2198 + (1));
seq__2195 = G__2199;
chunk__2196 = G__2200;
count__2197 = G__2201;
i__2198 = G__2202;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__2195);
if(temp__5457__auto__){
var seq__2195__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2195__$1)){
var c__4338__auto__ = cljs.core.chunk_first.call(null,seq__2195__$1);
var G__2203 = cljs.core.chunk_rest.call(null,seq__2195__$1);
var G__2204 = c__4338__auto__;
var G__2205 = cljs.core.count.call(null,c__4338__auto__);
var G__2206 = (0);
seq__2195 = G__2203;
chunk__2196 = G__2204;
count__2197 = G__2205;
i__2198 = G__2206;
continue;
} else {
var event = cljs.core.first.call(null,seq__2195__$1);
clear_event.call(null,event);


var G__2207 = cljs.core.next.call(null,seq__2195__$1);
var G__2208 = null;
var G__2209 = (0);
var G__2210 = (0);
seq__2195 = G__2207;
chunk__2196 = G__2208;
count__2197 = G__2209;
i__2198 = G__2210;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));
