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

ActiveRecord::Schema.define(version: 20160422155523) do

  create_table "admins", force: :cascade do |t|
    t.string   "email",              default: "", null: false
    t.string   "encrypted_password", default: "", null: false
    t.integer  "failed_attempts",    default: 0,  null: false
    t.string   "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.index ["email"], name: "index_admins_on_email", unique: true
  end

  create_table "comments", force: :cascade do |t|
    t.string   "content"
    t.string   "commentable_type"
    t.string   "commentable_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.index ["commentable_type", "commentable_id"], name: "index_comments_on_commentable_type_and_commentable_id"
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
    t.index ["user_id"], name: "index_pledges_on_user_id"
  end

  create_table "pledges_tags", force: :cascade do |t|
    t.integer "pledge_id"
    t.integer "tag_id"
    t.index ["pledge_id"], name: "index_pledges_tags_on_pledge_id"
    t.index ["tag_id"], name: "index_pledges_tags_on_tag_id"
  end

  create_table "reports", force: :cascade do |t|
    t.integer  "pledge_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pledge_id"], name: "index_reports_on_pledge_id"
  end

  create_table "signatures", force: :cascade do |t|
    t.integer  "pledge_id"
    t.string   "name",           null: false
    t.string   "email",          null: false
    t.string   "organization"
    t.boolean  "contact_person"
    t.string   "reason"
    t.boolean  "anonymous"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["pledge_id"], name: "index_signatures_on_pledge_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "updates", force: :cascade do |t|
    t.string   "pledge_id"
    t.text     "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pledge_id"], name: "index_updates_on_pledge_id"
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
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
