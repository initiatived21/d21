require 'ffaker'

FactoryGirl.define do
  factory :signature do
    name { FFaker::NameDE.name }
    email { FFaker::Internet.email }
    organization { maybe FFaker::Company.name }
    contact_person { maybe true }
    anonymous { maybe true }
    reason { maybe FFaker::Lorem.sentence }
    confirmed true

    pledge

    trait :unconfirmed do
      confirmed false
    end
  end
end

def maybe result
  rand > 0.5 ? result : nil
end
