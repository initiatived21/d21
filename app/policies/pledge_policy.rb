class PledgePolicy < ApplicationPolicy
  def create?
    true
  end

  def finalize?
    @record.initiator == @user
  end
end
