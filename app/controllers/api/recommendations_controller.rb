class Api::RecommendationsController < ApplicationController
  def index
    @recommendations = RSpotify::Recommendations.generate(seed_genres: ['blues', 'country'])
    render json: @recommendations
  end
end
