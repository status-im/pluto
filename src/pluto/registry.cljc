(ns pluto.registry
  (:refer-clojure :exclude [remove])
  (:require [clojure.spec.alpha :as spec]
            [clojure.set        :as set]
            [clojure.string     :as string]
            [pluto.reader.hooks :as hooks]
            [pluto.utils        :as utils]))

(spec/def :registry/registry (spec/map-of string? :registry/extension))

(spec/def :registry/state #{:active :inactive})

(spec/def :registry/data any?)

(spec/def :registry/extension (spec/keys :req-un [:registry/state :registry/data]))

;; TODO move to a protocol and provide default re-frame implementation

(defn add
  "Takes parsed data and coeffects map, adds extension to registry with `:inactive` initial state."
  [parsed-data {:keys [db]}]
  (let [extension-key (get-in parsed-data ['meta :name])]
    {:db (assoc-in db [:registry extension-key] {:state :inactive
                                                 :data  parsed-data})}))

(def ^:private state->new-state {:active   :inactive
                                 :inactive :active})

(defn- switch [new-state extension-key {:keys [db] :as cofx}] 
  (when-let [{:keys [state data]} (get-in db [:registry extension-key])] 
    (when-not (= state new-state)
      (apply utils/merge-fx cofx
             (constantly {:db (assoc-in db [:registry extension-key :state] (get state->new-state state))})
             (mapcat (fn [[app-hook extension-hooks]]
                       (map (fn [[hook-id {:keys [hook-ref parsed]}]]
                              (if (= :active new-state)
                                (partial hooks/hook-in (:hook hook-ref) hook-id parsed)
                                (partial hooks/unhook (:hook hook-ref) hook-id parsed)))
                            extension-hooks))
                     (:hooks data))))))

(def activate
  "Takes extension key and activates it by turning on all hooks. Extension state is switched to active."
  (partial switch :active))

(def deactivate
  "Takes extension key and de-activates it by turning off all hooks. Extension state is switched to inactive."
  (partial switch :inactive))

(defn remove
  "Removes extension from extension map altogether, if the extension is in active state, deactives it first."
  [extension-key {:keys [db] :as cofx}]
  (when-let [{:keys [state]} (get-in db [:registry extension-key])] 
    (if (= :inactive state)
      {:db (update db :registry dissoc extension-key)}
      (utils/merge-fx cofx 
                      (partial deactivate extension-key)
                      (fn [{:keys [db]}]
                        {:db (update db :registry dissoc extension-key)})))))
