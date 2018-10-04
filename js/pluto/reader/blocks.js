// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.blocks');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('pluto.reader.destructuring');
goog.require('pluto.reader.errors');
goog.require('pluto.reader.reference');
goog.require('pluto.reader.permissions');
goog.require('re_frame.core');
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
return (function (_,p__7219){
var vec__7220 = p__7219;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7220,(0),null);
return type;
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,cljs.core.cst$kw$default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
pluto.reader.blocks.resolve_query = (function pluto$reader$blocks$resolve_query(p__7223){
var vec__7224 = p__7223;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7224,(0),null);
var vec__7227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7224,(1),null);
var sub_keyword = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7227,(0),null);
var sub_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7227,(1),null);
var sub = vec__7227;
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
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(pluto.reader.destructuring.destructure(k,v));

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
pluto.reader.blocks.let_block = (function pluto$reader$blocks$let_block(p__7230,child){
var map__7231 = p__7230;
var map__7231__$1 = ((((!((map__7231 == null)))?(((((map__7231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7231):map__7231);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7231__$1,cljs.core.cst$kw$env);
if(cljs.core.coll_QMARK_(child)){
return clojure.walk.prewalk_replace(pluto.reader.blocks.resolve_bindings(env),child);
} else {
return null;
}
});
pluto.reader.blocks.properties_QMARK_ = (function pluto$reader$blocks$properties_QMARK_(o){
var and__3938__auto__ = pluto.reader.reference.reference_QMARK_(o);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$properties,pluto.reader.reference.reference__GT_symbol(o));
} else {
return and__3938__auto__;
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
pluto.reader.blocks.merge_bindings = (function pluto$reader$blocks$merge_bindings(p__7233,k,v){
var map__7234 = p__7233;
var map__7234__$1 = ((((!((map__7234 == null)))?(((((map__7234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7234):map__7234);
var m = map__7234__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7234__$1,cljs.core.cst$kw$data);
if(cljs.core.truth_(pluto.reader.blocks.properties_QMARK_(v))){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$sym$properties], null),k);
} else {
var av = pluto.reader.blocks.inject_new_bindings(data,v);
if(cljs.core.truth_((function (){var or__3949__auto__ = (k instanceof cljs.core.Symbol);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return pluto.reader.blocks.query_QMARK_(av);
}
})())){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,k], null),av);
} else {
var temp__5455__auto__ = pluto.reader.destructuring.destructure(k,av);
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
pluto.reader.blocks.restrict_get_in = (function pluto$reader$blocks$restrict_get_in(path,p__7236){
var map__7237 = p__7236;
var map__7237__$1 = ((((!((map__7237 == null)))?(((((map__7237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7237):map__7237);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7237__$1,cljs.core.cst$kw$read);
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
pluto.reader.blocks.restrict_queries = (function pluto$reader$blocks$restrict_queries(p__7239,env){
var map__7240 = p__7239;
var map__7240__$1 = ((((!((map__7240 == null)))?(((((map__7240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7240):map__7240);
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7240__$1,cljs.core.cst$kw$permissions);
var queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7240__$1,cljs.core.cst$kw$queries);
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (map__7240,map__7240__$1,permissions,queries){
return (function (p__7242){
var vec__7243 = p__7242;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7243,(0),null);
var env_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7243,(1),null);
if(cljs.core.truth_(pluto.reader.blocks.query_QMARK_(env_value))){
var vec__7246 = env_value;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7246,(0),null);
var vec__7249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7246,(1),null);
var sub_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7249,(0),null);
var sub_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7249,(1),null);
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
});})(map__7240,map__7240__$1,permissions,queries))
,env);
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$let,(function (p__7252,p__7253){
var map__7254 = p__7252;
var map__7254__$1 = ((((!((map__7254 == null)))?(((((map__7254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7254):map__7254);
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7254__$1,cljs.core.cst$kw$capacities);
var vec__7255 = p__7253;
var seq__7256 = cljs.core.seq(vec__7255);
var first__7257 = cljs.core.first(seq__7256);
var seq__7256__$1 = cljs.core.next(seq__7256);
var _ = first__7257;
var first__7257__$1 = cljs.core.first(seq__7256__$1);
var seq__7256__$2 = cljs.core.next(seq__7256__$1);
var bindings = first__7257__$1;
var body = seq__7256__$2;
var map__7259 = pluto.reader.blocks.bindings__GT_env(bindings);
var map__7259__$1 = ((((!((map__7259 == null)))?(((((map__7259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7259):map__7259);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7259__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7259__$1,cljs.core.cst$kw$errors);
var query_errors = pluto.reader.blocks.restrict_queries(capacities,data);
return pluto.reader.errors.merge_errors(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,(function (){var child = cljs.core.last(body);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.let_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$env,data], null),child], null);
})()], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(errors,query_errors));
}));
pluto.reader.blocks.when_block = (function pluto$reader$blocks$when_block(p__7261,body){
var map__7262 = p__7261;
var map__7262__$1 = ((((!((map__7262 == null)))?(((((map__7262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7262):map__7262);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7262__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return body;
} else {
return null;
}
});
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$when,(function (_,p__7264){
var vec__7265 = p__7264;
var seq__7266 = cljs.core.seq(vec__7265);
var first__7267 = cljs.core.first(seq__7266);
var seq__7266__$1 = cljs.core.next(seq__7266);
var ___$1 = first__7267;
var first__7267__$1 = cljs.core.first(seq__7266__$1);
var seq__7266__$2 = cljs.core.next(seq__7266__$1);
var test = first__7267__$1;
var body = seq__7266__$2;
if((test instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.when_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,test], null)], null),body)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unsupported_DASH_test_DASH_type,test)], null)], null);

}
}));
pluto.reader.blocks.if_block = (function pluto$reader$blocks$if_block(var_args){
var args__4534__auto__ = [];
var len__4531__auto___7273 = arguments.length;
var i__4532__auto___7274 = (0);
while(true){
if((i__4532__auto___7274 < len__4531__auto___7273)){
args__4534__auto__.push((arguments[i__4532__auto___7274]));

var G__7275 = (i__4532__auto___7274 + (1));
i__4532__auto___7274 = G__7275;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

pluto.reader.blocks.if_block.cljs$core$IFn$_invoke$arity$variadic = (function (p__7270,body){
var map__7271 = p__7270;
var map__7271__$1 = ((((!((map__7271 == null)))?(((((map__7271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7271):map__7271);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7271__$1,cljs.core.cst$kw$test);
if(cljs.core.truth_(test)){
return cljs.core.first(body);
} else {
return cljs.core.second(body);
}
});

pluto.reader.blocks.if_block.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.reader.blocks.if_block.cljs$lang$applyTo = (function (seq7268){
var G__7269 = cljs.core.first(seq7268);
var seq7268__$1 = cljs.core.next(seq7268);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7269,seq7268__$1);
});

pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$if,(function (_,p__7276){
var vec__7277 = p__7276;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7277,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7277,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7277,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7277,(3),null);
if((test instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.blocks.if_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,test], null)], null),(new cljs.core.List(null,then,(new cljs.core.List(null,else$,null,(1),null)),(2),null)))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unsupported_DASH_test_DASH_type,test)], null)], null);

}
}));
pluto.reader.blocks.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (opts,block){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$unknown_DASH_block_DASH_type,cljs.core.cst$kw$opts,opts,cljs.core.cst$kw$block,block], null)], null)], null);
}));
