class AddSubGenreToSongs < ActiveRecord::Migration[6.1]
  def change
    add_column :songs, :sub_genre, :string
  end
end
