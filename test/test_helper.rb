ENV['RAILS_ENV'] ||= 'test'

require 'simplecov'
SimpleCov.start 'rails' do
  add_filter '/test/'
  add_filter '/app/channels/' # As of Apr 16, there is no good way to test AC
  minimum_coverage 100
end

require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
# require 'minitest/rails'
# require 'minitest/rails/capybara'
require 'minitest/pride'
require 'mocha/mini_test'
require 'capybara/rails'

require 'minitest/autorun'
require 'minitest/spec'
require 'minitest/mock'
require 'minitest-matchers'
require 'minitest/hell'
require 'minitest/metadata'
require 'pry-rescue/minitest' if ENV['RESCUE']
# require 'sidekiq/testing'
# require 'fakeredis'


# Poltergeist/PhantomJS
require 'capybara/poltergeist'
Capybara.register_driver :poltergeist do |app|
  Capybara::Poltergeist::Driver.new(app,
    js_errors: false,
    phantomjs_logger: File.open("#{Rails.root}/log/test_phantomjs.log", "a")
  )
end
Capybara.javascript_driver = :poltergeist


# Inclusions: First matchers, then modules, then helpers.
# Helpers need to be included after modules due to interdependencies.
Dir[Rails.root.join('test/support/matchers/*.rb')].each { |f| require f }
Dir[Rails.root.join('test/support/modules/*.rb')].each { |f| require f }
Dir[Rails.root.join('test/support/spec_helpers/*.rb')].each { |f| require f }

# # For Sidekiq
# Sidekiq::Testing.inline!
#
# # Redis
# Redis.current = Redis.new
# Capybara.asset_host = 'http://localhost:3000'

# For fixtures:
include ActionDispatch::TestProcess

# ~Disable logging for test performance!
# Change this value if you really need the log and run your suite again~
Rails.logger.level = 4

### Test Setup ###
File.open(Rails.root.join('log/test.log'), 'w') { |f| f.truncate(0) } # clearlog

Minitest.after_run do
  if $suite_passing
    client_tests
    brakeman
    rails_best_practices
    rubocop
  end
end

class ActiveSupport::TestCase
  ActiveRecord::Migration.check_pending!

  fixtures :all

  before :each do
    DatabaseCleaner.start
  end

  after :each do
    DatabaseCleaner.clean
    $suite_passing = false if failure
  end

  # Add more helper methods to be used by all tests here...
end

class ActionController::TestCase
  include Devise::TestHelpers
end

class MiniTest::Spec
  before :each do
    DatabaseCleaner.start
  end

  after :each do
    DatabaseCleaner.clean

    $suite_passing = false if failure
  end

  # Add more helper methods to be used by all tests here...
end

class AcceptanceTest < MiniTest::Capybara::Spec
  include MiniTest::Metadata

  before do
    if metadata[:js] == true
      Capybara.current_driver = Capybara.javascript_driver
    end

    DatabaseCleaner.start
  end

  after do
    Capybara.current_driver = Capybara.default_driver

    DatabaseCleaner.clean

    $suite_passing = false if failure
  end
  # Add more helper methods to be used by all tests here...
end

$suite_passing = true

DatabaseCleaner.strategy = :transaction
