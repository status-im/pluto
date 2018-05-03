(ns pluto.storage)

(defprotocol Storage
  ""
  (fetch [this id callback]))
