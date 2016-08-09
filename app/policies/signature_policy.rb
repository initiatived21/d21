class SignaturePolicy < ApplicationPolicy
  def create?
    @record.pledge.initiator != @user
  end

  def confirm?
    @record.confirmation_hash == @record.submitted_hash
  end
end
