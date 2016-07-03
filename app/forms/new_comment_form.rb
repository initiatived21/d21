class NewCommentForm < Reform::Form
  include Reform::Form::Dry::Validations

  property :content

  # Validation

  validation :default do
    required(:content).filled
  end
end
