// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
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
}catch (e1499){var ex = e1499;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.core.reader_error(ex)], null)], null);
}});
if((typeof pluto !== 'undefined') && (typeof pluto.core !== 'undefined') && (typeof pluto.core.parse_value !== 'undefined')){
} else {
/**
 * Parse an extension value from its type
 */
pluto.core.parse_value = (function (){var method_table__4524__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__1500 = cljs.core.get_global_hierarchy;
return (fexpr__1500.cljs$core$IFn$_invoke$arity$0 ? fexpr__1500.cljs$core$IFn$_invoke$arity$0() : fexpr__1500.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.core","parse-value"),((function (method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__){
return (function (ctx,ext,k,v){
return cljs.core.namespace(k);
});})(method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__))
,cljs.core.cst$kw$default,hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
if((typeof pluto !== 'undefined') && (typeof pluto.core !== 'undefined') && (typeof pluto.core.parse_value !== 'undefined')){
} else {
/**
 * Parse an extension value from its type
 */
pluto.core.parse_value = (function (){var method_table__4524__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__1501 = cljs.core.get_global_hierarchy;
return (fexpr__1501.cljs$core$IFn$_invoke$arity$0 ? fexpr__1501.cljs$core$IFn$_invoke$arity$0() : fexpr__1501.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.core","parse-value"),((function (method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__){
return (function (ctx,ext,k,v){
return cljs.core.namespace(k);
});})(method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__))
,cljs.core.cst$kw$default,hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
pluto.core.capacity_QMARK_ = (function pluto$core$capacity_QMARK_(m,s){
var keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(m)));
var G__1502 = cljs.core.name(s);
return (keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(G__1502) : keys.call(null,G__1502));
});
pluto.core.parse_value_with = (function pluto$core$parse_value_with(capacities,t,k,f){
if(cljs.core.truth_(pluto.core.capacity_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(capacities,t),k))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_existing_DASH_key,k)], null);
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
pluto.core.parse_value.cljs$core$IMultiFn$_add_method$arity$3(null,"views",(function (p__1503,ext,k,o){
var map__1504 = p__1503;
var map__1504__$1 = (((((!((map__1504 == null))))?(((((map__1504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1504):map__1504);
var ctx = map__1504__$1;
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1504__$1,cljs.core.cst$kw$capacities);
return pluto.core.parse_value_with(capacities,cljs.core.cst$kw$components,k,((function (map__1504,map__1504__$1,ctx,capacities){
return (function (){
return pluto.reader.views.parse.cljs$core$IFn$_invoke$arity$3(ctx,ext,o);
});})(map__1504,map__1504__$1,ctx,capacities))
);
}));
pluto.core.parse_value.cljs$core$IMultiFn$_add_method$arity$3(null,"events",(function (p__1506,ext,k,o){
var map__1507 = p__1506;
var map__1507__$1 = (((((!((map__1507 == null))))?(((((map__1507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1507):map__1507);
var ctx = map__1507__$1;
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1507__$1,cljs.core.cst$kw$capacities);
return pluto.core.parse_value_with(capacities,cljs.core.cst$kw$events,k,((function (map__1507,map__1507__$1,ctx,capacities){
return (function (){
return pluto.reader.events.parse(ctx,ext,o,"");
});})(map__1507,map__1507__$1,ctx,capacities))
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
pluto.core.parse_value.cljs$core$IMultiFn$_add_method$arity$3(null,"hooks",(function (p__1509,ext,k,o){
var map__1510 = p__1509;
var map__1510__$1 = (((((!((map__1510 == null))))?(((((map__1510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1510):map__1510);
var ctx = map__1510__$1;
var capacities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1510__$1,cljs.core.cst$kw$capacities);
return pluto.core.parse_value_with(capacities,cljs.core.cst$kw$hooks,k,((function (map__1510,map__1510__$1,ctx,capacities){
return (function (){
var map__1512 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$hooks,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pluto.core.hook_type(k))], null));
var map__1512__$1 = (((((!((map__1512 == null))))?(((((map__1512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1512):map__1512);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1512__$1,cljs.core.cst$kw$properties);
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,properties,o) : pluto.reader.types.resolve.call(null,ctx,ext,properties,o));
});})(map__1510,map__1510__$1,ctx,capacities))
);
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
var map__1514 = (pluto.core.parse_value.cljs$core$IFn$_invoke$arity$4 ? pluto.core.parse_value.cljs$core$IFn$_invoke$arity$4(ctx,ext,k,v) : pluto.core.parse_value.call(null,ctx,ext,k,v));
var map__1514__$1 = (((((!((map__1514 == null))))?(((((map__1514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1514):map__1514);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1514__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1514__$1,cljs.core.cst$kw$errors);
return cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(errors)?cljs.core.cst$kw$errors:cljs.core.cst$kw$data),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(k)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))], null),(function (){var or__4047__auto__ = errors;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return data;
}
})());
});
pluto.core.order = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["events","queries","views","hooks"], null);
/**
 * Compares keys based on `order`
 */
pluto.core.order_comparator = (function pluto$core$order_comparator(k1,k2){
var indexes = cljs.core.zipmap(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["events","queries","views","hooks"], null),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
return cljs.core.compare(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(indexes,cljs.core.namespace(k1)),k1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(indexes,cljs.core.namespace(k2)),k2], null));
});
/**
 * Parse an extension definition map as encapsulated in :data key of the map returned by `read`.
 * `ctx` is a map defining:
 * * `capacities` a map of valid supported capacities (hooks, queries, events)
 * * `env`        a map of extension environment, will be provided as second parameter into event and query handlers
 * 
 * `env` is a map defining:
 * * `logger`     [optional] a function that will be passed details about runtime extension execution (event fired, query values updated, ..): {:type :event :name 'my-event :properties {}}
 * 
 * Returns the input map modified so that values have been parsed into:
 * * `:data`        the result of parsing
 * * `:permissions` a vector of required permissions
 * * `:errors`      a vector of errors maps triggered during the parsing
 * 
 * If `errors` is not empty `data` will not be available.
 * 
 * e.g.
 * 
 * {'view/a {:data ..
 *           :permissions ..}
 * 
 *  'view/b {:errors []}}
 * 
 * or
 * 
 * {:data        {'view/a (fn [o] [text "hello"])}
 *  :permissions {'view/a #{}}
 */
pluto.core.parse = (function pluto$core$parse(ctx,ext){
return cljs.core.reduce_kv((function (p1__1516_SHARP_,p2__1517_SHARP_,p3__1518_SHARP_){
return pluto.core.accumulate(ctx,ext,p1__1516_SHARP_,p2__1517_SHARP_,p3__1518_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map_by(pluto.core.order_comparator),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ext,cljs.core.cst$sym$meta)));
});
