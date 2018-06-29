// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('pluto.examples');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('pluto.components.html');
goog.require('pluto.reader');
goog.require('pluto.storage');
goog.require('pluto.storage.http');
goog.require('pluto.storage.ipfs');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('re_frame.loggers');
pluto.examples.warn = console.warn.bind(console);
re_frame.loggers.set_loggers_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$warn,(function() { 
var G__1307__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("re-frame: overwriting",cljs.core.first(args))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.examples.warn,args);

}
};
var G__1307 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1308__i = 0, G__1308__a = new Array(arguments.length -  0);
while (G__1308__i < G__1308__a.length) {G__1308__a[G__1308__i] = arguments[G__1308__i + 0]; ++G__1308__i;}
  args = new cljs.core.IndexedSeq(G__1308__a,0,null);
} 
return G__1307__delegate.call(this,args);};
G__1307.cljs$lang$maxFixedArity = 0;
G__1307.cljs$lang$applyTo = (function (arglist__1309){
var args = cljs.core.seq(arglist__1309);
return G__1307__delegate(args);
});
G__1307.cljs$core$IFn$_invoke$arity$variadic = G__1307__delegate;
return G__1307;
})()
], null));
if((typeof pluto !== 'undefined') && (typeof pluto.examples !== 'undefined') && (typeof pluto.examples.do_timer !== 'undefined')){
} else {
pluto.examples.do_timer = setInterval((function (){
var G__1310 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$random,(cljs.core.rand_int((2)) === (0))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1310) : re_frame.core.dispatch.call(null,G__1310));
}),(1000));
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$random,(function (db,p__1311){
var vec__1312 = p__1311;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1312,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1312,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$random,b);
}));
var G__1315_1317 = cljs.core.cst$kw$random_DASH_boolean;
var G__1316_1318 = cljs.core.cst$kw$random;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1315_1317,G__1316_1318) : re_frame.core.reg_sub.call(null,G__1315_1317,G__1316_1318));
pluto.examples.render = (function pluto$examples$render(h,el){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(h,el);
});
/**
 * A simple hook for :hooks/main
 */
pluto.examples.main_hook = (function pluto$examples$main_hook(m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(function (){var map__1319 = m;
var map__1319__$1 = ((((!((map__1319 == null)))?(((((map__1319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1319):map__1319);
var main = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1319__$1,cljs.core.cst$kw$views_SLASH_main);
return main;
})()], null);
});
pluto.examples.errors_list = (function pluto$examples$errors_list(v){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Errors"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul], null),(function (){var iter__4311__auto__ = (function pluto$examples$errors_list_$_iter__1321(s__1322){
return (new cljs.core.LazySeq(null,(function (){
var s__1322__$1 = s__1322;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__1322__$1);
if(temp__5457__auto__){
var s__1322__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1322__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__1322__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__1324 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__1323 = (0);
while(true){
if((i__1323 < size__4310__auto__)){
var map__1325 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__1323);
var map__1325__$1 = ((((!((map__1325 == null)))?(((((map__1325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1325):map__1325);
var m = map__1325__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1325__$1,cljs.core.cst$kw$type);
cljs.core.chunk_append(b__1324,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$type)], 0))], null)], null));

var G__1329 = (i__1323 + (1));
i__1323 = G__1329;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1324),pluto$examples$errors_list_$_iter__1321(cljs.core.chunk_rest(s__1322__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1324),null);
}
} else {
var map__1327 = cljs.core.first(s__1322__$2);
var map__1327__$1 = ((((!((map__1327 == null)))?(((((map__1327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1327):map__1327);
var m = map__1327__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1327__$1,cljs.core.cst$kw$type);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$type)], 0))], null)], null),pluto$examples$errors_list_$_iter__1321(cljs.core.rest(s__1322__$2)));
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
pluto.examples.storage_for = (function pluto$examples$storage_for(type){
var pred__1330 = cljs.core._EQ_;
var expr__1331 = type;
if(cljs.core.truth_((pred__1330.cljs$core$IFn$_invoke$arity$2 ? pred__1330.cljs$core$IFn$_invoke$arity$2("url",expr__1331) : pred__1330.call(null,"url",expr__1331)))){
return (new pluto.storage.http.HTTPStorage());
} else {
if(cljs.core.truth_((pred__1330.cljs$core$IFn$_invoke$arity$2 ? pred__1330.cljs$core$IFn$_invoke$arity$2("ipfs",expr__1331) : pred__1330.call(null,"ipfs",expr__1331)))){
return (new pluto.storage.ipfs.IPFSStorage("https://cors.io/?https://gateway.ipfs.io",null,null,null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1331)].join('')));
}
}
});
pluto.examples.fetch = (function pluto$examples$fetch(uri,cb){
var vec__1333 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uri,":");
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1333,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1333,(1),null);
return pluto.storage.fetch(pluto.examples.storage_for(type),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,id], null),cb);
});
pluto.examples.parse = (function pluto$examples$parse(m){
return pluto.reader.parse(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$components,pluto.components.html.components,cljs.core.cst$kw$capacities,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$queries,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$random_DASH_boolean,null], null), null),cljs.core.cst$kw$events,cljs.core.PersistentHashSet.EMPTY], null),cljs.core.cst$kw$valid_DASH_hooks,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hooks_SLASH_main,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$extra_DASH_properties,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$type,cljs.core.cst$kw$view], null)], null)], null),m);
});
pluto.examples.render_extension = (function pluto$examples$render_extension(m,el,el_errors){
var map__1336 = pluto.examples.parse(m);
var map__1336__$1 = ((((!((map__1336 == null)))?(((((map__1336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1336):map__1336);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1336__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1336__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
pluto.examples.render(pluto.examples.errors_list(errors),el_errors);
} else {
}

return pluto.examples.render(pluto.examples.main_hook(data),el);
});
pluto.examples.read_extension = (function pluto$examples$read_extension(o,el,el_errors){
var map__1338 = pluto.reader.read(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljs.core.first(o)));
var map__1338__$1 = ((((!((map__1338 == null)))?(((((map__1338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1338):map__1338);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1338__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1338__$1,cljs.core.cst$kw$errors);
return pluto.examples.render_extension(data,el,el_errors);
});
pluto.examples.render_result = (function pluto$examples$render_result(p__1340,el,el_errors){
var map__1341 = p__1340;
var map__1341__$1 = ((((!((map__1341 == null)))?(((((map__1341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1341):map__1341);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1341__$1,cljs.core.cst$kw$type);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1341__$1,cljs.core.cst$kw$value);
var G__1343 = type;
var G__1343__$1 = (((G__1343 instanceof cljs.core.Keyword))?G__1343.fqn:null);
switch (G__1343__$1) {
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

return pluto.examples.fetch(s,(function (p1__1345_SHARP_){
return pluto.examples.render_result(p1__1345_SHARP_,el,el_errors);
}));
});
goog.exportSymbol('pluto.examples.load_and_render', pluto.examples.load_and_render);
