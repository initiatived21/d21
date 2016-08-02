# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160731144701) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "pg_trgm"

  create_table "active_admin_comments", force: :cascade do |t|
    t.string   "namespace"
    t.text     "body"
    t.string   "resource_id",   null: false
    t.string   "resource_type", null: false
    t.string   "author_type"
    t.integer  "author_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id", using: :btree
    t.index ["namespace"], name: "index_active_admin_comments_on_namespace", using: :btree
    t.index ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id", using: :btree
  end

  create_table "admin_users", force: :cascade do |t|
    t.string   "email",              default: "", null: false
    t.string   "encrypted_password", default: "", null: false
    t.integer  "failed_attempts",    default: 0,  null: false
    t.string   "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.index ["email"], name: "index_admin_users_on_email", unique: true, using: :btree
  end

  create_table "comments", force: :cascade do |t|
    t.string   "content"
    t.string   "pledge_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "response"
    t.index ["pledge_id"], name: "index_comments_on_pledge_id", using: :btree
  end

  create_table "pg_search_documents", force: :cascade do |t|
    t.text     "content"
    t.string   "searchable_type"
    t.integer  "searchable_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["searchable_type", "searchable_id"], name: "index_pg_search_documents_on_searchable_type_and_searchable_id", using: :btree
  end

  create_table "pledges", force: :cascade do |t|
    t.string   "content",                      null: false
    t.integer  "amount",                       null: false
    t.string   "who",                          null: false
    t.string   "requirement",                  null: false
    t.string   "location"
    t.date     "deadline",                     null: false
    t.text     "description"
    t.string   "aasm_state",                   null: false
    t.integer  "user_id",                      null: false
    t.integer  "signatures_count", default: 0, null: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.string   "title",                        null: false
    t.string   "image"
    t.index ["user_id"], name: "index_pledges_on_user_id", using: :btree
  end

  create_table "pledges_tags", force: :cascade do |t|
    t.integer "pledge_id"
    t.integer "tag_id"
    t.index ["pledge_id"], name: "index_pledges_tags_on_pledge_id", using: :btree
    t.index ["tag_id"], name: "index_pledges_tags_on_tag_id", using: :btree
  end

  create_table "reports", force: :cascade do |t|
    t.integer  "pledge_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pledge_id"], name: "index_reports_on_pledge_id", using: :btree
  end

  create_table "signatures", force: :cascade do |t|
    t.integer  "pledge_id"
    t.string   "name",                                      null: false
    t.string   "email",                                     null: false
    t.string   "organization"
    t.boolean  "contact_person",            default: false
    t.string   "reason"
    t.boolean  "anonymous",                 default: false
    t.datetime "created_at",                                null: false
    t.datetime "updated_at",                                null: false
    t.string   "aasm_state",     limit: 32
    t.index ["pledge_id"], name: "index_signatures_on_pledge_id", using: :btree
  end

  create_table "tags", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "updates", force: :cascade do |t|
    t.text     "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "pledge_id",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name",                                null: false
    t.string   "organization"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "avatar"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, using: :btree
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

end
