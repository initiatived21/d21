# Contains mailings to the signers of a pledge
class SignerMailer < ApplicationMailer
  def signature_created signature_id
    @signature = Signature.find(signature_id)
    mail(subject: t('.subject'), to: @signature.email)
  end

  # Prepares sending multiple update notifications, one to each signer and one
  # to each admin
  def new_pledge_update update_id
    update = Update.find(update_id)
    pledge = update.pledge
    signatures = pledge.signatures.all

    (signatures + AdminUser.all).each do |recipient|
      single_new_pledge_update recipient, update, pledge
    end
  end

  def pledge_successful pledge_id
    pledge = Pledge.find(pledge_id)
    pledge.signatures.all.each do |recipient|
      single_pledge_successful recipient, pledge
    end
  end

  def pledge_failed pledge_id
    pledge = Pledge.find(pledge_id)
    pledge.signatures.all.each do |recipient|
      single_pledge_failed recipient, pledge
    end
  end

  private

  def single_new_pledge_update recipient, update, pledge
    @recipient = recipient
    @update = update
    @pledge = pledge

    mail(subject: t('.subject'), to: @recipient.email).deliver
  end

  def single_pledge_successful recipient, pledge
    @recipient = recipient
    @pledge = Pledge.find(pledge_id)

    mail(subject: t('.subject'), to: @recipient.email).deliver
  end

  def single_pledge_failed recipient, pledge
    @recipient = recipient
    @pledge = Pledge.find(pledge_id)

    mail(subject: t('.subject'), to: @recipient.email).deliver
  end
end
