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
return (function (_,p__1250){
var vec__1251 = p__1250;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1251,(0),null);
return type;
});})(method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__,hierarchy__4405__auto__))
,cljs.core.cst$kw$default,hierarchy__4405__auto__,method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__));
})();
}
pluto.reader.blocks.resolve_query = (function pluto$reader$blocks$resolve_query(p__1254){
var vec__1255 = p__1254;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1255,(0),null);
var vec__1258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1255,(1),null);
var sub_keyword = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1258,(0),null);
var sub_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1258,(1),null);
var sub = vec__1258;
var temp__5457__auto__ = (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(sub) : re_frame.core.subscribe.call(null,sub));
if(cljs.core.truth_(temp__5457__auto__)){
var o = temp__5457__auto__;
return cljs.core.deref(o);
} else {
return null;
}
});
pluto.reader.blocks.query_QMARK_ = (function pluto$reader$blocks$query_QMARK_(binding_value){
return ((cljs.core.list_QMARK_(binding_value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$query,cljs.core.first(binding_value))));
});
pluto.reader.blocks.resolve_binding_value = (function pluto$reader$blocks$resolve_binding_value(v){
if(cljs.core.truth_(pluto.reader.blocks.query_QMARK_(v))){
return pluto.reader.blocks.resolve_query(v);
} else {
if(!(cljs.core.list_QMARK_(v))){
return v;
} else {
return null;
}
}
});
pluto.reader.blocks.resolve_binding_key = (function pluto$reader$blocks$resolve_binding_key(k,v){
if((k instanceof cljs.core.Symbol)){
return k;
} else {
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1((pluto.reader.blocks.destructure.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.blocks.destructure.cljs$core$IFn$_invoke$arity$2(k,v) : pluto.reader.blocks.destructure.call(null,k,v)));

}
});
pluto.reader.blocks.assoc_binding = (function pluto$reader$blocks$assoc_binding(m,k,v){
var resolved_value = pluto.reader.blocks.resolve_binding_value(v);
var o = pluto.reader.blocks.resolve_binding_key(k,resolved_value);
if((o instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,o,resolved_value);
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,o], 0));

}
});
pluto.reader.blocks.resolve_bindings = (function pluto$reader$blocks$resolve_bindings(env){
return cljs.core.reduce_kv(pluto.reader.blocks.assoc_binding,cljs.core.PersistentArrayMap.EMPTY,env);
});
pluto.reader.blocks.let_block = (function pluto$reader$blocks$let_block(p__1261,child){
var map__1262 = p__1261;
var map__1262__$1 = ((((!((map__1262 == null)))?(((((map__1262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1262):map__1262);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1262__$1,cljs.core.cst$kw$env);
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
return pluto.reader.errors.merge_results.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,(function (){var G__1264 = value;
var G__1265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,idx);
return (pluto.reader.blocks.destructure_assoc.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.blocks.destructure_assoc.cljs$core$IFn$_invoke$arity$2(G__1264,G__1265) : pluto.reader.blocks.destructure_assoc.call(null,G__1264,G__1265));
})()], 0));
} else {
if(cljs.core.sequential_QMARK_(value)){
return pluto.reader.errors.merge_results.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,(function (){var G__1266 = value;
var G__1267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,idx);
return (pluto.reader.blocks.destructure_seq.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.blocks.destructure_seq.cljs$core$IFn$_invoke$arity$2(G__1266,G__1267) : pluto.reader.blocks.destructure_seq.call(null,G__1266,G__1267));
})()], 0));
} else {
return null;
}
}
}
}
}
});
pluto.reader.blocks.seq_bindings_size = (function pluto$reader$blocks$seq_bindings_size(bindings){
var size = cljs.core.count(bindings);
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$as,null], null), null),bindings))){
return (size - (2));
} else {
return size;
}
});
pluto.reader.blocks.valid_bindings_form_QMARK_ = (function pluto$reader$blocks$valid_bindings_form_QMARK_(o){
return (((o instanceof cljs.core.Symbol)) || (cljs.core.vector_QMARK_(o)) || (cljs.core.map_QMARK_(o)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$as,o)));
});
pluto.reader.blocks.destructure_seq = (function pluto$reader$blocks$destructure_seq(bindings,s){
if(((!(cljs.core.sequential_QMARK_(bindings))) || (!(cljs.core.every_QMARK_(pluto.reader.blocks.valid_bindings_form_QMARK_,bindings))) || ((pluto.reader.blocks.seq_bindings_size(bindings) > cljs.core.count(s))))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_destructuring_DASH_format,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$sequential,cljs.core.cst$kw$data,bindings], null))], null)], null);
} else {
return cljs.core.reduce_kv((function (p1__1268_SHARP_,p2__1269_SHARP_,p3__1270_SHARP_){
return pluto.reader.blocks.merge_seq_bindings(bindings,s,p1__1268_SHARP_,p2__1269_SHARP_,p3__1270_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,pluto.reader.blocks.indexed_bindings(bindings));

}
});
pluto.reader.blocks.merge_assoc_bindings = (function pluto$reader$blocks$merge_assoc_bindings(s,m,k,v){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,k], null),(function (){var or__3936__auto__ = (function (){var fexpr__1272 = cljs.core.first(v);
return (fexpr__1272.cljs$core$IFn$_invoke$arity$1 ? fexpr__1272.cljs$core$IFn$_invoke$arity$1(s) : fexpr__1272.call(null,s));
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
return pluto.reader.errors.merge_results.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,(function (){var G__1273 = k;
var G__1274 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(s) : v.call(null,s));
return (pluto.reader.blocks.destructure_assoc.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.blocks.destructure_assoc.cljs$core$IFn$_invoke$arity$2(G__1273,G__1274) : pluto.reader.blocks.destructure_assoc.call(null,G__1273,G__1274));
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
if(((!(cljs.core.map_QMARK_(bindings))) || (!(cljs.core.every_QMARK_(pluto.reader.blocks.valid_bindings_form_QMARK_,cljs.core.keys(bindings)))))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_destructuring_DASH_format,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$assoc,cljs.core.cst$kw$data,bindings], null))], null)], null);
} else {
return cljs.core.reduce_kv((function (p1__1275_SHARP_,p2__1276_SHARP_,p3__1277_SHARP_){
return pluto.reader.blocks.merge_assoc_bindings(s,p1__1275_SHARP_,p2__1276_SHARP_,p3__1277_SHARP_);
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
pluto.reader.blocks.inject_new_bindings = (function pluto$reader$blocks$inject_new_bindings(m,v){
if((v instanceof cljs.core.Symbol)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,v);
} else {
if(cljs.core.list_QMARK_(v)){
return clojure.walk.prewalk_replace(m,v);
} else {
return v;

}
}
});
pluto.reader.blocks.merge_bindings = (function pluto$reader$blocks$merge_bindings(p__1278,k,v){
var map__1279 = p__1278;
var map__1279__$1 = ((((!((map__1279 == null)))?(((((map__1279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1279):map__1279);
var m = map__1279__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1279__$1,cljs.core.cst$kw$data);
if(cljs.core.truth_(pluto.reader.blocks.properties_QMARK_(v))){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$sym$properties], null),k);
} else {
var av = pluto.reader.blocks.inject_new_bindings(data,v);
if(cljs.core.truth_((function (){var or__3936__auto__ = (k instanceof cljs.core.Symbol);
if(or__3936__auto__){
return or__3936__auto__;
} else {
return pluto.reader.blocks.query_QMARK_(av);
}
})())){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,k], null),av);
} else {
var temp__5455__auto__ = pluto.reader.blocks.destructure(k,av);
if(cljs.core.truth_(temp__5455__auto__)){
var o = temp__5455__auto__;
return pluto.reader.errors.merge_results.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,o], 0));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_destructuring_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,av], null))], null)], null);
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
pluto.reader.blocks.restrict_get_in = (function pluto$reader$blocks$restrict_get_in(path,p__1281){
var map__1282 = p__1281;
var map__1282__$1 = ((((!((map__1282 == null)))?(((((map__1282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1282):map__1282);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1282__$1,cljs.core.cst$kw$read);
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
pluto.reader.blocks.restrict_queries = (function pluto$reader$blocks$restrict_queries(p__1284,env){
var map__1285 = p__1284;
var map__1285__$1 = ((((!((map__1285 == null)))?(((((map__1285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1285):map__1285);
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1285__$1,cljs.core.cst$kw$permissions);
var queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1285__$1,cljs.core.cst$kw$queries);
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (map__1285,map__1285__$1,permissions,queries){
return (function (p__1287){
var vec__1288 = p__1287;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1288,(0),null);
var env_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1288,(1),null);
if(cljs.core.truth_(pluto.reader.blocks.query_QMARK_(env_value))){
var vec__1291 = env_value;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1291,(0),null);
var vec__1294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1291,(1),null);
var sub_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1294,(0),null);
var sub_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1294,(1),null);
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
});})(map__1285,map__1285__$1,permissions,queries))
,env);
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$let,(function (p__1297,p__1298){
var map__1299 = p__1297;
var map__1299__$1 = ((((!((map__1299 == null)))?(((((map__1299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1299):map__1299);
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1299__$1,cljs.core.cst$kw$capacities);
var vec__1300 = p__1298;
var seq__1301 = cljs.core.seq(vec__1300);
var first__1302 = cljs.core.first(seq__1301);
var seq__1301__$1 = cljs.core.next(seq__1301);
var _ = first__1302;
var first__1302__$1 = cljs.core.first(seq__1301__$1);
var seq__1301__$2 = cljs.core.next(seq__1301__$1);
var bindings = first__1302__$1;
var body = seq__1301__$2;
var map__1304 = pluto.reader.blocks.bindings__GT_env(bindings);
var map__1304__$1 = ((((!((map__1304 == null)))?(((((map__1304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1304):map__1304);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1304__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1304__$1,cljs.core.cst$kw$errors);
var query_errors = pluto.reader.blocks.restrict_queries(capacities,data);
return pluto.reader.errors.merge_errors(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,(function (){var child = cljs.core.last(body);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.let_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$env,data], null),child], null);
})()], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(errors,query_errors));
}));
pluto.reader.blocks.when_block = (function pluto$reader$blocks$when_block(p__1306,body){
var map__1307 = p__1306;
var map__1307__$1 = ((((!((map__1307 == null)))?(((((map__1307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1307):map__1307);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1307__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return body;
} else {
return null;
}
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$when,(function (_,p__1309){
var vec__1310 = p__1309;
var seq__1311 = cljs.core.seq(vec__1310);
var first__1312 = cljs.core.first(seq__1311);
var seq__1311__$1 = cljs.core.next(seq__1311);
var ___$1 = first__1312;
var first__1312__$1 = cljs.core.first(seq__1311__$1);
var seq__1311__$2 = cljs.core.next(seq__1311__$1);
var test = first__1312__$1;
var body = seq__1311__$2;
if((test instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.when_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,test], null)], null),body)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unsupported_DASH_test_DASH_type,test)], null)], null);

}
}));
pluto.reader.blocks.if_block = (function pluto$reader$blocks$if_block(var_args){
var args__4521__auto__ = [];
var len__4518__auto___1318 = arguments.length;
var i__4519__auto___1319 = (0);
while(true){
if((i__4519__auto___1319 < len__4518__auto___1318)){
args__4521__auto__.push((arguments[i__4519__auto___1319]));

var G__1320 = (i__4519__auto___1319 + (1));
i__4519__auto___1319 = G__1320;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic = (function (p__1315,body){
var map__1316 = p__1315;
var map__1316__$1 = ((((!((map__1316 == null)))?(((((map__1316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1316):map__1316);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1316__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return cljs.core.first(body);
} else {
return cljs.core.second(body);
}
});

pluto.reader.blocks.if_block.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.reader.blocks.if_block.cljs$lang$applyTo = (function (seq1313){
var G__1314 = cljs.core.first(seq1313);
var seq1313__$1 = cljs.core.next(seq1313);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1314,seq1313__$1);
});

pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$if,(function (_,p__1321){
var vec__1322 = p__1321;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1322,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1322,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1322,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1322,(3),null);
if((test instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.if_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,test], null)], null),(new cljs.core.List(null,then,(new cljs.core.List(null,else$,null,(1),null)),(2),null)))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unsupported_DASH_test_DASH_type,test)], null)], null);

}
}));
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (opts,block){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$unknown_DASH_block_DASH_type,cljs.core.cst$kw$opts,opts,cljs.core.cst$kw$block,block], null)], null)], null);
}));
