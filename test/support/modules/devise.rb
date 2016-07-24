class ApplicationController < ActionController::Base
  # Allow disabling of devise internal session handling in tests
  def self.disable_sign_in!
    @sign_in_disabled = true
  end

  def self.enable_sign_in!
    @sign_in_disabled = false
  end

  def self.sign_in_disabled?
    @sign_in_disabled
  end

  def sign_in(*attrs)
    return if self.class.sign_in_disabled?
    super
  end
end
