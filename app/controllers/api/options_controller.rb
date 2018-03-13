class Api::OptionsController < ApplicationController
  def create
    debugger
    @option = Option.new(option_params)

    if @option.save
      render :show
    else
      render json: @option.errors.full_messages, status: 422
    end
  end

  def update
    @option = Option.find(params[:id])
    debugger

    if @option.update_attributes(option_params)
      render :show
    else
      render json: @option.errors.full_messages, status: 422
    end
  end

  private
  def option_params
    params.require(:option).permit(:page_id, :text, :destination_id)
  end
end
