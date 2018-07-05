(ns pluto.reader.views
  (:require [clojure.spec.alpha :as spec]
            [pluto.reader.blocks :as blocks]
            [pluto.reader.errors :as errors]
            [pluto.utils :as utils]))

;; TODO Distinguish views (can contain blocks, symbols) validation
;; from hiccup validation (view after parsing) that are pure hiccup

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

(declare parse)

(defn parse-hiccup-children [opts children]
  (reduce #(let [{:keys [data errors]} (parse opts %2)]
             (errors/merge-errors (update %1 :data conj data)
                                  errors))
          {:data []} children))

(defn parse-hiccup-element [{:keys [capacities] :as opts} o]
  (let [explain (spec/explain-data ::form o)]
    (cond
      ;; TODO Validate views, not hiccup
      ;; (not (nil? explain))
      ;; {:errors [(errors/error ::errors/invalid-view o {:explain-data explain})]}

      (or (symbol? o) (utils/primitive? o)) {:data o}
      (vector? o)

      (let [[element properties & children] o
            component (if (fn? element) element (get (:components capacities) element))]
        (cond-> (let [m (parse-hiccup-children opts children)]
                  ;; Reduce parsed children to a single map and wrap them in a hiccup element
                  ;; whose component has been translated to the local platform
                  (update m :data #(apply conj [(or component element) properties] %)))
                (nil? component) (errors/accumulate-errors [(errors/error ::errors/unknown-component element)]))))))

(defn parse [opts o]
  (cond
    (list? o)
    (let [{:keys [data errors]} (blocks/parse opts o)]
      (if errors
        {:errors errors}
        (parse opts data)))
    :else
    (parse-hiccup-element opts o)))
