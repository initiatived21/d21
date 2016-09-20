require 'ffaker'

FactoryGirl.define do
  factory :update do
    content { FFaker::Lorem.sentences(rand(2..5)).join(' ') }
  end
end
