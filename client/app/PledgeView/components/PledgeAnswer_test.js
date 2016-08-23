import React from 'react'
import { shallow } from 'enzyme'

import CommentAvatar from '../../Avatar/components/CommentAvatar'
import PledgeAnswer from './PledgeAnswer'

describe('<PledgeAnswer />', function () {
  it('should render', function () {
    const wrapper = shallow(<PledgeAnswer>Es sind Lenovo-Laptops.</PledgeAnswer>)

    wrapper.find(CommentAvatar).length.should.equal(1)
    wrapper.find('p').length.should.equal(1)
  })
})
