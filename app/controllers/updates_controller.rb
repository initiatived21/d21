class UpdatesController < ApplicationController
  def create
    @update = Update.new
    @update.pledge_id = params['id']
    authorize @update
    @form = NewUpdateForm.new(@update)
    if @form.validate(create_update_params)
      validate_success!
    else
      validate_failed!
    end
  end

  private

  def validate_success!
    @form.save
    recipients = @form.model.pledge.signatures.pluck(:id)
    MailDelivery.to_multiple_plus_admin(
      SignerMailer, :new_pledge_update, recipients, @form.model.id
    )
    respond_to do |format|
      format.html do
        redirect_to pledge_path(@update.pledge, locale: I18n.locale)
      end
      format.json do
        render json: { status: 'success', changes: { updates: @form.model } }
      end
    end
  end

  def validate_failed!
    respond_to do |format|
      format.html do
        # TODO: good non-js alternative
        flash.alert = @form.errors
        redirect_to pledge_path(id: @update.pledge.id, locale: I18n.locale)
      end
      format.json do
        render json: { status: 'formErrors', errors: @form.errors.messages }
      end
    end
  end

  def create_update_params
    params.require(:update).permit(:content)
  end
end
