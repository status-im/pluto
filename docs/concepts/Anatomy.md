---
sidebar_label: Anatomy
---

A host defines a number of [hooks](Hook) in various parts of the app. Those hooks are contracts that 3rd party devs can 
use to extend a host with their own logic / UI.
e.g. custom chat commands, custom chat actions, custom collectible displays.

An `extension` is provided by 3rd party developers and provides one or multiple hooks implementation.

To implement a hook, a 3rd party devs has access to some APIs:
* `view` to create native UI (e.g. text, list)
* `query` to access host data (e.g contacts, whisper key)
* `event` to modify host state (e.g. create a contact, scan a QR code, send a chat message)

Extensions are stored in IPFS or SWARM. They can be identified using ENS names.

A user can discover extensions and decide to install them. Once installed associated hooks become active and modify the host.
