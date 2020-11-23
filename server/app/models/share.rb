class Share < ApplicationRecord
  monetize :amount_owed_cents, numericality: true
end
