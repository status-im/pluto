// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('pluto.examples');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('pluto.components.html');
goog.require('pluto.reader');
goog.require('pluto.host');
goog.require('pluto.storages');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('re_frame.loggers');
pluto.examples.warn = console.warn.bind(console);
re_frame.loggers.set_loggers_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$warn,(function() { 
var G__1185__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("re-frame: overwriting",cljs.core.first(args))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.examples.warn,args);

}
};
var G__1185 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1186__i = 0, G__1186__a = new Array(arguments.length -  0);
while (G__1186__i < G__1186__a.length) {G__1186__a[G__1186__i] = arguments[G__1186__i + 0]; ++G__1186__i;}
  args = new cljs.core.IndexedSeq(G__1186__a,0,null);
} 
return G__1185__delegate.call(this,args);};
G__1185.cljs$lang$maxFixedArity = 0;
G__1185.cljs$lang$applyTo = (function (arglist__1187){
var args = cljs.core.seq(arglist__1187);
return G__1185__delegate(args);
});
G__1185.cljs$core$IFn$_invoke$arity$variadic = G__1185__delegate;
return G__1185;
})()
], null));
if((typeof pluto !== 'undefined') && (typeof pluto.examples !== 'undefined') && (typeof pluto.examples.do_timer !== 'undefined')){
} else {
pluto.examples.do_timer = setInterval((function (){
var G__1188 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$random,(cljs.core.rand_int((2)) === (0))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1188) : re_frame.core.dispatch.call(null,G__1188));
}),(1000));
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$random,(function (db,p__1189){
var vec__1190 = p__1189;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1190,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1190,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$random,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cond_QMARK_,b], null));
}));
var G__1193_1195 = cljs.core.cst$kw$random_DASH_boolean;
var G__1194_1196 = cljs.core.cst$kw$random;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1193_1195,G__1194_1196) : re_frame.core.reg_sub.call(null,G__1193_1195,G__1194_1196));
pluto.examples.render = (function pluto$examples$render(h,el){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2((function (){var G__1197 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"Test Extension"], null);
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__1197) : h.call(null,G__1197));
})(),el);
});
pluto.examples.errors_list = (function pluto$examples$errors_list(v){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Errors"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul], null),(function (){var iter__4311__auto__ = (function pluto$examples$errors_list_$_iter__1198(s__1199){
return (new cljs.core.LazySeq(null,(function (){
var s__1199__$1 = s__1199;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__1199__$1);
if(temp__5457__auto__){
var s__1199__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1199__$2)){
var c__4309__auto__ = cljs.core.chunk_first(s__1199__$2);
var size__4310__auto__ = cljs.core.count(c__4309__auto__);
var b__1201 = cljs.core.chunk_buffer(size__4310__auto__);
if((function (){var i__1200 = (0);
while(true){
if((i__1200 < size__4310__auto__)){
var map__1202 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4309__auto__,i__1200);
var map__1202__$1 = ((((!((map__1202 == null)))?(((((map__1202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1202):map__1202);
var m = map__1202__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1202__$1,cljs.core.cst$kw$type);
cljs.core.chunk_append(b__1201,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$type)], 0))], null)], null));

var G__1206 = (i__1200 + (1));
i__1200 = G__1206;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1201),pluto$examples$errors_list_$_iter__1198(cljs.core.chunk_rest(s__1199__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1201),null);
}
} else {
var map__1204 = cljs.core.first(s__1199__$2);
var map__1204__$1 = ((((!((map__1204 == null)))?(((((map__1204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1204):map__1204);
var m = map__1204__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1204__$1,cljs.core.cst$kw$type);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$type)], 0))], null)], null),pluto$examples$errors_list_$_iter__1198(cljs.core.rest(s__1199__$2)));
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
if((typeof pluto !== 'undefined') && (typeof pluto.examples !== 'undefined') && (typeof pluto.examples.t_pluto$examples1207 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {pluto.host.AppHook}
 * @implements {cljs.core.IWithMeta}
*/
pluto.examples.t_pluto$examples1207 = (function (meta1208){
this.meta1208 = meta1208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pluto.examples.t_pluto$examples1207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1209,meta1208__$1){
var self__ = this;
var _1209__$1 = this;
return (new pluto.examples.t_pluto$examples1207(meta1208__$1));
});

pluto.examples.t_pluto$examples1207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1209){
var self__ = this;
var _1209__$1 = this;
return self__.meta1208;
});

