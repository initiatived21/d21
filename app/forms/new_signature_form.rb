class NewSignatureForm < Reform::Form
  include Reform::Form::Dry::Validations

  property :name
  property :email
  property :reason
  property :anonymous
  property :organization
  property :contact_person

  property :confirmation_hash

  # Validation

  validation :default do
    required(:name) { size?(2..32) }
    required(:email) { size?(2..32) }

    validates_uniqueness_of :email, scope: :pledge_id
  end
end
