// Compiled by ClojureScript 1.10.329 {}
goog.provide('pluto.storage');
goog.require('cljs.core');

/**
 * 
 * @interface
 */
pluto.storage.Storage = function(){};

pluto.storage.fetch = (function pluto$storage$fetch(this$,id,callback){
if(((!((this$ == null))) && (!((this$.pluto$storage$Storage$fetch$arity$3 == null))))){
return this$.pluto$storage$Storage$fetch$arity$3(this$,id,callback);
} else {
var x__4230__auto__ = (((this$ == null))?null:this$);
var m__4231__auto__ = (pluto.storage.fetch[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return m__4231__auto__.call(null,this$,id,callback);
} else {
var m__4231__auto____$1 = (pluto.storage.fetch["_"]);
if(!((m__4231__auto____$1 == null))){
return m__4231__auto____$1.call(null,this$,id,callback);
} else {
throw cljs.core.missing_protocol.call(null,"Storage.fetch",this$);
}
}
}
});

