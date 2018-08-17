---
title: Registry
sidebar_label: Registry
---

Registry allows to manage a set of extensions, which are expected to live under `[:registry]` path in app state.
Using registry a host can add/delete/activate/deactivate extensions uniformly and all extension hooks
will hook-in/unhook into/from host automatically.

```clojure
(registry/add extension coeffects-map) ;; returns new effects map with extension added
```

Extensions id are unique. Hooks defined in extensions also must have global unique ids.

Once in a registry an extension is inactive.
It can be either `active` or `inactive`.

```clojure
(registry/deactivate extension-id coeffect-map) ;; returns new effects map with extension deactivated
(registry/activate extension-id coeffects-map) ;; returns new effects map with extension activated
```

When extension is deleted, all the hooks are deactivated (unhooked from the host) automatically, if
it was in the active state before.

```clojure
(registry/delete extension-id coeffects-map) ;; returns new effects map with extension deleted and (potential) unhook effects
```
