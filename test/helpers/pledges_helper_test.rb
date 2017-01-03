require_relative '../test_helper'

describe PledgesHelper do
  let(:pledge) { mock() }

  def request
    object = mock()
    object.stubs(:base_url).returns('dummy_base_url')
    object
  end

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

  describe '#card_image_url' do
    it 'should return url with cache-busting query string for de locale' do
      pledge.stubs(:card_de).returns('/dummy/path')
      assert_match(/^dummy_base_url\/dummy\/path\?v=\d+$/,
        card_image_url(pledge, :de))
    end
  end
end
