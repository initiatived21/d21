class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :organization, :locale

  attribute :avatar do
    { url: object.avatar.url }
  end

  attribute :confirmed do
    object.confirmed?
  end
end
