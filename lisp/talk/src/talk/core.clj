(ns talk.core
  (:require [clojure.string :refer [upper-case]]))

(defn add [a b]
  (+ a b))

(defn to-upper-case [a]
  (upper-case a))

(defn exclaim [a]
  (str a "!"))

(defn shout [a]
  (-> a exclaim to-upper-case))
  ;; (exclaim (to-upper-case a)))

(defn -main []
  (println "2 + 4 =" (add 2 4))
  (println (upper-case "blabla"))
  (println (shout "olá"))
  )

;; function add (a, b) {
;;   return a + b
;; }
;;
;; function toUpperCase (str) {
;;   return str.toUpperCase()
;; }
;;
;; function exclaim (str) {
;;   return str + '!'
;; }
;;
;; function shout (str) {
;;   return exclaim(toUpperCase(str))
;; }
;;
;; function main () {
;;   console.log("2 + 4 =", add(2, 4))
;;   console.log("blabla".toUpperCase())
;;   console.log(shout("olá"))
;; }
