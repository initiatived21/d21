module MailDelivery
  # Call a mailing for many recipients with their respective locale. Abstracts
  # away the iteration and standardizes delivery timing by the type of
  # recipient.
  def self.to_multiple mailer_class, mailing_name, recipients, *mailing_args
    recipients.each do |recipient|
      time = delivery_timing_for(recipient)
      to_one mailer_class, mailing_name, recipient, time, *mailing_args
    end
  end

  # Admin wants a copy of certain emails. This helper generates an in-memory
  # struct containing admin data
  def self.to_virtual_admin mailer_class, mailing_name, *mailing_args
    recipient = OpenStruct.new(
      name: 'Admin', email: ApplicationMailer::SYSTEM_MAIL, locale: :de
    )
    to_one mailer_class, mailing_name, recipient, :now, *mailing_args
  end

  # Convenience to combine #to_multiple and #to_virtual_admin
  def self.to_multiple_plus_admin(
    mailer_class, mailing_name, recipients, *mailing_args
  )
    to_multiple mailer_class, mailing_name, recipients, *mailing_args
    to_virtual_admin mailer_class, mailing_name, *mailing_args
  end

  private

  # Call a mailing for a single recipient. Probably only useful in the context
  # of this module as controllers could just call the mailers directly.
  def self.to_one mailer_class, mailing_name, recipient, time, *mailing_args
    delivery_call = "deliver_#{time}".to_sym
    mailer_class.public_send(mailing_name, recipient, *mailing_args)
                .public_send(delivery_call)
  end

  def self.delivery_timing_for recipient
    recipient.is_a?(Integer) ? :later : :now
  end
end
