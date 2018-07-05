---
sidebar_label: Hook
---

Hook is the mechanism allowing a specific extensions host to define what (and how) can be extended.

Hooks are defined as part of capacities by maps detailing properties and their associated type. They leverage [references](/reference) to use various extensions elements.

```clojure
{:capacities {hooks/main {:properties [{:name :view :type :view} {:name :name :type :string}]}}}
```

Extensions can then specify hooks that will match associated host capacities.

```clojure
{meta
 {:name ""
  ...}
 
 views/main
 [text {}
  ""]

 hooks/main
 {:view @views/main
  :name "test"}}
```

Once a host has loaded a valid extension with matching hooks, it can query the resulting map.

```clojure
{meta
 {:name ""
  ...}

 hooks/main
 {:view
  [text {}
   ""]
  :name "test"}}
```
