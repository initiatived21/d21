require_relative '../test_helper'

describe TagSerializer do
  let(:tag) { FactoryGirl.create(:tag) }

  it 'must correctly render attributes for a regular signature' do
    json = ActiveModelSerializers::SerializableResource.new(tag).as_json
    json.must_equal(
      id: 1,
      name: tag.name,
      color: '000000',
    )
  end
end
