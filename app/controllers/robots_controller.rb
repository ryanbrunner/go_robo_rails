class RobotsController < ApplicationController
  respond_to :html, :json

  def index
    respond_with(@robots = Robot.all)
  end

  def show
    respond_with(@robot = Robot.find(params[:id]))
  end

  def new
    respond_with(@robot = Robot.new)
  end

  def edit
    respond_with(@robot = Robot.find(params[:id]))
  end

  def update
    @robot = Robot.find(params[:id])
    if @robot.update_attributes params[:robot]
      redirect_to @robot
    else
      render :edit
    end
  end

  def create
    if @robot = Robot.create(params[:robot])
      redirect_to @robot
    else
      render :new
    end
  end
end
