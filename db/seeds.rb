# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

micro = User.create! name: 'Bill Tore',
                     organization: 'Winzigweich Deutschland GmbH',
                     email: 'bill@example.org',
                     password: 'password'
privat = User.create! name: 'Max Mustermann',
                      email: 'max@example.org',
                      password: 'password'
corn = User.create! name: 'Frieda Freude',
                    organization: 'Getreidelsen Verlag',
                    email: 'frieda@example.org',
                    password: 'password'

AdminUser.create! email: 'admin@admin.com', password: 'password'

# Tags
Tag.create!(name: 'family')
Tag.create!(name: 'books')

# Draft pledge
Pledge.create!(
  content: 'irgendwas zu machen, was wir uns noch ausdenken',
  amount: 10,
  who: 'andere Unternehmen',
  requirement: 'ebenfalls Versprechen einstellen',
  deadline: 5.days.from_now,
  aasm_state: 'initialized',
  initiator: micro
)

# requested pledge
Pledge.create!(
  content: 'noch mehr Versprechen einzustellen',
  amount: 1,
  who: 'Administrator',
  requirement: 'endlich mal mein Versprechen freischaltet',
  deadline: 6.days.from_now,
  aasm_state: 'requested',
  initiator: privat
)

# active pledge without signatures
Pledge.create!(
  content: '5000 Laptops an eine Flüchtlingshilfe-Initiative zu spenden',
  amount: 10,
  who: 'andere Unternehmen',
  requirement: 'das Gleiche tun',
  location: 'bundesweit',
  deadline: 7.days.from_now,
  aasm_state: 'active',
  initiator: micro
)

# active pledge with a few signatures
active_few = Pledge.create!(
  content: 'Schulbücher im Wert von 2.500 Euro für den Einsatz in'\
           ' Willkommensklassen bereitstellen',
  amount: 10,
  who: 'Dolmetscher',
  requirement: 'bereit sind, im Gegenzug jeweils ein bekanntes Kinderbuch'\
               ' auf arabisch zu übersetzen',
  location: 'Berlin',
  deadline: 8.days.from_now,
  aasm_state: 'active',
  initiator: corn
)
# Signature.create! pledge: active_few

# active pledge with a enough signatures
active_enough = Pledge.create!(
  content: '200 TabletPCs zur Verfügung stellen',
  amount: 15,
  who: 'ehrenamtliche Institutionen',
  requirement: 'bereit sind, diese Tablets für Kinder und Jugendliche in'\
               ' Flüchtlingsheimen zur Aus-, Weiterbildung oder'\
               ' Berufsvorbereitung zu nutzen',
  location: 'Brandenburg',
  deadline: 9.days.from_now,
  aasm_state: 'active',
  initiator: micro
)
# 15.times do
#   Signature.create! pledge: active_enough
# end

# failed pledge
Pledge.create!(
  content: 'Nähkurse für mindestens 10 Flüchtlingsfrauen anzubieten',
  amount: 5,
  who: 'Menschen oder Unternehmen',
  requirement: 'bereit sind, mindestens 5 Meter Stoff zu spenden',
  location: 'Augsburg',
  deadline: 2.days.ago,
  aasm_state: 'failed',
  initiator: privat
)

# successful pledge
Pledge.create!(
  content: 'zehn Frauen und Kindern aus Flüchtlingsfamilien Fahrradfahren'\
           ' beizubringen',
  amount: 10,
  who: 'Menschen',
  requirement: 'bereit sind, ein fahrtüchtiges Fahrrad zu spenden',
  location: 'Hamburg',
  deadline: 3.days.ago,
  aasm_state: 'successful',
  initiator: privat
)

# disapproved pledge
Pledge.create!(
  content: '20 Klingelstreiche zu spielen',
  amount: 99,
  who: 'rosa Elefanten',
  requirement: 'im Park spazieren',
  location: 'Bielefeld',
  deadline: 10.days.from_now,
  aasm_state: 'disapproved',
  initiator: privat
)
