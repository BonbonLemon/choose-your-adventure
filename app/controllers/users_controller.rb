class UsersController < ApplicationController
  def index
    render plain: "Hello"
  end

  def create
    render json: params
  end
end
