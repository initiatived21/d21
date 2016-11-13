class AddMailingsEnabledToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :mailings_enabled, :boolean, default: true
  end
end
