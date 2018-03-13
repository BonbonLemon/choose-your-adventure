class Api::PagesController < ApplicationController
  def show
    @page = Page.find(params[:id])
    render :show
  end

  def create
    @page = Page.new(page_params)

    if @page.save
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

    debugger
  end

  private
  def page_params
    params.require(:page).permit(:name, :text, :adventure_id)
  end
end
