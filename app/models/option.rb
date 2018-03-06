class Option < ApplicationRecord
  belongs_to :page

  has_one :destination,
    class_name: "Page",
    primary_key: :destination_id
end
