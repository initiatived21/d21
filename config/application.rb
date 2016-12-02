require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module D21
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # config.middleware.use I18n::JS::Middleware # I18n-js

    config.logger = Logger.new(STDOUT)

    config.time_zone = 'Berlin'

    config.to_prepare do
      Devise::Mailer.layout "mailer"
    end
  end
end
