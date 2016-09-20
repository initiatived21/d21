# frozen_string_literal: true
require_relative '../test_helper'

class RemindUpdatesTest < ActiveSupport::TestCase
  let(:worker) { RemindUpdatesWorker.new }

  it 'should send an email to all successful pledges who fit the criteria' do
    # The criteria being: The pledge is successful, deadline was 2 weeks ago,
    # since the deadline there has not been an update

    criteria_fit_no_updates =
      FactoryGirl.create :pledge, :successful, deadline: Date.current - 14.days
    criteria_fit_only_old_updates =
      FactoryGirl.create :pledge, :successful, deadline: Date.current - 2.weeks
    FactoryGirl.create :update, pledge: criteria_fit_only_old_updates,
                                created_at: Date.current - 3.weeks
    deadline_more_than_2_weeks_ago =
      FactoryGirl.create :pledge, :successful, deadline: Date.current - 15.days
    deadline_less_than_2_weeks_ago =
      FactoryGirl.create :pledge, :successful, deadline: Date.current - 13.days
    has_update =
      FactoryGirl.create :pledge, :successful, deadline: Date.current - 2.weeks
    FactoryGirl.create :update, pledge: has_update,
                                created_at: Date.current - 2.weeks
    failed =
      FactoryGirl.create :pledge, :failed, deadline: Date.current - 2.weeks

    mail_stub = Object.new
    mail_stub.stubs(:deliver_later)

    InitiatorMailer.expects(:needs_successful_update)
      .with(criteria_fit_no_updates.id).returns(mail_stub).once
    InitiatorMailer.expects(:needs_successful_update)
      .with(criteria_fit_only_old_updates.id).returns(mail_stub).once
    InitiatorMailer.expects(:needs_successful_update)
      .with(deadline_more_than_2_weeks_ago.id).never
    InitiatorMailer.expects(:needs_successful_update)
      .with(deadline_less_than_2_weeks_ago.id).never
    InitiatorMailer.expects(:needs_successful_update)
      .with(has_update.id).never
    InitiatorMailer.expects(:needs_successful_update)
      .with(failed.id).never

    worker.perform
  end
end
