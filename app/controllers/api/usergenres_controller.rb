class Api::UsergenresController < ApplicationController
  def index
    @usergenres = Usergenre.all
    render json: @usergenres
  end
end
