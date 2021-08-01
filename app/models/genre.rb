class Genre < ApplicationRecord
  has_many :subgenre

  # def self.new_from_spotify_category(spotify_category)
  #   Category.new(
  #     spotify_id: spotify_category.id,
  #     name: spotify_category.name,
  #   )
  # end

end
