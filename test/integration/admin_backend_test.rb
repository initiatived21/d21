require_relative '../test_helper'

class AdminBackendTest < AcceptanceTest
  include Warden::Test::Helpers


  let(:admin) { AdminUser.first }

  describe 'as a logged out visitor' do
    it 'should require a login' do
      visit '/admin'

      page.wont_have_content 'Übersicht'
      page.must_have_content 'Sie müssen sich anmelden oder registrieren, '\
                             'bevor Sie fortfahren können'
    end
  end

  describe 'as a logged in admin' do
    before { login_as admin }

    it 'must show the dashboard immediately', js: true do
      visit '/admin'

      page.must_have_content 'Übersicht'
    end

    describe 'Admin User Administration' do
      it 'must allow to make changes to an admin\'s password' do
        visit '/admin'
        click_link 'Admin Users'
        click_link 'Bearbeiten'

        fill_in 'admin_user_password', with: 'newpassword'
        fill_in 'admin_user_password_confirmation', with: 'newpassword'
        click_on 'Admin Users aktualisieren'

        # automatic logout
        page.must_have_content 'Sie müssen sich anmelden oder registrieren,'\
                               ' bevor Sie fortfahren können'

        fill_in 'admin_user_email', with: 'admin@example.org'
        fill_in 'admin_user_password', with: 'newpassword'
        click_on 'Login'

        page.must_have_content 'Übersicht'
      end
    end

    describe 'Pledge Administration' do
      it 'must allow to activate pledges' do
        pledge = FactoryGirl.create :pledge, aasm_state: 'requested'
        pledge.may_activate?.must_equal true

        visit '/admin'
        click_link 'Pledge'
        click_link pledge.id

        page.must_have_content 'Aktuell: requested'
        click_link 'Activate'

        page.must_have_content 'Aktuell: active'
        pledge.reload.aasm_state.must_equal 'active'
      end

      it 'must allow to disapprove pledges' do
        pledge = FactoryGirl.create :pledge, aasm_state: 'requested'
        pledge.may_disapprove?.must_equal true

        visit '/admin'
        click_link 'Pledge'
        click_link pledge.id

        page.must_have_content 'Aktuell: requested'
        click_link 'Disapprove'

        page.must_have_content 'Aktuell: disapproved'
        pledge.reload.aasm_state.must_equal 'disapproved'
      end
    end

    describe 'comment administration' do
      it 'must allow to approve questions' do
        comment = FactoryGirl.create :comment
        comment.may_approve?.must_equal true

        visit '/admin'
        click_link 'Question'
        click_link comment.id

        page.must_have_content 'Aktuell: initialized'
        click_link 'Approve'

        page.must_have_content 'Aktuell: approved'
        comment.reload.aasm_state.must_equal 'approved'
      end

      it 'must allow to disapprove questions' do
        comment = FactoryGirl.create :comment
        comment.may_disapprove?.must_equal true

        visit '/admin'
        click_link 'Question'
        click_link comment.id

        page.must_have_content 'Aktuell: initialized'
        click_link 'Disapprove'

        page.must_have_content 'Aktuell: disapproved'
        comment.reload.aasm_state.must_equal 'disapproved'
      end
    end
  end
end
