Rails.application.configure do
  # config.assets.initialize_on_precompile = true

  # Version of your assets, change this if you want to expire all your assets.
  config.assets.version = '1.0.2'

  # Add additional assets to the asset load path
  # Rails.application.config.assets.paths << Emoji.images_path
  config.assets.paths << Rails.root.join('app', 'forms')

  # Precompile additional assets.
  # application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
  # Rails.application.config.assets.precompile += %w( search.js )
end

### React on Rails: ###

# Add client/assets/ folders to asset pipeline's search path.
# If you do not want to move existing images and fonts from your Rails app
# you could also consider creating symlinks there that point to the original
# rails directories. In that case, you would not add these paths here.
Rails.application.config.assets.precompile += %w( server-bundle.js )

# Add folder with webpack generated assets to assets.paths
Rails.application.config.assets.paths << Rails.root.join("app", "assets", "webpack")
