class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_edit_form

  def profile
    authorize current_user

    @user_props = {
      pledges: serialize(current_user.initiated_pledges),
      editForm: {
        action: user_url(current_user, locale: I18n.locale),
        method: 'PATCH',
        seedData: @form.as_json
      }
    }
  end

  def update
    authorize current_user
    if @form.validate(params[:user])
      update_success!
    else
      update_failed!
    end
  end

  private

  def set_edit_form
    @form = UserForm.new(current_user)
  end

  def update_success!
    @form.save
    respond_to do |format|
      format.json do
        render json: {
          status: 'success',
          changes: {
            current_user: serialize(current_user)
          }
        }
      end
      format.html do
        redirect_to :back
      end
    end
  end

  def update_failed!
    respond_to do |format|
      format.json do
        render json: { status: 'formErrors', errors: @form.errors.messages }
      end
      format.html { edit }
    end
  end
end
