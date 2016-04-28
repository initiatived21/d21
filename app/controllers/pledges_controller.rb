class PledgesController < ApplicationController
  before_action :set_new_form, only: [:new, :create]

  def new
    @pledge_props = {
      locale: I18n.locale,
      formData: {
        action: pledges_path, authToken: form_authenticity_token,
        model: 'pledge', errors: @form.errors
      }
    }
  end

  def create
    if @form.validate(params['pledge'])
      @form.save
      respond_to do |format|
        format.json { render json: { status: 'success' } }
        format.html { redirect_to pledge_path(pledge, locale: I18n.locale) }
      end
    else
      # return render json: @form.errors.to_json # TODO: Remove!
      respond_to do |format|
        format.json { render json: { status: 'error' } }
        format.html { new() }
      end
    end
  end

  def show
    @pledge = Pledge.find(params[:id])
  end

  def index
  end

  private

  def set_new_form
    @pledge = Pledge.new(initiator: User.new)
    @form = NewPledgeForm.new(@pledge)
  end
end
