require_relative '../test_helper'

describe Devise::Mailer do
  include EmailSpec::Helpers
  include EmailSpec::Matchers

  describe '#confirmation_instructions' do
    subject { Devise::Mailer.confirmation_instructions(users(:pledger), 'xyz') }

    it 'should send an email with confirmation instructions' do
      subject.must have_subject I18n.t('devise.mailer.confirmation_instructions.user_subject')
      subject.must have_body_text 'pledgerName'
    end
  end

  describe '#password_change' do
    subject { Devise::Mailer.password_change(users(:pledger)) }

    it 'should send an email about the changed password' do
      subject.must have_body_text 'pledgerName'
    end
  end

  describe '#reset_password_instructions' do
    subject { Devise::Mailer.reset_password_instructions(users(:pledger), 'xyz') }

    it 'should send an email with reset password instructions' do
      subject.must have_subject I18n.t('devise.mailer.reset_password_instructions.user_subject')
      subject.must have_body_text 'pledgerName'
    end
  end
end
