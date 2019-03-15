// Compiled by ClojureScript 1.10.516 {:static-fns true, :optimize-constants true}
goog.provide('pluto.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.tools.reader.edn');
goog.require('pluto.reader.errors');
goog.require('pluto.reader.events');
goog.require('pluto.reader.types');
goog.require('pluto.reader.views');
goog.require('pluto.utils');
pluto.core.reader_error = (function pluto$core$reader_error(ex){
return pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$reader$errors_SLASH_reader_DASH_error,cljs.core.cst$kw$ex_DASH_kind.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(ex)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pluto$reader$errors_SLASH_message,pluto.utils.ex_message(ex)], null),(function (){var temp__5720__auto__ = pluto.utils.ex_cause(ex);
if(cljs.core.truth_(temp__5720__auto__)){
var c = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cause,c], null);
} else {
return null;
}
})()], 0)));
});
/**
 * Reads an extension definition as an EDN string.
 * 
 * No semantic validation is performed at this stage.
 * 
 * Returns a map defining:
 * * `:data` the extension definition as a map
 * * `:errors` a vector of errors map triggered during read
 */
pluto.core.read = (function pluto$core$read(s){
try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,s)], null);
}catch (e1872){var ex = e1872;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.core.reader_error(ex)], null)], null);
}});
pluto.core.key_name = (function pluto$core$key_name(k){
var or__4131__auto__ = cljs.core.namespace(k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name(k);
}
});
if((typeof pluto !== 'undefined') && (typeof pluto.core !== 'undefined') && (typeof pluto.core.parse_value !== 'undefined')){
} else {
/**
 * Parse an extension value from its type
 */
pluto.core.parse_value = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__1873 = cljs.core.get_global_hierarchy;
return (fexpr__1873.cljs$core$IFn$_invoke$arity$0 ? fexpr__1873.cljs$core$IFn$_invoke$arity$0() : fexpr__1873.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.core","parse-value"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (ctx,ext,k,v){
return pluto.core.key_name(k);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
pluto.core.capacity_QMARK_ = (function pluto$core$capacity_QMARK_(m,s){
var keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(m)));
var G__1874 = cljs.core.name(s);
return (keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(G__1874) : keys.call(null,G__1874));
});
pluto.core.parse_value_with = (function pluto$core$parse_value_with(capacities,t,k,f){
if(cljs.core.truth_(pluto.core.capacity_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(capacities,t),k))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_existing_DASH_key,k)], null);
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
pluto.core.meta_properties = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$string,cljs.core.cst$kw$description,cljs.core.cst$kw$string,cljs.core.cst$kw$documentation_QMARK_,cljs.core.cst$kw$string], null);
pluto.core.parse_value.cljs$core$IMultiFn$_add_method$arity$3(null,"meta",(function (ctx,ext,_,v){
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,pluto.core.meta_properties,v) : pluto.reader.types.resolve.call(null,ctx,ext,pluto.core.meta_properties,v));
}));
pluto.core.parse_value.cljs$core$IMultiFn$_add_method$arity$3(null,"events",(function (p__1875,ext,k,v){
var map__1876 = p__1875;
var map__1876__$1 = (((((!((map__1876 == null))))?(((((map__1876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1876):map__1876);
var ctx = map__1876__$1;
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1876__$1,cljs.core.cst$kw$capacities);
return pluto.core.parse_value_with(capacities,cljs.core.cst$kw$events,k,((function (map__1876,map__1876__$1,ctx,capacities){
return (function (){
return pluto.reader.events.parse(ctx,ext,v,"");
});})(map__1876,map__1876__$1,ctx,capacities))
);
}));
pluto.core.parse_value.cljs$core$IMultiFn$_add_method$arity$3(null,"views",(function (p__1878,ext,k,v){
var map__1879 = p__1878;
var map__1879__$1 = (((((!((map__1879 == null))))?(((((map__1879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1879):map__1879);
var ctx = map__1879__$1;
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1879__$1,cljs.core.cst$kw$capacities);
return pluto.core.parse_value_with(capacities,cljs.core.cst$kw$components,k,((function (map__1879,map__1879__$1,ctx,capacities){
return (function (){
return pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$3(ctx,ext,v);
});})(map__1879,map__1879__$1,ctx,capacities))
);
}));
/**
 * Type of a hook
 * e.g. (= "chat.command" (hook-type 'chat.command.hello-world))
 */
pluto.core.hook_type = (function pluto$core$hook_type(s){
if(cljs.core.truth_(s)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.butlast(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(s),/\./)));
} else {
return null;
}
});
pluto.core.parse_value.cljs$core$IMultiFn$_add_method$arity$3(null,"hooks",(function (p__1881,ext,k,o){
var map__1882 = p__1881;
var map__1882__$1 = (((((!((map__1882 == null))))?(((((map__1882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1882):map__1882);
var ctx = map__1882__$1;
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1882__$1,cljs.core.cst$kw$capacities);
return pluto.core.parse_value_with(capacities,cljs.core.cst$kw$hooks,k,((function (map__1882,map__1882__$1,ctx,capacities){
return (function (){
var map__1884 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$hooks,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pluto.core.hook_type(k))], null));
var map__1884__$1 = (((((!((map__1884 == null))))?(((((map__1884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1884):map__1884);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1884__$1,cljs.core.cst$kw$properties);
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,properties,o) : pluto.reader.types.resolve.call(null,ctx,ext,properties,o));
});})(map__1882,map__1882__$1,ctx,capacities))
);
}));
pluto.core.lifecycle_properties = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ephemeral_QMARK_,cljs.core.cst$kw$boolean,cljs.core.cst$kw$on_DASH_activation_QMARK_,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_installation_QMARK_,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_deactivation_QMARK_,cljs.core.cst$kw$event,cljs.core.cst$kw$on_DASH_deinstallation_QMARK_,cljs.core.cst$kw$event], null);
pluto.core.parse_value.cljs$core$IMultiFn$_add_method$arity$3(null,"lifecycle",(function (ctx,ext,_,v){
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,pluto.core.lifecycle_properties,v) : pluto.reader.types.resolve.call(null,ctx,ext,pluto.core.lifecycle_properties,v));
}));
pluto.core.parse_value.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,___$1,k,___$2){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_key,k)], null);
}));
/**
 * Accumulates the result of parsed primitives.
 * Shape is: {:data {'primitive data} :errors {'primitive errors} :permissions #{}}
 * If returned map contains :errors, :data is ignored.
 */
pluto.core.accumulate = (function pluto$core$accumulate(ctx,ext,acc,k,v){
var map__1886 = (pluto.core.parse_value.cljs$core$IFn$_invoke$arity$4 ? pluto.core.parse_value.cljs$core$IFn$_invoke$arity$4(ctx,ext,k,v) : pluto.core.parse_value.call(null,ctx,ext,k,v));
var map__1886__$1 = (((((!((map__1886 == null))))?(((((map__1886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1886):map__1886);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1886__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1886__$1,cljs.core.cst$kw$errors);
return cljs.core.assoc_in(acc,(cljs.core.truth_(cljs.core.namespace(k))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(errors)?cljs.core.cst$kw$errors:cljs.core.cst$kw$data),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pluto.core.key_name(k)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(errors)?cljs.core.cst$kw$errors:cljs.core.cst$kw$data),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pluto.core.key_name(k))], null)),(function (){var or__4131__auto__ = errors;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return data;
}
})());
});
pluto.core.order = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["meta","events","views","hooks","lifecycle"], null);
/**
 * Compares keys based on `order`
 */
