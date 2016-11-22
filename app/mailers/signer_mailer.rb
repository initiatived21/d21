# Contains mailings to the signers of a pledge
class SignerMailer < ApplicationMailer
  def signature_created signature_id
    @recipient = Signature.find(signature_id)
    mail_with_locale
  end

  def new_pledge_update signature, update_id
    @recipient = find_or_use_recipient(Signature, signature)
    @update = Update.find(update_id)
    @pledge = @update.pledge
    mail_with_locale
  end

  def pledge_successful signature, pledge_id
    @recipient = find_or_use_recipient(Signature, signature)
    @pledge = Pledge.find(pledge_id)
    mail_with_locale
  end

  def pledge_failed signature, pledge_id
    @recipient = find_or_use_recipient(Signature, signature)
    @pledge = Pledge.find(pledge_id)
    mail_with_locale
  end

  # Careful, call this while there is still a reference to the deleted pledge
  # in memory => needs "now" delivery
  def pledge_deleted signature, pledge
    @recipient = signature
    @pledge = pledge
    mail_with_locale
  end

  private

  def mail_with_locale
    I18n.with_locale(@recipient.locale) do
      mail(subject: t('.subject'), to: @recipient.email)
    end
  end
end
