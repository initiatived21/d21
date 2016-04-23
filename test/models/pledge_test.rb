require_relative '../test_helper'

describe Pledge do
  it 'should be valid' do
    Pledge.new.valid?.must_equal true
  end
end
