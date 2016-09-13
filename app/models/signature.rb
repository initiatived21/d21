class Signature < ApplicationRecord
  # Associations
  belongs_to :pledge, inverse_of: :signatures

  # Virtual Field
  attr_accessor :submitted_hash

  # Scope
  scope :confirmed, -> { where(confirmed: true) }
end
