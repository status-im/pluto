---
title: View
sidebar_label: View
---

Views are defined by using [Hiccup syntax](https://github.com/weavejester/hiccup/wiki/Syntax), itself a subset of EDN. This syntax is closely related to JSON, is based on pure data, and offers an expressive way of defining declarative interfaces.

The general format of a UI is [component properties & children], where :
* component is a symbol, one of Status components
* properties is an optional map (keyword-to-value) of component properties
* children is an optional sequence of the component definitions

Because components are built recursively, on top of other components, they are inherently composable and reusable. 

# Blocks

While powerful the Hiccup syntax is about describing static UIs. Blocks enhance it by providing dynamicity based on data content.

## Let block

Let blocks are general blocks allowing views to access data (via lexical scoping).

### Query

Let blocks enable access to data via [Queries](Query).

```clojure
(let [value @queries/some-query]
  ;; value is available there
  )
```

### Destructuring

Let blocks also allow to destructure data (sequences and maps) to access nested information.

```
(let [{key :key} {:key "value"}]
  ;; key is available there with the value "value"
  )
```

#### Sequential data structure

Extract seq elements by index
Elements can be ignored with `_`
`:as symbol` denotes the whole sequence

##### Examples

```clojure
[[a _ c :as all] [1 2 3 4 5]]
;; a = 1
;; c = 3
;; all = [1 2 3 4 5]
```

#### Associative data structure

Extract map values by keys `{a :a}`
Optional values via `[a 5]`
No namespaced keyword support, no short syntax

##### Examples

```clojure
[{a :a a :b [c 4] :c :all all} {:a 1 :b 2 :d 3}]
;; a = 1
;; b = 2
;; c = 4
;; all = {:a 1 :b 2 :d 3}
```

##### Nesting

Both structure type destrucuring can be combined 

```clojure
[{[a1 _ a3] :a {d :d #{f 7} :f [[_ g2] 8}] :b [_ e2] :e :all all}
 {:a [1 2 3] :b {:d 4 :e [5 6] :g [9 10]}}]
;; a1 = 1
;; a3 = 3
;; d = 4
;; e2 = 5
;; f = 7
;; g2 = 10
;; all = {:a [1 2 3] :b {:d 4 :e [5 6] :g [9 10]}}
```

# If/when blocks

If and when blocks will make their content available only if associated condition holds true.

```clojure
(when condition?
  [text {}
    ""])
```