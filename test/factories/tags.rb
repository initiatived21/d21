require 'ffaker'

FactoryGirl.define do
  factory :tag do
    name { FFaker::Lorem.word }
    color '000000'
  end
end
