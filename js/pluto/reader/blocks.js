// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.blocks');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cljs.spec.alpha');
goog.require('re_frame.core');
goog.require('pluto.reader.destructuring');
goog.require('pluto.reader.errors');
goog.require('pluto.reader.permissions');
goog.require('pluto.reader.types');
goog.require('pluto.utils');
if((typeof pluto !== 'undefined') && (typeof pluto.reader !== 'undefined') && (typeof pluto.reader.blocks !== 'undefined') && (typeof pluto.reader.blocks.parse !== 'undefined')){
} else {
/**
 * Parse a block element. Return hiccup data.
 */
pluto.reader.blocks.parse = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.reader.blocks","parse"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (ctx,ext,p__2074){
var vec__2075 = p__2074;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2075,(0),null);
return type;
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,cljs.core.cst$kw$default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
pluto.reader.blocks.resolve_binding_value = (function pluto$reader$blocks$resolve_binding_value(v){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.deref((re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(v) : re_frame.core.subscribe.call(null,v)));
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
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(pluto.reader.destructuring.destructure(k,v));
}
});
pluto.reader.blocks.substitute_query_values = (function pluto$reader$blocks$substitute_query_values(m,v){
if(cljs.core.vector_QMARK_(v)){
return clojure.walk.prewalk((function (p1__2078_SHARP_){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__2078_SHARP_);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return p1__2078_SHARP_;
}
}),v);
} else {
return v;
}
});
pluto.reader.blocks.assoc_binding = (function pluto$reader$blocks$assoc_binding(m,k,v){
var resolved_value = pluto.reader.blocks.resolve_binding_value(pluto.reader.blocks.substitute_query_values(m,v));
var o = pluto.reader.blocks.resolve_binding_key(k,resolved_value);
if((o instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,o,resolved_value);
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,o], 0));
}
});
pluto.reader.blocks.interpolate = (function pluto$reader$blocks$interpolate(values,s){
return cljs.core.reduce_kv((function (p1__2079_SHARP_,p2__2080_SHARP_,p3__2081_SHARP_){
return clojure.string.replace(p1__2079_SHARP_,["${",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__2080_SHARP_)].join('')),"}"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p3__2081_SHARP_)].join(''));
}),s,values);
});
pluto.reader.blocks.replace_atom = (function pluto$reader$blocks$replace_atom(values,o){
if(cljs.core.contains_QMARK_(values,o)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,o);
} else {
if((o instanceof cljs.core.Symbol)){
return null;
} else {
if(typeof o === 'string'){
return pluto.utils.interpolate(values,o);
} else {
if(((cljs.core.fn_QMARK_(o)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$event,cljs.core.meta(o))))){
return (function (p1__2082_SHARP_){
return (o.cljs$core$IFn$_invoke$arity$2 ? o.cljs$core$IFn$_invoke$arity$2(p1__2082_SHARP_,values) : o.call(null,p1__2082_SHARP_,values));
});
} else {
return o;

}
}
}
}
});
pluto.reader.blocks.walkup_upto_leaf = (function pluto$reader$blocks$walkup_upto_leaf(f,lp_QMARK_,lf,tree){
if(cljs.core.truth_((lp_QMARK_.cljs$core$IFn$_invoke$arity$1 ? lp_QMARK_.cljs$core$IFn$_invoke$arity$1(tree) : lp_QMARK_.call(null,tree)))){
return (lf.cljs$core$IFn$_invoke$arity$1 ? lf.cljs$core$IFn$_invoke$arity$1(tree) : lf.call(null,tree));
} else {
var res = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(tree) : f.call(null,tree));
var f2 = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(pluto.reader.blocks.walkup_upto_leaf,f,lp_QMARK_,lf);
if(cljs.core.list_QMARK_(res)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f2,res));
} else {
if(cljs.core.map_entry_QMARK_(res)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f2,res));
} else {
if(cljs.core.seq_QMARK_(res)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f2,res));
} else {
if(cljs.core.coll_QMARK_(res)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(res),cljs.core.map.cljs$core$IFn$_invoke$arity$2(f2,res));
} else {
return res;

}
}
}
}
}
});

