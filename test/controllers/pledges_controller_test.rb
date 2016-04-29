require_relative '../test_helper'

describe PledgesController do
  describe "GET 'new'" do
    it 'should work' do
      get :new, params: { locale: 'de' }
      assert_response :success
    end
  end

  describe "GET 'show'" do
    it 'should work' do
      get :show, params: { locale: 'de', id: pledges(:active) }
      assert_response :success
    end
  end

  describe "GET 'index'" do
    it 'should work' do
      get :index, params: { locale: 'de' }
      assert_response :success
    end
  end

  describe "POST 'create'" do
    describe 'when sending valid params' do
      let(:pledge_params) do
        pledges(:active).attributes.merge(
          initiator: users(:pledger).attributes.merge(password: 'abc')
        )
      end

      it 'should save and redirect for HTML' do
        Pledge.any_instance.expects(:save)
        Pledge.any_instance.stubs(:id).returns(2)
        post :create, params: { locale: 'de', pledge: pledge_params }
        assert_response 302
        assert_redirected_to '/de/pledges/2'
      end

      it 'should save and render for JSON' do
        Pledge.any_instance.expects(:save)
        post :create, format: :json,
                      params: { locale: 'de', pledge: pledge_params }
        assert_response 200
      end
    end

    describe 'when sending invalid params' do
      it 'wont save and render for HTML' do
        Pledge.any_instance.expects(:save).never
        post :create, params: { locale: 'de', pledge: { foo: 'bar' } }
        assert_response 200
      end

      it 'wont save and render for JSON' do
        Pledge.any_instance.expects(:save).never
        post :create, format: :json,
                      params: { locale: 'de', pledge: { foo: 'bar' } }
        assert_response 200
      end
    end
  end
end
