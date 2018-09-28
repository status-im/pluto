// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('pluto.storage.ipfs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('pluto.storage');
pluto.storage.ipfs.result = (function pluto$storage$ipfs$result(xhr){
var status = xhr.status;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((404),status)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$value,status], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$success,cljs.core.cst$kw$value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,xhr.responseText], null)], null)], null);
}
});
pluto.storage.ipfs.infura_url = (function pluto$storage$ipfs$infura_url(hash){
return ["https://ipfs.infura.io/ipfs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join('');
});

/**
* @constructor
 * @implements {pluto.storage.Storage}
*/
pluto.storage.ipfs.IPFSStorage = (function (){
});
pluto.storage.ipfs.IPFSStorage.prototype.pluto$storage$Storage$ = cljs.core.PROTOCOL_SENTINEL;

pluto.storage.ipfs.IPFSStorage.prototype.pluto$storage$Storage$fetch$arity$3 = (function (_,p__1336,callback){
var self__ = this;
var map__1337 = p__1336;
var map__1337__$1 = ((((!((map__1337 == null)))?(((((map__1337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1337):map__1337);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1337__$1,cljs.core.cst$kw$value);
var ___$1 = this;
var xhr = (new XMLHttpRequest());
xhr.open("GET",pluto.storage.ipfs.infura_url(value),true);

xhr.send(null);

return xhr.onreadystatechange = ((function (xhr,___$1,map__1337,map__1337__$1,value){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.readyState,(4))){
var G__1339 = pluto.storage.ipfs.result(xhr);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__1339) : callback.call(null,G__1339));
} else {
return null;
}
});})(xhr,___$1,map__1337,map__1337__$1,value))
;
});

pluto.storage.ipfs.IPFSStorage.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

pluto.storage.ipfs.IPFSStorage.cljs$lang$type = true;

pluto.storage.ipfs.IPFSStorage.cljs$lang$ctorStr = "pluto.storage.ipfs/IPFSStorage";

pluto.storage.ipfs.IPFSStorage.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"pluto.storage.ipfs/IPFSStorage");
});

/**
 * Positional factory function for pluto.storage.ipfs/IPFSStorage.
 */
pluto.storage.ipfs.__GT_IPFSStorage = (function pluto$storage$ipfs$__GT_IPFSStorage(){
return (new pluto.storage.ipfs.IPFSStorage());
});
