class SessionsController < ApplicationController
  def new
  end

  def create
    debugger
    # @user = User.from_omniauth(env["omniauth.auth"])

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
