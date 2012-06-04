class Game < ActiveRecord::Base
  belongs_to :level
  belongs_to :winner, :class_name => 'Robot'

  serialize :results

  validates :name, :presence => true, :uniqueness => true
  validates :level, :presence => true

  has_many :players
  accepts_nested_attributes_for :players

  has_many :robots, :through => :players

  before_create :run_game

  def run_game
    robots = Robot.find(players.map(&:robot_id))

    robo_specs = robots.map do |r|
      GoRobo::Speedy.new :x => rand(30), :y => rand(30), :direction => 0, :name => r.name do
        eval(r.code)
      end
    end

    GoRobo::World.setup(robo_specs)
    self.results = GoRobo::World.run
    self.winner = Robot.find_by_name(self.results[:winner].try(:name))
  end


end
