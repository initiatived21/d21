import React       from 'react'
import { shallow } from 'enzyme'
import PledgeImage from './PledgeImage'

describe('<PledgeImage />', function () {
  const props = {
    src: '/images/5000_laptops.png'
  }

  it('should render', function () {
    const wrapper = shallow(<PledgeImage {...props} />)

    wrapper.find('img').length.should.equal(1)
  })
})
