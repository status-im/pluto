// Compiled by ClojureScript 1.10.329 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__1623){
var map__1624 = p__1623;
var map__1624__$1 = ((((!((map__1624 == null)))?(((((map__1624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1624):map__1624);
var operation = cljs.core.get.call(null,map__1624__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__1624__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__1624__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__1624__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3936__auto__ = child_of;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__1626_1638 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__1627_1639 = null;
var count__1628_1640 = (0);
var i__1629_1641 = (0);
while(true){
if((i__1629_1641 < count__1628_1640)){
var vec__1630_1642 = cljs.core._nth.call(null,chunk__1627_1639,i__1629_1641);
var k_1643 = cljs.core.nth.call(null,vec__1630_1642,(0),null);
var cb_1644 = cljs.core.nth.call(null,vec__1630_1642,(1),null);
try{cb_1644.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e1633){var e_1645 = e1633;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_1643,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_1645);
}

var G__1646 = seq__1626_1638;
var G__1647 = chunk__1627_1639;
var G__1648 = count__1628_1640;
var G__1649 = (i__1629_1641 + (1));
seq__1626_1638 = G__1646;
chunk__1627_1639 = G__1647;
count__1628_1640 = G__1648;
i__1629_1641 = G__1649;
continue;
} else {
var temp__5457__auto___1650 = cljs.core.seq.call(null,seq__1626_1638);
if(temp__5457__auto___1650){
var seq__1626_1651__$1 = temp__5457__auto___1650;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1626_1651__$1)){
var c__4338__auto___1652 = cljs.core.chunk_first.call(null,seq__1626_1651__$1);
var G__1653 = cljs.core.chunk_rest.call(null,seq__1626_1651__$1);
var G__1654 = c__4338__auto___1652;
var G__1655 = cljs.core.count.call(null,c__4338__auto___1652);
var G__1656 = (0);
seq__1626_1638 = G__1653;
chunk__1627_1639 = G__1654;
count__1628_1640 = G__1655;
i__1629_1641 = G__1656;
continue;
} else {
var vec__1634_1657 = cljs.core.first.call(null,seq__1626_1651__$1);
var k_1658 = cljs.core.nth.call(null,vec__1634_1657,(0),null);
var cb_1659 = cljs.core.nth.call(null,vec__1634_1657,(1),null);
try{cb_1659.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e1637){var e_1660 = e1637;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_1658,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_1660);
}

var G__1661 = cljs.core.next.call(null,seq__1626_1651__$1);
var G__1662 = null;
var G__1663 = (0);
var G__1664 = (0);
seq__1626_1638 = G__1661;
chunk__1627_1639 = G__1662;
count__1628_1640 = G__1663;
i__1629_1641 = G__1664;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
