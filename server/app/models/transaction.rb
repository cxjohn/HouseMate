class Transaction < ApplicationRecord
  belongs_to :user
  belongs_to :group, optional: true
  monetize :amount_cents, numericality: true
end
