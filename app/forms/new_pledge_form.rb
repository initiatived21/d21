
class NewPledgeForm < Reform::Form
  include Reform::Form::Dry::Validations

  property :content # , on: :pledge
  property :amount # , on: :pledge
  property :who # , on: :pledge
  property :requirement # , on: :pledge
  property :location # , on: :pledge
  property :deadline # , on: :pledge
  property :description # , on: :pledge
  # image
  property :tag_ids

  property :initiator do
    include Reform::Form::Dry::Validations

    property :name # , on: :user
    property :organization # , on: :user
    # image
    property :email # , on: :user
    property :password # , on: :user

    validation :default do
      required(:name).filled
      required(:organization)
      required(:email).filled
      required(:password).filled
    end
  end

  # Validation

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
