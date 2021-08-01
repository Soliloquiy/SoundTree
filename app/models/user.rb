class User < ApplicationRecord
  has_many :subgenre through :usergenre
  has_many :post
end
