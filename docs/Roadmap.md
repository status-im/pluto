Extensions development is currently in progress

## Done

### Pre-MVP

Validate technical feasibility.

* general mechanism (UI, conditionals, queries, events)
* HTML based
* stored in ipfs (via gateway)
* no concept of hooks
* no custom code
* extension are activated when loaded and cannot be deactivated

### MVP

Pre-MVP integrated in Status.

## In progress

### Iteration 1

Migrate old commands to extensions.

* implement hooks and proposed extension points _DONE_
* registry and hooks API _DONE_
* define extensions points for status _DONE_
* implement i18n [#10](https://github.com/status-im/pluto/issues/10)
* query and events API (data can be passed around) [#9](https://github.com/status-im/pluto/issues/9) and [#8](https://github.com/status-im/pluto/issues/8) 
* implement destructuring [#28](https://github.com/status-im/pluto/issues/28)
* isolated data per extension [#29](https://github.com/status-im/pluto/issues/29)

## Next

### Iteration 2

Add custom code support.

* implement security mechanism / permissions
* remote code loading
* JavaScript API

### Iteration 3

Persistent extensions.

* implement data persistence
* add extension registry UI

### Iteration 4

Support dependencies.

* add versioning support
* extensions can depend on others extensions
