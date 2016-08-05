import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

import PledgeAnswer from './PledgeAnswer'

describe('<PledgeAnswer />', function () {
  it('should render', function () {
    const wrapper = shallow(<PledgeAnswer>Es sind Lenovo-Laptops.</PledgeAnswer>)

    wrapper.html().should.equal(
      '<dd>Es sind Lenovo-Laptops.</dd>'
    )
  })
})
