require_relative '../test_helper'

describe PledgesController do
  describe "GET 'new'" do
    it 'should work' do
      get :new, params: { locale: 'de' }
      assert_response :success
    end
  end
end
