require 'ffaker'

FactoryGirl.define do
  factory :signature do
    name { FFaker::NameDE.name }
    email { FFaker::Internet.email }
    organization { maybe FFaker::Company.name }
    contact_person { maybe true }
    anonymous { maybe true }
    reason { maybe FFaker::Lorem.sentence }

    pledge
  end
end

def maybe result
  rand > 0.5 ? result : nil
end
