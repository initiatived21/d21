require_relative '../test_helper'

describe ReactHelper do
  describe '#settings(props, params)' do
    it 'must enable prerendering without special params' do
      ReactHelper.settings({}, {}).must_equal(props: {}, prerender: true)
    end

    it 'must disable prerendering with the noprerender params' do
      ReactHelper.settings({}, noprerender: 1)
                 .must_equal(props: {}, prerender: false)
    end

    it 'must include the given props' do
      ReactHelper.settings({ a: 'b' }, {})
                 .must_equal(props: { a: 'b' }, prerender: true)
    end
  end
end
