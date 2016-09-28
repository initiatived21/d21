class UserForm < Reform::Form
  include Reform::Form::Dry::Validations

  property :name
  property :organization
  property :avatar
  property :remove_avatar
  property :email
  property :password
  property :password_confirmation, virtual: true

  validation :default do
    configure do
      config.messages = :i18n

      def correct?(str)
        if options[:form].password && !options[:form].password.empty?
          str == options[:form].password
        else
          true
        end
      end

      def unique?(field_value)
        return true unless options[:form].changed['email']
        User.where(email: field_value).count == 0
      end
    end

    required(:name).filled
    required(:avatar)
    required(:email).filled(:unique?)

    required(:password).maybe(:str?)
    required(:password_confirmation) { correct? }
  end

  def as_json options = {}
    json = super
    # Delete image content, browsers don't let us set that value anyway
    #json['fields']['avatar'] = ''
    json
  end
end
