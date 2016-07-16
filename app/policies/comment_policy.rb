class CommentPolicy < ApplicationPolicy
  def create?
    @record.pledge.initiator != @user
  end

  def update?
    @record.pledge.initiator == @user
  end
end
