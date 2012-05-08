class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.references :game
      t.references :robot

      t.timestamps
    end
    add_index :players, :game_id
    add_index :players, :robot_id
  end
end
