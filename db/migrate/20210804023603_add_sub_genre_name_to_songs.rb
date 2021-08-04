class AddSubGenreNameToSongs < ActiveRecord::Migration[6.1]
  def change
    add_column :songs, :sub_genre_name, :string
  end
end
