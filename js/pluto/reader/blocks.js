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
return (function (ctx,ext,p__2164){
var vec__2165 = p__2164;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2165,(0),null);
return type;
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,cljs.core.cst$kw$default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
pluto.reader.blocks.substitute_query_values = (function pluto$reader$blocks$substitute_query_values(m,v){
return clojure.walk.prewalk((function (p1__2168_SHARP_){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__2168_SHARP_);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return p1__2168_SHARP_;
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
var G__2169 = (function (){var G__2170 = pluto.reader.blocks.substitute_query_values(env,v);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__2170) : re_frame.core.subscribe.call(null,G__2170));
})();
if((G__2169 == null)){
return null;
} else {
return cljs.core.deref(G__2169);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__2171_SHARP_,p2__2172_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(pluto.reader.blocks.resolve_binding,p1__2171_SHARP_,p2__2172_SHARP_);
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
return (function (p1__2173_SHARP_){
return (o.cljs$core$IFn$_invoke$arity$2 ? o.cljs$core$IFn$_invoke$arity$2(p1__2173_SHARP_,values) : o.call(null,p1__2173_SHARP_,values));
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

pluto.reader.blocks.let_block = (function pluto$reader$blocks$let_block(p__2176,children){
var map__2177 = p__2176;
var map__2177__$1 = ((((!((map__2177 == null)))?(((((map__2177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2177):map__2177);
var prev_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2177__$1,cljs.core.cst$kw$prev_DASH_env);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2177__$1,cljs.core.cst$kw$bindings);
var new_env = pluto.reader.blocks.resolve_bindings_into(prev_env,bindings);
return pluto.reader.blocks.walkup_upto_leaf(((function (new_env,map__2177,map__2177__$1,prev_env,bindings){
return (function (p1__2174_SHARP_){
return pluto.reader.blocks.replace_atom(new_env,p1__2174_SHARP_);
});})(new_env,map__2177,map__2177__$1,prev_env,bindings))
,((function (new_env,map__2177,map__2177__$1,prev_env,bindings){
return (function (p1__2175_SHARP_){
var and__3938__auto__ = cljs.core.vector_QMARK_(p1__2175_SHARP_);
if(and__3938__auto__){
var G__2182 = cljs.core.first(p1__2175_SHARP_);
var fexpr__2181 = cljs.core.PersistentHashSet.createAsIfByAssoc([pluto.reader.blocks.for_block,pluto.reader.blocks.let_block]);
return (fexpr__2181.cljs$core$IFn$_invoke$arity$1 ? fexpr__2181.cljs$core$IFn$_invoke$arity$1(G__2182) : fexpr__2181.call(null,G__2182));
} else {
return and__3938__auto__;
}
});})(new_env,map__2177,map__2177__$1,prev_env,bindings))
,((function (new_env,map__2177,map__2177__$1,prev_env,bindings){
return (function (p__2183){
var vec__2184 = p__2183;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2184,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2184,(1),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2184,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$prev_DASH_env,new_env),children__$1], null);
});})(new_env,map__2177,map__2177__$1,prev_env,bindings))
,children);
});
pluto.reader.blocks.for_block = (function pluto$reader$blocks$for_block(p__2187,children){
var map__2188 = p__2187;
var map__2188__$1 = ((((!((map__2188 == null)))?(((((map__2188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2188):map__2188);
var wrapper_component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2188__$1,cljs.core.cst$kw$wrapper_DASH_component);
var prev_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2188__$1,cljs.core.cst$kw$prev_DASH_env);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2188__$1,cljs.core.cst$kw$bindings);
var vec__2190 = bindings;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2190,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2190,(1),null);
var for_values = pluto.reader.blocks.resolve_rhs(prev_env,v);
if(cljs.core.sequential_QMARK_(for_values)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wrapper_component,cljs.core.PersistentArrayMap.EMPTY], null),(function (){var iter__4324__auto__ = ((function (vec__2190,k,v,for_values,map__2188,map__2188__$1,wrapper_component,prev_env,bindings){
return (function pluto$reader$blocks$for_block_$_iter__2193(s__2194){
return (new cljs.core.LazySeq(null,((function (vec__2190,k,v,for_values,map__2188,map__2188__$1,wrapper_component,prev_env,bindings){
return (function (){
var s__2194__$1 = s__2194;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__2194__$1);
if(temp__5457__auto__){
var s__2194__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2194__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__2194__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__2196 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__2195 = (0);
while(true){
if((i__2195 < size__4323__auto__)){
var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__2195);
cljs.core.chunk_append(b__2196,pluto.reader.blocks.let_block(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$prev_DASH_env,prev_env,cljs.core.cst$kw$bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null)], null),children));

var G__2197 = (i__2195 + (1));
i__2195 = G__2197;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2196),pluto$reader$blocks$for_block_$_iter__2193(cljs.core.chunk_rest(s__2194__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2196),null);
}
} else {
var val = cljs.core.first(s__2194__$2);
return cljs.core.cons(pluto.reader.blocks.let_block(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$prev_DASH_env,prev_env,cljs.core.cst$kw$bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null)], null),children),pluto$reader$blocks$for_block_$_iter__2193(cljs.core.rest(s__2194__$2)));
}
} else {
return null;
}
break;
}
});})(vec__2190,k,v,for_values,map__2188,map__2188__$1,wrapper_component,prev_env,bindings))
,null,null));
});})(vec__2190,k,v,for_values,map__2188,map__2188__$1,wrapper_component,prev_env,bindings))
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accum,p__2198){
var vec__2199 = p__2198;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2199,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2199,(1),null);
if(cljs.core.vector_QMARK_(v)){
var map__2202 = (function (){var G__2203 = ctx;
var G__2204 = ext;
var G__2205 = cljs.core.cst$kw$query;
var G__2206 = v;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__2203,G__2204,G__2205,G__2206) : pluto.reader.types.resolve.call(null,G__2203,G__2204,G__2205,G__2206));
})();
var map__2202__$1 = ((((!((map__2202 == null)))?(((((map__2202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2202):map__2202);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2202__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2202__$1,cljs.core.cst$kw$errors);
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
return (function (p1__2209_SHARP_){
return pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_bindings,p1__2209_SHARP_);
});})(binding_pairs))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (binding_pairs){
return (function (p1__2208_SHARP_){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.reader.blocks.valid_bindings_QMARK_,p1__2208_SHARP_));
});})(binding_pairs))
,binding_pairs)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(pluto.reader.destructuring.validate_destructure_bindings,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.sequential_QMARK_,cljs.core.map_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,binding_pairs))], 0)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_bindings_DASH_format,bindings)], null);
}
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$let,(function (ctx,ext,p__2210){
var vec__2211 = p__2210;
var seq__2212 = cljs.core.seq(vec__2211);
var first__2213 = cljs.core.first(seq__2212);
var seq__2212__$1 = cljs.core.next(seq__2212);
var _ = first__2213;
var first__2213__$1 = cljs.core.first(seq__2212__$1);
var seq__2212__$2 = cljs.core.next(seq__2212__$1);
var bindings = first__2213__$1;
var body = seq__2212__$2;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(body))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_let_DASH_body,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,body], null))], null)], null);
} else {
var binding_errors = pluto.reader.blocks.validate_bindings(bindings);
if(cljs.core.truth_(cljs.core.not_empty(binding_errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,binding_errors], null);
} else {
var map__2214 = pluto.reader.blocks.resolve_and_validate_queries(ctx,ext,bindings);
var map__2214__$1 = ((((!((map__2214 == null)))?(((((map__2214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2214):map__2214);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2214__$1,cljs.core.cst$kw$errors);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2214__$1,cljs.core.cst$kw$data);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.let_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bindings,data], null),cljs.core.last(body)], null)], null);
}
}
}
}));
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$for,(function (ctx,ext,p__2216){
var vec__2217 = p__2216;
var seq__2218 = cljs.core.seq(vec__2217);
var first__2219 = cljs.core.first(seq__2218);
var seq__2218__$1 = cljs.core.next(seq__2218);
var _ = first__2219;
var first__2219__$1 = cljs.core.first(seq__2218__$1);
var seq__2218__$2 = cljs.core.next(seq__2218__$1);
var binding = first__2219__$1;
var body = seq__2218__$2;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(body))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_for_DASH_body,body)], null)], null);
} else {
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(binding))) || (cljs.core.not((function (){var G__2223 = cljs.core.first(binding);
var fexpr__2222 = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.map_QMARK_);
return (fexpr__2222.cljs$core$IFn$_invoke$arity$1 ? fexpr__2222.cljs$core$IFn$_invoke$arity$1(G__2223) : fexpr__2222.call(null,G__2223));
})())))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_for_DASH_binding,binding)], null)], null);
} else {
var wrapper_component = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$components,cljs.core.cst$sym$view,cljs.core.cst$kw$value], null));
var map__2224 = pluto.reader.blocks.resolve_and_validate_queries(ctx,ext,binding);
var map__2224__$1 = ((((!((map__2224 == null)))?(((((map__2224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2224):map__2224);
var result = map__2224__$1;
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2224__$1,cljs.core.cst$kw$errors);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2224__$1,cljs.core.cst$kw$data);
var errors__$1 = (function (){var G__2226 = errors;
if((wrapper_component == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__2226,errors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_component,cljs.core.cst$sym$wrapper_DASH_component)], 0));
} else {
return G__2226;
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
pluto.reader.blocks.when_block = (function pluto$reader$blocks$when_block(p__2227,body){
var map__2228 = p__2227;
var map__2228__$1 = ((((!((map__2228 == null)))?(((((map__2228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2228):map__2228);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2228__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return body;
} else {
return null;
}
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$when,(function (_,___$1,p__2230){
var vec__2231 = p__2230;
var seq__2232 = cljs.core.seq(vec__2231);
var first__2233 = cljs.core.first(seq__2232);
var seq__2232__$1 = cljs.core.next(seq__2232);
var ___$2 = first__2233;
var first__2233__$1 = cljs.core.first(seq__2232__$1);
var seq__2232__$2 = cljs.core.next(seq__2232__$1);
var test = first__2233__$1;
var body = seq__2232__$2;
var parts = vec__2231;
var errors = (function (){var G__2234 = null;
var G__2234__$1 = ((!((test instanceof cljs.core.Symbol)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2234,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unsupported_DASH_test_DASH_type,test)):G__2234);
if(cljs.core.empty_QMARK_(body)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2234__$1,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_when_DASH_block,parts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$empty_DASH_body_DASH_clause,body], null)));
} else {
return G__2234__$1;
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
var len__4531__auto___2240 = arguments.length;
var i__4532__auto___2241 = (0);
while(true){
if((i__4532__auto___2241 < len__4531__auto___2240)){
args__4534__auto__.push((arguments[i__4532__auto___2241]));

var G__2242 = (i__4532__auto___2241 + (1));
i__4532__auto___2241 = G__2242;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic = (function (p__2237,body){
var map__2238 = p__2237;
var map__2238__$1 = ((((!((map__2238 == null)))?(((((map__2238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2238):map__2238);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2238__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return cljs.core.first(body);
} else {
return cljs.core.second(body);
}
});

pluto.reader.blocks.if_block.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.reader.blocks.if_block.cljs$lang$applyTo = (function (seq2235){
var G__2236 = cljs.core.first(seq2235);
var seq2235__$1 = cljs.core.next(seq2235);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2236,seq2235__$1);
});

pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$if,(function (_,___$1,p__2243){
var vec__2244 = p__2243;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2244,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2244,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2244,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2244,(3),null);
var parts = vec__2244;
var parts_count = cljs.core.count(cljs.core.rest(parts));
var errors = (function (){var G__2247 = null;
var G__2247__$1 = ((!((test instanceof cljs.core.Symbol)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2247,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unsupported_DASH_test_DASH_type,test)):G__2247);
var G__2247__$2 = ((((3) < parts_count))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2247__$1,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_if_DASH_block,parts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$too_DASH_many_DASH_clauses,cljs.core.cst$kw$clause_DASH_count,parts_count], null))):G__2247__$1);
if(((3) > parts_count)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__2247__$2,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_if_DASH_block,parts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$three_DASH_clauses_DASH_required,cljs.core.cst$kw$clause_DASH_count,parts_count], null)));
} else {
return G__2247__$2;
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
