// Compiled by ClojureScript 1.10.329 {}
goog.provide('pluto.examples');
goog.require('cljs.core');
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
re_frame.loggers.set_loggers_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warn","warn",-436710552),(function() { 
var G__2445__delegate = function (args){
if(cljs.core._EQ_.call(null,"re-frame: overwriting",cljs.core.first.call(null,args))){
return null;
} else {
return cljs.core.apply.call(null,pluto.examples.warn,args);

}
};
var G__2445 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2446__i = 0, G__2446__a = new Array(arguments.length -  0);
while (G__2446__i < G__2446__a.length) {G__2446__a[G__2446__i] = arguments[G__2446__i + 0]; ++G__2446__i;}
  args = new cljs.core.IndexedSeq(G__2446__a,0,null);
} 
return G__2445__delegate.call(this,args);};
G__2445.cljs$lang$maxFixedArity = 0;
G__2445.cljs$lang$applyTo = (function (arglist__2447){
var args = cljs.core.seq(arglist__2447);
return G__2445__delegate(args);
});
G__2445.cljs$core$IFn$_invoke$arity$variadic = G__2445__delegate;
return G__2445;
})()
], null));
if((typeof pluto !== 'undefined') && (typeof pluto.examples !== 'undefined') && (typeof pluto.examples.do_timer !== 'undefined')){
} else {
pluto.examples.do_timer = setInterval((function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"random","random",-557811113),(cljs.core.rand_int.call(null,(2)) === (0))], null));
}),(1000));
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"random","random",-557811113),(function (db,p__2448){
var vec__2449 = p__2448;
var _ = cljs.core.nth.call(null,vec__2449,(0),null);
var b = cljs.core.nth.call(null,vec__2449,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"random","random",-557811113),b);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"random-boolean","random-boolean",2015461168),new cljs.core.Keyword(null,"random","random",-557811113));
pluto.examples.render = (function pluto$examples$render(h,el){
return reagent.core.render.call(null,h,el);
});
/**
 * A simple hook for :hooks/main
 */
