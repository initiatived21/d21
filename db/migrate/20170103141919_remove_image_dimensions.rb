class RemoveImageDimensions < ActiveRecord::Migration[5.0]
  def change
    remove_column :pledges, :image_width, :integer
    remove_column :pledges, :image_height, :integer

    remove_column :users, :avatar_width, :integer
    remove_column :users, :avatar_height, :integer
  end
end
