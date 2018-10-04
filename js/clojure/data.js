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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__5559){
var vec__5560 = p__5559;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5560,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5560,(1),null);
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
var vec__5563 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5563,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5563,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5563,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__5567 = arguments.length;
switch (G__5567) {
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

var G__5569_5593 = clojure.data.equality_partition;
var G__5570_5594 = "null";
var G__5571_5595 = ((function (G__5569_5593,G__5570_5594){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__5569_5593,G__5570_5594))
;
goog.object.set(G__5569_5593,G__5570_5594,G__5571_5595);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__5572_5596 = clojure.data.equality_partition;
var G__5573_5597 = "string";
var G__5574_5598 = ((function (G__5572_5596,G__5573_5597){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__5572_5596,G__5573_5597))
;
goog.object.set(G__5572_5596,G__5573_5597,G__5574_5598);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__5575_5599 = clojure.data.equality_partition;
var G__5576_5600 = "number";
var G__5577_5601 = ((function (G__5575_5599,G__5576_5600){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__5575_5599,G__5576_5600))
;
goog.object.set(G__5575_5599,G__5576_5600,G__5577_5601);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__5578_5602 = clojure.data.equality_partition;
var G__5579_5603 = "array";
var G__5580_5604 = ((function (G__5578_5602,G__5579_5603){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__5578_5602,G__5579_5603))
;
goog.object.set(G__5578_5602,G__5579_5603,G__5580_5604);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__5581_5605 = clojure.data.equality_partition;
var G__5582_5606 = "function";
var G__5583_5607 = ((function (G__5581_5605,G__5582_5606){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__5581_5605,G__5582_5606))
;
goog.object.set(G__5581_5605,G__5582_5606,G__5583_5607);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__5584_5608 = clojure.data.equality_partition;
var G__5585_5609 = "boolean";
var G__5586_5610 = ((function (G__5584_5608,G__5585_5609){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__5584_5608,G__5585_5609))
;
goog.object.set(G__5584_5608,G__5585_5609,G__5586_5610);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__5587_5611 = clojure.data.equality_partition;
var G__5588_5612 = "_";
var G__5589_5613 = ((function (G__5587_5611,G__5588_5612){
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
});})(G__5587_5611,G__5588_5612))
;
goog.object.set(G__5587_5611,G__5588_5612,G__5589_5613);
goog.object.set(clojure.data.Diff,"null",true);

var G__5614_5638 = clojure.data.diff_similar;
var G__5615_5639 = "null";
var G__5616_5640 = ((function (G__5614_5638,G__5615_5639){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__5614_5638,G__5615_5639))
;
goog.object.set(G__5614_5638,G__5615_5639,G__5616_5640);

goog.object.set(clojure.data.Diff,"string",true);

var G__5617_5641 = clojure.data.diff_similar;
var G__5618_5642 = "string";
var G__5619_5643 = ((function (G__5617_5641,G__5618_5642){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__5617_5641,G__5618_5642))
;
goog.object.set(G__5617_5641,G__5618_5642,G__5619_5643);

goog.object.set(clojure.data.Diff,"number",true);

var G__5620_5644 = clojure.data.diff_similar;
var G__5621_5645 = "number";
var G__5622_5646 = ((function (G__5620_5644,G__5621_5645){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__5620_5644,G__5621_5645))
;
goog.object.set(G__5620_5644,G__5621_5645,G__5622_5646);

goog.object.set(clojure.data.Diff,"array",true);

var G__5623_5647 = clojure.data.diff_similar;
var G__5624_5648 = "array";
var G__5625_5649 = ((function (G__5623_5647,G__5624_5648){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__5623_5647,G__5624_5648))
;
goog.object.set(G__5623_5647,G__5624_5648,G__5625_5649);

goog.object.set(clojure.data.Diff,"function",true);

var G__5626_5650 = clojure.data.diff_similar;
var G__5627_5651 = "function";
var G__5628_5652 = ((function (G__5626_5650,G__5627_5651){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__5626_5650,G__5627_5651))
;
goog.object.set(G__5626_5650,G__5627_5651,G__5628_5652);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__5629_5653 = clojure.data.diff_similar;
var G__5630_5654 = "boolean";
var G__5631_5655 = ((function (G__5629_5653,G__5630_5654){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__5629_5653,G__5630_5654))
;
goog.object.set(G__5629_5653,G__5630_5654,G__5631_5655);

goog.object.set(clojure.data.Diff,"_",true);

var G__5632_5656 = clojure.data.diff_similar;
var G__5633_5657 = "_";
var G__5634_5658 = ((function (G__5632_5656,G__5633_5657){
return (function (a,b){
var fexpr__5636 = (function (){var G__5637 = clojure.data.equality_partition(a);
var G__5637__$1 = (((G__5637 instanceof cljs.core.Keyword))?G__5637.fqn:null);
switch (G__5637__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5637__$1)].join('')));

}
})();
return (fexpr__5636.cljs$core$IFn$_invoke$arity$2 ? fexpr__5636.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__5636.call(null,a,b));
});})(G__5632_5656,G__5633_5657))
;
goog.object.set(G__5632_5656,G__5633_5657,G__5634_5658);
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
