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
    
    resources :songs do
      get :songs
    end

    resources :posts do
      get :posts
    end

    resources :usergenres do
      get :usergenres
    end

    resources :recommendations do
      get :recommendations
    end

    get '/signup' => 'users#new'
    post '/users' => 'users#create'

    get '/profile' => 'sessions#index'
    post '/login' => 'sessions#create'
    get '/login' => 'sessions#new'
    get '/logout' => 'sessions#destroy'

    get "/forum" => "posts#index"
    post "/forum" => "posts#create"


    post "/follow" => "usergenres#create"

  end



  # get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
  #   !request.xhr? && request.format.html?
  # end

end
