class Pledge < ApplicationRecord
  # Associations
  belongs_to :initiator, class_name: 'User', foreign_key: 'user_id',
                         inverse_of: :initiated_pledges
  has_many :pledges_tags, inverse_of: :pledge, dependent: :destroy
  has_many :tags, through: :pledges_tags, inverse_of: :pledges
  has_many :signatures, inverse_of: :pledge, dependent: :destroy
  has_many :updates, inverse_of: :pledge, dependent: :destroy
  has_many :comments, inverse_of: :pledge, dependent: :destroy

  # State Machine
  include AASM
  aasm do
    ### States ###

    state :initialized, initial: true
    state :requested # User wants to activate pledge and requests admin approval
    state :active # Admin has approved, pledge is public

    state :successful, # Pledge is past deadline and has sufficient signatures
          after_enter: :successful_enter_side_effects!
    state :failed, # Pledge is past deadline but did not receive sufficient signatures
          after_enter: :failed_enter_side_effects!

    state :disapproved # Admin did not approve requested pledge or changed their mind

    ### Transitions ###

    event :finalize do
      transitions from: :initialized, to: :requested
    end

    event :activate, success: :after_activate_success do
      transitions from: :requested, to: :active
      transitions from: :disapproved, to: :active
    end

    event :disapprove do
      transitions from: :requested, to: :disapproved
      transitions from: :active, to: :disapproved
    end

    event :finish, guard: :past_deadline?, after_commit: :after_finish_commit do
      transitions from: :active, to: :successful,
                  guard: :sufficient_signatures?
      transitions from: :active, to: :failed
    end
  end

  def past_deadline?
    deadline < Date.current
  end

  def signatures_count
    signatures.confirmed.count
  end

  def sufficient_signatures?
    signatures_count >= amount
  end

  def after_activate_success
    RenderCardWorker.perform_async(id)
    InitiatorMailer.pledge_was_approved(id).deliver_later

    # Send new pledge over ActionCable
    PledgeRelayJob.perform_later(self)
  end

  def successful_enter_side_effects!
    InitiatorMailer.pledge_successful(id).deliver_later
    MailDelivery.to_multiple(
      SignerMailer, :pledge_successful, signatures.confirmed.pluck(:id), id
    )
  end

  def failed_enter_side_effects!
    InitiatorMailer.pledge_failed(id).deliver_later
    MailDelivery.to_multiple(
      SignerMailer, :pledge_failed, signatures.confirmed.pluck(:id), id
    )
  end

  def after_finish_commit
    RenderCardWorker.perform_async(id)
  end

  def searchable?
    active? || successful? || failed?
  end

  def pledge_text
    I18n.t('misc.pledge_sentence',
           content: content, amount: amount, who: who, requirement: requirement,
           locale: locale)
  end

  # Search
  include PgSearch
  multisearchable(
    against: [:title, :content, :requirement, :description, :location],
    if: :searchable?
  )

  # CarrierWave Image Uploaders
  mount_base64_uploader :image, PledgeImageUploader, file_name: 'pledge_image'
  mount_uploader :card_de, CardUploader, file_name: 'pledge_card_de'
  mount_uploader :card_en, CardUploader, file_name: 'pledge_card_en'
end
