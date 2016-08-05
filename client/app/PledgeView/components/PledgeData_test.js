import React       from 'react'
import { shallow } from 'enzyme'
import PledgeData from './PledgeData'

describe('<PledgeData />', function () {
  const props = {
    initiator: 'Max Mustermann',
    deadline: '2016-09-30',
    amount: 10,
    signatures_count: 5
  }

  it('should render', function () {
    const wrapper = shallow(<PledgeData {...props} />)
  })
})
