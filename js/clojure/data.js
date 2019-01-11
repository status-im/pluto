// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__8267){
var vec__8268 = p__8267;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8268,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8268,(1),null);
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
var vec__8271 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8271,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8271,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8271,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__8275 = arguments.length;
switch (G__8275) {
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
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4135__auto__ = cljs.core.count(a);
var y__4136__auto__ = cljs.core.count(b);
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
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
var x__4347__auto__ = (((x == null))?null:x);
var m__4348__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4348__auto__.call(null,x));
} else {
var m__4348__auto____$1 = (clojure.data.equality_partition["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4348__auto____$1.call(null,x));
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
var x__4347__auto__ = (((a == null))?null:a);
var m__4348__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4348__auto__.call(null,a,b));
} else {
var m__4348__auto____$1 = (clojure.data.diff_similar["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4348__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__8277_8301 = clojure.data.equality_partition;
var G__8278_8302 = "null";
var G__8279_8303 = ((function (G__8277_8301,G__8278_8302){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__8277_8301,G__8278_8302))
;
goog.object.set(G__8277_8301,G__8278_8302,G__8279_8303);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__8280_8304 = clojure.data.equality_partition;
var G__8281_8305 = "string";
var G__8282_8306 = ((function (G__8280_8304,G__8281_8305){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__8280_8304,G__8281_8305))
;
goog.object.set(G__8280_8304,G__8281_8305,G__8282_8306);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__8283_8307 = clojure.data.equality_partition;
var G__8284_8308 = "number";
var G__8285_8309 = ((function (G__8283_8307,G__8284_8308){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__8283_8307,G__8284_8308))
;
goog.object.set(G__8283_8307,G__8284_8308,G__8285_8309);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__8286_8310 = clojure.data.equality_partition;
var G__8287_8311 = "array";
var G__8288_8312 = ((function (G__8286_8310,G__8287_8311){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__8286_8310,G__8287_8311))
;
goog.object.set(G__8286_8310,G__8287_8311,G__8288_8312);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__8289_8313 = clojure.data.equality_partition;
var G__8290_8314 = "function";
var G__8291_8315 = ((function (G__8289_8313,G__8290_8314){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__8289_8313,G__8290_8314))
;
goog.object.set(G__8289_8313,G__8290_8314,G__8291_8315);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__8292_8316 = clojure.data.equality_partition;
var G__8293_8317 = "boolean";
var G__8294_8318 = ((function (G__8292_8316,G__8293_8317){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__8292_8316,G__8293_8317))
;
goog.object.set(G__8292_8316,G__8293_8317,G__8294_8318);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__8295_8319 = clojure.data.equality_partition;
var G__8296_8320 = "_";
var G__8297_8321 = ((function (G__8295_8319,G__8296_8320){
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
});})(G__8295_8319,G__8296_8320))
;
goog.object.set(G__8295_8319,G__8296_8320,G__8297_8321);
goog.object.set(clojure.data.Diff,"null",true);

var G__8322_8346 = clojure.data.diff_similar;
var G__8323_8347 = "null";
var G__8324_8348 = ((function (G__8322_8346,G__8323_8347){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__8322_8346,G__8323_8347))
;
goog.object.set(G__8322_8346,G__8323_8347,G__8324_8348);

goog.object.set(clojure.data.Diff,"string",true);

var G__8325_8349 = clojure.data.diff_similar;
var G__8326_8350 = "string";
var G__8327_8351 = ((function (G__8325_8349,G__8326_8350){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__8325_8349,G__8326_8350))
;
goog.object.set(G__8325_8349,G__8326_8350,G__8327_8351);

goog.object.set(clojure.data.Diff,"number",true);

var G__8328_8352 = clojure.data.diff_similar;
var G__8329_8353 = "number";
var G__8330_8354 = ((function (G__8328_8352,G__8329_8353){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__8328_8352,G__8329_8353))
;
goog.object.set(G__8328_8352,G__8329_8353,G__8330_8354);

goog.object.set(clojure.data.Diff,"array",true);

var G__8331_8355 = clojure.data.diff_similar;
var G__8332_8356 = "array";
var G__8333_8357 = ((function (G__8331_8355,G__8332_8356){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__8331_8355,G__8332_8356))
;
goog.object.set(G__8331_8355,G__8332_8356,G__8333_8357);

goog.object.set(clojure.data.Diff,"function",true);

var G__8334_8358 = clojure.data.diff_similar;
var G__8335_8359 = "function";
var G__8336_8360 = ((function (G__8334_8358,G__8335_8359){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__8334_8358,G__8335_8359))
;
goog.object.set(G__8334_8358,G__8335_8359,G__8336_8360);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__8337_8361 = clojure.data.diff_similar;
var G__8338_8362 = "boolean";
var G__8339_8363 = ((function (G__8337_8361,G__8338_8362){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__8337_8361,G__8338_8362))
;
goog.object.set(G__8337_8361,G__8338_8362,G__8339_8363);

goog.object.set(clojure.data.Diff,"_",true);

var G__8340_8364 = clojure.data.diff_similar;
var G__8341_8365 = "_";
var G__8342_8366 = ((function (G__8340_8364,G__8341_8365){
return (function (a,b){
var fexpr__8344 = (function (){var G__8345 = clojure.data.equality_partition(a);
var G__8345__$1 = (((G__8345 instanceof cljs.core.Keyword))?G__8345.fqn:null);
switch (G__8345__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8345__$1)].join('')));

}
})();
return (fexpr__8344.cljs$core$IFn$_invoke$arity$2 ? fexpr__8344.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__8344.call(null,a,b));
});})(G__8340_8364,G__8341_8365))
;
goog.object.set(G__8340_8364,G__8341_8365,G__8342_8366);
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
