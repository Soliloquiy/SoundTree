class AddNameToSubgenres < ActiveRecord::Migration[6.1]
  def change
    add_column :subgenres, :name, :string
  end
end
