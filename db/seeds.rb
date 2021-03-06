# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


locations = [
["AppAcademy",37.781019, -122.411404, 4],
[ "Federal Reserve",  37.793081,  -122.395944, 9],
[ "Transamerica Pyramid",  37.795162, -122.402728, 8],
[ "California Academy of Sciences",  37.769890, -122.466095, 25],
["City Hall", 37.779331, -122.419328, 30]
]

locations.each do |desc, lat, lng, seating|
  Bench.create(description: desc, lat: lat, lng: lng, seating: seating)
end
