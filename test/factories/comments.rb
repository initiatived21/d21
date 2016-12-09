require 'ffaker'

FactoryGirl.define do
  factory :comment do
    content { FFaker::Lorem.words(rand(3..5)).join(' ').capitalize + '?' }
    response { FFaker::Lorem.sentence }
    aasm_state 'initialized'

    pledge
  end
end
