class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  include Pundit
  protect_from_forgery with: :exception

  before_action :set_locale

  def set_locale
    I18n.locale = params['locale'] || I18n.default_locale
  end

  protected

  def serialize object
    ActiveModelSerializers::SerializableResource.new(object).as_json
  end
end
