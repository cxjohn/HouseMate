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