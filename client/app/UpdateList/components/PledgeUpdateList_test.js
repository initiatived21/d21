import React from 'react'
import { shallow } from 'enzyme'

import PledgeUpdateList from './PledgeUpdateList'

describe('<PledgeUpdateList />', function () {
  const props = {
    updates: [
      {
        content: 'Die Laptops wurden bestellt.',
        created_at: '2016-09-01T11:05:22.964Z'
      },
      {
        content: 'Die Laptops sind auf dem Weg.',
        created_at: '2016-09-01T12:05:22.964Z'
      }
    ]
  }

  it('should render', function () {
    const wrapper = shallow(<PledgeUpdateList {...props} />)

    wrapper.find('ol').length.should.equal(1)
  })

  it('should render a text if updates are empty', function () {
    const wrapper = shallow(<PledgeUpdateList updates={[]} />)

    wrapper.find('p').length.should.equal(1)
  })
})
