class GamesController < ApplicationController

  respond_to :html

  def new
    respond_with @game = Game.new(params[:game])
  end

  def create

    @game = Game.new(params[:game])
    @game.players.build(:robot => current_robot)

    # TODO: Other levels
    @game.level = Level.first

    if @game.save
      redirect_to @game
    else
      render :new
    end
  end

  def show
    respond_with(@game = Game.find(params[:id]))
  end

  def index
    respond_with(@games = Game.all)
  end
end
