Extensions are a way for 3rd party developers to grow the Status application while reusing its features.
Lightweight, they provide native feeling and have access to the full ethereum decentralized experience augmented by Status unique features.

## Goal

Status is investing lots of energy to make decentralized primitives available on mobile platforms. Let’s allow ethereum developers to focus on what they do best: innovate. They can leverage Status first class features and UX.
Open and free, Status is now extensible. 

Specifically we want:
* To make Status awesome for end users who want to easily use Mini DApps
* To make Status an appealing way for ethereum devs to extend their work on mobile

## Usage

Extensions are not applications. They alleviate users from the heavy cost of installing through an appstore.
A typical scenario consists of a user scanning a QR code using its native mobile camera and being redirect to Status augmented by the extension (after being granted necessary permissions). It can then disappear right after usage or persist depending on user preference.
#nofriction

## How open?

Status is inherently malleable. It is Status’s responsibility to carefully choose what is available to extensions and how it can be extended.

Openness is fundamental to Status. It is based on three pillars: data access, API and extension points.
There is a delicate balance between provide access needed to create awesome DApps while ensuring strong data control to users. To that end, a new security model that emphasizes data destination will be considered (in p2p world, the knowledge of what you send and who you send it to is fundamental). 

### Data access

Data is kept in a single, tree-based entity. Extensions will rely on a query mechanism for accessing subset of this data. Depending on the security granted, extensions might have access to most of the data manipulated by status.

Specifically those data will be available:
* Local profile / wallet details
* Contacts details
* Local ethereum state

## Security 

Security is important when we rely on external resources. In particular, we want to ensure that an extension:
* can access only the data it is supposed to access
* cannot trigger unallowed events
* cannot consume unexpected resources 

### Dynamic analysis

Extension being primarily data driven, it allows Status to perform dynamic checks and validate the safety of an extension. Before an extension can be activated, Status displays comprehensive information related to the risks involved with running the extension: permissions, data accessed, peers accessed, custom code, and so on. 

### Whitelisting

Only a small subset of internal queries and events will be made available at first. Gradually, and based on feedback, new ones will be introduced. Data exposed and privacy concerns will be carefully analysed for each query.
Isolation
For extra security, the eventual custom JavaScript code is run isolated in a dedicated JavaScript environment, Jail. Jail’s resource usage is monitored, and its lifecycle can be controlled. This ensures that each extension code is safe and cannot be seen by others. This also ensures that this code can impact Status only via the bridges it controls.

Special care must be taken in relation to the global JavaScript objects available in Jails. Notably, the web3 object provides hooks into the local Ethereum node. It might be necessary to filter some of the provided methods to ensure isolation between extensions and Status.

### Phishing

An extension might try to trick users into sending a transaction or signing data. Or it could recreate a fake Status signing window to get access to the account password. This attack vector already exists today with DApps and will be addressed through the same technique: by letting users validate a piece of data (a signing phrase) known only to them and Status. This signing phrase is not available to extensions.
Resource abuses
Extensions, even those based only on data, might trick Status into using local resources: CPU, memory, and network. Some of these abuse attempts might be detected when an extension is being validated, but a specific scenario of an abuse attempt slipping through the cracks cannot be ruled out.

Status must monitor such impact, inform users of attempted abuses, and allow users to deactivate extensions. If this is not technically feasible, such extensions must be prevented from being reactivated on the next startup of Status.

## Privacy

### Permissions

Permission access is required for an extension to use sensitive queries or events. Permissions are granted, or not, per extension. They are not directly related to the underlying platform permissions but are semantic permissions linked to data privacy: read profile details, send an HTTP request to a specific host, and so on.


Each available query and event is carefully audited by the core team to ensure that the privacy of shared data is protected by relevant permissions. The set of permissions required for an extension does not need to be manually listed by developers, because they will be inferred from the queries and events used.

The underlying platform permissions (access to camera, access to local storage, and so on) are granted at the application level (Status). Because semantic permissions are applied before platform permissions, there are no security risks related to extensions. This might cause surprises if an extension requests a permission (then granted by the user) that has never been requested. This permission will be granted to Status as a whole. To mitigate this we might consider moving Status to a semantic permission model too.
Similarly, if an extension requests a permission that was previously denied, the user will have to manually grant this permission via the Status profile settings.

## Share

Once a developer is satisfied with an extension the next step is to make it available to end users. Being decentralized all necessary parts will be shared on decentralized file storage and consumed directly by Status.
No need to setup servers, manage infrastructure or deploy in a centrally control platform: raw files accessed in a decentralized way.

This deployment model also enforces two of our core principle: open access and no control of extensions. Developers are free to share what they want, users are free to access what they want.

It also opens the DApps discovery model: local catalog, search engine, chat based federated discovery, serendipity, … the sky’s the limit! 
