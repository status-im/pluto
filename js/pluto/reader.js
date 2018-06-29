// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('pluto.reader');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('pluto.reader.blocks');
goog.require('pluto.reader.reference');
goog.require('pluto.utils');
pluto.reader.accumulate_reader_error_BANG_ = (function pluto$reader$accumulate_reader_error_BANG_(a,m){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,cljs.core.conj,m);
});
pluto.reader.accumulate_reader_exception_BANG_ = (function pluto$reader$accumulate_reader_exception_BANG_(a,ex){
return pluto.reader.accumulate_reader_error_BANG_(a,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.ex_data(ex),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,pluto.utils.ex_message(ex)], null),(function (){var temp__5457__auto__ = pluto.utils.ex_cause(ex);
if(cljs.core.truth_(temp__5457__auto__)){
var c = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cause,c], null);
} else {
return null;
}
})()], 0)));
});
/**
 * Reads an extension definition as an EDN string. Valid tags are replaced by associated records.
 * All references (identified by tagged literals) are marked by records.
 * They reference keys in the definition map and are validated and replaced at parse time.
 *   
 * No semantic validation is performed at this stage. 
 * 
 * Returns a map defining:
 * * :data the extension definition as a map
 * * :errors a vector of errors map triggered during read
 */
pluto.reader.read = (function pluto$reader$read(s){
var errors = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,(function (){try{return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,s);
}catch (e4024){var e = e4024;
pluto.reader.accumulate_reader_exception_BANG_(errors,e);

return null;
}})()], null),(function (){var temp__5457__auto__ = cljs.core.deref(errors);
if(cljs.core.truth_(temp__5457__auto__)){
var v = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,v], null);
} else {
return null;
}
})()], 0));
});
pluto.reader.valid_extension_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$meta,null], null), null);
pluto.reader.valid_namespaces = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["queries",null,"i18n",null,"views",null,"styles",null,"events",null,"hooks",null], null), null);
pluto.reader.validate_keys = (function pluto$reader$validate_keys(p__4026,s){
var map__4027 = p__4026;
var map__4027__$1 = ((((!((map__4027 == null)))?(((((map__4027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4027):map__4027);
var valid_hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4027__$1,cljs.core.cst$kw$valid_DASH_hooks);
var keys = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.namespace),s));
var extra_extension_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(keys,pluto.reader.valid_extension_keys);
var keys_with_ns = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(s),keys);
var namespaces = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,keys_with_ns));
var extra_namespaces = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(namespaces,pluto.reader.valid_namespaces);
var hooks_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (keys,extra_extension_keys,keys_with_ns,namespaces,extra_namespaces,map__4027,map__4027__$1,valid_hooks){
return (function (p1__4025_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("hooks",cljs.core.namespace(p1__4025_SHARP_));
});})(keys,extra_extension_keys,keys_with_ns,namespaces,extra_namespaces,map__4027,map__4027__$1,valid_hooks))
,keys_with_ns)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,valid_hooks));
var G__4029 = null;
var G__4029__$1 = ((cljs.core.seq(extra_extension_keys))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__4029,cljs.core.cst$kw$type,cljs.core.cst$kw$invalid_DASH_extension_DASH_keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$value,extra_extension_keys], 0)):G__4029);
var G__4029__$2 = ((cljs.core.seq(extra_namespaces))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__4029__$1,cljs.core.cst$kw$type,cljs.core.cst$kw$invalid_DASH_namespaces,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$value,extra_namespaces], 0)):G__4029__$1);
if(cljs.core.seq(hooks_keys)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__4029__$2,cljs.core.cst$kw$type,cljs.core.cst$kw$invalid_DASH_hooks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$value,hooks_keys], 0));
} else {
return G__4029__$2;
}
});
pluto.reader.accumulate_errors = (function pluto$reader$accumulate_errors(m,s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,cljs.core.cst$kw$errors,cljs.core.concat,s);
});
pluto.reader.merge_errors = (function pluto$reader$merge_errors(m,errors){
var G__4030 = m;
if(cljs.core.seq(errors)){
return pluto.reader.accumulate_errors(G__4030,errors);
} else {
return G__4030;
}
});
pluto.reader.parse_hiccup_children = (function pluto$reader$parse_hiccup_children(opts,children){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__4032_SHARP_,p2__4031_SHARP_){
var map__4033 = (pluto.reader.parse_view.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.parse_view.cljs$core$IFn$_invoke$arity$2(opts,p2__4031_SHARP_) : pluto.reader.parse_view.call(null,opts,p2__4031_SHARP_));
var map__4033__$1 = ((((!((map__4033 == null)))?(((((map__4033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4033):map__4033);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4033__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4033__$1,cljs.core.cst$kw$errors);
return pluto.reader.merge_errors(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__4032_SHARP_,cljs.core.cst$kw$data,cljs.core.conj,data),errors);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.PersistentVector.EMPTY], null),children);
});
pluto.reader.parse_hiccup_element = (function pluto$reader$parse_hiccup_element(p__4036,o){
var map__4037 = p__4036;
var map__4037__$1 = ((((!((map__4037 == null)))?(((((map__4037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4037):map__4037);
var opts = map__4037__$1;
var components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4037__$1,cljs.core.cst$kw$components);
if(cljs.core.truth_((function (){var or__3936__auto__ = (o instanceof cljs.core.Symbol);
if(or__3936__auto__){
return or__3936__auto__;
} else {
return pluto.utils.primitive_QMARK_(o);
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,o], null);
} else {
if(cljs.core.vector_QMARK_(o)){
var vec__4039 = o;
var seq__4040 = cljs.core.seq(vec__4039);
var first__4041 = cljs.core.first(seq__4040);
var seq__4040__$1 = cljs.core.next(seq__4040);
var element = first__4041;
var first__4041__$1 = cljs.core.first(seq__4040__$1);
var seq__4040__$2 = cljs.core.next(seq__4040__$1);
var properties = first__4041__$1;
var children = seq__4040__$2;
var component = ((cljs.core.fn_QMARK_(element))?element:cljs.core.get.cljs$core$IFn$_invoke$arity$2(components,element));
var G__4042 = (function (){var m = pluto.reader.parse_hiccup_children(opts,children);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$data,((function (m,vec__4039,seq__4040,first__4041,seq__4040__$1,element,first__4041__$1,seq__4040__$2,properties,children,component,map__4037,map__4037__$1,opts,components){
return (function (p1__4035_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3936__auto__ = component;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return element;
}
})(),properties], null),p1__4035_SHARP_);
});})(m,vec__4039,seq__4040,first__4041,seq__4040__$1,element,first__4041__$1,seq__4040__$2,properties,children,component,map__4037,map__4037__$1,opts,components))
);
})();
if((component == null)){
return pluto.reader.accumulate_errors(G__4042,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$unknown_DASH_component,cljs.core.cst$kw$value,element], null)], null));
} else {
return G__4042;
}
} else {
return null;
}
}
});
pluto.reader.parse_view = (function pluto$reader$parse_view(opts,o){
if(cljs.core.list_QMARK_(o)){
var map__4043 = (pluto.reader.blocks.parse.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.blocks.parse.cljs$core$IFn$_invoke$arity$2(opts,o) : pluto.reader.blocks.parse.call(null,opts,o));
var map__4043__$1 = ((((!((map__4043 == null)))?(((((map__4043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4043):map__4043);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4043__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4043__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,errors], null);
} else {
return (pluto.reader.parse_view.cljs$core$IFn$_invoke$arity$2 ? pluto.reader.parse_view.cljs$core$IFn$_invoke$arity$2(opts,data) : pluto.reader.parse_view.call(null,opts,data));
}
} else {
return pluto.reader.parse_hiccup_element(opts,o);

}
});
if((typeof pluto !== 'undefined') && (typeof pluto.reader !== 'undefined') && (typeof pluto.reader.parse_value !== 'undefined')){
} else {
/**
 * Parse a definition element value.
 * Returns a map defining:
 *  * :data the updated value
 *  * :permissions 
 *  * :errors a collection of errors
 */
pluto.reader.parse_value = (function (){var method_table__4401__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4402__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4403__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4404__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4405__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.reader","parse-value"),((function (method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__,hierarchy__4405__auto__){
return (function (_,k,___$1){
return cljs.core.namespace(k);
});})(method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__,hierarchy__4405__auto__))
,cljs.core.cst$kw$default,hierarchy__4405__auto__,method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__));
})();
}
pluto.reader.parse_value.cljs$core$IMultiFn$_add_method$arity$3(null,"hooks",(function (_,___$1,v){
return v;
}));
pluto.reader.parse_value.cljs$core$IMultiFn$_add_method$arity$3(null,"views",(function (opts,_,v){
return pluto.reader.parse_view(opts,v);
}));
pluto.reader.parse_value.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,___$1,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$unknown_DASH_key], null)], null)], null);
}));
/**
 * Merge result of parse-value into a map.
 * :data is updated to its parsed value
 * :errors are accumulated
 */
