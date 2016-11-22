# encoding: UTF-8
require_relative '../test_helper'

describe SignerMailer do
  include EmailSpec::Helpers
  include EmailSpec::Matchers
  include Rails.application.routes.url_helpers

  describe '#signature_created' do
    let(:signature) { FactoryGirl.create :signature, :with_hash, locale: 'de' }
    subject { SignerMailer.signature_created(signature.id) }

    it 'should send an email about the created signature' do
      subject.must deliver_to signature.email
      subject.must have_subject 'Bitte Emailadresse und Unterschrift bestätigen'
      subject.must have_body_text(
        confirm_signature_path(
          id: signature.id, hash: signature.confirmation_hash, locale: :de
        )
      )
    end
  end

  describe '#new_pledge_update' do
    subject { SignerMailer.new_pledge_update(1, 1) }

    it 'should send an email about the new pledge update' do
      subject.must deliver_to 'basicSignatureEmail@example.org'
      subject.must have_subject(
        'Neuigkeiten zu dem von Ihnen unterzeichneten Versprechen'
      )
      subject.must have_body_text '/pledges/1'
    end
  end

  describe '#pledge_successful' do
    subject { SignerMailer.pledge_successful(1, 1) }

    it 'should send an email about the successful pledge finish' do
      subject.must deliver_to 'basicSignatureEmail@example.org'
      subject.must have_subject(
        'Das von Ihnen unterzeichnete Versprechen ist erfolgreich!'
      )
      subject.must have_body_text '/pledges/1'
    end
  end

  describe '#pledge_failed' do
    subject { SignerMailer.pledge_failed(1, 1) }

    it 'should send an email about the failed pledge finish' do
      subject.must deliver_to 'basicSignatureEmail@example.org'
      subject.must have_subject(
        'Das von Ihnen unterzeichnete Versprechen ist leider nicht erfolgreich'
      )
      subject.must have_body_text '/pledges/1'
    end
  end
end
