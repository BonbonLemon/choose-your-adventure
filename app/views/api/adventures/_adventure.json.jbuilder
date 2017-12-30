json.extract! adventure, :id, :title, :cover_url

# json.partial! 'api/users/user', user: adventure.author
json.author do
  json.partial! 'api/users/user', user: adventure.author
end

json.pages do
  json.partial! 'api/pages/page', collection: adventure.pages, as: :page
end
