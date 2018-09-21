---
title: Event
sidebar_label: Event
---

Events are exposed by the platform in the form of `:events` key in the capacities map.
Only those events which are exposed can be either referenced by hook property (when the property is of the type `:event`),
or used as an event handler function in view (eq `[input {:on-change (event [:set-in [:current-chat :name]])}]`).

## Event as hook property

To refer to some event via hook property (might be required for some host app hooks), the property must be defined as `:event` type
by the app-hook and extension must correctly refer to event from capacities map.

### Example

```clojure
;; App hook code in host application
(reify host/AppHook
  (id [_] :wallet-asset)
  (properties [_] {:on-click :event}))
  
;; Capacities map in the host application
{:capacities {:events #{:prefill-asset}}}

;; Extension hook data
hooks/wallet-asset.next-coin
{:on-click :prefill-asset}
```

## Event as view handler

To use some event in extension defined view, the event must be exposed via capacities map of the host platform.

## Example

```clojure
;; Capacities map in the host application
{:capacities {:events #{:set-in}}}

;; Extension view data
views/coin-item
[view {}
  [input {:on-change (event [:set-in [:extension :input]])}]]
```

## Events permission checking

There is a special treatment for generic event `:set-in` where it's data path (where to set-in data in app-state exposed by host platform)
is checked against the declared `[:permissions :write]` map in the capacities. 
Whenever this check fails (extension is setting data from view not allowed to be set by the host), meaningfull parse error will be produced.
