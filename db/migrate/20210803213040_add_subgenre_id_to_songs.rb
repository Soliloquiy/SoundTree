class AddSubgenreIdToSongs < ActiveRecord::Migration[6.1]
  def change
    add_column :songs, :subgenre_id, :int
  end
end
