@pages.each do |page|
  json.set! page.id do
    json.partial! 'page', page: page
  end
end
