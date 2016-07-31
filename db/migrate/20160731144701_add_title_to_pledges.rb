class AddTitleToPledges < ActiveRecord::Migration[5.0]
  def up
    add_column :pledges, :title, :string
    change_column_null :pledges, :title, false
  end

  def down
    remove_column :pledges, :title
  end
end
