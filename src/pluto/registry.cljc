(ns pluto.registry
  (:require [clojure.spec.alpha :as spec]
            [clojure.set        :as set]
            [clojure.string     :as string]
            [pluto.host         :as host]))

(spec/def ::registry (spec/map-of string? ::extension))

(spec/def ::state (spec/or ::inactive ::active))

(spec/def ::serialised-data string?)

(spec/def ::data any?)

(spec/def ::hook-id keyword?)

;; TODO(janherich) - spec it so only things which satisfy the `AppHook` protocol can be there
(spec/def ::hook-ref any?)

(spec/def ::hook (spec/keys :req-un [::hook-id ::hook-ref]))

(spec/def ::hooks (spec/coll-of ::hook))

(spec/def ::extension-data (spec/keys :req-un [::state ::data ::hooks]
                                      :opt-un [::serialised-data]))

(defn add
  "Takes extensions map and parsed data, adds extension to registry with `::inactive` initial state."
  [extensions parsed-data]
  (let [extension-key (get-in parsed-data ['meta :name])]
    (assoc extensions extension-key {:state           ::inactive
                                     :data            parsed-data})))

(def ^:private state->new-state {::active   ::inactive
                                 ::inactive ::active})

(defn- switch [new-state extensions extension-key]
  (if-let [{:keys [state data]} (get extensions extension-key)]
    (if (= state new-state)
      {:extensions extensions}
      (reduce (fn [acc [app-hook extension-hooks]]
                (reduce (fn [acc [hook-id {:keys [hook-ref parsed]}]]
                          (assoc-in acc [app-hook hook-id] (if (= ::active new-state)
                                                             (host/hook-in hook-ref hook-id parsed)
                                                             (host/unhook hook-ref hook-id))))
                        acc
                        extension-hooks))
              {:extensions (assoc-in extensions [extension-key :state] (get state->new-state state))}
              (:hooks data)))
    {:extensions extensions}))

(def activate
  "Takes extension key and activates it by turning on all hooks. Extension state is switched to active.
  Return value is map with keys `:extensions` containg new state of extensions map + entry for each hook,
  containg map in form of `{app-hook {extension-hook-id return-value-of-hook-in-call}}`"
  (partial switch ::active))

(def deactivate
  "Takes extension key and de-activates it by turning off all hooks. Extension state is switched to inactive.
  Return value is map with keys `:extensions` containing new state of extensions map + entry for each hook,
  containg map in form of `{app-hook {extension-hook-id return-value-of-unhook-call}}`"
  (partial switch ::inactive))

(defn remove
  "Removes extension from extension map altogether, if the extension is in active state, deactives it first.
  Return value is map with keys `:extensions` containg new state of extensions map and (optionally, if the extension
  was active) map of unhook value like from `deactive` function."
  [extensions extension-key]
  (if-let [{:keys [state]} (get extensions extension-key)]
    (if (= ::inactive state)
      {:extensions (dissoc extensions extension-key)}
      (-> (deactivate extensions extension-key)
          (update :extensions dissoc extension-key)))
    {:extensions extensions}))
