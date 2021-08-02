class RemoveGenreNameFromGenres < ActiveRecord::Migration[6.1]
  def change
    remove_column :genres, :genre_name, :string
  end
end
