---
title: Anatomy
sidebar_label: Anatomy of an extension
---

A host defines a number of [hooks](Hook) in various parts of the app. Those hooks are contracts that 3rd party devs can 
use to extend a host with their own logic / UI.
e.g. custom chat commands, custom chat actions, custom collectible displays.

An `extension` is provided by 3rd party developers and provides one or multiple hooks implementation.

To implement a hook, a 3rd party devs has access to some APIs:

* [view](View) to create native UI (e.g. text, list)
* [query](Query) to access host data (e.g contacts, whisper key)
* [event](Event) to modify host state (e.g. create a contact, scan a QR code, send a chat message)

Extensions are stored in IPFS or SWARM. They can be identified using ENS names.

A user can discover extensions and decide to install them. Once installed associated hooks can be activated. This process is abstracted by the [Registry](Registry).

# Reference

All main concepts are identified via references.

References are identified by a symbol preceded by a @. This symbol must be define a namespace that identifies the reference type.

Reference can be:

* local (e.g. `@views/id`)
* pluto defaults, depending on the platform (e.g. `@views/pluto.name`)
* third party extensions (e.g. `@views/my-extension.id` with `my-extension` being registered in .stateofus.eth)
