require_relative '../test_helper'

describe Search do
  let(:search) { Search.new({}) }
  subject { search }

  describe 'methods' do
    describe '#parse_range' do
      it 'must return default values when there is no range' do
        subject.send(:parse_range, nil).must_equal [0, 12]
      end

      it 'must return the parsed range parameters' do
        subject.send(:parse_range, '3..5').must_equal [3, 3]
      end
    end

    describe '#set_filter' do
      it 'must return the filter param is available' do
        subject.send(:set_filter, 'successful')
        subject.filter.must_equal('successful')
      end

      it 'must not return the filter param if filter is not allowed' do
        subject.send(:set_filter, 'initialized')
        subject.filter.must_equal(nil)
      end

      it 'must return nil if no filter param is given' do
        subject.send(:set_filter, nil)
        subject.filter.must_equal(nil)
      end
    end
  end
end
