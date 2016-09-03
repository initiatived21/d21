require_relative '../test_helper'

describe SignatureSerializer do
  let(:signature) { signatures(:basic) }
  it 'must correctly render attributes' do
    json = ActiveModelSerializers::SerializableResource.new(signature).as_json
    json.must_equal(
      id: 1,
      organization: 'Monsanto',
      confirmed: false,
      pledge_id: 1,
      contact_person: true,
      created_at: signature.created_at,
      anonymous: false,
      reason: 'basicSignatureReason',
      name: 'basicSignatureName',
      email: 'basicSignatureEmail@example.org'
    )
  end
end
