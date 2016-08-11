import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

import CommentAvatar from '../../Avatar/components/CommentAvatar'
import PledgeQuestion from './PledgeQuestion'

describe('<PledgeQuestion />', function () {
  it('should render', function () {
    const wrapper = shallow(<PledgeQuestion>Um welche Laptops handelt es sich?</PledgeQuestion>)

    wrapper.find(CommentAvatar).length.should.equal(1)
    wrapper.find('p').length.should.equal(1)
  })
})
