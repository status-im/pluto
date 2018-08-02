(ns pluto.registry
  (:require [clojure.set :as set]
            [clojure.string :as string]
            [pluto.reader.hooks :as hooks]))

(defprotocol Registry
  "Keep track of extensions."
  (add! [this id extension] "Add an extension to the registry. Id must be unique. Extensions are ::inactive by default.")
  (remove! [this id] "Remove an extension from the registry.")
  (all [this] "A map of all extensions and their respective states.")
  (hooks [this path] "A map of all active hooks matching `path`.")
  (activate! [this id] "Switch an extension to active. Returns true if state was change, false if not. Returns nil if no matching extension exists.")
  (deactivate! [this id] "Switch an extension to inactive."))

(defn initial-state [ext]
  (assoc ext ::state ::inactive))

(defn raw-extension [ext]
  (dissoc ext ::state))

(defn existing-hooks [m ext]
  (set/intersection (set (hooks/hooks ext))
                    (set (hooks/hooks (apply merge (vals m))))))

(defn add-if-absent [m id ext]
  (if (or (seq (existing-hooks m ext))
          (contains? m id))
    m
    (assoc m id (initial-state ext))))

(defn set-state-if-present [m id k]
  (if (contains? m id)
    (assoc-in m [id ::state] k)
    m))

(defn switch-state! [exts id from to]
  (let [[old _] (swap-vals! exts #(set-state-if-present % id to))]
    (when-let [{::keys [state]} (get old id)]
      (= from state))))

(defn active? [{::keys [state]}]
  (= ::active state))

(defn all-active-hooks [m]
  (apply merge (filter active? (vals m))))

(defn hook-id [s]
  (keyword (last (string/split (name s) #"\."))))

(defn new-registry []
  (let [exts (atom {})]
    (reify Registry
      (add! [_ id ext]
        (let [[old new] (swap-vals! exts #(add-if-absent % id ext))]
          (when (= (count old) (count new))
            (raw-extension (get old id)))))
      (remove! [_ id]
        (let [[old new] (swap-vals! exts dissoc id)]
          (when-not (= (count old) (count new))
            (raw-extension (get old id)))))
      (hooks [_ path]
        (reduce-kv #(if (and (hooks/hook? %2) (string/starts-with? (name %2) (name path)))
                      (assoc %1 (hook-id %2) %3)
                      %1)
                   {}
                   (all-active-hooks @exts)))

      (all [_] @exts)
      (activate! [_ id] (switch-state! exts id ::inactive ::active))
      (deactivate! [_ id] (switch-state! exts id ::active ::inactive)))))
