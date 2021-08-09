class AddUriToSongs < ActiveRecord::Migration[6.1]
  def change
    add_column :songs, :uri, :string
  end
end
