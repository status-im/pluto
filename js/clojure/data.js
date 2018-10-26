// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__5554){
var vec__5555 = p__5554;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5555,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5555,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__5558 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5558,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5558,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5558,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__5562 = arguments.length;
switch (G__5562) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4037__auto__ = cljs.core.count(a);
var y__4038__auto__ = cljs.core.count(b);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4243__auto__ = (((x == null))?null:x);
var m__4244__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto__.call(null,x));
} else {
var m__4244__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4243__auto__ = (((a == null))?null:a);
var m__4244__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto__.call(null,a,b));
} else {
var m__4244__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__5564_5588 = clojure.data.equality_partition;
var G__5565_5589 = "null";
var G__5566_5590 = ((function (G__5564_5588,G__5565_5589){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__5564_5588,G__5565_5589))
;
goog.object.set(G__5564_5588,G__5565_5589,G__5566_5590);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__5567_5591 = clojure.data.equality_partition;
var G__5568_5592 = "string";
var G__5569_5593 = ((function (G__5567_5591,G__5568_5592){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__5567_5591,G__5568_5592))
;
goog.object.set(G__5567_5591,G__5568_5592,G__5569_5593);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__5570_5594 = clojure.data.equality_partition;
var G__5571_5595 = "number";
var G__5572_5596 = ((function (G__5570_5594,G__5571_5595){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__5570_5594,G__5571_5595))
;
goog.object.set(G__5570_5594,G__5571_5595,G__5572_5596);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__5573_5597 = clojure.data.equality_partition;
var G__5574_5598 = "array";
var G__5575_5599 = ((function (G__5573_5597,G__5574_5598){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__5573_5597,G__5574_5598))
;
goog.object.set(G__5573_5597,G__5574_5598,G__5575_5599);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__5576_5600 = clojure.data.equality_partition;
var G__5577_5601 = "function";
var G__5578_5602 = ((function (G__5576_5600,G__5577_5601){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__5576_5600,G__5577_5601))
;
goog.object.set(G__5576_5600,G__5577_5601,G__5578_5602);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__5579_5603 = clojure.data.equality_partition;
var G__5580_5604 = "boolean";
var G__5581_5605 = ((function (G__5579_5603,G__5580_5604){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__5579_5603,G__5580_5604))
;
goog.object.set(G__5579_5603,G__5580_5604,G__5581_5605);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__5582_5606 = clojure.data.equality_partition;
var G__5583_5607 = "_";
var G__5584_5608 = ((function (G__5582_5606,G__5583_5607){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__5582_5606,G__5583_5607))
;
goog.object.set(G__5582_5606,G__5583_5607,G__5584_5608);
goog.object.set(clojure.data.Diff,"null",true);

var G__5609_5633 = clojure.data.diff_similar;
var G__5610_5634 = "null";
var G__5611_5635 = ((function (G__5609_5633,G__5610_5634){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__5609_5633,G__5610_5634))
;
goog.object.set(G__5609_5633,G__5610_5634,G__5611_5635);

goog.object.set(clojure.data.Diff,"string",true);

var G__5612_5636 = clojure.data.diff_similar;
var G__5613_5637 = "string";
var G__5614_5638 = ((function (G__5612_5636,G__5613_5637){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__5612_5636,G__5613_5637))
;
goog.object.set(G__5612_5636,G__5613_5637,G__5614_5638);

goog.object.set(clojure.data.Diff,"number",true);

var G__5615_5639 = clojure.data.diff_similar;
var G__5616_5640 = "number";
var G__5617_5641 = ((function (G__5615_5639,G__5616_5640){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__5615_5639,G__5616_5640))
;
goog.object.set(G__5615_5639,G__5616_5640,G__5617_5641);

goog.object.set(clojure.data.Diff,"array",true);

var G__5618_5642 = clojure.data.diff_similar;
var G__5619_5643 = "array";
var G__5620_5644 = ((function (G__5618_5642,G__5619_5643){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__5618_5642,G__5619_5643))
;
goog.object.set(G__5618_5642,G__5619_5643,G__5620_5644);

goog.object.set(clojure.data.Diff,"function",true);

var G__5621_5645 = clojure.data.diff_similar;
var G__5622_5646 = "function";
var G__5623_5647 = ((function (G__5621_5645,G__5622_5646){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__5621_5645,G__5622_5646))
;
goog.object.set(G__5621_5645,G__5622_5646,G__5623_5647);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__5624_5648 = clojure.data.diff_similar;
var G__5625_5649 = "boolean";
var G__5626_5650 = ((function (G__5624_5648,G__5625_5649){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__5624_5648,G__5625_5649))
;
goog.object.set(G__5624_5648,G__5625_5649,G__5626_5650);

goog.object.set(clojure.data.Diff,"_",true);

var G__5627_5651 = clojure.data.diff_similar;
var G__5628_5652 = "_";
var G__5629_5653 = ((function (G__5627_5651,G__5628_5652){
return (function (a,b){
var fexpr__5631 = (function (){var G__5632 = clojure.data.equality_partition(a);
var G__5632__$1 = (((G__5632 instanceof cljs.core.Keyword))?G__5632.fqn:null);
switch (G__5632__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5632__$1)].join('')));

}
})();
return (fexpr__5631.cljs$core$IFn$_invoke$arity$2 ? fexpr__5631.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__5631.call(null,a,b));
});})(G__5627_5651,G__5628_5652))
;
goog.object.set(G__5627_5651,G__5628_5652,G__5629_5653);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
