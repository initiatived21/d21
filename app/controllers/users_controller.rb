class UsersController < ApplicationController
  before_action :authenticate_user!

  def profile
    authorize current_user

    @user_props = {
      pledges: current_user.initiated_pledges
    }
  end
end