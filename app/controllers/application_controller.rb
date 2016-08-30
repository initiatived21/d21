class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  include Pundit
  protect_from_forgery with: :exception

  before_action :set_locale

  def set_locale
    I18n.locale = params['locale'] || I18n.default_locale
  end

  def self.default_url_options(options={})
    options.merge({ :locale => I18n.locale })
  end

  # temporary HTTP password protection
  # secrets = Rails.application.secrets
  # http_basic_authenticate_with(
  #   name: secrets.protect['user'],
  #   password: secrets.protect['pwd'],
  #   if: -> { Rails.env.staging? || Rails.env.production? }
  # )

  # Standard Error Rescues
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from Pundit::NotAuthorizedError, with: :not_found

  def not_found
    render '/pages/not_found', status: 404
  end

  protected

  def serialize object
    ActiveModelSerializers::SerializableResource.new(object).as_json
  end
end
