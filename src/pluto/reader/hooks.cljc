(ns pluto.reader.hooks
  (:require [clojure.string      :as string]
            [pluto.reader.errors :as errors]
            [pluto.reader.types  :as types]))

(defprotocol Hook
  "Encapsulate hook lifecycle."
  (hook-in [this id properties cofx] "Hook it into host app.")
  (unhook [this id properties cofx] "Remove extension hook from app."))

(defn hook? [s]
  (= "hooks" (namespace s)))

(defn hooks [ext]
  (filter hook? (keys ext)))

(defn local-id [s]
  (keyword (string/join "." (rest (string/split (name s) #"\.")))))

(defn root-id [s]
  (keyword (first (string/split (name s) #"\."))))

(defn parse [ctx ext]
  (reduce-kv (fn [acc hook-key data]
               (let [hook-id                       (local-id hook-key)
                     hook-root                     (root-id hook-key)
                     {:keys [properties] :as hook} (get-in ctx [:capacities :hooks hook-root])
                     {:keys [data errors] :as m}   (types/resolve ctx ext properties data)]
                 (errors/merge-errors
                  (-> acc
                      (assoc-in [:data :hooks hook-root hook-id :parsed] data)
                      (assoc-in [:data :hooks hook-root hook-id :hook-ref] hook))
                  errors)))
             {}
             (select-keys ext (hooks ext))))

