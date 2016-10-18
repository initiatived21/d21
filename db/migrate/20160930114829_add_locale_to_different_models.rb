class AddLocaleToDifferentModels < ActiveRecord::Migration[5.0]
  def up
    add_column :pledges, :locale, :string, limit: 2
    add_column :users, :locale, :string, limit: 2
    add_column :signatures, :locale, :string, limit: 2

    Pledge.update_all(locale: :de)
    User.update_all(locale: :de)
    Signature.update_all(locale: :de)

    change_column :pledges, :locale, :string, limit: 2, null: false
    change_column :users, :locale, :string, limit: 2, null: false
    change_column :signatures, :locale, :string, limit: 2, null: false
  end

  def down
    remove_column :pledges, :locale
    remove_column :users, :locale
    remove_column :signatures, :locale
  end
end
