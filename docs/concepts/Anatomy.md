---
title: Anatomy
sidebar_label: Anatomy of an extension
---

A `host` is a computer program that serves as container of extensions. It has the hability to interpret extensions, accessible as remote data. How/if an extension will be interpreted depends on a set of `capacities` it advertises.

A host defines a number of [hooks](Hook) in various parts of the app. Those hooks are contracts that 3rd party devs can use to extend a host with their own logic / UI.
e.g. custom chat commands, custom chat actions, custom collectible displays. Hooks can use only a subset of extensions concepts (e.g. no visual part).

An `extension` is implemented by 3rd party developers and provides one or more hooks implementations.

To implement a hook, a 3rd party developper has access to some APIs:

* [view](View) to create native UI. Views are composed of trees of components (e.g. text, list).
* [query](Query) to access local host data (e.g contacts, whisper key)
* [event](Event) to interact with host environment (e.g. create a contact, scan a QR code, send a chat message).

Components surface data to the user. The data shape they expect is defined part of the components specifications. Components get their data from `queries`.
Some components can trigger `events` based on user interaction (e.g. clicking on a button).
Triggering an event is the only way to modify the host state, thus the data surfaced by views.

`views`, `queries` and `events` are part of a host `capacities`. They are associated to permissions depending on privacy and security concerns.
When installing an extension, a user will has access to all required permissions.

Extensions are stored in decentralized storages like IPFS or SWARM. They can be identified using ENS names.

A user can discover extensions and decide to install them. Once installed associated hooks can be activated. This process is abstracted by the [Registry](Registry).
