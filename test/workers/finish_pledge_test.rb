# frozen_string_literal: true
require_relative '../test_helper'

class FinishPledgeTest < ActiveSupport::TestCase
  let(:worker) { FinishPledgeWorker.new }

  it 'should finish an active pledge past deadline w/o sign. to failed' do
    pledge = pledges(:active)
    InitiatorMailer.expect_chain(:pledge_failed, :deliver_later)
    SignerMailer.expect_chain(:pledge_failed, :deliver_later)
    worker.perform(pledge.id)
    pledge.reload.aasm_state.must_equal 'failed'
  end

  it 'should finish an active pledge past deadline w/ sign. to sucessful' do
    pledge = pledges(:active)
    pledge.update_column :amount, 1
    FactoryGirl.create :signature, pledge: pledge
    InitiatorMailer.expect_chain(:pledge_successful, :deliver_later)
    SignerMailer.expect_chain(:pledge_successful, :deliver_later)
    worker.perform(pledge.id)
    pledge.reload.aasm_state.must_equal 'successful'
  end

  it 'wont finish an active pledge before deadline' do
    before_active = FactoryGirl.create :pledge, :active, deadline: Date.current

    InitiatorMailer.expects(:pledge_failed).never
    SignerMailer.expects(:pledge_failed).never
    InitiatorMailer.expects(:pledge_successful).never
    SignerMailer.expects(:pledge_successful).never

    assert_raises(AASM::InvalidTransition) do
      worker.perform(before_active.id)
    end
    before_active.reload.aasm_state.must_equal 'active'
  end

  it 'wont finish an inactive pledge past deadline' do
    past_but_inactive = FactoryGirl.create :pledge, :failed,
                                           deadline: Date.yesterday

    InitiatorMailer.expects(:pledge_failed).never
    SignerMailer.expects(:pledge_failed).never
    InitiatorMailer.expects(:pledge_successful).never
    SignerMailer.expects(:pledge_successful).never

    assert_raises(AASM::InvalidTransition) do
      worker.perform(past_but_inactive.id)
    end
    past_but_inactive.reload.aasm_state.must_equal 'failed'
  end

end
