import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

import PledgeQuestion from './PledgeQuestion'

describe('<PledgeQuestion />', function () {
  it('should render', function () {
    const wrapper = shallow(<PledgeQuestion>Um welche Laptops handelt es sich?</PledgeQuestion>)

    wrapper.html().should.equal(
      '<dt>Um welche Laptops handelt es sich?</dt>'
    )
  })
})
