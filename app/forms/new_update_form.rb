class NewUpdateForm < Reform::Form
  include Reform::Form::Dry::Validations

  property :content

  # Validation

  validation :default do
    configure { config.messages = :i18n }

    required(:content).filled(max_size?: 1300)
  end
end
