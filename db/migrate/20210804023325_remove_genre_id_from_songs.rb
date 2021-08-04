class RemoveGenreIdFromSongs < ActiveRecord::Migration[6.1]
  def change
    remove_column :songs, :genre_id, :int
  end
end
