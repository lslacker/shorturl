(ns shorturl.core
  (:require
    [clojure.java.io :as io]
    [muuntaja.core :as m]
    [reitit.ring :as ring]
    [reitit.ring.middleware.muuntaja :as muuntaja]
    [ring.adapter.jetty :as ring-jetty]
    [ring.util.response :as r]
    [shorturl.db :as db]
    [shorturl.slug :as slug]))


(defn index
  []
  (slurp (io/resource "public/index.html")))


(defn redirect
  [req]
  (let [slug (get-in req [:path-params :slug])
        url (db/get-url slug)]
    (if url
      (r/redirect url 307)
      (r/not-found "Not found"))))


(defn create-redirect
  [req]
  (let [url (get-in req [:body-params :url])
        slug (slug/generate-slug)]
    (db/insert-redirect! slug url)
    (r/response {:slug slug})))


(def app
  (ring/ring-handler
    (ring/router
      ["/"
       [":slug/" redirect]
       ["api/"
        ["redirect" {:post create-redirect}]]
       ["assets/*" (ring/create-resource-handler {:root "public/assets"})]
       ["" {:handler (fn [req] {:body (index) :status 200 :headers {"Content-type" "text/html"}})}]]
      {:data {:muuntaja m/instance
              :middleware [muuntaja/format-middleware]}})))


(defn start
  []
  (ring-jetty/run-jetty #'app {:port  3000
                               :join? false}))


(def server (start))

(server)
(.stop server)


(defn -main
  [& args]
  (start))
