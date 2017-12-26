class SessionsController < ApplicationController
  def new
  end

  def create
    # @user = User.from_omniauth(env["omniauth.auth"])

    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid login credentials"]
      render :new
    end
  end

  def destroy
    logout

    redirect_to root_url
  end
end
