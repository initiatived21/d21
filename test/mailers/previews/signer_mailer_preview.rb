class SignerMailerPreview < ActionMailer::Preview
  def new_pledge_update
    SignerMailer.new_pledge_update(Signature.first, Update.first.id)
  end

  def pledge_deleted
    SignerMailer.pledge_deleted(Signature.first, Pledge.first)
  end

  def pledge_failed
    SignerMailer.pledge_failed(Signature.first, Pledge.first.id)
  end

  def pledge_successful
    SignerMailer.pledge_successful(Signature.first, Pledge.first.id)
  end

  def signature_created
    SignerMailer.signature_created(Signature.where.not(confirmation_hash: nil).first)
  end
end
