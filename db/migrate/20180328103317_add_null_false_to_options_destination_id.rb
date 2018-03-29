class AddNullFalseToOptionsDestinationId < ActiveRecord::Migration[5.1]
  def change
    change_column :options, :destination_id, :integer, null: false
  end
end
