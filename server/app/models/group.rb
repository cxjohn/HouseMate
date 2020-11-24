class Group < ApplicationRecord
  has_many :activities
  has_many :memberships
end
