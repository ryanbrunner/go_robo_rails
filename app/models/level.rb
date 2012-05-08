class Level < ActiveRecord::Base
  validates :name, :presence => true
end
