class Setup < ActiveRecord::Migration[5.0]
  def change
    create_table :pledges do |t|
      t.string :content, null: false
      t.integer :amount, null: false
      t.string :who, null: false
      t.string :requirement, null: false

      t.string :location
      t.date :deadline, null: false
      t.text :description

      # image
      t.string :aasm_state, null: false
      t.integer :user_id, null: false
      t.integer :signatures_count, null: false, default: 0

      t.timestamps
    end
    add_index :pledges, :user_id

    create_table :tags do |t|
      t.string :name, null: false

      t.timestamps
    end

    create_table :pledges_tags do |t|
      t.integer :pledge_id
      t.integer :tag_id
    end
    add_index :pledges_tags, :pledge_id
    add_index :pledges_tags, :tag_id

    create_table :users do |t|
      t.string :name, null: false
      t.string :organization
      # image
      t.string :email, null: false
      # password

      t.timestamps
    end

    create_table :admins do |t|
      t.string :email, null: false

      t.timestamps
    end

    create_table :signatures do |t|
      t.integer :pledge_id

      t.string :name, null: false
      t.string :email, null: false
      t.string :organization
      t.boolean :contact_person
      t.string :reason
      t.boolean :anonymous

      t.timestamps
    end
    add_index :signatures, :pledge_id

    create_table :reports do |t|
      t.integer :pledge_id

      t.timestamps
    end
    add_index :reports, :pledge_id

    create_table :updates do |t|
      t.string :pledge_id
      t.text :content

      t.timestamps
    end
    add_index :updates, :pledge_id

    create_table :comments do |t|
      t.string :content
      t.string :commentable_type
      t.string :commentable_id

      t.timestamps
    end
    add_index :comments, [:commentable_type, :commentable_id]
  end
end
