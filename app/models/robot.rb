class Robot < ActiveRecord::Base

  validates :name, :presence => true,
                   :uniqueness => true
  validates :code, :presence => true

  def to_s
    name
  end

end
