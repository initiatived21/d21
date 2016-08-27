class UserPolicy < ApplicationPolicy
  def profile?
    @record == @user
  end

  def update?
    profile?
  end
end
