class PledgePolicy < ApplicationPolicy
  def show?
    user_is_initiator? ||
      @record.active? || @record.successful? || @record.failed?
  end

  def create?
    true
  end

  def finalize?
    user_is_initiator? && @user.confirmed?
  end

  def update?
    user_is_initiator? && @record.initialized?
  end

  def destroy?
    user_is_initiator?
  end

  private

  def user_is_initiator?
    @record.initiator == @user
  end
end

