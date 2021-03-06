class NewSignatureForm < Reform::Form
  include Reform::Form::Dry::Validations

  property :name
  property :email
  property :reason
  property :anonymous
  property :organization
  property :contact_person

  property :confirmation_hash # ?
  property :locale

  # Validation

  validation :default do
    configure do
      config.messages = :i18n

      def unique?(field_value)
        scope_value = options[:form].model.pledge_id
        Signature.where(email: field_value, pledge_id: scope_value).count == 0
      end
    end

    required(:name) { size?(2..50) }
    required(:email).filled(:unique?, size?: 2..50)
  end
end
