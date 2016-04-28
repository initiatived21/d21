require 'ffaker'

FactoryGirl.define do
  factory :user, aliases: [:initiator] do
    name { FFaker::Internet.user_name }
    organization { maybe FFaker::Company.name }
    email { FFaker::Internet.email }
  end
end

def maybe result
  rand(2) == 0 ? nil : result
end
