import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

import PledgeUpdateList from './PledgeUpdateList'

describe('<PledgeUpdateList />', function () {
  it('should render', function () {
    const wrapper = shallow(<PledgeUpdateList updates={[]} />)

    wrapper.find('ol').length.should.equal(1)
  })
})
