## Design

When it comes to openness and data control, Status sets the bar the highest. To that end the following points will guide our decisions:

* Secure and aware of privacy
* Simple build model and no friction to publish
* Decentralized, controlled by end users
* Open - access to Status and ethereum features
* Smooth on all platforms
* Reusable

## Development model

To make creation of an extension dead easy, we leverage the internal unidirectional flow of Status.  

Developers of extensions must understand the following:

* Hooks allow to plug into a host runtime
* All data is kept in a single application state
* Queries allow an extension to access data from the application state
* Events allow an extension to modify the application state
* A declarative UI updates itself reactively, based on changes in application state 

Extensions are defined using [EDN format](https://github.com/edn-format/edn). As a pure data format, EDN can be easily serialized and consumed by different platforms. What follows next is a description of this format. Keep in mind the expectation that tooling will hide these details.

An extension is built by using high-level UI components that form a declarative view of an extension. UI derives reactively from the whole application state (contained in a single structure). Queries are used to access an identified subset of this data. Changes to data are performed asynchronously, via events.

Because extensions are defined as pure data, it is possible to inspect dynamically (right before activation) their impact within Status (e.g. security and privacy concerns) without having to trust what extension providers declare.

Users will be briefed about an extension’s requirements (e.g. permissions) before deciding whether to activate an extension. Permissions will still be granted one by one, during the execution of an extension, and only when needed.
