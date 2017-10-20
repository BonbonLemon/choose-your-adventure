class Page < ApplicationRecord
  belongs_to :adventure,
    foreign_key: :adventure_id,
    primary_key: :id
end
