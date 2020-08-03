Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: { format: :json } do  # it's like creating a folder! 
    resources :users, only: [:create, :show] do
      resources :bookings, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :spots
    resources :reviews, only: [:create, :index]
    resources :bookings, only: [:create, :show, :update, :destroy]
  end
end
