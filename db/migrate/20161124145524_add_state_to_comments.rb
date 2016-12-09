class AddStateToComments < ActiveRecord::Migration[5.0]
  def up
    add_column :comments, :aasm_state, :string

    # Save approved state to each existing comment
    Comment.all.each do |comment|
      comment.aasm_state = 'approved'
      comment.save
    end
  end

  def down
    remove_column :comments, :aasm_state, :string
  end
end
