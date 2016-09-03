class ApplicationMailer < ActionMailer::Base
  SYSTEM_MAIL = 'redaktion@buntundverbindlich.de'.freeze
  default from: SYSTEM_MAIL
  layout 'mailer'
end
