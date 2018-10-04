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
var G__7444__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("re-frame: overwriting",cljs.core.first(args))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.examples.warn,args);

}
};
var G__7444 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7445__i = 0, G__7445__a = new Array(arguments.length -  0);
while (G__7445__i < G__7445__a.length) {G__7445__a[G__7445__i] = arguments[G__7445__i + 0]; ++G__7445__i;}
  args = new cljs.core.IndexedSeq(G__7445__a,0,null);
} 
return G__7444__delegate.call(this,args);};
G__7444.cljs$lang$maxFixedArity = 0;
G__7444.cljs$lang$applyTo = (function (arglist__7446){
var args = cljs.core.seq(arglist__7446);
return G__7444__delegate(args);
});
G__7444.cljs$core$IFn$_invoke$arity$variadic = G__7444__delegate;
return G__7444;
})()
], null));
if((typeof pluto !== 'undefined') && (typeof pluto.examples !== 'undefined') && (typeof pluto.examples.do_timer !== 'undefined')){
} else {
pluto.examples.do_timer = setInterval((function (){
var G__7447 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$random,(cljs.core.rand_int((2)) === (0))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__7447) : re_frame.core.dispatch.call(null,G__7447));
}),(1000));
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$random,(function (db,p__7448){
var vec__7449 = p__7448;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7449,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7449,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$random,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cond_QMARK_,b], null));
}));
var G__7452_7454 = cljs.core.cst$kw$pluto$examples_SLASH_alert;
var G__7453_7455 = ((function (G__7452_7454){
return (function (value){
return alert(value);
});})(G__7452_7454))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__7452_7454,G__7453_7455) : re_frame.core.reg_fx.call(null,G__7452_7454,G__7453_7455));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alert,(function (cofx,p__7456){
var vec__7457 = p__7456;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7457,(0),null);
var map__7460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7457,(1),null);
var map__7460__$1 = ((((!((map__7460 == null)))?(((((map__7460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7460):map__7460);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7460__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pluto$examples_SLASH_alert,value], null);
}));
var G__7462_7464 = cljs.core.cst$kw$random_DASH_boolean;
var G__7463_7465 = cljs.core.cst$kw$random;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7462_7464,G__7463_7465) : re_frame.core.reg_sub.call(null,G__7462_7464,G__7463_7465));
pluto.examples.render = (function pluto$examples$render(h,el){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2((function (){var G__7466 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"Test Extension"], null);
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__7466) : h.call(null,G__7466));
})(),el);
});
pluto.examples.errors_list = (function pluto$examples$errors_list(v){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Errors"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul], null),(function (){var iter__4324__auto__ = (function pluto$examples$errors_list_$_iter__7467(s__7468){
return (new cljs.core.LazySeq(null,(function (){
var s__7468__$1 = s__7468;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__7468__$1);
if(temp__5457__auto__){
var s__7468__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7468__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__7468__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__7470 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__7469 = (0);
while(true){
if((i__7469 < size__4323__auto__)){
var map__7471 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__7469);
var map__7471__$1 = ((((!((map__7471 == null)))?(((((map__7471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7471):map__7471);
var m = map__7471__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7471__$1,cljs.core.cst$kw$type);
cljs.core.chunk_append(b__7470,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$type)], 0))], null)], null));

var G__7475 = (i__7469 + (1));
i__7469 = G__7475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7470),pluto$examples$errors_list_$_iter__7467(cljs.core.chunk_rest(s__7468__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7470),null);
}
} else {
var map__7473 = cljs.core.first(s__7468__$2);
var map__7473__$1 = ((((!((map__7473 == null)))?(((((map__7473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7473):map__7473);
var m = map__7473__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7473__$1,cljs.core.cst$kw$type);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$type)], 0))], null)], null),pluto$examples$errors_list_$_iter__7467(cljs.core.rest(s__7468__$2)));
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
if((typeof pluto !== 'undefined') && (typeof pluto.examples !== 'undefined') && (typeof pluto.examples.t_pluto$examples7476 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {pluto.reader.hooks.Hook}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pluto.examples.t_pluto$examples7476 = (function (meta7477){
this.meta7477 = meta7477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pluto.examples.t_pluto$examples7476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7478,meta7477__$1){
var self__ = this;
var _7478__$1 = this;
return (new pluto.examples.t_pluto$examples7476(meta7477__$1));
});

pluto.examples.t_pluto$examples7476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7478){
var self__ = this;
var _7478__$1 = this;
return self__.meta7477;
});

