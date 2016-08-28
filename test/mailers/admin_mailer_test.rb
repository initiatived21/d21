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
end
