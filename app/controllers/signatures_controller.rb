class SignaturesController < ApplicationController
  # skip_before_action :verify_authenticity_token, only: [:create],
  #                                                if: :json_request?

  def create
    @signature = Signature.new
    @signature.pledge_id = params['id']
    authorize @signature
    @form = NewSignatureForm.new(@signature)
    if @form.validate(signature_params)
      create_success!
    else
      create_failed!
    end
  end

  def confirm
    @signature = Signature.find(params[:id])
    @signature.submitted_hash = params[:hash]
    authorize @signature
    @signature.update_column :confirmed, true
    flash[:success] = 'Erfolgreich bestätigt'
    redirect_to pledge_path(@signature.pledge, locale: I18n.locale)
  end

  private

  def create_success!
    @form.confirmation_hash = SecureRandom.base58(24)
    @form.save
    SignerMailer.signature_created(@form.model.id).deliver_later
    respond_to do |format|
      format.html do
        redirect_to pledge_path(@signature.pledge, locale: I18n.locale)
      end
      format.json do
        render json: { status: 'success', changes: { signatures: @form.model } }
      end
    end
  end

  def create_failed!
    respond_to do |format|
      format.html do
        # TODO: good non-js alternative
        flash.alert = @form.errors
        redirect_to pledge_path(id: @signature.pledge.id, locale: I18n.locale)
      end
      format.json do
        render json: { status: 'formErrors', errors: @form.errors.messages }
      end
    end
  end

  def signature_params
    params.require(:signature).permit(
      :name, :email, :anonymous, :reason, :contact_person
    )
  end
end
