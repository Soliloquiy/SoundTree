class CreateUsergenres < ActiveRecord::Migration[5.2]
  def change
    create_table :usergenres do |t|

      t.timestamps
    end
  end
end
