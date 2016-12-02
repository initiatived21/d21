require_relative '../test_helper'

describe PledgesHelper do
  let(:pledge) { mock() }

  describe '#card_available?' do
    it 'should return false if pledge has no card for de locale' do
      pledge.stubs(:card_de).returns(nil)
      refute card_available?(pledge, :de)
    end

    it 'should return true if pledge has card for de locale' do
      pledge.stubs(:card_de).returns('/dummy/path')
      assert card_available?(pledge, :de)
    end

    it 'should return false if pledge has no card for en locale' do
      pledge.stubs(:card_en).returns(nil)
      refute card_available?(pledge, :en)
    end

    it 'should return true if pledge has card for en locale' do
      pledge.stubs(:card_en).returns('/dummy/path')
      assert card_available?(pledge, :en)
    end
  end
end
