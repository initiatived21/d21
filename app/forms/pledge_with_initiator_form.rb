class PledgeWithInitiatorForm < BasePledgeForm
  property :initiator do
    include Reform::Form::Dry::Validations

    property :name
    property :organization
    property :avatar
    property :email
    property :password
    property :password_confirmation

    validation :default do
      required(:name).filled
      required(:avatar)
      required(:email).filled
      required(:password).filled
      required(:password_confirmation).filled
    end
  end

  def as_json
    json = super
    # Delete image content, browsers don't let us set that value anyway
    json['fields']['initiator']['fields']['avatar'] = ''
    json
  end
end
