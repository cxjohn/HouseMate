class Api::SharesController < ApplicationController

  def create
    # loop through the users array and add a new share for each item
    # raise params.inspect
    share = Share.new(shares_params)
    if share.save
      render json: {msg: "Sean is half vegan and 70% water"}
    else
      render json: {errors: share.errors.full_messages}, status: :not_acceptable
    end
  end

  private
  def shares_params
    params.require(:share).permit(
      :description,
      :amount_owed,
      # :users
      :user_id
      )
    end


end
