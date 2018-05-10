Launch figwheel with ./scripts/figwheel.sh then open http://127.0.0.1/index.html

### IPFS

To upload a directory to IPFS:

```
ipfs daemon
```

To add a directory:

`ipfs add -r {dir-name}`

After that it will be available through localhost:8080 and the main gateway.
It will eventually disappear from the main gateway.
