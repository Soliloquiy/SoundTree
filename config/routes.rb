Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do 
    
      resources :genres do
        get :genres
      end
      resources :users do
        get :users
      end
      resources :subgenres do
        get :subgenres
      end
      resources :posts do
        get :posts
      end
      resources :recommendations do
        get :posts
      end

  end

  # get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
  #   !request.xhr? && request.format.html?
  # end

end
