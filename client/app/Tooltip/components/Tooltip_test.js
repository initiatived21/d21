import React     from 'react'
import { shallow, mount } from 'enzyme'

import Tooltip from './Tooltip'

describe('<Tooltip />', function () {
  it('should render', function () {
    const wrapper = mount(<Tooltip>foo</Tooltip>)

    wrapper.find('aside').length.should.equal(1)
    wrapper.text().should.equal('foo')
  })

  it('should "pass through" its className prop', function() {
    const wrapper = mount(<Tooltip className="dummy">foo</Tooltip>)

    wrapper.find('aside').hasClass('dummy').should.be.true
  })
})
