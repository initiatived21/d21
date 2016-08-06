# Contains mailings to the signers of a pledge
class SignerMailer < ApplicationMailer
  default from: 'redaktion@buntundverbindlich.de'

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

  private

  def single_new_pledge_update recipient, update, pledge
    @recipient = recipient
    @update = update
    @pledge = pledge
    mail(subject: t('.subject'), to: @recipient.email).deliver
  end
end
