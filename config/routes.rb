Rails.application.routes.draw do
  # get 'home/show'

  # match 'auth/:provider/callback', to: 'sessions#create', via: [:get, :post]
  # match 'auth/failure', to: redirect('/'), via: [:get, :post]

  root to: 'static_pages#root'

  resources :users
  resource :session
  resources :adventures
  resources :pages

  namespace :api, defaults: { format: :json } do
    resources :adventures, only: [:index, :show, :create, :update, :destroy]
    resources :users, only: [:index, :show, :create, :update]
  end

  # get '/users', to: 'users#index', as: 'users'
  # post '/users', to: 'users#create'
end
