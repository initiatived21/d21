class SignatureSerializer < ActiveModel::Serializer
  attributes :id, :organization, :confirmed, :pledge_id, :contact_person,
             :created_at, :updated_at, :anonymous

  attribute :name, unless: :anonymous?

  def anonymous?
    object.anonymous?
  end
end
