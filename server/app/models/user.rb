class User < ApplicationRecord
  has_secure_password
  has_many :activities
  has_many :memberships
  has_many :friends
  has_many :shares

  # validates :first_name,
  #           :last_name,
  #           :password_confirmation,
  #           presence: true
  validates :email, uniqueness: { case_sensitive: false }
  # validates :password, presence: true, length: { minimum: 3 } 

end