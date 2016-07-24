class UserPolicy < ApplicationPolicy
  def profile?
    @record == @user
  end
end
