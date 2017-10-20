class AdventuresController < ApplicationController
  def index
    @adventures = Adventure.all
    render :index
  end

  def show

  end

  def new
    
  end
end
