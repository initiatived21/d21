# Contains mailings to the initiator of a pledge about the same.
class InitiatorMailer < ApplicationMailer
  def pledge_was_approved pledge_id
    @pledge = Pledge.find(pledge_id)

    mail subject: t('.subject'), to: @pledge.initiator.email
  end

  def new_question comment_id
    @comment = Comment.find(comment_id)
    @pledge = @comment.pledge

    mail subject: t('.subject'), to: @pledge.initiator.email, bcc: SYSTEM_MAIL
  end

  def pledge_successful pledge_id
    @pledge = Pledge.find(pledge_id)

    mail subject: t('.subject'), to: @pledge.initiator.email, bcc: SYSTEM_MAIL
  end

  def pledge_failed pledge_id
    @pledge = Pledge.find(pledge_id)

    mail subject: t('.subject'), to: @pledge.initiator.email, bcc: SYSTEM_MAIL
  end
end
