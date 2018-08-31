// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('pluto.storage.ipfs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('pluto.storage');
pluto.storage.ipfs.ipfs__GT_extension = (function pluto$storage$ipfs$ipfs__GT_extension(ipfs_extension){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$extension_DASH_id,cljs.core.cst$kw$Hash.cljs$core$IFn$_invoke$arity$1(ipfs_extension),cljs.core.cst$kw$name,cljs.core.cst$kw$Name.cljs$core$IFn$_invoke$arity$1(ipfs_extension)], null);
});
pluto.storage.ipfs.parse_directory = (function pluto$storage$ipfs$parse_directory(response){
if(clojure.string.blank_QMARK_(response)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(pluto.storage.ipfs.ipfs__GT_extension,cljs.core.cst$kw$Links.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$Objects.cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(response),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0))))));
}
});
pluto.storage.ipfs.fetch_promise = (function pluto$storage$ipfs$fetch_promise(url){
return (new Promise((function (resolve,reject){
var xhr = (new XMLHttpRequest());
xhr.open("GET",url,true);

xhr.timeout = (2000);

xhr.ontimeout = ((function (xhr){
return (function (){
var G__1277 = cljs.core.cst$kw$timeout;
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__1277) : reject.call(null,G__1277));
});})(xhr))
;

xhr.send(null);

return xhr.onload = ((function (xhr){
return (function (){
var G__1278 = xhr.responseText;
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__1278) : resolve.call(null,G__1278));
});})(xhr))
;
})));
});
pluto.storage.ipfs.list_all = (function pluto$storage$ipfs$list_all(gateway_url,directory){
return pluto.storage.ipfs.fetch_promise([cljs.core.str.cljs$core$IFn$_invoke$arity$1(gateway_url),"/api/v0/ls?arg=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directory)].join(''));
});
pluto.storage.ipfs.fetch = (function pluto$storage$ipfs$fetch(gateway_url,extension){
return pluto.storage.ipfs.fetch_promise([cljs.core.str.cljs$core$IFn$_invoke$arity$1(gateway_url),"/api/v0/cat?arg=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$extension_DASH_id.cljs$core$IFn$_invoke$arity$1(extension))].join('')).then((function (content){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(extension,cljs.core.cst$kw$content,content);
}));
});
pluto.storage.ipfs.fetch_all = (function pluto$storage$ipfs$fetch_all(gateway_url,extensions){
var promises = Promise.all(cljs.core.clj__GT_js(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__1279_SHARP_){
return pluto.storage.ipfs.fetch(gateway_url,p1__1279_SHARP_);
}),extensions)));
return promises.then(((function (promises){
return (function (p1__1280_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__1280_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
});})(promises))
);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {pluto.storage.Storage}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
pluto.storage.ipfs.IPFSStorage = (function (gateway_url,__meta,__extmap,__hash){
this.gateway_url = gateway_url;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
pluto.storage.ipfs.IPFSStorage.prototype.pluto$storage$Storage$ = cljs.core.PROTOCOL_SENTINEL;

pluto.storage.ipfs.IPFSStorage.prototype.pluto$storage$Storage$fetch$arity$3 = (function (_,extension,callback){
var self__ = this;
var ___$1 = this;
return pluto.storage.ipfs.list_all(self__.gateway_url,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(extension)).then(pluto.storage.ipfs.parse_directory).then(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(pluto.storage.ipfs.fetch_all,self__.gateway_url)).then(((function (___$1){
return (function (p1__1281_SHARP_){
var G__1288 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$success,cljs.core.cst$kw$value,p1__1281_SHARP_], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__1288) : callback.call(null,G__1288));
});})(___$1))
,((function (___$1){
return (function (p1__1282_SHARP_){
var G__1289 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$value,p1__1282_SHARP_], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__1289) : callback.call(null,G__1289));
});})(___$1))
);
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4190__auto__,k__4191__auto__){
var self__ = this;
var this__4190__auto____$1 = this;
return this__4190__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4191__auto__,null);
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4192__auto__,k1284,else__4193__auto__){
var self__ = this;
var this__4192__auto____$1 = this;
var G__1290 = k1284;
var G__1290__$1 = (((G__1290 instanceof cljs.core.Keyword))?G__1290.fqn:null);
switch (G__1290__$1) {
case "gateway-url":
return self__.gateway_url;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k1284,else__4193__auto__);

}
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4204__auto__,writer__4205__auto__,opts__4206__auto__){
var self__ = this;
var this__4204__auto____$1 = this;
var pr_pair__4207__auto__ = ((function (this__4204__auto____$1){
return (function (keyval__4208__auto__){
return cljs.core.pr_sequential_writer(writer__4205__auto__,cljs.core.pr_writer,""," ","",opts__4206__auto__,keyval__4208__auto__);
});})(this__4204__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4205__auto__,pr_pair__4207__auto__,"#pluto.storage.ipfs.IPFSStorage{",", ","}",opts__4206__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$gateway_DASH_url,self__.gateway_url],null))], null),self__.__extmap));
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1283){
var self__ = this;
var G__1283__$1 = this;
return (new cljs.core.RecordIter((0),G__1283__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gateway_DASH_url], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4188__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
return self__.__meta;
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4185__auto__){
var self__ = this;
var this__4185__auto____$1 = this;
return (new pluto.storage.ipfs.IPFSStorage(self__.gateway_url,self__.__meta,self__.__extmap,self__.__hash));
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4194__auto__){
var self__ = this;
var this__4194__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var h__4048__auto__ = self__.__hash;
if(!((h__4048__auto__ == null))){
return h__4048__auto__;
} else {
var h__4048__auto____$1 = (function (){var fexpr__1291 = ((function (h__4048__auto__,this__4186__auto____$1){
return (function (coll__4187__auto__){
return (-122252959 ^ cljs.core.hash_unordered_coll(coll__4187__auto__));
});})(h__4048__auto__,this__4186__auto____$1))
;
return fexpr__1291(this__4186__auto____$1);
})();
self__.__hash = h__4048__auto____$1;

return h__4048__auto____$1;
}
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1285,other1286){
var self__ = this;
var this1285__$1 = this;
return ((!((other1286 == null))) && ((this1285__$1.constructor === other1286.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1285__$1.gateway_url,other1286.gateway_url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1285__$1.__extmap,other1286.__extmap)));
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4199__auto__,k__4200__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$gateway_DASH_url,null], null), null),k__4200__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4199__auto____$1),self__.__meta),k__4200__auto__);
} else {
return (new pluto.storage.ipfs.IPFSStorage(self__.gateway_url,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4200__auto__)),null));
}
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4197__auto__,k__4198__auto__,G__1283){
var self__ = this;
var this__4197__auto____$1 = this;
var pred__1292 = cljs.core.keyword_identical_QMARK_;
var expr__1293 = k__4198__auto__;
if(cljs.core.truth_((function (){var G__1295 = cljs.core.cst$kw$gateway_DASH_url;
var G__1296 = expr__1293;
return (pred__1292.cljs$core$IFn$_invoke$arity$2 ? pred__1292.cljs$core$IFn$_invoke$arity$2(G__1295,G__1296) : pred__1292.call(null,G__1295,G__1296));
})())){
return (new pluto.storage.ipfs.IPFSStorage(G__1283,self__.__meta,self__.__extmap,null));
} else {
return (new pluto.storage.ipfs.IPFSStorage(self__.gateway_url,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4198__auto__,G__1283),null));
}
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4202__auto__){
var self__ = this;
var this__4202__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$gateway_DASH_url,self__.gateway_url,null))], null),self__.__extmap));
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4189__auto__,G__1283){
var self__ = this;
var this__4189__auto____$1 = this;
return (new pluto.storage.ipfs.IPFSStorage(self__.gateway_url,G__1283,self__.__extmap,self__.__hash));
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4195__auto__,entry__4196__auto__){
var self__ = this;
var this__4195__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4196__auto__)){
return this__4195__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4196__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4196__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4195__auto____$1,entry__4196__auto__);
}
});

