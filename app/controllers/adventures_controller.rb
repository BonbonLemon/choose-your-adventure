class AdventuresController < ApplicationController
  before_action :require_login, only: [:new, :create]

  def index
    @adventures = Adventure.all
    render :index
  end

  def show
    @adventure = Adventure.find(params[:id])
  end

  def new
    @adventure = Adventure.new
  end

  def create
    @adventure = Adventure.new(adventure_params)
    @adventure.author_id = current_user.id

    if @adventure.save
      redirect_to adventure_url(@adventure)
    else
      flash.now[:errors] = @adventure.errors.full_messages
      render :new
    end
  end

  def edit
    @adventure = current_user.adventures.find(params[:id])
  end

  def update
    @adventure = current_user.adventures.find(params[:id])
    if @adventure.update_attributes(adventure_params)
      redirect_to adventure_url(@adventure)
    else
      flash.now[:errors] = @adventure.errors.full_messages
      render :edit
    end
  end

  private
  def adventure_params
    params.require(:adventure).permit(:title)
  end
end
