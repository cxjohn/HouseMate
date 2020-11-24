class Transaction < ApplicationRecord
  belongs_to :user
  belongs_to :group, optional: true
  has_many :shares
  monetize :amount_cents, numericality: true
end
