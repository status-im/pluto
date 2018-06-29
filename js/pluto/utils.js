// Compiled by ClojureScript 1.10.329 {}
goog.provide('pluto.utils');
goog.require('cljs.core');
pluto.utils.ex_cause = (function pluto$utils$ex_cause(ex){
return cljs.core.ex_cause.call(null,ex);
});
pluto.utils.ex_message = (function pluto$utils$ex_message(ex){
return cljs.core.ex_message.call(null,ex);
});
pluto.utils.primitive_QMARK_ = (function pluto$utils$primitive_QMARK_(o){
return ((cljs.core.boolean_QMARK_.call(null,o)) || (cljs.core.int_QMARK_.call(null,o)) || (cljs.core.float_QMARK_.call(null,o)) || (typeof o === 'string'));
});
