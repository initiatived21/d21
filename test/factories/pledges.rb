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

    trait :failed do
      aasm_state 'failed'
      deadline { Date.current - rand(1..10).days }
    end

    trait :successful do
      aasm_state 'successful'
      deadline { Date.current - rand(1..10).days }

      amount 1

      after :create do |pledge, evaluator|
        evaluator.amount.times do
          FactoryGirl.create :signature, pledge: pledge,
                                         created_at: evaluator.deadline - 1.day
        end
      end
    end
  end
end
