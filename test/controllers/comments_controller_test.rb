require_relative '../test_helper'

describe CommentsController do
  describe "POST 'create'" do
    describe 'when sending valid params' do
      let(:comment_params) do
        comments(:unanswered).attributes
      end

      it 'should save, send an email and redirect for HTML' do
        Comment.any_instance.expects(:save)
        AdminMailer.expect_chain(:new_question, :deliver_later)
        post :create, params: { locale: 'de', id: 1, comment: comment_params }
        assert_response 302
        assert_redirected_to '/de/pledges/1'
      end

      it 'should save, send an email and render for JSON' do
        Comment.any_instance.expects(:save)
        AdminMailer.expect_chain(:new_question, :deliver_later)
        post :create, format: :json,
                      params: { locale: 'de', id: 1, comment: comment_params }
        assert_response 200
      end
    end

    describe 'when sending invalid params' do
      it 'wont save and redirect for HTML' do
        Comment.any_instance.expects(:save).never
        post :create, params: { locale: 'de', id: 1, comment: { foo: 'bar' } }
        assert_response 302
        assert_redirected_to '/de/pledges/1'
      end

      it 'wont save and render for JSON' do
        Comment.any_instance.expects(:save).never
        post :create, format: :json,
                      params: { locale: 'de', id: 1, comment: { foo: 'bar' } }
        assert_response 200
      end
    end
  end

  describe "PATCH 'update'" do
    let(:comment) { comments(:unanswered) }
    before do
      # ignore authentication
      CommentPolicy.any_instance.stubs(:update?).returns true
    end

    describe 'when sending valid params' do
      let(:comment_params) do
        { response: 'foobar' }
      end

      it 'should save and redirect for HTML' do
        Comment.any_instance.expects(:save)
        patch :update,
              params: { locale: 'de', id: comment.id, comment: comment_params }
        assert_response 302
        assert_redirected_to '/de/pledges/1'
      end

      it 'should save and render for JSON' do
        Comment.any_instance.expects(:save)
        patch :update,
              format: :json,
              params: { locale: 'de', id: comment.id, comment: comment_params }
        assert_response 200
      end
    end

    describe 'when sending invalid params' do
      it 'wont save and redirect for HTML' do
        Comment.any_instance.expects(:save).never
        patch :update,
              params: { locale: 'de', id: comment.id, comment: { foo: 'bar' } }
        assert_response 302
        assert_redirected_to '/de/pledges/1'
      end

      it 'wont save and render for JSON' do
        Comment.any_instance.expects(:save).never
        patch :update,
              format: :json,
              params: { locale: 'de', id: comment.id, comment: { foo: 'bar' } }
        assert_response 200
      end
    end
  end
end
