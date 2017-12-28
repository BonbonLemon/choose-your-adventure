class Api::AdventuresController < ApplicationController
  before_action :require_login, only: [:create]

  def index
    @adventures = Adventure.all
    render json: Adventure.all, include: [:author, :pages]
  end

  def show
    render json: Adventure.find(params[:id]), include: [:author, :pages]
  end

  def create
    @adventure = Adventure.new(adventure_params)
    @adventure.author_id = current_user.id

    if @adventure.save
      render json: @adventure, include: [:author, :pages]
    else
      render json: @adventure.errors.full_messages, status: 422
    end
  end

  def update
    @adventure = current_user.adventures.find(params[:id])
    if @adventure.update_attributes(adventure_params)
      render json: @adventure, include: [:author, :pages]
    else
      render json: @adventure.errors.full_messages, status: 422
    end
  end

  private
  def adventure_params
    params.require(:adventure).permit(:title)
  end
end
