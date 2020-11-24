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
  def recent_activity
    # we have access to user.id
    # user_id = session_user.id
    user_id = 3
    # go to shares table for this user.id
    shares = Share.where(user_id: user_id).order(created_at: :desc)
    activities = [];
    # and get activity_id
    # and get amount_owed 
    # and get created_at
    shares.each do |share|
      activities.push([share.activity_id, share.amount_owed, share.created_at])
    end
    # use that activity_id and go to activities table
    history = activities.map(&:clone)
    activities.each_with_index do |activity, index|
      transaction = Activity.find(activity[0])
      # and get description
      history[index].push(transaction.description)
      # and get the user_id who charged/paid
      history[index].push(transaction.user_id)
    end
    # order by most recent
    history
  end
  
end
