Extensions are 3rd party chunk of data that can dynamically and permissionlessly modify Status behavior.
How do we ensure Status security is preserved and no unauthorized data access is performed?

# What can go wrong?

- Crashes
- Unauthorized actions
- Data leaks
- Replicate sensitive UI (chat messages/wallet)

## Crashes

Static analysis is performed to detect incorrect syntax. Then a lightweight sandbox (React [error boundaries](https://reactjs.org/docs/error-boundaries.html), exception catching) act as safe guard.

## Status hijacking

Any screen (including the wallet) can be recreated as an extension. Only Status has access to the 3 words, preventing users to be tricked into signing forged transactions.

## Privacy / Security

Status contains a number of private data and can potential trigger actions with consequences (signing a transaction).
A user must be made aware of what an extension can do during its installation. The set of what can be done can be restricted by the user.

# Capability based security

The proposed solution to address security and privacy risks is to rely on [Capacity based security](https://en.wikipedia.org/wiki/Capability-based_security) tailored for decentralized architecture.
This model is used by a number of modern stacks ([Fuchsia](https://fuchsia.googlesource.com/fuchsia/+/master/docs/the-book/sandboxing.md), [WASI](https://github.com/CraneStation/wasmtime/blob/master/docs/WASI-capabilities.md) or even [Agoric](https://agoric.com/about/)).
A good introduction to this model can be found [here](http://habitatchronicles.com/2017/05/what-are-capabilities/).

Essentially each extension would run in an isolated sandbox with only pre-granted accesses. Extension then run under those capabilities and cannot access anything not provided.
This is in contrast to hold user/permision model.

Extensions extend this model by puting emphasis on the localisation of the data (`scope`)

## Scope

Scope encompass what can be done with an identified piece of data. A data accessed but kept in the extension sandbox doesn't pose the same threat that the same send to arbitrary remote server.

Scope can be:

- hook
- extension
- local
- remote (HTTP, IPFS)

## Trigger

What flow can lead to data leaks. A user controlled leak (e.g. button click) has not the same meaning than an extension controlled one (e.g. triggered during extension activation).

## Runtime

The capability required for an extension can be fully inferred dynamically by Status (due to their data nature).
This set of capabilities is then exposed to end user. Users are free to restrict this set and grant them to the extension.
An extension can always run with no capabilities, in a degraded sandboxed mode (e.g. some UI elements inactive, some events filtered).

# UX is a challenge

How to simply surface those informations and ensure end users make an informed decision?
We want to prevent users clicking through those screens and accepting anything.

## Risk level

A level (e.g. a note - A, B .. E-) is extracted from capabnilities and scopes required. It aggregates all associated risks. 

## Security profile

Users define a set of capabilities/scopes they are confortable with. Once enabled, matching extensions can be installed w/o validation.




# Examples

```clojure
{views/hello
 [text "Hello"]
 
 hooks/wallet.settings.hello
 {:label   "Test wallet settings"
  :view    [hello]}}
```

No specific capabilities required. No data is accessed

```clojure
{views/hello
 [gallery] ;; or input
 
 hooks/wallet.settings.hello
 {:label   "Test wallet settings"
  :view    [hello]}}
```

Some capability required as `gallery` might leak user photo. No way to have them exported through this extension.

```clojure
{views/hello
 [image {:url "http://..."}]
 
 hooks/wallet.settings.hello
 {:label   "Test wallet settings"
  :view    [hello]}}
```

Depending on the URL (e.g. `http` yes, `data:image/png;base64,iVBORw...` no) private data can be leaked.

```clojure
{views/hello
 (let [url [store/get {:value "KEY"}]]
  [image {:url url}])
 
 hooks/wallet.settings.hello
 {:label   "Test wallet settings"
  :view    [hello]
  :on-open [http/get {...}]}}
```

Some examples cannot be fully analyzed (e.g. depends on runtime data).