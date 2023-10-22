(ns shorturl.db
  (:require
    [clojure.java.jdbc :as j]
    [honey.sql :as sql]
    [honey.sql.helpers :refer [select from insert-into columns values where] :as h]
    [shorturl.env :refer [env]]))


(def mysql-db
  {:dbtype (env :DBTYPE)
   :dbname (env :DBNAME)
   :user (env :USER)
   :password (env :PASSWORD)})


(defn query
  [q]
  (j/query mysql-db q))


(defn insert!
  [q]
  (j/db-do-prepared mysql-db q))


(defn insert-redirect!
  [slug url]
  (insert! (-> (insert-into :redirects)
               (columns :slug :url)
               (values [[slug url]])
               (sql/format {:pretty true}))))


(defn get-url
  [slug]
  (-> (query (-> (select :*)
                 (from :redirects)
                 (where [:= :slug slug])
                 (sql/format)))
      first
      :url))


(comment
  (query (-> (select :*)
             (from :redirects)
             (sql/format)))
  (insert! (-> (insert-into :redirects)
               (columns :slug :url)
               (values [["foo" "http://www.google.com"]])
               (sql/format {:pretty true})))
  (insert-redirect! "bar" "http://www.google.com")
  (get-url "bar"))
