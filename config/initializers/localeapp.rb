require 'localeapp/rails'

Localeapp.configure do |config|
  config.translation_data_directory = 'config/locales'
  config.synchronization_data_file  = '.localeapp/log.yml'
  config.daemon_pid_file            = '.localeapp/localeapp.pid'

  if ENV['LOCALEAPP_KEY']
    config.api_key = ENV['LOCALEAPP_KEY']
    config.polling_environments = [:development]
  else
    config.api_key = 'none'
    config.polling_environments = []
  end
end
