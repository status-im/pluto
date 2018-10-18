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
pluto.reader.blocks.substitute_query_values = (function pluto$reader$blocks$substitute_query_values(m,v){
return clojure.walk.prewalk((function (p1__2078_SHARP_){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__2078_SHARP_);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return p1__2078_SHARP_;
}
}),v);
});
pluto.reader.blocks.resolve_rhs = (function pluto$reader$blocks$resolve_rhs(env,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$sym$properties)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$pluto$reader_SLASH_properties);
} else {
if((v instanceof cljs.core.Symbol)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,v);
} else {
if(cljs.core.vector_QMARK_(v)){
var G__2079 = (function (){var G__2080 = pluto.reader.blocks.substitute_query_values(env,v);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2080) : re_frame.core.subscribe.call(null,G__2080));
})();
if((G__2079 == null)){
return null;
} else {
return cljs.core.deref(G__2079);
}
} else {
return v;

}
}
}
});
pluto.reader.blocks.destructure_into = (function pluto$reader$blocks$destructure_into(env,k,v){
if(cljs.core.map_QMARK_(k)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(pluto.reader.destructuring.destructure(k,v)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,k,v);
}
});
pluto.reader.blocks.resolve_binding = (function pluto$reader$blocks$resolve_binding(env,k,v){
var v_SINGLEQUOTE_ = pluto.reader.blocks.resolve_rhs(env,v);
return pluto.reader.blocks.destructure_into(env,k,v_SINGLEQUOTE_);
});
pluto.reader.blocks.resolve_bindings_into = (function pluto$reader$blocks$resolve_bindings_into(env,bindings){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__2081_SHARP_,p2__2082_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(pluto.reader.blocks.resolve_binding,p1__2081_SHARP_,p2__2082_SHARP_);
}),(function (){var or__3949__auto__ = env;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
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
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.fn_QMARK_(o);
if(and__3938__auto__){
return cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(o));
} else {
return and__3938__auto__;
}
})())){
return (function (p1__2083_SHARP_){
return (o.cljs$core$IFn$_invoke$arity$2 ? o.cljs$core$IFn$_invoke$arity$2(p1__2083_SHARP_,values) : o.call(null,p1__2083_SHARP_,values));
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

pluto.reader.blocks.let_block = (function pluto$reader$blocks$let_block(p__2086,children){
var map__2087 = p__2086;
var map__2087__$1 = ((((!((map__2087 == null)))?(((((map__2087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2087):map__2087);
var prev_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2087__$1,cljs.core.cst$kw$prev_DASH_env);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2087__$1,cljs.core.cst$kw$bindings);
var new_env = pluto.reader.blocks.resolve_bindings_into(prev_env,bindings);
return pluto.reader.blocks.walkup_upto_leaf(((function (new_env,map__2087,map__2087__$1,prev_env,bindings){
return (function (p1__2084_SHARP_){
return pluto.reader.blocks.replace_atom(new_env,p1__2084_SHARP_);
});})(new_env,map__2087,map__2087__$1,prev_env,bindings))
,((function (new_env,map__2087,map__2087__$1,prev_env,bindings){
return (function (p1__2085_SHARP_){
var and__3938__auto__ = cljs.core.vector_QMARK_(p1__2085_SHARP_);
if(and__3938__auto__){
var G__2092 = cljs.core.first(p1__2085_SHARP_);
var fexpr__2091 = cljs.core.PersistentHashSet.createAsIfByAssoc([pluto.reader.blocks.for_block,pluto.reader.blocks.let_block]);
return (fexpr__2091.cljs$core$IFn$_invoke$arity$1 ? fexpr__2091.cljs$core$IFn$_invoke$arity$1(G__2092) : fexpr__2091.call(null,G__2092));
} else {
return and__3938__auto__;
}
});})(new_env,map__2087,map__2087__$1,prev_env,bindings))
,((function (new_env,map__2087,map__2087__$1,prev_env,bindings){
return (function (p__2093){
var vec__2094 = p__2093;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2094,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2094,(1),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2094,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$prev_DASH_env,new_env),children__$1], null);
});})(new_env,map__2087,map__2087__$1,prev_env,bindings))
,children);
});
pluto.reader.blocks.for_block = (function pluto$reader$blocks$for_block(p__2097,children){
var map__2098 = p__2097;
var map__2098__$1 = ((((!((map__2098 == null)))?(((((map__2098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2098):map__2098);
var wrapper_component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2098__$1,cljs.core.cst$kw$wrapper_DASH_component);
var prev_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2098__$1,cljs.core.cst$kw$prev_DASH_env);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2098__$1,cljs.core.cst$kw$bindings);
var vec__2100 = bindings;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2100,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2100,(1),null);
var for_values = pluto.reader.blocks.resolve_rhs(prev_env,v);
if(cljs.core.sequential_QMARK_(for_values)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wrapper_component,cljs.core.PersistentArrayMap.EMPTY], null),(function (){var iter__4324__auto__ = ((function (vec__2100,k,v,for_values,map__2098,map__2098__$1,wrapper_component,prev_env,bindings){
return (function pluto$reader$blocks$for_block_$_iter__2103(s__2104){
return (new cljs.core.LazySeq(null,((function (vec__2100,k,v,for_values,map__2098,map__2098__$1,wrapper_component,prev_env,bindings){
return (function (){
var s__2104__$1 = s__2104;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__2104__$1);
if(temp__5457__auto__){
var s__2104__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2104__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__2104__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__2106 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__2105 = (0);
while(true){
if((i__2105 < size__4323__auto__)){
var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__2105);
cljs.core.chunk_append(b__2106,pluto.reader.blocks.let_block(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$prev_DASH_env,prev_env,cljs.core.cst$kw$bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null)], null),children));

var G__2107 = (i__2105 + (1));
i__2105 = G__2107;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2106),pluto$reader$blocks$for_block_$_iter__2103(cljs.core.chunk_rest(s__2104__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2106),null);
}
} else {
var val = cljs.core.first(s__2104__$2);
return cljs.core.cons(pluto.reader.blocks.let_block(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$prev_DASH_env,prev_env,cljs.core.cst$kw$bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null)], null),children),pluto$reader$blocks$for_block_$_iter__2103(cljs.core.rest(s__2104__$2)));
}
} else {
return null;
}
break;
}
});})(vec__2100,k,v,for_values,map__2098,map__2098__$1,wrapper_component,prev_env,bindings))
,null,null));
});})(vec__2100,k,v,for_values,map__2098,map__2098__$1,wrapper_component,prev_env,bindings))
;
return iter__4324__auto__(for_values);
})());
} else {
return null;
}
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
pluto.reader.blocks.valid_bindings_form_QMARK_ = (function pluto$reader$blocks$valid_bindings_form_QMARK_(bindings){
return cljs.core.even_QMARK_(cljs.core.count(bindings));
});
pluto.reader.blocks.resolve_and_validate_queries = (function pluto$reader$blocks$resolve_and_validate_queries(ctx,ext,bindings){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accum,p__2108){
var vec__2109 = p__2108;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2109,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2109,(1),null);
if(cljs.core.vector_QMARK_(v)){
var map__2112 = (function (){var G__2113 = ctx;
var G__2114 = ext;
var G__2115 = cljs.core.cst$kw$query;
var G__2116 = v;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__2113,G__2114,G__2115,G__2116) : pluto.reader.types.resolve.call(null,G__2113,G__2114,G__2115,G__2116));
})();
var map__2112__$1 = ((((!((map__2112 == null)))?(((((map__2112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2112):map__2112);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2112__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2112__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(accum,cljs.core.cst$kw$errors,cljs.core.concat,errors);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(accum,cljs.core.cst$kw$data,cljs.core.concat,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,data], null));
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(accum,cljs.core.cst$kw$data,cljs.core.concat,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
});
pluto.reader.blocks.validate_bindings = (function pluto$reader$blocks$validate_bindings(bindings){
if(cljs.core.truth_(pluto.reader.blocks.valid_bindings_form_QMARK_(bindings))){
return cljs.core.not_empty((function (){var binding_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (binding_pairs){
return (function (p1__2119_SHARP_){
return pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_bindings,p1__2119_SHARP_);
});})(binding_pairs))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (binding_pairs){
return (function (p1__2118_SHARP_){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.reader.blocks.valid_bindings_QMARK_,p1__2118_SHARP_));
});})(binding_pairs))
,binding_pairs)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(pluto.reader.destructuring.validate_destructure_bindings,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.sequential_QMARK_,cljs.core.map_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,binding_pairs))], 0)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_bindings_DASH_format,bindings)], null);
}
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$let,(function (ctx,ext,p__2120){
var vec__2121 = p__2120;
var seq__2122 = cljs.core.seq(vec__2121);
var first__2123 = cljs.core.first(seq__2122);
var seq__2122__$1 = cljs.core.next(seq__2122);
var _ = first__2123;
var first__2123__$1 = cljs.core.first(seq__2122__$1);
var seq__2122__$2 = cljs.core.next(seq__2122__$1);
var bindings = first__2123__$1;
var body = seq__2122__$2;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(body))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_let_DASH_body,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,body], null))], null)], null);
} else {
var binding_errors = pluto.reader.blocks.validate_bindings(bindings);
if(cljs.core.truth_(cljs.core.not_empty(binding_errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,binding_errors], null);
} else {
var map__2124 = pluto.reader.blocks.resolve_and_validate_queries(ctx,ext,bindings);
var map__2124__$1 = ((((!((map__2124 == null)))?(((((map__2124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2124):map__2124);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2124__$1,cljs.core.cst$kw$errors);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2124__$1,cljs.core.cst$kw$data);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.let_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bindings,data], null),cljs.core.last(body)], null)], null);
}
}
}
}));
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$for,(function (ctx,ext,p__2126){
var vec__2127 = p__2126;
var seq__2128 = cljs.core.seq(vec__2127);
var first__2129 = cljs.core.first(seq__2128);
var seq__2128__$1 = cljs.core.next(seq__2128);
var _ = first__2129;
var first__2129__$1 = cljs.core.first(seq__2128__$1);
var seq__2128__$2 = cljs.core.next(seq__2128__$1);
var binding = first__2129__$1;
var body = seq__2128__$2;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(body))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_for_DASH_body,body)], null)], null);
} else {
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(binding))) || (cljs.core.not((function (){var G__2133 = cljs.core.first(binding);
var fexpr__2132 = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.map_QMARK_);
return (fexpr__2132.cljs$core$IFn$_invoke$arity$1 ? fexpr__2132.cljs$core$IFn$_invoke$arity$1(G__2133) : fexpr__2132.call(null,G__2133));
})())))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_for_DASH_binding,binding)], null)], null);
} else {
var wrapper_component = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$components,cljs.core.cst$sym$view,cljs.core.cst$kw$value], null));
var map__2134 = pluto.reader.blocks.resolve_and_validate_queries(ctx,ext,binding);
var map__2134__$1 = ((((!((map__2134 == null)))?(((((map__2134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2134):map__2134);
var result = map__2134__$1;
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2134__$1,cljs.core.cst$kw$errors);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2134__$1,cljs.core.cst$kw$data);
var errors__$1 = (function (){var G__2136 = errors;
if((wrapper_component == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__2136,errors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_component,cljs.core.cst$sym$wrapper_DASH_component)], 0));
} else {
return G__2136;
}
})();
if(cljs.core.truth_(cljs.core.not_empty(errors__$1))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors__$1], null);
} else {
var binding_SINGLEQUOTE_ = data;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.for_block,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$bindings,data,cljs.core.cst$kw$wrapper_DASH_component,wrapper_component], null),cljs.core.last(body)], null)], null);
}

}
}
}));
pluto.reader.blocks.when_block = (function pluto$reader$blocks$when_block(p__2137,body){
var map__2138 = p__2137;
var map__2138__$1 = ((((!((map__2138 == null)))?(((((map__2138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2138):map__2138);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2138__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return body;
} else {
return null;
}
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$when,(function (_,___$1,p__2140){
var vec__2141 = p__2140;
var seq__2142 = cljs.core.seq(vec__2141);
var first__2143 = cljs.core.first(seq__2142);
var seq__2142__$1 = cljs.core.next(seq__2142);
var ___$2 = first__2143;
var first__2143__$1 = cljs.core.first(seq__2142__$1);
var seq__2142__$2 = cljs.core.next(seq__2142__$1);
var test = first__2143__$1;
var body = seq__2142__$2;
var parts = vec__2141;
var errors = (function (){var G__2144 = null;
var G__2144__$1 = ((!((test instanceof cljs.core.Symbol)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2144,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unsupported_DASH_test_DASH_type,test)):G__2144);
if(cljs.core.empty_QMARK_(body)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2144__$1,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_when_DASH_block,parts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$empty_DASH_body_DASH_clause,body], null)));
} else {
return G__2144__$1;
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
var len__4531__auto___2150 = arguments.length;
var i__4532__auto___2151 = (0);
while(true){
if((i__4532__auto___2151 < len__4531__auto___2150)){
args__4534__auto__.push((arguments[i__4532__auto___2151]));

var G__2152 = (i__4532__auto___2151 + (1));
i__4532__auto___2151 = G__2152;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic = (function (p__2147,body){
var map__2148 = p__2147;
var map__2148__$1 = ((((!((map__2148 == null)))?(((((map__2148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2148):map__2148);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2148__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return cljs.core.first(body);
} else {
return cljs.core.second(body);
}
});

pluto.reader.blocks.if_block.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.reader.blocks.if_block.cljs$lang$applyTo = (function (seq2145){
var G__2146 = cljs.core.first(seq2145);
var seq2145__$1 = cljs.core.next(seq2145);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2146,seq2145__$1);
});

pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$if,(function (_,___$1,p__2153){
var vec__2154 = p__2153;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2154,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2154,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2154,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2154,(3),null);
var parts = vec__2154;
var parts_count = cljs.core.count(cljs.core.rest(parts));
var errors = (function (){var G__2157 = null;
var G__2157__$1 = ((!((test instanceof cljs.core.Symbol)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2157,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unsupported_DASH_test_DASH_type,test)):G__2157);
var G__2157__$2 = ((((3) < parts_count))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2157__$1,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_if_DASH_block,parts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$too_DASH_many_DASH_clauses,cljs.core.cst$kw$clause_DASH_count,parts_count], null))):G__2157__$1);
if(((3) > parts_count)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2157__$2,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_if_DASH_block,parts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$three_DASH_clauses_DASH_required,cljs.core.cst$kw$clause_DASH_count,parts_count], null)));
} else {
return G__2157__$2;
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
