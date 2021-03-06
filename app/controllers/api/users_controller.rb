require 'pp'
require 'rspotify'

class Api::UsersController < ApplicationController

  def new
    user = User.new()
  end

  def create
    
    user = User.new(user_params)

    if user.save
      session[:user_id] = user.id
    else
      redirect_to '/api/signup'
    end
  end
  

  private

  def user_params
    params.require(:user).permit(
      :username,
      :email,
      :password,
      :avatar
    )
  end

end
