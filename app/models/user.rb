class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :validatable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable

  # Associations
  has_many :initiated_pledges, class_name: 'Pledge', inverse_of: :initiator

  # CarrierWave Image Uploader
  mount_uploader :avatar, AvatarUploader
end
