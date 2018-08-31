// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.permissions');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Takes path into datastructure and path-template and determines if path-template
 *   matches the path.
 *   Path is matched if it's subpath of the path-template, eq path `[:a :b :c :d]`
 *   matches the path-template `[:a :b :c]` but path `[:a :b]` does not.
 *   Path-template can contain regular expression instead of exact values so the level
 *   matching is not identity only.
 *   When matching regular expression against path fragment, keyword path fragments
 *   are converted to appropriate strings.
 */
pluto.reader.permissions.matches_QMARK_ = (function pluto$reader$permissions$matches_QMARK_(path,path_template){
var matches = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (template_value,value){
if((template_value instanceof RegExp)){
return cljs.core.re_matches(template_value,(((value instanceof cljs.core.Keyword))?cljs.core.name(value):value));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(template_value,value);
}
}),path_template,path);
return ((cljs.core.every_QMARK_(cljs.core.identity,matches)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matches),cljs.core.count(path_template))));
});
/**
 * Takes path vector and checks if it conforms to permissions map.
 *   Permission is expected to include at least `:include-paths` key, containing
 *   set of all allowed paths.
 *   Optionally, set of forbidden paths under key `:exclude-paths` can be provided
 *   as well.
 *   Paths in set can be vector of exact keys or can include regular expression
 *   patterns as well.
 *   If given path (first argument) is matched by any of the include paths and none
 *   of the exclude paths, the function returns true, false/nil otherwise.
 */
pluto.reader.permissions.allowed_path_QMARK_ = (function pluto$reader$permissions$allowed_path_QMARK_(path,p__2070){
var map__2071 = p__2070;
var map__2071__$1 = ((((!((map__2071 == null)))?(((((map__2071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2071):map__2071);
var include_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2071__$1,cljs.core.cst$kw$include_DASH_paths);
var exclude_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2071__$1,cljs.core.cst$kw$exclude_DASH_paths);
var and__3925__auto__ = cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(pluto.reader.permissions.matches_QMARK_,path),include_paths);
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.not(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(pluto.reader.permissions.matches_QMARK_,path),exclude_paths));
} else {
return and__3925__auto__;
}
});
