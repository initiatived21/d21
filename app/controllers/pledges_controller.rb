class PledgesController < ApplicationController
  before_action :set_new_form, only: [:new, :create]
  before_action :set_edit_form, only: [:edit, :update]
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
    pledge = Pledge.find(params[:id])
    authorize pledge
    @pledge_props = {
      pledge: serialize(pledge),
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
      user: serialize(pledge.initiator),
      signatures: serialize(pledge.signatures.confirmed),
      updates: pledge.updates,
      comments: pledge.comments
    }
  end

  def index
    search = Search.new(params)

    if search.empty?
      @pledges = Pledge.active.limit(4)
      @result_ids = []
      @result_count = 0
    else
      search.run
      @pledges = search.solved_results
      @result_ids = search.results.ids
      @result_count = search.unscoped_results.count
    end

    @pledges = serialize @pledges

    respond_to do |format|
      format.html do
      end
      format.json do
        render json: {
          status: 'success', query: search.query, pledges: @pledges,
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
    @pledge = Pledge.find(params[:id])
    authorize @pledge
    @pledge.destroy!
    flash[:success] = t('.success')
    redirect_to profile_path
  end

  # single-purpose action with which the initiator requests approval of their
  # draft
  def finalize
    @pledge = Pledge.find(params['id'])
    authorize @pledge
    @pledge.finalize!
    AdminMailer.new_pledge(@pledge.id).deliver_later
    redirect_to pledge_path(id: @pledge.id)
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
  end

  def create_success!
    @form.save
    sign_in @form.model.initiator unless current_user
    respond_to do |format|
      format.json do
        render(json: {
          status: 'success',
          redirect: commit_based_return_url,
          changes: { pledge: @form.model }
        })
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
      format.json { render json: { status: 'formErrors', errors: @form.errors.messages } }
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
          redirect: commit_based_return_url,
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
      },
      id: params['id'],
      tags: Tag.all
    }
  end
end
