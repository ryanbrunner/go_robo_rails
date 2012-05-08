require 'spec_helper'

describe Robot do
  it { should validate_presence_of :name }

  describe "uniqueness" do
    before { Robot.create :name => 'Test', :code => 'do test end'}
    it { should validate_uniqueness_of :name }
  end
  it { should validate_presence_of :code }

end