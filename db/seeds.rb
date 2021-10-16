# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'
require 'faker'
# require 'byebug'
# debugger
User.destroy_all 
Review.destroy_all
Spot.destroy_all

csv_text = File.read(Rails.root.join('lib', 'seeds', 'listings.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  p row["price"]
  u = User.create!(username: Faker::Name.name, birthday: Faker::Date.between(from: '1930-01-01', to: '2020-01-01'),email: Faker::Internet.email, password: "hunter2", first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
  Spot.create!(host_id: u.id, spot_name: Faker::App.name, description: row["description"], price: row["price"][1..-1].to_f, lat: row["latitude"].to_f, lng: row["longitude"].to_f, city: "New York", country: "USA", address: Faker::Address.street_address)
end

# Demo User
User.create!({username: 'u33', password: '123123', email: 'u33@email.com', first_name: 'u33', last_name: 'u33', birthday: '1990-01-01'})

# create! to get loud error msg;
# missing columns such as username and birthday
# collision with old-hardcoded data

# CSV.foreach(Rails.root.join('lib', 'seeds', 'listings.csv'), :headers => true) do |row|
#   # debugger
#   u = User.create(email: Faker::Internet.email, password: "hunter2", first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
#   s = Spot.create(host_id: u.id, spot_name: Faker::App.name, description: row["description"], price: row["price"].to_i, lat: row["latitude"].to_f, lng: row["longitude"].to_f, city: "New York", country: "USA", address: Faker::Address.street_address)
# end

# user35 = User.create!({username: 'u35', password: '123123', email: 'u35@email.com', first_name: 'u35', last_name: 'u35', birthday: '1990-01-01'})
# jieun = User.create!({username: 'jieun', password: '123123', email: 'jieun@email.com', first_name: 'jieun', last_name: 'kim', birthday: '1990-01-01'})
# laquinta = User.create!({username: 'laquinta', password: '123123', email: 'laquinta@email.com', first_name: 'laquinta', last_name: 'laquinta', birthday: '1990-01-01'})
# radisson = User.create!({username: 'radisson', password: '123123', email: 'radisson@email.com', first_name: 'radisson', last_name: 'radisson', birthday: '1990-01-01'})
# highline = User.create!({username: 'highline', password: '123123', email: 'highline@email.com', first_name: 'highline', last_name: 'highline', birthday: '1990-01-01'})

# jk_house = Spot.create(price: 44, 
#                         description: "Thank you for your interest in JK HOUSE. The guest house has a separate toilet and a private kitchen in a single room. All areas of JK HOUSE are non-smoking.", 
#                         city: 'Seoul',
#                         country: 'South Korea', 
#                         title: "Entire house hosted by Stacy Ji-Eun", 
#                         lat: 37.540037, 
#                         lng: 126.992072, 
#                         host_id: jieun.id, 
#                         address: 'Itaewon 1(il)-dong, Yongsan-gu, Seoul, South Korea')

# manhattan_1 = Spot.create(price: 90, 
#                         spot_name: "Private room", 
#                         host_id: laquinta.id, 
#                         description: "Rendezvous at the hotel restaurant & bar & savor killer city views from the rooftop terrace.", 
#                         city: 'New York',
#                         country: 'USA', 
#                         lat: 40.777384, 
#                         lng: -73.9803, 
#                         address: '31 W 71st St, New York, NY 10023')

# manhattan_2 = Spot.create(price: 100, 
#                         spot_name: "Entire apartment", 
#                         host_id: radisson.id, 
#                         description: "Must-visit shops, eateries & sights are right on your doorstep.", 
#                         city: 'New York',
#                         country: 'USA', 
#                         lat: 40.760134, 
#                         lng: -73.978516, 
#                         address: '25 W 51st St, New York, NY 10019')

# manhattan_3 = Spot.create(price: 90, 
#                         spot_name: "Entire house", 
#                         host_id: highline.id, 
#                         description: "You can enjoy the fantastic night view of NY everywhere in the house.", 
#                         city: 'New York',
#                         country: 'USA', 
#                         lat: 40.720211, 
#                         lng: -73.374507, 
#                         address: '180 10th Ave, New York, NY 10011')

