class ApplicationController < ActionController::Base
  protect_from_forgery


  def current_robot
    # TODO: Not everyone is robot 1
    Robot.find(1)
  end
end
