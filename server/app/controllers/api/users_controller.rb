class Api::UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def create
    puts "params: #{user_params}"
    user = User.new(user_params)
    puts "user in server : #{user.inspect}"
    if user.save
      render json: user
    else
      error = "USER NOT SAVED"
      render json: error
    end
  end
  # byebug

  private
  def user_params
    params.require(:user).permit(
      :first_name,
      :last_name,
      :email,
      :password_digest
      )
  end
end
