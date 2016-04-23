require_relative '../test_helper'

describe PagesController do
  describe "GET 'home'" do
    it 'should work' do
      get :home, params: { locale: 'de' }
      assert_response :success
    end
  end

  describe "GET 'faq'" do
    it 'should work' do
      get :faq, params: { locale: 'de' }
      assert_response :success
    end
  end

  describe "GET 'impressum'" do
    it 'should work' do
      get :impressum, params: { locale: 'de' }
      assert_response :success
    end
  end

  describe "GET 'not_found'" do
    it 'should work and return 404' do
      get :not_found, params: { locale: 'de' }
      assert_response 404
    end
  end

  describe "GET 'locale_forward'" do
    it 'should redirect to German home' do
      get :locale_forward
      assert_response 302
      assert_redirected_to action: :home, locale: 'de'
    end
  end
end
