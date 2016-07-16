class CommentsController < ApplicationController
  # skip_before_action :verify_authenticity_token, only: [:create, :update],
  #                                                if: :json_request?

  def create
    @comment = Comment.new
    @comment.pledge_id = params['id']
    authorize @comment
    @form = NewCommentForm.new(@comment)
    if @form.validate(create_comment_params)
      validate_success!
    else
      validate_failed!
    end
  end

  def update
    @comment = Comment.find(params['id'])
    authorize @comment
    @form = EditCommentForm.new(@comment)
    if @form.validate(update_comment_params)
      validate_success!
    else
      validate_failed!
    end
  end

  private

  def validate_success!
    @form.save
    respond_to do |format|
      format.html do
        redirect_to pledge_path(@comment.pledge, locale: I18n.locale)
      end
      format.json do
        render json: { status: 'success', changes: { comments: @form.model } }
      end
    end
  end

  def validate_failed!
    respond_to do |format|
      format.html do
        # TODO: good non-js alternative
        flash.alert = @form.errors
        redirect_to pledge_path(id: @comment.pledge.id, locale: I18n.locale)
      end
      format.json do
        render json: { status: 'formErrors', errors: @form.errors.messages }
      end
    end
  end

  def create_comment_params
    params.require(:comment).permit(:content)
  end

  def update_comment_params
    params.require(:comment).permit(:response)
  end
end
