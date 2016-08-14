class SignaturePolicy < ApplicationPolicy
  def create?
    @record.pledge.initiator != @user
  end

  def confirm?
    hash_matches?
  end

  def destroy?
    hash_matches?
  end

  private

  def hash_matches?
    @record.confirmation_hash == @record.submitted_hash
  end
end
