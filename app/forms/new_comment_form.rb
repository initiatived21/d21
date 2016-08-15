class NewCommentForm < Reform::Form
  include Reform::Form::Dry::Validations

  property :content

  # Validation

  validation :default do
    required(:content).filled(max_size?: 650)
  end
end
