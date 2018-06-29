// Compiled by ClojureScript 1.10.329 {}
goog.provide('pluto.storage.ipfs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('pluto.storage');
pluto.storage.ipfs.ipfs__GT_extension = (function pluto$storage$ipfs$ipfs__GT_extension(ipfs_extension){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extension-id","extension-id",-629939786),new cljs.core.Keyword(null,"Hash","Hash",-72757482).cljs$core$IFn$_invoke$arity$1(ipfs_extension),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(ipfs_extension)], null);
});
pluto.storage.ipfs.parse_directory = (function pluto$storage$ipfs$parse_directory(response){
if(clojure.string.blank_QMARK_.call(null,response)){
return null;
} else {
return cljs.core.map.call(null,pluto.storage.ipfs.ipfs__GT_extension,new cljs.core.Keyword(null,"Links","Links",1715516180).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"Objects","Objects",-610644271).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,JSON.parse(response),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)))));
}
});
pluto.storage.ipfs.fetch_promise = (function pluto$storage$ipfs$fetch_promise(url){
return (new Promise((function (resolve,reject){
var xhr = (new XMLHttpRequest());
xhr.open("GET",url,true);

xhr.timeout = (2000);

xhr.ontimeout = ((function (xhr){
return (function (){
return reject.call(null,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
});})(xhr))
;

xhr.send(null);

return xhr.onload = ((function (xhr){
return (function (){
return resolve.call(null,xhr.responseText);
});})(xhr))
;
})));
});
pluto.storage.ipfs.list_all = (function pluto$storage$ipfs$list_all(gateway_url,directory){
return pluto.storage.ipfs.fetch_promise.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(gateway_url),"/api/v0/ls?arg=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directory)].join(''));
});
pluto.storage.ipfs.fetch = (function pluto$storage$ipfs$fetch(gateway_url,extension){
return pluto.storage.ipfs.fetch_promise.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(gateway_url),"/api/v0/cat?arg=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"extension-id","extension-id",-629939786).cljs$core$IFn$_invoke$arity$1(extension))].join('')).then((function (content){
return cljs.core.assoc.call(null,extension,new cljs.core.Keyword(null,"content","content",15833224),content);
}));
});
pluto.storage.ipfs.fetch_all = (function pluto$storage$ipfs$fetch_all(gateway_url,extensions){
var promises = Promise.all(cljs.core.clj__GT_js.call(null,cljs.core.mapv.call(null,(function (p1__2423_SHARP_){
return pluto.storage.ipfs.fetch.call(null,gateway_url,p1__2423_SHARP_);
}),extensions)));
return promises.then(((function (promises){
return (function (p1__2424_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__2424_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
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
return pluto.storage.ipfs.list_all.call(null,self__.gateway_url,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(extension)).then(pluto.storage.ipfs.parse_directory).then(cljs.core.partial.call(null,pluto.storage.ipfs.fetch_all,self__.gateway_url)).then(((function (___$1){
return (function (p1__2425_SHARP_){
return callback.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),p1__2425_SHARP_], null));
});})(___$1))
,((function (___$1){
return (function (p1__2426_SHARP_){
return callback.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"value","value",305978217),p1__2426_SHARP_], null));
});})(___$1))
);
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4190__auto__,k__4191__auto__){
var self__ = this;
var this__4190__auto____$1 = this;
return this__4190__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4191__auto__,null);
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4192__auto__,k2428,else__4193__auto__){
var self__ = this;
var this__4192__auto____$1 = this;
var G__2432 = k2428;
var G__2432__$1 = (((G__2432 instanceof cljs.core.Keyword))?G__2432.fqn:null);
switch (G__2432__$1) {
case "gateway-url":
return self__.gateway_url;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k2428,else__4193__auto__);

}
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4204__auto__,writer__4205__auto__,opts__4206__auto__){
var self__ = this;
var this__4204__auto____$1 = this;
var pr_pair__4207__auto__ = ((function (this__4204__auto____$1){
return (function (keyval__4208__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,cljs.core.pr_writer,""," ","",opts__4206__auto__,keyval__4208__auto__);
});})(this__4204__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,pr_pair__4207__auto__,"#pluto.storage.ipfs.IPFSStorage{",", ","}",opts__4206__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gateway-url","gateway-url",1046231486),self__.gateway_url],null))], null),self__.__extmap));
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__2427){
var self__ = this;
var G__2427__$1 = this;
return (new cljs.core.RecordIter((0),G__2427__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gateway-url","gateway-url",1046231486)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (1 + cljs.core.count.call(null,self__.__extmap));
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var h__4048__auto__ = self__.__hash;
if(!((h__4048__auto__ == null))){
return h__4048__auto__;
} else {
var h__4048__auto____$1 = ((function (h__4048__auto__,this__4186__auto____$1){
return (function (coll__4187__auto__){
return (-122252959 ^ cljs.core.hash_unordered_coll.call(null,coll__4187__auto__));
});})(h__4048__auto__,this__4186__auto____$1))
.call(null,this__4186__auto____$1);
self__.__hash = h__4048__auto____$1;

return h__4048__auto____$1;
}
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this2429,other2430){
var self__ = this;
var this2429__$1 = this;
return ((!((other2430 == null))) && ((this2429__$1.constructor === other2430.constructor)) && (cljs.core._EQ_.call(null,this2429__$1.gateway_url,other2430.gateway_url)) && (cljs.core._EQ_.call(null,this2429__$1.__extmap,other2430.__extmap)));
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4199__auto__,k__4200__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gateway-url","gateway-url",1046231486),null], null), null),k__4200__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4199__auto____$1),self__.__meta),k__4200__auto__);
} else {
return (new pluto.storage.ipfs.IPFSStorage(self__.gateway_url,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4200__auto__)),null));
}
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4197__auto__,k__4198__auto__,G__2427){
var self__ = this;
var this__4197__auto____$1 = this;
var pred__2433 = cljs.core.keyword_identical_QMARK_;
var expr__2434 = k__4198__auto__;
if(cljs.core.truth_(pred__2433.call(null,new cljs.core.Keyword(null,"gateway-url","gateway-url",1046231486),expr__2434))){
return (new pluto.storage.ipfs.IPFSStorage(G__2427,self__.__meta,self__.__extmap,null));
} else {
return (new pluto.storage.ipfs.IPFSStorage(self__.gateway_url,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4198__auto__,G__2427),null));
}
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4202__auto__){
var self__ = this;
var this__4202__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"gateway-url","gateway-url",1046231486),self__.gateway_url,null))], null),self__.__extmap));
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4189__auto__,G__2427){
var self__ = this;
var this__4189__auto____$1 = this;
return (new pluto.storage.ipfs.IPFSStorage(self__.gateway_url,G__2427,self__.__extmap,self__.__hash));
});

