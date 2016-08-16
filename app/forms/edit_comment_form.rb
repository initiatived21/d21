class EditCommentForm < Reform::Form
  include Reform::Form::Dry::Validations

  property :response

  # Validation

  validation :default do
    required(:response).filled(max_size?: 650)
  end
end
