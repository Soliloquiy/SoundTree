class AddHrefToSongs < ActiveRecord::Migration[6.1]
  def change
    add_column :songs, :href, :string
  end
end
