// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('pluto.examples');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('pluto.components.html');
goog.require('pluto.js');
goog.require('pluto.reader');
goog.require('pluto.host');
goog.require('pluto.storages');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('re_frame.loggers');
pluto.examples.warn = console.warn.bind(console);
re_frame.loggers.set_loggers_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$warn,(function() { 
var G__1349__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("re-frame: overwriting",cljs.core.first(args))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.examples.warn,args);

}
};
var G__1349 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1350__i = 0, G__1350__a = new Array(arguments.length -  0);
while (G__1350__i < G__1350__a.length) {G__1350__a[G__1350__i] = arguments[G__1350__i + 0]; ++G__1350__i;}
  args = new cljs.core.IndexedSeq(G__1350__a,0,null);
} 
return G__1349__delegate.call(this,args);};
G__1349.cljs$lang$maxFixedArity = 0;
G__1349.cljs$lang$applyTo = (function (arglist__1351){
var args = cljs.core.seq(arglist__1351);
return G__1349__delegate(args);
});
G__1349.cljs$core$IFn$_invoke$arity$variadic = G__1349__delegate;
return G__1349;
})()
], null));
if((typeof pluto !== 'undefined') && (typeof pluto.examples !== 'undefined') && (typeof pluto.examples.do_timer !== 'undefined')){
} else {
pluto.examples.do_timer = setInterval((function (){
var G__1352 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$random,(cljs.core.rand_int((2)) === (0))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1352) : re_frame.core.dispatch.call(null,G__1352));
}),(1000));
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$random,(function (db,p__1353){
var vec__1354 = p__1353;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1354,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1354,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$random,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cond_QMARK_,b], null));
}));
var G__1357_1359 = cljs.core.cst$kw$pluto$examples_SLASH_alert;
var G__1358_1360 = ((function (G__1357_1359){
return (function (value){
return alert(value);
});})(G__1357_1359))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1357_1359,G__1358_1360) : re_frame.core.reg_fx.call(null,G__1357_1359,G__1358_1360));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alert,(function (cofx,p__1361){
var vec__1362 = p__1361;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1362,(0),null);
var map__1365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1362,(1),null);
var map__1365__$1 = ((((!((map__1365 == null)))?(((((map__1365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1365):map__1365);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1365__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pluto$examples_SLASH_alert,value], null);
}));
var G__1367_1369 = cljs.core.cst$kw$random_DASH_boolean;
var G__1368_1370 = cljs.core.cst$kw$random;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1367_1369,G__1368_1370) : re_frame.core.reg_sub.call(null,G__1367_1369,G__1368_1370));
pluto.examples.render = (function pluto$examples$render(h,el){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2((function (){var G__1371 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"Test Extension"], null);
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__1371) : h.call(null,G__1371));
})(),el);
});
pluto.examples.errors_list = (function pluto$examples$errors_list(v){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Errors"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul], null),(function (){var iter__4311__auto__ = (function pluto$examples$errors_list_$_iter__1372(s__1373){
return (new cljs.core.LazySeq(null,(function (){
var s__1373__$1 = s__1373;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__1373__$1);
if(temp__5457__auto__){
var s__1373__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1373__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__1373__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__1375 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__1374 = (0);
while(true){
if((i__1374 < size__4310__auto__)){
var map__1376 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__1374);
var map__1376__$1 = ((((!((map__1376 == null)))?(((((map__1376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1376):map__1376);
var m = map__1376__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1376__$1,cljs.core.cst$kw$type);
cljs.core.chunk_append(b__1375,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$type)], 0))], null)], null));

var G__1380 = (i__1374 + (1));
i__1374 = G__1380;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1375),pluto$examples$errors_list_$_iter__1372(cljs.core.chunk_rest(s__1373__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1375),null);
}
} else {
var map__1378 = cljs.core.first(s__1373__$2);
var map__1378__$1 = ((((!((map__1378 == null)))?(((((map__1378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1378):map__1378);
var m = map__1378__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1378__$1,cljs.core.cst$kw$type);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$type)], 0))], null)], null),pluto$examples$errors_list_$_iter__1372(cljs.core.rest(s__1373__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4311__auto__(v);
})())], null);
});
});
pluto.examples.hook = (function (){
if((typeof pluto !== 'undefined') && (typeof pluto.examples !== 'undefined') && (typeof pluto.examples.t_pluto$examples1381 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {pluto.host.AppHook}
 * @implements {cljs.core.IWithMeta}
*/
pluto.examples.t_pluto$examples1381 = (function (meta1382){
this.meta1382 = meta1382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pluto.examples.t_pluto$examples1381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1383,meta1382__$1){
var self__ = this;
var _1383__$1 = this;
return (new pluto.examples.t_pluto$examples1381(meta1382__$1));
});

pluto.examples.t_pluto$examples1381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1383){
var self__ = this;
var _1383__$1 = this;
return self__.meta1382;
});

pluto.examples.t_pluto$examples1381.prototype.pluto$host$AppHook$ = cljs.core.PROTOCOL_SENTINEL;

pluto.examples.t_pluto$examples1381.prototype.pluto$host$AppHook$id$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$main;
});

