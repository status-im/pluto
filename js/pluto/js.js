// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('pluto.js');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pluto.reader');
pluto.js.to_clj = (function pluto$js$to_clj(o){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(o);
});
goog.exportSymbol('pluto.js.to_clj', pluto.js.to_clj);
pluto.js.from_clj = (function pluto$js$from_clj(o){
return cljs.core.clj__GT_js(o);
});
goog.exportSymbol('pluto.js.from_clj', pluto.js.from_clj);
pluto.js.parse = (function pluto$js$parse(opts,m){
return pluto.reader.parse(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(m));
});
goog.exportSymbol('pluto.js.parse', pluto.js.parse);
