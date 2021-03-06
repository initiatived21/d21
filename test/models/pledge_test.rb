require_relative '../test_helper'

describe Pledge do
  let(:pledge) { Pledge.new }
  subject { pledge }

  describe 'associations' do
    it { subject.must belong_to :initiator }
  end

  describe 'aasm' do
    it 'must have all states defined' do
      subject.aasm.states.map(&:to_s).must_equal(
        %w(initialized requested active successful failed disapproved)
      )
    end

    it 'must initially be in the state "initialized"' do
      pledge.aasm.current_state.must_equal :initialized
    end

    describe 'finalize event' do
      let(:event) { pledge.aasm.events.find { |e| e.name == :finalize } }

      it 'must only have one transition' do
        event.transitions.size.must_equal 1
      end

      it 'must only transition from initialized' do
        event.transitions_from_state?(:initialized).must_equal true
        event.transitions_from_state?(:requested).must_equal false
        event.transitions_from_state?(:active).must_equal false
        event.transitions_from_state?(:successful).must_equal false
        event.transitions_from_state?(:failed).must_equal false
        event.transitions_from_state?(:disapproved).must_equal false
      end

      it 'must only transition to requested' do
        event.transitions_to_state?(:initialized).must_equal false
        event.transitions_to_state?(:requested).must_equal true
        event.transitions_to_state?(:active).must_equal false
        event.transitions_to_state?(:successful).must_equal false
        event.transitions_to_state?(:failed).must_equal false
        event.transitions_to_state?(:disapproved).must_equal false
      end
    end

    describe 'activate event' do
      let(:pledge) { Pledge.new(aasm_state: :requested) }
      let(:event) { pledge.aasm.events.find { |e| e.name == :activate } }

      it 'must only have two transitions' do
        event.transitions.size.must_equal 2
      end

      it 'must only transition from requested' do
        event.transitions_from_state?(:initialized).must_equal false
        event.transitions_from_state?(:requested).must_equal true
        event.transitions_from_state?(:active).must_equal false
        event.transitions_from_state?(:successful).must_equal false
        event.transitions_from_state?(:failed).must_equal false
        event.transitions_from_state?(:disapproved).must_equal true
      end

      it 'must only transition to active' do
        event.transitions_to_state?(:initialized).must_equal false
        event.transitions_to_state?(:requested).must_equal false
        event.transitions_to_state?(:active).must_equal true
        event.transitions_to_state?(:successful).must_equal false
        event.transitions_to_state?(:failed).must_equal false
        event.transitions_to_state?(:disapproved).must_equal false
      end
    end

    describe 'disapprove event' do
      let(:pledge) { Pledge.new(aasm_state: :requested) }
      let(:event) { pledge.aasm.events.find { |e| e.name == :disapprove } }

      it 'must have two transition' do
        event.transitions.size.must_equal 2
      end

      it 'must transition from requested and active' do
        event.transitions_from_state?(:initialized).must_equal false
        event.transitions_from_state?(:requested).must_equal true
        event.transitions_from_state?(:active).must_equal true
        event.transitions_from_state?(:successful).must_equal false
        event.transitions_from_state?(:failed).must_equal false
        event.transitions_from_state?(:disapproved).must_equal false
      end

      it 'must only transition to disapproved' do
        event.transitions_to_state?(:initialized).must_equal false
        event.transitions_to_state?(:requested).must_equal false
        event.transitions_to_state?(:active).must_equal false
        event.transitions_to_state?(:successful).must_equal false
        event.transitions_to_state?(:failed).must_equal false
        event.transitions_to_state?(:disapproved).must_equal true
      end
    end

    describe 'finish event' do
      let(:pledge) { Pledge.new(aasm_state: :active) }
      let(:event) { pledge.aasm.events.find { |e| e.name == :finish } }

      it 'must only have two transition' do
        event.transitions.size.must_equal 2
      end

      it 'must only transition from active' do
        event.transitions_from_state?(:initialized).must_equal false
        event.transitions_from_state?(:requested).must_equal false
        event.transitions_from_state?(:active).must_equal true
        event.transitions_from_state?(:successful).must_equal false
        event.transitions_from_state?(:failed).must_equal false
        event.transitions_from_state?(:disapproved).must_equal false
      end

      it 'must only transition to successful or failed' do
        event.transitions_to_state?(:initialized).must_equal false
        event.transitions_to_state?(:requested).must_equal false
        event.transitions_to_state?(:active).must_equal false
        event.transitions_to_state?(:successful).must_equal true
        event.transitions_to_state?(:failed).must_equal true
        event.transitions_to_state?(:disapproved).must_equal false
      end

      it 'must finish an unsuccessful pledge to `failed`' do
        pledge = pledges(:active)
        pledge.update_columns amount: 999, deadline: Date.current - 1.day
        pledge.finish!
        pledge.failed?.must_equal true
        pledge.successful?.must_equal false
      end

      it 'must finish a successful pledge to `successful`' do
        pledge = pledges(:active)
        pledge.update_columns amount: 1, deadline: Date.current - 1.day
        pledge.finish!
        pledge.failed?.must_equal false
        pledge.successful?.must_equal true
      end
    end

    describe 'when active' do
      let(:pledge) { Pledge.new(aasm_state: :active) }

      it 'wont be able to finish before deadline' do
        pledge.stubs(:past_deadline?).returns(false)
        pledge.may_finish?.must_equal false
      end

      it 'must be able to finish after deadline but checks suffic. sign.' do
        pledge.stubs(:past_deadline?).returns(true)
        pledge.expects(:sufficient_signatures?)
        pledge.may_finish?.must_equal true
      end

      it 'transitions to successful with sufficient signaures' do
        pledge.stubs(:past_deadline?).returns(true)
        pledge.stubs(:sufficient_signatures?).returns(true)
        pledge.finish.must_equal true
        pledge.aasm.current_state.must_equal :successful
      end

      it 'transitions to failed with insufficient signaures' do
        pledge.stubs(:past_deadline?).returns(true)
        pledge.stubs(:sufficient_signatures?).returns(false)
        pledge.finish.must_equal true
        pledge.aasm.current_state.must_equal :failed
      end
    end

    describe 'guards' do
      describe '#past_deadline?' do
        it 'should be true when deadline is before current date' do
          pledge.deadline = Time.zone.now.to_date - 1.day
          pledge.past_deadline?.must_equal true
        end

        it 'should be false when deadline is exactly current date' do
          pledge.deadline = Time.zone.now.to_date
          pledge.past_deadline?.must_equal false
        end

        it 'should be false when deadline is after current date' do
          pledge.deadline = Time.zone.now.to_date + 1.day
          pledge.past_deadline?.must_equal false
        end
      end

      describe '#sufficient_signatures?' do
        let(:pledge) { Pledge.new(amount: 2) }

        it 'should be true when signature count is greater than amount' do
          pledge.stubs(:signatures_count).returns(3)
          pledge.sufficient_signatures?.must_equal true
        end

        it 'should be true when signature count is exactly amount' do
          pledge.stubs(:signatures_count).returns(2)
          pledge.sufficient_signatures?.must_equal true
        end

        it 'should be false when signature count is lower than amount' do
          pledge.stubs(:signatures_count).returns(1)
          pledge.sufficient_signatures?.must_equal false
        end
      end

      describe '#signatures_count' do
        it 'should only count confirmed signatures' do
          signature = FactoryGirl.create(:signature, :unconfirmed)
          pledge = signature.pledge
          pledge.signatures << signatures(:basic)
          pledge.signatures_count.must_equal 1
          pledge.signatures.count.must_equal 2
        end
      end
    end

    describe 'callbacks' do
      describe '#after_active_success' do
        it 'should render card and send mail to initiator' do
          stubbed_pledge = FactoryGirl.build_stubbed(:pledge)
          InitiatorMailer.expect_chain(:pledge_was_approved, :deliver_later)
          RenderCardWorker.expects(:perform_async).with(stubbed_pledge.id)
          stubbed_pledge.after_activate_success
        end
      end

      describe '#after_finish_commit' do
        it 'should render card' do
          stubbed_pledge = FactoryGirl.build_stubbed(:pledge)
          RenderCardWorker.expects(:perform_async).with(stubbed_pledge.id)
          stubbed_pledge.after_finish_commit
        end
      end
    end
  end

  describe 'methods' do
    describe '#pledge_text' do
      it 'should return the correct pledge text' do
        pledge = FactoryGirl.build(:pledge, content: 'etwas Gutes zu tun',
                                            amount: 10,
                                            who: 'andere Leute',
                                            requirement: 'uns dabei helfen',
                                            locale: 'de')
        pledge.pledge_text.must_equal(
          'Wir versprechen, etwas Gutes zu tun, wenn 10 andere Leute uns dabei helfen.'
        )
      end

      it 'should return the correct pledge text for English pledges' do
        pledge = FactoryGirl.build(:pledge, content: 'do something good',
                                            amount: 10,
                                            who: 'other people',
                                            requirement: 'help us',
                                            locale: 'en')
        pledge.pledge_text.must_equal(
          'We pledge to do something good if 10 other people help us.'
        )
      end
    end
  end
end
