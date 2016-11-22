require_relative '../test_helper'

describe UpdatesController do
  before do
    # ignore authentication
    UpdatePolicy.any_instance.stubs(:create?).returns true
  end

  describe "POST 'create'" do
    describe 'when sending valid params' do
      let(:update_params) do
        updates(:basic).attributes
      end

      def expect_new_pledge_updates
        stub = OpenStruct.new
        stub.expects(:deliver_now).once # for admin
        stub.expects(:deliver_later).once # for the 1 signature of the pledge
        SignerMailer.expects(:new_pledge_update).twice.returns(stub)
      end

      it 'should save and redirect for HTML' do
        Update.any_instance.expects(:save)
        expect_new_pledge_updates

        post :create, params: { locale: 'de', id: 1, update: update_params }
        assert_response 302
        assert_redirected_to '/de/pledges/1'
      end

      it 'should save and render for JSON' do
        Update.any_instance.expects(:save)
        expect_new_pledge_updates

        post :create, format: :json,
                      params: { locale: 'de', id: 1, update: update_params }
        assert_response 200
      end
    end

    describe 'when sending invalid params' do
      it 'wont save and redirect for HTML' do
        Update.any_instance.expects(:save).never
        post :create, params: { locale: 'de', id: 1, update: { foo: 'bar' } }
        assert_response 302
        assert_redirected_to '/de/pledges/1'
      end

      it 'wont save and render for JSON' do
        Update.any_instance.expects(:save).never
        post :create, format: :json,
                      params: { locale: 'de', id: 1, update: { foo: 'bar' } }
        assert_response 200
      end
    end
  end
end
