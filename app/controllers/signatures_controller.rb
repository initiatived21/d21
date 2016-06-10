class SignaturesController < ApplicationController
  def create
    @signature = Signature.new
    @signature.pledge_id = params['id']
    @form = NewSignatureForm.new(@signature)
    if @form.validate(signature_params)
      create_success!
    else
      create_failed!
    end
  end

  private

  def create_success!
    @form.save
    redirect_to pledge_path(@signature.pledge, locale: I18n.locale)
  end

  def create_failed!
    flash.alert = @form.errors # TODO: probably needs to be ajax form...
    redirect_to pledge_path(id: @signature.pledge.id, locale: I18n.locale)
  end

  def signature_params
    params.require(:signature).permit(
      :name, :email, :anonymous, :reason, :contact_person
    )
  end
end
