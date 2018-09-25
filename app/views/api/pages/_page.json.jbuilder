json.extract! page, :id, :name, :text, :adventure_id

json.options do
  json.partial! 'api/options/option', collection: page.options, as: :option
end