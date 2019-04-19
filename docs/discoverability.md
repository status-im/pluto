How can an end user discover and install an extension?

Let’s explore different options.

##Serendipity

Extensions can be installed via a universal link that can be embedded in a QR code. So it can be as simple as finding a link or a QR code in the wild.

## Browsing a DApp

Extensions references can be added via a status specific API. When browsing a DApp user could be informed that some extensions can be installed. See https://github.com/estebanmino/EIPs/blob/master/EIPS/eip-747.md 1

## Status discovery

Status discovery might relay users extensions. Extensions would then be available via the discovery UI.

## Joining a chat

A list of extensions could be associated to a chat. Once joining, a user would then be proposed to install those extensions to have a better experience. Those extensions would only be active in that specific chat.
Private groups admin could manage this list of extensions.

How can we have extensions associated to public chats?

## Chat command recipient call to action

A chat command might be sent to a recipient who didn’t install the extension. It should be trivial for them to install the extension.

## ENS username

Some well know key/value pair associated to a ENS username name could point to a set of extensions. Those extensions could be used during account creation/restoration.