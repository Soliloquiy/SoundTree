class Api::SubgenresController < ApplicationController
  def index
    @subgenres = Subgenre.all
    render json: @subgenres
    
  end
end
