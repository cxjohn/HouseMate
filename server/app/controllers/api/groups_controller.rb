class Api::GroupsController < ApplicationController

  def create
    group = Group.new(group_params)
    if group.save
      # add shares
      members = params.require(:membership).permit(users: [])
      # members[:users] will give us an array of users
      # we will loop through this array and add into membership table
      # test = 'users: '
      # user who paid is the first in the array
      # user_paid = shares[:users].shift
      
      # activity.shares.create(
      #   user_id: user_paid,
      #   amount_owed: -shares[:amount_owed] * shares[:users].length
      # )

      members[:users].each do |user|
      #   # if user paid for it, then add a negative amount
      #   # add positive amount for people who owe 
        group.memberships.create(
          user_id: user
      #     # test += user.to_s
        )
      end
      # render json: {msg: }
      # render json: {msg: shares}
      logged_in_user = members[:users].shift

      render json: {
        msg: "Group created!",
        groups_list: group_list(logged_in_user)
        # logged_user_id: logged_in_user

        # groups_list: groups_list(logged_in_user)
        # membership_data: members
        # # user: user,
        # history: recent_activity(user_paid),
        # summary: user_summary(user_paid),
        # settle: settlement(user_paid)

        # history: recent_activity,
        # summary: user_summary
      }
    else
      render json: {errors: group.errors.full_messages}, status: :not_acceptable
    end
  end

  #  add here

  private
  def group_params
    params.require(:group).permit(
      :name
      )
  end

end