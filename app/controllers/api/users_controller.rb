require 'pp'
require 'rspotify'

class Api::UsersController < ApplicationController

  def new
    @user = User.new()
  end

  def create
    
    @user = User.new(user_params)
    @user.save

    # if @user.save
    #   session[:user_id] = user.id
    #   redirect_to '/'
    # else
    #   redirect_to '/api/signup'
    # end
  end

  private

  def user_params

    puts params.inspect
    puts "-------------"
    puts params[:user].inspect


    params.require(:user).permit(
      :username,
      :email,
      :password,
      :avatar
    )
  end

end
