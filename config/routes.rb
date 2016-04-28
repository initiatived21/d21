Rails.application.routes.draw do
  root to: 'pages#locale_forward'

  scope ':locale', locale: /de|en/ do
    get '/404' => 'pages#not_found'

    # Pages
    get '/' => 'pages#home', as: :home
    get '/faq' => 'pages#faq', as: :faq
    get '/impressum' => 'pages#impressum', as: :impressum

    # RESTful resources
    resources :pledges, only: [:new, :create, :show, :index]

    # All other localized paths => localized 404
    match '*path', to: 'pages#not_found', via: :all
  end

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'

  # Unlocalized unknown paths are forwarded to the German 404
  match '*path', to: 'pages#not_found', via: :all
end
