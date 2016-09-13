class RemoveSignaturesCountFromPledges < ActiveRecord::Migration[5.0]
  def change
    remove_column :pledges, :signatures_count, :integer, default: 0, null: false
  end
end
