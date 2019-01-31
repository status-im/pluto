// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.destructuring');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pluto.reader.errors');

pluto.reader.destructuring.valid_bindings_form_QMARK_ = (function pluto$reader$destructuring$valid_bindings_form_QMARK_(o){
return (((o instanceof cljs.core.Symbol)) || (cljs.core.vector_QMARK_(o)) || (cljs.core.map_QMARK_(o)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$as,o)));
});
pluto.reader.destructuring.seq_bindings_size = (function pluto$reader$destructuring$seq_bindings_size(bindings){
var size = cljs.core.count(bindings);
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$as,null], null), null),bindings))){
return (size - (2));
} else {
return size;
}
});
pluto.reader.destructuring.symbol_afer_as_QMARK_ = (function pluto$reader$destructuring$symbol_afer_as_QMARK_(bindings,idx){
return (((idx > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$as,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bindings,(idx - (1))))));
});
pluto.reader.destructuring.merge_seq_bindings = (function pluto$reader$destructuring$merge_seq_bindings(bindings,s,m,idx,value){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$as,value)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,value)))){
return m;
} else {
if(pluto.reader.destructuring.symbol_afer_as_QMARK_(bindings,idx)){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,value], null),s);
} else {
if((value instanceof cljs.core.Symbol)){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,value], null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,idx));
} else {
if(cljs.core.map_QMARK_(value)){
return pluto.reader.errors.merge_results.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,(function (){var G__711 = value;
var G__712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,idx);
return (pluto.reader.destructuring.destructure_assoc.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.destructuring.destructure_assoc.cljs$core$IFn$_invoke$arity$2(G__711,G__712) : pluto.reader.destructuring.destructure_assoc.call(null,G__711,G__712));
})()], 0));
} else {
if(cljs.core.sequential_QMARK_(value)){
return pluto.reader.errors.merge_results.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,(function (){var G__713 = value;
var G__714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,idx);
return (pluto.reader.destructuring.destructure_seq.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.destructuring.destructure_seq.cljs$core$IFn$_invoke$arity$2(G__713,G__714) : pluto.reader.destructuring.destructure_seq.call(null,G__713,G__714));
})()], 0));
} else {
return null;
}
}
}
}
}
});
pluto.reader.destructuring.valid_seq_format_QMARK_ = (function pluto$reader$destructuring$valid_seq_format_QMARK_(bindings,s){
return ((cljs.core.sequential_QMARK_(bindings)) && (cljs.core.every_QMARK_(pluto.reader.destructuring.valid_bindings_form_QMARK_,bindings)) && ((pluto.reader.destructuring.seq_bindings_size(bindings) <= cljs.core.count(s))));
});
pluto.reader.destructuring.destructure_seq = (function pluto$reader$destructuring$destructure_seq(bindings,s){
if(pluto.reader.destructuring.valid_seq_format_QMARK_(bindings,s)){
return cljs.core.reduce_kv((function (p1__715_SHARP_,p2__716_SHARP_,p3__717_SHARP_){
return pluto.reader.destructuring.merge_seq_bindings(bindings,s,p1__715_SHARP_,p2__716_SHARP_,p3__717_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bindings)));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_destructuring_DASH_format,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$sequential,cljs.core.cst$kw$data,bindings], null))], null)], null);
}
});
pluto.reader.destructuring.merge_assoc_bindings = (function pluto$reader$destructuring$merge_assoc_bindings(s,m,k,v){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,k], null),(function (){var or__4047__auto__ = (function (){var fexpr__719 = cljs.core.first(v);
return (fexpr__719.cljs$core$IFn$_invoke$arity$1 ? fexpr__719.cljs$core$IFn$_invoke$arity$1(s) : fexpr__719.call(null,s));
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.second(v);
}
})());
} else {
if((k instanceof cljs.core.Symbol)){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,k], null),(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(s) : v.call(null,s)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$as,k)){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,v], null),s);
} else {
if(cljs.core.map_QMARK_(k)){
return pluto.reader.errors.merge_results.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,(function (){var G__720 = k;
var G__721 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(s) : v.call(null,s));
return (pluto.reader.destructuring.destructure_assoc.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.destructuring.destructure_assoc.cljs$core$IFn$_invoke$arity$2(G__720,G__721) : pluto.reader.destructuring.destructure_assoc.call(null,G__720,G__721));
})()], 0));
} else {
if(cljs.core.sequential_QMARK_(k)){
return pluto.reader.errors.merge_results.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,pluto.reader.destructuring.destructure_seq(k,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(s) : v.call(null,s)))], 0));
} else {
return null;
}
}
}
}
}
});
pluto.reader.destructuring.valid_assoc_format_QMARK_ = (function pluto$reader$destructuring$valid_assoc_format_QMARK_(bindings){
return ((cljs.core.map_QMARK_(bindings)) && (cljs.core.every_QMARK_(pluto.reader.destructuring.valid_bindings_form_QMARK_,cljs.core.keys(bindings))));
});
pluto.reader.destructuring.destructure_assoc = (function pluto$reader$destructuring$destructure_assoc(bindings,s){
if(pluto.reader.destructuring.valid_assoc_format_QMARK_(bindings)){
return cljs.core.reduce_kv((function (p1__722_SHARP_,p2__723_SHARP_,p3__724_SHARP_){
return pluto.reader.destructuring.merge_assoc_bindings(s,p1__722_SHARP_,p2__723_SHARP_,p3__724_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,bindings);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_destructuring_DASH_format,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$assoc,cljs.core.cst$kw$data,bindings], null))], null)], null);
}
});
pluto.reader.destructuring.validate_destructure_bindings = (function pluto$reader$destructuring$validate_destructure_bindings(bindings){
return cljs.core.not_empty(((cljs.core.map_QMARK_(bindings))?((pluto.reader.destructuring.valid_assoc_format_QMARK_(bindings))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(pluto.reader.destructuring.validate_destructure_bindings,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.sequential_QMARK_,cljs.core.map_QMARK_),cljs.core.keys(bindings))], 0)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_destructuring_DASH_format,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$assoc,cljs.core.cst$kw$data,bindings], null))], null)):((cljs.core.sequential_QMARK_(bindings))?((cljs.core.every_QMARK_(pluto.reader.destructuring.valid_bindings_form_QMARK_,bindings))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(pluto.reader.destructuring.validate_destructure_bindings,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.sequential_QMARK_,cljs.core.map_QMARK_),bindings)], 0)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_destructuring_DASH_format,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$assoc,cljs.core.cst$kw$data,bindings], null))], null)):null)));
});
/**
 * Given a pattern and an associated data structure, return a map of either:
 * * :data, a map of extracted symbol / value pairs
 * * :errors, a vector of errors encountered during the destructuring
 */
pluto.reader.destructuring.destructure = (function pluto$reader$destructuring$destructure(bindings,s){
if(cljs.core.sequential_QMARK_(s)){
return pluto.reader.destructuring.destructure_seq(bindings,s);
} else {
if(cljs.core.map_QMARK_(s)){
return pluto.reader.destructuring.destructure_assoc(bindings,s);
} else {
return null;
}
}
});
