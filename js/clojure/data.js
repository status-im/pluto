// Compiled by ClojureScript 1.10.516 {:static-fns true, :optimize-constants true}
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__6611){
var vec__6612 = p__6611;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6612,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6612,(1),null);
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
var vec__6615 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6615,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6615,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6615,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__6619 = arguments.length;
switch (G__6619) {
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
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
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
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
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
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__6621_6645 = clojure.data.equality_partition;
var G__6622_6646 = "null";
var G__6623_6647 = ((function (G__6621_6645,G__6622_6646){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__6621_6645,G__6622_6646))
;
goog.object.set(G__6621_6645,G__6622_6646,G__6623_6647);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__6624_6648 = clojure.data.equality_partition;
var G__6625_6649 = "string";
var G__6626_6650 = ((function (G__6624_6648,G__6625_6649){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__6624_6648,G__6625_6649))
;
goog.object.set(G__6624_6648,G__6625_6649,G__6626_6650);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__6627_6651 = clojure.data.equality_partition;
var G__6628_6652 = "number";
var G__6629_6653 = ((function (G__6627_6651,G__6628_6652){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__6627_6651,G__6628_6652))
;
goog.object.set(G__6627_6651,G__6628_6652,G__6629_6653);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__6630_6654 = clojure.data.equality_partition;
var G__6631_6655 = "array";
var G__6632_6656 = ((function (G__6630_6654,G__6631_6655){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__6630_6654,G__6631_6655))
;
goog.object.set(G__6630_6654,G__6631_6655,G__6632_6656);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__6633_6657 = clojure.data.equality_partition;
var G__6634_6658 = "function";
var G__6635_6659 = ((function (G__6633_6657,G__6634_6658){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__6633_6657,G__6634_6658))
;
goog.object.set(G__6633_6657,G__6634_6658,G__6635_6659);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__6636_6660 = clojure.data.equality_partition;
var G__6637_6661 = "boolean";
var G__6638_6662 = ((function (G__6636_6660,G__6637_6661){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__6636_6660,G__6637_6661))
;
goog.object.set(G__6636_6660,G__6637_6661,G__6638_6662);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__6639_6663 = clojure.data.equality_partition;
var G__6640_6664 = "_";
var G__6641_6665 = ((function (G__6639_6663,G__6640_6664){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__6639_6663,G__6640_6664))
;
goog.object.set(G__6639_6663,G__6640_6664,G__6641_6665);
goog.object.set(clojure.data.Diff,"null",true);

var G__6666_6690 = clojure.data.diff_similar;
var G__6667_6691 = "null";
var G__6668_6692 = ((function (G__6666_6690,G__6667_6691){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__6666_6690,G__6667_6691))
;
goog.object.set(G__6666_6690,G__6667_6691,G__6668_6692);

goog.object.set(clojure.data.Diff,"string",true);

var G__6669_6693 = clojure.data.diff_similar;
var G__6670_6694 = "string";
var G__6671_6695 = ((function (G__6669_6693,G__6670_6694){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__6669_6693,G__6670_6694))
;
goog.object.set(G__6669_6693,G__6670_6694,G__6671_6695);

goog.object.set(clojure.data.Diff,"number",true);

var G__6672_6696 = clojure.data.diff_similar;
var G__6673_6697 = "number";
var G__6674_6698 = ((function (G__6672_6696,G__6673_6697){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__6672_6696,G__6673_6697))
;
goog.object.set(G__6672_6696,G__6673_6697,G__6674_6698);

goog.object.set(clojure.data.Diff,"array",true);

var G__6675_6699 = clojure.data.diff_similar;
var G__6676_6700 = "array";
var G__6677_6701 = ((function (G__6675_6699,G__6676_6700){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__6675_6699,G__6676_6700))
;
goog.object.set(G__6675_6699,G__6676_6700,G__6677_6701);

goog.object.set(clojure.data.Diff,"function",true);

var G__6678_6702 = clojure.data.diff_similar;
var G__6679_6703 = "function";
var G__6680_6704 = ((function (G__6678_6702,G__6679_6703){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__6678_6702,G__6679_6703))
;
goog.object.set(G__6678_6702,G__6679_6703,G__6680_6704);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__6681_6705 = clojure.data.diff_similar;
var G__6682_6706 = "boolean";
var G__6683_6707 = ((function (G__6681_6705,G__6682_6706){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__6681_6705,G__6682_6706))
;
goog.object.set(G__6681_6705,G__6682_6706,G__6683_6707);

goog.object.set(clojure.data.Diff,"_",true);

var G__6684_6708 = clojure.data.diff_similar;
var G__6685_6709 = "_";
var G__6686_6710 = ((function (G__6684_6708,G__6685_6709){
return (function (a,b){
var fexpr__6688 = (function (){var G__6689 = clojure.data.equality_partition(a);
var G__6689__$1 = (((G__6689 instanceof cljs.core.Keyword))?G__6689.fqn:null);
switch (G__6689__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6689__$1)].join('')));

}
})();
return (fexpr__6688.cljs$core$IFn$_invoke$arity$2 ? fexpr__6688.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__6688.call(null,a,b));
});})(G__6684_6708,G__6685_6709))
;
goog.object.set(G__6684_6708,G__6685_6709,G__6686_6710);
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
