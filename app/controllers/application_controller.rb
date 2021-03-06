class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def login(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout
    if current_user.nil?
      render json: "Not logged in", status: 404
    else
      current_user.reset_session_token!
      session[:session_token] = nil
    end
  end

  def logged_in?
    !!current_user
  end

  def require_login
    unless logged_in?
      flash[:errors] = ["You must be logged in to access this"]
      redirect_to new_session_url
    end
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end
end
