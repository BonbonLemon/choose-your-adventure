class CreateAdventures < ActiveRecord::Migration[5.1]
  def change
    create_table :adventures do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.string :cover_url

      t.timestamps
    end

    add_index :adventures, :title
    add_index :adventures, :author_id
  end
end
