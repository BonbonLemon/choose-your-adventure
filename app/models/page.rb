class Page < ApplicationRecord
  validates :name, :adventure_id, presence: true

  belongs_to :adventure,
    foreign_key: :adventure_id,
    primary_key: :id

  has_many :options,
    dependent: :destroy

  has_one :adventure_starting_for,
    class_name: "Adventure",
    foreign_key: :start_page_id,
    primary_key: :id
end
