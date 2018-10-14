---
title: Query
sidebar_label: Query
---

Queries are exposed by the platform in the form of `:queries` key in the capacities map.
Only those queries which are exposed can be either referenced by hook property (when the property is of the type `:query`),
or used to read data in let block in view .

## Query as hook property

To refer to some query via hook property (might be required for some host app hooks), the property must be defined as `:query` type
by the app-hook and extension must correctly refer to query from capacities map.

### Example

```clojure
;; Capacities map in the host application
{:capacities {:queries {'network-up ...}}}

;; Extension hook data
hooks/wallet-asset.next-coin
{:able-to-send [network-up]}
```

## Queries in views

To use some queries in extension defined view, the query must be exposed via capacities map of the host platform.

## Example

```clojure
;; Capacities map in the host application
{:capacities {:queries {'store/get ...}}}

;; Extension view data
views/coin-item
[view {}
  (let [current-network [store/get {:networks :current}]]
    [text {} "Current network: "]
      [text {} current-network]])
```
