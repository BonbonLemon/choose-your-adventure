Rails.application.routes.draw do
  match 'auth/:provider/callback', to: 'sessions#create', via: [:get, :post]
  match 'auth/failure', to: redirect('/'), via: [:get, :post]

  root to: 'sessions#new'

  resources :users
  resource :session

  # get '/users', to: 'users#index', as: 'users'
  # post '/users', to: 'users#create'
end
