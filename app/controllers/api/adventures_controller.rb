class Api::AdventuresController < ApplicationController
  before_action :require_login, only: [:create]

  def index
    @adventures = Adventure.all
    render :index
  end

  def show
    @adventure = Adventure.find(params[:id])
    render :show
  end

  def create
    @adventure = Adventure.new(adventure_params)
    @adventure.author_id = current_user.id

    genre_names = params['adventure']['genres']
    genre_names.each do |name|
      name.capitalize!
      genre = Genre.find_by(name: name)
      unless genre
        genre = Genre.create({name: name})
      end
      @adventure.genres << genre
    end

    if @adventure.save
      render :show
    else
      render json: @adventure.errors.full_messages, status: 422
    end
  end

  def update
    @adventure = current_user.adventures.find(params[:id])

    genre_names = params['adventure']['genres']
    if genre_names
      @adventure.genres.delete_all()
      genre_names.each do |name|
        name.capitalize!
        genre = Genre.find_by(name: name)
        genre = Genre.create({name: name}) unless genre
        @adventure.genres << genre unless @adventure.genres.include?(genre)
      end
    end

    if @adventure.update_attributes(adventure_params)
      render json: @adventure, include: [:author, :pages, :start_page]
    else
      render json: @adventure.errors.full_messages, status: 422
    end
  end

  private
  def adventure_params
    params.require(:adventure).permit(:title, :description, :cover_url, :published?, :start_page_id)
  end
end
