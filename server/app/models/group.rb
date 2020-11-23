class Group < ApplicationRecord
  has_many :transactions
  has_many :memberships
end
