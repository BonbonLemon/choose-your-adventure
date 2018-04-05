json.extract! adventure, :id, :title, :description, :cover_url, :published?, :start_page

json.genres do
  json.partial! 'api/genres/genre', collection: adventure.genres, as: :genre
end
# json.partial! 'api/users/user', user: adventure.author
json.author do
  json.partial! 'api/users/user', user: adventure.author
end

json.pages do
#   adventure.pages.each do |page|
#     json.set! page.id do
#       json.partial! 'api/pages/page', page: page
#     end
#   end
  json.partial! 'api/pages/page', collection: adventure.pages, as: :page
end

# json.pages adventure.pages do |page|
#   json.extract! page, :id, :name, :text, :adventure
#
#   json.options page.options do |option|
#     json.extract! option, :id, :text, :destination_id
#
#     json.page do
#       page.extract
#     end
#
#     json.destination do
#       if option.destination_id != 0
#         json.extract! option.destination, :id, :name, :text
#       else
#         false
#       end
#     end
#
#   end
# end
