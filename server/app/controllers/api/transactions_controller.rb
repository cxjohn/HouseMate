class Api::TransactionsController < ApplicationController

  def create
    transaction = Transaction.new(transaction_params)
    if transaction.save
      render json: {msg: "Raj is vegan"}
    else
      render json: {errors: transaction.errors.full_messages}, status: :not_acceptable
    end
  end

  private
  def transaction_params
    params.require(:transaction).permit(
      :description,
      :amount,
      :user_id
      )
    end
    
  

  end
  
  # :users,
  # :split_amount,