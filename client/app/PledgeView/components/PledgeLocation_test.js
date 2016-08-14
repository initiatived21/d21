import React       from 'react'
import { shallow } from 'enzyme'
import PledgeLocation from './PledgeLocation'

describe('<PledgeLocation />', function () {
  it('should render', function () {
    const wrapper = shallow(<PledgeLocation>Berlin</PledgeLocation>)

    wrapper.hasClass('c-pledge__location').should.be.true
    wrapper.text().should.match(/Berlin$/)
  })
})
