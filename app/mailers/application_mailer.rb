class ApplicationMailer < ActionMailer::Base
  SYSTEM_MAIL = 'redaktion@buntundverbindlich.de'.freeze
  default from: SYSTEM_MAIL
  layout 'mailer'

  protected

  def find_or_use_recipient recipient_class, recipient_or_id
    if (recipient_or_id.is_a? Integer)
      recipient_class.public_send(:find, recipient_or_id)
    else
      recipient_or_id
    end
  end
end
