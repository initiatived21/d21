require_relative '../test_helper'

describe PledgeSerializer do
  let(:pledge) { pledges(:active) }
  it 'must correctly render attributes' do
    json = ActiveModelSerializers::SerializableResource.new(pledge).as_json
    json.must_equal(
      id: 1,
      title: 'activeTitle',
      content: 'activeContent',
      amount: 10,
      who: 'activeWho',
      requirement: 'activeRequirement',
      location: nil,
      deadline: Date.new(2000),
      description: 'activeDescription',
      signatures_count: 0,
      aasm_state: 'active',
      created_at: pledge.created_at,
      image: {url: nil},
      user_id: 1,
      initiator: {
        id: 1,
        name: 'pledgerName',
        organization: 'pledgerOrganiztion',
        confirmed: true,
        avatar: {
          url: nil
        }
      }
    )
  end
end
