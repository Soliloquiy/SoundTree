class AddUserIdToSongs < ActiveRecord::Migration[6.1]
  def change
    add_column :songs, :user_id, :int
  end
end
