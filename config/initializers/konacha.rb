Konacha.configure do |config|
  config.spec_dir     = "test/javascripts"
  config.spec_matcher = /_test\./
  config.stylesheets  = %w(application)
  # config.driver       = :selenium

  require 'capybara/poltergeist'
  config.driver = :poltergeist
end if defined?(Konacha)
