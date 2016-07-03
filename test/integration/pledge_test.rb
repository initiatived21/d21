require_relative '../test_helper'

class PledgeTest < Minitest::Capybara::Spec
  it 'should open a pledge view' do
    visit "/de/pledges/#{Pledge.first.id}"

    page.must_have_content 'activeContent'
  end
end
