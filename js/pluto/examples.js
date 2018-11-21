// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
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
var G__1466__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("re-frame: overwriting",cljs.core.first(args))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.examples.warn,args);

}
};
var G__1466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1467__i = 0, G__1467__a = new Array(arguments.length -  0);
while (G__1467__i < G__1467__a.length) {G__1467__a[G__1467__i] = arguments[G__1467__i + 0]; ++G__1467__i;}
  args = new cljs.core.IndexedSeq(G__1467__a,0,null);
} 
return G__1466__delegate.call(this,args);};
G__1466.cljs$lang$maxFixedArity = 0;
G__1466.cljs$lang$applyTo = (function (arglist__1468){
var args = cljs.core.seq(arglist__1468);
return G__1466__delegate(args);
});
G__1466.cljs$core$IFn$_invoke$arity$variadic = G__1466__delegate;
return G__1466;
})()
], null));
if((typeof pluto !== 'undefined') && (typeof pluto.examples !== 'undefined') && (typeof pluto.examples.do_timer !== 'undefined')){
} else {
pluto.examples.do_timer = setInterval((function (){
var G__1469 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$random,(cljs.core.rand_int((2)) === (0))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1469) : re_frame.core.dispatch.call(null,G__1469));
}),(1000));
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$random,(function (db,p__1470){
var vec__1471 = p__1470;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1471,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1471,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$random,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cond_QMARK_,b], null));
}));
var G__1474_1476 = cljs.core.cst$kw$pluto$examples_SLASH_alert;
var G__1475_1477 = ((function (G__1474_1476){
return (function (value){
return alert(value);
});})(G__1474_1476))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1474_1476,G__1475_1477) : re_frame.core.reg_fx.call(null,G__1474_1476,G__1475_1477));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alert,(function (cofx,p__1478){
var vec__1479 = p__1478;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1479,(0),null);
var env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1479,(1),null);
var map__1482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1479,(2),null);
var map__1482__$1 = (((((!((map__1482 == null))))?(((((map__1482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1482):map__1482);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1482__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pluto$examples_SLASH_alert,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('')], null);
}));
var G__1484_1486 = cljs.core.cst$kw$random_DASH_boolean;
var G__1485_1487 = cljs.core.cst$kw$random;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1484_1486,G__1485_1487) : re_frame.core.reg_sub.call(null,G__1484_1486,G__1485_1487));
var G__1488_1496 = cljs.core.cst$kw$extensions_SLASH_identity;
var G__1489_1497 = ((function (G__1488_1496){
return (function (_,p__1490){
var vec__1491 = p__1490;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1491,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1491,(1),null);
var map__1494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1491,(2),null);
var map__1494__$1 = (((((!((map__1494 == null))))?(((((map__1494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1494):map__1494);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1494__$1,cljs.core.cst$kw$value);
return value;
});})(G__1488_1496))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1488_1496,G__1489_1497) : re_frame.core.reg_sub.call(null,G__1488_1496,G__1489_1497));
pluto.examples.render = (function pluto$examples$render(h,el){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2((function (){var G__1498 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Test Extension",cljs.core.cst$kw$users,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nm,"Jane"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nm,"Sue"], null)], null)], null);
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__1498) : h.call(null,G__1498));
})(),el);
});
pluto.examples.errors_list = (function pluto$examples$errors_list(v){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Errors"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul], null),(function (){var iter__4434__auto__ = (function pluto$examples$errors_list_$_iter__1499(s__1500){
return (new cljs.core.LazySeq(null,(function (){
var s__1500__$1 = s__1500;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__1500__$1);
if(temp__5457__auto__){
var s__1500__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1500__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__1500__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__1502 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__1501 = (0);
while(true){
if((i__1501 < size__4433__auto__)){
var map__1503 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__1501);
var map__1503__$1 = (((((!((map__1503 == null))))?(((((map__1503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1503):map__1503);
var m = map__1503__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1503__$1,cljs.core.cst$kw$type);
cljs.core.chunk_append(b__1502,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$type)], 0))], null)], null));

var G__1507 = (i__1501 + (1));
i__1501 = G__1507;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1502),pluto$examples$errors_list_$_iter__1499(cljs.core.chunk_rest(s__1500__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1502),null);
}
} else {
var map__1505 = cljs.core.first(s__1500__$2);
var map__1505__$1 = (((((!((map__1505 == null))))?(((((map__1505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1505):map__1505);
var m = map__1505__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1505__$1,cljs.core.cst$kw$type);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$type)], 0))], null)], null),pluto$examples$errors_list_$_iter__1499(cljs.core.rest(s__1500__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(v);
})())], null);
});
});
pluto.examples.hook = (function (){
if((typeof pluto !== 'undefined') && (typeof pluto.examples !== 'undefined') && (typeof pluto.examples.t_pluto$examples1508 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {pluto.reader.hooks.Hook}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pluto.examples.t_pluto$examples1508 = (function (meta1509){
this.meta1509 = meta1509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pluto.examples.t_pluto$examples1508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1510,meta1509__$1){
var self__ = this;
var _1510__$1 = this;
return (new pluto.examples.t_pluto$examples1508(meta1509__$1));
});

pluto.examples.t_pluto$examples1508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1510){
var self__ = this;
var _1510__$1 = this;
return self__.meta1509;
});

pluto.examples.t_pluto$examples1508.prototype.pluto$reader$hooks$Hook$ = cljs.core.PROTOCOL_SENTINEL;

pluto.examples.t_pluto$examples1508.prototype.pluto$reader$hooks$Hook$hook_in$arity$4 = (function (_,id,p__1511,cofx){
var self__ = this;
var map__1512 = p__1511;
var map__1512__$1 = (((((!((map__1512 == null))))?(((((map__1512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1512):map__1512);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1512__$1,cljs.core.cst$kw$description);
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1512__$1,cljs.core.cst$kw$scope);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1512__$1,cljs.core.cst$kw$parameters);
var preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1512__$1,cljs.core.cst$kw$preview);
var short_preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1512__$1,cljs.core.cst$kw$short_DASH_preview);
var ___$1 = this;
return null;
});

pluto.examples.t_pluto$examples1508.prototype.pluto$reader$hooks$Hook$unhook$arity$4 = (function (_,id,p__1514,p__1515){
var self__ = this;
var map__1516 = p__1514;
var map__1516__$1 = (((((!((map__1516 == null))))?(((((map__1516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1516):map__1516);
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1516__$1,cljs.core.cst$kw$scope);
var map__1517 = p__1515;
var map__1517__$1 = (((((!((map__1517 == null))))?(((((map__1517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1517):map__1517);
var cofx = map__1517__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1517__$1,cljs.core.cst$kw$db);
var ___$1 = this;
return null;
});

pluto.examples.t_pluto$examples1508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta1509], null);
});

pluto.examples.t_pluto$examples1508.cljs$lang$type = true;

pluto.examples.t_pluto$examples1508.cljs$lang$ctorStr = "pluto.examples/t_pluto$examples1508";

pluto.examples.t_pluto$examples1508.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"pluto.examples/t_pluto$examples1508");
});

/**
 * Positional factory function for pluto.examples/t_pluto$examples1508.
 */
pluto.examples.__GT_t_pluto$examples1508 = (function pluto$examples$__GT_t_pluto$examples1508(meta1509){
return (new pluto.examples.t_pluto$examples1508(meta1509));
});

}

return (new pluto.examples.t_pluto$examples1508(cljs.core.PersistentArrayMap.EMPTY));
})()
;
pluto.examples.parse = (function pluto$examples$parse(m){
return pluto.reader.parse(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"Extension ID"], null),cljs.core.cst$kw$capacities,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$components,pluto.components.html.components,cljs.core.cst$kw$queries,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$random_DASH_boolean,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$random_DASH_boolean], null),cljs.core.cst$sym$identity,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$extensions_SLASH_identity,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$map], null)], null)], null),cljs.core.cst$kw$hooks,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$main,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hook,pluto.examples.hook,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$view,cljs.core.cst$kw$view], null)], null)], null),cljs.core.cst$kw$events,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$alert,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.cst$kw$alert,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$string], null)], null)], null)], null)], null),m);
});
pluto.examples.render_extension = (function pluto$examples$render_extension(m,el,el_errors){
var map__1520 = pluto.examples.parse(m);
var map__1520__$1 = (((((!((map__1520 == null))))?(((((map__1520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1520):map__1520);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1520__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1520__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
pluto.examples.render(pluto.examples.errors_list(errors),el_errors);
} else {
}

return pluto.examples.render(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hooks,cljs.core.cst$kw$main,cljs.core.cst$kw$demo,cljs.core.cst$kw$parsed,cljs.core.cst$kw$view], null)),el);
});
pluto.examples.read_extension = (function pluto$examples$read_extension(o,el,el_errors){
var map__1522 = pluto.reader.read(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(o));
var map__1522__$1 = (((((!((map__1522 == null))))?(((((map__1522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1522):map__1522);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1522__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1522__$1,cljs.core.cst$kw$errors);
return pluto.examples.render_extension(data,el,el_errors);
});
pluto.examples.render_result = (function pluto$examples$render_result(p__1524,el,el_errors){
var map__1525 = p__1524;
var map__1525__$1 = (((((!((map__1525 == null))))?(((((map__1525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1525):map__1525);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1525__$1,cljs.core.cst$kw$type);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1525__$1,cljs.core.cst$kw$value);
var G__1527 = type;
var G__1527__$1 = (((G__1527 instanceof cljs.core.Keyword))?G__1527.fqn:null);
switch (G__1527__$1) {
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

return pluto.storages.fetch(s,(function (p1__1529_SHARP_){
return pluto.examples.render_result(p1__1529_SHARP_,el,el_errors);
}));
});
goog.exportSymbol('pluto.examples.load_and_render', pluto.examples.load_and_render);
