@adventures.each do |adventure|
  json.set! adventure.id do
    json.partial! 'adventure', adventure: adventure
  end
end
