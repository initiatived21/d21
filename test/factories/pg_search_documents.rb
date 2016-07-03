require 'ffaker'

FactoryGirl.define do
  factory :pg_search_document, class: PgSearch::Document do
    content { FFaker::Lorem.words(rand(3..5)).join(' ') }
    searchable { FactoryGirl.create(:pledge, :active, content: content) }
  end
end
