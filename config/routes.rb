Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  root to: 'pages#locale_forward'

  scope ':locale', locale: /de|en/ do
    devise_for :users

    get '/404' => 'pages#not_found'

    # Pages
    get '/' => 'pages#home', as: :home
    get '/faq' => 'pages#faq', as: :faq
    get '/impressum' => 'pages#impressum', as: :impressum
    get '/terms' => 'pages#terms', as: :terms
    get '/privacy' => 'pages#privacy', as: :privacy
    get '/contact' => 'pages#contact', as: :contact
    get '/howitworks' => 'pages#howitworks', as: :howitworks
    get '/about' => 'pages#about', as: :about
    get '/press' => 'pages#press', as: :press

    get '/users/profile' => 'users#profile', as: :profile

    # RESTful resources
    resources :pledges do
      member do
        patch '/finalize' => 'pledges#finalize', as: :finalize
        resources :signatures, only: [:create]
        resources :comments, only: [:create]
        resources :updates, only: [:create]
        resources :reports, only: [:create]
      end
    end
    resources :comments, only: [:update]
    resources :users, only: [:update]
    get '/signatures/:id/confirm/:hash', to: 'signatures#confirm',
                                         as: :confirm_signature
    get '/signatures/:id/delete/:hash',  to: 'signatures#destroy',
                                         as: :destroy_signature

    # All other localized paths => localized 404
    match '*path', to: 'pages#not_found', via: :all
  end

  # Serve websocket cable requests in-process
  mount ActionCable.server => '/cable'

  # Sidekiq Web UI
  require 'sidekiq/web'
  require 'sidekiq/cron/web'
  authenticate :admin_user do
    mount Sidekiq::Web => '/sidekiq'
  end

  # Unlocalized unknown paths are forwarded to the German 404
  match '*path', to: 'pages#not_found', via: :all
end
