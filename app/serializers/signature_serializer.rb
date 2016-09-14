class SignatureSerializer < ActiveModel::Serializer
  attributes :id, :organization, :confirmed, :pledge_id, :contact_person,
             :created_at, :anonymous, :reason

  attribute :name, if: :may_know_name?
  attribute :email, if: :initiator_of_successful_pledge?

  def may_know_name?
    !object.anonymous? || initiator_of_successful_pledge?
  end

  def initiator_of_successful_pledge?
    pledge_successful? && current_user_is_pledge_initiator?
  end

  def current_user_is_pledge_initiator?
    scope && scope.id == object.pledge.user_id
  end

  def pledge_successful?
    object.pledge.aasm_state == 'successful'
  end
end
