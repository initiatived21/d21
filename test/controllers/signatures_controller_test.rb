require_relative '../test_helper'

describe SignaturesController do
  describe "POST 'create'" do
    describe 'when sending valid params' do
      let(:signature_params) do
        signatures(:basic).attributes
      end

      it 'should save and redirect for HTML' do
        Signature.any_instance.expects(:save)
        post :create, params: { locale: 'de', id: 1, signature: signature_params }
        assert_response 302
        assert_redirected_to '/de/pledges/1'
      end

      it 'should save and render for JSON' do
        Signature.any_instance.expects(:save)
        post :create, format: :json,
                      params: { locale: 'de', id: 1, signature: signature_params }
        assert_response 200
      end
    end

    describe 'when sending invalid params' do
      it 'wont save and redirect for HTML' do
        Signature.any_instance.expects(:save).never
        post :create, params: { locale: 'de', id: 1, signature: { foo: 'bar' } }
        assert_response 302
        assert_redirected_to '/de/pledges/1'
      end

      it 'wont save and render for JSON' do
        Signature.any_instance.expects(:save).never
        post :create, format: :json,
                      params: { locale: 'de', id: 1, signature: { foo: 'bar' } }
        assert_response 200
      end
    end
  end
end
