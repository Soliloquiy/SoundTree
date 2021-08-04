class AddGenreIdToSongs < ActiveRecord::Migration[6.1]
  def change
    add_column :songs, :genre_id, :int
  end
end
