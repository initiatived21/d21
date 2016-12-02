class AddCardsToPledges < ActiveRecord::Migration[5.0]
  def change
    add_column :pledges, :card_de, :string
    add_column :pledges, :card_en, :string
  end
end
