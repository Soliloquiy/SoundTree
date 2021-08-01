class Post < ApplicationRecord
  belongs_to :user
  belongs_to :subgenre
  has_many :post
end
