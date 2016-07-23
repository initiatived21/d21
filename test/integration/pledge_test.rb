require_relative '../test_helper'

class PledgeTest < Minitest::Capybara::Spec
  it 'should open a pledge view' do
    visit "/de/pledges/#{Pledge.first.id}"

    page.must_have_content 'activeContent'
  end

  it 'should be possible to create a pledge' do
    visit '/en/pledges/new'

    # Try to submit the form without entering data
    click_button 'Submit'

    within('.input-content') { page.must_have_content('must be filled') }
    within('.input-amount') { page.must_have_content('must be filled') }
    within('.input-who') { page.must_have_content('must be filled') }
    within('.input-requirement') { page.must_have_content('must be filled') }
    within('.input-location') { page.wont_have_content('must be filled') }
    within('.input-deadline') { page.must_have_content('must be filled') }
    within('.input-description') { page.wont_have_content('must be filled') }
    within('.input-tag_ids') { page.wont_have_content('must be filled') }
    within('.c-new-pledge__user-data .input-name') do
      page.wont_have_content('must be filled')
    end
    within('.c-new-pledge__user-data .input-email') do
      page.wont_have_content('must be filled')
    end
    within('.c-new-pledge__user-data .input-password') do
      page.wont_have_content('must be filled')
    end
  end
end
