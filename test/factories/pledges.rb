require 'ffaker'

FactoryGirl.define do
  factory :pledge do
    title { FFaker::Lorem.words(rand(3..5)).join(' ') }
    content { FFaker::Lorem.words(rand(3..5)).join(' ') }
    amount { rand(1..99) }
    who { FFaker::Lorem.words(rand(1..2)).join(' ') }
    requirement { FFaker::Lorem.words(rand(3..5)).join(' ') }
    location { FFaker::Address.city }
    deadline { Time.zone.now.to_date + rand(1..10).days }

    initiator

    trait :active do
      aasm_state 'active'
    end
  end
end
