class CreateOptions < ActiveRecord::Migration[5.1]
  def change
    create_table :options do |t|
      t.string :text
      t.integer :page_id, null: false
      t.integer :page_target

      t.timestamps
    end

    add_index :options, :page_id

    remove_column :pages, :page_number
    add_column :pages, :name, :string
  end
end
