class ReplaceForeignKeyInShares < ActiveRecord::Migration[6.0]
  def change
    #remove_foreign_key :shares, :transactions
    #remove_column(:shares, :transaction_id)
    add_reference(:shares, :activity, foreign_key: true)
  end
end
