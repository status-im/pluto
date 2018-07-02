(ns pluto.reader.hiccup
  (:require [clojure.spec.alpha :as spec]))

(spec/def ::form
  (spec/or
    :string  string?
    :number  number?
    :symbol  symbol?
    :element ::element))

(spec/def ::element
  (spec/cat
    :tag      (spec/or :symbol symbol? :fn fn?)
    :attrs    map?
    :children (spec/* ::form)))
