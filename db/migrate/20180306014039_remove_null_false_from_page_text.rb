class RemoveNullFalseFromPageText < ActiveRecord::Migration[5.1]
  def change
    change_column :pages, :text, :text, null: true
  end
end
