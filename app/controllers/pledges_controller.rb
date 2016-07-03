class PledgesController < ApplicationController
  before_action :set_new_form, only: [:new, :create]

  def new
    @pledge_props = {
      locale: I18n.locale,
      formData: {
        action: pledges_path,
        authToken: form_authenticity_token,
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
      },
      commentForms: {
        questionForm: {
          action: comments_path(id: params[:id], locale: I18n.locale),
          authToken: form_authenticity_token,
          model: 'comment'
        },
        answerForm: {
          action: comment_path(id: ':id', locale: I18n.locale),
          authToken: form_authenticity_token,
          model: 'comment',
          method: 'PATCH'
        }
      },
      signatures: pledge.signatures,
      updates: pledge.updates,
      comments: pledge.comments
    }
  end

  def index
    if (params[:range])
      ends = params[:range].split('..').map{|d| Integer(d)}
      offset = ends[0]
      limit = ends[1] - ends[0] + 1
    else
      offset = 0
      limit = 1
    end

    @query = params[:query]

    search = Search.new(params)

    if search.empty?
      @pledges = Pledge.active.limit(4)
      @result_ids = []
      @result_count = 0
    else
      search.run
      @result_count = search.results.count
      @pledges = search.results.offset(offset).limit(limit)
      @result_ids = @pledges.ids
    end

    respond_to do |format|
      format.html do
      end
      format.json do
        render json: { status: 'success', query: @query, pledges: @pledges, resultIds: @result_ids,
          resultCount: @result_count }
      end
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
