class NewUpdateForm < Reform::Form
  include Reform::Form::Dry::Validations

  property :content

  # Validation

  validation :default do
    required(:content).filled(max_size?: 1300)
  end
end
