class PledgesController < ApplicationController
  before_action :set_new_form, only: [:new, :create]

  def new
    @pledge_props = {
      locale: I18n.locale,
      formData: {
        action: pledges_path, authToken: form_authenticity_token,
        model: 'pledge',
        # errors: @form.errors.messages,
        object: @form.as_json
      },
      tags: Tag.all
    }
    render :new
  end

  def create
    if @form.validate(pledge_params)
      create_success!
    else
      create_failed!
    end
  end

  def show
    pledge = Pledge.find(params[:id])
    @pledge_props = {
      pledge: pledge,
      locale: I18n.locale,
      signPledgeForm: {
        formData: {
          action: signatures_path(id: params[:id], locale: I18n.locale),
          authToken: form_authenticity_token,
          model: 'signature'
        }
      }
    }
  end

  def index
    search = Search.new(params)
    if search.empty?
      @pledges = Pledge.active.limit(4)
      @result_ids = []
    else
      search.run
      @pledges = search.results
      @result_ids = search.results.ids
    end
  end

  private

  def set_new_form
    @pledge = Pledge.new(initiator: User.new)
    @form = NewPledgeForm.new(@pledge)
  end

  def create_success!
    @form.save
    AdminMailer.new_pledge(@form.model.id).deliver_later
    respond_to do |format|
      format.json { render json: { status: 'success' } }
      format.html { redirect_to pledge_path(@pledge, locale: I18n.locale) }
    end
  end

  def create_failed!
    # return render json: @form.errors.to_json # TODO: Remove!
    respond_to do |format|
      format.json { render json: { status: 'error' } }
      format.html { new }
    end
  end

  def pledge_params
    params.require(:pledge).permit(
      :content, :amount, :who, :requirement, :location, :description,
      :deadline,
      tag_ids: [],
      initiator: [:name, :email, :organization, :avatar, :password]
    )
  end
end
