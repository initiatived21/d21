class ApplicationController < ActionController::Base
  # Don't test devise internal session handling
  def sign_in(*attrs)
  end
end
