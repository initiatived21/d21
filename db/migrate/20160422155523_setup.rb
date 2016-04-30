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
      # password
      t.timestamps null: false

      ## DEVISE:

      ## Database authenticatable
      t.string :email,              null: false, default: ''
      t.string :encrypted_password, null: false, default: ''
      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at

      ## Rememberable
      t.datetime :remember_created_at

      ## Trackable
      t.integer  :sign_in_count, default: 0, null: false
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.string   :current_sign_in_ip
      t.string   :last_sign_in_ip

      ## Confirmable
      t.string   :confirmation_token
      t.datetime :confirmed_at
      t.datetime :confirmation_sent_at
      # t.string   :unconfirmed_email # Only if using reconfirmable

      ## Lockable
      # t.integer  :failed_attempts, default: 0, null: false # Only if lock strategy is :failed_attempts
      # t.string   :unlock_token # Only if unlock strategy is :email or :both
      # t.datetime :locked_at
    end
    add_index :users, :email,                unique: true
    add_index :users, :reset_password_token, unique: true
    add_index :users, :confirmation_token,   unique: true
    # add_index :users, :unlock_token,         unique: true

    create_table :admins do |t|
      ## Database authenticatable
      t.string :email,              null: false, default: ''
      t.string :encrypted_password, null: false, default: ''

      ## Recoverable
      # t.string   :reset_password_token
      # t.datetime :reset_password_sent_at

      ## Rememberable
      # t.datetime :remember_created_at

      ## Trackable
      # t.integer  :sign_in_count, default: 0, null: false
      # t.datetime :current_sign_in_at
      # t.datetime :last_sign_in_at
      # t.string   :current_sign_in_ip
      # t.string   :last_sign_in_ip

      ## Confirmable
      # t.string   :confirmation_token
      # t.datetime :confirmed_at
      # t.datetime :confirmation_sent_at
      # t.string   :unconfirmed_email # Only if using reconfirmable

      ## Lockable
      t.integer  :failed_attempts, default: 0, null: false # Only if lock strategy is :failed_attempts
      t.string   :unlock_token # Only if unlock strategy is :email or :both
      t.datetime :locked_at

      t.timestamps null: false
    end

    add_index :admins, :email,                unique: true
    # add_index :admins, :reset_password_token, unique: true
    # add_index :admins, :confirmation_token,   unique: true
    # add_index :admins, :unlock_token,         unique: true

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
