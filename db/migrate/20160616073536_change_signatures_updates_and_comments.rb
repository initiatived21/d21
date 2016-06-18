class ChangeSignaturesUpdatesAndComments < ActiveRecord::Migration[5.0]
  def change
    # Simplify comments: Instead of commenting on pledges and comments
    # (as answers) make them one-dimensional with internal response field
    rename_column :comments, 'commentable_id', 'pledge_id'
    remove_column :comments, 'commentable_type', :string
    add_index :comments, 'pledge_id'
    add_column :comments, 'response', :string

    # Updates' pledge_id is string instead of integer
    remove_column :updates, 'pledge_id', :string
    add_column :updates, 'pledge_id', :integer, null: false

    # Signatures need state machine and some defaults
    add_column :signatures, 'aasm_state', :string, limit: 32
    change_column :signatures, 'contact_person', :boolean, default: false
    change_column :signatures, 'anonymous', :boolean, default: false
  end
end
