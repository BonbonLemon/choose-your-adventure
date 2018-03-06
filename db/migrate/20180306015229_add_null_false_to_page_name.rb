class AddNullFalseToPageName < ActiveRecord::Migration[5.1]
  def change
    change_column :pages, :name, :string, null: false
  end
end
