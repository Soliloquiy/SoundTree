class RemoveSubrenreIdFromSongs < ActiveRecord::Migration[6.1]
  def change
    remove_column :songs, :subrenre_id, :int
  end
end
