require_relative '../test_helper'

describe Comment do
  let(:comment) { Comment.new }
  subject { comment }

  describe 'associations' do
    it { subject.must belong_to :pledge }
  end

  describe 'aasm' do
    it 'must have all states defined' do
      subject.aasm.states.map(&:to_s).must_equal(
        %w(initialized approved disapproved)
      )
    end

    it 'must initially be in the state "initialized"' do
      subject.aasm.current_state.must_equal :initialized
    end

    describe 'approve event' do
      let(:event) { subject.aasm.events.find { |e| e.name == :approve } }

      it 'must only have one transition' do
        event.transitions.size.must_equal 1
      end

      it 'must only transition from initialized' do
        event.transitions_from_state?(:initialized).must_equal true
        event.transitions_from_state?(:approved).must_equal false
        event.transitions_from_state?(:disapproved).must_equal false
      end

      it 'must only transition to approved' do
        event.transitions_to_state?(:initialized).must_equal false
        event.transitions_to_state?(:approved).must_equal true
        event.transitions_to_state?(:disapproved).must_equal false
      end
    end

    describe 'disapprove event' do
      let(:event) { subject.aasm.events.find { |e| e.name == :disapprove } }

      it 'must only have one transition' do
        event.transitions.size.must_equal 1
      end

      it 'must only transition from initialized' do
        event.transitions_from_state?(:initialized).must_equal true
        event.transitions_from_state?(:approved).must_equal false
        event.transitions_from_state?(:disapproved).must_equal false
      end

      it 'must only transition to disapproved' do
        event.transitions_to_state?(:initialized).must_equal false
        event.transitions_to_state?(:approved).must_equal false
        event.transitions_to_state?(:disapproved).must_equal true
      end
    end
  end

  describe 'callbacks' do
    describe '#notify_initiator' do
      it 'should notify the initiator by email' do
        InitiatorMailer.expect_chain(:new_question, :deliver_later)
        comment.notify_initiator
      end
    end
  end
end
