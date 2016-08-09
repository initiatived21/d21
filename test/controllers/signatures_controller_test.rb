require_relative '../test_helper'

describe SignaturesController do
  describe "POST 'create'" do
    describe 'when sending valid params' do
      let(:signature_params) do
        signatures(:basic).attributes
      end

      it 'should save, send a mail and generate a hash' do
        Signature.any_instance.expects(:save)
        Signature.any_instance.expects(:confirmation_hash=)
        SignerMailer.expect_chain(:signature_created, :deliver_later)
        post :create, params: { locale: 'de', id: 1, signature: signature_params }
        assert_response 302
        assert_redirected_to '/de/pledges/1'
      end

      it 'should also save and render for JSON' do
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

  describe "GET 'confirm'" do
    let(:signature) do
      FactoryGirl.create(:signature, confirmation_hash: 'correct')
    end

    it 'should fail when given the wrong hash' do
      assert_raises(Pundit::NotAuthorizedError) do
        get :confirm, params: { id: signature.id, locale: :de, hash: 'false' }
      end
    end

    it 'should succeed when given the correct hash' do
      get :confirm, params: { id: signature.id, locale: :de, hash: 'correct' }
      assert_response 302
    end
  end
end
