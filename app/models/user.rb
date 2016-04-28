class User < ApplicationRecord
  attr_accessor :password

  # Associations
  has_many :initiated_pledges, class_name: 'Pledge', inverse_of: :initiator
end
