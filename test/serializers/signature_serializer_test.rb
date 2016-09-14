require_relative '../test_helper'

describe SignatureSerializer do
  let(:signature) { signatures(:basic) }
  it 'must correctly render attributes for a regular signature' do
    json = ActiveModelSerializers::SerializableResource.new(signature).as_json
    json.must_equal(
      id: 1,
      organization: 'Monsanto',
      confirmed: true,
      pledge_id: 1,
      contact_person: true,
      created_at: signature.created_at,
      anonymous: false,
      reason: 'basicSignatureReason',
      name: 'basicSignatureName',
    )
    json[:email].must_equal nil
  end

  it 'must not render a name for an anonymous signature' do
    signature.anonymous = true
    json = ActiveModelSerializers::SerializableResource.new(signature).as_json
    json[:name].must_equal nil
  end

  it 'must render the name and email for an anonymous signature when the '\
     'viewing user is the initiator and the associated pledge is successful' do
    signature.anonymous = true
    signature.pledge.aasm_state = 'successful'
    json = ActiveModelSerializers::SerializableResource.new(
      signature, scope: signature.pledge.initiator
    ).as_json
    json[:name].must_equal 'basicSignatureName'
    json[:email].must_equal 'basicSignatureEmail@example.org'
  end

  it 'wont render the name or email for an anonymous signature when pledge is'\
     ' not successful' do
    signature.anonymous = true
    signature.pledge.aasm_state = 'failed'
    json = ActiveModelSerializers::SerializableResource.new(
      signature, scope: signature.pledge.initiator
    ).as_json
    json[:name].must_equal nil
    json[:email].must_equal nil
  end

  it 'wont render the name or email for an anonymous signature when pledge is'\
     ' successful but the user is not the initiator' do
    signature.anonymous = true
    signature.pledge.aasm_state = 'successful'
    json = ActiveModelSerializers::SerializableResource.new(
      signature, scope: User.new
    ).as_json
    json[:name].must_equal nil
    json[:email].must_equal nil
  end
end
