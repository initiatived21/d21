class Pledge < ApplicationRecord
  # Associations
  belongs_to :initiator, class_name: 'User', foreign_key: 'user_id',
                         inverse_of: :initiated_pledges

  # State Machine
  include AASM
  aasm do
    ### States ###

    state :initialized, initial: true
    state :requested # User wants to activate pledge and requests admin approval
    state :active # Admin has approved, pledge is public

    state :successful # Pledge is past deadline and has sufficient signatures
    state :failed # Pledge is past deadline but did not receive sufficient signatures

    state :disapproved # Admin did not approve requested pledge

    ### Transitions ###

    event :request do
      transitions from: :initialized, to: :requested
    end

    event :activate do
      transitions from: :requested, to: :active
    end

    event :disapprove do
      transitions from: :requested, to: :disapproved
    end

    event :finish, guard: :past_deadline? do
      transitions from: :active, to: :successful,
                  guard: :sufficient_signatures?
      transitions from: :active, to: :failed
    end
  end

  def past_deadline?
    deadline <= Time.zone.now.to_date
  end

  def sufficient_signatures?
    signatures_count >= amount
  end

  # TODO: Just for testing purposes after_commit! Should be after activate:
  after_commit { PledgeRelayJob.perform_later(self) }

  # Search
  include PgSearch
  multisearchable against: [:content, :requirement, :description, :location]
end
