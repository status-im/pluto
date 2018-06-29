// Compiled by ClojureScript 1.10.329 {}
goog.provide('pluto.storage.http');
goog.require('cljs.core');
goog.require('pluto.storage');
pluto.storage.http.result = (function pluto$storage$http$result(xhr){
var status = xhr.status;
if(cljs.core._EQ_.call(null,(404),status)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"value","value",305978217),status], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),xhr.responseText], null)], null)], null);
}
});

/**
* @constructor
 * @implements {pluto.storage.Storage}
*/
pluto.storage.http.HTTPStorage = (function (){
});
pluto.storage.http.HTTPStorage.prototype.pluto$storage$Storage$ = cljs.core.PROTOCOL_SENTINEL;

pluto.storage.http.HTTPStorage.prototype.pluto$storage$Storage$fetch$arity$3 = (function (_,p__2440,callback){
var self__ = this;
var map__2441 = p__2440;
var map__2441__$1 = ((((!((map__2441 == null)))?(((((map__2441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2441):map__2441);
var value = cljs.core.get.call(null,map__2441__$1,new cljs.core.Keyword(null,"value","value",305978217));
var ___$1 = this;
var xhr = (new XMLHttpRequest());
xhr.open("GET",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"/extension.edn"].join(''),true);

xhr.send(null);

return xhr.onreadystatechange = ((function (xhr,___$1,map__2441,map__2441__$1,value){
return (function (){
if(cljs.core._EQ_.call(null,xhr.readyState,(4))){
return callback.call(null,pluto.storage.http.result.call(null,xhr));
} else {
return null;
}
});})(xhr,___$1,map__2441,map__2441__$1,value))
;
});

pluto.storage.http.HTTPStorage.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

pluto.storage.http.HTTPStorage.cljs$lang$type = true;

pluto.storage.http.HTTPStorage.cljs$lang$ctorStr = "pluto.storage.http/HTTPStorage";

pluto.storage.http.HTTPStorage.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"pluto.storage.http/HTTPStorage");
});

/**
 * Positional factory function for pluto.storage.http/HTTPStorage.
 */
pluto.storage.http.__GT_HTTPStorage = (function pluto$storage$http$__GT_HTTPStorage(){
return (new pluto.storage.http.HTTPStorage());
});

