class AddConfirmationToSignatures < ActiveRecord::Migration[5.0]
  def change
    add_column :signatures, :confirmed, :boolean, default: false
    add_column :signatures, :confirmation_hash, :string
    add_index :signatures, [:pledge_id, :confirmed]
  end
end
