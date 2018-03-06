class FixOptionColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :options, :page_target, :destination_id
  end
end
