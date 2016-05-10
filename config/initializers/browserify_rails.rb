# Rails.application.configure do
#   config.browserify_rails.commandline_options =
#     "-t coffeeify --extension=\".coffee\""
#
#   unless Rails.env.production?
#     # Work around sprockets+teaspoon mismatch:
#     Rails.application.config.assets.precompile += %w(spec_helper.js)
#
#     # Make sure Browserify is triggered when
#     # asked to serve javascript spec files
#     config.browserify_rails.paths << lambda { |p|
#       p.start_with?(Rails.root.join('test/javascripts').to_s)
#     }
#   end
# end
