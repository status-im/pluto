// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('pluto.host');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * Protocol which every extension point in application should implement.
 * @interface
 */
pluto.host.AppHook = function(){};

/**
 * Keyword representing id of an extension point.
 */
pluto.host.id = (function pluto$host$id(this$){
if(((!((this$ == null))) && (!((this$.pluto$host$AppHook$id$arity$1 == null))))){
return this$.pluto$host$AppHook$id$arity$1(this$);
} else {
var x__4230__auto__ = (((this$ == null))?null:this$);
var m__4231__auto__ = (pluto.host.id[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4231__auto__.call(null,this$));
} else {
var m__4231__auto____$1 = (pluto.host.id["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4231__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("AppHook.id",this$);
}
}
}
});

/**
 * Map of properties used to validate extensions leveraging the hook.
 */
pluto.host.properties = (function pluto$host$properties(this$){
if(((!((this$ == null))) && (!((this$.pluto$host$AppHook$properties$arity$1 == null))))){
return this$.pluto$host$AppHook$properties$arity$1(this$);
} else {
var x__4230__auto__ = (((this$ == null))?null:this$);
var m__4231__auto__ = (pluto.host.properties[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4231__auto__.call(null,this$));
} else {
var m__4231__auto____$1 = (pluto.host.properties["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4231__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("AppHook.properties",this$);
}
}
}
});

/**
 * Pluto will call this method with hook id and parsed hook data to hook it into host app.
 */
pluto.host.hook_in = (function pluto$host$hook_in(this$,id,properties,cofx){
if(((!((this$ == null))) && (!((this$.pluto$host$AppHook$hook_in$arity$4 == null))))){
return this$.pluto$host$AppHook$hook_in$arity$4(this$,id,properties,cofx);
} else {
var x__4230__auto__ = (((this$ == null))?null:this$);
var m__4231__auto__ = (pluto.host.hook_in[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$4(this$,id,properties,cofx) : m__4231__auto__.call(null,this$,id,properties,cofx));
} else {
var m__4231__auto____$1 = (pluto.host.hook_in["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,id,properties,cofx) : m__4231__auto____$1.call(null,this$,id,properties,cofx));
} else {
throw cljs.core.missing_protocol("AppHook.hook-in",this$);
}
}
}
});

/**
 * Pluto will call this method with hook id to remove extension hook from app.
 */
pluto.host.unhook = (function pluto$host$unhook(this$,id,properties,cofx){
if(((!((this$ == null))) && (!((this$.pluto$host$AppHook$unhook$arity$4 == null))))){
return this$.pluto$host$AppHook$unhook$arity$4(this$,id,properties,cofx);
} else {
var x__4230__auto__ = (((this$ == null))?null:this$);
var m__4231__auto__ = (pluto.host.unhook[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$4(this$,id,properties,cofx) : m__4231__auto__.call(null,this$,id,properties,cofx));
} else {
var m__4231__auto____$1 = (pluto.host.unhook["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,id,properties,cofx) : m__4231__auto____$1.call(null,this$,id,properties,cofx));
} else {
throw cljs.core.missing_protocol("AppHook.unhook",this$);
}
}
}
});

