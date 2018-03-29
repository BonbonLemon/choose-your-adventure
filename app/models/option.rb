class Option < ApplicationRecord
  validates :text, :page_id, :destination_id, presence: true

  belongs_to :page

  has_one :destination,
    class_name: "Page",
    primary_key: :destination_id,
    foreign_key: :id
end
