// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.hooks');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('pluto.reader.errors');
goog.require('pluto.reader.types');

/**
 * Encapsulate hook lifecycle.
 * @interface
 */
pluto.reader.hooks.Hook = function(){};

/**
 * Hook it into host app.
 */
pluto.reader.hooks.hook_in = (function pluto$reader$hooks$hook_in(this$,id,properties,cofx){
if((((!((this$ == null)))) && ((!((this$.pluto$reader$hooks$Hook$hook_in$arity$4 == null)))))){
return this$.pluto$reader$hooks$Hook$hook_in$arity$4(this$,id,properties,cofx);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (pluto.reader.hooks.hook_in[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$4(this$,id,properties,cofx) : m__4348__auto__.call(null,this$,id,properties,cofx));
} else {
var m__4348__auto____$1 = (pluto.reader.hooks.hook_in["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,id,properties,cofx) : m__4348__auto____$1.call(null,this$,id,properties,cofx));
} else {
throw cljs.core.missing_protocol("Hook.hook-in",this$);
}
}
}
});

/**
 * Remove extension hook from app.
 */
pluto.reader.hooks.unhook = (function pluto$reader$hooks$unhook(this$,id,properties,cofx){
if((((!((this$ == null)))) && ((!((this$.pluto$reader$hooks$Hook$unhook$arity$4 == null)))))){
return this$.pluto$reader$hooks$Hook$unhook$arity$4(this$,id,properties,cofx);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (pluto.reader.hooks.unhook[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$4(this$,id,properties,cofx) : m__4348__auto__.call(null,this$,id,properties,cofx));
} else {
var m__4348__auto____$1 = (pluto.reader.hooks.unhook["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,id,properties,cofx) : m__4348__auto____$1.call(null,this$,id,properties,cofx));
} else {
throw cljs.core.missing_protocol("Hook.unhook",this$);
}
}
}
});

pluto.reader.hooks.hook_QMARK_ = (function pluto$reader$hooks$hook_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("hooks",cljs.core.namespace(s));
});
pluto.reader.hooks.hooks = (function pluto$reader$hooks$hooks(ext){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pluto.reader.hooks.hook_QMARK_,cljs.core.keys(ext));
});
pluto.reader.hooks.local_id = (function pluto$reader$hooks$local_id(s){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.rest(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(s),/\./))));
});
pluto.reader.hooks.root_id = (function pluto$reader$hooks$root_id(s){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(s),/\./)));
});
pluto.reader.hooks.parse = (function pluto$reader$hooks$parse(ctx,ext){
return cljs.core.reduce_kv((function (acc,hook_key,data){
var hook_id = pluto.reader.hooks.local_id(hook_key);
var hook_root = pluto.reader.hooks.root_id(hook_key);
var map__6618 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$hooks,hook_root], null));
var map__6618__$1 = (((((!((map__6618 == null))))?(((((map__6618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6618):map__6618);
var hook = map__6618__$1;
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6618__$1,cljs.core.cst$kw$properties);
var map__6619 = (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,properties,data) : pluto.reader.types.resolve.call(null,ctx,ext,properties,data));
var map__6619__$1 = (((((!((map__6619 == null))))?(((((map__6619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6619):map__6619);
var m = map__6619__$1;
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6619__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6619__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(cljs.core.assoc_in(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$kw$hooks,hook_root,hook_id,cljs.core.cst$kw$parsed], null),data__$1),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$kw$hooks,hook_root,hook_id,cljs.core.cst$kw$hook_DASH_ref], null),hook),errors);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.select_keys(ext,pluto.reader.hooks.hooks(ext)));
});
