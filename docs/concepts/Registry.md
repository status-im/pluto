---
sidebar_label: Registry
---

Registry allows to manage a set of extensions. Using registry a host can access hooks uniformly.

```clojure
(registry/add! registry id extension)
```

Extensions id are uniques. Hooks defined in extensions also must have global unique ids.

Once in a registry an extension is inactive.
It can be either `active` or `inactive`.

```clojure
(registry/deactivate! registry id)
(registry/activate! registry id)
```

Active hooks can then be accessed by hook id path. 

```clojure
(registry/hooks! registry 'hooks/some.name)
```
