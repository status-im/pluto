// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('pluto.examples');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('pluto.components.html');
goog.require('pluto.reader');
goog.require('pluto.storage');
goog.require('pluto.storage.http');
goog.require('pluto.storage.gist');
goog.require('pluto.storage.ipfs');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('re_frame.loggers');
pluto.examples.warn = console.warn.bind(console);
re_frame.loggers.set_loggers_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$warn,(function() { 
var G__2321__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("re-frame: overwriting",cljs.core.first(args))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.examples.warn,args);

}
};
var G__2321 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2322__i = 0, G__2322__a = new Array(arguments.length -  0);
while (G__2322__i < G__2322__a.length) {G__2322__a[G__2322__i] = arguments[G__2322__i + 0]; ++G__2322__i;}
  args = new cljs.core.IndexedSeq(G__2322__a,0,null);
} 
return G__2321__delegate.call(this,args);};
G__2321.cljs$lang$maxFixedArity = 0;
G__2321.cljs$lang$applyTo = (function (arglist__2323){
var args = cljs.core.seq(arglist__2323);
return G__2321__delegate(args);
});
G__2321.cljs$core$IFn$_invoke$arity$variadic = G__2321__delegate;
return G__2321;
})()
], null));
if((typeof pluto !== 'undefined') && (typeof pluto.examples !== 'undefined') && (typeof pluto.examples.do_timer !== 'undefined')){
} else {
pluto.examples.do_timer = setInterval((function (){
var G__2324 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$random,(cljs.core.rand_int((2)) === (0))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__2324) : re_frame.core.dispatch.call(null,G__2324));
}),(1000));
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$random,(function (db,p__2325){
var vec__2326 = p__2325;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2326,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2326,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$random,b);
}));
var G__2329_2331 = cljs.core.cst$kw$random_DASH_boolean;
var G__2330_2332 = cljs.core.cst$kw$random;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__2329_2331,G__2330_2332) : re_frame.core.reg_sub.call(null,G__2329_2331,G__2330_2332));
pluto.examples.render = (function pluto$examples$render(h,el){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2((function (){var G__2333 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"Test Extension"], null);
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__2333) : h.call(null,G__2333));
})(),el);
});
pluto.examples.errors_list = (function pluto$examples$errors_list(v){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Errors"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul], null),(function (){var iter__4311__auto__ = (function pluto$examples$errors_list_$_iter__2334(s__2335){
return (new cljs.core.LazySeq(null,(function (){
var s__2335__$1 = s__2335;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__2335__$1);
if(temp__5457__auto__){
var s__2335__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2335__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__2335__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__2337 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__2336 = (0);
while(true){
if((i__2336 < size__4310__auto__)){
var map__2338 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__2336);
var map__2338__$1 = ((((!((map__2338 == null)))?(((((map__2338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2338):map__2338);
var m = map__2338__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2338__$1,cljs.core.cst$kw$type);
cljs.core.chunk_append(b__2337,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$type)], 0))], null)], null));

var G__2342 = (i__2336 + (1));
i__2336 = G__2342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2337),pluto$examples$errors_list_$_iter__2334(cljs.core.chunk_rest(s__2335__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2337),null);
}
} else {
var map__2340 = cljs.core.first(s__2335__$2);
var map__2340__$1 = ((((!((map__2340 == null)))?(((((map__2340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2340):map__2340);
var m = map__2340__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2340__$1,cljs.core.cst$kw$type);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$type)], 0))], null)], null),pluto$examples$errors_list_$_iter__2334(cljs.core.rest(s__2335__$2)));
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
pluto.examples.storage_for = (function pluto$examples$storage_for(type){
var pred__2343 = cljs.core._EQ_;
var expr__2344 = type;
if(cljs.core.truth_((pred__2343.cljs$core$IFn$_invoke$arity$2 ? pred__2343.cljs$core$IFn$_invoke$arity$2("url",expr__2344) : pred__2343.call(null,"url",expr__2344)))){
return (new pluto.storage.http.HTTPStorage());
} else {
if(cljs.core.truth_((pred__2343.cljs$core$IFn$_invoke$arity$2 ? pred__2343.cljs$core$IFn$_invoke$arity$2("gist",expr__2344) : pred__2343.call(null,"gist",expr__2344)))){
return (new pluto.storage.gist.GistStorage());
} else {
if(cljs.core.truth_((pred__2343.cljs$core$IFn$_invoke$arity$2 ? pred__2343.cljs$core$IFn$_invoke$arity$2("ipfs",expr__2344) : pred__2343.call(null,"ipfs",expr__2344)))){
return (new pluto.storage.ipfs.IPFSStorage("https://cors.io/?https://gateway.ipfs.io",null,null,null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__2344)].join('')));
}
}
}
});
pluto.examples.fetch = (function pluto$examples$fetch(uri,cb){
var vec__2346 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uri,"@");
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2346,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2346,(1),null);
return pluto.storage.fetch(pluto.examples.storage_for(type),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,id], null),cb);
});
pluto.examples.parse = (function pluto$examples$parse(m){
return pluto.reader.parse(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$capacities,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$components,pluto.components.html.components,cljs.core.cst$kw$hooks,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$hooks_SLASH_main,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$view,cljs.core.cst$kw$view], null)], null)], null)], null)], null),m);
});
pluto.examples.render_extension = (function pluto$examples$render_extension(m,el,el_errors){
var map__2349 = pluto.examples.parse(m);
var map__2349__$1 = ((((!((map__2349 == null)))?(((((map__2349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2349):map__2349);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2349__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2349__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
pluto.examples.render(pluto.examples.errors_list(errors),el_errors);
} else {
}

return pluto.examples.render(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hooks_SLASH_main$demo,cljs.core.cst$kw$view], null)),el);
});
pluto.examples.read_extension = (function pluto$examples$read_extension(o,el,el_errors){
var map__2351 = pluto.reader.read(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljs.core.first(o)));
var map__2351__$1 = ((((!((map__2351 == null)))?(((((map__2351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2351):map__2351);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2351__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2351__$1,cljs.core.cst$kw$errors);
return pluto.examples.render_extension(data,el,el_errors);
});
pluto.examples.render_result = (function pluto$examples$render_result(p__2353,el,el_errors){
var map__2354 = p__2353;
var map__2354__$1 = ((((!((map__2354 == null)))?(((((map__2354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2354):map__2354);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2354__$1,cljs.core.cst$kw$type);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2354__$1,cljs.core.cst$kw$value);
var G__2356 = type;
var G__2356__$1 = (((G__2356 instanceof cljs.core.Keyword))?G__2356.fqn:null);
switch (G__2356__$1) {
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

return pluto.examples.fetch(s,(function (p1__2358_SHARP_){
return pluto.examples.render_result(p1__2358_SHARP_,el,el_errors);
}));
});
goog.exportSymbol('pluto.examples.load_and_render', pluto.examples.load_and_render);
