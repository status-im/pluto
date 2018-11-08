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
var G__1184__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("re-frame: overwriting",cljs.core.first(args))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pluto.examples.warn,args);

}
};
var G__1184 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1185__i = 0, G__1185__a = new Array(arguments.length -  0);
while (G__1185__i < G__1185__a.length) {G__1185__a[G__1185__i] = arguments[G__1185__i + 0]; ++G__1185__i;}
  args = new cljs.core.IndexedSeq(G__1185__a,0,null);
} 
return G__1184__delegate.call(this,args);};
G__1184.cljs$lang$maxFixedArity = 0;
G__1184.cljs$lang$applyTo = (function (arglist__1186){
var args = cljs.core.seq(arglist__1186);
return G__1184__delegate(args);
});
G__1184.cljs$core$IFn$_invoke$arity$variadic = G__1184__delegate;
return G__1184;
})()
], null));
if((typeof pluto !== 'undefined') && (typeof pluto.examples !== 'undefined') && (typeof pluto.examples.do_timer !== 'undefined')){
} else {
pluto.examples.do_timer = setInterval((function (){
var G__1187 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$random,(cljs.core.rand_int((2)) === (0))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__1187) : re_frame.core.dispatch.call(null,G__1187));
}),(1000));
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$random,(function (db,p__1188){
var vec__1189 = p__1188;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1189,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1189,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$random,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cond_QMARK_,b], null));
}));
var G__1192_1194 = cljs.core.cst$kw$pluto$examples_SLASH_alert;
var G__1193_1195 = ((function (G__1192_1194){
return (function (value){
return alert(value);
});})(G__1192_1194))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__1192_1194,G__1193_1195) : re_frame.core.reg_fx.call(null,G__1192_1194,G__1193_1195));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alert,(function (cofx,p__1196){
var vec__1197 = p__1196;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1197,(0),null);
var map__1200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1197,(1),null);
var map__1200__$1 = (((((!((map__1200 == null))))?(((((map__1200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1200):map__1200);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1200__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pluto$examples_SLASH_alert,value], null);
}));
var G__1202_1204 = cljs.core.cst$kw$random_DASH_boolean;
var G__1203_1205 = cljs.core.cst$kw$random;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1202_1204,G__1203_1205) : re_frame.core.reg_sub.call(null,G__1202_1204,G__1203_1205));
var G__1206_1214 = cljs.core.cst$kw$extensions_SLASH_identity;
var G__1207_1215 = ((function (G__1206_1214){
return (function (_,p__1208){
var vec__1209 = p__1208;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1209,(0),null);
var map__1212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1209,(1),null);
var map__1212__$1 = (((((!((map__1212 == null))))?(((((map__1212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1212):map__1212);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1212__$1,cljs.core.cst$kw$value);
return value;
});})(G__1206_1214))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__1206_1214,G__1207_1215) : re_frame.core.reg_sub.call(null,G__1206_1214,G__1207_1215));
pluto.examples.render = (function pluto$examples$render(h,el){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2((function (){var G__1216 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Test Extension",cljs.core.cst$kw$users,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nm,"Jane"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nm,"Sue"], null)], null)], null);
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__1216) : h.call(null,G__1216));
})(),el);
});
pluto.examples.errors_list = (function pluto$examples$errors_list(v){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Errors"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul], null),(function (){var iter__4434__auto__ = (function pluto$examples$errors_list_$_iter__1217(s__1218){
return (new cljs.core.LazySeq(null,(function (){
var s__1218__$1 = s__1218;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__1218__$1);
if(temp__5457__auto__){
var s__1218__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1218__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__1218__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__1220 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__1219 = (0);
while(true){
if((i__1219 < size__4433__auto__)){
var map__1221 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__1219);
var map__1221__$1 = (((((!((map__1221 == null))))?(((((map__1221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1221):map__1221);
var m = map__1221__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1221__$1,cljs.core.cst$kw$type);
cljs.core.chunk_append(b__1220,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$type)], 0))], null)], null));

var G__1225 = (i__1219 + (1));
i__1219 = G__1225;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1220),pluto$examples$errors_list_$_iter__1217(cljs.core.chunk_rest(s__1218__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1220),null);
}
} else {
var map__1223 = cljs.core.first(s__1218__$2);
var map__1223__$1 = (((((!((map__1223 == null))))?(((((map__1223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1223):map__1223);
var m = map__1223__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1223__$1,cljs.core.cst$kw$type);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$type)], 0))], null)], null),pluto$examples$errors_list_$_iter__1217(cljs.core.rest(s__1218__$2)));
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
if((typeof pluto !== 'undefined') && (typeof pluto.examples !== 'undefined') && (typeof pluto.examples.t_pluto$examples1226 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {pluto.reader.hooks.Hook}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pluto.examples.t_pluto$examples1226 = (function (meta1227){
this.meta1227 = meta1227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pluto.examples.t_pluto$examples1226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1228,meta1227__$1){
var self__ = this;
var _1228__$1 = this;
return (new pluto.examples.t_pluto$examples1226(meta1227__$1));
});

pluto.examples.t_pluto$examples1226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1228){
var self__ = this;
var _1228__$1 = this;
return self__.meta1227;
});

