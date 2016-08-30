class AddRecommendedToPledges < ActiveRecord::Migration[5.0]
  def change
    add_column :pledges, :recommended, :boolean,
               default: false, null: false
  end
end
