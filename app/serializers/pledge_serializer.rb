class PledgeSerializer < ActiveModel::Serializer
  belongs_to :initiator
  attributes :id, :content, :amount, :who, :requirement, :location, :deadline,
             :signatures_count
end
