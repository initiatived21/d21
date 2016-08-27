class BasePledgeForm < Reform::Form
  include Reform::Form::Dry::Validations

  property :title
  property :content
  property :amount, prepopulator: -> (options) { self.amount = 3 }
  property :who
  property :requirement
  property :location
  property :deadline
  property :image
  property :description
  property :tag_ids

  # Validations
  validation :default do
    configure { config.messages = :i18n }

    required(:title).filled(max_size?: 85)
    required(:content).filled(max_size?: 80)
    required(:amount).filled(:int?, gt?: 0)
    required(:who).filled(max_size?: 65)
    required(:requirement).filled(max_size?: 95)
    required(:location).filled(max_size?: 50)
    required(:deadline).filled(:date?, gt?: Date.today)
  end
end
