// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('pluto.reader.destructuring');
goog.require('pluto.reader.errors');
goog.require('pluto.reader.reference');
goog.require('pluto.reader.types');
goog.require('pluto.utils');
pluto.reader.events.replace_atom = (function pluto$reader$events$replace_atom(env,o){
if(cljs.core.contains_QMARK_(env,o)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,o);
} else {
if((o instanceof cljs.core.Symbol)){
return null;
} else {
if(typeof o === 'string'){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(pluto.utils.interpolate(env,o));
} else {
if(cljs.core.fn_QMARK_(o)){
return (function (p1__778_SHARP_){
return (o.cljs$core$IFn$_invoke$arity$2 ? o.cljs$core$IFn$_invoke$arity$2(p1__778_SHARP_,env) : o.call(null,p1__778_SHARP_,env));
});
} else {
return clojure.walk.postwalk_replace(env,o);

}
}
}
}
});
/**
 * Resolve pairs from `env` in `m`.
 * Uses #replace-atom to perform the resolution.
 */
pluto.reader.events.resolve_env = (function pluto$reader$events$resolve_env(env,m){
return cljs.core.reduce_kv((function (p1__779_SHARP_,p2__780_SHARP_,p3__781_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__779_SHARP_,p2__780_SHARP_,pluto.reader.events.replace_atom(env,p3__781_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * Resolve an event arguments based on event definition
 */
pluto.reader.events.resolve_arguments = (function pluto$reader$events$resolve_arguments(ctx,ext,event,arguments$){
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$events,event,cljs.core.cst$kw$arguments], null));
if(cljs.core.truth_(temp__5718__auto__)){
var type = temp__5718__auto__;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,type,arguments$) : pluto.reader.types.resolve.call(null,ctx,ext,type,arguments$));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_missing_DASH_reference_DASH_arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$event,cljs.core.cst$kw$value,event], null))], null)], null);
}
});
/**
 * Dispatches an event using ctx
 */
pluto.reader.events.dispatch_events = (function pluto$reader$events$dispatch_events(ctx,events){
var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$kw$event_DASH_fn], null));
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
if(cljs.core.seq(events)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(events) : f.call(null,events));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Empty event dispatched"], 0));
}
} else {
return null;
}
});
pluto.reader.events.create_event = (function pluto$reader$events$create_event(ctx,env,p__782){
var map__783 = p__782;
var map__783__$1 = (((((!((map__783 == null))))?(((((map__783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__783):map__783);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__783__$1,cljs.core.cst$kw$data);
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__783__$1,cljs.core.cst$kw$inline);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),pluto.reader.events.resolve_env(env,inline)], null);
});
pluto.reader.events.create_ref = (function pluto$reader$events$create_ref(ctx,ext,p__785){
var vec__786 = p__785;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__786,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__786,(1),null);
var reference = vec__786;
var map__789 = pluto.reader.reference.resolve(ctx,ext,cljs.core.cst$kw$event,reference);
var map__789__$1 = (((((!((map__789 == null))))?(((((map__789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__789):map__789);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__789__$1,cljs.core.cst$kw$data);
var errors1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__789__$1,cljs.core.cst$kw$errors);
var map__790 = pluto.reader.events.resolve_arguments(ctx,ext,event,(function (){var or__4047__auto__ = args;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var map__790__$1 = (((((!((map__790 == null))))?(((((map__790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__790):map__790);
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__790__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__790__$1,cljs.core.cst$kw$errors);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data,data,cljs.core.cst$kw$inline,inline,cljs.core.cst$kw$errors,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(errors,errors1)], null);
});
/**
 * Resolve a query using ctx
 */
pluto.reader.events.resolve_query = (function pluto$reader$events$resolve_query(ctx,ext,query){
var map__793 = (function (){var G__794 = ctx;
var G__795 = ext;
var G__796 = cljs.core.cst$kw$query;
var G__797 = query;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__794,G__795,G__796,G__797) : pluto.reader.types.resolve.call(null,G__794,G__795,G__796,G__797));
})();
var map__793__$1 = (((((!((map__793 == null))))?(((((map__793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__793):map__793);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__793__$1,cljs.core.cst$kw$data);
var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$kw$query_DASH_fn], null));
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
var temp__5720__auto____$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(data) : f.call(null,data));
if(cljs.core.truth_(temp__5720__auto____$1)){
var signal = temp__5720__auto____$1;
return cljs.core.deref(signal);
} else {
return null;
}
} else {
return null;
}
});
pluto.reader.events.merge_resolved_query = (function pluto$reader$events$merge_resolved_query(ctx,ext,m,p__799){
var map__800 = p__799;
var map__800__$1 = (((((!((map__800 == null))))?(((((map__800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__800):map__800);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__800__$1,cljs.core.cst$kw$value);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__800__$1,cljs.core.cst$kw$bindings);
if(cljs.core.map_QMARK_(bindings)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(pluto.reader.destructuring.destructure(bindings,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,pluto.reader.events.resolve_query(ctx,ext,value)], 0))))], 0));
} else {
if((bindings instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,bindings,pluto.reader.events.resolve_query(ctx,ext,value));
} else {
return null;
}
}
});
/**
 * Returns a function of 2 arguments 
 */
pluto.reader.events.event_dispatcher = (function pluto$reader$events$event_dispatcher(ctx,ext,refs,arguments$,p__806){
var map__807 = p__806;
var map__807__$1 = (((((!((map__807 == null))))?(((((map__807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__807):map__807);
var queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__807__$1,cljs.core.cst$kw$queries);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__807__$1,cljs.core.cst$kw$properties);
var ref = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__807,map__807__$1,queries,properties){
return (function (p1__802_SHARP_){
return pluto.reader.events.create_ref(ctx,ext,p1__802_SHARP_);
});})(map__807,map__807__$1,queries,properties))
,refs);
return pluto.reader.errors.merge_errors(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.with_meta(((function (ref,map__807,map__807__$1,queries,properties){
return (function (dynamic,env){
var map__809 = pluto.reader.destructuring.destructure(properties,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dynamic,arguments$], 0)));
var map__809__$1 = (((((!((map__809 == null))))?(((((map__809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__809):map__809);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__809__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__809__$1,cljs.core.cst$kw$errors);
var env_SINGLEQUOTE_ = pluto.reader.events.resolve_env(env,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__809,map__809__$1,data,errors,ref,map__807,map__807__$1,queries,properties){
return (function (p1__803_SHARP_,p2__804_SHARP_){
return pluto.reader.events.merge_resolved_query(ctx,ext,p1__803_SHARP_,p2__804_SHARP_);
});})(map__809,map__809__$1,data,errors,ref,map__807,map__807__$1,queries,properties))
,data,queries)], 0)));
return pluto.reader.events.dispatch_events(ctx,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (env_SINGLEQUOTE_,map__809,map__809__$1,data,errors,ref,map__807,map__807__$1,queries,properties){
return (function (p1__805_SHARP_){
return pluto.reader.events.create_event(ctx,env_SINGLEQUOTE_,p1__805_SHARP_);
});})(env_SINGLEQUOTE_,map__809,map__809__$1,data,errors,ref,map__807,map__807__$1,queries,properties))
,ref));
});})(ref,map__807,map__807__$1,queries,properties))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,true], null))], null),null);
});
/**
 * Returns a list of local event references
 */
