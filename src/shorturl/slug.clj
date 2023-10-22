(ns shorturl.slug)

(def charset "ABCDEFGHIJKLMNOPQRSTUVXYZ")


(comment
  (rand-nth charset)
  (apply str (take 4 (repeatedly #(rand-nth charset))))
  (generate-slug)
  )


(defn generate-slug
  []
  (->> (repeatedly #(rand-nth charset))
       (take 4)
       (apply str)))