pluto.core.order_comparator = (function pluto$core$order_comparator(k1,k2){
var indexes = cljs.core.zipmap(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["meta","events","views","hooks","lifecycle"], null),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
return cljs.core.compare(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(indexes,pluto.core.key_name(k1)),k1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(indexes,pluto.core.key_name(k2)),k2], null));
});
/**
 * Parse an extension definition map as encapsulated in :data key of the map returned by `read`.
 * `ctx` is a map defining:
 * * `capacities` a map of valid supported capacities (hooks, queries, events)
 * * `env`        a map of extension environment, will be provided as second parameter into event and query handlers
 * * `event-fn`   a function used to fire events
 * * `query-fn`   a function receiving a query and returning an `atom`
 * * `tracer`     [optional] a function that will be passed details about runtime extension execution (event fired, query values updated, ..): {:id 0 :category :error :type :event/dispatch :data {}}
 * 
 * 
 * Returns the input map modified so that values have been parsed into:
 * * `:data`        the result of parsing
 * * `:permissions` a vector of required permissions
 * * `:errors`      a vector of errors maps triggered during the parsing
 * 
 * If `errors` is not empty, `data` will not be available.
 * 
 * e.g.
 * 
 * {:data        {:views {:a (fn [o] [text "hello"])}}
 *  :permissions {:views {:a #{}}}
 * 
 *  or
 * 
 *  {:errors     {:views {:a [{...}]}}
 *  :permissions {:views {:a #{}}}
 */
pluto.core.parse = (function pluto$core$parse(ctx,ext){
return cljs.core.reduce_kv((function (p1__1888_SHARP_,p2__1889_SHARP_,p3__1890_SHARP_){
return pluto.core.accumulate(ctx,ext,p1__1888_SHARP_,p2__1889_SHARP_,p3__1890_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map_by(pluto.core.order_comparator),ext));
});