pluto.storage.ipfs.IPFSStorage.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4195__auto__,entry__4196__auto__){
var self__ = this;
var this__4195__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4196__auto__)){
return this__4195__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4196__auto__,(0)),cljs.core._nth.call(null,entry__4196__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4195__auto____$1,entry__4196__auto__);
}
});

pluto.storage.ipfs.IPFSStorage.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gateway-url","gateway-url",-1608204283,null)], null);
});

pluto.storage.ipfs.IPFSStorage.cljs$lang$type = true;

pluto.storage.ipfs.IPFSStorage.cljs$lang$ctorPrSeq = (function (this__4227__auto__){
return (new cljs.core.List(null,"pluto.storage.ipfs/IPFSStorage",null,(1),null));
});

pluto.storage.ipfs.IPFSStorage.cljs$lang$ctorPrWriter = (function (this__4227__auto__,writer__4228__auto__){
return cljs.core._write.call(null,writer__4228__auto__,"pluto.storage.ipfs/IPFSStorage");
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
pluto.storage.ipfs.map__GT_IPFSStorage = (function pluto$storage$ipfs$map__GT_IPFSStorage(G__2431){
var extmap__4223__auto__ = (function (){var G__2436 = cljs.core.dissoc.call(null,G__2431,new cljs.core.Keyword(null,"gateway-url","gateway-url",1046231486));
if(cljs.core.record_QMARK_.call(null,G__2431)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__2436);
} else {
return G__2436;
}
})();
return (new pluto.storage.ipfs.IPFSStorage(new cljs.core.Keyword(null,"gateway-url","gateway-url",1046231486).cljs$core$IFn$_invoke$arity$1(G__2431),null,cljs.core.not_empty.call(null,extmap__4223__auto__),null));
});

