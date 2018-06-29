// Compiled by ClojureScript 1.10.329 {}
goog.provide('pluto.reader');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('pluto.reader.blocks');
goog.require('pluto.reader.reference');
goog.require('pluto.utils');
pluto.reader.accumulate_reader_error_BANG_ = (function pluto$reader$accumulate_reader_error_BANG_(a,m){
return cljs.core.swap_BANG_.call(null,a,cljs.core.conj,m);
});
pluto.reader.accumulate_reader_exception_BANG_ = (function pluto$reader$accumulate_reader_exception_BANG_(a,ex){
return pluto.reader.accumulate_reader_error_BANG_.call(null,a,cljs.core.merge.call(null,cljs.core.ex_data.call(null,ex),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),pluto.utils.ex_message.call(null,ex)], null),(function (){var temp__5457__auto__ = pluto.utils.ex_cause.call(null,ex);
if(cljs.core.truth_(temp__5457__auto__)){
var c = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),c], null);
} else {
return null;
}
})()));
});
/**
 * Reads an extension definition as an EDN string. Valid tags are replaced by associated records.
 * All references (identified by tagged literals) are marked by records.
 * They reference keys in the definition map and are validated and replaced at parse time.
 *   
 * No semantic validation is performed at this stage. 
 * 
 * Returns a map defining:
 * * :data the extension definition as a map
 * * :errors a vector of errors map triggered during read
 */
