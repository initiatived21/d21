# Contains mailings to the initiator of a pledge about the same.
class InitiatorMailer < ApplicationMailer
  def pledge_was_approved pledge_id
    @pledge = Pledge.find(pledge_id)

    I18n.with_locale(@pledge.initiator.locale) do
      mail subject: t('.subject'), to: @pledge.initiator.email
    end
  end

  def new_question comment_id
    @comment = Comment.find(comment_id)
    @pledge = @comment.pledge

    I18n.with_locale(@pledge.initiator.locale) do
      mail subject: t('.subject'), to: @pledge.initiator.email, bcc: SYSTEM_MAIL
    end
  end

  def pledge_successful pledge_id
    @pledge = Pledge.find(pledge_id)

    I18n.with_locale(@pledge.initiator.locale) do
      mail subject: t('.subject'), to: @pledge.initiator.email, bcc: SYSTEM_MAIL
    end
  end

  def pledge_failed pledge_id
    @pledge = Pledge.find(pledge_id)

    I18n.with_locale(@pledge.initiator.locale) do
      mail subject: t('.subject'), to: @pledge.initiator.email, bcc: SYSTEM_MAIL
    end
  end

  def needs_successful_update pledge_id
    # The email is temporarily disabled due to ongoing discussions, until ticket #354 is implemented.
    # Also there is the open question if this email should rather be sent to signers of the pledge.

    # @pledge = Pledge.find(pledge_id)

    # I18n.with_locale(@pledge.initiator.locale) do
    #   mail subject: t('.subject'), to: @pledge.initiator.email, bcc: SYSTEM_MAIL
    # end
  end
end
