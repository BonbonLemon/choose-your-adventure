class CreatePages < ActiveRecord::Migration[5.1]
  def change
    create_table :pages do |t|
      t.string :text, null: false
      t.integer :adventure_id, null: false
      t.integer :page_number, null: false

      t.timestamps
    end

    add_index :pages, :adventure_id
    add_index :pages, :page_number
  end
end
