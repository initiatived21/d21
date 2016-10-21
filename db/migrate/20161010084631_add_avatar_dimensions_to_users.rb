class AddAvatarDimensionsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :avatar_width, :integer
    add_column :users, :avatar_height, :integer
  end
end