pluto.reader.blocks.let_block = (function pluto$reader$blocks$let_block(p__2085,children){
var map__2086 = p__2085;
var map__2086__$1 = ((((!((map__2086 == null)))?(((((map__2086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2086):map__2086);
var prev_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2086__$1,cljs.core.cst$kw$prev_DASH_env);
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2086__$1,cljs.core.cst$kw$ctx);
var ext = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2086__$1,cljs.core.cst$kw$ext);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2086__$1,cljs.core.cst$kw$bindings);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2086__$1,cljs.core.cst$kw$env);
var env_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,prev_env], 0));
var map__2088 = (pluto.reader.blocks.bindings__GT_env.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.blocks.bindings__GT_env.cljs$core$IFn$_invoke$arity$4(env_SINGLEQUOTE_,ctx,ext,bindings) : pluto.reader.blocks.bindings__GT_env.call(null,env_SINGLEQUOTE_,ctx,ext,bindings));
var map__2088__$1 = ((((!((map__2088 == null)))?(((((map__2088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2088):map__2088);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2088__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2088__$1,cljs.core.cst$kw$errors);
var values = cljs.core.reduce_kv(pluto.reader.blocks.assoc_binding,env_SINGLEQUOTE_,data);
return pluto.reader.blocks.walkup_upto_leaf(((function (env_SINGLEQUOTE_,map__2088,map__2088__$1,data,errors,values,map__2086,map__2086__$1,prev_env,ctx,ext,bindings,env){
return (function (p1__2083_SHARP_){
return pluto.reader.blocks.replace_atom(values,p1__2083_SHARP_);
});})(env_SINGLEQUOTE_,map__2088,map__2088__$1,data,errors,values,map__2086,map__2086__$1,prev_env,ctx,ext,bindings,env))
,((function (env_SINGLEQUOTE_,map__2088,map__2088__$1,data,errors,values,map__2086,map__2086__$1,prev_env,ctx,ext,bindings,env){
return (function (p1__2084_SHARP_){
return ((cljs.core.vector_QMARK_(p1__2084_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pluto.reader.blocks.let_block,cljs.core.first(p1__2084_SHARP_))));
});})(env_SINGLEQUOTE_,map__2088,map__2088__$1,data,errors,values,map__2086,map__2086__$1,prev_env,ctx,ext,bindings,env))
,((function (env_SINGLEQUOTE_,map__2088,map__2088__$1,data,errors,values,map__2086,map__2086__$1,prev_env,ctx,ext,bindings,env){
return (function (p__2090){
var vec__2091 = p__2090;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2091,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2091,(1),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2091,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.let_block,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$prev_DASH_env,values),children__$1], null);
});})(env_SINGLEQUOTE_,map__2088,map__2088__$1,data,errors,values,map__2086,map__2086__$1,prev_env,ctx,ext,bindings,env))
,children);
});
pluto.reader.blocks.properties_QMARK_ = (function pluto$reader$blocks$properties_QMARK_(o){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$properties,o);
});
pluto.reader.blocks.static_value_QMARK_ = (function pluto$reader$blocks$static_value_QMARK_(v){
var or__3949__auto__ = pluto.utils.primitive_QMARK_(v);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.map_QMARK_(v);
}
});
pluto.reader.blocks.query_QMARK_ = (function pluto$reader$blocks$query_QMARK_(binding_value){
return cljs.core.vector_QMARK_(binding_value);
});
pluto.reader.blocks.valid_bindings_QMARK_ = (function pluto$reader$blocks$valid_bindings_QMARK_(k,v){
var and__3938__auto__ = (((k instanceof cljs.core.Symbol)) || (cljs.core.map_QMARK_(k)));
if(and__3938__auto__){
var or__3949__auto__ = (v instanceof cljs.core.Symbol);
if(or__3949__auto__){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = pluto.reader.blocks.static_value_QMARK_(v);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return pluto.reader.blocks.query_QMARK_(v);
}
}
} else {
return and__3938__auto__;
}
});
pluto.reader.blocks.resolve_symbol = (function pluto$reader$blocks$resolve_symbol(m,s){
if((((s instanceof cljs.core.Symbol)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$properties,s)))){
var G__2094 = m;
var G__2095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,s);
return (pluto.reader.blocks.resolve_symbol.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.blocks.resolve_symbol.cljs$core$IFn$_invoke$arity$2(G__2094,G__2095) : pluto.reader.blocks.resolve_symbol.call(null,G__2094,G__2095));
} else {
return s;
}
});
/**
 * Resolve key/value pairs, specifically:
 * * 'properties are kept as is
 * * symbol values are replaced by their respective values if already present in the let scope
 * * queries (defined as vectors) are replaced by atoms
 * 
 * Returns a map of:
 * * :data the resolved values
 * * :errors the errors
 */
