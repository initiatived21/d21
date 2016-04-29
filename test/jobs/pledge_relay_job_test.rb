require_relative '../test_helper'

describe PledgeRelayJob do
  include ActiveJob::TestHelper

  let(:pledge) { pledges(:active) }
  let(:job) { PledgeRelayJob.perform_later(pledge) }

  it 'should enqueue the job' do
    assert_difference 'ActiveJob::Base.queue_adapter.enqueued_jobs.size', 1 do
      job
    end
  end

  it 'executes perform' do
    ActionCable.server.expects(:broadcast).with 'pledges_all', pledge: pledge
    perform_enqueued_jobs { job }
  end

  after do
    clear_enqueued_jobs
    clear_performed_jobs
  end
end
