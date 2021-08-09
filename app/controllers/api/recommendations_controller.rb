class Api::RecommendationsController < ApplicationController
  def index
    @recommendations = RSpotify::Track.search("metal")
    render json: @recommendations
  end
end
