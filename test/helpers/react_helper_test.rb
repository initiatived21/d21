require_relative '../test_helper'

describe ReactHelper do
  describe '#settings(props, params)' do
    it 'must enable prerendering without special params' do
      ReactHelper.settings({}, {}).must_equal(props: { locale: :de },
                                              prerender: true,
                                              html_options: {})
    end

    it 'must disable prerendering with the noprerender params' do
      ReactHelper.settings({}, noprerender: 1)
                 .must_equal(
                   props: { locale: :de }, prerender: false, html_options: {}
                 )
    end

    it 'must include the given props' do
      ReactHelper.settings({ a: 'b' }, {})
                 .must_equal(props: { a: 'b', locale: :de }, prerender: true,
                             html_options: {})
    end

    it 'must include html options' do
      ReactHelper.settings({ a: 'b' }, {}, class: 'dummy')
                 .must_equal(props: { a: 'b', locale: :de }, prerender: true,
                             html_options: { class: 'dummy' })
    end
  end
end
