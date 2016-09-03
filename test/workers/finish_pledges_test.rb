# frozen_string_literal: true
require_relative '../test_helper'

class FinishPledgesTest < ActiveSupport::TestCase
  let(:worker) { FinishPledgesWorker.new }

  it 'should trigger a new worker for all active pledges past deadline' do
    past_but_inactive = FactoryGirl.create :pledge, :failed,
                                           deadline: Date.yesterday
    past_active = FactoryGirl.create :pledge, :active, deadline: Date.yesterday
    before_active = FactoryGirl.create :pledge, :active, deadline: Date.current
    FinishPledgeWorker.expects(:perform_async).with(past_but_inactive.id).never
    FinishPledgeWorker.expects(:perform_async).with(past_active.id).once
    FinishPledgeWorker.expects(:perform_async).with(before_active.id).never
    FinishPledgeWorker.expects(:perform_async).with(pledges(:active).id).once
    worker.perform
  end
end
