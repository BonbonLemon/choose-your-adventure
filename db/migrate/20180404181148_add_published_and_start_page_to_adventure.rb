class AddPublishedAndStartPageToAdventure < ActiveRecord::Migration[5.1]
  def change
    add_column :adventures, :published?, :boolean, default: false
    add_column :adventures, :start_page_id, :integer
  end
end
