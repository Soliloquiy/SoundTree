class Api::SessionsController < ApplicationController

  def index
  end
  
  def new 
  end

  def create

    puts "**** #{params[:email]}"
    puts "**** #{params[:password]}"

    if user = User.authenticate_with_credentials(params[:email], params[:password])
      session[:user_id] = user.id
      puts " im session id: #{session[:user_id]}"
      puts " session inspect: #{session.inspect}"
      render json: user
    else
      render json: {
        error: "user doesn't exist",
        status: 400
      }, status: 400
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/api/login'
  end
  
end
