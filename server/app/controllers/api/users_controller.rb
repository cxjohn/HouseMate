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
      payload = {user_id: user.id}
      token = encode_token(payload)
      render json: {user: user, jwt: token}
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
      :password
      # :password_confirmation
      )
  end
end