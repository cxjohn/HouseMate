Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :users
    resources :activities
    # resources :shares
    resources :friends
    resources :mails
    resources :groups
    post "login", to: "sessions#login"
    get "auto_login", to: "sessions#auto_login"
    get "user_is_authed", to: "sessions#user_is_authed"
  end

end