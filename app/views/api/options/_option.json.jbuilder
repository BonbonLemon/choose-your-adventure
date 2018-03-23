json.extract! option, :id, :text, :destination_id

json.destination do
  if option.destination_id != 0
    json.extract! option.destination, :id, :name, :text
  else
    false
  end
end

json.page do
  json.extract! option.page, :id, :name, :text, :adventure, :options
end
