class UsersController < ApplicationController
  def index
    render :new
  end
  
  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
    else
      flash[:errors] = @user.errors.full_messages
      # render json: @user.errors.full_messages, status: 422
      # render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)

  end
end
