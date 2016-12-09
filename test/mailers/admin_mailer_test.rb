require_relative '../test_helper'

describe AdminMailer do
  include EmailSpec::Helpers
  include EmailSpec::Matchers

  describe '#new_pledge' do
    subject { AdminMailer.new_pledge(1) }

    it 'should send an email about the pledge' do
      subject.must deliver_to 'redaktion@buntundverbindlich.de'
      subject.must have_subject 'Ein Versprechen wartet auf Freigabe'
      subject.must have_body_text '/admin/pledges/1'
    end
  end

  describe '#new_report' do
    subject { AdminMailer.new_report(2) }

    it 'should send an email about the report' do
      subject.must deliver_to 'redaktion@buntundverbindlich.de'
      subject.must have_subject 'Ein Versprechen wurde gemeldet'
      subject.must have_body_text '/de/pledges/2'
      subject.must have_body_text 'Das Versprechen wurde bisher 2 Mal gemeldet.'
    end
  end

  describe '#new_question' do
    subject { AdminMailer.new_question(1) }

    it 'should send an email about the question' do
      subject.must deliver_to 'redaktion@buntundverbindlich.de'
      subject.must have_subject 'Eine Frage wartet auf Freigabe'
      subject.must have_body_text '/admin/comments/1'
    end
  end
end
