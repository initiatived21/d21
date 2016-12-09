class Comment < ApplicationRecord
  include AASM

  # Associations
  belongs_to :pledge, inverse_of: :comments

  # State Machine
  aasm do
    state :initialized, initial: true
    state :approved    # Question was approved by an administrator
    state :disapproved # Question was disapproved by an administrator

    event :approve, success: :notify_initiator do
      transitions from: :initialized, to: :approved
    end

    event :disapprove do
      transitions from: :initialized, to: :disapproved
    end
  end

  def notify_initiator
    InitiatorMailer.new_question(id).deliver_later
  end
end
