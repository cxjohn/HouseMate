class Api::FriendsController < ApplicationController


  def create
    friendship = params.require(:friend).permit(:user_id, :friends_list)
    new_friend = User.find_by(email: friendship[:friends_list])
    if new_friend
      list = add_friend(friendship[:user_id], new_friend)
      if new_friend.id != friendship[:user_id]
        id = new_friend.id
        new_friend = User.find(friendship[:user_id])
        add_friend(id, new_friend)
# send an array back of friends list
        unless list 
          render json: {friends_list: list}
        else
          render json: {message: "works"}
        end
          
      else
        message = "You cannot add your own e-mail!"
        render json: {error: message}, status: :not_acceptable
      end


    else
        message = "This e-mail is not registered!"
        render json: {error: message}, status: :not_acceptable
    end
    # switch user_ids
  
    
    # # logged in user id is same as the new_friend id then show error
    
    
    #     # logged in user
    #     user = Friend.find_by(user_id: friendship[:user_id])
    #     if user
    #       user.friends_list.push(new_friend.id)
    #       # new friend is the friend being added
    #       # new_friend.friends_list.push(user.id)
    #     else
    #       friend = Friend.new(user_id: friendship[:user_id])
    #       friend.friends_list.push(new_friend.id)
    #     end

    #     if user && user.save || friend.save
    #       render json: {
    #         friends_list: friends_list(friendship[:user_id])
    #       }
    #     else
    #       render json: {errors: friend.errors.full_messages}, status: :not_acceptable
    #     end
   

end
end