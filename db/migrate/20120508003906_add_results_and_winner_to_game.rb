class AddResultsAndWinnerToGame < ActiveRecord::Migration
  def change
    add_column :games, :results, :text

    add_column :games, :winner_id, :integer

  end
end
