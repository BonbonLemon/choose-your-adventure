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

  private
  def adventure_params
    params.require(:adventure).permit(:title)
  end
end
