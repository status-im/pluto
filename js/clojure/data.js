// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true, :target :nodejs}
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__2250){
var vec__2251 = p__2250;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2251,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2251,(1),null);
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
var vec__2254 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2254,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2254,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2254,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__2258 = arguments.length;
switch (G__2258) {
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
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4024__auto__ = cljs.core.count(a);
var y__4025__auto__ = cljs.core.count(b);
return ((x__4024__auto__ > y__4025__auto__) ? x__4024__auto__ : y__4025__auto__);
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
var x__4230__auto__ = (((x == null))?null:x);
var m__4231__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4231__auto__.call(null,x));
} else {
var m__4231__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4231__auto____$1.call(null,x));
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
var x__4230__auto__ = (((a == null))?null:a);
var m__4231__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4231__auto__.call(null,a,b));
} else {
var m__4231__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4231__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__2260_2284 = clojure.data.equality_partition;
var G__2261_2285 = "null";
var G__2262_2286 = ((function (G__2260_2284,G__2261_2285){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__2260_2284,G__2261_2285))
;
goog.object.set(G__2260_2284,G__2261_2285,G__2262_2286);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__2263_2287 = clojure.data.equality_partition;
var G__2264_2288 = "string";
var G__2265_2289 = ((function (G__2263_2287,G__2264_2288){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__2263_2287,G__2264_2288))
;
goog.object.set(G__2263_2287,G__2264_2288,G__2265_2289);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__2266_2290 = clojure.data.equality_partition;
var G__2267_2291 = "number";
var G__2268_2292 = ((function (G__2266_2290,G__2267_2291){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__2266_2290,G__2267_2291))
;
goog.object.set(G__2266_2290,G__2267_2291,G__2268_2292);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__2269_2293 = clojure.data.equality_partition;
var G__2270_2294 = "array";
var G__2271_2295 = ((function (G__2269_2293,G__2270_2294){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__2269_2293,G__2270_2294))
;
goog.object.set(G__2269_2293,G__2270_2294,G__2271_2295);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__2272_2296 = clojure.data.equality_partition;
var G__2273_2297 = "function";
var G__2274_2298 = ((function (G__2272_2296,G__2273_2297){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__2272_2296,G__2273_2297))
;
goog.object.set(G__2272_2296,G__2273_2297,G__2274_2298);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__2275_2299 = clojure.data.equality_partition;
var G__2276_2300 = "boolean";
var G__2277_2301 = ((function (G__2275_2299,G__2276_2300){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__2275_2299,G__2276_2300))
;
goog.object.set(G__2275_2299,G__2276_2300,G__2277_2301);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__2278_2302 = clojure.data.equality_partition;
var G__2279_2303 = "_";
var G__2280_2304 = ((function (G__2278_2302,G__2279_2303){
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
});})(G__2278_2302,G__2279_2303))
;
goog.object.set(G__2278_2302,G__2279_2303,G__2280_2304);
goog.object.set(clojure.data.Diff,"null",true);

var G__2305_2329 = clojure.data.diff_similar;
var G__2306_2330 = "null";
var G__2307_2331 = ((function (G__2305_2329,G__2306_2330){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__2305_2329,G__2306_2330))
;
goog.object.set(G__2305_2329,G__2306_2330,G__2307_2331);

goog.object.set(clojure.data.Diff,"string",true);

var G__2308_2332 = clojure.data.diff_similar;
var G__2309_2333 = "string";
var G__2310_2334 = ((function (G__2308_2332,G__2309_2333){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__2308_2332,G__2309_2333))
;
goog.object.set(G__2308_2332,G__2309_2333,G__2310_2334);

goog.object.set(clojure.data.Diff,"number",true);

var G__2311_2335 = clojure.data.diff_similar;
var G__2312_2336 = "number";
var G__2313_2337 = ((function (G__2311_2335,G__2312_2336){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__2311_2335,G__2312_2336))
;
goog.object.set(G__2311_2335,G__2312_2336,G__2313_2337);

goog.object.set(clojure.data.Diff,"array",true);

var G__2314_2338 = clojure.data.diff_similar;
var G__2315_2339 = "array";
var G__2316_2340 = ((function (G__2314_2338,G__2315_2339){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__2314_2338,G__2315_2339))
;
goog.object.set(G__2314_2338,G__2315_2339,G__2316_2340);

goog.object.set(clojure.data.Diff,"function",true);

var G__2317_2341 = clojure.data.diff_similar;
var G__2318_2342 = "function";
var G__2319_2343 = ((function (G__2317_2341,G__2318_2342){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__2317_2341,G__2318_2342))
;
goog.object.set(G__2317_2341,G__2318_2342,G__2319_2343);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__2320_2344 = clojure.data.diff_similar;
var G__2321_2345 = "boolean";
var G__2322_2346 = ((function (G__2320_2344,G__2321_2345){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__2320_2344,G__2321_2345))
;
goog.object.set(G__2320_2344,G__2321_2345,G__2322_2346);

goog.object.set(clojure.data.Diff,"_",true);

var G__2323_2347 = clojure.data.diff_similar;
var G__2324_2348 = "_";
var G__2325_2349 = ((function (G__2323_2347,G__2324_2348){
return (function (a,b){
var fexpr__2327 = (function (){var G__2328 = clojure.data.equality_partition(a);
var G__2328__$1 = (((G__2328 instanceof cljs.core.Keyword))?G__2328.fqn:null);
switch (G__2328__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__2328__$1)].join('')));

}
})();
return (fexpr__2327.cljs$core$IFn$_invoke$arity$2 ? fexpr__2327.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__2327.call(null,a,b));
});})(G__2323_2347,G__2324_2348))
;
goog.object.set(G__2323_2347,G__2324_2348,G__2325_2349);
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
