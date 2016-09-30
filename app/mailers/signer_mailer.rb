# Contains mailings to the signers of a pledge
class SignerMailer < ApplicationMailer
  def signature_created signature_id
    @signature = Signature.find(signature_id)
    mail(subject: t('.subject'), to: @signature.email)
  end

  # Prepares sending multiple update notifications, one to each signer and one
  # to admin
  def new_pledge_update update_id
    @update = Update.find(update_id)
    @pledge = @update.pledge
    signatures = @pledge.signatures.confirmed.all

    signatures.each do |recipient|
      single_new_pledge_update recipient
    end

    # send to admin as well
    mail(subject: t('.subject'), to: SYSTEM_MAIL).deliver
  end

  def pledge_successful pledge_id
    pledge = Pledge.find(pledge_id)
    pledge.signatures.confirmed.all.each do |recipient|
      single_pledge_successful recipient, pledge
    end
  end

  def pledge_failed pledge_id
    pledge = Pledge.find(pledge_id)
    pledge.signatures.confirmed.all.each do |recipient|
      single_pledge_failed recipient, pledge
    end
  end

  # Careful, call this while there is still a reference to the deleted pledge
  # in memory
  def pledge_deleted pledge
    @pledge = pledge
    pledge.signatures.all.select(&:confirmed?).each do |recipient|
      @recipient = recipient
      mail(subject: t('.subject'), to: recipient.email).deliver
    end
  end

  private

  def single_new_pledge_update recipient
    @recipient = recipient

    mail(subject: t('.subject'), to: @recipient.email).deliver
  end

  def single_pledge_successful recipient, pledge
    @recipient = recipient
    @pledge = pledge

    mail(subject: t('.subject'), to: @recipient.email).deliver
  end

  def single_pledge_failed recipient, pledge
    @recipient = recipient
    @pledge = pledge

    mail(subject: t('.subject'), to: @recipient.email).deliver
  end
end
