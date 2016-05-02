# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create! name: 'Bill Tore',
                    organization: 'Winzigweich Deutschland GmbH',
                    email: 'bill@example.org',
                    password: 'password'

AdminUser.create! email: 'admin@admin.com', password: 'password'

Pledge.create! content: '5000 Laptops an eine Flüchtlingshilfe-Initiative zu'\
                        ' spenden',
               amount: 10,
               who: 'andere Unternehmen',
               requirement: 'das Gleiche tun',
               deadline: 5.days.from_now,
               aasm_state: 'active',
               initiator: user
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')
