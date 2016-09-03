class SignatureSerializer < ActiveModel::Serializer
  attributes :id, :organization, :confirmed, :pledge_id, :contact_person,
             :created_at, :anonymous, :email, :reason

  attribute :name, unless: :anonymous?

  delegate :anonymous?, to: :object
end
