class BasePledgeForm < Reform::Form
  include Reform::Form::Dry::Validations

  property :title
  property :content
  property :amount
  property :who
  property :requirement
  property :location
  property :deadline
  property :image
  property :description
  property :tag_ids

  # Validations
  validation :default do
    required(:title).filled(max_size?: 45)
    required(:content).filled(max_size?: 70)
    required(:amount).filled(:int?, gt?: 0)
    required(:who).filled(max_size?: 50)
    required(:requirement).filled(max_size?: 70)
    required(:location).filled(max_size?: 30)
    required(:deadline).filled(:date?, gt?: Date.today)
  end
end
