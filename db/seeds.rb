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

  roots: ["folk", 
  "Celtic", 
  "Accoustic", 
  "Bluegrass",
  "Maritime"],

  country: ["Country", 
  "Classic Country", 
  "Country Blues", 
  "Country Rock"],

  hiphop: ["Hip Hop",
  "Rap",
  "Boom Bap",
  "Trap",
  "Gangsta Rap",
  "Alternative Rap",
  "Melodic Rap"
],

  classical: ["Classical", 
  "Soundtrack", 
  "Symphonic",
  "Film Scores"],

  pop: ["Pop", 
  "Power Pop", 
  "Top 40", 
  "Top Hits"],

  punk: ["Punk", 
  "Post Punk",
  "Hardcore Punk",
  "Garage Punk"],

  blues: ["Blues", 
  "Rythm & Blues",
  "Country Blues",
  "Blues Rock",
  "Gospel Blues"],

  jazz: ["Jazz", 
  "Jazz Fusion",
  "Acid Jazz",
  "Free Jazz"],

  caribbean: ["Reggae",
  "Reggae Fusion",
  "Reggae Rock"],

  funk: ["Funk",
  "Funk Rock",
  "Jazz Funk"],

  instrumental: ["Instrumental",
  "Instrumental Rock",
  "Instrumental Jazz",
  "Instrumental Metal"]
}

@spotify_genres.each do |genre, subgenre| 

  sgenre = RSpotify::Category.find(genre.to_s)
  newGenre = Genre.create!({
    name: sgenre.id
  })

  subgenre.each do |genre_child|
    Subgenre.create!({
      name: genre_child,
      genre_id: newGenre.id
    })
  end

end
