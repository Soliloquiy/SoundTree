class AddLikeCountToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :like_count, :int
  end
end
