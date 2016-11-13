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

    send_to_initiator_or_only_admin do |mailing_options|
      mail mailing_options
    end
  end

  def pledge_successful pledge_id
    @pledge = Pledge.find(pledge_id)

    send_to_initiator_or_only_admin do |mailing_options|
      mail mailing_options
    end
  end

  def pledge_failed pledge_id
    @pledge = Pledge.find(pledge_id)

    send_to_initiator_or_only_admin do |mailing_options|
      mail mailing_options
    end
  end

  def needs_successful_update pledge_id
    @pledge = Pledge.find(pledge_id)

    send_to_initiator_or_only_admin do |mailing_options|
      mail mailing_options
    end
  end

  private

  def send_to_initiator_or_only_admin &block
    mailing_options = { subject: t('.subject') }
    initiator = @pledge.initiator
    if (initiator.mailings_enabled)
      mailing_options[:to] = initiator.email
      mailing_options[:bcc] = SYSTEM_MAIL
    else
      mailing_options[:to] = SYSTEM_MAIL
    end


    I18n.with_locale(initiator.locale) do
      mail mailing_options
    end
  end
end
