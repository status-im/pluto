---
title: Hook
sidebar_label: Hook
---

Hook is the mechanism allowing a specific host to define what (and how) can be extended.

Available hooks are defined as part of capacities by maps detailing properties and their associated type. They leverage [references](Reference) to use various extensions elements.

```clojure
{:capacities {hooks/main {:properties {:view :view :name :string}}}}
```

Properties are defined as map of property name (`keyword`) / property types.

Type can be:

* `:string`, `:keyword`
* references to `:view`, `:event` or `:query`
* one of a set of `keywords`: `#{:one :two}`
* complex types `{:child {:name :string}}` and `{:children [{:name :string}]}`

Extensions can then specify hooks that will match associated host capacities.
Hooks implemented by extensions must be qualified with an extra id. This id will be globally unique across all extensions per hook.
e.g. an extension implementing `hooks/main` could define a hook with id `hooks/main.demo`.

A hook is defined by a map that consists of a number of pairs specific to each extension type. As shown below, the `hooks/main.demo` hook requires two additional keys: `name` and `view`.

```clojure
{meta
 {:name ""
  ...}
 
 views/main
 [text {}
  ""]

 hooks/main.demo
 {:view @views/main
  :name "test"}}
```

Once a host has loaded a valid extension with matching hooks, it can query the resulting map.
