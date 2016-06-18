class Comment < ApplicationRecord
  # Associations
  belongs_to :pledge, inverse_of: :comments
end
