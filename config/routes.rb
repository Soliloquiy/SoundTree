Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'genres#index'

  namespace :api, defaults: {format: "json"} do 
    
    resources :genres do
      get :genres
    end

    resources :subgenres do
      get :subgenres
    end
    resources :posts do
      get :posts
    end

    resources :recommendations do
      get :recommendations
    end

    post '/users' => 'users#create'
  end

  get 'api/signup' => 'users#new'

  
  get 'api/login' => 'sessions#new'
  post 'api/login' => 'sessions#create'
  get 'api/logout' => 'sessions#destroy'

  get "api/forum" => "posts#index"

  # get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
  #   !request.xhr? && request.format.html?
  # end

end
