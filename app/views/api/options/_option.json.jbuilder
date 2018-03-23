json.extract! option, :id, :text, :destination_id

json.destination do
  if option.destination_id != 0
    json.extract! option.destination, :id, :name, :text
  else
    false
  end
end

json.page do
  json.extract! option.page, :id, :name, :text, :options

  json.adventure do
    json.extract! option.page.adventure, :id, :title, :description, :cover_url, :pages
  end
end
