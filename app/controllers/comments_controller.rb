class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create],
                                                 if: :json_request?

  def create
    @comment = Comment.new
    @comment.pledge_id = params['id']
    @form = NewCommentForm.new(@comment)
    if @form.validate(comment_params)
      create_success!
    else
      create_failed!
    end
  end

  private

  def create_success!
    @form.save
    respond_to do |format|
      format.html do
        redirect_to pledge_path(@comment.pledge, locale: I18n.locale)
      end
      format.json do
        render json: { status: 'success', added: @form.model }
      end
    end
  end

  def create_failed!
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

  def comment_params
    params.require(:comment).permit(:content)
  end
end
