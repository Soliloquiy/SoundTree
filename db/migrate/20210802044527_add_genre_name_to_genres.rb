class AddGenreNameToGenres < ActiveRecord::Migration[6.1]
  def change
    add_column :genres, :genre_name, :string
  end
end
