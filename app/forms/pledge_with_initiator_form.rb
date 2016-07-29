class PledgeWithInitiatorForm < BasePledgeForm
  property :initiator do
    include Reform::Form::Dry::Validations

    property :name
    property :organization
    property :avatar
    property :email
    property :password

    validation :default do
      required(:name).filled
      required(:organization)
      required(:email).filled
      required(:password).filled
    end
  end

  def as_json
    json = super
    # Delete image content, browsers don't let us set that value anyway
    json['fields']['initiator']['fields']['avatar'] = ''
    json
  end
end