pluto.storage.ipfs.IPFSStorage.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$gateway_DASH_url], null);
});

pluto.storage.ipfs.IPFSStorage.cljs$lang$type = true;

pluto.storage.ipfs.IPFSStorage.cljs$lang$ctorPrSeq = (function (this__4227__auto__){
return (new cljs.core.List(null,"pluto.storage.ipfs/IPFSStorage",null,(1),null));
});

pluto.storage.ipfs.IPFSStorage.cljs$lang$ctorPrWriter = (function (this__4227__auto__,writer__4228__auto__){
return cljs.core._write(writer__4228__auto__,"pluto.storage.ipfs/IPFSStorage");
});

/**
 * Positional factory function for pluto.storage.ipfs/IPFSStorage.
 */
pluto.storage.ipfs.__GT_IPFSStorage = (function pluto$storage$ipfs$__GT_IPFSStorage(gateway_url){
return (new pluto.storage.ipfs.IPFSStorage(gateway_url,null,null,null));
});

/**
 * Factory function for pluto.storage.ipfs/IPFSStorage, taking a map of keywords to field values.
 */
pluto.storage.ipfs.map__GT_IPFSStorage = (function pluto$storage$ipfs$map__GT_IPFSStorage(G__1287){
var extmap__4223__auto__ = (function (){var G__1297 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__1287,cljs.core.cst$kw$gateway_DASH_url);
if(cljs.core.record_QMARK_(G__1287)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__1297);
} else {
return G__1297;
}
})();
return (new pluto.storage.ipfs.IPFSStorage(cljs.core.cst$kw$gateway_DASH_url.cljs$core$IFn$_invoke$arity$1(G__1287),null,cljs.core.not_empty(extmap__4223__auto__),null));
});

