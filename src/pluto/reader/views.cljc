(ns pluto.reader.views
  (:require [clojure.spec.alpha       :as spec]
            [pluto.reader.blocks      :as blocks]
            [pluto.reader.errors      :as errors]
            [pluto.reader.permissions :as permissions]
            [pluto.utils              :as utils]
            [re-frame.core            :as re-frame]))

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

;; TODO add all possible event handlers
(def ^:private event-handler->selector
  {:on-press  (constantly true)
   :on-change #(.-text (.-nativeEvent %))})

(declare parse)

(defn parse-hiccup-children [opts children]
  (reduce #(let [{:keys [data errors]} (parse opts %2)]
             (errors/merge-errors (update %1 :data conj data)
                                  errors))
          {:data []} children))

(defn resolve-component [{:keys [components]} o]
  (cond
    (fn? o) o
    (symbol? o) (:value (get components o))))

(defn- event? [prop-value]
  (and (list? prop-value)
       (= 'event (first prop-value))))

(defn- create-event-handler [re-frame-event selector]
  (fn [event-value]
    (re-frame/dispatch (conj re-frame-event (selector event-value)))))

(defn- resolve-component-properties [component {:keys [permissions events] :as capacities} properties]
  ; (println ":" properties (get-in capacities [:components component :properties]))
  ; TODO validate component properties based on capacities
  (reduce (fn [acc [k v]] 
            (if (contains? event-handler->selector k)
              (if (not (event? v))
                (update acc :errors conj (errors/error ::errors/invalid-event-handler v))
                (let [[_ [event-name event-args] :as re-frame-event] v]
                  (cond

                    (not (contains? events event-name))
                    (update acc :errors conj (errors/error ::errors/event-not-exposed event-name))

                    (not (permissions/allowed-path? event-args (:write permissions)))
                    (update acc :errors conj (errors/error ::errors/forbidden-write-path event-args))

                    :else
                    (update acc :data assoc k (create-event-handler re-frame-event
                                                                    (get event-handler->selector k))))))
              (update acc :data assoc k v)))
          {:data   {}
           :errors []}
          properties))

(defn resolve-properties-children [[properties? & children]]
  [(and (map? properties?) properties?)
   (if (map? properties?)
     children
     (cons properties? children))])

(defn parse-hiccup-element [{:keys [capacities] :as opts} o]
  (let [explain (spec/explain-data ::form o)]
    (cond
      ;; TODO Validate views, not hiccup
      ;; (not (nil? explain))
      ;; {:errors [(errors/error ::errors/invalid-view o {:explain-data explain})]}

      (or (symbol? o) (utils/primitive? o)) {:data o}

      (vector? o)
      (let [[element & properties-children]  o
            [properties children]            (resolve-properties-children properties-children)
            component                        (resolve-component capacities element)
            {:keys [data errors]}            (when properties
                                               (resolve-component-properties element capacities properties))]
        (cond-> (let [m (parse-hiccup-children opts children)]
                  ;; Reduce parsed children to a single map and wrap them in a hiccup element
                  ;; whose component has been translated to the local platform
                  (update m :data #(apply conj (if data [(or component element) data]
                                                   [(or component element)])
                                          %)))
                (nil? component) (errors/accumulate-errors [(errors/error ::errors/unknown-component element)])
                (seq errors)     (errors/accumulate-errors errors))))))

(defn parse [opts o]
  (cond
    (list? o)
    (let [{:keys [data errors]} (blocks/parse opts o)]
      (if errors
        {:errors errors}
        (parse opts data)))
    :else
    (parse-hiccup-element opts o)))
