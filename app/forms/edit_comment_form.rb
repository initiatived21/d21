class EditCommentForm < Reform::Form
  include Reform::Form::Dry::Validations

  property :response

  # Validation

  validation :default do
    configure { config.messages = :i18n }

    required(:response).filled(max_size?: 650)
  end
end
