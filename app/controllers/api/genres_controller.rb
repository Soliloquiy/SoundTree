require 'pp'
require 'rspotify'
#require './spotify_genres'

class Api::GenresController < ApplicationController

  def index
    
    @genres = Genre.all
    render json: @genres

  end

end
