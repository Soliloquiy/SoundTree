class Subgenre < ApplicationRecord
  belongs_to :genre
  has_many :users, through: :usergenre
  has_many :post
end
