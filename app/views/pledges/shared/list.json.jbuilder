json.array! pledges do |pledge|
  json.set! pledge.id, json.partial!('pledges/shared/item', pledge: pledge)
end
