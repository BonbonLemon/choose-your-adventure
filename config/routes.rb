Rails.application.routes.draw do
  root to: 'sessions#new'

  resources :users
  resource :session

  # get '/users', to: 'users#index', as: 'users'
  # post '/users', to: 'users#create'
end
