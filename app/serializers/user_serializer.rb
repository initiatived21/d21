class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :organization, :avatar
end
