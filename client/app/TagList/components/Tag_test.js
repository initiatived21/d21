import React       from 'react'
import { shallow } from 'enzyme'
import Tag from './Tag'

describe('<Tag />', function () {
  const props = {
    name: 'family',
    color: '3c5d1d'
  }

  it('should render', function () {
    const wrapper = shallow(<Tag {...props} />)

    wrapper.hasClass('c-tag-list__item').should.be.true
  })
})
