class PledgePolicy < ApplicationPolicy
  def create?
    true
  end

  def finalize?
    @record.initiator == @user && @user.confirmed_at?
  end

  def update?
    @record.initiator == @user && @record.initialized?
  end

  def destroy?
    @record.initiator == @user
  end
end
