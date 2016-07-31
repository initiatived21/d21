# Contains mailings to the initiator of a pledge about the same.
class InitiatorMailer < ApplicationMailer
  default from: 'redaktion@buntundverbindlich.de'

  def pledge_was_approved pledge_id
    @pledge = Pledge.find(pledge_id)

    mail subject: t('.subject'), to: @pledge.initiator.email
  end
end
