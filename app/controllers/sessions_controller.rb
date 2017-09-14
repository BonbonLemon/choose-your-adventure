class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
    else
      flash[:errors] = ["Invalid login credentials"]
    end
  end

  def destroy
    logout
  end
end