pluto.examples.t_pluto$examples1207.prototype.pluto$host$AppHook$ = cljs.core.PROTOCOL_SENTINEL;

pluto.examples.t_pluto$examples1207.prototype.pluto$host$AppHook$id$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$main;
});

pluto.examples.t_pluto$examples1207.prototype.pluto$host$AppHook$properties$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$view,cljs.core.cst$kw$view], null);
});

pluto.examples.t_pluto$examples1207.prototype.pluto$host$AppHook$hook_in$arity$4 = (function (_,id,p__1210,cofx){
var self__ = this;
var map__1211 = p__1210;
var map__1211__$1 = ((((!((map__1211 == null)))?(((((map__1211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1211):map__1211);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1211__$1,cljs.core.cst$kw$description);
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1211__$1,cljs.core.cst$kw$scope);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1211__$1,cljs.core.cst$kw$parameters);
var preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1211__$1,cljs.core.cst$kw$preview);
var short_preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1211__$1,cljs.core.cst$kw$short_DASH_preview);
var ___$1 = this;
return null;
});

pluto.examples.t_pluto$examples1207.prototype.pluto$host$AppHook$unhook$arity$4 = (function (_,id,p__1213,p__1214){
var self__ = this;
var map__1215 = p__1213;
var map__1215__$1 = ((((!((map__1215 == null)))?(((((map__1215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1215):map__1215);
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1215__$1,cljs.core.cst$kw$scope);
var map__1216 = p__1214;
var map__1216__$1 = ((((!((map__1216 == null)))?(((((map__1216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1216):map__1216);
var cofx = map__1216__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1216__$1,cljs.core.cst$kw$db);
var ___$1 = this;
return null;
});

pluto.examples.t_pluto$examples1207.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta1208], null);
});

pluto.examples.t_pluto$examples1207.cljs$lang$type = true;

pluto.examples.t_pluto$examples1207.cljs$lang$ctorStr = "pluto.examples/t_pluto$examples1207";

pluto.examples.t_pluto$examples1207.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"pluto.examples/t_pluto$examples1207");
});

/**
 * Positional factory function for pluto.examples/t_pluto$examples1207.
 */
pluto.examples.__GT_t_pluto$examples1207 = (function pluto$examples$__GT_t_pluto$examples1207(meta1208){
return (new pluto.examples.t_pluto$examples1207(meta1208));
});

}

return (new pluto.examples.t_pluto$examples1207(cljs.core.PersistentArrayMap.EMPTY));
})()
;
pluto.examples.parse = (function pluto$examples$parse(m){
return pluto.reader.parse(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$capacities,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$components,pluto.components.html.components,cljs.core.cst$kw$queries,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$random_DASH_boolean,null], null), null),cljs.core.cst$kw$hooks,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$main,pluto.examples.hook], null)], null)], null),m);
});
pluto.examples.render_extension = (function pluto$examples$render_extension(m,el,el_errors){
var map__1219 = pluto.examples.parse(m);
var map__1219__$1 = ((((!((map__1219 == null)))?(((((map__1219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1219):map__1219);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1219__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1219__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
pluto.examples.render(pluto.examples.errors_list(errors),el_errors);
} else {
}

return pluto.examples.render(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hooks,cljs.core.cst$kw$main,cljs.core.cst$kw$demo,cljs.core.cst$kw$parsed,cljs.core.cst$kw$view], null)),el);
});
pluto.examples.read_extension = (function pluto$examples$read_extension(o,el,el_errors){
var map__1221 = pluto.reader.read(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljs.core.first(o)));
var map__1221__$1 = ((((!((map__1221 == null)))?(((((map__1221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1221):map__1221);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1221__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1221__$1,cljs.core.cst$kw$errors);
return pluto.examples.render_extension(data,el,el_errors);
});
pluto.examples.render_result = (function pluto$examples$render_result(p__1223,el,el_errors){
var map__1224 = p__1223;
var map__1224__$1 = ((((!((map__1224 == null)))?(((((map__1224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1224):map__1224);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1224__$1,cljs.core.cst$kw$type);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1224__$1,cljs.core.cst$kw$value);
var G__1226 = type;
var G__1226__$1 = (((G__1226 instanceof cljs.core.Keyword))?G__1226.fqn:null);
switch (G__1226__$1) {
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

return pluto.storages.fetch(s,(function (p1__1228_SHARP_){
return pluto.examples.render_result(p1__1228_SHARP_,el,el_errors);
}));
});
goog.exportSymbol('pluto.examples.load_and_render', pluto.examples.load_and_render);
