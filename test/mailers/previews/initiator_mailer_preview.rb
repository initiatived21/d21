class InitiatorMailerPreview < ActionMailer::Preview
  def needs_successful_update
    InitiatorMailer.needs_successful_update(Pledge.first.id)
  end

  def new_question
    InitiatorMailer.new_question(Comment.first.id)
  end

  def new_signature
    InitiatorMailer.new_signature(Signature.first.id)
  end

  def pledge_failed
    InitiatorMailer.pledge_failed(Pledge.first.id)
  end

  def pledge_successful
    InitiatorMailer.pledge_successful(Pledge.first.id)
  end

  def pledge_was_approved
    InitiatorMailer.pledge_was_approved(Pledge.first.id)
  end
end
