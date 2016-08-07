source 'https://rubygems.org'
ruby '2.3.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '5.0.0.rc1'
# Use Puma as the app server
gem 'puma'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'

##################
### JAVASCRIPT ###
##################

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5.x'

gem 'i18n-js'

# React
gem 'react_on_rails', '6.0.5'

########################
### Rails extensions ###
########################

gem 'slim-rails'
# gem 'dry-validation' # more explicit validations
gem 'dry-validation', github: 'dry-rb/dry-validation'
gem 'reform', github: 'apotonick/reform', branch: '2-2' # Form objects
gem 'cells'
gem 'cells-rails'
gem 'cells-slim'

gem 'aasm'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
gem 'active_model_serializers', github: 'rails-api/active_model_serializers',
                                branch: 'master' # to get 0.10.0
# Use Redis adapter to run Action Cable in production
gem 'redis', '>= 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# image uploads
gem 'carrierwave'
gem 'carrierwave-base64'
gem 'mini_magick'

# Auth
gem 'devise'
gem 'devise-i18n'
gem 'pundit'

gem 'rails-i18n'

# Admin Backend
gem 'activeadmin', github: 'activeadmin'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :production, :staging do
  gem 'rails_12factor'
end

################
### Database ###
################

gem 'pg'
gem 'pg_search' # Postgres search index

#########################
### External Services ###
#########################

gem 'localeapp'

#####################
# Dev/Test Specific #
#####################

group :development do
  # startup
  gem 'spring' # faster rails start
  gem 'listen', '~> 3.0.5'
  gem 'spring-watcher-listen', '~> 2.0.0'

  # errors
  gem 'better_errors'
  gem 'binding_of_caller'

  # debugging in chrome with RailsPanel
  gem 'meta_request'

  # Quiet Assets to disable asset pipeline in log
  gem 'quiet_assets'

  # requires graphviz to generate
  # entity relationship diagrams
  gem 'rails-erd', require: false

  # Deploy utilities
  gem 'capistrano', '~> 3.1'
  gem 'capistrano-rails', '~> 1.1'
  gem 'capistrano-bundler'
  gem 'capistrano-rbenv'
  gem 'capistrano-passenger'
end

group :test do
  # gem 'memory_test_fix' # Sqlite inmemory fix
  gem 'rake'
  gem 'database_cleaner'
  gem 'minitest-around'
  # gem 'colorize' # use this when RBP quits using `colored`
  gem 'fakeredis'
  gem 'fakeweb', '~> 1.3'
  gem 'webmock'
  gem 'pry-rescue'

  # testing emails
  gem 'email_spec'
end

group :development, :test do
  # Use sqlite3 for testing
  gem 'sqlite3'

  # debugging
  gem 'pry-rails' # pry is awsome
  gem 'hirb' # hirb makes pry output even more awesome
  gem 'pry-byebug' # kickass debugging
  gem 'pry-stack_explorer' # step through stack
  gem 'pry-doc' # read ruby docs in console

  # test suite
  gem 'minitest' # Testing using Minitest
  # gem 'minitest-rails', github: 'blowmage/minitest-rails', branch: 'rails5'
  gem 'minitest-spec-rails'
  gem 'minitest-matchers'
  gem 'minitest-line'
  gem 'minitest-capybara'
  # gem 'minitest-rails-capybara'
  gem 'launchy' # save_and_open_page
  gem 'shoulda'
  gem 'mocha'
  gem 'poltergeist'

  # test suite additions
  gem 'rails_best_practices'
  gem 'brakeman' # security test: execute with 'brakeman'
  gem 'rubocop' # style enforcement
  gem 'colorize' # Output coloring

  # Code Coverage
  gem 'simplecov', require: false
  gem 'coveralls', require: false

  # dev help
  gem 'thin' # Replace Webrick
  gem 'bullet' # Notify about n+1 queries
  gem 'timecop' # time travel!
  gem 'letter_opener' # emails in browser
  gem 'dotenv-rails' # handle environment variables
end


group :development, :test, :staging do
  gem 'factory_girl_rails'
  gem 'ffaker'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