pluto.reader.events.references = (function pluto$reader$events$references(data){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),data);
});
/**
 * A local event must define a let block and have a single destructuring binding accessing 'properties.
 */
pluto.reader.events.local_event_QMARK_ = (function pluto$reader$events$local_event_QMARK_(data){
if(cljs.core.list_QMARK_(data)){
var vec__811 = data;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__811,(0),null);
var bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__811,(1),null);
return ((((2) < cljs.core.count(data))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$let,form)) && (cljs.core.even_QMARK_(cljs.core.count(bindings))) && (cljs.core.map_QMARK_(cljs.core.first(bindings))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$properties,cljs.core.second(bindings))) && (cljs.core.every_QMARK_(pluto.reader.reference.reference_QMARK_,pluto.reader.events.references(data))));
} else {
return null;
}
});
pluto.reader.events.merge_pair = (function pluto$reader$events$merge_pair(m,p__814){
var vec__815 = p__814;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__815,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__815,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$sym$properties)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$properties,k);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,cljs.core.cst$kw$queries,cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,v,cljs.core.cst$kw$bindings,k], null)], null));

}
});
pluto.reader.events.parse_let_bindings = (function pluto$reader$events$parse_let_bindings(bindings){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(pluto.reader.events.merge_pair,cljs.core.PersistentArrayMap.EMPTY,pairs);
});
/**
 * Parses local references defining let blocks
 */
pluto.reader.events.parse = (function pluto$reader$events$parse(ctx,ext,p__818,arguments$){
var vec__819 = p__818;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__819,(0),null);
var let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__819,(1),null);
var local = vec__819;
if(cljs.core.truth_(pluto.reader.events.local_event_QMARK_(local))){
return pluto.reader.events.event_dispatcher(ctx,ext,pluto.reader.events.references(local),arguments$,pluto.reader.events.parse_let_bindings(let_bindings));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_local_DASH_event,local)], null)], null);
}
});
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$event,(function (ctx,ext,_,p__822){
var vec__823 = p__822;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__823,(0),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__823,(1),null);
var value = vec__823;
var map__826 = pluto.reader.reference.resolve(ctx,ext,cljs.core.cst$kw$event,value);
var map__826__$1 = (((((!((map__826 == null))))?(((((map__826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__826):map__826);
var m = map__826__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__826__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__826__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(data)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(data)?(((data instanceof cljs.core.Keyword))?pluto.reader.events.event_dispatcher(ctx,ext,(new cljs.core.List(null,value,null,(1),null)),arguments$,null):pluto.reader.events.parse(ctx,ext,data,arguments$)):null),(cljs.core.truth_(errors)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_event,cljs.core.symbol)], null),errors)], null):null)], 0));
} else {
return m;
}
}));
