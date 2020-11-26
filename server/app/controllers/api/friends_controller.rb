class Api::FriendsController < ApplicationController


  def create
    friendship = params.require(:friend).permit(:user_id, :friends_list)
    new_friend = User.find_by(email: friendship[:friends_list])
    if new_friend
      user = Friend.find_by(user_id: friendship[:user_id])
      if user
        user.friends_list.push(new_friend.id)
      else
        friend = Friend.new(user_id: friendship[:user_id])
        friend.friends_list.push(new_friend.id)
      end

      if user.save || friend.save
        render json: {
          friends_list: friends_list(friendship[:user_id])
        }
      else
        render json: {errors: friend.errors.full_messages}, status: :not_acceptable
      end
    else
        message = "This e-mail is not registered!"
        render json: {error: message}, status: :not_acceptable
    end
  end
end