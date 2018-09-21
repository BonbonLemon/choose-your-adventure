class Api::PagesController < ApplicationController
  def index
    @pages = Page.where(adventure_id: params["adventure_id"])
    render :index
  end

  def show
    @page = Page.find(params[:id])
    render :show
  end

  def create
    @page = Page.new(page_params)

    if @page.save
      if @page.adventure.pages.length == 1
        @page.adventure.start_page_id = @page.id
        @page.adventure.save
      end

      render :show
    else
      render json: @page.errors.full_messages, status: 422
    end
  end

  def update
    @page = Page.find(params[:id])

    if @page.update_attributes(page_params)
      render :show
    else
      render json: @page.errors.full_messages, status: 422
    end
  end

  def destroy
    @page = Page.find(params[:id])

    if @page.adventure_starting_for
      @page.adventure_starting_for.start_page_id = nil
      @page.adventure_starting_for.save
    end

    @page.destroy
    Option.where(destination_id: @page.id).each do |option|
      option.destination_id = 0
      option.save
    end

    render :show
  end

  private
  def page_params
    params.require(:page).permit(:name, :text, :adventure_id)
  end
end