pluto.reader.merge_parsed_value = (function pluto$reader$merge_parsed_value(opts,m,k,v){
if(cljs.core.truth_(cljs.core.namespace(k))){
var map__4046 = (pluto.reader.parse_value.cljs$core$IFn$_invoke$arity$3 ? pluto.reader.parse_value.cljs$core$IFn$_invoke$arity$3(opts,k,v) : pluto.reader.parse_value.call(null,opts,k,v));
var map__4046__$1 = ((((!((map__4046 == null)))?(((((map__4046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4046):map__4046);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4046__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4046__$1,cljs.core.cst$kw$errors);
return pluto.reader.merge_errors(cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,k], null),data),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__4046,map__4046__$1,data,errors){
return (function (p1__4045_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__4045_SHARP_,cljs.core.cst$kw$key,k);
});})(map__4046,map__4046__$1,data,errors))
,errors));
} else {
return m;
}
});
/**
 * Parse an extension definition map as encapsulated in :data key of the map returned by read.
 * `opts` is a map defining:
 * * `valid-hooks` a map of valid hook definitions
 *   
 * Returns a map defining:
 * * :data a map
 * * :permissions a vector of required permissions
 * * :errors a vector of errors maps triggered during parse
 */
pluto.reader.parse = (function pluto$reader$parse(opts,m){
var errors = pluto.reader.validate_keys(opts,cljs.core.keys(m));
return pluto.reader.merge_errors(cljs.core.reduce_kv(((function (errors){
return (function (p1__4048_SHARP_,p2__4049_SHARP_,p3__4050_SHARP_){
return pluto.reader.merge_parsed_value(opts,p1__4048_SHARP_,p2__4049_SHARP_,p3__4050_SHARP_);
});})(errors))
,cljs.core.PersistentArrayMap.EMPTY,m),errors);
});
