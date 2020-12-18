class Api::ActivitiesController < ApplicationController
  def create
    activity = Activity.new(activity_params)
    shares = params.require(:share).permit(:amount_owed, users: [])
    group = params.require(:group).permit(:group_id, :amount, :user_id)

    if activity.save && (shares[:users].length > 1 || group[:group_id])
      # add shares
      # check if it's from groups or friends
      # group = params.require(:group).permit(:group_id, :amount, :user_id) #commenting

      if group[:group_id]
        # we have the group id
        # we want to get members in that group
        # look into membership table
        # Math.round((formState.amount / users.length) * 10000) / 10000
        members = Membership.where(group_id: group[:group_id])
        # now we have the members array
        # amount_owed = (group[:amount].to_i / members.length).round(2);
        amount_owed = group[:amount].to_f / members.length
        # we loop through members and add shares

        user_paid = group[:user_id]
        # we want to remove member with user_id === user_paid from members array

        activity.shares.create(
          user_id: user_paid,
          amount_owed: -amount_owed * ( members.length - 1 )
        )

        members.each do |member|
          unless member.user_id == user_paid
            activity.shares.create(
              user_id: member.user_id,
              amount_owed: amount_owed
            )
          end
        end
        


        render json: {
          msg: "group transaction was successful",
          # user: user,
          history: recent_activity(user_paid),
          summary: user_summary(user_paid),
          settle: settlement(user_paid)

          # history: recent_activity,
          # summary: user_summary
        }

      else
        # shares = params.require(:share).permit(:amount_owed, users: []) # commenting
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
          msg: "friends transaction was successful",
          # user: user,
          history: recent_activity(user_paid),
          summary: user_summary(user_paid),
          settle: settlement(user_paid)

          # history: recent_activity,
          # summary: user_summary
        }
      end
    else
      # render json: {errors: activity.errors.full_messages}, status: :not_acceptable
      render json: {error: activity.errors.full_messages}
    end
  end

  #  add here

  private
  def activity_params
    params.require(:activity).permit(
      :description,
      :amount,
      :user_id,
      :is_expense
      )
  end
end
