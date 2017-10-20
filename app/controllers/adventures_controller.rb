class AdventuresController < ApplicationController
  def index
    @adventures = Adventure.all
    render :index
  end

  def show
    @adventure = Adventure.find(params[:id])
  end

  def new

  end
end
