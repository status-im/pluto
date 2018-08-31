// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.blocks');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('pluto.reader.errors');
goog.require('pluto.reader.reference');
goog.require('pluto.reader.permissions');
goog.require('re_frame.core');
if((typeof pluto !== 'undefined') && (typeof pluto.reader !== 'undefined') && (typeof pluto.reader.blocks !== 'undefined') && (typeof pluto.reader.blocks.parse !== 'undefined')){
} else {
/**
 * Parse a block element. Return hiccup data.
 */
pluto.reader.blocks.parse = (function (){var method_table__4401__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4402__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4403__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4404__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.reader.blocks","parse"),((function (method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__,hierarchy__4405__auto__){
return (function (_,p__2094){
var vec__2095 = p__2094;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2095,(0),null);
return type;
});})(method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__,hierarchy__4405__auto__))
,cljs.core.cst$kw$default,hierarchy__4405__auto__,method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__));
})();
}
pluto.reader.blocks.resolve_query = (function pluto$reader$blocks$resolve_query(p__2098){
var vec__2099 = p__2098;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2099,(0),null);
var vec__2102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2099,(1),null);
var sub_keyword = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2102,(0),null);
var sub_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2102,(1),null);
var sub = vec__2102;
return cljs.core.deref((re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(sub) : re_frame.core.subscribe.call(null,sub)));
});
pluto.reader.blocks.query_QMARK_ = (function pluto$reader$blocks$query_QMARK_(binding_value){
return ((cljs.core.list_QMARK_(binding_value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$query,cljs.core.first(binding_value))));
});
pluto.reader.blocks.resolve_binding = (function pluto$reader$blocks$resolve_binding(binding_value){
if(cljs.core.truth_(pluto.reader.blocks.query_QMARK_(binding_value))){
return pluto.reader.blocks.resolve_query(binding_value);
} else {
return binding_value;

}
});
pluto.reader.blocks.resolve_bindings = (function pluto$reader$blocks$resolve_bindings(env){
return cljs.core.reduce_kv((function (p1__2105_SHARP_,p2__2106_SHARP_,p3__2107_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__2105_SHARP_,p2__2106_SHARP_,pluto.reader.blocks.resolve_binding(p3__2107_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,env);
});
pluto.reader.blocks.let_block = (function pluto$reader$blocks$let_block(p__2108,child){
var map__2109 = p__2108;
var map__2109__$1 = ((((!((map__2109 == null)))?(((((map__2109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2109):map__2109);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2109__$1,cljs.core.cst$kw$env);
if(cljs.core.coll_QMARK_(child)){
return clojure.walk.prewalk_replace(pluto.reader.blocks.resolve_bindings(env),child);
} else {
return null;
}
});
pluto.reader.blocks.symbol_afer_as_QMARK_ = (function pluto$reader$blocks$symbol_afer_as_QMARK_(bindings,idx){
return (((idx > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$as,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bindings,(idx - (1))))));
});

pluto.reader.blocks.indexed_bindings = (function pluto$reader$blocks$indexed_bindings(bindings){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,bindings));
});
pluto.reader.blocks.merge_seq_bindings = (function pluto$reader$blocks$merge_seq_bindings(bindings,s,m,idx,value){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$as,value)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,value)))){
return m;
} else {
if(cljs.core.truth_(pluto.reader.blocks.symbol_afer_as_QMARK_(bindings,idx))){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,value], null),s);
} else {
if((value instanceof cljs.core.Symbol)){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,value], null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,idx));
} else {
if(cljs.core.map_QMARK_(value)){
return pluto.reader.errors.merge_results.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,(function (){var G__2111 = value;
var G__2112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,idx);
return (pluto.reader.blocks.destructure_assoc.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.blocks.destructure_assoc.cljs$core$IFn$_invoke$arity$2(G__2111,G__2112) : pluto.reader.blocks.destructure_assoc.call(null,G__2111,G__2112));
})()], 0));
} else {
if(cljs.core.sequential_QMARK_(value)){
return pluto.reader.errors.merge_results.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,(function (){var G__2113 = value;
var G__2114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,idx);
return (pluto.reader.blocks.destructure_seq.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.blocks.destructure_seq.cljs$core$IFn$_invoke$arity$2(G__2113,G__2114) : pluto.reader.blocks.destructure_seq.call(null,G__2113,G__2114));
})()], 0));
} else {
return null;
}
}
}
}
}
});
pluto.reader.blocks.bindings_size = (function pluto$reader$blocks$bindings_size(bindings){
var size = cljs.core.count(bindings);
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$as,null], null), null),bindings))){
return (size - (2));
} else {
return size;
}
});
pluto.reader.blocks.destructure_seq = (function pluto$reader$blocks$destructure_seq(bindings,s){
if(((!(cljs.core.sequential_QMARK_(bindings))) || (!(cljs.core.every_QMARK_((function (p1__2115_SHARP_){
return (((p1__2115_SHARP_ instanceof cljs.core.Symbol)) || (cljs.core.vector_QMARK_(p1__2115_SHARP_)) || (cljs.core.map_QMARK_(p1__2115_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$as,p1__2115_SHARP_)));
}),bindings))) || ((pluto.reader.blocks.bindings_size(bindings) > cljs.core.count(s))))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_destructuring_DASH_format,bindings)], null)], null);
} else {
return cljs.core.reduce_kv((function (p1__2116_SHARP_,p2__2117_SHARP_,p3__2118_SHARP_){
return pluto.reader.blocks.merge_seq_bindings(bindings,s,p1__2116_SHARP_,p2__2117_SHARP_,p3__2118_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,pluto.reader.blocks.indexed_bindings(bindings));

}
});
pluto.reader.blocks.merge_assoc_bindings = (function pluto$reader$blocks$merge_assoc_bindings(s,m,k,v){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,k], null),(function (){var or__3936__auto__ = (function (){var fexpr__2120 = cljs.core.first(v);
return (fexpr__2120.cljs$core$IFn$_invoke$arity$1 ? fexpr__2120.cljs$core$IFn$_invoke$arity$1(s) : fexpr__2120.call(null,s));
})();
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
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
return pluto.reader.errors.merge_results.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,(function (){var G__2121 = k;
var G__2122 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(s) : v.call(null,s));
return (pluto.reader.blocks.destructure_assoc.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.blocks.destructure_assoc.cljs$core$IFn$_invoke$arity$2(G__2121,G__2122) : pluto.reader.blocks.destructure_assoc.call(null,G__2121,G__2122));
})()], 0));
} else {
if(cljs.core.sequential_QMARK_(k)){
return pluto.reader.errors.merge_results.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,pluto.reader.blocks.destructure_seq(k,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(s) : v.call(null,s)))], 0));
} else {
return null;
}
}
}
}
}
});
pluto.reader.blocks.destructure_assoc = (function pluto$reader$blocks$destructure_assoc(bindings,s){
if(((!(cljs.core.map_QMARK_(bindings))) || (!(cljs.core.every_QMARK_((function (p1__2123_SHARP_){
return (((p1__2123_SHARP_ instanceof cljs.core.Symbol)) || (cljs.core.vector_QMARK_(p1__2123_SHARP_)) || (cljs.core.map_QMARK_(p1__2123_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$as,p1__2123_SHARP_)));
}),cljs.core.keys(bindings)))))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_destructuring_DASH_format,bindings)], null)], null);
} else {
return cljs.core.reduce_kv((function (p1__2124_SHARP_,p2__2125_SHARP_,p3__2126_SHARP_){
return pluto.reader.blocks.merge_assoc_bindings(s,p1__2124_SHARP_,p2__2125_SHARP_,p3__2126_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,bindings);

}
});
pluto.reader.blocks.destructure = (function pluto$reader$blocks$destructure(bindings,s){
if(cljs.core.sequential_QMARK_(s)){
return pluto.reader.blocks.destructure_seq(bindings,s);
} else {
if(cljs.core.map_QMARK_(s)){
return pluto.reader.blocks.destructure_assoc(bindings,s);
} else {
return null;
}
}
});
pluto.reader.blocks.properties_QMARK_ = (function pluto$reader$blocks$properties_QMARK_(o){
var and__3925__auto__ = pluto.reader.reference.reference_QMARK_(o);
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$properties,pluto.reader.reference.reference__GT_symbol(o));
} else {
return and__3925__auto__;
}
});
pluto.reader.blocks.merge_bindings = (function pluto$reader$blocks$merge_bindings(m,k,v){
if(cljs.core.truth_(pluto.reader.blocks.properties_QMARK_(v))){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$sym$properties], null),k);
} else {
if((k instanceof cljs.core.Symbol)){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,k], null),v);
} else {
var temp__5455__auto__ = pluto.reader.blocks.destructure(k,v);
if(cljs.core.truth_(temp__5455__auto__)){
var o = temp__5455__auto__;
return pluto.reader.errors.merge_results.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,o], 0));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_destructuring_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null))], null)], null);
}

}
}
});
pluto.reader.blocks.bindings__GT_env = (function pluto$reader$blocks$bindings__GT_env(bindings){
if(cljs.core.odd_QMARK_(cljs.core.count(bindings))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_destructuring_DASH_format,bindings)], null)], null);
} else {
return cljs.core.reduce_kv(pluto.reader.blocks.merge_bindings,cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,bindings));

}
});
pluto.reader.blocks.restrict_get_in = (function pluto$reader$blocks$restrict_get_in(path,p__2127){
var map__2128 = p__2127;
var map__2128__$1 = ((((!((map__2128 == null)))?(((((map__2128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2128):map__2128);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2128__$1,cljs.core.cst$kw$read);
if(cljs.core.truth_(pluto.reader.permissions.allowed_path_QMARK_(path,read))){
return null;
} else {
return pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_forbidden_DASH_read_DASH_path,path);
}
});
/**
 * Parse time enforcement of valid queries, checks that query
 *   is exposed via host platform + enforces valid query vectors for 
 *   `:get-in` query.
 */
pluto.reader.blocks.restrict_queries = (function pluto$reader$blocks$restrict_queries(p__2130,env){
var map__2131 = p__2130;
var map__2131__$1 = ((((!((map__2131 == null)))?(((((map__2131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2131):map__2131);
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2131__$1,cljs.core.cst$kw$permissions);
var queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2131__$1,cljs.core.cst$kw$queries);
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (map__2131,map__2131__$1,permissions,queries){
return (function (p__2133){
var vec__2134 = p__2133;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2134,(0),null);
var env_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2134,(1),null);
if(cljs.core.truth_(pluto.reader.blocks.query_QMARK_(env_value))){
var vec__2137 = env_value;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2137,(0),null);
var vec__2140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2137,(1),null);
var sub_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2140,(0),null);
var sub_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2140,(1),null);
if(!(cljs.core.contains_QMARK_(queries,sub_name))){
return pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_query_DASH_not_DASH_exposed,sub_name);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_in,sub_name)){
return pluto.reader.blocks.restrict_get_in(sub_args,permissions);
} else {
return null;
}
}
} else {
return null;
}
});})(map__2131,map__2131__$1,permissions,queries))
,env);
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$let,(function (p__2143,p__2144){
var map__2145 = p__2143;
var map__2145__$1 = ((((!((map__2145 == null)))?(((((map__2145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2145):map__2145);
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2145__$1,cljs.core.cst$kw$capacities);
var vec__2146 = p__2144;
var seq__2147 = cljs.core.seq(vec__2146);
var first__2148 = cljs.core.first(seq__2147);
var seq__2147__$1 = cljs.core.next(seq__2147);
var _ = first__2148;
var first__2148__$1 = cljs.core.first(seq__2147__$1);
var seq__2147__$2 = cljs.core.next(seq__2147__$1);
var bindings = first__2148__$1;
var body = seq__2147__$2;
var map__2150 = pluto.reader.blocks.bindings__GT_env(bindings);
var map__2150__$1 = ((((!((map__2150 == null)))?(((((map__2150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2150):map__2150);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2150__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2150__$1,cljs.core.cst$kw$errors);
var query_errors = pluto.reader.blocks.restrict_queries(capacities,data);
return pluto.reader.errors.merge_errors(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,(function (){var child = cljs.core.last(body);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.let_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$env,data], null),child], null);
})()], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(errors,query_errors));
}));
pluto.reader.blocks.when_block = (function pluto$reader$blocks$when_block(p__2152,body){
var map__2153 = p__2152;
var map__2153__$1 = ((((!((map__2153 == null)))?(((((map__2153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2153):map__2153);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2153__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return body;
} else {
return null;
}
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$when,(function (_,p__2155){
var vec__2156 = p__2155;
var seq__2157 = cljs.core.seq(vec__2156);
var first__2158 = cljs.core.first(seq__2157);
var seq__2157__$1 = cljs.core.next(seq__2157);
var ___$1 = first__2158;
var first__2158__$1 = cljs.core.first(seq__2157__$1);
var seq__2157__$2 = cljs.core.next(seq__2157__$1);
var test = first__2158__$1;
var body = seq__2157__$2;
if((test instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.when_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,test], null)], null),body)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unsupported_DASH_test_DASH_type,test)], null)], null);

}
}));
pluto.reader.blocks.if_block = (function pluto$reader$blocks$if_block(var_args){
var args__4521__auto__ = [];
var len__4518__auto___2164 = arguments.length;
var i__4519__auto___2165 = (0);
while(true){
if((i__4519__auto___2165 < len__4518__auto___2164)){
args__4521__auto__.push((arguments[i__4519__auto___2165]));

var G__2166 = (i__4519__auto___2165 + (1));
i__4519__auto___2165 = G__2166;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic = (function (p__2161,body){
var map__2162 = p__2161;
var map__2162__$1 = ((((!((map__2162 == null)))?(((((map__2162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2162):map__2162);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2162__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return cljs.core.first(body);
} else {
return cljs.core.second(body);
}
});

pluto.reader.blocks.if_block.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.reader.blocks.if_block.cljs$lang$applyTo = (function (seq2159){
var G__2160 = cljs.core.first(seq2159);
var seq2159__$1 = cljs.core.next(seq2159);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2160,seq2159__$1);
});

pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$if,(function (_,p__2167){
var vec__2168 = p__2167;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2168,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2168,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2168,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2168,(3),null);
if((test instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.if_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,test], null)], null),(new cljs.core.List(null,then,(new cljs.core.List(null,else$,null,(1),null)),(2),null)))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unsupported_DASH_test_DASH_type,test)], null)], null);

}
}));
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (opts,block){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$unknown_DASH_block_DASH_type,cljs.core.cst$kw$opts,opts,cljs.core.cst$kw$block,block], null)], null)], null);
}));