pluto.reader.read = (function pluto$reader$read(s){
var errors = cljs.core.atom.call(null,null);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){try{return cljs.tools.reader.read_string.call(null,cljs.core.PersistentArrayMap.EMPTY,s);
}catch (e2392){var e = e2392;
pluto.reader.accumulate_reader_exception_BANG_.call(null,errors,e);

return null;
}})()], null),(function (){var temp__5457__auto__ = cljs.core.deref.call(null,errors);
if(cljs.core.truth_(temp__5457__auto__)){
var v = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),v], null);
} else {
return null;
}
})());
});
pluto.reader.valid_extension_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meta","meta",1499536964),null], null), null);
pluto.reader.valid_namespaces = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["queries",null,"i18n",null,"views",null,"styles",null,"events",null,"hooks",null], null), null);
pluto.reader.validate_keys = (function pluto$reader$validate_keys(p__2394,s){
var map__2395 = p__2394;
var map__2395__$1 = ((((!((map__2395 == null)))?(((((map__2395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2395):map__2395);
var valid_hooks = cljs.core.get.call(null,map__2395__$1,new cljs.core.Keyword(null,"valid-hooks","valid-hooks",-1178341686));
var keys = cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.empty_QMARK_,cljs.core.namespace),s));
var extra_extension_keys = clojure.set.difference.call(null,keys,pluto.reader.valid_extension_keys);
var keys_with_ns = clojure.set.difference.call(null,cljs.core.set.call(null,s),keys);
var namespaces = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.namespace,keys_with_ns));
var extra_namespaces = clojure.set.difference.call(null,namespaces,pluto.reader.valid_namespaces);
var hooks_keys = clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.filter.call(null,((function (keys,extra_extension_keys,keys_with_ns,namespaces,extra_namespaces,map__2395,map__2395__$1,valid_hooks){
return (function (p1__2393_SHARP_){
return cljs.core._EQ_.call(null,"hooks",cljs.core.namespace.call(null,p1__2393_SHARP_));
});})(keys,extra_extension_keys,keys_with_ns,namespaces,extra_namespaces,map__2395,map__2395__$1,valid_hooks))
,keys_with_ns)),cljs.core.map.call(null,cljs.core.key,valid_hooks));
var G__2397 = null;
var G__2397__$1 = ((cljs.core.seq.call(null,extra_extension_keys))?cljs.core.assoc.call(null,G__2397,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invalid-extension-keys","invalid-extension-keys",-164289122),new cljs.core.Keyword(null,"value","value",305978217),extra_extension_keys):G__2397);
var G__2397__$2 = ((cljs.core.seq.call(null,extra_namespaces))?cljs.core.assoc.call(null,G__2397__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invalid-namespaces","invalid-namespaces",-935340538),new cljs.core.Keyword(null,"value","value",305978217),extra_namespaces):G__2397__$1);
if(cljs.core.seq.call(null,hooks_keys)){
return cljs.core.assoc.call(null,G__2397__$2,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invalid-hooks","invalid-hooks",926439600),new cljs.core.Keyword(null,"value","value",305978217),hooks_keys);
} else {
return G__2397__$2;
}
});
pluto.reader.accumulate_errors = (function pluto$reader$accumulate_errors(m,s){
return cljs.core.update.call(null,m,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.concat,s);
});
pluto.reader.merge_errors = (function pluto$reader$merge_errors(m,errors){
var G__2398 = m;
if(cljs.core.seq.call(null,errors)){
return pluto.reader.accumulate_errors.call(null,G__2398,errors);
} else {
return G__2398;
}
});
pluto.reader.parse_hiccup_children = (function pluto$reader$parse_hiccup_children(opts,children){
return cljs.core.reduce.call(null,(function (p1__2400_SHARP_,p2__2399_SHARP_){
var map__2401 = pluto.reader.parse_view.call(null,opts,p2__2399_SHARP_);
var map__2401__$1 = ((((!((map__2401 == null)))?(((((map__2401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2401):map__2401);
var data = cljs.core.get.call(null,map__2401__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var errors = cljs.core.get.call(null,map__2401__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
return pluto.reader.merge_errors.call(null,cljs.core.update.call(null,p1__2400_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.conj,data),errors);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY], null),children);
});
pluto.reader.parse_hiccup_element = (function pluto$reader$parse_hiccup_element(p__2404,o){
var map__2405 = p__2404;
var map__2405__$1 = ((((!((map__2405 == null)))?(((((map__2405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2405):map__2405);
var opts = map__2405__$1;
var components = cljs.core.get.call(null,map__2405__$1,new cljs.core.Keyword(null,"components","components",-1073188942));
if(cljs.core.truth_((function (){var or__3936__auto__ = (o instanceof cljs.core.Symbol);
if(or__3936__auto__){
return or__3936__auto__;
} else {
return pluto.utils.primitive_QMARK_.call(null,o);
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),o], null);
} else {
if(cljs.core.vector_QMARK_.call(null,o)){
var vec__2407 = o;
var seq__2408 = cljs.core.seq.call(null,vec__2407);
var first__2409 = cljs.core.first.call(null,seq__2408);
var seq__2408__$1 = cljs.core.next.call(null,seq__2408);
var element = first__2409;
var first__2409__$1 = cljs.core.first.call(null,seq__2408__$1);
var seq__2408__$2 = cljs.core.next.call(null,seq__2408__$1);
var properties = first__2409__$1;
var children = seq__2408__$2;
var component = ((cljs.core.fn_QMARK_.call(null,element))?element:cljs.core.get.call(null,components,element));
var G__2410 = (function (){var m = pluto.reader.parse_hiccup_children.call(null,opts,children);
return cljs.core.update.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),((function (m,vec__2407,seq__2408,first__2409,seq__2408__$1,element,first__2409__$1,seq__2408__$2,properties,children,component,map__2405,map__2405__$1,opts,components){
return (function (p1__2403_SHARP_){
return cljs.core.apply.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3936__auto__ = component;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return element;
}
})(),properties], null),p1__2403_SHARP_);
});})(m,vec__2407,seq__2408,first__2409,seq__2408__$1,element,first__2409__$1,seq__2408__$2,properties,children,component,map__2405,map__2405__$1,opts,components))
);
})();
if((component == null)){
return pluto.reader.accumulate_errors.call(null,G__2410,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unknown-component","unknown-component",-530928453),new cljs.core.Keyword(null,"value","value",305978217),element], null)], null));
} else {
return G__2410;
}
} else {
return null;
}
}
});
pluto.reader.parse_view = (function pluto$reader$parse_view(opts,o){
if(cljs.core.list_QMARK_.call(null,o)){
var map__2411 = pluto.reader.blocks.parse.call(null,opts,o);
var map__2411__$1 = ((((!((map__2411 == null)))?(((((map__2411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2411):map__2411);
var data = cljs.core.get.call(null,map__2411__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var errors = cljs.core.get.call(null,map__2411__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
if(cljs.core.truth_(errors)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),errors], null);
} else {
return pluto.reader.parse_view.call(null,opts,data);
}
} else {
return pluto.reader.parse_hiccup_element.call(null,opts,o);

}
});
if((typeof pluto !== 'undefined') && (typeof pluto.reader !== 'undefined') && (typeof pluto.reader.parse_value !== 'undefined')){
} else {
/**
 * Parse a definition element value.
 * Returns a map defining:
 *  * :data the updated value
 *  * :permissions 
 *  * :errors a collection of errors
 */
pluto.reader.parse_value = (function (){var method_table__4401__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4402__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4403__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4404__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4405__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"pluto.reader","parse-value"),((function (method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__,hierarchy__4405__auto__){
return (function (_,k,___$1){
return cljs.core.namespace.call(null,k);
});})(method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__,hierarchy__4405__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4405__auto__,method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__));
})();
}
cljs.core._add_method.call(null,pluto.reader.parse_value,"hooks",(function (_,___$1,v){
return v;
}));
cljs.core._add_method.call(null,pluto.reader.parse_value,"views",(function (opts,_,v){
return pluto.reader.parse_view.call(null,opts,v);
}));
cljs.core._add_method.call(null,pluto.reader.parse_value,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unknown-key","unknown-key",255305911)], null)], null)], null);
}));
/**
 * Merge result of parse-value into a map.
 * :data is updated to its parsed value
 * :errors are accumulated
 */
pluto.reader.merge_parsed_value = (function pluto$reader$merge_parsed_value(opts,m,k,v){
if(cljs.core.truth_(cljs.core.namespace.call(null,k))){
var map__2414 = pluto.reader.parse_value.call(null,opts,k,v);
var map__2414__$1 = ((((!((map__2414 == null)))?(((((map__2414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2414):map__2414);
var data = cljs.core.get.call(null,map__2414__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var errors = cljs.core.get.call(null,map__2414__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
return pluto.reader.merge_errors.call(null,cljs.core.assoc_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),k], null),data),cljs.core.map.call(null,((function (map__2414,map__2414__$1,data,errors){
return (function (p1__2413_SHARP_){
return cljs.core.assoc.call(null,p1__2413_SHARP_,new cljs.core.Keyword(null,"key","key",-1516042587),k);
});})(map__2414,map__2414__$1,data,errors))
,errors));
} else {
return m;
}
});
/**
 * Parse an extension definition map as encapsulated in :data key of the map returned by read.
 * `opts` is a map defining:
 * * `valid-hooks` a map of valid hook definitions
 *   
 * Returns a map defining:
 * * :data a map
 * * :permissions a vector of required permissions
 * * :errors a vector of errors maps triggered during parse
 */
pluto.reader.parse = (function pluto$reader$parse(opts,m){
var errors = pluto.reader.validate_keys.call(null,opts,cljs.core.keys.call(null,m));
return pluto.reader.merge_errors.call(null,cljs.core.reduce_kv.call(null,((function (errors){
return (function (p1__2416_SHARP_,p2__2417_SHARP_,p3__2418_SHARP_){
return pluto.reader.merge_parsed_value.call(null,opts,p1__2416_SHARP_,p2__2417_SHARP_,p3__2418_SHARP_);
});})(errors))
,cljs.core.PersistentArrayMap.EMPTY,m),errors);
});
