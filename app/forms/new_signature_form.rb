class NewSignatureForm < Reform::Form
  include Reform::Form::Dry::Validations

  property :name
  property :email
  property :reason
  property :anonymous
  property :contact_person

  # Validation

  validation :default do
    required(:name).filled
    required(:email).filled
  end
end
