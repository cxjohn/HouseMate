class SharesColumnRename < ActiveRecord::Migration[6.0]
  def change
    remove_column(:shares, :amount_owed)
    add_monetize(:shares, :amount_owed)
  end
end
