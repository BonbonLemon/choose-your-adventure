class AddDescriptionToAdventure < ActiveRecord::Migration[5.1]
  def change
    add_column :adventures, :description, :text
  end
end
