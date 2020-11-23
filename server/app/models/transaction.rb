class Transaction < ApplicationRecord
  belongs_to :user
  belongs_to :group
  monetize :amount_cents, numericality: true
end
