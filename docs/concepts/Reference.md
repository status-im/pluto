---
title: Reference
sidebar_label: Reference
---

All main concepts are identified via references.

References are identified by a vector of 2 elements: a symbol and a map of properties.

A reference symbol might have:

* no namespace, defined in the extention definition (e.g. `id`)
* a single segment namespace, exposed by the host (e.g. `store/get`)
* a multi segment namespace, exposed by third party extensions registered via ENS (e.g. `my-dapp.eth/id` with `my-dapp.eth` an ENS name)
