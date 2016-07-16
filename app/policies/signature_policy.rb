class SignaturePolicy < ApplicationPolicy
  def create?
    @record.pledge.initiator != @user
  end
end
