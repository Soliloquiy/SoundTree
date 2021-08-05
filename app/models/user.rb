class User < ApplicationRecord
  has_many :subgenre, through: :usergenre
  has_many :post

  validates :username, presence: true
  validates :email, presence: true, uniqueness: { case_sensitive: false}
  validates :password, presence: true
  
  # has_secure_password

  def self.authenticate_with_credentials(incomingemail, password)
    user = User.find_by email: incomingemail
    puts " im user authenticate: #{user.inspect}"
    # if user #&& user.authenticate(password)
     
    # else
    #   nil
    # end
    return user
  end
end
