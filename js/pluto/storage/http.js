// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('pluto.storage.http');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pluto.storage');
pluto.storage.http.result = (function pluto$storage$http$result(xhr){
var status = xhr.status;
var content = xhr.responseText;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$success,cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,content], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$content,content], null)], null);
}
});
pluto.storage.http.default_timeout = (5000);
pluto.storage.http.get_url = (function pluto$storage$http$get_url(url,callback){
var xhr = (new XMLHttpRequest());
xhr.timeout = pluto.storage.http.default_timeout;

xhr.open("GET",url,true);

xhr.send(null);

return xhr.onreadystatechange = ((function (xhr){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.readyState,(4))){
var G__1182 = pluto.storage.http.result(xhr);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__1182) : callback.call(null,G__1182));
} else {
return null;
}
});})(xhr))
;
});

/**
* @constructor
 * @implements {pluto.storage.Storage}
*/
pluto.storage.http.HTTPStorage = (function (){
});
pluto.storage.http.HTTPStorage.prototype.pluto$storage$Storage$ = cljs.core.PROTOCOL_SENTINEL;

pluto.storage.http.HTTPStorage.prototype.pluto$storage$Storage$fetch$arity$3 = (function (_,p__1183,callback){
var self__ = this;
var map__1184 = p__1183;
var map__1184__$1 = (((((!((map__1184 == null))))?(((((map__1184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1184):map__1184);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1184__$1,cljs.core.cst$kw$value);
var ___$1 = this;
return pluto.storage.http.get_url([cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"/extension.edn"].join(''),callback);
});

pluto.storage.http.HTTPStorage.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

pluto.storage.http.HTTPStorage.cljs$lang$type = true;

pluto.storage.http.HTTPStorage.cljs$lang$ctorStr = "pluto.storage.http/HTTPStorage";

pluto.storage.http.HTTPStorage.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"pluto.storage.http/HTTPStorage");
});

/**
 * Positional factory function for pluto.storage.http/HTTPStorage.
 */
pluto.storage.http.__GT_HTTPStorage = (function pluto$storage$http$__GT_HTTPStorage(){
return (new pluto.storage.http.HTTPStorage());
});

