(ns pluto.error
  "Errors are generated during the static analysis of an extension source"
  (:require [clojure.spec.alpha :as spec]))

(spec/def ::category #{::format ::syntax})

(spec/def ::type #{::invalid ::missing ::unknown ::overridden})

(spec/def ::target (spec/keys :req [::type ::key]
                              :opt [::location]))

(spec/def ::context map?)

(spec/def ::error (spec/keys :req [::category ::type]
                             :opt [::target ::context]))

(defn create
  [category type target context]
  {:pre [(spec/valid? ::category category)
         (spec/valid? ::type type)]}
  (cond-> {:category category :type type}
          target (assoc :target target)
          context (assoc :context context)))

(defn syntax
  ([type] (syntax type nil))
  ([type target] (syntax type target nil))
  ([type target context]
   (create ::syntax type target context)))

;; TODO move to another ns

(defn- update-errors [m errors]
  (if (seq errors)
    (update m :errors concat errors)
    m))

(defn- update-data [m f data]
  (if data
    (update m :data f data)
    m))

(defn merge-result
  ([m mm] (merge-result merge m mm))
  ([f m {:keys [data errors]}]
   (-> m
       (update-data f data)
       (update-errors errors))))

(defn merge-results [& ms]
  (reduce merge-result {} ms))

(defn merge-results-with [f & ms]
  (reduce #(merge-result f %1 %2) {} ms))
