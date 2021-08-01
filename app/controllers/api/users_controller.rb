require 'pp'
require 'rspotify'

class Api::UsersController < ApplicationController

  # Now you can access playlists in detail, browse featured content and more
  def index
    RSpotify.authenticate(ENV["client_id"], ENV["client_secret"])
    @playlists = RSpotify::User.find('phil_bsg').playlists
    render json: @playlists
  end

end
