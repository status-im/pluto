// Compiled by ClojureScript 1.10.329 {}
goog.provide('pluto.reader.reference');
goog.require('cljs.core');
pluto.reader.reference.reference_QMARK_ = (function pluto$reader$reference$reference_QMARK_(o){
return ((cljs.core.list_QMARK_.call(null,o)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.first.call(null,o))));
});
if((typeof pluto !== 'undefined') && (typeof pluto.reader !== 'undefined') && (typeof pluto.reader.reference !== 'undefined') && (typeof pluto.reader.reference.resolve !== 'undefined')){
} else {
/**
 * 
 */
pluto.reader.reference.resolve = (function (){var method_table__4401__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4402__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4403__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4404__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4405__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"pluto.reader.reference","resolve"),((function (method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__,hierarchy__4405__auto__){
return (function (m,p__2060){
var map__2061 = p__2060;
var map__2061__$1 = ((((!((map__2061 == null)))?(((((map__2061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2061):map__2061);
var type = cljs.core.get.call(null,map__2061__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return type;
});})(method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__,hierarchy__4405__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4405__auto__,method_table__4401__auto__,prefer_table__4402__auto__,method_cache__4403__auto__,cached_hierarchy__4404__auto__));
})();
}
cljs.core._add_method.call(null,pluto.reader.reference.resolve,new cljs.core.Keyword(null,"view","view",1247994814),(function (m,p__2063){
var map__2064 = p__2063;
var map__2064__$1 = ((((!((map__2064 == null)))?(((((map__2064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2064):map__2064);
var value = cljs.core.get.call(null,map__2064__$1,new cljs.core.Keyword(null,"value","value",305978217));
var temp__5455__auto__ = cljs.core.get.call(null,m,value);
if(cljs.core.truth_(temp__5455__auto__)){
var view = temp__5455__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),view], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unknown-view","unknown-view",-324262388),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null)], null);
}
}));
cljs.core._add_method.call(null,pluto.reader.reference.resolve,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m,p__2066){
var map__2067 = p__2066;
var map__2067__$1 = ((((!((map__2067 == null)))?(((((map__2067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2067):map__2067);
var type = cljs.core.get.call(null,map__2067__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__2067__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unknown-reference-type","unknown-reference-type",-472552113),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null)], null);
}));
