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
    click_button 'Save Draft'

    within('.input-title') { page.must_have_content('must be filled') }
    within('.input-content') { page.must_have_content('must be filled') }
    within('.input-amount') { page.must_have_content('must be filled') }
    within('.input-who') { page.must_have_content('must be filled') }
    within('.input-requirement') { page.must_have_content('must be filled') }
    within('.input-location') { page.must_have_content('must be filled') }
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
    fill_in 'pledge[title]', with: 'integration1Title'
    fill_in 'pledge[content]', with: 'integration1Content'
    fill_in 'pledge[amount]', with: '123'
    fill_in 'pledge[who]', with: 'integration1Who'
    fill_in 'pledge[requirement]', with: 'integration1Requirement'
    fill_in 'pledge[location]', with: 'integration1Location'
    fill_in 'pledge[deadline]', with: '01-01-2222'
    fill_in 'pledge[initiator][name]', with: 'integration1Name'
    fill_in 'pledge[initiator][email]', with: 'integration1@email.com'
    fill_in 'pledge[initiator][password]', with: 'integration1Password'
    click_button 'Save Draft'

    page.must_have_content 'The draft was successfully saved to your profile.'
    click_link 'Meine Daten'
    click_link 'zum Versprechen'

    page.must_have_content 'integration1Title'
    page.must_have_content 'We promise to integration1Content if at least 123'\
                           ' integration1Who integration1Requirement.'
    page.must_have_content 'This is a preview of your pledge.'

    Pledge.active.count.must_equal 1
    pledge = Pledge.find_by(title: 'integration1Title')
    pledge.aasm_state.must_equal 'initialized'

    # I can view the pledge in my profile view

    PledgesController.any_instance.stubs(:current_user).returns User.last
    visit '/'

    click_link 'Meine Daten'
    page.must_have_content 'integration1Title'
    page.must_have_content 'Entwurf'

    # I can edit the pledge in preview mode
    click_button 'Bearbeiten'

    fill_in 'pledge[title]', with: 'changedTitle'
    fill_in 'pledge[content]', with: 'changedContent'
    fill_in 'pledge[amount]', with: '456'
    fill_in 'pledge[who]', with: 'changdWho'
    fill_in 'pledge[requirement]', with: 'changedRequirement'
    fill_in 'pledge[location]', with: 'changedLocation'
    fill_in 'pledge[deadline]', with: '01-01-3333'
    click_button 'Entwurf speichern'

    page.must_have_content 'changedTitle'
    page.must_have_content 'Wir versprechen, changedContent, wenn mindestens'\
                           ' 456 changdWho changedRequirement'
    page.must_have_content 'This is a preview of your pledge.'
    pledge.reload.aasm_state.must_equal 'initialized'
    pledge.content.must_equal 'changedContent'

    # I can't submit the pledge for approval yet since my email isn't confirmed
    page.wont_have_content 'Click here to submit it for approval'
    page.must_have_content 'Please confirm your email to finalize this pledge.'
    User.any_instance.stubs(:confirmed?).returns true
    # reload
    visit '/'
    visit "/de/pledges/#{pledge.id}"
    page.wont_have_content 'Please confirm your email to finalize this pledge.'

    # I can submit the pledge for admin review, it is still not shown publicly
    click_button 'Click here to submit it for approval'
    pledge.reload.aasm_state.must_equal 'requested'
    page.must_have_content 'This is a preview of your pledge.'
    page.must_have_content 'It is being reviewed'

    click_link 'Meine Versprechen'
    page.wont_have_content 'Entwurf'
    page.must_have_content 'Wartet auf Freigabe'

    # I can delete my requested pledge
    click_button 'Löschen'
    page.must_have_content 'Versprechen erfolgreich gelöscht'
    assert_raises(ActiveRecord::RecordNotFound) { pledge.reload }
  end
end
