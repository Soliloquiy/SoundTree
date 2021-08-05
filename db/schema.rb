# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_04_023603) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "genres", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
  end

  create_table "posts", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.bigint "subgenre_id", null: false
    t.string "comment"
    t.integer "like_count"
    t.index ["subgenre_id"], name: "index_posts_on_subgenre_id"
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "recommendations", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "songs", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.string "album"
    t.string "artist"
    t.integer "subgenre_id"
    t.string "sub_genre_name"
  end

  create_table "subgenres", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.bigint "genre_id", null: false
    t.index ["genre_id"], name: "index_subgenres_on_genre_id"
  end

  create_table "usergenres", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.bigint "subgenre_id", null: false
    t.index ["subgenre_id"], name: "index_usergenres_on_subgenre_id"
    t.index ["user_id"], name: "index_usergenres_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email"
    t.string "password"
    t.string "avatar"
    t.string "username"
  end

  add_foreign_key "posts", "subgenres"
  add_foreign_key "posts", "users"
  add_foreign_key "subgenres", "genres"
  add_foreign_key "usergenres", "subgenres"
  add_foreign_key "usergenres", "users"
end
