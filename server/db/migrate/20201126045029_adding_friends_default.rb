class AddingFriendsDefault < ActiveRecord::Migration[6.0]
  def change
    change_column_default :friends, :friends_list, []
  end
end
