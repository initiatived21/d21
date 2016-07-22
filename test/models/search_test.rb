require_relative '../test_helper'

describe Search do
  let(:search) { Search.new({}) }
  subject { search }

  describe 'methods' do
    describe '#parse_range' do
      it 'must return default values when there is no range' do
        subject.send(:parse_range, nil).must_equal [0, 1]
      end

      it 'must return the parsed range parameters' do
        subject.send(:parse_range, '3..5').must_equal [3, 3]
      end
    end
  end
end
