Rails.application.routes.draw do
  # get 'home/show'
  # TODO: remove these
  # match 'auth/:provider/callback', to: 'sessions#create', via: [:get, :post]
  # match 'auth/failure', to: redirect('/'), via: [:get, :post]

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :adventures, only: [:index, :show, :create, :update]
    resources :genres, only: [:index, :create]
    resources :pages, only: [:index, :show, :create, :update, :destroy]
    resources :options, only: [:create, :update]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end

  # get '/users', to: 'users#index', as: 'users'
  # post '/users', to: 'users#create'
end
