class PledgePolicy < ApplicationPolicy
  def create?
    true
  end

  def finalize?
    @record.initiator == @user
  end

  def update?
    @record.initiator == @user
  end

  def destroy?
    @record.initiator == @user
  end
end
