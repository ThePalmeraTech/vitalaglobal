Rails.application.routes.draw do
  # API routes
  namespace :api do
    namespace :v1 do
      resources :profiles, only: [:index, :show, :create, :new] # other actions as needed
      resources :blog_posts, only: [:index, :show]
    end
  end

  # Root route - points to the homepage controller's index action
  root 'homepage#index'
  # Catch-all route for React Router
  # This should be the last route in the file
  get '/*path', to: 'homepage#index'
end
