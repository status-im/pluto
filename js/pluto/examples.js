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
var G__1422__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("re-frame: overwriting",cljs.core.first(args))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.examples.warn,args);

}
};
var G__1422 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1423__i = 0, G__1423__a = new Array(arguments.length -  0);
while (G__1423__i < G__1423__a.length) {G__1423__a[G__1423__i] = arguments[G__1423__i + 0]; ++G__1423__i;}
  args = new cljs.core.IndexedSeq(G__1423__a,0,null);
} 
return G__1422__delegate.call(this,args);};
G__1422.cljs$lang$maxFixedArity = 0;
G__1422.cljs$lang$applyTo = (function (arglist__1424){
var args = cljs.core.seq(arglist__1424);
return G__1422__delegate(args);
});
G__1422.cljs$core$IFn$_invoke$arity$variadic = G__1422__delegate;
return G__1422;
})()
], null));
if((typeof pluto !== 'undefined') && (typeof pluto.examples !== 'undefined') && (typeof pluto.examples.do_timer !== 'undefined')){
} else {
pluto.examples.do_timer = setInterval((function (){
var G__1425 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$random,(cljs.core.rand_int((2)) === (0))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1425) : re_frame.core.dispatch.call(null,G__1425));
}),(1000));
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$random,(function (db,p__1426){
var vec__1427 = p__1426;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1427,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1427,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$random,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cond_QMARK_,b], null));
}));
var G__1430_1432 = cljs.core.cst$kw$pluto$examples_SLASH_alert;
var G__1431_1433 = ((function (G__1430_1432){
return (function (value){
return alert(value);
});})(G__1430_1432))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1430_1432,G__1431_1433) : re_frame.core.reg_fx.call(null,G__1430_1432,G__1431_1433));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alert,(function (cofx,p__1434){
var vec__1435 = p__1434;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1435,(0),null);
var env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1435,(1),null);
var map__1438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1435,(2),null);
var map__1438__$1 = (((((!((map__1438 == null))))?(((((map__1438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1438):map__1438);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1438__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pluto$examples_SLASH_alert,value], null);
}));
var G__1440_1447 = cljs.core.cst$kw$pluto$examples_SLASH_identity;
var G__1441_1448 = ((function (G__1440_1447){
return (function (p__1442){
var map__1443 = p__1442;
var map__1443__$1 = (((((!((map__1443 == null))))?(((((map__1443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1443):map__1443);
var cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1443__$1,cljs.core.cst$kw$cb);
var G__1445 = (function (){var G__1446 = cljs.core.PersistentArrayMap.EMPTY;
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__1446) : cb.call(null,G__1446));
})();
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1445) : re_frame.core.dispatch.call(null,G__1445));
});})(G__1440_1447))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1440_1447,G__1441_1448) : re_frame.core.reg_fx.call(null,G__1440_1447,G__1441_1448));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$identity,(function (cofx,p__1449){
var vec__1450 = p__1449;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1450,(0),null);
var env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1450,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1450,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pluto$examples_SLASH_identity,m], null);
}));
var G__1453_1455 = cljs.core.cst$kw$random_DASH_boolean;
var G__1454_1456 = cljs.core.cst$kw$random;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1453_1455,G__1454_1456) : re_frame.core.reg_sub.call(null,G__1453_1455,G__1454_1456));
var G__1457_1465 = cljs.core.cst$kw$extensions_SLASH_identity;
var G__1458_1466 = ((function (G__1457_1465){
return (function (_,p__1459){
var vec__1460 = p__1459;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1460,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1460,(1),null);
var map__1463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1460,(2),null);
var map__1463__$1 = (((((!((map__1463 == null))))?(((((map__1463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1463):map__1463);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1463__$1,cljs.core.cst$kw$value);
return value;
});})(G__1457_1465))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1457_1465,G__1458_1466) : re_frame.core.reg_sub.call(null,G__1457_1465,G__1458_1466));
pluto.examples.render = (function pluto$examples$render(h,el){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2((function (){var G__1467 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Test Extension",cljs.core.cst$kw$users,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nm,"Jane"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nm,"Sue"], null)], null)], null);
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__1467) : h.call(null,G__1467));
})(),el);
});
pluto.examples.errors_list = (function pluto$examples$errors_list(v){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Errors"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul], null),(function (){var iter__4434__auto__ = (function pluto$examples$errors_list_$_iter__1468(s__1469){
return (new cljs.core.LazySeq(null,(function (){
var s__1469__$1 = s__1469;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__1469__$1);
if(temp__5457__auto__){
var s__1469__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1469__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__1469__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__1471 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__1470 = (0);
while(true){
if((i__1470 < size__4433__auto__)){
var map__1472 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__1470);
var map__1472__$1 = (((((!((map__1472 == null))))?(((((map__1472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1472):map__1472);
var m = map__1472__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1472__$1,cljs.core.cst$kw$type);
cljs.core.chunk_append(b__1471,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$type)], 0))], null)], null));

var G__1476 = (i__1470 + (1));
i__1470 = G__1476;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1471),pluto$examples$errors_list_$_iter__1468(cljs.core.chunk_rest(s__1469__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1471),null);
}
} else {
var map__1474 = cljs.core.first(s__1469__$2);
var map__1474__$1 = (((((!((map__1474 == null))))?(((((map__1474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1474):map__1474);
var m = map__1474__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1474__$1,cljs.core.cst$kw$type);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$type)], 0))], null)], null),pluto$examples$errors_list_$_iter__1468(cljs.core.rest(s__1469__$2)));
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
if((typeof pluto !== 'undefined') && (typeof pluto.examples !== 'undefined') && (typeof pluto.examples.t_pluto$examples1477 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {pluto.reader.hooks.Hook}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pluto.examples.t_pluto$examples1477 = (function (meta1478){
this.meta1478 = meta1478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pluto.examples.t_pluto$examples1477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1479,meta1478__$1){
var self__ = this;
var _1479__$1 = this;
return (new pluto.examples.t_pluto$examples1477(meta1478__$1));
});

pluto.examples.t_pluto$examples1477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1479){
var self__ = this;
var _1479__$1 = this;
return self__.meta1478;
});

