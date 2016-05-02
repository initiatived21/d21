require_relative '../test_helper'

describe PledgeSerializer do
  let(:pledge) { pledges(:active) }
  it 'must correctly render attributes' do
    json = ActiveModelSerializers::SerializableResource.new(pledge).as_json
    json.must_equal(
      id: 1, content: 'activeContent', amount: 10, who: 'activeWho',
      requirement: 'activeRequirement', location: nil,
      deadline: Date.new(2000), signatures_count: 0, aasm_state: 'active',
      initiator: {
        id: 1, name: 'pledgerName', organization: 'pledgerOrganiztion'
      }
    )
  end
end