pluto.examples.t_pluto$examples7476.prototype.pluto$reader$hooks$Hook$ = cljs.core.PROTOCOL_SENTINEL;

pluto.examples.t_pluto$examples7476.prototype.pluto$reader$hooks$Hook$hook_in$arity$4 = (function (_,id,p__7479,cofx){
var self__ = this;
var map__7480 = p__7479;
var map__7480__$1 = ((((!((map__7480 == null)))?(((((map__7480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7480):map__7480);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7480__$1,cljs.core.cst$kw$description);
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7480__$1,cljs.core.cst$kw$scope);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7480__$1,cljs.core.cst$kw$parameters);
var preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7480__$1,cljs.core.cst$kw$preview);
var short_preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7480__$1,cljs.core.cst$kw$short_DASH_preview);
var ___$1 = this;
return null;
});

pluto.examples.t_pluto$examples7476.prototype.pluto$reader$hooks$Hook$unhook$arity$4 = (function (_,id,p__7482,p__7483){
var self__ = this;
var map__7484 = p__7482;
var map__7484__$1 = ((((!((map__7484 == null)))?(((((map__7484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7484):map__7484);
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7484__$1,cljs.core.cst$kw$scope);
var map__7485 = p__7483;
var map__7485__$1 = ((((!((map__7485 == null)))?(((((map__7485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7485):map__7485);
var cofx = map__7485__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7485__$1,cljs.core.cst$kw$db);
var ___$1 = this;
return null;
});

pluto.examples.t_pluto$examples7476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta7477], null);
});

pluto.examples.t_pluto$examples7476.cljs$lang$type = true;

pluto.examples.t_pluto$examples7476.cljs$lang$ctorStr = "pluto.examples/t_pluto$examples7476";

pluto.examples.t_pluto$examples7476.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"pluto.examples/t_pluto$examples7476");
});

/**
 * Positional factory function for pluto.examples/t_pluto$examples7476.
 */
pluto.examples.__GT_t_pluto$examples7476 = (function pluto$examples$__GT_t_pluto$examples7476(meta7477){
return (new pluto.examples.t_pluto$examples7476(meta7477));
});

}

return (new pluto.examples.t_pluto$examples7476(cljs.core.PersistentArrayMap.EMPTY));
})()
;
pluto.examples.parse = (function pluto$examples$parse(m){
return pluto.reader.parse(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$capacities,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$components,pluto.components.html.components,cljs.core.cst$kw$queries,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$random_DASH_boolean,null], null), null),cljs.core.cst$kw$hooks,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$main,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hook,pluto.examples.hook,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$view,cljs.core.cst$kw$view], null)], null)], null),cljs.core.cst$kw$events,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$log,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.PersistentVector.EMPTY], null)], null)], null)], null),m);
});
pluto.examples.render_extension = (function pluto$examples$render_extension(m,el,el_errors){
var map__7488 = pluto.examples.parse(m);
var map__7488__$1 = ((((!((map__7488 == null)))?(((((map__7488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7488):map__7488);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7488__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7488__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
pluto.examples.render(pluto.examples.errors_list(errors),el_errors);
} else {
}

return pluto.examples.render(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hooks,cljs.core.cst$kw$main,cljs.core.cst$kw$demo,cljs.core.cst$kw$parsed,cljs.core.cst$kw$view], null)),el);
});
pluto.examples.read_extension = (function pluto$examples$read_extension(o,el,el_errors){
var map__7490 = pluto.reader.read(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljs.core.first(o)));
var map__7490__$1 = ((((!((map__7490 == null)))?(((((map__7490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7490):map__7490);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7490__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7490__$1,cljs.core.cst$kw$errors);
return pluto.examples.render_extension(data,el,el_errors);
});
pluto.examples.render_result = (function pluto$examples$render_result(p__7492,el,el_errors){
var map__7493 = p__7492;
var map__7493__$1 = ((((!((map__7493 == null)))?(((((map__7493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7493):map__7493);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7493__$1,cljs.core.cst$kw$type);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7493__$1,cljs.core.cst$kw$value);
var G__7495 = type;
var G__7495__$1 = (((G__7495 instanceof cljs.core.Keyword))?G__7495.fqn:null);
switch (G__7495__$1) {
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

return pluto.storages.fetch(s,(function (p1__7497_SHARP_){
return pluto.examples.render_result(p1__7497_SHARP_,el,el_errors);
}));
});
goog.exportSymbol('pluto.examples.load_and_render', pluto.examples.load_and_render);
