require_relative '../test_helper'

class PledgeTest < Minitest::Capybara::Spec
  it 'should open a pledge view' do
    visit "/de/pledges/#{Pledge.first.id}"

    page.must_have_content 'activeContent'
  end

  it 'should be possible to create a pledge' do
    Pledge.destroy_all
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
    within('.PledgeForm-UserData .input-name') do
      page.must_have_content('must be filled')
    end
    within('.PledgeForm-UserData .input-email') do
      page.must_have_content('must be filled')
    end
    within('.PledgeForm-UserData .input-password') do
      page.must_have_content('must be filled')
    end

    # Sucessfully submit the form, make sure it's in preview mode
    fill_in 'pledge[content]', with: 'fooContent'
    fill_in 'pledge[amount]', with: '123'
    fill_in 'pledge[who]', with: 'fooWho'
    fill_in 'pledge[requirement]', with: 'fooRequirement'
    fill_in 'pledge[deadline]', with: '01-01-2222'
    fill_in 'pledge[initiator][name]', with: 'fooName'
    fill_in 'pledge[initiator][email]', with: 'foo@email.com'
    fill_in 'pledge[initiator][password]', with: 'fooPassword'
    click_button 'Submit'

    page.must_have_content 'We promise to fooContent if at least 123 fooWho'\
                           ' fooRequirement.'
    page.must_have_content 'This is a preview of your pledge.'
    PledgesController.any_instance.stubs(:current_user).returns User.last

    visit '/en/pledges'
    page.must_have_content 'activeContent' # fixture pledge
    page.wont_have_content 'fooContent'

    # I can view the pledge in my profile view

    click_link 'fooName'
    save_and_open_page
    page.must_have_content 'fooContent'
    page.must_have_content 'preview'
  end
end
