require_relative '../test_helper'

class PledgeTest < Minitest::Capybara::Spec
  it 'should open a pledge view' do
    visit "/de/pledges/#{Pledge.first.id}"

    page.must_have_content 'activeContent'
  end

  it 'should be possible to create a pledge' do
    visit '/en/pledges/new'
    Pledge.active.count.must_equal 1

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
      page.must_have_content('must be filled')
    end
    within('.c-new-pledge__user-data .input-email') do
      page.must_have_content('must be filled')
    end
    within('.c-new-pledge__user-data .input-password') do
      page.must_have_content('must be filled')
    end

    # Sucessfully submit the form, make sure it's in preview mode
    fill_in 'pledge[content]', with: 'integration1Content'
    fill_in 'pledge[amount]', with: '123'
    fill_in 'pledge[who]', with: 'integration1Who'
    fill_in 'pledge[requirement]', with: 'integration1Requirement'
    fill_in 'pledge[deadline]', with: '01-01-2222'
    fill_in 'pledge[initiator][name]', with: 'integration1Name'
    fill_in 'pledge[initiator][email]', with: 'integration1@email.com'
    fill_in 'pledge[initiator][password]', with: 'integration1Password'
    click_button 'Submit'

    page.must_have_content 'We promise to integration1Content if at least 123'\
                           ' integration1Who integration1Requirement.'
    page.must_have_content 'This is a preview of your pledge.'

    Pledge.active.count.must_equal 1
    pledge = Pledge.find_by(content: 'integration1Content')
    pledge.aasm_state.must_equal 'initialized'

    # I can view the pledge in my profile view

    PledgesController.any_instance.stubs(:current_user).returns User.last
    visit '/'

    click_link 'Meine Daten'
    page.must_have_content 'integration1Content'
    page.must_have_content 'Entwurf'

    # I can edit the pledge in preview mode
    click_link 'Bearbeiten'
    save_and_open_page

    fill_in 'pledge[content]', with: 'changedContent'
    click_button 'Abschicken'

    page.must_have_content 'We promise to changedContent'
    page.must_have_content 'This is a preview of your pledge.'
    pledge.reload.aasm_state.must_equal 'initialized'

    # I can submit the pledge for admin review, it is still now shown publicly
    click_link 'Click here to submit it for approval'
    pledge.reload.aasm_state.must_equal 'requested'
    page.must have_content 'something'

    click_link 'Meine Daten'
    page.wont_have_content 'Entwurf'
    page.must_have_content 'Wird Freigeschaltet'
  end
end
