class CreateSubgenres < ActiveRecord::Migration[5.2]
  def change
    create_table :subgenres do |t|

      t.timestamps
    end
  end
end
