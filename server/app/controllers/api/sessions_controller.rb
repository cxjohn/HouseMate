class Api::SessionsController < ApplicationController
  #skip_before_action :require_login, only: [:login, :auto_login]

  def login
    user  = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password_digest])
      payload = {user_id: user.id}
      token = encode_token(payload)
      render json: {
        user: user,
        jwt: token,
        history: recent_activity(user.id),
        summary: user_summary(user.id),
        settle: settlement(user.id),
        friends_list: friends_list(user.id)
        # success: "Welcome back #{user.first_name}"
      }
    else
      render json: {failure: "Log in failed! Email or password invalid!"}
    end
  end

  def auto_login
    if session_user
      # call recent_activity

      render json: {
        user: session_user,
        history: recent_activity(nil),
        summary: user_summary(nil),
        settle: settlement(nil),
        friends_list: friends_list(nil)
      }
      # render json: session_user # also send recent activity data
    else
      render json: {errors: "No User Logged In"}
    end
  end

end
