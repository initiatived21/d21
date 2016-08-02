class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :organization
  attribute :avatar do
    { url: object.avatar.url }
  end
end
