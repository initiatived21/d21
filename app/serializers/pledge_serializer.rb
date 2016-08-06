class PledgeSerializer < ActiveModel::Serializer
  belongs_to :initiator
  attributes :id, :title, :content, :amount, :who, :requirement, :location,
             :deadline, :description, :signatures_count, :aasm_state, :created_at, :user_id

  attribute :image do
    { url: object.image.url }
  end
end
