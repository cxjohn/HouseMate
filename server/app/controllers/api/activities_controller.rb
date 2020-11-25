class Api::ActivitiesController < ApplicationController
  def create
    activity = Activity.new(activity_params)
    if activity.save
      # add shares
      shares = params.require(:share).permit(:amount_owed, users: [])
      # shares[:users] will give us an array of users
      # we will loop through this array and add a share
      # test = 'users: '
      # user who paid is the first in the array
      user_paid = shares[:users].shift

      activity.shares.create(
        user_id: user_paid,
        amount_owed: -shares[:amount_owed] * shares[:users].length
      )

      shares[:users].each do |user|
        # if user paid for it, then add a negative amount
        # add positive amount for people who owe 
        activity.shares.create(
          user_id: user,
          amount_owed: shares[:amount_owed]
          # test += user.to_s
        )
      end
      # render json: {msg: }
      # render json: {msg: shares}
      render json: {
        msg: "Raj is vegan",
        # history: recent_activity,
        # summary: user_summary
      }
    else
      render json: {errors: activity.errors.full_messages}, status: :not_acceptable
    end
  end

  #  add here

  private
  def activity_params
    params.require(:activity).permit(
      :description,
      :amount,
      :user_id
      )
  end
end
