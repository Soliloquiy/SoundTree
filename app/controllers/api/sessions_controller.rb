class Api::SessionsController < ApplicationController
  
  def new 
  end

  def create

    puts "**** #{params[:email]}"
    puts "**** #{params[:password]}"

    if user = User.authenticate_with_credentials(params[:email], params[:password])
      session[:user_id] = user.id
      redirect_to '/'
    else
      redirect_to '/api/login'
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/api/login'
  end
  
end
