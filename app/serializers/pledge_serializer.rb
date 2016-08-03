class PledgeSerializer < ActiveModel::Serializer
  belongs_to :initiator
  attributes :id, :title, :content, :amount, :who, :requirement, :location,
             :deadline, :signatures_count, :aasm_state, :created_at

  attribute :image do
    { url: object.image.url }
  end
end
