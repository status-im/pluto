---
title: Event
sidebar_label: Event
---

Events are exposed by the platform in the form of `:events` key in the capacities map.
Only those events which are exposed can be either referenced by hook property (when the property is of the type `:event`),
or used as an event handler function in view.

## Event as hook property

To refer to some event via hook property (might be required for some host app hooks), the property must be defined as `:event` type
by the app-hook and extension must correctly refer to event from capacities map.

### Example

```clojure
;; Capacities map in the host application
{:capacities {:events {'{store/get ...}}}}

;; Extension hook data
hooks/wallet-asset.next-coin
{:on-click [store/get]}
```

## Event as view handler

To use some event in extension defined view, the event must be exposed via capacities map of the host platform.

## Example

```clojure
;; Capacities map in the host application
{:capacities {:events {'store/get ...}}}

;; Extension view data
views/coin-item
[view {}
  [input {:on-change [:store/set {:extension :input}]}]]
```
