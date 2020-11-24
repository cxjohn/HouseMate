class User < ApplicationRecord
  has_secure_password
  has_many :activities
  has_many :memberships
  has_many :friends
  has_many :shares
end