pluto.examples.t_pluto$examples1477.prototype.pluto$reader$hooks$Hook$ = cljs.core.PROTOCOL_SENTINEL;

pluto.examples.t_pluto$examples1477.prototype.pluto$reader$hooks$Hook$hook_in$arity$4 = (function (_,id,p__1480,cofx){
var self__ = this;
var map__1481 = p__1480;
var map__1481__$1 = (((((!((map__1481 == null))))?(((((map__1481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1481):map__1481);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1481__$1,cljs.core.cst$kw$description);
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1481__$1,cljs.core.cst$kw$scope);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1481__$1,cljs.core.cst$kw$parameters);
var preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1481__$1,cljs.core.cst$kw$preview);
var short_preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1481__$1,cljs.core.cst$kw$short_DASH_preview);
var ___$1 = this;
return null;
});

pluto.examples.t_pluto$examples1477.prototype.pluto$reader$hooks$Hook$unhook$arity$4 = (function (_,id,p__1483,p__1484){
var self__ = this;
var map__1485 = p__1483;
var map__1485__$1 = (((((!((map__1485 == null))))?(((((map__1485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1485):map__1485);
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1485__$1,cljs.core.cst$kw$scope);
var map__1486 = p__1484;
var map__1486__$1 = (((((!((map__1486 == null))))?(((((map__1486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1486):map__1486);
var cofx = map__1486__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1486__$1,cljs.core.cst$kw$db);
var ___$1 = this;
return null;
});

pluto.examples.t_pluto$examples1477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta1478], null);
});

pluto.examples.t_pluto$examples1477.cljs$lang$type = true;

pluto.examples.t_pluto$examples1477.cljs$lang$ctorStr = "pluto.examples/t_pluto$examples1477";

pluto.examples.t_pluto$examples1477.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"pluto.examples/t_pluto$examples1477");
});

/**
 * Positional factory function for pluto.examples/t_pluto$examples1477.
 */
pluto.examples.__GT_t_pluto$examples1477 = (function pluto$examples$__GT_t_pluto$examples1477(meta1478){
return (new pluto.examples.t_pluto$examples1477(meta1478));
});

}

return (new pluto.examples.t_pluto$examples1477(cljs.core.PersistentArrayMap.EMPTY));
})()
;
pluto.examples.parse = (function pluto$examples$parse(m){
return pluto.reader.parse(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"Extension ID"], null),cljs.core.cst$kw$capacities,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$components,pluto.components.html.components,cljs.core.cst$kw$queries,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$random_DASH_boolean,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$random_DASH_boolean], null),cljs.core.cst$sym$identity,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$extensions_SLASH_identity,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$map], null)], null)], null),cljs.core.cst$kw$hooks,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$main,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hook,pluto.examples.hook,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$view,cljs.core.cst$kw$view], null)], null)], null),cljs.core.cst$kw$events,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$identity,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.cst$kw$identity,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cb,cljs.core.cst$kw$event], null)], null),cljs.core.cst$sym$alert,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.cst$kw$alert,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$string], null)], null)], null)], null)], null),m);
});
pluto.examples.render_extension = (function pluto$examples$render_extension(m,el,el_errors){
var map__1489 = pluto.examples.parse(m);
var map__1489__$1 = (((((!((map__1489 == null))))?(((((map__1489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1489):map__1489);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1489__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1489__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
pluto.examples.render(pluto.examples.errors_list(errors),el_errors);
} else {
}

return pluto.examples.render(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hooks,cljs.core.cst$kw$main,cljs.core.cst$kw$demo,cljs.core.cst$kw$parsed,cljs.core.cst$kw$view], null)),el);
});
pluto.examples.read_extension = (function pluto$examples$read_extension(o,el,el_errors){
var map__1491 = pluto.reader.read(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(o));
var map__1491__$1 = (((((!((map__1491 == null))))?(((((map__1491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1491):map__1491);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1491__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1491__$1,cljs.core.cst$kw$errors);
return pluto.examples.render_extension(data,el,el_errors);
});
pluto.examples.render_result = (function pluto$examples$render_result(p__1493,el,el_errors){
var map__1494 = p__1493;
var map__1494__$1 = (((((!((map__1494 == null))))?(((((map__1494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1494):map__1494);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1494__$1,cljs.core.cst$kw$type);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1494__$1,cljs.core.cst$kw$value);
var G__1496 = type;
var G__1496__$1 = (((G__1496 instanceof cljs.core.Keyword))?G__1496.fqn:null);
switch (G__1496__$1) {
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

return pluto.storages.fetch(s,(function (p1__1498_SHARP_){
return pluto.examples.render_result(p1__1498_SHARP_,el,el_errors);
}));
});
goog.exportSymbol('pluto.examples.load_and_render', pluto.examples.load_and_render);
