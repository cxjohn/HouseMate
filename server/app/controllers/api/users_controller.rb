class Api::UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def create
    # puts "params: #{user_params}"
    # puts "user in server : #{user.inspect}"
    user = User.new(user_params)
    if user.save
      new_user_id = user.id
      payload = {user_id: user.id}
      token = encode_token(payload)
      render json: {
        user: user,
        jwt: token,
        user_id: new_user_id,
        history: recent_activity(new_user_id),
        summary: user_summary(new_user_id),
        settle: settlement(user.id)
      }
    else
      # error = "USER NOT SAVED"
      render json: {errors: user.errors.full_messages}, status: :not_acceptable
    end
  end
  # byebug
  def update
    user_update = params.require(:user).permit(:user_id, :first_name, :last_name, :email, :profile_pic)
    user = User.find(user_update[:user_id])
    if user_update[:profile_pic]
      if user.update(profile_pic: user_update[:profile_pic])
        render json: {
          user: user
        }
      else
        render json: {errors: user.errors.full_messages}, status: :not_acceptable
      end
    else  
      if user.update(first_name: user_update[:first_name], last_name: user_update[:last_name], email: user_update[:email])
        render json: {
          user: user
        }
      else
        render json: {errors: user.errors.full_messages}, status: :not_acceptable
      end
    end
  end

  private
  def user_params
    params.require(:user).permit(
      :first_name,
      :last_name,
      :email,
      :password,
      :password_confirmation
      )
  end
end