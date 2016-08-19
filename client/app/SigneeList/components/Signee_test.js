import React from 'react'
import I18n from 'i18n-js'
import { shallow } from 'enzyme'

import Signee from './Signee'

describe('<Signee />', function () {
  const props = {
    id: 1,
    name: 'Max Mustermann',
    img_src: '/images/max_mustermann.jpg',
    comment: 'Tolle Initiative!',
    created_at: '2016-09-01T12:05:22.964Z'
  }

  it('should render', function () {
    I18n.locale = 'de'

    const wrapper = shallow(<Signee {...props} />)

    wrapper.find('li').length.should.equal(1)
    wrapper.find('img').length.should.equal(1)
  })

  it('should not display the name if anonymous is set', function() {
    const wrapper = shallow(<Signee {...props} anonymous />)

    wrapper.text().should.not.match(/Max Mustermann/)
  })
})
