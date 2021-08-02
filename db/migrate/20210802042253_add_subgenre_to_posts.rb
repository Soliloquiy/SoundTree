class AddSubgenreToPosts < ActiveRecord::Migration[6.1]
  def change
    add_reference :posts, :subgenre, null: false, foreign_key: true
  end
end
