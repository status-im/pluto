(ns pluto.hiccup
  (:require [clojure.spec.alpha :as spec]))

(spec/def :hiccup/form
  (spec/or
    :string  string?
    :number  number?
    :element :hiccup/element))

(spec/def :hiccup/element
  (spec/cat
    :tag      keyword?
    :attrs    (spec/? map?)
    :children (spec/* :hiccup/form)))