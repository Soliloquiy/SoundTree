class User < ApplicationRecord
  has_many :subgenre, through: :usergenre
  has_many :post

  validates :username, presence: true
  validates :email, presence: true, uniqueness: { case_sensitive: false}
  validates :password, presence: true
  
  # has_secure_password

  def self.authenticate_with_credentials(email, password)
    user = User.find_by(:email => email.strip.downcase)

    if user #&& user.authenticate(password)
      puts user.inspect
    else
      nil
    end
    
  end
end
