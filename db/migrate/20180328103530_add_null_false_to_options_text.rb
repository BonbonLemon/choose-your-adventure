class AddNullFalseToOptionsText < ActiveRecord::Migration[5.1]
  def change
    change_column :options, :text, :string, null: false
  end
end
