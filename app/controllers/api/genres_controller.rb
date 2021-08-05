require 'pp'
require 'rspotify'
#require './spotify_genres'

class Api::GenresController < ApplicationController

  def index
    
    @genres = Genre.all
    
    render json: @genres, include: [:subgenres]
    
    
  end

  def show
    @genres = Genre.all
    render json: @genres, include: {subgenres: {include: {posts: {}}}}

  end

end
