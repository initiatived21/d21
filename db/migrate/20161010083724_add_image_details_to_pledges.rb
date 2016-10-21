class AddImageDetailsToPledges < ActiveRecord::Migration[5.0]
  def change
    add_column :pledges, :image_width, :integer
    add_column :pledges, :image_height, :integer
  end
end
