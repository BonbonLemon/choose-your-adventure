class CreateGenres < ActiveRecord::Migration[5.1]
  def change
    create_table :genres do |t|
      t.string :name, null: false

      t.timestamps
    end

    create_table :adventures_genres, id: false do |t|
      t.belongs_to :adventure, index: true
      t.belongs_to :genre, index: true
    end

    add_index :genres, :name
  end
end
