class Api::SharesController < ApplicationController

  # def create
  #   transaction = Transaction.new(transaction_params)
  #   if transaction.save
  #     # add shares
  #     shares = params.require(:share).permit(:amount_owed, users: [])
  #     # shares[:users] will give us an array of users
  #     # we will loop through this array and add a share
  #     # test = 'users: '
  #     shares[:users].each do |user|
  #       transaction.shares.create(
  #         user_id: user,
  #         amount_owed: amount_owed
  #         # test += user.to_s
  #       )
  #     end
  #     # render json: {msg: }
  #     # render json: {msg: shares}
  #     render json: {msg: "Raj is vegan"}
  #   else
  #     render json: {errors: transaction.errors.full_messages}, status: :not_acceptable
  #   end
  # end

  # private
  # def transaction_params
  #   params.require(:transaction).permit(
  #     :description,
  #     :amount,
  #     :user_id
  #     )
  # end


end
