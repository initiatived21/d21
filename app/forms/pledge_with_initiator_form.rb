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
        config.messages = :i18n

        def correct?(str)
          str == options[:form].password
        end

        def unique?(field_value)
          User.where(email: field_value).count == 0
        end
      end

      required(:name).filled
      required(:avatar)
      required(:email).filled(:unique?)

      required(:password).filled(:str?)
      required(:password_confirmation).filled(:str?, :correct?)
    end
  end

  def as_json
    json = super
    # Delete image content, browsers don't let us set that value anyway
    json['fields']['initiator']['fields']['avatar'] = ''
    json
  end
end
