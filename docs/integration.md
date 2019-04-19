`stateofus.eth` allows anyone to associate an address to a logical name.
On top of that, extra meta information can be stored using the `text` dictionary.
This capacity can be used to link extensions to a name and leveraged by status in various ways.

# An extension can be installed by name

The `status.extension` property is associated to an ENS name. An extension can then easily be installed via its name e.g. `kyber`.
Once installed, the user is automatically notified of updates and can easily install them.
Older versions are still accessible and usable.

# An account restoration triggers an extension activation

An extension can be associated to a regular ENS name representing a user address via `status.account.extension`.
Upon restoration, this extension is triggered allowing to perform restorative actions (e.g. adding contacts, groups, DApps, tokens, ..)

# A public channel with bells and whistles

When opening a public channel for the first time, a ENS lookup is performed on this channel name.
The associated `status.channel.extension` is discovered and proposed for installation.

e.g. Opening `#kyber` triggers a lookup on `kyber.stateofus.eth`. User is proposed to load associated `status.channel.extension`, if defined. This extension installs a `chat.command` in the `#kyber` channel and the kyber `wallet.settings` exchange.