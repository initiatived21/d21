import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import SigneeList from './SigneeList'

describe('<SigneeList />', function () {
  it('should render', function () {
    const wrapper = shallow(<SigneeList pledge_id={1} signatures={[]} />)

    wrapper.find('ol').length.should.equal(1)
  })
})
