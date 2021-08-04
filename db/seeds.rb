# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'rspotify'

@spotify_genres = {

  rock: ["Rock",
    "Classic Rock",
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

  roots: ["Roots",
  "folk", 
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

  caribbean: ["Caribbean",
  "Reggae",
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
  new_genre = Genre.create!({
    name: sgenre.id
  })
 
  subgenre.each do |genre_child|
    new_subgenre = Subgenre.create!({
      name: genre_child,
      genre_id: new_genre.id
    })

    # t.string "name"
    # t.string "album"
    # t.string "artist"
    # t.integer "subgenre_id"
    # t.string "sub_genre_name"

    subgenre_songs = RSpotify::Track.search(genre_child.to_s)
    subgenre_songs.each do |genre_song|
      Song.create!({
        subgenre_id: new_subgenre.id,
        sub_genre_name: new_subgenre.name,
        name: genre_song.name,
        album: genre_song.album.name,
        artist: genre_song.artists[0].name
      })
    end

  end

end
