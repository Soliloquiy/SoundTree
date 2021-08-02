class AddSubgenreToUsergenres < ActiveRecord::Migration[6.1]
  def change
    add_reference :usergenres, :subgenre, null: false, foreign_key: true
  end
end
