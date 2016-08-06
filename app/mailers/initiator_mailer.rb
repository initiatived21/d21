# Contains mailings to the initiator of a pledge about the same.
class InitiatorMailer < ApplicationMailer
  default from: 'redaktion@buntundverbindlich.de'

  def pledge_was_approved pledge_id
    @pledge = Pledge.find(pledge_id)

    mail subject: t('.subject'), to: @pledge.initiator.email
  end

  def new_question comment_id
    @comment = Comment.find(comment_id)
    @pledge = @comment.pledge

    mail subject: t('.subject'), to: @pledge.initiator.email,
         bcc: AdminUser.pluck(:email)
  end
end
