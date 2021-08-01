class Api::SubgenresController < ApplicationController
  def index
    @genres = RSpotify::Category.list(limit: 50)
    render json: @genres
  end
end
