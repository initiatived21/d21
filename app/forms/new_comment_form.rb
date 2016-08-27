class NewCommentForm < Reform::Form
  include Reform::Form::Dry::Validations

  property :content

  # Validation

  validation :default do
    configure { config.messages = :i18n }

    required(:content).filled(max_size?: 650)
  end
end
