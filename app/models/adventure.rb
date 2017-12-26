class Adventure < ApplicationRecord
  validates :title, :author_id, presence: true

  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id

  has_many :pages,
    foreign_key: :adventure_id,
    dependent: :destroy
end
