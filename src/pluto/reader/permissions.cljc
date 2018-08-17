(ns pluto.reader.permissions)

(defn- matches?
  "Takes path into datastructure and path-template and determines if path-template
  matches the path.
  Path is matched if it's subpath of the path-template, eq path `[:a :b :c :d]`
  matches the path-template `[:a :b :c]` but path `[:a :b]` does not.
  Path-template can contain regular expression instead of exact values so the level
  matching is not identity only.
  When matching regular expression against path fragment, keyword path fragments
  are converted to appropriate strings."
  [path path-template]
  (let [matches (map (fn [template-value value]
                       (if (instance? #?(:clj  java.util.regex.Pattern
                                         :cljs js/RegExp)
                                      template-value)
                         (re-matches template-value (if (keyword? value)
                                                      (name value)
                                                      value))
                         (= template-value value)))
                     path-template
                     path)]
    (and (every? identity matches)
         (= (count matches)
            (count path-template)))))

(defn allowed-path?
  "Takes path vector and checks if it conforms to permissions map.
  Permission is expected to include at least `:include-paths` key, containing
  set of all allowed paths.
  Optionally, set of forbidden paths under key `:exclude-paths` can be provided
  as well.
  Paths in set can be vector of exact keys or can include regular expression
  patterns as well.
  If given path (first argument) is matched by any of the include paths and none
  of the exclude paths, the function returns true, false/nil otherwise."
  [path {:keys [include-paths exclude-paths]}]
  (and (some (partial matches? path) include-paths)
       (not (some (partial matches? path) exclude-paths))))
