Rails.application.routes.draw do
  resources :users
  resource :session

  # get '/users', to: 'users#index', as: 'users'
  # post '/users', to: 'users#create'
end
