class PledgesTag < ApplicationRecord
  belongs_to :pledge, inverse_of: :pledges_tags
  belongs_to :tag, inverse_of: :pledges_tags
end
