class ActivitiesColumnRename < ActiveRecord::Migration[6.0]
  def change
    remove_column(:activities, :amount_cents)
    add_monetize(:activities, :amount)
  end
end
