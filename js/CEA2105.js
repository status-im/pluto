goog.provide('cljs.nodejscli');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.nodejs');
goog.require('goog.object');
if(COMPILED){
goog.global = global;
} else {
}
if(cljs.core.fn_QMARK_(cljs.core._STAR_main_cli_fn_STAR_)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_main_cli_fn_STAR_,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),goog.object.get(process,"argv")));
} else {
}
