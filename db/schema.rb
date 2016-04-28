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
    t.string   "email",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "comments", force: :cascade do |t|
    t.string   "content"
    t.string   "commentable_type"
    t.string   "commentable_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "comments", ["commentable_type", "commentable_id"], name: "index_comments_on_commentable_type_and_commentable_id"

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
  end

  add_index "pledges", ["user_id"], name: "index_pledges_on_user_id"

  create_table "pledges_tags", force: :cascade do |t|
    t.integer "pledge_id"
    t.integer "tag_id"
  end

  add_index "pledges_tags", ["pledge_id"], name: "index_pledges_tags_on_pledge_id"
  add_index "pledges_tags", ["tag_id"], name: "index_pledges_tags_on_tag_id"

  create_table "reports", force: :cascade do |t|
    t.integer  "pledge_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "reports", ["pledge_id"], name: "index_reports_on_pledge_id"

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
  end

  add_index "signatures", ["pledge_id"], name: "index_signatures_on_pledge_id"

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
  end

  add_index "updates", ["pledge_id"], name: "index_updates_on_pledge_id"

  create_table "users", force: :cascade do |t|
    t.string   "name",         null: false
    t.string   "organization"
    t.string   "email",        null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

end
