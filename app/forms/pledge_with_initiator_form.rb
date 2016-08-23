class PledgeWithInitiatorForm < BasePledgeForm
  property :initiator do
    include Reform::Form::Dry::Validations

    property :name
    property :organization
    property :avatar
    property :email
    property :password
    property :password_confirmation, virtual: true

    validation :default do
      configure do
        def correct?(str)
          str == form.password
        end
      end

      required(:name).filled
      required(:avatar)
      required(:email).filled

      key(:password, &:filled?) # :password required.
      key(:confirm_password) do |str|
        str.filled? & str.correct?
      end
    end
  end

  def as_json
    json = super
    # Delete image content, browsers don't let us set that value anyway
    json['fields']['initiator']['fields']['avatar'] = ''
    json
  end
end