pluto.examples.main_hook = (function pluto$examples$main_hook(m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var map__2452 = m;
var map__2452__$1 = ((((!((map__2452 == null)))?(((((map__2452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2452):map__2452);
var main = cljs.core.get.call(null,map__2452__$1,new cljs.core.Keyword("views","main","views/main",-1995108663));
return main;
})()], null);
});
pluto.examples.errors_list = (function pluto$examples$errors_list(v){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Errors"], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),(function (){var iter__4311__auto__ = (function pluto$examples$errors_list_$_iter__2454(s__2455){
return (new cljs.core.LazySeq(null,(function (){
var s__2455__$1 = s__2455;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__2455__$1);
if(temp__5457__auto__){
var s__2455__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2455__$2)){
var c__4309__auto__ = cljs.core.chunk_first.call(null,s__2455__$2);
var size__4310__auto__ = cljs.core.count.call(null,c__4309__auto__);
var b__2457 = cljs.core.chunk_buffer.call(null,size__4310__auto__);
if((function (){var i__2456 = (0);
while(true){
if((i__2456 < size__4310__auto__)){
var map__2458 = cljs.core._nth.call(null,c__4309__auto__,i__2456);
var map__2458__$1 = ((((!((map__2458 == null)))?(((((map__2458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2458):map__2458);
var m = map__2458__$1;
var type = cljs.core.get.call(null,map__2458__$1,new cljs.core.Keyword(null,"type","type",1174270348));
cljs.core.chunk_append.call(null,b__2457,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')], null),cljs.core.pr_str.call(null,cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"type","type",1174270348)))], null)], null));

var G__2462 = (i__2456 + (1));
i__2456 = G__2462;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2457),pluto$examples$errors_list_$_iter__2454.call(null,cljs.core.chunk_rest.call(null,s__2455__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2457),null);
}
} else {
var map__2460 = cljs.core.first.call(null,s__2455__$2);
var map__2460__$1 = ((((!((map__2460 == null)))?(((((map__2460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2460):map__2460);
var m = map__2460__$1;
var type = cljs.core.get.call(null,map__2460__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')], null),cljs.core.pr_str.call(null,cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"type","type",1174270348)))], null)], null),pluto$examples$errors_list_$_iter__2454.call(null,cljs.core.rest.call(null,s__2455__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4311__auto__.call(null,v);
})())], null);
});
pluto.examples.storage_for = (function pluto$examples$storage_for(type){
var pred__2463 = cljs.core._EQ_;
var expr__2464 = type;
if(cljs.core.truth_(pred__2463.call(null,"url",expr__2464))){
return (new pluto.storage.http.HTTPStorage());
} else {
if(cljs.core.truth_(pred__2463.call(null,"ipfs",expr__2464))){
return (new pluto.storage.ipfs.IPFSStorage("https://cors.io/?https://gateway.ipfs.io",null,null,null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__2464)].join('')));
}
}
});
pluto.examples.fetch = (function pluto$examples$fetch(uri,cb){
var vec__2466 = clojure.string.split.call(null,uri,":");
var type = cljs.core.nth.call(null,vec__2466,(0),null);
var id = cljs.core.nth.call(null,vec__2466,(1),null);
return pluto.storage.fetch.call(null,pluto.examples.storage_for.call(null,type),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),id], null),cb);
});
pluto.examples.parse = (function pluto$examples$parse(m){
return pluto.reader.parse.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"components","components",-1073188942),pluto.components.html.components,new cljs.core.Keyword(null,"capacities","capacities",-1666536173),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"random-boolean","random-boolean",2015461168),null], null), null),new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.Keyword(null,"valid-hooks","valid-hooks",-1178341686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hooks","main","hooks/main",-1948863093),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extra-properties","extra-properties",39412206),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null)], null),m);
});
pluto.examples.render_extension = (function pluto$examples$render_extension(m,el,el_errors){
var map__2469 = pluto.examples.parse.call(null,m);
var map__2469__$1 = ((((!((map__2469 == null)))?(((((map__2469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2469):map__2469);
var data = cljs.core.get.call(null,map__2469__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var errors = cljs.core.get.call(null,map__2469__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
if(cljs.core.truth_(errors)){
pluto.examples.render.call(null,pluto.examples.errors_list.call(null,errors),el_errors);
} else {
}

return pluto.examples.render.call(null,pluto.examples.main_hook.call(null,data),el);
});
pluto.examples.read_extension = (function pluto$examples$read_extension(o,el,el_errors){
var map__2471 = pluto.reader.read.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,o)));
var map__2471__$1 = ((((!((map__2471 == null)))?(((((map__2471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2471):map__2471);
var data = cljs.core.get.call(null,map__2471__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var errors = cljs.core.get.call(null,map__2471__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
return pluto.examples.render_extension.call(null,data,el,el_errors);
});
pluto.examples.render_result = (function pluto$examples$render_result(p__2473,el,el_errors){
var map__2474 = p__2473;
var map__2474__$1 = ((((!((map__2474 == null)))?(((((map__2474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2474):map__2474);
var type = cljs.core.get.call(null,map__2474__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__2474__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__2476 = type;
var G__2476__$1 = (((G__2476 instanceof cljs.core.Keyword))?G__2476.fqn:null);
switch (G__2476__$1) {
case "error":
return el_errors.innerHTML = value;

break;
default:
return pluto.examples.read_extension.call(null,value,el,el_errors);

}
});
pluto.examples.load_and_render = (function pluto$examples$load_and_render(s,el,el_errors){
reagent.dom.unmount_component_at_node.call(null,el);

reagent.dom.unmount_component_at_node.call(null,el_errors);

return pluto.examples.fetch.call(null,s,(function (p1__2478_SHARP_){
return pluto.examples.render_result.call(null,p1__2478_SHARP_,el,el_errors);
}));
});
goog.exportSymbol('pluto.examples.load_and_render', pluto.examples.load_and_render);
