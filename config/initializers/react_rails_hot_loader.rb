if Rails.env.development?
  # Starts a websocket server to push changes:
  React::Rails::HotLoader.start()
end
