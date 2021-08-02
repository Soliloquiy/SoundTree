# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'pp'
require 'rspotify'


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

@spotify_genres.each do |key, value| 
  sgenre = RSpotify::Category.find(key.to_s)
  Genre.create!({
    name: sgenre.name
  })
end