pluto.reader.blocks.resolve_env = (function pluto$reader$blocks$resolve_env(ctx,ext,p__2096,k,v){
var map__2097 = p__2096;
var map__2097__$1 = ((((!((map__2097 == null)))?(((((map__2097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2097):map__2097);
var m = map__2097__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2097__$1,cljs.core.cst$kw$data);
if(cljs.core.truth_(pluto.reader.blocks.valid_bindings_QMARK_(k,v))){
if(cljs.core.truth_(pluto.reader.blocks.properties_QMARK_(v))){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$sym$properties], null),k);
} else {
if(cljs.core.truth_(pluto.reader.blocks.static_value_QMARK_(v))){
if(cljs.core.map_QMARK_(k)){
var temp__5455__auto__ = pluto.reader.destructuring.destructure(k,v);
if(cljs.core.truth_(temp__5455__auto__)){
var o = temp__5455__auto__;
return pluto.reader.errors.merge_results.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,o], 0));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_destructuring_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null))], null)], null);
}
} else {
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,k], null),v);
}
} else {
if(cljs.core.truth_(pluto.reader.blocks.query_QMARK_(v))){
var map__2099 = (function (){var G__2100 = ctx;
var G__2101 = ext;
var G__2102 = cljs.core.cst$kw$query;
var G__2103 = v;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__2100,G__2101,G__2102,G__2103) : pluto.reader.types.resolve.call(null,G__2100,G__2101,G__2102,G__2103));
})();
var map__2099__$1 = ((((!((map__2099 == null)))?(((((map__2099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2099):map__2099);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2099__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2099__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,k], null),data__$1),errors);
} else {
return null;
}
}
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null))], null)], null);
}
});
pluto.reader.blocks.valid_bindings_form_QMARK_ = (function pluto$reader$blocks$valid_bindings_form_QMARK_(bindings){
return cljs.core.even_QMARK_(cljs.core.count(bindings));
});
pluto.reader.blocks.bindings__GT_env = (function pluto$reader$blocks$bindings__GT_env(prev_env,ctx,ext,bindings){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accum,p__2105){
var vec__2106 = p__2105;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2106,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2106,(1),null);
return pluto.reader.blocks.resolve_env(ctx,ext,accum,k,pluto.reader.blocks.resolve_symbol(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(accum),v));
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,prev_env], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings)));
});
pluto.reader.blocks.validate_bindings = (function pluto$reader$blocks$validate_bindings(bindings){
if(cljs.core.truth_(pluto.reader.blocks.valid_bindings_form_QMARK_(bindings))){
return cljs.core.not_empty((function (){var binding_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (binding_pairs){
return (function (p1__2110_SHARP_){
return pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_bindings,p1__2110_SHARP_);
});})(binding_pairs))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (binding_pairs){
return (function (p1__2109_SHARP_){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.reader.blocks.valid_bindings_QMARK_,p1__2109_SHARP_));
});})(binding_pairs))
,binding_pairs)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(pluto.reader.destructuring.validate_destructure_bindings,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.sequential_QMARK_,cljs.core.map_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,binding_pairs))], 0)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_bindings_DASH_format,bindings)], null);
}
});
pluto.reader.blocks.prop_env_from_bindings = (function pluto$reader$blocks$prop_env_from_bindings(bindings){
var G__2112 = bindings;
var G__2112__$1 = (((G__2112 == null))?null:cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),G__2112));
var G__2112__$2 = (((G__2112__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__2112,G__2112__$1){
return (function (p1__2111_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__2111_SHARP_),cljs.core.cst$sym$properties);
});})(G__2112,G__2112__$1))
,G__2112__$1));
var G__2112__$3 = (((G__2112__$2 == null))?null:cljs.core.first(G__2112__$2));
var G__2112__$4 = (((G__2112__$3 == null))?null:cljs.core.reverse(G__2112__$3));
if((G__2112__$4 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,G__2112__$4);
}
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$let,(function (ctx,ext,p__2113){
var vec__2114 = p__2113;
var seq__2115 = cljs.core.seq(vec__2114);
var first__2116 = cljs.core.first(seq__2115);
var seq__2115__$1 = cljs.core.next(seq__2115);
var _ = first__2116;
var first__2116__$1 = cljs.core.first(seq__2115__$1);
var seq__2115__$2 = cljs.core.next(seq__2115__$1);
var bindings = first__2116__$1;
var body = seq__2115__$2;
var temp__5455__auto__ = pluto.reader.blocks.validate_bindings(bindings);
if(cljs.core.truth_(temp__5455__auto__)){
var errors = temp__5455__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(body))){
var prop_env = pluto.reader.blocks.prop_env_from_bindings(bindings);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.let_block,(function (){var G__2117 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ctx,ctx,cljs.core.cst$kw$ext,ext,cljs.core.cst$kw$bindings,bindings], null);
if(cljs.core.truth_(prop_env)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__2117,cljs.core.cst$kw$env,prop_env);
} else {
return G__2117;
}
})(),cljs.core.last(body)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_let_DASH_body,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,body], null))], null)], null);
}
}
}));
pluto.reader.blocks.when_block = (function pluto$reader$blocks$when_block(p__2118,body){
var map__2119 = p__2118;
var map__2119__$1 = ((((!((map__2119 == null)))?(((((map__2119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2119):map__2119);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2119__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return body;
} else {
return null;
}
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$when,(function (_,___$1,p__2121){
var vec__2122 = p__2121;
var seq__2123 = cljs.core.seq(vec__2122);
var first__2124 = cljs.core.first(seq__2123);
var seq__2123__$1 = cljs.core.next(seq__2123);
var ___$2 = first__2124;
var first__2124__$1 = cljs.core.first(seq__2123__$1);
var seq__2123__$2 = cljs.core.next(seq__2123__$1);
var test = first__2124__$1;
var body = seq__2123__$2;
var parts = vec__2122;
var errors = (function (){var G__2125 = null;
var G__2125__$1 = ((!((test instanceof cljs.core.Symbol)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2125,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unsupported_DASH_test_DASH_type,test)):G__2125);
if(cljs.core.empty_QMARK_(body)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2125__$1,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_when_DASH_block,parts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$empty_DASH_body_DASH_clause,body], null)));
} else {
return G__2125__$1;
}
})();
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.when_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,test], null)], null),body)], null);
}
}));
pluto.reader.blocks.if_block = (function pluto$reader$blocks$if_block(var_args){
var args__4534__auto__ = [];
var len__4531__auto___2131 = arguments.length;
var i__4532__auto___2132 = (0);
while(true){
if((i__4532__auto___2132 < len__4531__auto___2131)){
args__4534__auto__.push((arguments[i__4532__auto___2132]));

var G__2133 = (i__4532__auto___2132 + (1));
i__4532__auto___2132 = G__2133;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic = (function (p__2128,body){
var map__2129 = p__2128;
var map__2129__$1 = ((((!((map__2129 == null)))?(((((map__2129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2129):map__2129);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2129__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return cljs.core.first(body);
} else {
return cljs.core.second(body);
}
});

pluto.reader.blocks.if_block.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.reader.blocks.if_block.cljs$lang$applyTo = (function (seq2126){
var G__2127 = cljs.core.first(seq2126);
var seq2126__$1 = cljs.core.next(seq2126);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2127,seq2126__$1);
});

pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$if,(function (_,___$1,p__2134){
var vec__2135 = p__2134;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2135,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2135,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2135,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2135,(3),null);
var parts = vec__2135;
var parts_count = cljs.core.count(cljs.core.rest(parts));
var errors = (function (){var G__2138 = null;
var G__2138__$1 = ((!((test instanceof cljs.core.Symbol)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2138,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unsupported_DASH_test_DASH_type,test)):G__2138);
var G__2138__$2 = ((((3) < parts_count))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2138__$1,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_if_DASH_block,parts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$too_DASH_many_DASH_clauses,cljs.core.cst$kw$clause_DASH_count,parts_count], null))):G__2138__$1);
if(((3) > parts_count)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2138__$2,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_if_DASH_block,parts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$three_DASH_clauses_DASH_required,cljs.core.cst$kw$clause_DASH_count,parts_count], null)));
} else {
return G__2138__$2;
}
})();
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.if_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,test], null)], null),(new cljs.core.List(null,then,(new cljs.core.List(null,else$,null,(1),null)),(2),null)))], null);
}
}));
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (ctx,ext,block){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$unknown_DASH_block_DASH_type,cljs.core.cst$kw$ctx,ctx,cljs.core.cst$kw$block,block], null)], null)], null);
}));
