class User < ApplicationRecord
  has_many :subgenre through :usergenre
  has_many :post

  has_secure_password

  def self.authenticate_with_credentials(email, password)
    user = User.find_by(:email => email.strip.downcase)

    if user && user.authenticate(password)
      user
    else
      nil
    end
    
  end
end
