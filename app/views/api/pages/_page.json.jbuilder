json.extract! page, :id, :name, :text

json.adventure do
  json.extract! page.adventure, :id, :title, :description, :cover_url, :genres, :pages
end

# json.pages adventure.pages do |page|
#   json.extract! page, :id, :name, :text
# end
