// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.blocks');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('re_frame.core');
goog.require('pluto.reader.destructuring');
goog.require('pluto.reader.errors');
goog.require('pluto.reader.types');
goog.require('pluto.utils');
pluto.reader.blocks.block_QMARK_ = (function pluto$reader$blocks$block_QMARK_(o){
return ((cljs.core.list_QMARK_(o)) && ((cljs.core.first(o) instanceof cljs.core.Symbol)) && (cljs.core.map_QMARK_(cljs.core.second(o))));
});
if((typeof pluto !== 'undefined') && (typeof pluto.reader !== 'undefined') && (typeof pluto.reader.blocks !== 'undefined') && (typeof pluto.reader.blocks.parse !== 'undefined')){
} else {
/**
 * Parse a block element. Return hiccup data.
 */
pluto.reader.blocks.parse = (function (){var method_table__4524__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__1256 = cljs.core.get_global_hierarchy;
return (fexpr__1256.cljs$core$IFn$_invoke$arity$0 ? fexpr__1256.cljs$core$IFn$_invoke$arity$0() : fexpr__1256.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.reader.blocks","parse"),((function (method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__){
return (function (ctx,ext,parent,p__1257){
var vec__1258 = p__1257;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1258,(0),null);
return type;
});})(method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__))
,cljs.core.cst$kw$default,hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
pluto.reader.blocks.substitute_query_values = (function pluto$reader$blocks$substitute_query_values(m,v){
return clojure.walk.prewalk((function (p1__1261_SHARP_){
var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__1261_SHARP_);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = ((typeof p1__1261_SHARP_ === 'string')?cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(pluto.utils.interpolate(m,p1__1261_SHARP_)):null);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return p1__1261_SHARP_;
}
}
}),v);
});
pluto.reader.blocks.query_QMARK_ = (function pluto$reader$blocks$query_QMARK_(binding_value){
var and__4036__auto__ = cljs.core.vector_QMARK_(binding_value);
if(and__4036__auto__){
var s = cljs.core.first(binding_value);
return (((s instanceof cljs.core.Symbol)) || ((s instanceof cljs.core.Keyword)));
} else {
return and__4036__auto__;
}
});
pluto.reader.blocks.resolve_rhs = (function pluto$reader$blocks$resolve_rhs(env,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$sym$properties)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$pluto$reader_SLASH_properties);
} else {
if((v instanceof cljs.core.Symbol)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,v);
} else {
if(pluto.reader.blocks.query_QMARK_(v)){
var G__1262 = (function (){var G__1263 = pluto.reader.blocks.substitute_query_values(env,v);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__1263) : re_frame.core.subscribe.call(null,G__1263));
})();
if((G__1262 == null)){
return null;
} else {
return cljs.core.deref(G__1262);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__1264_SHARP_,p2__1265_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(pluto.reader.blocks.resolve_binding,p1__1264_SHARP_,p2__1265_SHARP_);
}),(function (){var or__4047__auto__ = env;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
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
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(pluto.utils.interpolate(values,o));
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.fn_QMARK_(o);
if(and__4036__auto__){
return cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(o));
} else {
return and__4036__auto__;
}
})())){
return (function (p1__1266_SHARP_){
return (o.cljs$core$IFn$_invoke$arity$2 ? o.cljs$core$IFn$_invoke$arity$2(p1__1266_SHARP_,values) : o.call(null,p1__1266_SHARP_,values));
});
} else {
return clojure.walk.postwalk_replace(values,o);

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

pluto.reader.blocks.let_block = (function pluto$reader$blocks$let_block(p__1269,children){
var map__1270 = p__1269;
var map__1270__$1 = (((((!((map__1270 == null))))?(((((map__1270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1270):map__1270);
var prev_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1270__$1,cljs.core.cst$kw$prev_DASH_env);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1270__$1,cljs.core.cst$kw$bindings);
var new_env = pluto.reader.blocks.resolve_bindings_into(prev_env,bindings);
return pluto.reader.blocks.walkup_upto_leaf(((function (new_env,map__1270,map__1270__$1,prev_env,bindings){
return (function (p1__1267_SHARP_){
return pluto.reader.blocks.replace_atom(new_env,p1__1267_SHARP_);
});})(new_env,map__1270,map__1270__$1,prev_env,bindings))
,((function (new_env,map__1270,map__1270__$1,prev_env,bindings){
return (function (p1__1268_SHARP_){
var and__4036__auto__ = cljs.core.vector_QMARK_(p1__1268_SHARP_);
if(and__4036__auto__){
var G__1275 = cljs.core.first(p1__1268_SHARP_);
var fexpr__1274 = cljs.core.PersistentHashSet.createAsIfByAssoc([pluto.reader.blocks.for_block,pluto.reader.blocks.let_block]);
return (fexpr__1274.cljs$core$IFn$_invoke$arity$1 ? fexpr__1274.cljs$core$IFn$_invoke$arity$1(G__1275) : fexpr__1274.call(null,G__1275));
} else {
return and__4036__auto__;
}
});})(new_env,map__1270,map__1270__$1,prev_env,bindings))
,((function (new_env,map__1270,map__1270__$1,prev_env,bindings){
return (function (p__1276){
var vec__1277 = p__1276;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1277,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1277,(1),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1277,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$prev_DASH_env,new_env),children__$1], null);
});})(new_env,map__1270,map__1270__$1,prev_env,bindings))
,children);
});
pluto.reader.blocks.for_block = (function pluto$reader$blocks$for_block(p__1280,children){
var map__1281 = p__1280;
var map__1281__$1 = (((((!((map__1281 == null))))?(((((map__1281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1281):map__1281);
var prev_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1281__$1,cljs.core.cst$kw$prev_DASH_env);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1281__$1,cljs.core.cst$kw$bindings);
var vec__1283 = bindings;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1283,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1283,(1),null);
var for_values = pluto.reader.blocks.resolve_rhs(prev_env,v);
if(cljs.core.sequential_QMARK_(for_values)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,cljs.core.PersistentArrayMap.EMPTY], null)
,(function (){var iter__4434__auto__ = ((function (vec__1283,k,v,for_values,map__1281,map__1281__$1,prev_env,bindings){
return (function pluto$reader$blocks$for_block_$_iter__1286(s__1287){
return (new cljs.core.LazySeq(null,((function (vec__1283,k,v,for_values,map__1281,map__1281__$1,prev_env,bindings){
return (function (){
var s__1287__$1 = s__1287;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__1287__$1);
if(temp__5720__auto__){
var s__1287__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1287__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__1287__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__1289 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__1288 = (0);
while(true){
if((i__1288 < size__4433__auto__)){
var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__1288);
cljs.core.chunk_append(b__1289,pluto.reader.blocks.let_block(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$prev_DASH_env,prev_env,cljs.core.cst$kw$bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null)], null),children));

var G__1290 = (i__1288 + (1));
i__1288 = G__1290;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1289),pluto$reader$blocks$for_block_$_iter__1286(cljs.core.chunk_rest(s__1287__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1289),null);
}
} else {
var val = cljs.core.first(s__1287__$2);
return cljs.core.cons(pluto.reader.blocks.let_block(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$prev_DASH_env,prev_env,cljs.core.cst$kw$bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null)], null),children),pluto$reader$blocks$for_block_$_iter__1286(cljs.core.rest(s__1287__$2)));
}
} else {
return null;
}
break;
}
});})(vec__1283,k,v,for_values,map__1281,map__1281__$1,prev_env,bindings))
,null,null));
});})(vec__1283,k,v,for_values,map__1281,map__1281__$1,prev_env,bindings))
;
return iter__4434__auto__(for_values);
})());
} else {
return null;
}
});
pluto.reader.blocks.static_value_QMARK_ = (function pluto$reader$blocks$static_value_QMARK_(v){
return ((pluto.utils.primitive_QMARK_(v)) || (cljs.core.map_QMARK_(v)));
});
pluto.reader.blocks.valid_bindings_QMARK_ = (function pluto$reader$blocks$valid_bindings_QMARK_(k,v){
return (((((k instanceof cljs.core.Symbol)) || (cljs.core.map_QMARK_(k)))) && ((((v instanceof cljs.core.Symbol)) || (pluto.reader.blocks.static_value_QMARK_(v)) || (pluto.reader.blocks.query_QMARK_(v)))));
});
pluto.reader.blocks.valid_bindings_form_QMARK_ = (function pluto$reader$blocks$valid_bindings_form_QMARK_(bindings){
return cljs.core.even_QMARK_(cljs.core.count(bindings));
});
pluto.reader.blocks.resolve_and_validate_queries = (function pluto$reader$blocks$resolve_and_validate_queries(ctx,ext,bindings){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accum,p__1291){
var vec__1292 = p__1291;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1292,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1292,(1),null);
if(cljs.core.vector_QMARK_(v)){
var map__1295 = (function (){var G__1296 = ctx;
var G__1297 = ext;
var G__1298 = cljs.core.cst$kw$query;
var G__1299 = v;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__1296,G__1297,G__1298,G__1299) : pluto.reader.types.resolve.call(null,G__1296,G__1297,G__1298,G__1299));
})();
var map__1295__$1 = (((((!((map__1295 == null))))?(((((map__1295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1295):map__1295);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1295__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1295__$1,cljs.core.cst$kw$errors);
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
if(pluto.reader.blocks.valid_bindings_form_QMARK_(bindings)){
return cljs.core.not_empty((function (){var binding_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (binding_pairs){
return (function (p1__1302_SHARP_){
return pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_bindings,p1__1302_SHARP_);
});})(binding_pairs))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (binding_pairs){
return (function (p1__1301_SHARP_){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.reader.blocks.valid_bindings_QMARK_,p1__1301_SHARP_));
});})(binding_pairs))
,binding_pairs)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(pluto.reader.destructuring.validate_destructure_bindings,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.sequential_QMARK_,cljs.core.map_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,binding_pairs))], 0)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_bindings_DASH_format,bindings)], null);
}
});
pluto.reader.blocks.valid_let_block_QMARK_ = (function pluto$reader$blocks$valid_let_block_QMARK_(body){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(body));
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$let,(function (ctx,ext,parent,p__1303){
var vec__1304 = p__1303;
var seq__1305 = cljs.core.seq(vec__1304);
var first__1306 = cljs.core.first(seq__1305);
var seq__1305__$1 = cljs.core.next(seq__1305);
var _ = first__1306;
var first__1306__$1 = cljs.core.first(seq__1305__$1);
var seq__1305__$2 = cljs.core.next(seq__1305__$1);
var bindings = first__1306__$1;
var body = seq__1305__$2;
if((!(pluto.reader.blocks.valid_let_block_QMARK_(body)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_let_DASH_body,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,body], null))], null)], null);
} else {
var binding_errors = pluto.reader.blocks.validate_bindings(bindings);
if(cljs.core.truth_(cljs.core.not_empty(binding_errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,binding_errors], null);
} else {
var map__1307 = pluto.reader.blocks.resolve_and_validate_queries(ctx,ext,bindings);
var map__1307__$1 = (((((!((map__1307 == null))))?(((((map__1307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1307):map__1307);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1307__$1,cljs.core.cst$kw$errors);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1307__$1,cljs.core.cst$kw$data);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.let_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bindings,data], null),cljs.core.last(body)], null)], null);
}
}
}
}));
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$for,(function (ctx,ext,parent,p__1309){
var vec__1310 = p__1309;
var seq__1311 = cljs.core.seq(vec__1310);
var first__1312 = cljs.core.first(seq__1311);
var seq__1311__$1 = cljs.core.next(seq__1311);
var _ = first__1312;
var first__1312__$1 = cljs.core.first(seq__1311__$1);
var seq__1311__$2 = cljs.core.next(seq__1311__$1);
var binding = first__1312__$1;
var body = seq__1311__$2;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(body))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_for_DASH_body,body)], null)], null);
} else {
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(binding))) || (cljs.core.not((function (){var G__1316 = cljs.core.first(binding);
var fexpr__1315 = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.map_QMARK_);
return (fexpr__1315.cljs$core$IFn$_invoke$arity$1 ? fexpr__1315.cljs$core$IFn$_invoke$arity$1(G__1316) : fexpr__1315.call(null,G__1316));
})())))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_for_DASH_binding,binding)], null)], null);
} else {
var map__1317 = pluto.reader.blocks.resolve_and_validate_queries(ctx,ext,binding);
var map__1317__$1 = (((((!((map__1317 == null))))?(((((map__1317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1317):map__1317);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1317__$1,cljs.core.cst$kw$errors);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1317__$1,cljs.core.cst$kw$data);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.for_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bindings,data], null),cljs.core.last(body)], null)], null);
}

}
}
}));
pluto.reader.blocks.when_block = (function pluto$reader$blocks$when_block(p__1319,body){
var map__1320 = p__1319;
var map__1320__$1 = (((((!((map__1320 == null))))?(((((map__1320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1320):map__1320);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1320__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return body;
} else {
return null;
}
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$when,(function (_,___$1,___$2,p__1322){
var vec__1323 = p__1322;
var seq__1324 = cljs.core.seq(vec__1323);
var first__1325 = cljs.core.first(seq__1324);
var seq__1324__$1 = cljs.core.next(seq__1324);
var ___$3 = first__1325;
var first__1325__$1 = cljs.core.first(seq__1324__$1);
var seq__1324__$2 = cljs.core.next(seq__1324__$1);
var test = first__1325__$1;
var body = seq__1324__$2;
var parts = vec__1323;
var errors = (function (){var G__1326 = null;
var G__1326__$1 = (((!((test instanceof cljs.core.Symbol))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__1326,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unsupported_DASH_test_DASH_type,test)):G__1326);
if(cljs.core.empty_QMARK_(body)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__1326__$1,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_when_DASH_block,parts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$empty_DASH_body_DASH_clause,body], null)));
} else {
return G__1326__$1;
}
})();
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.when_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,test], null)], null),body)], null);
}
}));
pluto.reader.blocks.if_block = (function pluto$reader$blocks$if_block(var_args){
var args__4647__auto__ = [];
var len__4641__auto___1332 = arguments.length;
var i__4642__auto___1333 = (0);
while(true){
if((i__4642__auto___1333 < len__4641__auto___1332)){
args__4647__auto__.push((arguments[i__4642__auto___1333]));

var G__1334 = (i__4642__auto___1333 + (1));
i__4642__auto___1333 = G__1334;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic = (function (p__1329,body){
var map__1330 = p__1329;
var map__1330__$1 = (((((!((map__1330 == null))))?(((((map__1330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1330):map__1330);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1330__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return cljs.core.first(body);
} else {
return cljs.core.second(body);
}
});

pluto.reader.blocks.if_block.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.reader.blocks.if_block.cljs$lang$applyTo = (function (seq1327){
var G__1328 = cljs.core.first(seq1327);
var seq1327__$1 = cljs.core.next(seq1327);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1328,seq1327__$1);
});

pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$if,(function (_,___$1,___$2,p__1335){
var vec__1336 = p__1335;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1336,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1336,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1336,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1336,(3),null);
var parts = vec__1336;
var parts_count = cljs.core.count(cljs.core.rest(parts));
var errors = (function (){var G__1339 = null;
var G__1339__$1 = (((!((test instanceof cljs.core.Symbol))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__1339,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unsupported_DASH_test_DASH_type,test)):G__1339);
var G__1339__$2 = ((((3) < parts_count))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__1339__$1,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_if_DASH_block,parts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$too_DASH_many_DASH_clauses,cljs.core.cst$kw$clause_DASH_count,parts_count], null))):G__1339__$1);
if(((3) > parts_count)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__1339__$2,pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_if_DASH_block,parts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$three_DASH_clauses_DASH_required,cljs.core.cst$kw$clause_DASH_count,parts_count], null)));
} else {
return G__1339__$2;
}
})();
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.if_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,test], null)], null),(new cljs.core.List(null,then,(new cljs.core.List(null,else$,null,(1),null)),(2),null)))], null);
}
}));
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (ctx,_,block){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$unknown_DASH_block_DASH_type,cljs.core.cst$kw$ctx,ctx,cljs.core.cst$kw$block,block], null)], null)], null);
}));
