class Api::SessionsController < ApplicationController
  #skip_before_action :require_login, only: [:login, :auto_login]

  def login
    user  = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password_digest])
      payload = {user_id: user.id}
      token = encode_token(payload)
      ## remove password from user hash ##
      clean_user = {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        profile_pic: user.profile_pic,
        theme: user.theme,
        currency: user.currency,
        default_house: user.default_house
      }

      render json: {
        user: clean_user,
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
      # remove password_digest, created_at, updated_at from user
      # user = { 
        # id, first_name, last_name, email, profile_pic, theme, currency, default_house = 
        # session_user.values_at(:id, :first_name, :last_name, :email, :profile_pic, :theme, :currency, :default_house )
      # }
      user = {
        id: session_user.id,
        first_name: session_user.first_name,
        last_name: session_user.last_name,
        email: session_user.email,
        profile_pic: session_user.profile_pic,
        theme: session_user.theme,
        currency: session_user.currency,
        default_house: session_user.default_house
      }

      render json: {
        user: user,
        history: recent_activity(nil),
        summary: user_summary(nil),
        settle: settlement(nil),
        friends_list: friends_list(nil),
        groups_list: group_list(nil)
      }
      # render json: session_user # also send recent activity data
    else
      render json: {errors: "No User Logged In"}
    end
  end

end
