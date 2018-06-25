---
sidebar_label: Reference
---


References are identified by a symbol preceded by a @.

Reference:

* locally (@name)
* pluto defaults, depending on the platform  (@name)
* third party extensions (@extension/name) (name registered in .stateofus.eth)

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
