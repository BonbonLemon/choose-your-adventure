json.extract! page, :id, :name, :text, :adventure_id, :options

# json.adventure do
#   json.extract! page.adventure, :id, :title, :description, :cover_url, :genres, :pages
# end

# json.options do
# #   page.options.each do |option|
# #     json.set! option.id do
# #       json.partial! 'api/options/option', option: option
# #     end
# #   end
#   json.partial! 'api/options/option', collection: page.options.sort_by{|option| option.id}, as: :option
# end

# json.pages adventure.pages do |page|
#   json.extract! page, :id, :name, :text
# end
