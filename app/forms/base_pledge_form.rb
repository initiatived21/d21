class BasePledgeForm < Reform::Form
  include Reform::Form::Dry::Validations

  property :content
  property :amount
  property :who
  property :requirement
  property :location
  property :deadline
  property :description
  # image
  property :tag_ids

  # Validations
  validation :default do
    required(:content).filled
    required(:amount).filled(:int?)
    required(:who).filled
    required(:requirement).filled
    required(:location)
    required(:deadline).filled(:date?)
    required(:description)
  end
end
