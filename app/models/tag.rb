class Tag < ApplicationRecord
  has_many :pledges_tags, inverse_of: :tag
  has_many :pledges, through: :pledges_tags, inverse_of: :tags
end
