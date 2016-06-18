# Update reports on pledges written by the respective initiator
class Update < ApplicationRecord
  # Associations
  belongs_to :pledge, inverse_of: :updates
end
