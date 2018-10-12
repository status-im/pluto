// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('pluto.examples');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('pluto.components.html');
goog.require('pluto.js');
goog.require('pluto.reader');
goog.require('pluto.reader.hooks');
goog.require('pluto.storages');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('re_frame.loggers');
pluto.examples.warn = console.warn.bind(console);
re_frame.loggers.set_loggers_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$warn,(function() { 
var G__2076__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("re-frame: overwriting",cljs.core.first(args))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.examples.warn,args);

}
};
var G__2076 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2077__i = 0, G__2077__a = new Array(arguments.length -  0);
while (G__2077__i < G__2077__a.length) {G__2077__a[G__2077__i] = arguments[G__2077__i + 0]; ++G__2077__i;}
  args = new cljs.core.IndexedSeq(G__2077__a,0,null);
} 
return G__2076__delegate.call(this,args);};
G__2076.cljs$lang$maxFixedArity = 0;
G__2076.cljs$lang$applyTo = (function (arglist__2078){
var args = cljs.core.seq(arglist__2078);
return G__2076__delegate(args);
});
G__2076.cljs$core$IFn$_invoke$arity$variadic = G__2076__delegate;
return G__2076;
})()
], null));
if((typeof pluto !== 'undefined') && (typeof pluto.examples !== 'undefined') && (typeof pluto.examples.do_timer !== 'undefined')){
} else {
pluto.examples.do_timer = setInterval((function (){
var G__2079 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$random,(cljs.core.rand_int((2)) === (0))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2079) : re_frame.core.dispatch.call(null,G__2079));
}),(1000));
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$random,(function (db,p__2080){
var vec__2081 = p__2080;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2081,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2081,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$random,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cond_QMARK_,b], null));
}));
var G__2084_2086 = cljs.core.cst$kw$pluto$examples_SLASH_alert;
var G__2085_2087 = ((function (G__2084_2086){
return (function (value){
return alert(value);
});})(G__2084_2086))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__2084_2086,G__2085_2087) : re_frame.core.reg_fx.call(null,G__2084_2086,G__2085_2087));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alert,(function (cofx,p__2088){
var vec__2089 = p__2088;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2089,(0),null);
var map__2092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2089,(1),null);
var map__2092__$1 = ((((!((map__2092 == null)))?(((((map__2092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2092):map__2092);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2092__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pluto$examples_SLASH_alert,value], null);
}));
var G__2094_2096 = cljs.core.cst$kw$random_DASH_boolean;
var G__2095_2097 = cljs.core.cst$kw$random;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2094_2096,G__2095_2097) : re_frame.core.reg_sub.call(null,G__2094_2096,G__2095_2097));
pluto.examples.render = (function pluto$examples$render(h,el){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2((function (){var G__2098 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"Test Extension"], null);
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__2098) : h.call(null,G__2098));
})(),el);
});
pluto.examples.errors_list = (function pluto$examples$errors_list(v){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Errors"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul], null),(function (){var iter__4324__auto__ = (function pluto$examples$errors_list_$_iter__2099(s__2100){
return (new cljs.core.LazySeq(null,(function (){
var s__2100__$1 = s__2100;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__2100__$1);
if(temp__5457__auto__){
var s__2100__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2100__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__2100__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__2102 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__2101 = (0);
while(true){
if((i__2101 < size__4323__auto__)){
var map__2103 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__2101);
var map__2103__$1 = ((((!((map__2103 == null)))?(((((map__2103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2103):map__2103);
var m = map__2103__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2103__$1,cljs.core.cst$kw$type);
cljs.core.chunk_append(b__2102,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$type)], 0))], null)], null));

var G__2107 = (i__2101 + (1));
i__2101 = G__2107;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2102),pluto$examples$errors_list_$_iter__2099(cljs.core.chunk_rest(s__2100__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2102),null);
}
} else {
var map__2105 = cljs.core.first(s__2100__$2);
var map__2105__$1 = ((((!((map__2105 == null)))?(((((map__2105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2105):map__2105);
var m = map__2105__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2105__$1,cljs.core.cst$kw$type);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$type)], 0))], null)], null),pluto$examples$errors_list_$_iter__2099(cljs.core.rest(s__2100__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(v);
})())], null);
});
});
pluto.examples.hook = (function (){
if((typeof pluto !== 'undefined') && (typeof pluto.examples !== 'undefined') && (typeof pluto.examples.t_pluto$examples2108 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {pluto.reader.hooks.Hook}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pluto.examples.t_pluto$examples2108 = (function (meta2109){
this.meta2109 = meta2109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pluto.examples.t_pluto$examples2108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2110,meta2109__$1){
var self__ = this;
var _2110__$1 = this;
return (new pluto.examples.t_pluto$examples2108(meta2109__$1));
});

pluto.examples.t_pluto$examples2108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2110){
var self__ = this;
var _2110__$1 = this;
return self__.meta2109;
});

pluto.examples.t_pluto$examples2108.prototype.pluto$reader$hooks$Hook$ = cljs.core.PROTOCOL_SENTINEL;

pluto.examples.t_pluto$examples2108.prototype.pluto$reader$hooks$Hook$hook_in$arity$4 = (function (_,id,p__2111,cofx){
var self__ = this;
var map__2112 = p__2111;
var map__2112__$1 = ((((!((map__2112 == null)))?(((((map__2112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2112):map__2112);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2112__$1,cljs.core.cst$kw$description);
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2112__$1,cljs.core.cst$kw$scope);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2112__$1,cljs.core.cst$kw$parameters);
var preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2112__$1,cljs.core.cst$kw$preview);
var short_preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2112__$1,cljs.core.cst$kw$short_DASH_preview);
var ___$1 = this;
return null;
});

pluto.examples.t_pluto$examples2108.prototype.pluto$reader$hooks$Hook$unhook$arity$4 = (function (_,id,p__2114,p__2115){
var self__ = this;
var map__2116 = p__2114;
var map__2116__$1 = ((((!((map__2116 == null)))?(((((map__2116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2116):map__2116);
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2116__$1,cljs.core.cst$kw$scope);
var map__2117 = p__2115;
var map__2117__$1 = ((((!((map__2117 == null)))?(((((map__2117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2117):map__2117);
var cofx = map__2117__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2117__$1,cljs.core.cst$kw$db);
var ___$1 = this;
return null;
});

pluto.examples.t_pluto$examples2108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta2109], null);
});

pluto.examples.t_pluto$examples2108.cljs$lang$type = true;

pluto.examples.t_pluto$examples2108.cljs$lang$ctorStr = "pluto.examples/t_pluto$examples2108";

pluto.examples.t_pluto$examples2108.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"pluto.examples/t_pluto$examples2108");
});

/**
 * Positional factory function for pluto.examples/t_pluto$examples2108.
 */
pluto.examples.__GT_t_pluto$examples2108 = (function pluto$examples$__GT_t_pluto$examples2108(meta2109){
return (new pluto.examples.t_pluto$examples2108(meta2109));
});

}

return (new pluto.examples.t_pluto$examples2108(cljs.core.PersistentArrayMap.EMPTY));
})()
;
pluto.examples.parse = (function pluto$examples$parse(m){
return pluto.reader.parse(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$capacities,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$components,pluto.components.html.components,cljs.core.cst$kw$queries,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$random_DASH_boolean,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$random_DASH_boolean], null)], null),cljs.core.cst$kw$hooks,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$main,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hook,pluto.examples.hook,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$view,cljs.core.cst$kw$view], null)], null)], null),cljs.core.cst$kw$events,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$alert,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.cst$kw$alert], null)], null)], null)], null),m);
});
pluto.examples.render_extension = (function pluto$examples$render_extension(m,el,el_errors){
var map__2120 = pluto.examples.parse(m);
var map__2120__$1 = ((((!((map__2120 == null)))?(((((map__2120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2120):map__2120);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2120__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2120__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
pluto.examples.render(pluto.examples.errors_list(errors),el_errors);
} else {
}

return pluto.examples.render(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hooks,cljs.core.cst$kw$main,cljs.core.cst$kw$demo,cljs.core.cst$kw$parsed,cljs.core.cst$kw$view], null)),el);
});
pluto.examples.read_extension = (function pluto$examples$read_extension(o,el,el_errors){
var map__2122 = pluto.reader.read(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljs.core.first(o)));
var map__2122__$1 = ((((!((map__2122 == null)))?(((((map__2122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2122):map__2122);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2122__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2122__$1,cljs.core.cst$kw$errors);
return pluto.examples.render_extension(data,el,el_errors);
});
pluto.examples.render_result = (function pluto$examples$render_result(p__2124,el,el_errors){
var map__2125 = p__2124;
var map__2125__$1 = ((((!((map__2125 == null)))?(((((map__2125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2125):map__2125);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2125__$1,cljs.core.cst$kw$type);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2125__$1,cljs.core.cst$kw$value);
var G__2127 = type;
var G__2127__$1 = (((G__2127 instanceof cljs.core.Keyword))?G__2127.fqn:null);
switch (G__2127__$1) {
case "error":
return el_errors.innerHTML = value;

break;
default:
return pluto.examples.read_extension(value,el,el_errors);

}
});
pluto.examples.load_and_render = (function pluto$examples$load_and_render(s,el,el_errors){
reagent.dom.unmount_component_at_node(el);

reagent.dom.unmount_component_at_node(el_errors);

return pluto.storages.fetch(s,(function (p1__2129_SHARP_){
return pluto.examples.render_result(p1__2129_SHARP_,el,el_errors);
}));
});
goog.exportSymbol('pluto.examples.load_and_render', pluto.examples.load_and_render);
