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


### Iteration 1

Provide infrastructure for the chat command hook.

* implement hooks and proposed extension points
* registry and hooks API
* define extensions points for status
* implement destructuring [#28](https://github.com/status-im/pluto/issues/28)

## In progress

### Iteration 2

Add remote loading support.

* add extension registry UI _DONE_
* remote loading _DONE_
* query and events API (data can be passed around) [#9](https://github.com/status-im/pluto/issues/9) and [#8](https://github.com/status-im/pluto/issues/8)
* implement security mechanism / permissions

## Next

### Iteration 3

Add custom code support.

* custom code
* JavaScript API
* implement i18n [#10](https://github.com/status-im/pluto/issues/10)

### Iteration 4

Persistent extensions.

* isolated data per extension [#29](https://github.com/status-im/pluto/issues/29)
* implement data persistence

### Iteration 5

Support dependencies.

* add versioning support
* extensions can depend on others extensions
