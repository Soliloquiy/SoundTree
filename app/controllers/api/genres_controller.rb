require 'pp'
require 'rspotify'
#require './spotify_genres'

class Api::GenresController < ApplicationController

  def index


    @spotify_genres = {

      rock: ["Classic Rock",
        "Progressive Rock",
        "Hard Rock",
        "Alternative",
        "Grunge"],

      metal: [
        "Metal",
        "Classic Metal",
        "Thrash Metal",
        "Death Metal",
        "Progressive Metal",
        "Symphonic Metal",
        "Doom Metal",
        "Folk Metal"
      ],

      roots: ["folk"],

      country: ["Country"],

      hiphop: ["Hip Hop"],

      classical: ["Classical"],

      pop: ["Pop", "Power Pop"],

      punk: ["Punk"],

      blues: ["Blues"],

      jazz: ["Jazz", "Jazz Fusion"],

      caribbean: ["Reggae"],

      funk: ["Funk"],

      instrumental: ["Instrumental"]
    }

    #@genres = RSpotify::Category.list(limit: 50)
    # genres_from_spotify = {}
    # @spotify_genres.each do |key, value| 
    #   genre = RSpotify::Category.find(key.to_s)
    #   genres_from_spotify[key.to_s] = genre
    # end

    # @genres = RSpotify::Category.find('metal')
    # render json: genres_from_spotify
    
    @genres = Genre.all
    render json: @genres

  end

end
