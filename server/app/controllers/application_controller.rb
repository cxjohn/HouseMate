class ApplicationController < ActionController::API
  # before_action :require_login
  def encode_token(payload)
    JWT.encode(payload, 'Jasi Toor')
  end

  def auth_header
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      begin
        JWT.decode(token, 'Jasi Toor', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        []
      end
    end
  end
  
  def session_user
    decoded_hash = decoded_token
    puts decoded_hash.class
    if !decoded_hash.empty?
      user_id = decoded_hash[0]['user_id']
      @user = User.find_by(id: user_id)
    else
      nil
    end
  end

  # def logged_in?
  #   !!session_user
  # end

  # def require_login
  #   render json: {message: 'Please Login'}, status: :unauthorized unless logged_in?
  # end

  # recent activity data
  def recent_activity (new_user_id)
    # we have access to user.id
    user_id = new_user_id || session_user.id
    # user_id = 3
    # go to shares table for this user.id
    shares = Share.where(user_id: user_id).order(created_at: :desc)
    activities = [];
    # and get activity_id
    # and get amount_owed 
    # and get created_at
    # user_first_name = User.find(user_id).first_name
    # user_last_name = User.find(user_id).last_name

    shares.each do |share|
      activities.push([share.activity_id, share.amount_owed, share.created_at])
    end
    # use that activity_id and go to activities table
    history = activities.map(&:clone)
    activities.each_with_index do |activity, index|
      transaction = Activity.find(activity[0])
    # if it is a settlement i.e. in is_expense is false in transaction
      history[index].push(transaction.description) # new line added
  
      if transaction.is_expense
        # and get description
        # history[index].push(transaction.description) # this works
        # and get the user_id who charged/paid
        first_name = User.find(transaction.user_id).first_name
        last_name = User.find(transaction.user_id).last_name
        # profile_pic = User.find(transaction.user_id).profile_pic # this works
        history[index].push(first_name)
        history[index].push(last_name)
        # history[index].push(transaction.user_id) # this works
        # history[index].push(profile_pic) # this works
      else
    # then we want to get the name opposite of yours from the shares table
        settlement_between = Share.where(activity_id: activity[0]) # new line added
        if settlement_between[0].user_id == user_id
          first_name = User.find(settlement_between[1].user_id).first_name
          last_name = User.find(settlement_between[1].user_id).last_name
          history[index].push(first_name)
          history[index].push(last_name)
        else
          first_name = User.find(settlement_between[0].user_id).first_name
          last_name = User.find(settlement_between[0].user_id).last_name
          history[index].push(first_name)
          history[index].push(last_name)
        end
      end

      profile_pic = User.find(transaction.user_id).profile_pic # new line added
      history[index].push(transaction.user_id) # new line added
      history[index].push(profile_pic) # new line added
      # history[index].push(settlement_between)
    end

    # order by most recent
    # user id is history[index][4]
    history
  end
  
  # recent activity data
  # we have access to user.id
  # go to shares table with this user.id
  
  # sum all amount owed with user in user_id
  # for each share with user_id === activity.user_id && isExp, sum
  # net sums, if positive net amount owed, and vice versa
  
  def user_summary (new_user_id)
    user_id = new_user_id || session_user.id
    # user_id = session_user.id
    # shares = Share.where(user_id: user_id) can we sum
    total = Share.where(user_id: user_id).sum(:amount_owed_cents)
    total
  end

  def settlement (new_user_id)
    user_id = new_user_id || session_user.id
    debt_array = Share.where("user_id = ? AND amount_owed_cents > ?", user_id, 0)
    owing = {}
    # owing = []
    # owing = { person1: 50, person2: 77 }
    debt_array.each do |debt|
      #  each debt has debt.amount_owed_cents and debt.activity_id
      owe_to = Activity.find(debt.activity_id)
      # owe.user_id is the person who paid
      # add a key of user id = owe_to.user_id
      # check if it already exists
      # if yes, add to the value, if not then initialize key
      
      if (owing[owe_to.user_id])
        owing[owe_to.user_id][0] += debt.amount_owed_cents
      else
        owing[owe_to.user_id] = [debt.amount_owed_cents]
        first_name = User.find(owe_to.user_id).first_name
        last_name = User.find(owe_to.user_id).last_name
        owing[owe_to.user_id].push(first_name)
        owing[owe_to.user_id].push(last_name)
      end
    end
    
# search shares.user_id === user.id 
# look in activity, add shares.amount to activity.user_id
    lend_array = Share.where("user_id = ? AND amount_owed_cents < ?", user_id, 0)
    lend_array.each do |lend|
    # use lend.activity_id and find other user_ids with that particular activity_id
      people_loaned_money_to_array = Share.where(activity_id: lend.activity_id)
      # another loop on people array
      people_loaned_money_to_array.each do |row|
        if (row.user_id != user_id)
          if (owing[row.user_id])
            owing[row.user_id][0] -= row.amount_owed_cents
          else 
            owing[row.user_id] = [-row.amount_owed_cents]
            first_name = User.find(row.user_id).first_name
            last_name = User.find(row.user_id).last_name
            owing[row.user_id].push(first_name)
            owing[row.user_id].push(last_name)
          end
        end
      end
    end
    # owing
    # we need to check wher amount owed is zero
    # if zero do not add in the array 
    owing_array = []
    owing.each do | key, value |
      value.unshift(key)
      owing_array.push(value) unless value[1] == 0
    end

  owing_array

  end

  def friends_list(new_user_id)
    user_id = new_user_id || session_user.id

    friends = Friend.find_by(user_id: user_id)
  # now our friends list array in stored in friends.friends_list
    friends_list = []
    friends && friends.friends_list.each do |friend|
  #  we want first_name and last_name from User table where user_id = friend
      first_name = User.find(friend).first_name
      last_name = User.find(friend).last_name
      friends_list.push([friend, first_name, last_name])
    end
    friends_list
  end

  def add_friend(user_id, new_friend)
    # friendship = params.require(:friend).permit(:user_id, :friends_list)
    logged_user_id = user_id
    # friend_to_be_added = new_friend
    # new_friend = User.find_by(email: friendship[:friends_list])
    # logged in user id is same as the new_friend id then show error
    
    # if new_friend
      # if new_friend.id != logged_user_id
        # logged in user
        user = Friend.find_by(user_id: logged_user_id)
        if user
          user.friends_list.push(new_friend.id)
          # new friend is the friend being added
          # new_friend.friends_list.push(user.id)
        else
          friend = Friend.new(user_id: logged_user_id)
          friend.friends_list.push(new_friend.id)
        end

        if user && user.save || friend.save
          # render json: {
          #   friends_list: friends_list(logged_user_id)
          # }
          list_of_friends = friends_list(logged_user_id)
        else
          # render json: {errors: friend.errors.full_messages}, status: :not_acceptable
          # {errors: friend.errors.full_messages}
          nil
        end
      # else
      #   render json: {error: message}, status: :not_acceptable
      # end
    # else
    #     message = "This e-mail is not registered!"
    #     render json: {error: message}, status: :not_acceptable
    # end
  end

  def group_list(new_user_id)
    user_id = new_user_id || session_user.id

    memberships = Membership.where(user_id: user_id)
  # now our friends list array in stored in friends.friends_list
    groups_list = []
    memberships && memberships.each do |membership|
  #  # we want first_name and last_name from User table where user_id = friend
      group_name = Group.find(membership.group_id).name
  #     # last_name = User.find(friend).last_name
      groups_list.push([membership.group_id, group_name])
    end
    # memberships
    groups_list
  end

end