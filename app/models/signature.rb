class Signature < ApplicationRecord
  # Associations
  belongs_to :pledge, inverse_of: :signatures
end