json.extract! option, :id, :text, :destination_id

json.destination do
  json.extract! option.destination, :id, :name, :text
end
