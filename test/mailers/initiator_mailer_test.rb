# encoding: UTF-8
require_relative '../test_helper'

describe InitiatorMailer do
  include EmailSpec::Helpers
  include EmailSpec::Matchers

  describe '#pledge_was_approved' do
    subject { InitiatorMailer.pledge_was_approved(1) }

    it 'should send an email about the pledge approval' do
      subject.must deliver_to 'pledgerEmail'
      subject.must have_subject 'Ihr Versprechen wurde veröffentlicht'
      subject.must have_body_text '/pledges/1'
    end
  end

  describe '#new_question' do
    subject { InitiatorMailer.new_question(1) }

    it 'should send an email about the pledge comment' do
      subject.must deliver_to 'pledgerEmail'
      subject.must have_subject 'Rückfrage zu Ihrem Versprechen'
      subject.must have_body_text '/pledges/1'
    end
  end

  describe '#pledge_successful' do
    subject { InitiatorMailer.pledge_successful(1) }

    it 'should send an email about the successful pledge finish' do
      subject.must deliver_to 'pledgerEmail'
      subject.must have_subject 'Ihr Versprechen ist erfolgreich!'
      subject.must have_body_text '/pledges/1'
    end
  end

  describe '#pledge_failed' do
    subject { InitiatorMailer.pledge_failed(1) }

    it 'should send an email about the failed pledge finish' do
      subject.must deliver_to 'pledgerEmail'
      subject.must have_subject 'Ihr Versprechen ist leider nicht erfolgreich'
      subject.must have_body_text '/pledges/1'
    end
  end

  describe '#needs_successful_update' do
    subject { InitiatorMailer.needs_successful_update(1) }

    describe 'when mailings_enabled of initiator is false' do
      before do
        User.find(1).update_column :mailings_enabled, false
      end

      it 'should send an email to the system address' do
        subject.must deliver_to 'redaktion@buntundverbindlich.de'
        subject.must have_subject 'Erinnerung Abschlussbericht'
      end
    end

    describe 'when mailings_enabled of initiator is true' do
      before do
        User.find(1).update_column :mailings_enabled, true
      end

      it 'should send an email about the missing update to the intiator' do
        subject.must deliver_to 'pledgerEmail'
        subject.must have_subject 'Erinnerung Abschlussbericht'
        subject.must have_body_text '/pledges/1'
      end
    end
  end
end