pluto.examples.t_pluto$examples1226.prototype.pluto$reader$hooks$Hook$ = cljs.core.PROTOCOL_SENTINEL;

pluto.examples.t_pluto$examples1226.prototype.pluto$reader$hooks$Hook$hook_in$arity$4 = (function (_,id,p__1229,cofx){
var self__ = this;
var map__1230 = p__1229;
var map__1230__$1 = (((((!((map__1230 == null))))?(((((map__1230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1230):map__1230);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1230__$1,cljs.core.cst$kw$description);
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1230__$1,cljs.core.cst$kw$scope);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1230__$1,cljs.core.cst$kw$parameters);
var preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1230__$1,cljs.core.cst$kw$preview);
var short_preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1230__$1,cljs.core.cst$kw$short_DASH_preview);
var ___$1 = this;
return null;
});

pluto.examples.t_pluto$examples1226.prototype.pluto$reader$hooks$Hook$unhook$arity$4 = (function (_,id,p__1232,p__1233){
var self__ = this;
var map__1234 = p__1232;
var map__1234__$1 = (((((!((map__1234 == null))))?(((((map__1234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1234):map__1234);
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1234__$1,cljs.core.cst$kw$scope);
var map__1235 = p__1233;
var map__1235__$1 = (((((!((map__1235 == null))))?(((((map__1235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1235):map__1235);
var cofx = map__1235__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1235__$1,cljs.core.cst$kw$db);
var ___$1 = this;
return null;
});

pluto.examples.t_pluto$examples1226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta1227], null);
});

pluto.examples.t_pluto$examples1226.cljs$lang$type = true;

pluto.examples.t_pluto$examples1226.cljs$lang$ctorStr = "pluto.examples/t_pluto$examples1226";

pluto.examples.t_pluto$examples1226.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"pluto.examples/t_pluto$examples1226");
});

/**
 * Positional factory function for pluto.examples/t_pluto$examples1226.
 */
pluto.examples.__GT_t_pluto$examples1226 = (function pluto$examples$__GT_t_pluto$examples1226(meta1227){
return (new pluto.examples.t_pluto$examples1226(meta1227));
});

}

return (new pluto.examples.t_pluto$examples1226(cljs.core.PersistentArrayMap.EMPTY));
})()
;
pluto.examples.parse = (function pluto$examples$parse(m){
return pluto.reader.parse(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$capacities,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$components,pluto.components.html.components,cljs.core.cst$kw$queries,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$random_DASH_boolean,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$random_DASH_boolean], null),cljs.core.cst$sym$identity,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$extensions_SLASH_identity,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$map], null)], null)], null),cljs.core.cst$kw$hooks,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$main,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hook,pluto.examples.hook,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$view,cljs.core.cst$kw$view], null)], null)], null),cljs.core.cst$kw$events,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$alert,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$permissions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read], null),cljs.core.cst$kw$value,cljs.core.cst$kw$alert,cljs.core.cst$kw$arguments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$string], null)], null)], null)], null)], null),m);
});
pluto.examples.render_extension = (function pluto$examples$render_extension(m,el,el_errors){
var map__1238 = pluto.examples.parse(m);
var map__1238__$1 = (((((!((map__1238 == null))))?(((((map__1238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1238):map__1238);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1238__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1238__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
pluto.examples.render(pluto.examples.errors_list(errors),el_errors);
} else {
}

return pluto.examples.render(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hooks,cljs.core.cst$kw$main,cljs.core.cst$kw$demo,cljs.core.cst$kw$parsed,cljs.core.cst$kw$view], null)),el);
});
pluto.examples.read_extension = (function pluto$examples$read_extension(o,el,el_errors){
var map__1240 = pluto.reader.read(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(o));
var map__1240__$1 = (((((!((map__1240 == null))))?(((((map__1240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1240):map__1240);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1240__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1240__$1,cljs.core.cst$kw$errors);
return pluto.examples.render_extension(data,el,el_errors);
});
pluto.examples.render_result = (function pluto$examples$render_result(p__1242,el,el_errors){
var map__1243 = p__1242;
var map__1243__$1 = (((((!((map__1243 == null))))?(((((map__1243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1243):map__1243);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1243__$1,cljs.core.cst$kw$type);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1243__$1,cljs.core.cst$kw$value);
var G__1245 = type;
var G__1245__$1 = (((G__1245 instanceof cljs.core.Keyword))?G__1245.fqn:null);
switch (G__1245__$1) {
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

return pluto.storages.fetch(s,(function (p1__1247_SHARP_){
return pluto.examples.render_result(p1__1247_SHARP_,el,el_errors);
}));
});
goog.exportSymbol('pluto.examples.load_and_render', pluto.examples.load_and_render);
