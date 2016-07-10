Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users

  root to: 'pages#locale_forward'

  scope ':locale', locale: /de|en/ do
    get '/404' => 'pages#not_found'

    # Pages
    get '/' => 'pages#home', as: :home
    get '/faq' => 'pages#faq', as: :faq
    get '/impressum' => 'pages#impressum', as: :impressum
    get '/terms' => 'pages#terms', as: :terms
    get '/privacy' => 'pages#privacy', as: :privacy
    get '/contact' => 'pages#contact', as: :contact
    get '/howitworks' => 'pages#howitworks', as: :howitworks
    get '/sitemap' => 'pages#sitemap', as: :sitemap

    # RESTful resources
    resources :pledges, only: [:new, :create, :show, :index] do
      member do
        resources :signatures, only: [:create]
        resources :comments, only: [:create, :update]
      end
    end

    # All other localized paths => localized 404
    match '*path', to: 'pages#not_found', via: :all
  end

  # Serve websocket cable requests in-process
  mount ActionCable.server => '/cable'

  get 'hello_world', to: 'hello_world#index'

  # Unlocalized unknown paths are forwarded to the German 404
  match '*path', to: 'pages#not_found', via: :all
end
