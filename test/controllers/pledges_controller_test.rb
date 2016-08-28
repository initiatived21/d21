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
    it 'should work for an html request' do
      get :index, params: { locale: 'de' }
      assert_response :success
    end

    it 'should work for a json request' do
      get :index, params: { locale: 'de' }, format: 'json'
      assert_response :success
    end
  end

  describe "POST 'create'" do
    describe 'when sending valid params' do
      let(:pledge_params) do
        pledges(:active).attributes.merge(
          initiator: users(:pledger).attributes.merge(
            'email' => 'foo@example.org',
            'password' => 'abc',
            'password_confirmation' => 'abc'
          ),
          deadline: '3333-03-03'
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
        Pledge.any_instance.stubs(:id).returns(123)
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

    describe 'when getting comma-separated tags params' do
      it 'will split them into an array' do
        post :create, params: { locale: 'de', pledge: { tag_ids: '1,2,3' } }
        assert([1, 2, 3], assigns(:form).tag_ids)
      end
    end
  end

  describe 'PATCH finalize' do
    it 'must call finalize! on the pledge with the given id' do
      sign_in users(:pledger)
      spyPledge = Pledge.new(initiator: users(:pledger), id: 99)
      Pledge.stubs(:find).with('99').returns spyPledge
      Pledge.stubs(:find).with(99).returns spyPledge
      spyPledge.expects(:finalize!)

      patch :finalize, params: { locale: 'de', id: '99' }
      assert_response 302
    end
  end
end
