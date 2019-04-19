# Extension editor

Extension editor is the one tool used to create and permissionlessly publish an extension.
As extension do not rely on existing languages or frameworks barrier to entry is significant.

The following points are considered to improve the developer experience:
- guidance to initiate an extension
- cues to easily build bit by bit
- feedback to make sure it will work as expected

## From zero to hero

Add more examples, templates and one click option to create an extension skeleton.

## A feature complete editor

Improve the editor basic features to match common expectations.

### Never loose work

It should not be possible to loose the result of a work session.
Indivual extensions are saved locally. All extensions ever edited can be retrieved via a workspace style panel.

### Improve syntax navigation

Matching parens and nesting level are visualized using colors.
Easily identify when a block syntax is correct.

### Semantic highlighting

Semantic highlighting: each variable is identifyed by a unique color (https://medium.com/@evnbr/coding-in-color-3a6db2743a1e)
References (events, views) are colored and can be navigated.

### Documentation

Completion and easy doc access is provided for all supported primitives.

### Navigation

A reference can be navigated on user clicks. A query can be listened to (data show inline) (LightTable watch https://www.youtube.com/watch?v=d8-b6QEN-rk)
An event can be triggered with user provided data.
Destructuring is facilitated.

## Prevent creation of invalid extension

The editor is not a regular text editor. Users can't randomly edit extension, making it mostly read-only.
Changes can only be introduced semantically, via custom actions.
New pimitives can only be added via a custom editor action. Primitives children can be added. Text element and properties can be edited.
Renaming a custom primitive will rename all its usages.

### Resources

https://www.timmclean.net/json-editor/
https://github.com/projectional-haskell/structured-haskell-mode
https://www.greenfoot.org/frames/
https://www.jetbrains.com/mps/
http://concrete-editor.org/

# Further improvments

## Time navigation

Triple time axis (navigation)
git history
data changes (query changes, track events)
extension changes (visual undo https://www.youtube.com/watch?v=UDTSyWA31XI https://vimsical.com)
Time travelling

## Illiterate programming

# Resources

- https://harc.ycr.org/project/
- https://fr.wikipedia.org/wiki/Dynabook
- https://history-computer.com/ModernComputer/Personal/Dynabook.html
- https://github.com/reduxjs/redux-devtools
- http://lighttable.com/archive/
- https://github.com/darwin/plastic
- https://harc.ycr.org/project/
- http://cirru.org/
- https://mkremins.github.io/riffle/
- https://glitch.com/culture/an-intro-to-webvr/
- https://github.com/mkremins/flense 
- https://developer.apple.com/xcode/interface-builder/
- https://vimeo.com/62618532
- https://www.youtube.com/watch?v=dl0CbKYUFTY
- https://www.levenez.com/NeXTSTEP/
- http://unisonweb.org/posts/ 
- https://groups.google.com/forum/#!forum/augmented-programming
- https://blog.isomorf.io/
- http://witheve.com/ https://github.com/witheve/Eve https://github.com/witheve/eve-experiments
- https://observablehq.com/@jashkenas/against-the-current-what-we-learned-from-eve-transcript
- https://github.com/witheve/eve-native/blob/master/examples/counter.eve
- http://play.witheve.com/#/examples/editor.eve
- http://play.witheve.com/#/examples/CRM.eve
- http://incidentalcomplexity.com/
- http://mech-lang.org/ https://github.com/mech-lang/mech/blob/master/examples/tutorial.mec
- https://github.com/mech-lang/mech
- https://github.com/mozilla/mentat
- https://dynamicland.org/
- http://incidentalcomplexity.com/
- https://lively-next.org/
- https://observablehq.com/
- https://glitch.com/
- https://observablehq.com/@jashkenas/against-the-current-what-we-learned-from-eve-transcript