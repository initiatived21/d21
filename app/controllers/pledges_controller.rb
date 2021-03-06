class PledgesController < ApplicationController
  before_action :set_new_form, only: [:new, :create]
  before_action :set_edit_form, only: [:edit, :update, :finalize]
  before_action :authenticate_user!, except: [:new, :create, :index, :show]

  def new
    @pledge_props = pledge_form_props('POST', pledges_path)
    render :new
  end

  def create
    authorize @form.model

    if @form.validate(pledge_params)
      create_success!
    else
      create_failed!
    end
  end

  def show
    @pledge = Pledge.includes(:initiator).find(params[:id])

    authorize @pledge

    @pledge_props = {
      pledge: serialize(@pledge),
      forms: {
        signPledgeForm: {
          action: signatures_path(id: params[:id], locale: I18n.locale),
          authToken: form_authenticity_token,
          model: 'signature'
        },
        updateForm: {
          action: updates_path(id: params[:id], locale: I18n.locale),
          authToken: form_authenticity_token,
          model: 'update'
        },
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
      user: serialize(@pledge.initiator),
      signatures: serialize(@pledge.signatures.confirmed),
      updates: @pledge.updates,
      comments: @pledge.comments
    }
  end

  def index
    search = Search.new(params)

    search.run
    @pledges = search.solved_results
    @query = search.query || ''
    @filter = search.filter || ''
    @result_ids = search.solved_results.map(&:id)
    @result_count = search.unscoped_results.count

    @pledges = serialize @pledges

    respond_to do |format|
      format.html do
      end
      format.json do
        render json: {
          status: 'success', query: @query, filter: @filter, pledges: @pledges,
          resultIds: @result_ids, resultCount: @result_count
        }
      end
    end
  end

  def edit
    authorize @pledge
    @pledge_props = pledge_form_props('PATCH', pledge_path(id: @pledge.id))
    render :new
  end

  def update
    authorize @form.model
    if @form.validate(pledge_params)
      update_success!
    else
      update_failed!
    end
  end

  def destroy
    @pledge = Pledge.where(id: params[:id]).includes(:signatures).first
    signatures = @pledge.signatures.confirmed.all.to_a
    authorize @pledge
    @pledge.destroy!
    MailDelivery.to_multiple(SignerMailer, :pledge_deleted, signatures, @pledge)
    flash[:success] = t('.success')
    redirect_to profile_path
  end

  # single-purpose action with which the initiator requests approval of their
  # draft
  def finalize
    authorize @pledge
    if @form.validate(JSON.parse(@pledge.to_json))
      @pledge.finalize!
      AdminMailer.new_pledge(@pledge.id).deliver_later
      redirect_to pledge_path(id: @pledge.id)
    else
      redirect_to edit_pledge_path(validate: true)
    end
  end

  private

  def set_new_form
    if current_user
      @pledge = Pledge.new(initiator: current_user)
      @form = BasePledgeForm.new(@pledge)
    else
      @pledge = Pledge.new(initiator: User.new)
      @form = PledgeWithInitiatorForm.new(@pledge)
    end
    @form.prepopulate!
  end

  def set_edit_form
    @pledge = Pledge.find(params['id'])
    @form = BasePledgeForm.new(@pledge)
    @form.validate(JSON.parse(@pledge.to_json)) if params[:validate]
  end

  def create_success!
    @form.save
    sign_in @form.model.initiator unless current_user
    respond_to do |format|
      format.json do
        render(
          json: {
            status: 'success',
            changes: { pledge: @form.model },
            meta: { redirect: commit_based_return_url }
          }
        )
      end
      format.html do
        if params[:commit] == 'save_draft'
          flash[:success] = t('.saved_draft')
        end
        redirect_to commit_based_return_url
      end
    end
  end

  def create_failed!
    respond_to do |format|
      format.json do
        render(
          json: {
            status: 'formErrors',
            errors: @form.errors.messages
          }
        )
      end
      format.html { new }
    end
  end

  def commit_based_return_url
    if params[:commit] == 'save_draft'
      edit_pledge_url(id: @pledge.id, locale: I18n.locale)
    else
      pledge_url(id: @pledge.id, locale: I18n.locale)
    end
  end

  def update_success!
    @form.save
    respond_to do |format|
      format.json do
        render json: {
          status: 'success',
          meta: { redirect: commit_based_return_url }
        }
      end
      format.html do
        redirect_to commit_based_return_url
      end
    end
  end

  def update_failed!
    respond_to do |format|
      format.json { render json: { status: 'error' } }
      format.html { edit }
    end
  end

  def pledge_params
    pledge_params = params[:pledge]

    if pledge_params[:tag_ids]
      pledge_params[:tag_ids] = pledge_params[:tag_ids].split(',')
    end

    pledge_params[:locale] = params[:locale]
    if pledge_params[:initiator]
      pledge_params[:initiator][:locale] = params[:locale]
    end

    pledge_params
  end

  def pledge_form_props method, path
    {
      form: {
        action: path,
        authToken: form_authenticity_token,
        model: 'pledge',
        seedData: @form.as_json,
        method: method,
        validate: params[:validate]
      },
      id: params['id'],
      tags: Tag.all
    }
  end
end
