---
sidebar_label: Reference
---


References are identified by a symbol preceded by a @. This symbol must be define a namespace that identifies the reference type.

Reference can be:

* local (@views/id)
* pluto defaults, depending on the platform  (@views/pluto.name)
* third party extensions (@views/my-extension.id) (`my-extension` registered in .stateofus.eth)

```edn
:type
 :view :event :query :i18n :style :extension :hook
```

## View

## Style

Can only be resolved in properties block for the :style attribute.

{:type      :view
 :positions #{:style-value}}

## i18n

Used as a string. Valid positions: Views/child or property value.

```edn
{:type      :view
 :positions #{:child :property-value}}
```

## Query

## Event
