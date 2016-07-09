class EditCommentForm < Reform::Form
  include Reform::Form::Dry::Validations

  property :response

  # Validation

  validation :default do
    required(:response).filled
  end
end
