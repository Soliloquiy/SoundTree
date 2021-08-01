require 'pp'
require 'rspotify'

class Api::GenresController < ApplicationController

  def index
    @genres = RSpotify::Category.list(limit: 50, offset: 10)
    render json: @genres
  end

end
