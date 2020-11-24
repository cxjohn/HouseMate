class CreateFriends < ActiveRecord::Migration[6.0]
  def change
    create_table :friends do |t|
      t.references :user, foreign_key: true
      t.integer 'friends_list', array: true
      t.timestamps
    end
  end
end
