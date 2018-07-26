Extensions development is currently _IN PROGRESS_

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

Provide infrastructure for the chat command hook.

* implement hooks and proposed extension points _DONE_
* registry and hooks API _DONE_
* define extensions points for status _DONE_
* implement destructuring [#28](https://github.com/status-im/pluto/issues/28) _DONE_

## Next

### Iteration 2

Add remote loading support.

* query and events API (data can be passed around) [#9](https://github.com/status-im/pluto/issues/9) and [#8](https://github.com/status-im/pluto/issues/8)
* isolated data per extension [#29](https://github.com/status-im/pluto/issues/29)
* implement security mechanism / permissions
* remote loading

### Iteration 3

Add custom code support.

* implement i18n [#10](https://github.com/status-im/pluto/issues/10)
* custom code
* JavaScript API

### Iteration 4

Persistent extensions.

* implement data persistence
* add extension registry UI

### Iteration 5

Support dependencies.

* add versioning support
* extensions can depend on others extensions
