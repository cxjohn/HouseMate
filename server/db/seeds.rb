# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# require('faker')

# 10.times do
#   # User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password_digest: Faker::Internet.password)
#   User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: "123", password_confirmation: "123")
# end

# 3.times do
#   Group.create(name: Faker::Kpop.iii_groups)
# end

# group1 = Group.find_by! id: 1;
# group2 = Group.find_by! id: 2;
# group3 = Group.find_by! id: 3;


# Membership.destroy_all

# group1.memberships.create!({
#   user_id: 1
# })

# group1.memberships.create!({
#   user_id: 2
# })

# group1.memberships.create!({
#   user_id: 3
# })

# group1.memberships.create!({
#   user_id: 4
# })

# group2.memberships.create!({
#   user_id: 5
# })

# group2.memberships.create!({
#   user_id: 6
# })

# group2.memberships.create!({
#   user_id: 7
# })

# group3.memberships.create!({
#   user_id: 8
# })

# group3.memberships.create!({
#   user_id: 9
# })

# group3.memberships.create!({
#   user_id: 10
# })


Share.destroy_all
Activity.destroy_all

