json.extract! adventure, :id, :title, :author, :author_id, :cover_url, :description, :published?, :start_page_id

json.genres do
  json.partial! 'api/genres/genre', collection: adventure.genres, as: :genre
end

