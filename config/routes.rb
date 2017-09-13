Rails.application.routes.draw do
  # resources :users

  get '/users', to: 'users#index', as: 'users'
  post '/users', to: 'users#create'
end
