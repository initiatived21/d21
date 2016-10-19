class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :lockable :timeoutable :validatable :omniauthable :trackable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable,
         :confirmable

  # Associations
  has_many :initiated_pledges, class_name: 'Pledge', inverse_of: :initiator,
                               dependent: :destroy

  # CarrierWave Image Uploader
  mount_base64_uploader :avatar, AvatarUploader, file_name: 'avatar'
end
