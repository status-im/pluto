(ns pluto.reader.block-test
  (:require [clojure.test :refer [is deftest testing]]
            [pluto.reader :as reader]            
            [pluto.reader.errors :as errors]
            [pluto.reader.blocks :as blocks]
            [re-frame.core :as re-frame]))

(deftest bindings->env
  (is (= {:data '{a 1}} (blocks/bindings->env {} {} {} '[a 1])))
  (is (= (blocks/validate-bindings '[a 1 2])
         [(errors/error ::errors/invalid-bindings-format '[a 1 2])]))
  (is (= (blocks/validate-bindings [1 2])
         [(errors/error ::errors/invalid-bindings [1 2])]))
  (is (= {:data '{x 1}} (blocks/bindings->env {} {} {} '[{x :x} {:x 1}]))))

(deftest let-block
  (testing "parse"
    (is (= {:data [blocks/let-block '{:ctx {}, :ext {}, :bindings [s "Hello"]} 's]}
           (blocks/parse {} {} '(let [s "Hello"] s))))
    (is (empty?
          (:errors (blocks/parse {:capacities {:queries {'aa {:value :a}}}} {} '(let [{a :a} [aa]] a)))))

    (is (= {:data [blocks/let-block
                   '{:ctx {}, :ext {}, :bindings [{a :a} {:a {:b 1}} {b :b} a]}
                   'b]}
           (blocks/parse {} {} '(let [{a :a} {:a {:b 1}} {b :b} a] b))))
    (is (empty?
         (:errors (blocks/parse {:capacities
                                 {:queries {'aa {:value :a :arguments {:x :string}}}}}
                                {}
                                '(let [x 1 {a :a} [aa {:x x}]] a)))))
    (is (= {:data [blocks/let-block '{:ctx {}, :ext {}, :bindings [s "Hello"]}
                   ['test {} 's]]}
           (blocks/parse {} {} (list 'let ['s "Hello"] ['test {} 's]))))
    (is (= (blocks/validate-bindings '[s "Hello" 1])
           [(errors/error ::errors/invalid-bindings-format ['s "Hello" 1])]))

    )

  
  (is (= {:errors [(errors/error ::errors/invalid-bindings-format ['s "Hello" 1])]}
         (blocks/parse {} {} (list 'let ['s "Hello" 1] ['test {} 's]))))
  
  (is (= {:data [blocks/let-block '{:ctx {}, :ext {}, :bindings [{a :a} {:a 1}]}
                 '[test {} a]]}
         (blocks/parse {} {} '(let [{a :a} {:a 1}] [test {} a]))))

)

(deftest let-block-resolution
  (is (= [identity {} 1] (blocks/let-block {:bindings '[a 1] } [identity {} 'a])))
  #_
  (is (= ['test {} 1] (blocks/let-block {:env '{{a :a} [:aa]}} '[test {} a]))))

(defn first-error-type [{:keys [errors]}]
  (-> errors first :pluto.reader.errors/type))

(deftest parse-if-when-errors
  (is (= (first-error-type (blocks/parse {} {} '(if [])))
         :pluto.reader.errors/invalid-if-block))
  (is (= (first-error-type (blocks/parse {} {} '(if asdf [])))
         :pluto.reader.errors/invalid-if-block))
  (is (= (first-error-type (blocks/parse {} {} '(if asdf)))
         :pluto.reader.errors/invalid-if-block))  
  (is (= (first-error-type (blocks/parse {} {} '(when [])))
         :pluto.reader.errors/invalid-when-block))
  (is (= (first-error-type (blocks/parse {} {} '(when asdf)))
         :pluto.reader.errors/invalid-when-block)))


;; The following is all set up so that we can fake "render" the blocks
;; in the resulting view tree

;; this will allow us to verify basic binding replacement behaviors of let blocks

(defn view-component   [& args] [:view args])
(defn text-component   [& args] [:text args])
(defn button-component [& args] [:button args])

(re-frame/reg-sub ::identity-query
                  (fn [db [_ {:keys [x]}]] x))

(re-frame/reg-sub ::identity-map
                  (fn [db [_ {:keys [x]}]] {:asdf x}))

(def let-test-capacities
  {:components {'view   {:properties {}
                         :value      view-component}
                'button {:properties {:on-click :event}
                         :value      button-component}
                'text   {:properties {}
                         :value      text-component}}
   :queries '{identity-query {:value ::identity-query :arguments {:x :string}}
              identity-map {:value ::identity-map :arguments {:x :string}}}
   :events {'alert
            {:value :alert}}
   :hooks {:main
           {:properties {:view :view}}}})

(defn exec [parsed]
  (cond-> parsed
    (not (:errors parsed))
    (assoc 
     :execed
     ((get-in parsed [:data :hooks :main :demo :parsed :view])
      {:name "test-name-prop"}))))

(defn test-parse [extention]
  (-> (reader/parse {:capacities let-test-capacities} extention)
      exec))

(defn simple-render-tree-blocks [[x & xs]]
  (cond
    (and (fn? x) (#{pluto.reader.blocks/if-block
                    pluto.reader.blocks/when-block
                    pluto.reader.blocks/let-block} x))
    (let [new-tree (apply x xs)]
      (if (sequential? new-tree)
        (simple-render-tree-blocks new-tree)
        new-tree))
    :else 
    (apply
     vector
     x
     (map #(if (sequential? %)
             (simple-render-tree-blocks %)
             %)
          xs))))

(defn blocks-render [block-syn]
  (let [{:keys [execed errors] :as res}
        (test-parse (-> '{meta
                          {:name "Test Ext",
                           :description "A test extension",
                           :documentation "Nothing."},
                          hooks/main.demo {:view [main]}}
                        (assoc 'views/main block-syn)))]
    ;; for dev time
    #?(:clj
       (when-not (nil? errors)
         (clojure.pprint/pprint errors)
         (assert (nil? errors))))
    (when (and execed (sequential? execed))
      (simple-render-tree-blocks execed))))

;; end of rendering util to support tesing block rendering

(deftest if-when-block-rendering
  ;; need to set up a query to have a false value?
  (is (= [view-component "true"]
         (blocks-render '(let [a "asdf"]
                           (if a
                             [view "true"]
                             [view "false"])))))
  
    (is (= [view-component "false"]
           (blocks-render '(let [a [identity-query {:x false}]]
                             (if a
                               [view "true"]
                               [view "false"])))))
  (is (= [view-component "true"]
         (blocks-render '(let [a "asdf"]
                           (when a [view "true"])))))
  
  (is (= [view-component nil]
         (blocks-render '(let [a [identity-query {:x false}]]
                           [view (when a [view "true"])]))))
  )

(deftest basic-let-block-replacement []
  (is (= [view-component "hello"]
         (blocks-render '(let [a "hello"]
                           [view a]))))
  (is (= [view-component "hello" "jenny"
          [text-component "jenny" "hello"]
          [text-component "hello" "darlene"]]
         (blocks-render '(let [a "hello"
                               b "jenny"
                               c "darlene"]
                           [view a b
                            [text b a]
                            [text a c]]))))
  (is (= [view-component "john"]
         (blocks-render '(let [a "john"
                               b a]
                           [view b]))))
  (is (= [view-component "john"]
         (blocks-render '(let [a "john"
                               b a]
                           [view b]))))
  (is (= [view-component "john"]
         (blocks-render '(let [a "john"]
                           (let [b a]
                             [view b])))))
  (is (= [view-component "john"]
         (blocks-render '(let [a "john"
                               dd a]
                           (let [b a
                                 c b]
                             [view b]))))))

(deftest let-blocks-with-properties
  (is (= [view-component "test-name-prop"]
         (blocks-render '(let [{name :name} properties]
                           [view name]))))

  (is (= [view-component "test-name-prop"]
         (blocks-render '(let [{name :name} properties
                               b name]
                           [view b]))))

  (is (= [view-component "jolly"]
         (blocks-render '(let [{name :name} properties
                               b name]
                           (let [name "jolly"]
                             [view name])))))

  ;; doesn't work and should work
  ;; this is caused by the way that properties are bound
  ;; seperately
  #_(is (= [view-component "test-name-prop"]
           (blocks-render '(let [name "jolly"
                                 {name :name} properties]
                             [view name]))
           ))

  )

(deftest let-blocks-with-queries
  (is (= [view-component "a temp"]
         (blocks-render '(let [temp [identity-query {:x "a temp"}]]
                           [view temp]))))

  (is (= [view-component "a temp" "a temp"]
         (blocks-render '(let [a "a temp"
                               temp [identity-query {:x a}]]
                           [view a temp]))))

  (is (= [view-component "a temp" "charmed"]
         (blocks-render '(let [a "a temp"
                               {asdf :asdf} [identity-map {:x "charmed"}]]
                           [view a asdf]))))
  
 
   ;; this should work as well but ...
  #_(is (= [view-component "a temp" "a temp"]
           (blocks-render '(let [a "a temp"
                                 temp [identity-query {:x a}]
                                 ouch temp]
                             [view temp ouch]))
           
         ))

  (is (= [view-component "a temp" "a temp"]
         (blocks-render '(let [a "a temp"
                               temp [identity-query {:x a}]]
                           (let [ouch temp]
                               [view temp ouch])))))

  
  )

