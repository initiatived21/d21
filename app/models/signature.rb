class Signature < ApplicationRecord
  # Associations
  belongs_to :pledge, inverse_of: :signatures, counter_cache: true

  # Virtual Field
  attr_accessor :submitted_hash

  # Scope
  scope :confirmed, -> { where(confirmed: true) }
end
