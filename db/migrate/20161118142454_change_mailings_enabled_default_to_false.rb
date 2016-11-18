class ChangeMailingsEnabledDefaultToFalse < ActiveRecord::Migration[5.0]
  def up
    change_column :users, :mailings_enabled, :boolean, default: false
  end

  def down
    change_column :users, :mailings_enabled, :boolean, default: true
  end
end
