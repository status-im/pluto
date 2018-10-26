// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('pluto.storage.gist');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pluto.storage');
pluto.storage.gist.result = (function pluto$storage$gist$result(xhr){
var status = xhr.status;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((404),status)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$value,status], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$success,cljs.core.cst$kw$value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,xhr.responseText], null)], null)], null);
}
});
pluto.storage.gist.gist_url = (function pluto$storage$gist$gist_url(id){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/raw"].join('');
});

/**
* @constructor
 * @implements {pluto.storage.Storage}
*/
pluto.storage.gist.GistStorage = (function (){
});
pluto.storage.gist.GistStorage.prototype.pluto$storage$Storage$ = cljs.core.PROTOCOL_SENTINEL;

pluto.storage.gist.GistStorage.prototype.pluto$storage$Storage$fetch$arity$3 = (function (_,p__2327,callback){
var self__ = this;
var map__2328 = p__2327;
var map__2328__$1 = ((((!((map__2328 == null)))?(((((map__2328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2328):map__2328);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2328__$1,cljs.core.cst$kw$value);
var ___$1 = this;
var xhr = (new XMLHttpRequest());
xhr.open("GET",pluto.storage.gist.gist_url(value),true);

xhr.send(null);

return xhr.onreadystatechange = ((function (xhr,___$1,map__2328,map__2328__$1,value){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.readyState,(4))){
var G__2330 = pluto.storage.gist.result(xhr);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__2330) : callback.call(null,G__2330));
} else {
return null;
}
});})(xhr,___$1,map__2328,map__2328__$1,value))
;
});

pluto.storage.gist.GistStorage.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

pluto.storage.gist.GistStorage.cljs$lang$type = true;

pluto.storage.gist.GistStorage.cljs$lang$ctorStr = "pluto.storage.gist/GistStorage";

pluto.storage.gist.GistStorage.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"pluto.storage.gist/GistStorage");
});

/**
 * Positional factory function for pluto.storage.gist/GistStorage.
 */
pluto.storage.gist.__GT_GistStorage = (function pluto$storage$gist$__GT_GistStorage(){
return (new pluto.storage.gist.GistStorage());
});