pluto.examples.t_pluto$examples1381.prototype.pluto$host$AppHook$properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$view,cljs.core.cst$kw$view], null);
});

pluto.examples.t_pluto$examples1381.prototype.pluto$host$AppHook$hook_in$arity$4 = (function (_,id,p__1384,cofx){
var self__ = this;
var map__1385 = p__1384;
var map__1385__$1 = ((((!((map__1385 == null)))?(((((map__1385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1385):map__1385);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1385__$1,cljs.core.cst$kw$description);
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1385__$1,cljs.core.cst$kw$scope);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1385__$1,cljs.core.cst$kw$parameters);
var preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1385__$1,cljs.core.cst$kw$preview);
var short_preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1385__$1,cljs.core.cst$kw$short_DASH_preview);
var ___$1 = this;
return null;
});

pluto.examples.t_pluto$examples1381.prototype.pluto$host$AppHook$unhook$arity$4 = (function (_,id,p__1387,p__1388){
var self__ = this;
var map__1389 = p__1387;
var map__1389__$1 = ((((!((map__1389 == null)))?(((((map__1389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1389):map__1389);
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1389__$1,cljs.core.cst$kw$scope);
var map__1390 = p__1388;
var map__1390__$1 = ((((!((map__1390 == null)))?(((((map__1390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1390):map__1390);
var cofx = map__1390__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1390__$1,cljs.core.cst$kw$db);
var ___$1 = this;
return null;
});

pluto.examples.t_pluto$examples1381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta1382], null);
});

pluto.examples.t_pluto$examples1381.cljs$lang$type = true;

pluto.examples.t_pluto$examples1381.cljs$lang$ctorStr = "pluto.examples/t_pluto$examples1381";

pluto.examples.t_pluto$examples1381.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"pluto.examples/t_pluto$examples1381");
});

/**
 * Positional factory function for pluto.examples/t_pluto$examples1381.
 */
pluto.examples.__GT_t_pluto$examples1381 = (function pluto$examples$__GT_t_pluto$examples1381(meta1382){
return (new pluto.examples.t_pluto$examples1381(meta1382));
});

}

return (new pluto.examples.t_pluto$examples1381(cljs.core.PersistentArrayMap.EMPTY));
})()
;
pluto.examples.parse = (function pluto$examples$parse(m){
return pluto.reader.parse(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$capacities,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$components,pluto.components.html.components,cljs.core.cst$kw$queries,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$random_DASH_boolean,null], null), null),cljs.core.cst$kw$events,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$log,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.PersistentVector.EMPTY], null)], null),cljs.core.cst$kw$hooks,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$main,pluto.examples.hook], null)], null)], null),m);
});
pluto.examples.render_extension = (function pluto$examples$render_extension(m,el,el_errors){
var map__1393 = pluto.examples.parse(m);
var map__1393__$1 = ((((!((map__1393 == null)))?(((((map__1393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1393):map__1393);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1393__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1393__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
pluto.examples.render(pluto.examples.errors_list(errors),el_errors);
} else {
}

return pluto.examples.render(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hooks,cljs.core.cst$kw$main,cljs.core.cst$kw$demo,cljs.core.cst$kw$parsed,cljs.core.cst$kw$view], null)),el);
});
pluto.examples.read_extension = (function pluto$examples$read_extension(o,el,el_errors){
var map__1395 = pluto.reader.read(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljs.core.first(o)));
var map__1395__$1 = ((((!((map__1395 == null)))?(((((map__1395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1395):map__1395);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1395__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1395__$1,cljs.core.cst$kw$errors);
return pluto.examples.render_extension(data,el,el_errors);
});
pluto.examples.render_result = (function pluto$examples$render_result(p__1397,el,el_errors){
var map__1398 = p__1397;
var map__1398__$1 = ((((!((map__1398 == null)))?(((((map__1398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1398):map__1398);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1398__$1,cljs.core.cst$kw$type);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1398__$1,cljs.core.cst$kw$value);
var G__1400 = type;
var G__1400__$1 = (((G__1400 instanceof cljs.core.Keyword))?G__1400.fqn:null);
switch (G__1400__$1) {
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

return pluto.storages.fetch(s,(function (p1__1402_SHARP_){
return pluto.examples.render_result(p1__1402_SHARP_,el,el_errors);
}));
});
goog.exportSymbol('pluto.examples.load_and_render', pluto.examples.load_and_render);
