Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'pages#home'
  resources :videos
  # get 'about', to: 'pages#about'
  # get 'contact', to: 'pages#contact'

end
