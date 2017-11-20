Rails.application.routes.draw do
  # get 'home/show'

  # match 'auth/:provider/callback', to: 'sessions#create', via: [:get, :post]
  # match 'auth/failure', to: redirect('/'), via: [:get, :post]

  root to: 'adventures#index'

  resources :users
  resource :session
  resources :adventures
  resources :pages

  # get '/users', to: 'users#index', as: 'users'
  # post '/users', to: 'users#create'
end
