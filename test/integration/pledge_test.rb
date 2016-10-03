require_relative '../test_helper'

class PledgeTest < AcceptanceTest
  it 'should open a pledge view', js: true do
    visit "/de/pledges/#{Pledge.first.id}"

    page.must_have_content 'activeContent'
  end

  it 'should be possible to create a pledge', js: true do
    visit '/de/pledges/new'
    Pledge.active.count.must_equal 1
    page.must_have_content 'Ein Versprechen abgeben'

    # Try to submit the form without entering data
    click_button 'Entwurf speichern'

    within('.inputset-title') { page.must_have_content('muss ausgefüllt werden') }
    within('.inputset-content') { page.must_have_content('muss ausgefüllt werden') }
    within('.inputset-who') { page.must_have_content('muss ausgefüllt werden') }
    within('.inputset-requirement') { page.must_have_content('muss ausgefüllt werden') }
    # No identifying class names
    # within('.inputset-location') { page.must_have_content('muss ausgefüllt werden') }
    # within('.inputset-deadline') { page.must_have_content('muss ausgefüllt werden') }
    # within('.inputset-description') { page.wont_have_content('muss ausgefüllt werden') }
    # within('.inputset-tag_ids') { page.wont_have_content('muss ausgefüllt werden') }
    within('.c-new-pledge__user-data .inputset-name') do
      page.must_have_content('muss ausgefüllt werden')
    end
    within('.c-new-pledge__user-data .inputset-email') do
      page.must_have_content('muss ausgefüllt werden')
    end
    within('.c-new-pledge__user-data .inputset-password') do
      page.must_have_content('muss ausgefüllt werden')
    end

    # Sucessfully submit the form, make sure it's in preview mode
    fill_in 'pledge[title]', with: 'integration1Title'
    fill_in 'pledge[content]', with: 'integration1Content'
    fill_in 'pledge[amount]', with: ''
    fill_in 'pledge[amount]', with: '2'
    fill_in 'pledge[who]', with: 'integration1Who'
    fill_in 'pledge[requirement]', with: 'integration1Requirement'
    fill_in 'pledge[location]', with: 'integration1Location'
    fill_in 'pledge[deadline]',
            with: (Date.current + 1.week).strftime('%d.%m.%Y')
    fill_in 'pledge[initiator][name]', with: 'integration1Name'
    fill_in 'pledge[initiator][email]', with: 'integration1@email.com'
    fill_in 'pledge[initiator][password]', with: 'integration1Password'
    fill_in 'pledge[initiator][password_confirmation]',
            with: 'integration1Password'
    click_button 'Zur Vorschau'

    page.wont_have_content 'muss ausgefüllt werden'
    page.must_have_content 'integration1Title'
    page.must_have_content 'Wir versprechen, integration1Content, wenn 2'\
                           ' integration1Who integration1Requirement.'
    page.must_have_content 'Versprechensvorschau'

    Pledge.active.count.must_equal 1
    pledge = Pledge.find_by(title: 'integration1Title')
    pledge.aasm_state.must_equal 'initialized'

    # I can login as this new user

    click_link 'Mein Konto'
    click_button 'Abmelden'
    click_link 'Login'

    fill_in 'user[email]', with: 'integration1@email.com'
    fill_in 'user[password]', with: 'integration1Password'
    click_button 'Anmelden'

    # I can view the pledge in my profile view

    page.must_have_content 'Ihr Profil'
    page.must_have_content 'integration1Title'
    page.must_have_content 'Entwurf'

    # I can edit the pledge in preview mode
    click_link 'Bearbeiten'

    fill_in 'pledge[title]', with: ''
    fill_in 'pledge[title]', with: 'changedTitle'
    fill_in 'pledge[content]', with: ''
    fill_in 'pledge[content]', with: 'changedContent'
    fill_in 'pledge[amount]', with: ''
    fill_in 'pledge[amount]', with: '4'
    fill_in 'pledge[who]', with: ''
    fill_in 'pledge[who]', with: 'changedWho'
    fill_in 'pledge[requirement]', with: ''
    fill_in 'pledge[requirement]', with: 'changedRequirement'
    fill_in 'pledge[location]', with: ''
    fill_in 'pledge[location]', with: 'changedLocation'
    fill_in 'pledge[deadline]', with: ''
    fill_in 'pledge[deadline]',
            with: (Date.current + 2.weeks).strftime('%d.%m.%Y')
    click_button 'Zur Vorschau'

    page.must_have_content 'changedTitle'
    page.must_have_content 'Wir versprechen, changedContent, wenn 4'\
                           ' changedWho changedRequirement'
    page.must_have_content 'Versprechensvorschau'
    pledge.reload.aasm_state.must_equal 'initialized'
    pledge.content.must_equal 'changedContent'

    # I can't submit the pledge for approval yet since my email isn't confirmed
    page.wont_have_content 'Versprechen abschicken'
    page.must_have_content 'Schauen Sie in Ihrem Postfach nach und bestätigen'\
                           ' Sie Ihre E-Mail'
    User.any_instance.stubs(:confirmed?).returns true
    # reload
    visit '/'
    visit "/de/pledges/#{pledge.id}"
    page.wont_have_content 'Schauen Sie in Ihrem Postfach nach und bestätigen'\
                           ' Sie Ihre E-Mail'

    # I can submit the pledge for admin review, it is still not shown publicly
    click_button 'Versprechen abschicken'
    pledge.reload.aasm_state.must_equal 'requested'
    page.must_have_content 'Versprechensvorschau'
    page.must_have_content 'Ihr Versprechen wird von unserer Redaktion geprüft'

    click_link 'Mein Konto'
    click_link 'Meine Versprechen'
    page.wont_have_content 'Entwurf'
    page.must_have_content 'Wartet auf Freigabe'

    # I can delete my requested pledge
    page.accept_confirm do
      click_button 'Löschen'
    end
    page.must_have_content 'Versprechen erfolgreich gelöscht'
    assert_raises(ActiveRecord::RecordNotFound) { pledge.reload }
  end
end
