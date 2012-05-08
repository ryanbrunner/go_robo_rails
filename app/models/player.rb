class Player < ActiveRecord::Base
  belongs_to :game
  belongs_to :robot
end
