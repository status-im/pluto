---
title: Extensions - security/privacy
revealOptions:
    transition: 'fade'
---

# Extensions
## security/privacy

---

## Context

- Extend status features natively, permissionless
- Data based
- Simple primitives: hooks, queries, events, views

---

# A simple language

- No user defined logic (for now?)
- Non turing complete language (only loop on finite set)
- Can be analysed

---

# What can go wrong?

- Crashes
- Unauthorized actions
- Data leaks
- Replicate sensitive UI (chat messages/wallet)

---

# Crashes

- Static analysis to detect incorrect syntax
- Lightweight sandbox (React [error boundaries](https://reactjs.org/docs/error-boundaries.html), exception catching)

---

# Privacy

What (*capabilities*) accessed by whom (*scope*) after which action (*trigger*).

---

# Capability-based security

- An extension defines a set of capabilities and can only access those
- Enhanced for decentralized world

Note:

- https://github.com/NuxiNL/cloudabi#capability-based-security
- https://en.wikipedia.org/wiki/Capability-based_security
- https://www.cl.cam.ac.uk/research/security/capsicum/
- https://fuchsia.googlesource.com/fuchsia/+/master/docs/the-book/sandboxing.md
- https://github.com/CraneStation/wasmtime/blob/master/docs/WASI-overview.md#capability-oriented
- https://webassembly.org/docs/security/

Simple security model, no [same-origin policy](https://www.w3.org/Security/wiki/Same_Origin_Policy)
---

# Leveraging data

- Capabilities fully inferred per hook
- Surfaced to user for validation

---

# Example #1

```clojure
{views/hello
 [text "Hello"]
 
 hooks/wallet.settings.hello
 {:label   "Test wallet settings"
  :view    [hello]}}
```

Note:

No capabilities required

---

# Example #2

```clojure
{views/hello
 [gallery] ;; or input
 
 hooks/wallet.settings.hello
 {:label   "Test wallet settings"
  :view    [hello]}}
```

Note:

Some capability required, extension scope

---

# Example #3

```clojure
{views/hello
 [image {:url "http://..."}]
 
 hooks/wallet.settings.hello
 {:label   "Test wallet settings"
  :view    [hello]}}
```

Note:

Scope remote
Depends on the URL

---

# Example #4

```clojure
{views/hello
 [image {:url "data:image/png;base64,iVBORw..."}]
 
 hooks/wallet.settings.hello
 {:label   "Test wallet settings"
  :view    [hello]}}
```

Note:

No scope issue

---

# Example #5

```clojure
{views/hello
 (let [url [store/get {:value "KEY"}]]
  [image {:url url}])
 
 hooks/wallet.settings.hello
 {:label   "Test wallet settings"
  :view    [hello]
  :on-open [http/get {...}]}}
```

Note:

Send image issue: have all participants in a chat hit some HTTP endpoint with ethereum address and IPs
Runtime check? User select scope, if doesn't match => fails

---

# Scope

What can be done with data accessed

- hook
- extension
- local
- remote (HTTP, IPFS)

---

# Trigger

What flow can lead to data leaks

- user controlled (e.g. on button click)
- extension controlled (on extension installation)

Note:

Scenario: on extension installation, access user address and send it using HTTP

---

# Potential attack #1

An extension uses OCR to read the seed from one of stored image

- no such event currently
- not clear how it could be prevented with 3rd party events
- constrained by scope

---

# Potential attack #2

An extension periodically makes screenshot of the whole screen

- no such event currently
- not clear how it could be prevented with 3rd party events
- constrained by scope
- trigger could include status state information (e.g. only activate after seed is backuped)

---

# Potential attack #3

An extension replicates the whole status UI

- constrained by scope
- 3 words can't be accessed by extensions

---

# UX is a challenge

- Security profile to only surface selected capabilities
- JIT user validation?
- Problematic events? (e.g. send a message on behalf of user)

---

# Risk level

- Extracted from capabilities/scopes
- Simplify user validation process

---

# Security profile

- A set of capabilities/scopes a user is confortable with
- Once enabled, matching extensions can be installed w/o user validation

---

# Open Questions

- Mobile level permission is all or nothing
- How to handle primitives created by 3rd parties? (future)