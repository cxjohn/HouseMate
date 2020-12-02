class CreateShares < ActiveRecord::Migration[6.0]
  def change
    create_table :shares do |t|
      t.references :user, foreign_key: true
      #t.references :transaction, foreign_key: true
      #t.integer :amount_owed_cents
      t.timestamps
    end
  end
end
