# Use case

## Hello world

A dumb text showing "Hello world"

QmbXjFEF6WbxNb4gyZE3JkEGG3ur4fmDgvo5vsQvdy95vW

[screen
  [text "Hello world"]]

## Basic data interaction

inc/dec buttons, some text showing the count

```main.edn
:main
[screen
  [text #subscribe ::counter]
  [button {:on-press #dispatch ::dec}
    "Dec"]
  [button {:on-press #dispatch ::inc}
    "Inc"]]
```

## Basic transaction

Send some STT to an exeisting address

## Reuse screens

Browse contact, select one, then open wallet send transaction screen pre-populated with this contact.



## TO think about

# ENS
# IPFS storage

### Remotely load JS code in react-native
https://github.com/MaxLeap/HotLoad-SDK
https://github.com/Microsoft/react-native-code-push
https://docs.expo.io/versions/latest/guides/how-expo-works.html
https://www.aerofs.com/reactnativeautoupdater-dynamic-updates-to-react-native-apps/
https://github.com/redbooth/react-native-auto-updater/