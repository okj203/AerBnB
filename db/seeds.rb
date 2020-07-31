# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all # clear out user db

user33 = User.create!({username: 'u33', password: '123123', email: 'u33@email.com', first_name: 'u33', last_name: 'u33', birthday: '1990-01-01'})
user35 = User.create!({username: 'u35', password: '123123', email: 'u35@email.com', first_name: 'u35', last_name: 'u35', birthday: '1990-01-01'})