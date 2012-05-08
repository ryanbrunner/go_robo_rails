require 'spec_helper'

describe Game do
  it { should validate_presence_of :name }
  it { should validate_presence_of :level }

  # factory girl for level?
  it { should validate_presence_of :level }

  describe "Game start" do
    before { robo_war = Game.create :name => "robo war", :max_players => 10, :level => "level"}
    it "should have at least 2 players"
  end

  describe "Game start should have less than max_players" do

  end

end
