require_relative '../test_helper'

describe ReactHelper do
  describe '#settings(params)' do
    it 'should enable prerendering without special params' do
      ReactHelper.settings({}).must_equal(prerender: true)
    end

    it 'should disable prerendering with the noprerender params' do
      ReactHelper.settings(noprerender: 1).must_equal(prerender: false)
    end
  end
end
